import styles from '../../pages/Home.module.css'
import coverImage from '../../assets/jaypee-AACS.jpg'
import JournalHighlights from './JournalHighlights'

export default function HeroCard() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.coverCard}>
          <img src={coverImage} alt="AACS journal cover" className={styles.coverImage} />
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoCardHeader}>
            <a href="#" className={styles.submitButton}>
              Submit Manuscript
            </a>
          </div>

          <p className={styles.infoText}>
            Aims & Scope Ownership and Management About the Institution About the Publisher Publication frequency Copyright and Licensing Open Access Policy Self-Archiving Policy for Authors Publication Ethics{' '}
            <a href="#" className={styles.infoLink}>
              Read More..
            </a>
          </p>
        </div>

        <div className={styles.searchPanel}>
          <div className={styles.searchRow}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Enter keywords to search"
            />
            <button type="button" className={styles.searchButton}>
              Search
            </button>
          </div>

          <div className={styles.optionsRow}>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="journalScope" defaultChecked /> All Journals
              </label>
              <label>
                <input type="radio" name="journalScope" /> AACS
              </label>
            </div>
            <a href="#" className={styles.advancedLink}>
              Advanced Search
            </a>
          </div>

          <div className={styles.highlightsHeading}>Journal Highlights</div>
          <JournalHighlights />
        </div>
      </div>
    </section>
  )
}
