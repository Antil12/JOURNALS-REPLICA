import styles from '../../pages/Home.module.css'

const items = [
  { icon: 'fa-eye', label: 'Most viewed\narticle', href: '/journal/AACS/mostDownloadedArticles' },
  { icon: 'fa-users', label: 'Join as\nreviewer', href: 'https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS&register=2' },
  { icon: 'fa-book', label: 'Indexing &\nAbstracting\nInformation', href: '/journal/AACS/page/abstract_index' },
  { icon: 'fa-globe', label: 'Explore More Journals', href: '/searchByBrowse' },
]

export default function JournalHighlights() {
  return (
    <ul className={styles.highlightsGrid}>
      {items.map(({ icon, label, href }) => (
        <li key={label}>
          <div className={styles.highlightCard}>
            <span className={`cbp-ig-icon fa ${icon} ${styles.highlightIcon}`}></span>
            <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <h4 className={styles.highlightLabel}>{label}</h4>
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}
