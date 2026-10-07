import styles from './RefundPolicy.module.css'

export function RefundPolicy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Return and Refund Policy</h1>
        
        <p className={styles.textBlock}>
          <span className={styles.bold}>Strictly Non-Refundable:</span> The registration fee is generally strictly non-refundable. Under normal circumstances, once registered, fees cannot be refunded for inability to participate, or personal reasons.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Standard Timeline for Exception Cases:</span> If a return or refund is exceptionally approved due to payment gateway errors or duplicate transactions, the standard timeline for completing the refund is <span className={styles.bold}>7 to 10 working days</span> after claiming the refund.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Disqualification:</span> If a runner is disqualified before or after the race for providing false information (e.g., incorrect age), registering in multiple categories, or transferring their BIB, no refund will be issued.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>No Category Changes:</span> Once the registration is completed, changing the race category is not permitted.
        </p>

      </div>
    </section>
  )
}
