import Sidebar from '../components/layout/Sidebar'
import styles from './OrderHardCopy.module.css'

export default function OrderHardCopy() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Business Opportunities</span>
            <h1 className={styles.pageHeading}>Order Hard Copy</h1>
            <p className={styles.intro}>
              Printed copies of the journal are available for readers, libraries, and institutions seeking a physical subscription or archival reference.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Ordering Details</h2>
            <p>
              Hard copies can be ordered directly through the publisher’s sales channels, while availability depends on print runs and current stock.
            </p>
            <p>
              Orders are typically handled for institutional subscribers, research libraries, and private readers seeking annual or multi-issue delivery.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>What to Expect</h2>
            <ul className={styles.bulletList}>
              <li>Provide your shipping information and preferred issue selection.</li>
              <li>Confirm your order before dispatch and retain your acknowledgment for follow-up.</li>
              <li>Contact the publisher for volume-specific availability.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
