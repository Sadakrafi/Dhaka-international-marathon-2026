import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        {/* 1. Top Badge */}
        <div className={styles.badge}>
          <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" />
          </svg>
          Organized by Bangladesh Army
        </div>

        {/* 2. Main Heading */}
        <h1 className={styles.heading}>
          Dhaka International
          <br />
          Marathon <span className={styles.year}>2026</span>
        </h1>

        {/* 3. Subtitle */}
        <p className={styles.subtitle}>
          Run for Unity, Run for Humanity. Together, we run for a stronger tomorrow,
          for peace, hope, and a better world for everyone.
        </p>

        {/* 4. Call to Action Buttons */}
        <div className={styles.buttonGroup}>
          
          <button className={styles.btnSolid}>
            Registration Now
            <span className={styles.iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
