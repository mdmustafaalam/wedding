import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Footer.css'

export default function Footer() {
  const { isDark } = useTheme()
  const quickLinks = [
    { to: '/',             label: 'Home' },
    { to: '/about',        label: 'About Us' },
    { to: '/services',     label: 'Services' },
    { to: '/gallery',      label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact',      label: 'Contact' },
  ]

  const serviceLinks = [
    'Wedding Planning', 'Venue Selection', 'Decoration & Florals',
    'Photography & Film', 'Catering Services', 'Honeymoon Planning',
  ]

  const socials = [
    { icon: 'fa-brands fa-instagram',  label: 'Instagram' },
    { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
    { icon: 'fa-brands fa-pinterest-p', label: 'Pinterest' },
    { icon: 'fa-brands fa-youtube',    label: 'YouTube' },
  ]

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <img src="/jmsDarak.png" alt="JMS Wedding Planner" className="footer-logo-img" style={isDark ? { display: 'none' } : undefined} />
            <img src="/jmsLight.png" alt="JMS Wedding Planner" className="footer-logo-img" style={isDark ? undefined : { display: 'none' }} />
            <em>Wedding Planner</em>
          </div>
          <p className="footer-desc">
            Crafting extraordinary love stories since 1990. Your dream wedding is our greatest creation — elegant, personal, and unforgettable.
          </p>
          <div className="social-row">
            {socials.map(s => (
              <a key={s.label} href="#" className="social-btn" aria-label={s.label} title={s.label}>
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-list">
            {quickLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to}>
                  <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <ul className="footer-list">
            {serviceLinks.map(s => (
              <li key={s}>
                <Link to="/services">
                  <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <ul className="footer-contact">
            <li>
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              Baba Garib Asthan, Near Sudha Dairy, Muzaffarpur, Bihar 842001
            </li>
            <li>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              hello@jmsweddingplanner.in
            </li>
            <li>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +91 73248 84890
            </li>
            <li>
              <i className="fa-solid fa-clock" aria-hidden="true" />
              Open 24/7 — Always Available
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            <i className="fa-regular fa-copyright" aria-hidden="true" /> {new Date().getFullYear()} JMS Wedding Planner. All rights reserved.
          </p>
          <p>Crafted with <i className="fa-solid fa-heart footer-heart" aria-hidden="true" /> for love stories.</p>
        </div>
      </div>
    </footer>
  )
}
