import styles from './AboutUs.module.css'

export function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        
        <p className={styles.textBlock}>
          Welcome to the official page of the Dhaka International Marathon 2026, an inaugural event proudly organized by the Bangladesh Army. This marathon is more than just a race; it is a celebration of health, unity, and resilience, designed to inspire and engage individuals from all walks of life in adopting an active and healthy lifestyle.
        </p>

        <p className={styles.textBlock}>
          Since 2021, the Bangladesh Army has been a trailblazer in organizing large-scale marathon events, leaving an indelible mark on society. Over the years, these events have transformed countless lives, fostering a culture of fitness and positivity while contributing to a sustainable and vibrant future.
        </p>

        <p className={styles.textBlock}>
          The Dhaka International Marathon 2026 represents the culmination of years of expertise, skill, and passion. Under the visionary guidance of the Respected Chief of Army Staff, this race is set to become a landmark event that promotes physical fitness, community involvement, and international camaraderie.
        </p>

        <p className={styles.textBlock}>
          This AIMS (Association of International Marathons and Distance Races) certified event will feature three race categories:
        </p>

        <ul className={styles.list}>
          <li>Full Marathon (42.2 KM)</li>
          <li>Half Marathon (21.1 KM)</li>
          <li>10K Run</li>
          <li>10K Veteran Category</li>
          <li>10K First Timers</li>
        </ul>

        <p className={styles.textBlock}>
          The meticulously planned course is set in the stunning 300 ft road area of Purbachal, featuring a well-connected road network with scenic routes and multiple bridges, offering runners a dynamic and memorable experience.
        </p>

        <p className={styles.textBlock}>
          Join us in this extraordinary journey of endurance and achievement, and let's move towards a healthier, more active future together. Whether you're a student, youth, veteran, or a fitness enthusiast, the Dhaka International Marathon 2026 welcomes you to be part of this historic event.
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Run for Unity. Run for Humanity.</span>
        </p>

        <h2 className={styles.subtitle}>Company & Management Details</h2>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Event Organizer & Management:</span> Bangladesh Army (Army Sports Control Board)
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Registered Address:</span> Bangladesh Army Headquarters, Dhaka Cantonment, Dhaka, Bangladesh
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Trade License No:</span> 03-097531
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Online Registration and Chip Timing Partner:</span><br /><br />
          <span className={styles.bold}>Sports Bangla</span><br /><br />
          Partner Trade License No- 381
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Dhaka Office:</span> Ka-166, South Badda, Badda, Gulshan -1212. Mobile: 01333341612
        </p>

        <p className={styles.textBlock}>
          <span className={styles.bold}>Registered Office Address:</span> Vill: Barail, PO: Salimganj, PS: Nabinagar, Dist: Brahmanbaria
        </p>

      </div>
    </section>
  )
}
