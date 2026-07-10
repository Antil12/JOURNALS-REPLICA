import styles from '../../pages/Home.module.css'
import siteContent from '../../config/siteContent'

export default function StatsBar() {
  const { home } = siteContent

  return (
    <div className={styles.statsAgileits}>
      <div className={styles.container}>
        <div className={styles.statsGrid} id="counter">
          {home.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h4 className={styles.agileitsW3layouts}>{stat.label}</h4>
              <div className={`${styles.numscroller} ${styles.counterValue}`} data-count={stat.value}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.clearfix}></div>
    </div>
  )
}