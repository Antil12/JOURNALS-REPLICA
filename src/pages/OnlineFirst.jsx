import { useState } from 'react'
import styles from './OnlineFirst.module.css'

// Populate this array once Online First articles exist.
// Example shape: { id: 'a1', title: '', doi: '', href: '' }
const onlineFirstArticles = []

export default function OnlineFirst() {
  const [showPreProduction, setShowPreProduction] = useState(true)

  return (
    <div className={styles.pageBg}>
      <div className={styles.pageContainer}>
        <div className={styles.toggleRow}>
          <h2 className={styles.sideHeading}>Pre-Production</h2>

          <button
            type="button"
            role="switch"
            aria-checked={showPreProduction}
            className={`${styles.toggle} ${showPreProduction ? styles.toggleOn : ''}`}
            onClick={() => setShowPreProduction((prev) => !prev)}
          >
            <span className={styles.toggleKnob} />
          </button>

          <h2 className={styles.sideHeading}>Online First</h2>
        </div>

        <hr className={styles.divider} />

        {onlineFirstArticles.length > 0 && (
          <div className={styles.articlesList}>
            {onlineFirstArticles.map((article) => (
              <a key={article.id} href={article.href} className={styles.articleRow}>
                {article.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}