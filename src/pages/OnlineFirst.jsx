import Sidebar from '../components/layout/Sidebar'
import styles from './OnlineFirst.module.css'

export default function OnlineFirst() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Online First</span>
            <h1 className={styles.pageHeading}>Online First</h1>
            <p className={styles.intro}>
              Online First articles are published ahead of print so the latest research reaches readers faster and remains accessible during production.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Benefits of Online First</h2>
            <ul className={styles.bulletList}>
              <li>Faster publication for time-sensitive science.</li>
              <li>Immediate DOI-based citation and indexing readiness.</li>
              <li>Earlier access to findings important to clinicians and educators.</li>
            </ul>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Reader Experience</h2>
            <p>
              Online First content improves access for readers who rely on prompt publication of emerging findings and educational updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
