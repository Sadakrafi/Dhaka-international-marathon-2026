import styles from './BannerSlider.module.css'
import bannerCenter from '../../assets/banner-center.jpg'
import bannerLeft from '../../assets/banner-left.jpg'
import bannerRight from '../../assets/banner-right.jpg'

export function BannerSlider() {
  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        
        {/* Left Peeking Slide (2nd img) */}
        <div className={`${styles.slide} ${styles.sideSlide}`}>
          <img src={bannerLeft} className={styles.slideImg} alt="Army Sports Control Board" />
        </div>

        {/* Center Active Slide (1st img) */}
        <div className={`${styles.slide} ${styles.activeSlide}`}>
          <img src={bannerCenter} className={styles.slideImg} alt="Dhaka International Marathon Banner" />
        </div>

        {/* Right Peeking Slide (3rd img) */}
        <div className={`${styles.slide} ${styles.sideSlide}`}>
          <img src={bannerRight} className={styles.slideImg} alt="Bangladesh Table Tennis Federation" />
        </div>

        {/* Navigation Arrows positioned over the container */}
        <button className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <button className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        <span className={`${styles.dot} ${styles.activeDot}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </section>
  )
}
