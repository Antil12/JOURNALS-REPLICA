import styles from './EditorialBoard.module.css'
import siteContent from '../config/siteContent'

function MemberCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <p className={styles.memberName}>{member.name}</p>
      {member.qualification && (
        <p className={styles.memberQualification}>{member.qualification}</p>
      )}
      {member.designation && (
        <p className={styles.memberField}>{member.designation}</p>
      )}
      {member.institution && (
        <p className={styles.memberField}>{member.institution}</p>
      )}
      {member.orcid && (
        <a
          className={styles.memberLink}
          href={`https://orcid.org/${member.orcid}`}
          target="_blank"
          rel="noreferrer"
        >
          https://orcid.org/{member.orcid}
        </a>
      )}
      {member.email && (
        <a className={styles.memberLink} href={`mailto:${member.email}`}>
          {member.email}
        </a>
      )}
    </div>
  )
}

export default function EditorialBoard() {
  const { editorialBoard } = siteContent

  return (
    <div className={styles.pageBg}>
      <div className={styles.pageContainer}>
        {editorialBoard.sections.map((section) => {
          const isSingle = section.members.length === 1
          return (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={isSingle ? styles.memberGridSingle : styles.memberGrid}>
                {section.members.map((member) => (
                  <MemberCard key={member.email || member.name} member={member} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}