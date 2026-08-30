import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { services } from '../../assets/data'
import './Contact.css'

const initialForm = {
  name: '', email: '', phone: '', date: '', service: '', message: '',
}

export default function Contact({ onBookNow }) {
  useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Visit Our Studio',
      lines: ['42 Rose Garden Lane, Bandra West', 'Mumbai, Maharashtra 400050'],
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email Us',
      lines: ['hello@jmsweddingplanner.in', 'bookings@jmsweddingplanner.in'],
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 91234 56789'],
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Working Hours',
      lines: ['Monday – Saturday: 9AM – 7PM', 'Sunday: By Appointment Only'],
    },
  ]

  const socials = [
    { icon: 'fa-brands fa-instagram',   label: 'Instagram',  handle: '@jmsweddingplanner' },
    { icon: 'fa-brands fa-facebook-f',  label: 'Facebook',   handle: 'JMS Wedding Planner' },
    // { icon: 'fa-brands fa-pinterest-p', label: 'Pinterest',  handle: 'jmsweddingplanner' },
    // { icon: 'fa-brands fa-youtube',     label: 'YouTube',    handle: 'JMS Wedding Planner' },
  ]

  return (
    <main>
      <PageHeader page="contact"
        eyebrow="Reach Out"
        title="Get in <em>Touch</em>"
        sub="We'd love to hear about your dream wedding"
      />

      <section className="section-pad">
        <div className="container contact-grid">

          {/* ── Left: Info ── */}
          <div className="contact-info-col reveal">
            <span className="section-label">
              <i className="fa-solid fa-headset" aria-hidden="true" /> We're Here for You
            </span>
            <h2 className="section-title">
              Let's <span className="gold">Connect</span>
            </h2>
            <div className="divider" />
            <p className="contact-intro">
              Whether you're just starting to dream or ready to book, our team is here to help you take the next step.
            </p>

            <div className="contact-info-list">
              {contactItems.map(item => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="contact-info-title">{item.title}</div>
                    {item.lines.map(l => (
                      <div key={l} className="contact-info-line">{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact-socials">
              <div className="contact-socials-title">
                <i className="fa-solid fa-share-nodes" aria-hidden="true" /> Follow Our Journey
              </div>
              <div className="social-list">
                {socials.map(s => (
                  <a key={s.label} href="#" className="social-item" aria-label={s.label}>
                    <div className="social-item-icon">
                      <i className={s.icon} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="social-item-name">{s.label}</div>
                      <div className="social-item-handle">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            {/* <div className="map-placeholder">
              <i className="fa-solid fa-map-location-dot map-icon" aria-hidden="true" />
              <p className="map-address">42 Rose Garden Lane, Bandra West, Mumbai</p>
              <p className="map-note">Interactive map available in production build</p>
            </div> */}
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-form-col card reveal reveal-delay-2">
            {submitted ? (
              <div className="contact-success">
                <i className="fa-solid fa-circle-check contact-success-icon" aria-hidden="true" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll reply within 24 hours to begin planning your dream day.</p>
                <button className="btn btn-gold" onClick={() => setSubmitted(false)}>
                  <i className="fa-solid fa-rotate-left" aria-hidden="true" /> Send Another
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-header">
                  <h3 className="contact-form-title">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                    Send Us a Message
                  </h3>
                  <p className="contact-form-sub">We typically respond within a few hours.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="c-name">
                        <i className="fa-solid fa-user" aria-hidden="true" /> Full Name
                      </label>
                      <input id="c-name" name="name" type="text" placeholder="Your full name"
                        value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">
                        <i className="fa-solid fa-envelope" aria-hidden="true" /> Email
                      </label>
                      <input id="c-email" name="email" type="email" placeholder="your@email.com"
                        value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="c-phone">
                        <i className="fa-solid fa-phone" aria-hidden="true" /> Phone Number
                      </label>
                      <input id="c-phone" name="phone" type="tel" placeholder="+91 98765 43210"
                        value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-date">
                        <i className="fa-solid fa-calendar" aria-hidden="true" /> Event Date
                      </label>
                      <input id="c-date" name="date" type="date"
                        value={form.date} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="c-service">
                      <i className="fa-solid fa-list-check" aria-hidden="true" /> Service Required
                    </label>
                    <select id="c-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Complete Package">Complete Package</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="c-message">
                      <i className="fa-solid fa-pen-to-square" aria-hidden="true" /> Message
                    </label>
                    <textarea id="c-message" name="message"
                      placeholder="Tell us about your dream wedding — theme, venue ideas, special requests..."
                      value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg contact-submit">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Prefer to Talk? <em>Call Us.</em>"
        sub="Our planning team is available Monday to Saturday, 9AM to 7PM."
        primaryLabel="Book a Call"
      />
    </main>
  )
}
