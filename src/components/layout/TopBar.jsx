import styles from './TopBar.module.css'
import siteConfig from '../../config/siteConfig'

export default function TopBar() {
  return (
    <>
      <div className={styles.fixedTop}>
        <div className={styles.headerTop}>
          <div className={styles.containerFluid}>
            <div className={styles.row}>
              <div className={styles.colMd12}>
                <div className={styles.rowJustifyEnd}>
                  <div className={styles.dNoneLgBlock}>
                    <a className={styles.navbarBrandLogo} href="/" style={{ background: 'none' }}>
                      {siteConfig.logoImages.map((logo, index) => (
                        <img key={`${logo}-${index}`} src={logo} className={`${styles.imgFluid} ${styles.mt3}`} alt={`${siteConfig.siteName} logo ${index + 1}`} />
                      ))}
                    </a>
                  </div>
                </div>

                <div className={styles.rowJustifyEnd} style={{ fontFamily: 'sans-serif !important' }}>
                  <div className={styles.col12Lg12}>
                    <div className={styles.containerH100}>
                      <div className={styles.rowH100}>
                        <div className={styles.col8AlignCenter}>
                          <div className={styles.contentLeftSpace}>
                            <p className={`${styles.textWhiteH6} ${styles.mb0}`}>{siteConfig.siteName}</p>
                          </div>
                        </div>
                        <div className={styles.col4AlignCenter}>
                          <div className={styles.dFlexJustifyEnd}>
                            <a
                              href={siteConfig.registerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.textUppercase}
                            >
                              <span><i className="fa fa-key"></i> Register</span>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                              href={siteConfig.loginUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.textUppercase}
                            >
                              <span><i className="fa fa-lock"></i> Login</span>
                            </a>
                            <nav className={styles.navbarDark}>
                              <button
                                className={`${styles.navbarToggler} ${styles.ml2} ${styles.mt1}`}
                                type="button"
                                aria-label="Toggle navigation"
                              >
                                <i className="fa fa-bars" aria-hidden="true"></i>
                              </button>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.rowDLgNone}>
          <div className={styles.col12Mb2}>
            <div className={styles.dFlexJustifyCenter}>
              {siteConfig.logoImages.map((logo, index) => (
                <span key={`${logo}-${index}`} className={index === 1 ? styles.dInlineBlockMx2 : styles.dInlineBlock}>
                  <a href="/">
                    <img src={logo} className={styles.imgFluid} alt={`${siteConfig.siteName} logo ${index + 1}`} />
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
