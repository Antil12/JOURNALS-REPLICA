import styles from './Advertisement.module.css'
import siteContent from '../config/siteContent'

export default function Advertisement() {
  const { advertisement } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{advertisement.eyebrow}</span>
            <h1 className={styles.pageHeading}>{advertisement.heading}</h1>
            <p className={styles.intro}>{advertisement.intro}</p>
          </div>

          {advertisement.sections.map((section) => (
            <section key={section.title} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.paragraphs && section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className={styles.bulletList}>
                  {section.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
