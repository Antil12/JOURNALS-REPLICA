import styles from '../../pages/Home.module.css'

const stats = [
  { label: '', value: '' },
  { label: 'Authors', value: '0' },
  { label: 'Articles Submitted', value: '2' },
  { label: 'Published Articles', value: '0' },
  { label: 'Scholarly Citations', value: '0' },
  { label: 'Readership', value: '0' },
  { label: '', value: '' },
]

export default function StatsBar() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
