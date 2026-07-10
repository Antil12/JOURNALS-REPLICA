import defaultStyles from './ContentPage.module.css'

export default function ContentPage({ title, intro, sections, cta, stylesOverride }) {
  const styles = stylesOverride || defaultStyles

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>AACS Journal Replica</span>
            <h1 className={styles.pageHeading}>{title}</h1>
            {intro ? <p className={styles.intro}>{intro}</p> : null}
            {cta ? (
              <div className={styles.ctaRow}>
                {cta.map((link) => (
                  <a key={link.label} href={link.href} className={styles.ctaLink} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {sections.map((section, index) => (
            <section key={`${section.title}-${index}`} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.sectionBody}>
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-p-${paragraphIndex}`}>{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((item, itemIndex) => (
                      <li key={`${section.title}-li-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
