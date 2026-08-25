import React, { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1400)
    const t2 = setTimeout(() => onDone(), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`loader ${fading ? 'loader--fading' : ''}`} aria-label="Loading Lumière Weddings">
      <div className="loader-logo">
        <i className="fa-solid fa-ring loader-ring-icon" aria-hidden="true" />
        Lumière
      </div>
      <div className="loader-spinner" aria-hidden="true">
        <div className="loader-spinner-ring" />
      </div>
      <p className="loader-tagline">Creating Your Dream</p>
    </div>
  )
}
