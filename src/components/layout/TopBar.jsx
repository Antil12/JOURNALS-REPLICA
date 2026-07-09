import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarInner}>
        <span className={styles.title}>Advances in Anatomy and Clinical Sciences</span>
        <div className={styles.actions}>
          <a 
            href="https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS&register=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.actionLink}
          >
            <i className={`fa fa-key ${styles.icon}`} aria-hidden="true"></i>
            <span>Register</span>
          </a>
          <a 
            href="https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.actionLink}
          >
            <i className={`fa fa-lock ${styles.icon}`} aria-hidden="true"></i>
            <span>Login</span>
          </a>
          <button 
            type="button" 
            className={styles.mobileToggle}
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
