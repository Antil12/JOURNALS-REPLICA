import Sidebar from '../components/layout/Sidebar'
import styles from './OrderReprint.module.css'

export default function OrderReprint() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Business Opportunities</span>
            <h1 className={styles.pageHeading}>Order Reprint</h1>
            <p className={styles.intro}>
              Reprint requests are handled through the publisher for authors, institutions, and organizations that need additional copies of published material.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Reprint Service</h2>
            <p>
              Reprints may be requested for educational use, institutional distribution, or conference presentation support.
            </p>
            <p>
              Requests are assessed based on the publication’s licensing terms, the nature of the use, and availability of print stock.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>How to Begin</h2>
            <ul className={styles.bulletList}>
              <li>Share the article title, volume, and issue details.</li>
              <li>Mention your required quantity and delivery address.</li>
              <li>Expect confirmation from the publisher before fulfilment.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
