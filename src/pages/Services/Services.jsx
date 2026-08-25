import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { services } from '../../assets/data'
import './Services.css'

export default function Services({ onBookNow }) {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="services"
        eyebrow="Full-Service Studio"
        title="Our <em>Services</em>"
        sub="Every detail. Every dream. Every moment."
      />

      {/* ── Services Grid ── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-list-check" aria-hidden="true" /> Everything You Need
            </span>
            <h2 className="section-title">
              Nine Services, One <span className="gold">Dedicated Team</span>
            </h2>
            <div className="divider center" />
            <p className="section-sub" style={{ marginTop: 16 }}>
              Comprehensive support from first consultation to final farewell — zero compromises.
            </p>
          </div>

          <div className="services-equal-grid" style={{ marginTop: 56 }}>
            {services.map((s, i) => (
              <div key={s.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <ServiceCard service={s} onBookNow={onBookNow} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section className="section-pad services-process">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-map-signs" aria-hidden="true" /> How It Works
            </span>
            <h2 className="section-title">From Hello to <span className="gold">"I Do"</span></h2>
            <div className="divider center" />
          </div>
          <div className="process-grid">
            {[
              { step: '01', icon: 'fa-solid fa-handshake', title: 'Free Consultation', desc: 'We meet, listen, and understand your vision, preferences, and budget in detail.' },
              { step: '02', icon: 'fa-solid fa-palette', title: 'Custom Proposal', desc: 'We craft a bespoke plan — venues, vendors, décor, timeline — tailored entirely to you.' },
              { step: '03', icon: 'fa-solid fa-gears', title: 'Flawless Execution', desc: 'Our team handles every moving part on the day so you can be fully present.' },
              { step: '04', icon: 'fa-solid fa-heart', title: 'Cherished Memory', desc: 'You leave with the wedding of your dreams and memories that last forever.' },
            ].map((p, i) => (
              <div key={p.step} className={`process-step reveal reveal-delay-${i + 1}`}>
                <div className="process-step-num">{p.step}</div>
                <div className="process-step-icon">
                  <i className={p.icon} aria-hidden="true" />
                </div>
                <h4 className="process-step-title">{p.title}</h4>
                <p className="process-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Not Sure What You Need?"
        sub="Book a free 30-minute consultation and we'll design a custom package just for you."
        primaryLabel="Get a Free Consultation"
      />
    </main>
  )
}
