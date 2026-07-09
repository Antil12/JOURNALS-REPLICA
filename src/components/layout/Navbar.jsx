import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const menu = [
  { label: 'Home', to: '/', active: true },
  {
    label: 'About Journal',
    children: [
      { label: 'Journal Information', to: '/journal-information' },
      { label: 'Editorial Board', to: '/editorial-board' },
      { label: 'Policy', to: '/policy' },
    ],
  },
  {
    label: 'Author Zone',
    children: [
      { label: 'Author Instructions', to: '/author-instructions' },
      { label: 'Track Manuscript', to: '/track-manuscript' },
    ],
  },
  { label: 'Current Issue', to: '/current-issue' },
  { label: 'All Issues', to: '/all-issues' },
  { label: 'Online First', to: '/online-first' },
  {
    label: 'Business Opportunities',
    children: [
      { label: 'Advertisement', to: '/advertisement' },
      { label: 'Generate Online Invoice', to: '/generate-online-invoice' },
      { label: 'Order Hard Copy', to: '/order-hard-copy' },
      { label: 'Order Reprint', to: '/order-reprint' },
      { label: 'Rights & Permissions', to: '/rights-permissions' },
    ],
  },
  { label: 'Subscription', to: '/subscription' },
  {
    label: 'Contact Us',
    children: [
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Grievance Redressal', to: '/grievance-redressal' },
    ],
  },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [])

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  return (
    <div className={styles.navbar} ref={navRef}>
      <div className={styles.navInner}>
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.menu} ${mobileOpen ? styles.open : ''}`}>
          {menu.map((item) => {
            const hasChildren = Array.isArray(item.children)
            const isOpen = openDropdown === item.label

            return (
              <li
                key={item.label}
                className={`${styles.menuItem} ${hasChildren && isOpen ? styles.open : ''}`}
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                {item.to ? (
                  <Link className={`${styles.menuLink} ${item.active ? styles.active : ''}`} to={item.to}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={styles.menuButton}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <span className={styles.caret}>▾</span>
                  </button>
                )}

                {hasChildren && (
                  <div className={styles.dropdown}>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={styles.dropdownItem}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
