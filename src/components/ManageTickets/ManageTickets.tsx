import React from 'react';
import styles from './ManageTickets.module.css';

export function ManageTickets() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          
          <div className={styles.header}>
            <h2 className={styles.title}>Manage Your Tickets</h2>
            <p className={styles.subtitle}>
            Purchase, verify, or access your passes,<br/>all in one place.
            </p>
          </div>

          <div className={styles.actionsRow}>
            {/* Button 1: Transfer */}
            <button className={styles.actionBtn}>
              <div className={styles.btnLeft}>
                <div className={styles.iconPlaceholder}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3v4M21 7h-14M7 21v-4M3 17h14"/>
                  </svg>
                </div>
                <div className={styles.btnText}>
                  <span className={styles.btnTitle}>Purchase Ticket</span>
                  <span className={styles.btnSubtitle}>Choose your race category and secure your spot.</span>
                </div>
              </div>
              <div className={styles.arrowRight}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>

            {/* Button 2: Verify */}
            <button className={styles.actionBtn}>
              <div className={styles.btnLeft}>
                <div className={styles.iconPlaceholder}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div className={styles.btnText}>
                  <span className={styles.btnTitle}>Verify pass</span>
                  <span className={styles.btnSubtitle}>Confirm Ticket validity before entry</span>
                </div>
              </div>
              <div className={styles.arrowRight}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>

            {/* Button 3: Secure */}
            <button className={styles.actionBtn}>
              <div className={styles.btnLeft}>
                <div className={styles.iconPlaceholder}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className={styles.btnText}>
                  <span className={styles.btnTitle}>Secure pass</span>
                  <span className={styles.btnSubtitle}>Access your digital passes safely</span>
                </div>
              </div>
              <div className={styles.arrowRight}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
