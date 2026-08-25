import React from 'react'
import { stats } from '../../assets/data'
import './Stats.css'

export default function Stats() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-icon">
            <i className={s.icon} aria-hidden="true" />
          </div>
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
