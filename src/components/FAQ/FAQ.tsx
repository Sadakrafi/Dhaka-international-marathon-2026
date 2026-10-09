import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "How do I register?",
    answer: "Choose your race category on the registration page, verify your mobile number with an OTP, enter your details, then pay online. Once payment is complete, you will see a confirmation page with your personal QR code."
  },
  {
    question: "Why do I need an OTP?",
    answer: "We verify your mobile number before holding a place for you. This helps prevent fake and duplicate registrations."
  },
  {
    question: "How long is my place held while I pay?",
    answer: "Your place is held for 15 minutes after you choose a category. Once you start payment, your place stays reserved and will not be lost halfway through. If you do not pay, the place is released for other runners."
  },
  {
    question: "How do I pay, and is it secure?",
    answer: "Payment is handled by SSLCommerz [available options: card, mobile banking, net banking]. Your card details never reach our servers."
  },
  {
    question: "My money was deducted but I did not receive a confirmation. What should I do?",
    answer: "Pending payments are checked against the payment gateway every 5 minutes. If the session has expired, we keep checking every hour for up to 48 hours. Wait a few minutes, then try the “Find my order” page. If you still cannot find your order, contact support at [support number]."
  },
  {
    question: "I lost my confirmation or QR code. What should I do?",
    answer: "Use the “Find my order” page with your order number and mobile number. You can also sign in to My Account with a password, an email link or a mobile OTP to see your registration and QR code."
  },
  {
    question: "Can I register someone else?",
    answer: "No. Gift registration is not available for this event. The person who will run should register with their own details."
  },
  {
    question: "Are there any promo codes or discounts?",
    answer: "No. There are no promo or discount codes for this event. Category prices are shown on the registration page."
  },
  {
    question: "Can I correct my details after registering?",
    answer: "While registration is open, you can edit your details yourself from My Account. After registration closes, you can submit change requests for 7 days, and the organisers approve them before the details are updated. After that, your details are locked."
  },
  {
    question: "What do I need for race pack collection?",
    answer: "Show your confirmation QR code on your phone. A volunteer will scan it to check you in. Your BIB number will appear on your registration once it is assigned. Pack collection date and location: [to be announced]"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column */}
        <div className={styles.leftCol}>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/>
            </svg>
            Organized by Bangladesh Army
          </div>
          
          <h2 className={styles.title}>
            Frequently asked<br/>questions
          </h2>

          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>Still have a questions?</h3>
            <p className={styles.contactText}>
              Can't find the answer to your question? Send us an email and well get back to you as soon as possible!
            </p>
            <Link to="/contact" className={styles.contactBtn}>Send mail</Link>
          </div>
        </div>

        {/* Right Column (Accordion) */}
        <div className={styles.rightCol}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button 
                  className={styles.faqHeader} 
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestion}>{item.question}</span>
                  <div className={`${styles.iconCircle} ${isOpen ? styles.iconOpen : styles.iconClosed}`}>
                    {isOpen ? (
                      // Arrow UP
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                      </svg>
                    ) : (
                      // Arrow DOWN
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                      </svg>
                    )}
                  </div>
                </button>
                
                <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ''}`}>
                  <div className={styles.faqAnswerInner}>
                    <p className={styles.faqAnswerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
