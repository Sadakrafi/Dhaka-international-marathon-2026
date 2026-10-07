import { useState } from 'react'
import styles from './BannerSlider.module.css'
import bannerCenter from '../../assets/banner-center.jpg'
import bannerLeft from '../../assets/banner-left.jpg'
import bannerRight from '../../assets/banner-right.jpg'

export function BannerSlider() {
  const images = [
    { id: 0, src: bannerLeft, alt: 'Army Sports Control Board' },
    { id: 1, src: bannerCenter, alt: 'Dhaka International Marathon Banner' },
    { id: 2, src: bannerRight, alt: 'Bangladesh Table Tennis Federation' },
  ]

  // Start with index 1 (bannerCenter) as the active middle image
  const [activeIndex, setActiveIndex] = useState(1)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getSlideIndex = (offset: number) => {
    return (activeIndex + offset + images.length) % images.length
  }

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        
        {/* Left Peeking Slide */}
        <div 
          className={`${styles.slide} ${styles.sideSlide}`}
          onClick={handlePrev}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={images[getSlideIndex(-1)].src} 
            className={styles.slideImg} 
            alt={images[getSlideIndex(-1)].alt} 
          />
        </div>

        {/* Center Active Slide */}
        <div className={`${styles.slide} ${styles.activeSlide}`}>
          <img 
            src={images[activeIndex].src} 
            className={styles.slideImg} 
            alt={images[activeIndex].alt} 
          />
        </div>

        {/* Right Peeking Slide */}
        <div 
          className={`${styles.slide} ${styles.sideSlide}`}
          onClick={handleNext}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={images[getSlideIndex(1)].src} 
            className={styles.slideImg} 
            alt={images[getSlideIndex(1)].alt} 
          />
        </div>

        {/* Navigation Arrows positioned over the container */}
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`} 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`} 
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {images.map((img, index) => (
          <span 
            key={img.id}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
            onClick={() => setActiveIndex(index)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </section>
  )
}
