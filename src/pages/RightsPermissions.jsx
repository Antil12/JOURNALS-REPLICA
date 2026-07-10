import styles from './RightsPermissions.module.css'

export default function RightsPermissions() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Business Opportunities</span>
            <h1 className={styles.pageHeading}>Rights & Permissions</h1>
            <p className={styles.intro}>
              Permission requests for reuse, translation, or commercial use of published content are handled through the publisher’s permissions team.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Permission Requests</h2>
            <p>
              Use of published articles beyond standard reading and citation may require formal permission, especially for commercial reproduction,
              adaptation, or inclusion in other materials.
            </p>
            <p>
              The publisher processes permission requests consistently with licensing terms and copyright obligations.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Typical Requests</h2>
            <ul className={styles.bulletList}>
              <li>Photocopying or excerpting content for course materials.</li>
              <li>Reuse in books, theses, or institutional repositories.</li>
              <li>Commercial translation, adaptation, or distribution requests.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
