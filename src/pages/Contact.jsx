import styles from './contact.module.css'
import siteContent from '../config/siteContent'

export default function Contact() {
  const { contact } = siteContent

  function renderLine(line) {
    if (line.startsWith('Email:')) {
      const emailText = line.substring(6).trim();
      const parts = emailText.split('/').map(p => p.trim());
      return (
        <>
          Email: {parts.map((email, idx) => (
            <span key={email}>
              <a href={`mailto:${email}`}>{email}</a>
              {idx < parts.length - 1 ? ' / ' : ''}
            </span>
          ))}
        </>
      );
    }
    if (line.startsWith('Website:')) {
      const webText = line.substring(8).trim();
      const href = webText.startsWith('http') ? webText : `https://${webText}`;
      return (
        <>
          Website: <a href={href} target="_blank" rel="noreferrer">{webText}</a>
        </>
      );
    }
    return line;
  }

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <h1 className={styles.pageHeading}>{contact.heading}</h1>
          </div>

          {contact.sections.map((section, sIdx) => (
            <section key={sIdx} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.subtitle && (
                <h3 className={styles.sectionSubtitle}>{section.subtitle}</h3>
              )}
              <div className={styles.sectionBody}>
                {section.lines.map((line, lIdx) => (
                  <p key={lIdx}>
                    {renderLine(line)}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
