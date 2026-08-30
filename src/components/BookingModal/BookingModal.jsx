import React, { useState, useEffect } from 'react'
import { getLenis } from '../../utils/lenis'
import './BookingModal.css'

const initialForm = {
  name: '', email: '', phone: '', date: '',
  guests: '', budget: '', services: '', notes: '',
}

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      getLenis()?.stop()
    } else {
      document.body.style.overflow = ''
      getLenis()?.start()
      // Reset after close animation
      setTimeout(() => {
        setSubmitted(false)
        setForm(initialForm)
      }, 300)
    }
    return () => { document.body.style.overflow = ''; getLenis()?.start() }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  if (!isOpen) return null

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a consultation"
    >
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* ── Sticky header with close button ── */}
        <div className="modal-sticky-header">
          <div className="modal-header-left">
            <div className="modal-icon-sm">
              <i className="fa-solid fa-ring" aria-hidden="true" />
            </div>
            <div>
              <h2 className="modal-title">Book a <em>Consultation</em></h2>
              {!submitted && <p className="modal-sub">Tell us about your dream day and we'll make it real.</p>}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="modal-body">
          {submitted ? (
            <div className="booking-success">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
              </div>
              <h3 className="success-title">You're on our list!</h3>
              <p className="success-text">
                Thank you! Our team will reach out within 24 hours to begin crafting your perfect day.
              </p>
              <button className="btn btn-gold" onClick={onClose}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                Done
              </button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-name">
                    <i className="fa-solid fa-user" aria-hidden="true" /> Full Name
                  </label>
                  <input id="b-name" name="name" type="text" placeholder="Priya & Arjun Sharma"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="b-email">
                    <i className="fa-solid fa-envelope" aria-hidden="true" /> Email
                  </label>
                  <input id="b-email" name="email" type="email" placeholder="hello@email.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-phone">
                    <i className="fa-solid fa-phone" aria-hidden="true" /> Phone
                  </label>
                  <input id="b-phone" name="phone" type="tel" placeholder="+91 98765 43210"
                    value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="b-date">
                    <i className="fa-solid fa-calendar" aria-hidden="true" /> Wedding Date
                  </label>
                  <input id="b-date" name="date" type="date"
                    value={form.date} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="b-guests">
                    <i className="fa-solid fa-users" aria-hidden="true" /> Number of Guests
                  </label>
                  <input id="b-guests" name="guests" type="number" placeholder="150"
                    value={form.guests} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="b-budget">
                    <i className="fa-solid fa-indian-rupee-sign" aria-hidden="true" /> Budget Range
                  </label>
                  <select id="b-budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select budget</option>
                    <option>₹5L – ₹10L</option>
                    <option>₹10L – ₹25L</option>
                    <option>₹25L – ₹50L</option>
                    <option>₹50L – ₹1Cr</option>
                    <option>₹1Cr+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="b-services">
                  <i className="fa-solid fa-list-check" aria-hidden="true" /> Services Needed
                </label>
                <select id="b-services" name="services" value={form.services} onChange={handleChange}>
                  <option value="">Select primary service</option>
                  <option>Full Wedding Planning</option>
                  <option>Venue Selection</option>
                  <option>Decoration & Florals</option>
                  <option>Photography & Videography</option>
                  <option>Catering</option>
                  <option>Complete Package</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="b-notes">
                  <i className="fa-solid fa-pen-to-square" aria-hidden="true" /> Additional Notes
                </label>
                <textarea id="b-notes" name="notes"
                  placeholder="Tell us your vision, theme ideas, or any special requirements..."
                  value={form.notes} onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-gold btn-lg booking-submit">
                <i className="fa-solid fa-calendar-check" aria-hidden="true" />
                Book Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
