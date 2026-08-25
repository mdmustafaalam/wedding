import React from 'react'
import './FloatBookBtn.css'

export default function FloatBookBtn({ onClick }) {
  return (
    <button className="float-book-btn" onClick={onClick} aria-label="Open booking form">
      <i className="fa-solid fa-ring" aria-hidden="true" />
      <span>Book Now</span>
    </button>
  )
}
