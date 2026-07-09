import Sidebar from '../components/layout/Sidebar'
import styles from './GenerateOnlineInvoice.module.css'

export default function GenerateOnlineInvoice() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Business Opportunities</span>
            <h1 className={styles.pageHeading}>Generate Online Invoice</h1>
            <p className={styles.intro}>
              Subscribers, institutions, and partners can request billing documents through the publisher’s online invoicing workflow.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Invoice Request</h2>
            <p>
              Online invoices are generated for approved institutional and commercial requests so orders and renewals can be tracked efficiently.
            </p>
            <p>
              Use the publisher’s portal to submit billing information and receive a downloadable invoice for processing.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <ul className={styles.bulletList}>
              <li>Submit your billing requirements with your organization’s contact details.</li>
              <li>Confirm the order reference for faster invoice generation.</li>
              <li>Contact support for duplicate invoices or account-related issues.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
