import Sidebar from '../components/layout/Sidebar'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />

        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>AACS JOURNAL REPLICA</span>
            <h1 className={styles.pageHeading}>Contact Us</h1>
            <p className={styles.intro}>
              The journal’s publisher offers direct channels for editorial, subscription,
              indexing, and publishing support questions.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Publisher's Corporate Office</h2>
            <div className={styles.sectionBody}>
              <p>
                Jaypee Brothers Medical Publishers Pvt. Ltd.
                <br />4838/24, Ansari Road, Daryaganj, New Delhi 110 002, India.
              </p>
              <p>
                Phone: +91-11-43574357<br />Fax: +91-11-43574314
              </p>
              <p>
                Email: <strong>editor@jaypeebrothers.com</strong> / <strong>journals.editor@jaypeebrothers.com</strong>
              </p>
              <p>
                Website: <a href="https://www.jaypeejournals.com">www.jaypeejournals.com</a>
              </p>
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Registered Office</h2>
            <div className={styles.sectionBody}>
              <p>
                Jaypee Brothers Medical Publishers Pvt. Ltd.
                <br />23/23-B, Ansari Road, Daryaganj, New Delhi 110 002, India.
              </p>
              <p>
                Phone: +91-11-23272143, +91-11-23272703, +91-11-23282021, +91-11-23245672
              </p>
              <p>
                Email: <strong>jaypee@jaypeebrothers.com</strong>
              </p>
              <p>
                Website: <a href="https://jaypeebrothers.com">https://jaypeebrothers.com</a>
              </p>
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>For ISSN and RNI Query</h2>
            <div className={styles.sectionBody}>
              <p>
                Nikita Pal<br />110002, India<br />Phone: +91-11-43574357
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
