import React from 'react'
import './FloatBookBtn.css'

export default function FloatBookBtn() {
  return (
    <a
      className="float-book-btn"
      href="https://wa.me/917324884890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  )
}
