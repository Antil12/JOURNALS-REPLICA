import Sidebar from '../components/layout/Sidebar'
import styles from './TrackManuscript.module.css'

export default function TrackManuscript() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Author Zone</span>
            <h1 className={styles.pageHeading}>Track Manuscript</h1>
            <p className={styles.intro}>
              Authors can monitor their submission progress from initial receipt through peer review, revision,
              and final publication status.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>How Tracking Works</h2>
            <p>
              Once a manuscript is submitted, the corresponding author receives progress updates and can follow timelines
              related to editorial review and peer feedback.
            </p>
            <p>
              Authors are encouraged to remain responsive during the revision stage so the review process stays efficient and transparent.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <ul className={styles.bulletList}>
              <li>Use the manuscript portal to review status updates and revision requests.</li>
              <li>Contact the editorial office if the status appears delayed or requires clarification.</li>
              <li>Keep communication details current to receive prompt notifications.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
