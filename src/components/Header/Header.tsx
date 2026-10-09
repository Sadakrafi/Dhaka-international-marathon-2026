import { useState, useSyncExternalStore } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import styles from './Header.module.css'
import logoImage from '../../assets/logo.png'

const ABOUT_HASH = 'about-events'

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

function LoginAction({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a href="#" className={[styles.loginBtn, className].filter(Boolean).join(' ')} onClick={onClick}>
      <span className={styles.loginText}>Login</span>
      <span className={styles.iconCircle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const hydrated = useIsHydrated()
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  // The hash is not part of the request, so SSR treats `/` as Home. After hydration,
  // includeHash takes over and this fallback is removed in the same render.
  const homeActiveBeforeHydration = !hydrated && pathname === '/'

  const closeMenu = () => setMenuOpen(false)

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

        <nav id="site-nav" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link
            to="/"
            className={[styles.navLink, 'text-b1', homeActiveBeforeHydration ? styles.active : ''].filter(Boolean).join(' ')}
            activeProps={{ className: styles.active }}
            activeOptions={{ exact: true, includeHash: true }}
            aria-current={homeActiveBeforeHydration ? 'page' : undefined}
            data-status={homeActiveBeforeHydration ? 'active' : undefined}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link to="/events" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }} onClick={closeMenu}>Events</Link>
          <Link
            to="/"
            hash={ABOUT_HASH}
            className={`${styles.navLink} text-b1`}
            activeProps={{ className: styles.active }}
            activeOptions={{ exact: true, includeHash: true }}
            onClick={closeMenu}
          >
            About us
          </Link>
          <Link to="/contact" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }} onClick={closeMenu}>Contact us</Link>
          <Link to="/blog" className={`${styles.navLink} text-b1`} activeProps={{ className: styles.active }} onClick={closeMenu}>Blog</Link>
          <LoginAction className={styles.loginInMenu} onClick={closeMenu} />
        </nav>

        <div className={styles.btnArea}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            )}
          </button>
          <LoginAction className={styles.loginInHeader} />
        </div>
        
      </header>
    </div>
  )
}
