import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

import ceremonyImg1 from '../../assets/wedding/t1.jpg'
import ceremonyImg2 from '../../assets/wedding/t2.jpg'
import ceremonyImg3 from '../../assets/wedding/t3.jpg'
import ceremonyImg4 from '../../assets/wedding/t4.jpg'
import ceremonyVdo1 from '../../assets/wedding/ceremonyVdo.mp4'

const SLIDES = [
  {
    label: 'Royal Arch Ceremony',
    imgUrl: ceremonyImg1,
    tag: 'Ceremony',
    isVideo: false,
  },
  {
    label: 'Wedding Film — Our Story',
    // Dummy public domain wedding MP4
    videoUrl: ceremonyVdo1,
    imgUrl: ceremonyImg1,
    tag: 'Film',
    isVideo: true,
  },
  {
    label: 'Grand Reception Hall',
    imgUrl: ceremonyImg2,
    tag: 'Reception',
    isVideo: false,
  },
  {
    label: 'Floral Decoration',
    imgUrl: ceremonyImg3,
    tag: 'Decoration',
    isVideo: false,
  },
  {
    label: 'Floral Decoration',
    imgUrl: ceremonyImg4,
    tag: 'Decoration',
    isVideo: false,
  },
]

export default function Hero({ onBookNow }) {
  const navigate    = useNavigate()
  const petalsRef   = useRef(null)
  const videoRef    = useRef(null)
  const timerRef    = useRef(null)
  const [slide, setSlide]       = useState(0)
  const [animating, setAnimating] = useState(false)

  /* ── Floating petals ── */
  useEffect(() => {
    const container = petalsRef.current
    if (!container) return
    const symbols = ['✿','❀','✾','⚘','❁']
    const petals = []
    for (let i = 0; i < 14; i++) {
      const el = document.createElement('div')
      el.className = 'petal'
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)]
      el.style.cssText = `
        left:${Math.random()*100}%;
        font-size:${12+Math.random()*14}px;
        animation-duration:${9+Math.random()*11}s;
        animation-delay:${Math.random()*12}s;
      `
      container.appendChild(el)
      petals.push(el)
    }
    return () => petals.forEach(p => p.remove())
  }, [])

  /* ── Play/pause video when slide changes ── */
  useEffect(() => {
    if (SLIDES[slide].isVideo && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }, [slide])

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setSlide((idx + SLIDES.length) % SLIDES.length)
      setAnimating(false)
    }, 400)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(slide + 1), 5500)
    return () => clearInterval(timerRef.current)
  }, [slide])

  const handleDot = (i) => {
    clearInterval(timerRef.current)
    goTo(i)
  }

  const current = SLIDES[slide]

  return (
    <section className="hero" aria-label="Hero section">

      {/* ── Slide backgrounds ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero-slide-bg ${i === slide ? 'hero-slide-bg--active' : ''}`}
          aria-hidden="true"
        >
          <div className="hero-slide-overlay" />

          {/* Video slide */}
          {s.isVideo ? (
            <video
              ref={i === slide ? videoRef : null}
              className="hero-slide-img"
              src={s.videoUrl}
              muted
              loop
              playsInline
              poster={s.imgUrl}
            />
          ) : (
            <img
              src={s.imgUrl}
              alt={s.label}
              className="hero-slide-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          )}

          {/* Right-side framed card */}
          <div className="hero-slide-visual">
            <div className="hero-slide-frame">
              {s.isVideo ? (
                <video
                  className="hero-frame-img"
                  src={s.videoUrl}
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster={s.imgUrl}
                />
              ) : (
                <img src={s.imgUrl} alt={s.label} className="hero-frame-img" />
              )}
              {/* Video play badge */}
              {s.isVideo && (
                <div className="hero-frame-play">
                  <i className="fa-solid fa-play" aria-hidden="true" />
                </div>
              )}
              <div className="hero-frame-caption">
                <span className="hero-frame-tag">
                  {s.isVideo
                    ? <><i className="fa-solid fa-video" /> {s.tag}</>
                    : s.tag
                  }
                </span>
                <span className="hero-frame-label">{s.label}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Petals / rings */}
      <div className="hero-petals" ref={petalsRef} aria-hidden="true" />
      <div className="hero-ring hero-ring-1" aria-hidden="true" />
      <div className="hero-ring hero-ring-2" aria-hidden="true" />

      {/* ── LEFT CONTENT ── */}
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fa-solid fa-star" aria-hidden="true" />
          Est. 1990 · Muzaffarpur, India · 500+ Weddings
          <i className="fa-solid fa-star" aria-hidden="true" />
        </div>

        <h1 className="hero-title">
          Creating Your<br />
          <em>Dream Wedding</em><br />
          Experience
        </h1>

        <p className="hero-sub">
          From the first bloom to the final dance — we orchestrate
          every detail of your most extraordinary day.
        </p>

        <div className="hero-btns">
          <button className="btn btn-gold btn-lg" onClick={onBookNow}>
            <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
            Book Now
          </button>
          <button className="btn hero-btn-outline btn-lg" style={{ border: '1px solid' }}
            onClick={() => navigate('/services')}>
            <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
            Explore Services
          </button>
        </div>

        <div className="hero-stats">
          {[
            { n:'500+', l:'Weddings' },
            { n:'30+',  l:'Years'    },
            { n:'4.9★', l:'Rating'   },
          ].map(s => (
            <div key={s.l} className="hero-stat">
              <span className="hero-stat-n">{s.n}</span>
              <span className="hero-stat-l">{s.l}</span>
            </div>
          ))}
        </div>

        {/* Slide indicator dots — no arrows */}
        <div className="hero-dots" role="tablist" aria-label="Slide navigation">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`hero-dot ${i === slide ? 'hero-dot--active' : ''}`}
              onClick={() => handleDot(i)}
              role="tab"
              aria-selected={i === slide}
              aria-label={`Slide ${i+1}: ${s.label}`}
            >
              {s.isVideo && <i className="fa-solid fa-play hero-dot-video" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
