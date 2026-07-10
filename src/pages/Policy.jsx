import styles from './Policy.module.css'
import siteContent from '../config/siteContent'

function SubSection({ subsection }) {
  return (
    <div>
      <h4 className={styles.subSubTitle}>{subsection.title}</h4>
      {subsection.paragraphs && subsection.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {subsection.items && (
        <ol className={styles.romanList}>
          {subsection.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
      {subsection.bullets && (
        <ul className={styles.bulletList}>
          {subsection.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
      {subsection.extraParagraphs && subsection.extraParagraphs.map((paragraph, index) => (
        <p key={`extra-${index}`}>{paragraph}</p>
      ))}
      {subsection.subsections && subsection.subsections.map((sub, index) => (
        <SubSection key={index} subsection={sub} />
      ))}
    </div>
  )
}

function Section({ section }) {
  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.sectionTitle}>{section.title}</h2>

      {section.toc && (
        <nav className={styles.tocNav} aria-label="Policy sections">
          {section.toc.map((item, index) => (
            <span key={item.href}>
              <a href={item.href}>{item.label}</a>
              {index < section.toc.length - 1 && <span className={styles.tocDivider}>|</span>}
            </span>
          ))}
        </nav>
      )}

      {section.subsections && section.subsections.map((subsection) => (
        <div key={subsection.id}>
          <h3 id={subsection.id} className={styles.subTitle}>{subsection.title}</h3>
          {subsection.paragraphs && subsection.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {subsection.items && (
            <ol className={styles.romanList}>
              {subsection.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
          {subsection.bullets && (
            <ul className={styles.bulletList}>
              {subsection.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          {subsection.extraParagraphs && subsection.extraParagraphs.map((paragraph, index) => (
            <p key={`extra-${index}`}>{paragraph}</p>
          ))}
          {subsection.subsections && subsection.subsections.map((sub, index) => (
            <SubSection key={index} subsection={sub} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default function Policy() {
  const { policy } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{policy.eyebrow}</span>
            <h1 className={styles.pageHeading}>{policy.heading}</h1>
          </div>
          <hr className={styles.divider} />

          {policy.sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  )
}