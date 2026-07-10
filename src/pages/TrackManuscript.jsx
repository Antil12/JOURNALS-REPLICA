import { useState } from 'react'
import styles from './TrackManuscript.module.css'

const DETAIL_FIELDS = [
  { key: 'manuscriptId', label: "Manuscript ID:" },
  { key: 'title', label: 'Title:' },
  { key: 'authors', label: "Author's:" },
  { key: 'createdDate', label: 'Created Date:' },
  { key: 'submittedDate', label: 'Submitted Date:' },
  { key: 'status', label: 'Manuscript Status:' },
  { key: 'statusDescription', label: 'Status Description:' },
  { key: 'issue', label: 'Issue:' },
]

const emptyDetails = DETAIL_FIELDS.reduce((acc, f) => ({ ...acc, [f.key]: '' }), {})

export default function TrackManuscript() {
  const [manuscriptId, setManuscriptId] = useState('')
  const [details, setDetails] = useState(emptyDetails)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    setHasSearched(true)
    setError('')
    setDetails(emptyDetails)

    if (!manuscriptId.trim()) {
      setError('Manuscript Id is invalid')
      return
    }

    // TODO: wire up to the real tracking API/endpoint.
    // Placeholder lookup — replace with an actual fetch() call, e.g.:
    // const res = await fetch(`/api/manuscript-track/AACS?id=${encodeURIComponent(manuscriptId)}`)
    // const data = await res.json()
    // if (data.found) { setDetails(data); } else { setError('Manuscript Id is invalid'); }
    setError('Manuscript Id is invalid')
  }

  /*
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>Author Zone</span>
            <h1 className={styles.pageHeading}>Track Manuscript</h1>
            <p className={styles.intro}>
              Enter your Manuscript ID below to check its current status — from initial receipt through
              peer review, revision, and final publication.
            </p>
          </div>

          <section className={styles.sectionCard}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <label htmlFor="manuscriptId" className={styles.searchLabel}>
                ManuScript ID:
              </label>
              <input
                id="manuscriptId"
                type="text"
                className={styles.searchInput}
                value={manuscriptId}
                onChange={(e) => setManuscriptId(e.target.value)}
                placeholder="e.g. JPJ1296170815"
                autoComplete="off"
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Manuscript Details</h2>

            <dl className={styles.detailsList}>
              {DETAIL_FIELDS.map((field) => (
                <div key={field.key} className={styles.detailsRow}>
                  <dt className={styles.detailsLabel}>{field.label}</dt>
                  <dd className={styles.detailsValue}>{details[field.key] || '—'}</dd>
                </div>
              ))}
            </dl>

            {hasSearched && error && (
              <p className={styles.errorMessage} role="alert">
                {error}
              </p>
            )}
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Support</h2>
            <ul className={styles.bulletList}>
              <li>Use the manuscript portal to review status updates and revision requests.</li>
              <li>Contact the editorial office if the status appears delayed or requires clarification.</li>
              <li>Keep communication details current to receive prompt notifications.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
  */

  return null
}