import styles from '../../pages/Home.module.css'

export default function LatestArticles() {
  return (
    <section className={styles.latestSection}>
      <h2>Latest Articles</h2>
      <div className={styles.latestList} />
    </section>
  )
}
