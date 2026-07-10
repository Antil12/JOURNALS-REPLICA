import styles from './GrievanceRedressal.module.css'
import siteContent from '../config/siteContent'

export default function GrievanceRedressal() {
  const { grievanceRedressal } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <h1 className={styles.pageHeading}>{grievanceRedressal.heading}</h1>
          </div>

          {grievanceRedressal.sections.map((section, sIdx) => (
            <section key={sIdx} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.emailContainer}>
                <a href={`mailto:${section.email}`} className={styles.emailLink}>
                  {section.email}
                </a>
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
