import React from 'react'
import './TestimonialCard.css'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card card reveal">
      <div className="testimonial-quote" aria-hidden="true">
        <i className="fa-solid fa-quote-left" />
      </div>
      <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star" aria-hidden="true" />
        ))}
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div className="author-info">
          <div className="author-name">{testimonial.name}</div>
          <div className="author-date">
            <i className="fa-regular fa-calendar" aria-hidden="true" />
            {testimonial.date}
          </div>
        </div>
      </div>
    </div>
  )
}
