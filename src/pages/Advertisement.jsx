import paperImage from '../assets/paper.png'
import siteContent from '../config/siteContent'
import styles from './Advertisement.module.css'

const imageMap = {
  paperSizeDiagram: paperImage,
}

export default function Advertisement() {
  const { advertisement } = siteContent
  const hasDetailedLayout = Boolean(advertisement?.technicalDetails && advertisement?.intro?.label)
  const diagramSrc = hasDetailedLayout ? imageMap[advertisement.technicalDetails.diagram.imageKey] : null

  if (!hasDetailedLayout) {
    return (
      <div className={styles.pageBg}>
        <div className={styles.pageContainer}>
          <h1 className={styles.pageHeading}>{advertisement.heading || advertisement.title}</h1>
          <hr className={styles.divider} />

          {advertisement.intro ? <p>{advertisement.intro}</p> : null}

          {advertisement.sections?.map((section) => (
            <div key={section.title} className={styles.textSection}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul className={styles.bulletList}>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const { intro, technicalDetails, schedule, paymentDetails } = advertisement

  return (
    <div className={styles.pageBg}>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageHeading}>{advertisement.heading}</h1>
        <hr className={styles.divider} />

        <div className={styles.introBlock}>
          <p className={styles.introLabel}>{intro.label}</p>
          <h2 className={styles.companyName}>{intro.company}</h2>

          <div className={styles.addressBlock}>
            {intro.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>Phone: {intro.phone}</p>
            <p>Contact Person: {intro.contactPerson}</p>
            <p>
              E-mail: <strong>{intro.email}</strong>
            </p>
            <p>
              Website: <strong>{intro.website}</strong>
            </p>
          </div>

          <p className={styles.policyNote}>
            {intro.policyNote.prefix}
            <a href={intro.policyNote.href}>
              <strong>{intro.policyNote.linkLabel}</strong>
            </a>
          </p>
        </div>

        <div className={styles.technicalCard}>
          <div className={styles.technicalHeader}>{technicalDetails.title}</div>
          <div className={styles.technicalBody}>
            <div className={styles.technicalRows}>
              {technicalDetails.rows.map((row) => (
                <div key={row.label} className={styles.technicalRow}>
                  <span className={styles.rowLabel}>{row.label}</span>
                  {row.value && <span className={styles.rowValue}>{row.value}</span>}
                </div>
              ))}
            </div>

            <div className={styles.diagramWrapper}>
              <img
                src={diagramSrc}
                alt={technicalDetails.diagram.alt}
                className={styles.diagramImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.textSection}>
          <h3 className={styles.sectionTitle}>{schedule.title}</h3>
          {schedule.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.textSection}>
          <h3 className={styles.sectionTitle}>{paymentDetails.title}</h3>
          {paymentDetails.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
