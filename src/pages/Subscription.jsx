import styles from './Subscription.module.css'

export default function Subscription() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Subscription</span>
            <h1 className={styles.pageHeading}>Subscription</h1>
            <p className={styles.intro}>
              Subscription options support institutional and individual access to the journal’s online issues and publishing services.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Access Options</h2>
            <p>
              The journal offers subscription pathways designed for libraries, universities, hospitals, and individual readers who need consistent access to current and archived content.
            </p>
            <p>
              Subscription support also helps institutions maintain reliable access to research updates and publication records.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Contact for Subscription</h2>
            <ul className={styles.bulletList}>
              <li>Request a quote for institutional access.</li>
              <li>Ask about multi-user licensing and archive access.</li>
              <li>Discuss benefits for schools, hospitals, and research centers.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
