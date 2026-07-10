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
    ],
  },
  { label: 'Current Issue', to: '/' },
  { label: 'All Issues', to: '/all-issues' },
  { label: 'Online First', to: '/online-first' },
  {
    label: 'Business Opportunities',
    children: [
      { label: 'Advertisement', to: '/advertisement' },
    ],
  },
  { label: 'Subscription', to: '/' },
  {
    label: 'Contact Us',
    children: [
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Grievance Redressal', to: '/grievance-redressal' },
    ],
  },
]

export default function Navbar({ mobileOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null)
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
    <header id={styles.header} ref={navRef}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colLg12}>
            <nav className={styles.navbar}>
              {/* navbarCollapse is hidden on mobile unless mobileOpen is true */}
              <div
                className={`${styles.navbarCollapse} ${mobileOpen ? styles.showCollapse : ''}`}
                id="navbarNav"
              >
                <ul className={styles.navbarNav}>
                  {menu.map((item) => {
                    const hasChildren = Array.isArray(item.children)
                    const isOpen = openDropdown === item.label

                    return (
                      <li
                        key={item.label}
                        className={`${styles.navItem} ${hasChildren ? styles.dropdown : ''}`}
                        onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                        onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                      >
                        {item.to ? (
                          <Link
                            className={`${styles.navLink} ${item.active ? styles.active : ''}`}
                            to={item.to}
                            onClick={onClose}
                          >
                            {item.label}{item.active && <span className={styles.srOnly}>(current)</span>}
                          </Link>
                        ) : (
                          <>
                            <a
                              className={styles.navLink}
                              role="button"
                              aria-haspopup="true"
                              aria-expanded={isOpen ? 'true' : 'false'}
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                toggleDropdown(item.label)
                              }}
                            >
                              <span className={styles.dropdownToggle}>{item.label}</span>
                            </a>
                            {hasChildren && (
                              <div
                                className={`${styles.dropdownMenu} ${isOpen ? styles.show : ''}`}
                                aria-labelledby="navbarDropdownMenuLink"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.to}
                                    to={child.to}
                                    className={styles.dropdownItem}
                                    onClick={() => { setOpenDropdown(null); onClose() }}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
