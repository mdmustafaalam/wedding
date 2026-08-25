import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Stats from '../../components/Stats/Stats'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { services, testimonials } from '../../assets/data'
import './Home.css'

import ourStory from '../../assets/wedding/b3.jpg'

/* ── 3-Card Testimonial Slider (Screenshot-accurate) ──
   Strategy:
   - Render ALL testimonials in a flex row, shifted by transform
   - Only 3 slots visible: left (peek), center (hero), right (peek)
   - Transition is pure CSS transform — text never re-mounts / rewrites
   - No key changes on cards — stable DOM = stable text
*/
function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef(null)
  const total = testimonials.length

  const goTo = (idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((idx + total) % total)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
    return () => clearInterval(timerRef.current)
  }, [total])

  const handleNav = (idx) => {
    clearInterval(timerRef.current)
    goTo(idx)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
  }

  // Position each card: center=0, left=-1, right=+1, others hidden
  const getPos = (idx) => {
    const diff = ((idx - current) % total + total) % total
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    if (diff === total - 1) return 'left'
    return 'hidden'
  }

  return (
    <div className="home-tslider">
      <div className="home-tslider-stage">
        {testimonials.map((t, idx) => {
          const pos = getPos(idx)
          return (
            <div
              key={idx}
              className={`home-tcard home-tcard--${pos}`}
              onClick={() => pos !== 'center' && handleNav(idx)}
            >
              <div className="home-tcard-quote">
                <i className="fa-solid fa-quote-left" />
              </div>
              <div className="home-tcard-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <p className="home-tcard-text">"{t.text}"</p>
              <div className="home-tcard-author">
                <div className="home-tcard-avatar">{t.initials}</div>
                <div>
                  <div className="home-tcard-name">{t.name}</div>
                  <div className="home-tcard-date">
                    <i className="fa-regular fa-calendar" />
                    {t.date}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div className="home-tslider-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`home-tdot ${i === current ? 'home-tdot--active' : ''}`}
            onClick={() => handleNav(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="home-tarrow home-tarrow--prev"
        onClick={() => handleNav((current - 1 + total) % total)}
        aria-label="Previous">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button className="home-tarrow home-tarrow--next"
        onClick={() => handleNav((current + 1) % total)}
        aria-label="Next">
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  )
}

export default function Home({ onBookNow }) {
  useScrollReveal()
  const navigate = useNavigate()

  return (
    <main>
      <Hero onBookNow={onBookNow} />
      <Stats />

      {/* ── Featured Services ── */}
      <section className="section-pad home-services">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" /> What We Offer
            </span>
            <h2 className="section-title">
              Crafting Every<br /><span className="gold">Perfect Moment</span>
            </h2>
            <div className="divider center" />
            <p className="section-sub" style={{ marginTop: 16 }}>
              From intimate ceremonies to grand celebrations — our full-service studio handles every element with precision and passion.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 56 }}>
            {services.slice(0, 3).map((s, i) => (
              <div key={s.id} className={`reveal reveal-delay-${i + 1}`}>
                <ServiceCard service={s} onBookNow={onBookNow} variant="featured" />
              </div>
            ))}
          </div>
          <div className="home-services-cta reveal">
            <button className="btn btn-outline" onClick={() => navigate('/services')}>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              View All 9 Services
            </button>
          </div>
        </div>
      </section>

      {/* ── About Strip with real dummy image ── */}
      <section className="section-pad home-about">
        <div className="container home-about-grid">
          <div className="home-about-visual reveal">
            <div className="home-about-img-wrap">
              <img
                src={ourStory}
                alt="Wedding ceremony decoration"
                className="home-about-img"
              />
              <div className="home-about-img-overlay" />
              <div className="home-about-img-badge">
                <i className="fa-solid fa-award" aria-hidden="true" />
                <div>
                  <strong>India's Most Trusted</strong>
                  <span>Wedding Studio</span>
                </div>
              </div>
              <div className="home-about-img-stat">
                <span className="home-about-stat-n">500+</span>
                <span className="home-about-stat-l">Weddings Planned</span>
              </div>
            </div>
          </div>

          <div className="home-about-content reveal reveal-delay-2">
            <span className="section-label">
              <i className="fa-solid fa-heart" aria-hidden="true" /> Our Story
            </span>
            <h2 className="section-title">
              A Decade of<br /><span className="gold">Love Stories</span>
            </h2>
            <div className="divider" />
            <p className="home-about-text">
              Founded in 2014 by Aditi Verma, Lumière Weddings has grown from a boutique Mumbai studio into one of India's most celebrated names in luxury wedding planning. Over 500 weddings later, our philosophy remains unchanged: no two celebrations should feel alike.
            </p>
            <ul className="home-about-list">
              {[
                { icon: 'fa-solid fa-check-circle', text: 'Bespoke planning for every couple' },
                { icon: 'fa-solid fa-check-circle', text: 'Network of 50+ vetted premium vendors' },
                { icon: 'fa-solid fa-check-circle', text: '4.9★ rating across 1,200+ reviews' },
              ].map(item => (
                <li key={item.text}>
                  <i className={item.icon} aria-hidden="true" />
                  {item.text}
                </li>
              ))}
            </ul>
            <button className="btn btn-gold" onClick={() => navigate('/about')}>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              Our Full Story
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials – 3-card auto-slider ── */}
      <section className="section-pad home-testimonials">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-heart" aria-hidden="true" /> Love Stories
            </span>
            <h2 className="section-title">
              Words From Our <span className="gold">Couples</span>
            </h2>
            <div className="divider center" />
          </div>
          <div className="reveal" style={{ marginTop: 52 }}>
            <TestimonialSlider />
          </div>
          <div className="home-services-cta reveal">
            <button className="btn btn-outline" onClick={() => navigate('/testimonials')}>
              <i className="fa-solid fa-comments" aria-hidden="true" />
              Read More Stories
            </button>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview – centered filters ── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-images" aria-hidden="true" /> Our Work
            </span>
            <h2 className="section-title">
              A Glimpse of <span className="gold">Magic</span>
            </h2>
            <div className="divider center" />
          </div>
          <div style={{ marginTop: 52 }} className="gallery-center-filters">
            <GalleryGrid limit={8} />
          </div>
          <div className="home-services-cta reveal">
            <button className="btn btn-outline" onClick={() => navigate('/gallery')}>
              <i className="fa-solid fa-images" aria-hidden="true" />
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Ready to Plan Your<br /><em>Dream Wedding?</em>"
        sub="Let's begin with a conversation. Your perfect day starts with a single call."
        primaryLabel="Book Free Consultation"
        secondaryLabel="Get in Touch"
        secondaryTo="/contact"
      />
    </main>
  )
}
