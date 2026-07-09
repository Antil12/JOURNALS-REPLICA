import Sidebar from '../components/layout/Sidebar'
import styles from './AuthorInstructions.module.css'

export default function AuthorInstructions() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Author Zone</span>
            <h1 className={styles.pageHeading}>Author Instructions</h1>
            <p className={styles.intro}>
              Authors are invited to submit manuscripts that advance anatomy and clinical sciences through original research,
              review articles, or educational scholarship.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Manuscript Preparation</h2>
            <p>
              Manuscripts should be prepared in clear, concise scientific English with complete data, accurate references,
              and figures that are legible and properly labeled.
            </p>
            <p>
              Submissions should follow the journal’s formatting guidance and include required disclosures,
              statements of ethics approval, and author contributions.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Submission Checklist</h2>
            <ul className={styles.bulletList}>
              <li>Title page with corresponding author details and affiliations.</li>
              <li>Structured abstract, keywords, main text, and references.</li>
              <li>Ethics approval statement for animal or human studies.</li>
              <li>Conflict of interest and funding disclosures.</li>
            </ul>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Peer Review Process</h2>
            <p>
              All manuscripts are reviewed through a double-blind peer-review system designed to maintain scientific quality
              and fairness.
            </p>
            <p>
              Authors may receive editorial feedback for revision before a final decision is issued.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
