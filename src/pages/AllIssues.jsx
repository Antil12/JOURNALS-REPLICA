import styles from './AllIssues.module.css'

const JOURNAL_NAME = 'Advances in Anatomy and Clinical Sciences'

const issues = []

export default function AllIssues() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageHeading}>
          All Issues ( {JOURNAL_NAME} )
        </h1>
        <hr className={styles.divider} />

        <p className={styles.totalArticles}>Total articles : {issues.length}</p>

        {issues.length > 0 && (
          <div className={styles.issuesGrid}>
            {issues.map((issue) => (
              <a key={issue.id} href={issue.href} className={styles.issueCard}>
                {issue.coverUrl && (
                  <img src={issue.coverUrl} alt={`Volume ${issue.volume}, Issue ${issue.issueNo}`} className={styles.issueCover} />
                )}
                <span className={styles.issueLabel}>
                  Volume {issue.volume}, Issue {issue.issueNo} ({issue.year})
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}