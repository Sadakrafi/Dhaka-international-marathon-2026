import React from 'react';
import styles from './PastEvents.module.css';

import event1 from '../../assets/past-gallery-1.webp';
import event2 from '../../assets/past-gallery-2.webp';
import event3 from '../../assets/past-gallery-3.webp';
import event4 from '../../assets/past-gallery-4.webp';
import event5 from '../../assets/past-gallery-5.webp';
import event6 from '../../assets/past-gallery-6.webp';
import event7 from '../../assets/past-gallery-7.webp';
import event8 from '../../assets/past-gallery-8.webp';
import event9 from '../../assets/past-gallery-9.webp';
import event10 from '../../assets/past-gallery-10.webp';
import event11 from '../../assets/past-gallery-11.webp';
import event12 from '../../assets/past-gallery-12.webp';
import event13 from '../../assets/past-gallery-13.webp';
import event14 from '../../assets/past-gallery-14.webp';
import event15 from '../../assets/past-gallery-15.webp';

export function PastEvents() {
  const events = [
    { id: 1, image: event1 },
    { id: 2, image: event2 },
    { id: 3, image: event3 },
    { id: 4, image: event4 },
    { id: 5, image: event5 },
    { id: 6, image: event6 },
    { id: 7, image: event7 },
    { id: 8, image: event8 },
    { id: 9, image: event9 },
    { id: 10, image: event10 },
    { id: 11, image: event11 },
    { id: 12, image: event12 },
    { id: 13, image: event13 },
    { id: 14, image: event14 },
    { id: 15, image: event15 },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              <span className={styles.titleHighlight}>Some of our</span> past events
            </h2>
            <p className={styles.subtitle}>
              "Relive the Highlights—Where Every Past Event Moment Becomes a Lasting Memory."
            </p>
          </div>
          
          <div className={styles.viewAll}>
            {/* <span className={styles.viewAllText}>View all</span> */}
            {/* <div className={styles.viewAllBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div> */}
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className={styles.grid}>
          {events.map((event) => (
            <div key={event.id} className={styles.card}>
              {/* Image or Placeholder */}
              {event.image ? (
                <img src={event.image} alt={`Past Event ${event.id}`} className={styles.img} />
              ) : (
                <div className={styles.img} style={{ backgroundColor: '#D0DCD5' }} />
              )}
              
              {/* Floating Action Button */}
              {/* <button className={styles.iconBtn} aria-label="View Event">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
