import styles from './Footer.module.css'
import dividerImg from '../../assets/footer-bg.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCurve}>
        <img src={dividerImg} alt="" className={styles.dividerImage} />
      </div>
      <div className={styles.inner}>
        <div className={styles.licenseSection}>
          <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">
            <img alt="Creative Commons License" className={styles.licenseImg} src="https://d45jl3w9libvn.cloudfront.net/jaypee/static/img/license/CC-BY-NC-4.0.svg" />
          </a>
          <a href="https://www.jaypeejournals.com/" target="_blank" rel="noopener noreferrer" className={styles.openAccessLink}>
            <img src="https://d45jl3w9libvn.cloudfront.net/jaypee/static/img/open_access.png" alt='Jaypee Journals' className={styles.openAccessImg} />
          </a>
        </div>
        <div style={{ clear: 'both' }}></div>
        <div className={styles.copy}>
          <ul className={styles.links}>
            <li><a href="/journalDetails/AACS">Home</a></li>
            <li><a href="/journal/AACS/page/about">About Journal</a></li>
            <li><a href="/journal/AACS">Current Issue</a></li>
            <li><a href="/lov/AACS">All Issues</a></li>
            <li><a href="/journal/AACS/page/Contact-Us">Contact</a></li>
            <li><a href="/journal/AACS/page/policy">Policy</a></li>
          </ul>
          <ul className={styles.social}>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jaypeemedicalpublishers1" className={`${styles.socialIcon} facebook`}>
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jaypeejournals" className={`${styles.socialIcon} twitter`}>
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/company/jaypeejournals" className={`${styles.socialIcon} linkedin`}>
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <div className={styles.scrollTop}>
            <span className={styles.scrollTopInner}>
              <i className="fa fa-2x fa-angle-double-up" aria-hidden="true"></i>
            </span>
          </div>
          <p className={styles.copyText}>
            © 2026. Jaypee Brothers Medical Publishers (P) Ltd. | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}