import styles from '../../pages/Home.module.css'
import siteContent from '../../config/siteContent'

export default function JournalHighlights() {
  const { home } = siteContent

  return (
    <ul className={styles.cbpIgGrid}>
      {home.highlights.map(({ icon, label, href }) => (
        <li key={label}>
          <div className={styles.w3GridEffect}>
            <span className={`cbp-ig-icon fa ${icon} ${styles.cbpIgIcon}`}></span>
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <h4 className={styles.cbpIgTitle}>{label}</h4>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
