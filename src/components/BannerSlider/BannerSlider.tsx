import { useEffect, useState } from 'react'
import styles from './BannerSlider.module.css'
import bannerCenter from '../../assets/banner-center.jpg'
import bannerLeft from '../../assets/banner-left.jpg'
import event1 from '../../assets/past-gallery-1.webp'
import event2 from '../../assets/past-gallery-2.webp'
import event3 from '../../assets/past-gallery-3.webp'
import event4 from '../../assets/past-gallery-4.webp'
import event5 from '../../assets/past-gallery-5.webp'
import event6 from '../../assets/past-gallery-6.webp'
import event7 from '../../assets/past-gallery-7.webp'
import event8 from '../../assets/past-gallery-8.webp'
import event9 from '../../assets/past-gallery-9.webp'
import event10 from '../../assets/past-gallery-10.webp'
import event11 from '../../assets/past-gallery-11.webp'
import event12 from '../../assets/past-gallery-12.webp'
import event13 from '../../assets/past-gallery-13.webp'
import event14 from '../../assets/past-gallery-14.webp'
import event15 from '../../assets/past-gallery-15.webp'

const AUTOPLAY_MS = 5000

const eventPhotos = [
  event1, event2, event3, event4, event5,
  event6, event7, event8, event9, event10,
  event11, event12, event13, event14, event15,
]

export function BannerSlider() {
  const images = [
    { id: 'banner-left', src: bannerLeft, alt: 'Army Sports Control Board' },
    { id: 'banner-center', src: bannerCenter, alt: 'Dhaka International Marathon Banner' },
    ...eventPhotos.map((src, index) => ({
      id: `event-${index + 1}`,
      src,
      alt: `Past event photo ${index + 1}`,
    })),
  ]

  // Start with index 1 (bannerCenter) as the active middle image
  const [activeIndex, setActiveIndex] = useState(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [paused, activeIndex, images.length])

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
    <section
      className={styles.sliderSection}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
