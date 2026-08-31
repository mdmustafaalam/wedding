import React, { useEffect, useRef, useState } from 'react'
import { stats } from '../../assets/data'
import './Stats.css'

function parseNumber(str) {
  const m = str.match(/([\d,]+)(.*)/)
  if (!m) return { value: 0, suffix: str }
  return { value: Number(m[1].replace(/,/g, '')), suffix: m[2] }
}

function useCountUp(target) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStarted(true)
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target])

  return { ref, val }
}

function StatNumber({ number }) {
  const { ref, val } = useCountUp(parseNumber(number).value)
  const suffix = parseNumber(number).suffix
  return <div className="stat-number" ref={ref}>{val}{suffix}</div>
}

export default function Stats() {
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-icon">
            <i className={s.icon} aria-hidden="true" />
          </div>
          <StatNumber number={s.number} />
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
