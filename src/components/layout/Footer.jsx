import ccByNcImg from '../../assets/cc-by-nc.png'
import facebookIcon from '../../assets/facebook.svg'
import dividerImg from '../../assets/footer-bg.png'
import linkedinIcon from '../../assets/linkedin.svg'
import openAccessImg from '../../assets/open_access.png'
import twitterIcon from '../../assets/x-twitter.svg'
import siteConfig from '../../config/siteConfig'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.contactW3ls}>
      <div className={styles.footerCurve}>
        <img src={dividerImg} alt="" className={styles.dividerImage} />
      </div>
      <div className={styles.container}>
        <div className={styles.licenseLogo}>
          <a rel="license noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" className={styles.licenseLink}>
            <img alt="Creative Commons BY-NC License" className={styles.licenseImg} src={ccByNcImg} />
          </a>
          <a href="https://www.jaypeejournals.com/" target="_blank" rel="noopener noreferrer" className={styles.licenseLink}>
            <img src={openAccessImg} alt="Open Access" className={styles.openAccessImg} />
          </a>
        </div>
        <div className={styles.clearfix}></div>
        <div className={styles.copy}>
          <ul className={styles.bannerMenuW3layouts}>
            <li><a href="/">Home</a></li>
            <li><a href="/journal-information">About Journal</a></li>
            <li><a href="/">Current Issue</a></li>
            <li><a href="/all-issues"><span>All Issues</span></a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/policy">Policy</a></li>
          </ul>
          <ul className={styles.agileitsSocialList}>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={siteConfig.socialLinks.facebook} className={styles.w3AgileFacebook}>
                <img src={facebookIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={siteConfig.socialLinks.twitter} className={styles.agileTwitter}>
                <img src={twitterIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={siteConfig.socialLinks.linkedin} className={styles.w3AgileDribble}>
                <img src={linkedinIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
          </ul>
          <p>
            <div className={styles.col12}>
              <p className={styles.copywriteTxt}>{siteConfig.copyright}</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
