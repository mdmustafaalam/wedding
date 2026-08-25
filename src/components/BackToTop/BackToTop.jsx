import React, { useState, useEffect } from 'react'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-top ${visible ? 'back-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <i className="fa-solid fa-chevron-up" aria-hidden="true" />
    </button>
  )
}
