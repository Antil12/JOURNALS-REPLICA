import styles from './Policy.module.css'

export default function Policy() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>About Journal</span>
            <h1 className={styles.pageHeading}>Policy</h1>
            <p className={styles.intro}>
              The journal follows a transparent publication policy built on editorial ethics, authorship integrity,
              and open-access principles.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Editorial Policies and Publication Ethics</h2>
            <p>
              The journal adheres to the Code of Conduct and Best Practice Guidelines for Journal Editors published by
              COPE, WAME, and ICMJE.
            </p>
            <p>
              Publication decisions are based on originality, novelty, scientific soundness, relevance, and compliance
              with the journal’s scope.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Authors</h2>
            <p>
              Authors are expected to present honest results, acknowledge funding and ethical approvals, and avoid
              plagiarism, duplicate publication, or data manipulation.
            </p>
            <p>
              All submissions must be based on valid methodology and clearly reported findings that can be independently assessed.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Reviewers</h2>
            <p>
              Reviewers must provide fair, confidential, and constructive assessments within the agreed timeline.
              They should disclose conflicts of interest and evaluate manuscripts solely on scientific merit.
            </p>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Copyright and Licensing</h2>
            <p>
              Open-access articles are distributed under the Creative Commons CC BY-NC 4.0 license. Readers may reuse
              the content for non-commercial purposes when the source is properly cited.
            </p>
            <p>
              Authors retain copyright while granting the publisher the right to distribute and preserve the published work.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
