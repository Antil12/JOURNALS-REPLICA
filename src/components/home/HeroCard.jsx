import styles from '../../pages/Home.module.css'
import coverImage from '../../assets/jaypee-AACS.jpg'
import JournalHighlights from './JournalHighlights'

export default function HeroCard() {
  return (
    <>
      {/* Left panel - col-lg-8 */}
      <div className={styles.colLg8Md12Sm12Pb3}>
        <div className={styles.rowInnerDetail}>
          {/* Journal cover - col-lg-3 */}
          <div className={styles.colSm3Md3Lg3Pr0}>
            <div className={styles.textAlignCenter}>
              <img 
                className={`${styles.imgThumbnail} ${styles.imgFluid} ${styles.journalLogoImg} ${styles.bgDark} ${styles.p0} ${styles.borderDark}`} 
                src={coverImage} 
                alt="AACS journal cover" 
              />
              <br />
            </div>
          </div>

          {/* Info box - col-lg-9 */}
          <div className={styles.colLg9Md9Sm9PxSm3}>
            <div className={`${styles.ciBox} ${styles.bgWhite} ${styles.p3} ${styles.border}`}>
              <div className={styles.rowMb3}>
                <div className={styles.colLg7Md12Sm12Xs12}>
                  <div className={styles.journalDetail}>
                    <p></p>
                  </div>
                </div>
                <div className={`${styles.colLg5Md6Sm12Xs12} ${styles.pl3PlSm3PlMd3PlLg0} ${styles.sumbitManu}`}>
                  <div className={styles.submitButton}>
                    <a 
                      href="https://manuscript.jaypeejournals.com/login/index.do?journalCode=AACS" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.submitButton}
                    >
                      <b>Submit Manuscript</b>
                    </a>
                  </div>
                </div>
              </div>
              
              <p className={styles.journalDesc}>
                Aims & Scope Ownership and Management About the Institution About the Publisher Publication frequency Copyright and Licensing Open Access Policy Self-Archiving Policy for Authors Publication Ethics{' '}
                <span>
                  <a href="/journal-information" className={styles.infoLink}>
                    <strong>Read More..</strong>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - col-lg-4 */}
      <div className={styles.colLg4Md12Sm12}>
        <div className={`${styles.leftSpace} ${styles.mobleftSpace}`}>
          <form className={styles.formSearch} action="/searchAction">
            <input 
              type="text" 
              required 
              placeholder="Enter keywords to search" 
              className={styles.inputbox}
              name="searchTerm"
            />
            &nbsp;
            <button type="submit" className={`${styles.btnPurple} ${styles.moreButton}`}>
              Search
            </button>
            
            <div className={styles.row}>
              <div className={styles.colLg8Md8Sm6Col12}>
                <span className={styles.rdoLabel} style={{ fontWeight: 'normal' }}>
                  <input type="radio" name="jCode" defaultChecked value="journalAll" />
                  <label>&nbsp;&nbsp;All Journals</label>
                </span>
                &nbsp;
                <span className={styles.rdoLabel}>
                  <input type="radio" name="jCode" value="AACS" />
                  <label>&nbsp;&nbsp;AACS</label>
                </span>
              </div>
              <div className={styles.colLg4Md4Sm6TextRightCol12}>
                <a href="/advSearchAction?jCode=AACS" className={styles.advSearch}>
                  Advanced Search
                </a>
              </div>
            </div>
          </form>
          
          <h5 className={styles.headingAgileinfo1}>Journal Highlights</h5>
          <JournalHighlights />
        </div>
      </div>
    </>
  )
}
