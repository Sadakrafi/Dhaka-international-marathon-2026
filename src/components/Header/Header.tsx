import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import styles from './Header.module.css'
import logoImage from '../../assets/logo.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={styles.headerWrapper}>
      <header className={`${styles.header} ${isMobileMenuOpen ? styles.open : ''}`}>
        
        <div className={styles.topRow}>
          {/* Logo Container */}
          <div className={styles.logoArea}>
            <div className={styles.logoOval}>
              <img 
                src={logoImage} 
                alt="Dhaka International Marathon Logo" 
                className={styles.logoImage} 
              />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Events</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>About us</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Contact us</Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Blog</Link>
        </nav>

        {/* CTA Button Container */}
        <div className={`${styles.btnArea} ${isMobileMenuOpen ? styles.open : ''}`}>
          <button className={styles.loginBtn}>
            Login
            <span className={styles.iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
        
      </header>
    </div>
  )
}
