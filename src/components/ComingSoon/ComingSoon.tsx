import styles from './ComingSoon.module.css'

interface ComingSoonProps {
  pageName: string;
}

export function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{pageName}</h1>
      <p className={styles.subtitle}>
        This page is coming soon! We are working hard to bring you the best experience. Stay tuned.
      </p>
    </div>
  )
}
