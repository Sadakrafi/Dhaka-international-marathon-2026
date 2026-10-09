import styles from './Blog.module.css'
import blog1 from '../../assets/blog-1.jpg'
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg'
import blog4 from '../../assets/blog-4.jpg'
import blog5 from '../../assets/blog-5.jpg'

export function Blog() {
  const posts = [
    {
      id: 1,
      image: blog1,
      title: "Training Tips for Your First Full Marathon",
      date: "OCTOBER 10, 2026",
      excerpt: "Preparing for 42.2 KM is no small feat. Discover our top expert tips to build endurance, avoid injury, and cross the finish line strong.",
    },
    {
      id: 2,
      image: blog2,
      title: "The Importance of Hydration on Race Day",
      date: "SEPTEMBER 28, 2026",
      excerpt: "Water stations are strategically placed along the Purbachal route. Learn how to plan your hydration strategy to maintain peak performance.",
    },
    {
      id: 3,
      image: blog3,
      title: "Meet the Purbachal Course: What to Expect",
      date: "SEPTEMBER 15, 2026",
      excerpt: "Take a virtual tour of the stunning 300 ft road area. We break down the elevation, scenic spots, and where the cheering zones will be.",
    },
    {
      id: 4,
      image: blog4,
      title: "Nutrition Guide: Carbo-Loading Explained",
      date: "AUGUST 30, 2026",
      excerpt: "What should you eat the week before the race? We consult with sports nutritionists to bring you the ultimate pre-race meal plan.",
    },
    {
      id: 5,
      image: blog5,
      title: "Highlights from the 2025 Marathon",
      date: "FEBRUARY 12, 2026",
      excerpt: "Look back at the incredible moments, record-breaking finish times, and the unbreakable spirit of humanity from our last event.",
    },
    {
      id: 6,
      image: blog2,
      title: "Why We Run: Stories from the Community",
      date: "JANUARY 05, 2026",
      excerpt: "Every runner has a reason. Read inspiring stories from veterans, students, and first-timers who run for health, unity, and hope.",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Latest News & Articles</h1>
          <p className={styles.subtitle}>
            Stay updated with the latest announcements, training guides, and inspiring stories from the Dhaka International Marathon community.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <img src={post.image} alt={post.title} className={styles.postImage} />
              <div className={styles.content}>
                <span className={styles.date}>{post.date}</span>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                {/* <a href="#" onClick={(e) => e.preventDefault()} className={styles.readMore}>
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a> */}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
