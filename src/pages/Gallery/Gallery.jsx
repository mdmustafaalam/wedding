import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Gallery({ onBookNow }) {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="gallery"
        eyebrow="Our Portfolio"
        title="The <em>Gallery</em>"
        sub="A visual diary of love, light, and extraordinary celebration"
      />

      <section className="section-pad">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <span className="section-label">
              <i className="fa-solid fa-images" aria-hidden="true" /> Browse by Category
            </span>
            <h2 className="section-title">
              Every Frame, a <span className="gold">Love Story</span>
            </h2>
            <div className="divider center" />
            <p className="section-sub" style={{ marginTop: 16 }}>
              Explore our curated portfolio across ceremonies, décor, couples, and more.
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Want Your Wedding in <em>Our Gallery?</em>"
        sub="Let's create moments worth capturing for a lifetime."
        primaryLabel="Book a Consultation"
      />
    </main>
  )
}
