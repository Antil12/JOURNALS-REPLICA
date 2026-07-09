import Sidebar from '../components/layout/Sidebar'
import styles from './CurrentIssue.module.css'

export default function CurrentIssue() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Current Issue</span>
            <h1 className={styles.pageHeading}>Current Issue</h1>
            <p className={styles.intro}>
              The current issue features selected articles addressing timely topics in anatomy education, clinical correlation,
              imaging, and translational anatomy research.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Featured Focus</h2>
            <p>
              This issue highlights contemporary applications of anatomy in diagnosis, surgery, and medical training, with emphasis
              on evidence-based methods and practical clinical relevance.
            </p>
            <p>
              Articles are curated for readers who want a concise overview of the latest advances across anatomy and clinical sciences.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Access</h2>
            <ul className={styles.bulletList}>
              <li>Read the current content online in HTML and PDF formats.</li>
              <li>Use the journal portal for abstracts, citations, and article-level access.</li>
              <li>Submit questions or access requests through editorial contact channels.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
