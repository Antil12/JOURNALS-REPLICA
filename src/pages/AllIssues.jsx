import Sidebar from '../components/layout/Sidebar'
import styles from './AllIssues.module.css'

export default function AllIssues() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>All Issues</span>
            <h1 className={styles.pageHeading}>All Issues</h1>
            <p className={styles.intro}>
              The archive section offers access to previous issues so readers can explore the journal’s growth and the evolution of anatomy research.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Archive Highlights</h2>
            <ul className={styles.bulletList}>
              <li>Browse editions by publication year and volume.</li>
              <li>Search for topic-specific articles in the journal archive.</li>
              <li>Access supplementary materials and historical educational content.</li>
            </ul>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Research Continuity</h2>
            <p>
              The archive supports ongoing study, reference, and curriculum development across anatomy, clinical practice, radiology,
              and medical education.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
