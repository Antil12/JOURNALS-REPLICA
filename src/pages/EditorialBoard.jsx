import Sidebar from '../components/layout/Sidebar'
import styles from './EditorialBoard.module.css'

export default function EditorialBoard() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>About Journal</span>
            <h1 className={styles.pageHeading}>Editorial Board</h1>
            <p className={styles.intro}>
              The editorial board comprises experienced experts in anatomy, clinical practice, radiology, and education.
              They uphold publication quality and ethical standards for the journal.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Editorial Leadership</h2>
            <p>
              The journal is guided by chief editors and editors who make decisions on publication quality, scope alignment,
              review oversight, and policy implementation.
            </p>
            <p>
              Board members advise on emerging research areas, editorial priorities, and the long-term growth of the journal.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Board Responsibilities</h2>
            <ul className={styles.bulletList}>
              <li>Review manuscripts for scientific relevance, clarity, and methodological soundness.</li>
              <li>Support ethical publishing practices and conflict-of-interest disclosure.</li>
              <li>Encourage interdisciplinary collaboration and innovation in anatomy and clinical sciences.</li>
            </ul>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Review and Governance</h2>
            <p>
              The editorial board actively participates in peer review, journal strategy, and editorial development.
              Members ensure the journal stays current with international publishing norms and research ethics standards.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
