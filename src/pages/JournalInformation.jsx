import styles from './JournalInformation.module.css'
import siteContent from '../config/siteContent'

export default function JournalInformation() {
  const { journalInformation } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{journalInformation.eyebrow}</span>
            <h1 className={styles.pageHeading}>{journalInformation.heading}</h1>
          </div>

          <ul className={styles.quickLinks}>
            {journalInformation.quickLinks.map((link) => (
              <li key={link.href} className={link.subItem ? styles.subItem : ''}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <section id="aims" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.aims.title}</h2>
            {journalInformation.aims.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="ownership" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.ownership.title}</h2>
            {journalInformation.ownership.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h3 id="institution" className={styles.subTitle}>{journalInformation.ownership.institution.title}</h3>
            <p className={styles.orgName}>
              <a href={journalInformation.ownership.institution.link} target="_blank" rel="noreferrer">
                {journalInformation.ownership.institution.name}
              </a>
            </p>
            {journalInformation.ownership.institution.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h3 id="publisher" className={styles.subTitle}>{journalInformation.ownership.publisher.title}</h3>
            {journalInformation.ownership.publisher.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="frequency" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.frequency.title}</h2>
            {journalInformation.frequency.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="copyright" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.copyright.title}</h2>
            {journalInformation.copyright.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="openaccess" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.openAccess.title}</h2>
            <p className={styles.subHeadLine}>{journalInformation.openAccess.intro}</p>
            {journalInformation.openAccess.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="selfarchiving" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.selfArchiving.title}</h2>
            {journalInformation.selfArchiving.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="ethics" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.ethics.title}</h2>
            {journalInformation.ethics.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section id="advertisement" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>{journalInformation.advertisementPolicy.title}</h2>
            {journalInformation.advertisementPolicy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}