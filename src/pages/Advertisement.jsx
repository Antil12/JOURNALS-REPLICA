import paperImage from '../assets/paper.png'
import siteContent from '../apps/site-a/content'
import styles from './Advertisement.module.css'

const imageMap = {
  paperSizeDiagram: paperImage,
}

export default function Advertisement() {
  const { advertisement } = siteContent
  const { intro, technicalDetails, schedule, paymentDetails } = advertisement
  const diagramSrc = imageMap[technicalDetails.diagram.imageKey]

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