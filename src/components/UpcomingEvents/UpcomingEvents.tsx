import styles from './UpcomingEvents.module.css'

import ticketIcon from '../../assets/ticket-icon.png'
import event1 from '../../assets/full-marathon.webp'
import event2 from '../../assets/past-gallery-12.webp'
import event3 from '../../assets/past-gallery-9.webp'
import event4 from '../../assets/event-4.jpg' 

export function UpcomingEvents() {
  const events = [
    { id: 1, image: event1, distance: '42K', category: 'Full Marathon' },
    { id: 2, image: event2, distance: '21.1K', category: 'Half Marathon' },
    { id: 3, image: event3, distance: '10K', category: 'General Category' },
    { id: 4, image: event4, distance: '10K', category: 'Veteran Category' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleBlock}>
            <img src={ticketIcon} alt="Ticket Icon" className={styles.ticketIcon} />
            <div className={styles.titleContent}>
              <h2 className={styles.title}>Categories</h2>
              <p className={styles.subtitle}>
                Don't Miss Out-Secure Your Ticket Today Limited seats available Book now to guarantee your spot for an unforgettable experience
              </p>
            </div>
          </div>

          <div className={styles.navArrows}>
            {/* <button className={`${styles.arrowBtn} ${styles.arrowOutline}`} aria-label="Previous events">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button> */}
            {/* <button className={`${styles.arrowBtn} ${styles.arrowSolid}`} aria-label="Next events">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button> */}
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {events.map((event) => (
            <article key={event.id} className={styles.card}>
              <img src={event.image} alt="" className={styles.cardPhoto} />

              <div className={styles.comingSoon}>
                <span className={styles.badgeIcon} aria-hidden="true">
                  <svg className={styles.rays} viewBox="0 0 36 36" fill="none">
                    <path d="M18 2v6M18 28v6M2 18h6M28 18h6M7 7l4.2 4.2M24.8 24.8 29 29M7 29l4.2-4.2M24.8 11.2 29 7" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  <svg className={styles.megaphone} viewBox="0 0 24 24" fill="none">
                    <path d="M4.5 10.2h4.2L16 6.2v11.6l-7.3-4H4.5a1.4 1.4 0 0 1-1.4-1.4v-1a1.4 1.4 0 0 1 1.4-1.2Z" fill="#fff"/>
                    <path d="M8.2 14.6v2.1c0 .9.8 1.7 2 1.7h.4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </span>
                <span>COMING SOON</span>
              </div>

              <div className={styles.cardOverlay} />

              <svg className={styles.wave} viewBox="0 0 800 110" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 58C48 28 92 86 158 54c66-32 112 22 176-8 22-10 42-6 66 12v52H0Z" fill="#0A3218"/>
                <path d="M0 72C58 46 104 98 168 68c64-30 108 18 168-6 20-8 40-4 64 10v28H0Z" fill="#146033"/>
                <path d="M0 52C50 22 96 80 162 48c68-34 114 20 178-10 22-10 40-6 60 14" fill="none" stroke="#E2B423" strokeWidth="3"/>
                <path d="M400 58C448 28 492 86 558 54c66-32 112 22 176-8 22-10 42-6 66 12v52H400Z" fill="#0A3218"/>
                <path d="M400 72C458 46 504 98 568 68c64-30 108 18 168-6 20-8 40-4 64 10v28H400Z" fill="#146033"/>
                <path d="M400 52C450 22 496 80 562 48c68-34 114 20 178-10 22-10 40-6 60 14" fill="none" stroke="#E2B423" strokeWidth="3"/>
              </svg>

              <div className={styles.cardContent}>
                <p className={styles.distance}>{event.distance}</p>
                <h3 className={styles.category}>{event.category}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
