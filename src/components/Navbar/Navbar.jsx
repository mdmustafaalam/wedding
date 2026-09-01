import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { scrollToTop } from '../../utils/lenis'
import './Navbar.css'

export default function Navbar({ onBookNow }) {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBookBtn, setShowBookBtn] = useState(() => window.innerWidth >= 769)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Hide the navbar "Book Now" button on mobile — removed from DOM entirely
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')
    const update = () => setShowBookBtn(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Close mobile menu on any route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { to: '/',             label: 'Home',         icon: 'fa-solid fa-house' },
    { to: '/about',        label: 'About',        icon: 'fa-solid fa-circle-info' },
    { to: '/services',     label: 'Services',     icon: 'fa-solid fa-wand-magic-sparkles' },
    { to: '/gallery',      label: 'Gallery',      icon: 'fa-solid fa-images' },
    { to: '/testimonials', label: 'Testimonials', icon: 'fa-solid fa-star' },
    { to: '/contact',      label: 'Contact',      icon: 'fa-solid fa-paper-plane' },
  ]

  // Same-page click → scroll to top smoothly
  const handleNavClick = (to, e) => {
    if (location.pathname === to) {
      e.preventDefault()
      scrollToTop(false)
    }
    closeMenu()
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate('/')}>
            <img src="/jmsDarak.png" alt="JMS Wedding Planner" className="nav-logo-img" style={isDark ? { display: 'none' } : undefined} />
            <img src="/jmsLight.png" alt="JMS Wedding Planner" className="nav-logo-img" style={isDark ? undefined : { display: 'none' }} />
            <em>Wedding Planner</em>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={(e) => handleNavClick(link.to, e)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
            </button>
            {showBookBtn && (
              <button className="btn btn-gold nav-book-btn" onClick={onBookNow}>
                <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
                Book Now
              </button>
            )}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu OVERLAY — outside navbar so it's full screen */}
      <div
        className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay backdrop */}
        <div className="mobile-overlay-backdrop" onClick={closeMenu} />

        {/* Drawer panel */}
        <div className="mobile-drawer">
          {/* Drawer header */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-logo">
              <img src="/jmsDarak.png" alt="JMS Wedding Planner" className="mobile-drawer-logo-img" style={isDark ? { display: 'none' } : undefined} />
              <img src="/jmsLight.png" alt="JMS Wedding Planner" className="mobile-drawer-logo-img" style={isDark ? undefined : { display: 'none' }} />
              <em>Wedding Planner</em>
            </div>
            <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mobile-nav">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                }
                onClick={(e) => handleNavClick(link.to, e)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="mobile-nav-icon">
                  <i className={link.icon} aria-hidden="true" />
                </span>
                {link.label}
                <i className="fa-solid fa-chevron-right mobile-nav-arrow" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-contact">
              <a href="tel:+917324884890">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                +91 73248 84890
              </a>
              <a href="mailto:jmsweddingplanner@gmail.com">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                jmsweddingplanner@gmail.com
              </a>
            </div>
            <button className="btn btn-gold mobile-book-btn" onClick={() => { onBookNow(); closeMenu() }}>
              <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
