import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const FORM_RECIPIENT = 'rokykhan002030@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;
const recentSends = new Map<string, number>();

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactUs() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [formData, setFormData] = useState<FormFields>({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMessage('');

    const fields = readFields(formData);
    if (!fields.ok) {
      setErrorMessage(fields.error);
      setStatus('error');
      return;
    }

    if (honey.trim()) {
      setErrorMessage("We couldn't send your message. Please try again.");
      setStatus('error');
      return;
    }

    if (isDuplicate(fields.value)) {
      setErrorMessage('This message was just sent. Please wait a moment before trying again.');
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.value.name,
          email: fields.value.email,
          subject: fields.value.subject,
          message: fields.value.message,
          _subject: fields.value.subject,
          _replyto: fields.value.email,
          _template: 'table',
          _captcha: 'false',
          _url: `${window.location.origin}/contact`,
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !isFormSubmitAcceptance(data)) {
        throw new Error(formSubmitError(data));
      }

      rememberSend(fields.value);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : '';
      const offline = !message || message === 'Failed to fetch' || message.startsWith('NetworkError');
      setErrorMessage(offline ? "We couldn't send your message. Please try again." : message);
      setStatus('error');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Contact Information */}
        <div className={styles.infoPanel}>
          <h1 className={styles.infoTitle}>Get in Touch</h1>
          <p className={styles.infoSubtitle}>
            Have questions about the marathon, registration, or sponsorships? We'd love to hear from you.
          </p>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Dhaka Office</span>
            <span className={styles.contactDetail}>Ka-166, South Badda, Badda, Gulshan -1212.</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+8801333341612" className={styles.phoneLink}>01333341612</a>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactDetail}>info@dhakainternationalmarathon.com</span>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className={styles.formPanel}>
          <h2 className={styles.formTitle}>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.honey} aria-hidden="true">
              <label htmlFor="_honey">Company</label>
              <input
                type="text"
                id="_honey"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input required type="text" id="name" name="name" maxLength={200} value={formData.name} onChange={handleChange} className={styles.input} placeholder="Enter Your Full Name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input required type="email" id="email" name="email" maxLength={200} value={formData.email} onChange={handleChange} className={styles.input} placeholder="john@example.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input required type="text" id="subject" name="subject" maxLength={200} value={formData.subject} onChange={handleChange} className={styles.input} placeholder="How can we help you?" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea required id="message" name="message" maxLength={5000} value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className={styles.statusSuccess} role="status">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className={styles.statusError} role="alert">
                {errorMessage}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}

function readFields(body: FormFields): { ok: true; value: FormFields } | { ok: false; error: string } {
  const name = cleanLine(body.name, 200);
  const email = cleanLine(body.email, 200);
  const subject = cleanLine(body.subject, 200);
  const message = cleanMessage(body.message, 5000);
  if (!name || !email || !subject || !message) {
    return { ok: false, error: 'Enter your name, email, subject, and message.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Enter a valid email address.' };
  }
  return { ok: true, value: { name, email, subject, message } };
}

function cleanLine(value: string, max: number) {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

function cleanMessage(value: string, max: number) {
  return value.replace(/\r\n/g, '\n').trim().slice(0, max);
}

function isDuplicate(fields: FormFields) {
  const sentAt = recentSends.get(sendKey(fields));
  return typeof sentAt === 'number' && Date.now() - sentAt < 20000;
}

function rememberSend(fields: FormFields) {
  recentSends.set(sendKey(fields), Date.now());
  if (recentSends.size > 100) {
    const oldest = recentSends.keys().next().value;
    if (oldest) recentSends.delete(oldest);
  }
}

function sendKey(fields: FormFields) {
  return `${fields.email}\n${fields.subject}\n${fields.message}`;
}

function isFormSubmitAcceptance(data: unknown) {
  if (!data || typeof data !== 'object') return false;
  const record = data as { success?: unknown; message?: unknown };
  const accepted = record.success === true || record.success === 'true';
  if (!accepted) return false;
  return !isActivationMessage(record.message);
}

function formSubmitError(data: unknown) {
  const message = data && typeof data === 'object' && typeof (data as { message?: unknown }).message === 'string'
    ? (data as { message: string }).message.trim()
    : '';
  if (isActivationMessage(message)) {
    return 'This contact form still needs a one-time activation. Open the FormSubmit email in the recipient inbox and click Activate Form, then try again.';
  }
  if (message && message.length <= 300) return message;
  return "We couldn't send your message. Please try again.";
}

function isActivationMessage(message: unknown) {
  return typeof message === 'string' && /activat/i.test(message);
}
