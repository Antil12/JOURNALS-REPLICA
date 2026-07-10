import styles from '../../pages/Home.module.css'

const stats = [
  { label: 'Authors', value: '0' },
  { label: 'Articles Submitted', value: '3' },
  { label: 'Published Articles', value: '0' },
  { label: 'Scholarly Citations', value: '0' },
  { label: 'Readership', value: '0' },
]

export default function StatsBar() {
  return (
    <div className={styles.statsAgileits}>
      <div className={styles.container}>
        <div className={styles.statsGrid} id="counter">
          {stats.map((stat, index) => (
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