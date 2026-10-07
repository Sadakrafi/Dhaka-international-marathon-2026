import { Link } from '@tanstack/react-router'
import styles from './Header.module.css'
import logoImage from '../../assets/logo.png'

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        
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

        {/* Navigation - Horizontal scroll on mobile */}
        <nav className={styles.nav}>
          <Link to="/" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/events" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Events</Link>
          <Link to="/" hash="about-events" className={`${styles.navLink} text-b1`}>About us</Link>
          <Link to="/contact" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Contact us</Link>
          <Link to="/blog" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }}>Blog</Link>
        </nav>

        {/* CTA Button Container */}
        <div className={styles.btnArea}>
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
