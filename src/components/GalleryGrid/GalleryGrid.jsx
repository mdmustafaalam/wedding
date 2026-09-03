import React, { useState, useEffect, useRef } from 'react'
import { galleryItems, galleryVideos } from '../../assets/data'
import './GalleryGrid.css'

const CATEGORIES = [
  { id: 'all',         label: 'All',         icon: 'fa-solid fa-grip' },
  { id: 'ceremony',    label: 'Ceremony',    icon: 'fa-solid fa-church' },
  { id: 'reception',   label: 'Reception',   icon: 'fa-solid fa-champagne-glasses' },
  { id: 'decoration',  label: 'Decoration',  icon: 'fa-solid fa-wand-magic-sparkles' },
  { id: 'photography', label: 'Photography', icon: 'fa-solid fa-camera' },
  { id: 'couples',     label: 'Couples',     icon: 'fa-solid fa-heart' },
  { id: 'videos',      label: 'Videos',      icon: 'fa-solid fa-video' },
]

const countFor = (id) => {
  if (id === 'all') return galleryItems.length + galleryVideos.length
  if (id === 'videos') return galleryVideos.length
  return galleryItems.filter(g => g.category === id).length
}

export default function GalleryGrid({ limit }) {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const [videoLightbox, setVideoLightbox] = useState(null)
  const [animKey, setAnimKey] = useState(0)
  const prevActive = useRef('all')
  const videoRef = useRef(null)

  const filteredImages = (active === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === active)
  )

  const showVideos = active === 'all' || active === 'videos'
  const filteredVideos = showVideos ? galleryVideos : []

  const displayItems = active === 'videos'
    ? []
    : active === 'all'
      ? filteredImages.slice(0, limit)
      : filteredImages.slice(0, limit)

  const handleFilter = (catId) => {
    if (catId === active) return
    prevActive.current = active
    setActive(catId)
    setAnimKey(k => k + 1)
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setLightbox(null)
        setVideoLightbox(null)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (videoLightbox && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [videoLightbox])

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

      {/* Video section */}
      {active === 'videos' && (
        <div className="gallery-masonry" key={`videos-${animKey}`}>
          {filteredVideos.map((item, idx) => (
            <div
              key={`${item.id}-${animKey}`}
              className="gallery-item gallery-item--video"
              style={{ animationDelay: `${idx * 60}ms` }}
              onClick={() => setVideoLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${item.label}`}
              onKeyDown={e => e.key === 'Enter' && setVideoLightbox(item)}
            >
              <div className="gallery-img gallery-img--video" style={{ height: item.height }}>
                <video
                  src={item.video}
                  className="gallery-video-thumb"
                  muted
                  preload="metadata"
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => { e.target.pause(); e.target.currentTime = 0 }}
                />
                <div className="gallery-overlay">
                  <i className="fa-solid fa-play" aria-hidden="true" />
                </div>
                <div className="video-badge">
                  <i className="fa-solid fa-play" aria-hidden="true" />
                </div>
              </div>
              <div className="gallery-label">
                <i className="fa-solid fa-video" aria-hidden="true" />
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image masonry grid */}
      {active !== 'videos' && (
        <div className="gallery-masonry" key={animKey}>
          {displayItems.map((item, idx) => (
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
      )}

      {/* Combined "all" view — images + videos section */}
      {active === 'all' && filteredVideos.length > 0 && (
        <>
          <div className="video-section-header reveal">
            <span className="section-label">
              <i className="fa-solid fa-video" aria-hidden="true" /> Our Videos
            </span>
            <h2 className="section-title">
              Love Stories<br /><span className="gold">Captured on Film</span>
            </h2>
            <div className="divider center" />
          </div>
          <div className="gallery-masonry" key={`all-videos-${animKey}`}>
            {filteredVideos.map((item, idx) => (
              <div
                key={`${item.id}-${animKey}`}
                className="gallery-item gallery-item--video"
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={() => setVideoLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${item.label}`}
                onKeyDown={e => e.key === 'Enter' && setVideoLightbox(item)}
              >
                <div className="gallery-img gallery-img--video" style={{ height: item.height }}>
                  <video
                    src={item.video}
                    className="gallery-video-thumb"
                    muted
                    preload="metadata"
                    onMouseOver={e => e.target.play()}
                    onMouseOut={e => { e.target.pause(); e.target.currentTime = 0 }}
                  />
                  <div className="gallery-overlay">
                    <i className="fa-solid fa-play" aria-hidden="true" />
                  </div>
                  <div className="video-badge">
                    <i className="fa-solid fa-play" aria-hidden="true" />
                  </div>
                </div>
                <div className="gallery-label">
                  <i className="fa-solid fa-video" aria-hidden="true" />
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Image Lightbox */}
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

      {/* Video Player Popup */}
      {videoLightbox && (
        <div
          className="video-backdrop"
          onClick={() => setVideoLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Play ${videoLightbox.label}`}
        >
          <div className="video-player-box" onClick={e => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setVideoLightbox(null)}
              aria-label="Close video player"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
            <div className="video-player-wrapper">
              <video
                ref={videoRef}
                src={videoLightbox.video}
                controls
                autoPlay
                muted
                className="video-player"
              />
            </div>
            <div className="lightbox-info">
              <span className="lightbox-cat">
                <i className="fa-solid fa-video" aria-hidden="true" />
                {videoLightbox.category}
              </span>
              <h3 className="lightbox-title">{videoLightbox.label}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
