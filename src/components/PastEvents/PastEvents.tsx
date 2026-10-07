import React from 'react';
import styles from './PastEvents.module.css';

// Import the 6 provided images
import event1 from '../../assets/past-event-1.jpg';
import event2 from '../../assets/past-event-2.jpg';
import event3 from '../../assets/past-event-3.jpg';
import event4 from '../../assets/past-event-4.jpg';
import event5 from '../../assets/past-event-5.jpg';
import event6 from '../../assets/past-event-6.jpg';

export function PastEvents() {
  const events = [
    { id: 1, image: event1 },
    { id: 2, image: event2 },
    { id: 3, image: event3 },
    { id: 4, image: event4 },
    { id: 5, image: event5 },
    { id: 6, image: event6 },
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
            <span className={styles.viewAllText}>View all</span>
            <div className={styles.viewAllBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
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
              <button className={styles.iconBtn} aria-label="View Event">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
