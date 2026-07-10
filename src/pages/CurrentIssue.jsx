import styles from './CurrentIssue.module.css'
import siteContent from '../config/siteContent'

export default function CurrentIssue() {
  const { currentIssue } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{currentIssue.eyebrow}</span>
            <h1 className={styles.pageHeading}>{currentIssue.heading}</h1>
            <p className={styles.intro}>{currentIssue.intro}</p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{currentIssue.featuredTitle}</h2>
            {currentIssue.featuredParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{currentIssue.accessTitle}</h2>
            <ul className={styles.bulletList}>
              {currentIssue.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
