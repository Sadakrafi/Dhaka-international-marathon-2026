import React, { useState } from 'react';
import styles from './ContactUs.module.css';

export function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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
            <span className={styles.contactDetail}>01333341612</span>
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
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input required type="text" id="name" value={formData.name} onChange={handleChange} className={styles.input} placeholder="John Doe" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input required type="email" id="email" value={formData.email} onChange={handleChange} className={styles.input} placeholder="john@example.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input required type="text" id="subject" value={formData.subject} onChange={handleChange} className={styles.input} placeholder="How can we help you?" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea required id="message" value={formData.message} onChange={handleChange} className={styles.textarea} placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Send Message</button>
            
            {isSubmitted && (
              <div style={{ marginTop: '16px', color: '#0A3C19', fontWeight: '500', backgroundColor: '#E8F0EB', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}
