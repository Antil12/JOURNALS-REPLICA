import styles from './Footer.module.css'
import dividerImg from '../../assets/footer-bg.png'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/x-twitter.svg'
import linkedinIcon from '../../assets/linkedin.svg'

export default function Footer() {
  return (
    <div className={styles.contactW3ls}>
      <div className={styles.footerCurve}>
        <img src={dividerImg} alt="" className={styles.dividerImage} />
      </div>
      <div className={styles.container}>
        <span className={styles.licenseLogo}>
          <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">
            <img alt="Creative Commons License" className={styles.licenseImg} src="https://d45jl3w9libvn.cloudfront.net/jaypee/static/img/license/CC-BY-NC-4.0.svg" />
          </a>
          <a href="https://www.jaypeejournals.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://d45jl3w9libvn.cloudfront.net/jaypee/static/img/open_access.png" alt='Jaypee Journals' className={styles.openAccessImg} />
          </a>
        </span>
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
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jaypeemedicalpublishers1" className={styles.w3AgileFacebook}>
                <img src={facebookIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jaypeejournals" className={styles.agileTwitter}>
                <img src={twitterIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/company/jaypeejournals" className={styles.w3AgileDribble}>
                <img src={linkedinIcon} fill="white" height="12.08px" width="13px" aria-hidden="true" style={{ marginTop: '7px' }} />
              </a>
            </li>
          </ul>
          <p>
            <div className={styles.col12}>
              <p className={styles.copywriteTxt}>© 2026. Jaypee Brothers Medical Publishers (P) Ltd.&nbsp;|&nbsp;All Rights Reserved.</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}