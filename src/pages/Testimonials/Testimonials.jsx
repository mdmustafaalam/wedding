import React, { useState, useEffect, useRef } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { testimonials } from '../../assets/data'
import './Testimonials.css'

/* ── Fan Carousel — stable DOM, position-based CSS transitions ──
   All cards are always rendered. Position class drives transform.
   No key-based re-mounting = text never rewrites during animation.
*/
function FanCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const total = testimonials.length

  const goTo = (idx) => setCurrent((idx + total) % total)

  const handleNav = (idx) => {
    clearInterval(timerRef.current)
    goTo(idx)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
    return () => clearInterval(timerRef.current)
  }, [total])

  // Compute position label for each card
  const getPos = (idx) => {
    const diff = ((idx - current) % total + total) % total
    if (diff === 0)      return 'center'
    if (diff === 1)      return 'right'
    if (diff === total - 1) return 'left'
    return 'hidden'
  }

  return (
    <div className="fan-carousel">
      <div className="fan-stage">
        {testimonials.map((t, idx) => {
          const pos = getPos(idx)
          return (
            <div
              key={idx}           /* stable key — card never unmounts */
              className={`fan-card fan-card--${pos}`}
              onClick={() => pos !== 'center' && handleNav(idx)}
              aria-hidden={pos === 'hidden'}
            >
              {/* Quote */}
              <div className="fan-quote">
                <i className="fa-solid fa-quote-right" aria-hidden="true" />
              </div>

              {/* Avatar */}
              <div className="fan-avatar">{t.initials}</div>

              {/* Stars */}
              <div className="fan-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star" aria-hidden="true" />
                ))}
              </div>

              {/* Text — always full, clamp via CSS */}
              <p className="fan-text">"{t.text}"</p>

              {/* Read more — shown only on center via CSS */}
              <button className="fan-readmore">
                <i className="fa-solid fa-quote-right" aria-hidden="true" />
                Read More
              </button>

              {/* Author */}
              <div className="fan-author">
                <div className="fan-author-avatar">{t.initials}</div>
                <div>
                  <strong className="fan-name">{t.name}</strong>
                  <span className="fan-role">
                    <i className="fa-regular fa-calendar" aria-hidden="true" />
                    {t.date}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Arrows */}
      <button className="fan-arrow fan-arrow--left"
        onClick={() => handleNav((current - 1 + total) % total)}
        aria-label="Previous testimonial">
        <i className="fa-solid fa-chevron-left" aria-hidden="true" />
      </button>
      <button className="fan-arrow fan-arrow--right"
        onClick={() => handleNav((current + 1) % total)}
        aria-label="Next testimonial">
        <i className="fa-solid fa-chevron-right" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function Testimonials({ onBookNow }) {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="testimonials"
        eyebrow="Client Love"
        title="Love <em>Stories</em>"
        sub="Real couples. Real moments. Real magic from over 1,000 celebrations."
      />

      {/* ── Fan Carousel ── */}
      <section className="section-pad testimonials-fan-section">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 64 }}>
            <span className="section-label">
              <i className="fa-solid fa-star" /> What Our Couples Say
            </span>
            <h2 className="section-title">
              Voices of <span className="gold">Love</span>
            </h2>
            <div className="divider center" />
          </div>
          <div className="reveal">
            <FanCarousel />
          </div>
        </div>
      </section>

      {/* ── Grid of all testimonials ── */}
      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <span className="section-label">
              <i className="fa-solid fa-comments" /> All Reviews
            </span>
            <h2 className="section-title">Every <span className="gold">Story Matters</span></h2>
            <div className="divider center" />
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`t-grid-card card reveal reveal-delay-${(i%3)+1}`}>
                <div className="tgc-quote" aria-hidden="true">
                  <i className="fa-solid fa-quote-left" />
                </div>
                <div className="tgc-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="fa-solid fa-star" aria-hidden="true" />
                  ))}
                </div>
                <p className="tgc-text">"{t.text}"</p>
                <div className="tgc-author">
                  <div className="tgc-avatar">{t.initials}</div>
                  <div>
                    <div className="tgc-name">{t.name}</div>
                    <div className="tgc-date">
                      <i className="fa-regular fa-calendar" aria-hidden="true" />
                      {t.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Get in Touch golden banner */}
          <div className="t-cta reveal" style={{ marginTop: 64 }}>
            <div className="t-cta-content">
              <span className="t-cta-label">
                <i className="fa-solid fa-heart" aria-hidden="true" /> Let's Plan Together
              </span>
              <h3 className="t-cta-title">
                Ready to Write Your Own <em>Love Story?</em>
              </h3>
              <p className="t-cta-sub">
                Our team is here to turn your dream wedding into reality. Reach out for a
                complimentary consultation today.
              </p>
              <div className="t-cta-actions">
                <button className="btn t-cta-btn" onClick={onBookNow}>
                  <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
                  Get in Touch
                </button>
                <a className="btn t-cta-btn t-cta-btn--ghost" href="tel:+917324884890">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Add Your Story to <em>Ours</em>"
        sub="Hundreds of couples have already found their perfect day with us."
        primaryLabel="Begin Your Journey"
      />
    </main>
  )
}
