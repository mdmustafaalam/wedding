import React from 'react'
import './ServiceCard.css'

export default function ServiceCard({ service, onBookNow, variant = 'default' }) {
  return (
    <div className={`service-card card reveal ${variant === 'featured' ? 'service-card--featured' : ''}`}>
      <div className="service-card-icon-wrap">
        <div className="service-card-icon">
          <i className={service.icon} aria-hidden="true" />
        </div>
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.description}</p>
        <button className="service-card-link" onClick={onBookNow}>
          Book This Service
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
