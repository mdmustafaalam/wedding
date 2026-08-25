import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CTASection({ onBookNow, title, sub, primaryLabel, secondaryLabel, secondaryTo }) {
  const navigate = useNavigate()
  return (
    <div className="cta-section">
      <div className="cta-inner">
        <span className="section-label">Begin Your Journey</span>
        <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="cta-sub">{sub}</p>
        <div className="cta-btns">
          <button className="btn btn-gold btn-lg" onClick={onBookNow}>
            <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
            {primaryLabel || 'Book Free Consultation'}
          </button>
          {secondaryLabel && (
            <button className="btn btn-outline btn-lg" onClick={() => navigate(secondaryTo || '/contact')}>
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
