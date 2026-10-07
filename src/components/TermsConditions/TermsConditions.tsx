import styles from './TermsConditions.module.css'

export function TermsConditions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        
        <p className={styles.textBlock}>
          <span className={styles.bold}>Age Criteria:</span> Participants must strictly meet the age requirements for their selected category (e.g., General Category: 18 years and above; 10K Run: 14 to below 50 years; 10K Veteran: 50 years and above). Anyone not meeting the age criteria must not register.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>BIB Transfer:</span> BIB transfer is strictly forbidden. Anyone found using another runner's BIB before, during, or after the race will be penalized and disqualified.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Single Registration:</span> A runner may only register for one category. Anyone found registering in multiple categories will be disqualified.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>10K First Timers:</span> This category is exclusively for novices participating in an official running event for the first time. Anyone with prior participation in any race, locally or internationally, will be disqualified if substantial proof is found.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Expected Time:</span> Runners must provide accurate information for their "expected time to finish" during registration to assist with accurate race organization.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Health and Safety:</span> Marathon running is a physically demanding activity. Participants register at their own risk and are responsible for assessing their physical fitness before taking part.
        </p>

      </div>
    </section>
  )
}
