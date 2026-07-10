import styles from '../../pages/Home.module.css'
import siteConfig from '../../config/siteConfig'
import siteContent from '../../config/siteContent'
import JournalHighlights from './JournalHighlights'

export default function HeroCard() {
  const { home } = siteContent

  return (
    <>
      <div className={styles.colLg8Md12Sm12Pb3}>
        <div className={styles.rowInnerDetail}>
          <div className={styles.colSm3Md3Lg3Pr0}>
            <div className={styles.textAlignCenter}>
              <img
                className={`${styles.imgThumbnail} ${styles.imgFluid} ${styles.journalLogoImg} ${styles.bgDark} ${styles.p0} ${styles.borderDark}`}
                src={siteConfig.coverImage}
                alt={`${siteConfig.siteName} cover`}
              />
              <br />
            </div>
          </div>

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
                      href={siteConfig.submitManuscriptUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.submitButton}
                    >
                      <b>{home.submitLabel}</b>
                    </a>
                  </div>
                </div>
              </div>

              <p className={styles.journalDesc}>
                {home.description}{' '}
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

      <div className={styles.colLg4Md12Sm12}>
        <div className={`${styles.leftSpace} ${styles.mobleftSpace}`}>
          <form className={styles.formSearch} action="/searchAction">
            <input
              type="text"
              required
              placeholder={home.searchPlaceholder}
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
                  <input type="radio" name="jCode" value={home.journalCode} />
                  <label>&nbsp;&nbsp;{home.journalCode}</label>
                </span>
              </div>
              <div className={styles.colLg4Md4Sm6TextRightCol12}>
                <a href={`/advSearchAction?jCode=${home.journalCode}`} className={styles.advSearch}>
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
