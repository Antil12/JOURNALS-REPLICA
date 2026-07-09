import Sidebar from '../components/layout/Sidebar'
import styles from './GrievanceRedressal.module.css'

export default function GrievanceRedressal() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Contact Us</span>
            <h1 className={styles.pageHeading}>Grievance Redressal</h1>
            <p className={styles.intro}>
              The journal provides a formal channel for handling concerns related to editorial conduct, publication ethics, and publishing service quality.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>How to Raise a Concern</h2>
            <p>
              Readers, authors, or reviewers may contact the editorial office with concerns about ethical issues, publication delays, or service quality.
            </p>
            <p>
              The editorial team reviews each concern carefully and may escalate matters for investigation when appropriate.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>What We Review</h2>
            <ul className={styles.bulletList}>
              <li>Alleged plagiarism or duplicate publication.</li>
              <li>Concerns about reviewer conduct or editorial decisions.</li>
              <li>Customer service issues related to subscriptions or ordering.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
