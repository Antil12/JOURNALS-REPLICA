import styles from './EditorialBoard.module.css'
import siteContent from '../config/siteContent'

function MemberCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <p className={styles.memberName}>{member.name}</p>
      <p className={styles.memberQualification}>{member.qualification}</p>
      <p className={styles.memberDesignation}>{member.designation}</p>
      <p className={styles.memberInstitution}>{member.institution}</p>
      {member.orcid && (
        <a className={styles.orcidLink} href={`https://orcid.org/${member.orcid}`} target="_blank" rel="noreferrer">
          orcid.org/{member.orcid}
        </a>
      )}
      <a className={styles.emailLink} href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </div>
  )
}

export default function EditorialBoard() {
  const { editorialBoard } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{editorialBoard.eyebrow}</span>
            <h1 className={styles.pageHeading}>{editorialBoard.heading}</h1>
          </div>

          {editorialBoard.sections.map((section) => (
            <section key={section.title} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.memberGrid}>
                {section.members.map((member) => (
                  <MemberCard key={member.email} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}