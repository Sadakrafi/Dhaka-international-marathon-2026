import React from 'react';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Let's make something<br/>great together.
        </h2>
        <p className={styles.subtitle}>
          Let us know what challenges you are<br/>trying to solve so we can help.
        </p>
        <button className={styles.arrowBtn} aria-label="Let's go">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
