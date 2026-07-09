import { useEffect, useState } from 'react'
import styles from './CookieBanner.module.css'

const STORAGE_KEY = 'aacsj-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved !== 'dismissed') {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, 'dismissed')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <p>We use cookies on this site to enhance your user experience.</p>
        <p>By clicking any link on this page you are giving your consent for us to set cookies.</p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.primary} onClick={dismiss}>
          Ok, I Agree
        </button>
        <button type="button" className={styles.secondary} onClick={dismiss}>
          More Info
        </button>
      </div>
    </div>
  )
}
