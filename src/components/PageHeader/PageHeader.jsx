import React, { useEffect, useRef } from 'react'
import './PageHeader.css'

// Each page gets unique config
const PAGE_CONFIGS = {
  about: {
    icon: 'fa-solid fa-circle-info',
    emoji: '💍',
    accentIcon: 'fa-solid fa-heart',
    particles: ['fa-solid fa-heart', 'fa-solid fa-ring', 'fa-solid fa-star', 'fa-solid fa-spa'],
    gradient: 'linear-gradient(135deg, #0a0806 0%, #1a1008 50%, #0d0a06 100%)',
    tag: 'Est. 1990 · Muzaffarpur, India',
  },
  services: {
    icon: 'fa-solid fa-wand-magic-sparkles',
    emoji: '✨',
    accentIcon: 'fa-solid fa-wand-magic-sparkles',
    particles: ['fa-solid fa-wand-magic-sparkles', 'fa-solid fa-ring', 'fa-solid fa-camera', 'fa-solid fa-utensils'],
    gradient: 'linear-gradient(135deg, #080a0a 0%, #0d141a 50%, #080d10 100%)',
    tag: '9 Premium Services',
  },
  gallery: {
    icon: 'fa-solid fa-images',
    emoji: '📸',
    accentIcon: 'fa-solid fa-camera',
    particles: ['fa-solid fa-camera', 'fa-solid fa-images', 'fa-solid fa-heart', 'fa-solid fa-star'],
    gradient: 'linear-gradient(135deg, #0a0808 0%, #1a0d10 50%, #0d0808 100%)',
    tag: '12+ Curated Portfolios',
  },
  testimonials: {
    icon: 'fa-solid fa-star',
    emoji: '⭐',
    accentIcon: 'fa-solid fa-quote-left',
    particles: ['fa-solid fa-star', 'fa-solid fa-heart', 'fa-solid fa-ring', 'fa-regular fa-face-smile'],
    gradient: 'linear-gradient(135deg, #080a06 0%, #0d1408 50%, #08100a 100%)',
    tag: '1000+ Happy Couples',
  },
  contact: {
    icon: 'fa-solid fa-paper-plane',
    emoji: '✉️',
    accentIcon: 'fa-solid fa-headset',
    particles: ['fa-solid fa-paper-plane', 'fa-solid fa-phone', 'fa-solid fa-envelope', 'fa-solid fa-location-dot'],
    gradient: 'linear-gradient(135deg, #08080a 0%, #0d0d1a 50%, #08080f 100%)',
    tag: 'We Reply Within 24 Hours',
  },
  privacy: {
    icon: 'fa-solid fa-shield-halved',
    emoji: '🔒',
    accentIcon: 'fa-solid fa-lock',
    particles: ['fa-solid fa-shield-halved', 'fa-solid fa-lock', 'fa-solid fa-user-shield', 'fa-solid fa-key'],
    gradient: 'linear-gradient(135deg, #06080a 0%, #08101a 50%, #06080d 100%)',
    tag: 'Your Privacy Matters',
  },
  terms: {
    icon: 'fa-solid fa-file-contract',
    emoji: '📋',
    accentIcon: 'fa-solid fa-gavel',
    particles: ['fa-solid fa-file-contract', 'fa-solid fa-gavel', 'fa-solid fa-scale-balanced', 'fa-solid fa-scroll'],
    gradient: 'linear-gradient(135deg, #080806 0%, #101008 50%, #0a0a06 100%)',
    tag: 'Legal Framework',
  },
  return: {
    icon: 'fa-solid fa-arrow-rotate-left',
    emoji: '🔄',
    accentIcon: 'fa-solid fa-rotate',
    particles: ['fa-solid fa-arrow-rotate-left', 'fa-solid fa-rotate', 'fa-solid fa-undo', 'fa-solid fa-circle-check'],
    gradient: 'linear-gradient(135deg, #0a0806 0%, #141008 50%, #0d0a06 100%)',
    tag: 'Fair & Transparent',
  },
}

export default function PageHeader({ eyebrow, title, sub, page = 'about' }) {
  const particlesRef = useRef(null)
  const config = PAGE_CONFIGS[page] || PAGE_CONFIGS.about

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const particles = []
    for (let i = 0; i < 10; i++) {
      const el = document.createElement('i')
      el.className = `${config.particles[i % config.particles.length]} ph-particle`
      el.setAttribute('aria-hidden', 'true')
      el.style.cssText = `
        left: ${10 + Math.random() * 80}%;
        top: ${10 + Math.random() * 80}%;
        font-size: ${10 + Math.random() * 14}px;
        animation-duration: ${4 + Math.random() * 6}s;
        animation-delay: ${Math.random() * 4}s;
      `
      container.appendChild(el)
      particles.push(el)
    }
    return () => particles.forEach(p => p.remove())
  }, [page])

  return (
    <div className="page-header" style={{ background: config.gradient }}>
      {/* Radial glow */}
      <div className="ph-glow" aria-hidden="true" />

      {/* Floating particles */}
      <div className="ph-particles" ref={particlesRef} aria-hidden="true" />

      {/* Big decorative icon */}
      <div className="ph-bg-icon" aria-hidden="true">
        <i className={config.accentIcon} />
      </div>

      {/* Decorative circles */}
      <div className="ph-circle ph-circle-1" aria-hidden="true" />
      <div className="ph-circle ph-circle-2" aria-hidden="true" />
      <div className="ph-circle ph-circle-3" aria-hidden="true" />

      {/* Content */}
      <div className="ph-content">
        {/* Tag */}
        <div className="ph-tag">
          <i className={config.icon} aria-hidden="true" />
          {config.tag}
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="ph-eyebrow">{eyebrow}</div>
        )}

        {/* Title */}
        <h1
          className="ph-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Divider */}
        <div className="ph-divider" aria-hidden="true">
          <div className="ph-divider-line" />
          <i className="fa-solid fa-ring ph-divider-icon" aria-hidden="true" />
          <div className="ph-divider-line" />
        </div>

        {/* Sub */}
        {sub && <p className="ph-sub">{sub}</p>}
      </div>

      {/* Bottom wave */}
      <div className="ph-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--bg)" />
        </svg>
      </div>
    </div>
  )
}
