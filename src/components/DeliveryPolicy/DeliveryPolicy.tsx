import styles from './DeliveryPolicy.module.css'

export function DeliveryPolicy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Delivery Policy</h1>
        
        <p className={styles.textBlock}>
          <span className={styles.bold}>Race Kit Collection:</span> We do not offer home delivery for Race Kits (Race Jersey and BIB/Timing Chip). Runners must collect their kits in person from the designated pre-race Expo. Details regarding the Expo date, time, and venue will be communicated via email or SMS.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Standard Delivery Time (If Applicable):</span> For any physical merchandise or promotional items eligible for delivery, the standard delivery time is <span className={styles.bold}>Inside Dhaka - 5 days</span> and <span className={styles.bold}>Outside Dhaka - 10 days</span>.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Finisher Medals:</span> Finisher medals will be awarded exclusively at the finish line to runners who successfully complete the race within the designated cut-off time. Medals will not be delivered elsewhere.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>E-Certificates:</span> Upon the publication of the final race results, official e-certificates will be available for download directly from our website.
        </p>

      </div>
    </section>
  )
}
