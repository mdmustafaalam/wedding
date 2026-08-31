import React, { useState, useEffect, useRef } from 'react'
import { galleryItems } from '../../assets/data'
import './GalleryGrid.css'

const CATEGORIES = [
  { id: 'all',         label: 'All',         icon: 'fa-solid fa-grip' },
  { id: 'ceremony',    label: 'Ceremony',    icon: 'fa-solid fa-church' },
  { id: 'reception',   label: 'Reception',   icon: 'fa-solid fa-champagne-glasses' },
  { id: 'decoration',  label: 'Decoration',  icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: 'photography', label: 'Photography', icon: 'fa-solid fa-camera' },
  { id: 'couples',     label: 'Couples',     icon: 'fa-solid fa-heart' },
]

const countFor = (id) => id === 'all'
  ? galleryItems.length
  : galleryItems.filter(g => g.category === id).length

export default function GalleryGrid({ limit }) {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const [animKey, setAnimKey] = useState(0)          // ← force re-mount on filter change
  const prevActive = useRef('all')

  const filtered = (active === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === active)
  ).slice(0, limit)

  // Whenever filter changes, bump animKey so items re-mount and reveal fires
  const handleFilter = (catId) => {
    if (catId === active) return
    prevActive.current = active
    setActive(catId)
    setAnimKey(k => k + 1)
  }

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="gallery-wrap">
      {/* Filters */}
      <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${active === cat.id ? 'filter-btn--active' : ''}`}
            onClick={() => handleFilter(cat.id)}
            aria-pressed={active === cat.id}
          >
            <i className={cat.icon} aria-hidden="true" />
            {cat.label}
            <span className="filter-count">{countFor(cat.id)}</span>
          </button>
        ))}
      </div>

      {/* Masonry grid — key forces full re-render on filter change */}
      <div className="gallery-masonry" key={animKey}>
        {filtered.map((item, idx) => (
          <div
            key={`${item.id}-${animKey}`}
            className="gallery-item"
            style={{ animationDelay: `${idx * 60}ms` }}
            onClick={() => setLightbox(item)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.label}`}
            onKeyDown={e => e.key === 'Enter' && setLightbox(item)}
          >
            <div className="gallery-img" style={{ height: item.height }}>
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="gallery-photo"
              />
              <div className="gallery-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" aria-hidden="true" />
              </div>
            </div>
            <div className="gallery-label">
              <i className="fa-solid fa-image" aria-hidden="true" />
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <div className="lightbox-box" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
            <div className="lightbox-img">
              <img src={lightbox.image} alt={lightbox.label} className="lightbox-photo" />
            </div>
            <div className="lightbox-info">
              <span className="lightbox-cat">
                <i className="fa-solid fa-tag" aria-hidden="true" />
                {lightbox.category}
              </span>
              <h3 className="lightbox-title">{lightbox.label}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}