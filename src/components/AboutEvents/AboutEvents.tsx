import styles from './AboutEvents.module.css'
import aboutImage from '../../assets/about-events-3.jpg'

export function AboutEvents() {
  return (
    <section id="about-events" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>About Events</h2>
          <p className={styles.subtitle}>
            Shared Vision, Real Growth. We collaborate closely, make clear decisions, and deliver
            measurable results together.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.cardTitle}>DHAKA INTERNATIONAL<br/>MARATHON 2025</h3>
            <p className={styles.cardText}>
              Is an inaugural Marathon Race by Bangladesh Army with a view to engage students, youths, veterans and all classes of people in active and healthy lifestyle! Bangladesh Army has been organizing large scale Marathon races since 2021.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <h3 className={styles.cardTitle}>DHAKA INTERNATIONAL<br/>MARATHON 2025</h3>
            <p className={styles.cardText}>
              Over the years, the races organized by this prestigious institution has significantly impacted the society and thousand lives to remain active, positive and agile to drive the society to a sustainable future.
            </p>
          </div>

          {/* Card 3 (Image) */}
          <div className={`${styles.card} ${styles.cardImage} ${styles.cardTall}`}>
            <img src={aboutImage} alt="People shaking hands" className={styles.img} />
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.cardGreen} ${styles.cardTall}`}>
            <p className={styles.cardText}>
              Bangladesh Army is organizing the DHAKA INTERNATIONAL MARATHON for the first time- exploiting it's years long expertise, skill and experience. With the kind directive of Respected Chief of Army Staff, Bangladesh Army, the race is going to be organized with an intention to inspire people and involve them more in the physical fitness domain. The race will be a Full Marathon (42.2 KM), a Half Marathon (21.1 KM) and a 10K run at 300 ft road area, Purbachal.
            </p>
            <button className={styles.floatBtn} aria-label="Learn more about marathon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
