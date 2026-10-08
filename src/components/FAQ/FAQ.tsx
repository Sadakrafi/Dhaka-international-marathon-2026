import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "What is the minimum preparation someone should have to take part in a marathon?",
    answer: "Regular running practice, gradually increasing distance, getting enough rest, wearing proper shoes, and warming up before running."
  },
  {
    question: "How do you build stamina safely for a marathon?",
    answer: "Start slow, maintain a consistent running schedule, incorporate interval training, and ensure you're hydrating well."
  },
  {
    question: "What common mistakes do new marathon runners make that you wanna avoid?",
    answer: "Starting too fast, ignoring nutrition during the race, wearing new shoes, and neglecting rest days."
  },
  {
    question: "Third, how should someone pace themselves on race day to avoid burning out too early?",
    answer: "Stick to a consistent target pace, avoid the temptation to speed up early, and use a pacing strategy like negative splits."
  },
  {
    question: "What common mistakes do new marathon runners make that you wanna avoid?",
    answer: "Starting too fast, ignoring nutrition during the race, wearing new shoes, and neglecting rest days."
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
