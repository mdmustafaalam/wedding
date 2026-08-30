import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import './Loader.css'

export default function Loader({ onDone }) {
  const { isDark } = useTheme()
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1400)
    const t2 = setTimeout(() => onDone(), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`loader ${fading ? 'loader--fading' : ''}`} aria-label="Loading JMS Wedding Planner">
      <div className="loader-logo">
        <img src="/jmsDarak.png" alt="JMS Wedding Planner" className="loader-logo-img" style={isDark ? { display: 'none' } : undefined} />
        <img src="/jmsLight.png" alt="JMS Wedding Planner" className="loader-logo-img" style={isDark ? undefined : { display: 'none' }} />
        <em>Wedding Planner</em>
      </div>
      <div className="loader-spinner" aria-hidden="true">
        <div className="loader-spinner-ring" />
      </div>
      <p className="loader-tagline">Creating Your Dream</p>
    </div>
  )
}
