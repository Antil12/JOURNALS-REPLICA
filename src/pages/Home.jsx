import Sidebar from '../components/layout/Sidebar'
import HeroCard from '../components/home/HeroCard'
import StatsBar from '../components/home/StatsBar'
import LatestArticles from '../components/home/LatestArticles'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <h1 className={styles.pageHeading}>Advances in Anatomy and Clinical Sciences</h1>
          <HeroCard />
        </div>
      </div>
      <StatsBar />
      <LatestArticles />
    </div>
  )
}