import styles from './Sidebar.module.css'
import jaypeeLogo from '../../assets/Jaypee-Logo.png'
import sdgWheel from '../../assets/jaypee-AACS-2.png'
import ncasBadge from '../../assets/jaypee-AACS-3.png'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={jaypeeLogo} alt="Jaypee" className={styles.logoIcon} />
      <img src={sdgWheel} alt="SDG Publishers Compact" className={styles.badge} />
      <img src={ncasBadge} alt="North Chapter of Anatomists Society" className={styles.badge} />
    </aside>
  )
}
