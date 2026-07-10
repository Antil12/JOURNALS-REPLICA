import HeroCard from '../components/home/HeroCard'
import StatsBar from '../components/home/StatsBar'
import LatestArticles from '../components/home/LatestArticles'
import styles from './Home.module.css'
import siteContent from '../config/siteContent'

export default function Home() {
  const { home } = siteContent

  return (
    <>
      <div className={styles.bannerBgPink}>
        <div className={styles.container}>
          <div className={styles.rowInnerDetail}>
            <div className={styles.colMd12}>
              <h4 className={styles.mainHeadingContent}>{home.heading}</h4>
            </div>
          </div>
          <div className={styles.rowPy}>
            <HeroCard />
          </div>
        </div>
      </div>
      <StatsBar />
      <LatestArticles />
    </>
  )
}