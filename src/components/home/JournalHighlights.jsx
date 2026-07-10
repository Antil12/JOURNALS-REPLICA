import styles from '../../pages/Home.module.css'

const items = [
  { icon: 'fa-eye', label: 'Most viewed\narticle', href: 'https://www.aacsj.com/journal/AACS/mostDownloadedArticles' },
  { icon: 'fa-user-plus', label: 'Join as\nreviewer', href: 'https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS&register=2' },
  { icon: 'fa-book', label: 'Indexing &\nAbstracting\nInformation', href: 'https://www.aacsj.com/journal/AACS/page/abstract_index' },
  { icon: 'fa-globe', label: 'Explore More Journals', href: 'https://www.aacsj.com/searchByBrowse' },
]

export default function JournalHighlights() {
  return (
    <ul className={styles.cbpIgGrid}>
      {items.map(({ icon, label, href }) => (
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
