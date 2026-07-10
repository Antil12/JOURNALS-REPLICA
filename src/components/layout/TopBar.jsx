import styles from './TopBar.module.css'
import logo1 from '../../assets/jaypee-AACS-1.png'
import logo2 from '../../assets/jaypee-AACS-2.png'
import logo3 from '../../assets/jaypee-AACS-3.png'

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
                      <img src={logo1} className={`${styles.imgFluid} ${styles.mt3}`} alt="Jaypee Logo 1" />
                      <br />
                      <img src={logo2} className={`${styles.imgFluid} ${styles.mt3}`} alt="Jaypee Logo 2" />
                      <br />
                      <img src={logo3} className={`${styles.imgFluid} ${styles.mt3}`} alt="Jaypee Logo 3" />
                    </a>
                  </div>
                </div>
                
                <div className={styles.rowJustifyEnd} style={{ fontFamily: 'sans-serif !important' }}>
                  <div className={styles.col12Lg12}>
                    <div className={styles.containerH100}>
                      <div className={styles.rowH100}>
                        <div className={styles.col8AlignCenter}>
                          <div className={styles.contentLeftSpace}>
                            <p className={`${styles.textWhiteH6} ${styles.mb0}`}>Advances in Anatomy and Clinical Sciences</p>
                          </div>
                        </div>
                        <div className={styles.col4AlignCenter}>
                          <div className={styles.dFlexJustifyEnd}>
                            <a 
                              href="https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS&register=1" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={styles.textUppercase}
                            >
                              <span><i className="fa fa-key"></i> Register</span>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a 
                              href="https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS" 
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
      
      {/* Mobile logos section */}
      <div className={styles.container}>
        <div className={styles.rowDLgNone}>
          <div className={styles.col12Mb2}>
            <div className={styles.dFlexJustifyCenter}>
              <span className={styles.dInlineBlock}>
                <a href="/">
                  <img src={logo1} className={styles.imgFluid} alt="Jaypee Logo 1" />
                </a>
              </span>
              <span className={styles.dInlineBlockMx2}>
                <a href="/">
                  <img src={logo2} className={styles.imgFluid} alt="Jaypee Logo 2" />
                </a>
              </span>
              <span className={styles.dInlineBlock}>
                <a href="/">
                  <img src={logo3} className={styles.imgFluid} alt="Jaypee Logo 3" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
