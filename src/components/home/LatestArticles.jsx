import styles from '../../pages/Home.module.css'

export default function LatestArticles() {
  return (
    <div className={styles.latestArticlesSection}>
      <div className={styles.colLg12Md12Sm12ColXs12}>
        <div className={styles.contentLeftSpace}>
          <div className={styles.dFlexJustifyBetweenPx2}>
            <h3 className={`${styles.headingAgileinfo1} ${styles.mb0} ${styles.mt2} ${styles.py2}`}>Latest Articles</h3>
          </div>
          <div className={`${styles.border} ${styles.p4}`}>
            <div className={styles.row}>
              {/* Articles will be added here when available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}