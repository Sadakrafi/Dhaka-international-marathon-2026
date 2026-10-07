import styles from './UpcomingEvents.module.css'

import ticketIcon from '../../assets/ticket-icon.png'
import event1 from '../../assets/event-1.jpg'
import event2 from '../../assets/event-2.jpg'
import event3 from '../../assets/event-3.jpg'
import event4 from '../../assets/event-4.jpg' 

export function UpcomingEvents() {
  const events = [
    { id: 1, image: event1, price: '৳ 00', title: 'Marathon (42.2 KM)', dateDay: 'Thu', dateNum: '15', dateMon: 'Oct' },
    { id: 2, image: event2, price: '৳ 00', title: 'Marathon (42.2 KM)', dateDay: 'Thu', dateNum: '15', dateMon: 'Oct' },
    { id: 3, image: event3, price: '৳ 00', title: 'Marathon (42.2 KM)', dateDay: 'Thu', dateNum: '15', dateMon: 'Oct' },
    { id: 4, image: event4, price: '৳ 00', title: 'Marathon (42.2 KM)', dateDay: 'Thu', dateNum: '15', dateMon: 'Oct' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleBlock}>
            <img src={ticketIcon} alt="Ticket Icon" className={styles.ticketIcon} />
            <div className={styles.titleContent}>
              <h2 className={styles.title}>Upcoming events</h2>
              <p className={styles.subtitle}>
                Don't Miss Out—Secure Your Ticket Today Limited seats available Book now to guarantee your spot for an unforgettable experience
              </p>
            </div>
          </div>

          <div className={styles.navArrows}>
            <button className={`${styles.arrowBtn} ${styles.arrowOutline}`} aria-label="Previous events">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className={`${styles.arrowBtn} ${styles.arrowSolid}`} aria-label="Next events">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {events.map((event) => (
            <div key={event.id} className={styles.card} style={{ backgroundImage: `url(${event.image})` }}>
              
              {/* Date Badge */}
              <div className={styles.dateBadge}>
                <div className={styles.dateDay}>{event.dateDay}</div>
                <div className={styles.dateMonth}>
                  <span className={styles.dateNum}>{event.dateNum}</span>
                  {event.dateMon}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className={styles.cardOverlay}></div>

              {/* Content */}
              <div className={styles.cardContent}>
                <span className={styles.price}>{event.price}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                
                <button className={styles.registerBtn}>
                  Register Now
                  <span className={styles.btnIconCircle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
