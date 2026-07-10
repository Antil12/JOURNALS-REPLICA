import styles from './Advertisement.module.css'

export default function Advertisement() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Business Opportunities</span>
            <h1 className={styles.pageHeading}>Advertisement</h1>
            <p className={styles.intro}>
              The journal accepts advertisements that support scientific communication while preserving editorial independence and reader trust.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Advertising Policy</h2>
            <p>
              Advertisements are reviewed independently from editorial decisions. The journal and publisher do not endorse products or services solely because they appear in the publication.
            </p>
            <p>
              Sponsored content must be truthful, relevant, and compliant with ethical standards. The journal reserves the right to decline material that is misleading or inappropriate.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Eligibility</h2>
            <ul className={styles.bulletList}>
              <li>Advertisements must be verifiable and supported by appropriate product information.</li>
              <li>The journal will not accept advertisements promoting harmful or inappropriate products.</li>
              <li>Editorial decisions remain independent of advertisers and sponsors.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
