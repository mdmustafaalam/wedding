import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import CTASection from '../../components/CTASection/CTASection'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { team, whyUs } from '../../assets/data'
import './About.css'

const TEAM_IMGS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
]

const TEAM_SOCIALS = [
  { icon: 'fa-brands fa-instagram', url: '#' },
  { icon: 'fa-brands fa-linkedin-in', url: '#' },
]

export default function About({ onBookNow }) {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="about"
        eyebrow="Our Story"
        title="About <em>JMS</em>"
        sub="A decade of extraordinary love stories, one at a time"
      />

      {/* ── Story with real dummy image ── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: 48 }}>
            <span className="section-label">
              <i className="fa-solid fa-book-open" aria-hidden="true" /> Who We Are
            </span>
            <h2 className="section-title">
              Born from a <span className="gold">Passion</span> for Love
            </h2>
            <div className="divider center" />
          </div>
          <div className="about-story-grid">
            <div className="reveal">
              <p className="about-body-text" style={{ marginTop: 0 }}>
                JMS Wedding Planner was founded in 1990 by Sunil Kumar, a bridal stylist who believed every couple deserved a wedding as unique as their love story. What began as a boutique studio in Muzaffarpur, Bihar has grown into one of India's most trusted names in luxury wedding planning.
              </p>
              <p className="about-body-text">
                Over 500 weddings later, our philosophy remains unchanged: no two celebrations should feel alike. We listen deeply, design boldly, and execute flawlessly — bringing every couple's vision to life with heart and precision.
              </p>

              {/* Feature checklist */}
              <div className="about-features">
                <div className="about-feature">
                  <span className="about-feature-icon"><i className="fa-solid fa-check" aria-hidden="true" /></span>
                  <div>
                    <strong>End-to-End Planning</strong>
                    <p>From venue to vendor, styling to coordination — we manage every layer of your celebration.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon"><i className="fa-solid fa-check" aria-hidden="true" /></span>
                  <div>
                    <strong>Bespoke Design</strong>
                    <p>Every theme, palette, and detail is crafted uniquely around your love story — never recycled.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon"><i className="fa-solid fa-check" aria-hidden="true" /></span>
                  <div>
                    <strong>Panel of 50+ Vendors</strong>
                    <p>A hand-vetted network of photographers, decorators, caterers, and artists for every budget.</p>
                  </div>
                </div>
              </div>

              <button className="btn btn-gold" onClick={onBookNow} style={{ marginTop: 24 }}>
                <i className="fa-solid fa-calendar-heart" aria-hidden="true" />
                Start Your Story
              </button>
            </div>

            {/* Real dummy image with overlays */}
            <div className="about-story-visual reveal reveal-delay-2">
              <div className="about-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                  alt="Luxury wedding ceremony"
                  className="about-story-img"
                />
                <div className="about-img-overlay" />
                <div className="about-img-stat-card">
                  <div className="about-img-stat">
                    <span className="about-stat-n">500+</span>
                    <span className="about-stat-l">Weddings Planned</span>
                  </div>
                  <div className="about-img-stat-divider" />
                  <div className="about-img-stat">
                    <span className="about-stat-n">30+</span>
                    <span className="about-stat-l">Years Experience</span>
                  </div>
                </div>
                <div className="about-img-award">
                  <i className="fa-solid fa-trophy" />
                  <span>India's #1<br />Wedding Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-pad about-mv-section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <i className="fa-solid fa-compass" aria-hidden="true" /> Our Purpose
            </span>
            <h2 className="section-title">Mission &amp; <span className="gold">Vision</span></h2>
            <div className="divider center" />
          </div>
          <div className="grid-2" style={{ marginTop: 52 }}>
            <div className="about-mv-card card reveal reveal-delay-1">
              <div className="about-mv-icon"><i className="fa-solid fa-bullseye" aria-hidden="true" /></div>
              <h3 className="about-mv-title">Our Mission</h3>
              <p className="about-mv-text">
                To transform every couple's vision into a living, breathing celebration — with creativity, care, and complete attention to the details that make moments unforgettable.
              </p>
            </div>
            <div className="about-mv-card card reveal reveal-delay-2">
              <div className="about-mv-icon"><i className="fa-solid fa-eye" aria-hidden="true" /></div>
              <h3 className="about-mv-title">Our Vision</h3>
              <p className="about-mv-text">
                To be the most trusted wedding studio in South Asia — where every ceremony is a masterpiece, every couple is family, and every memory lasts a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label"><i className="fa-solid fa-star" /> Why Choose Us</span>
            <h2 className="section-title">The JMS <span className="gold">Difference</span></h2>
            <div className="divider center" />
          </div>
          <div className="grid-3" style={{ marginTop: 52 }}>
            {whyUs.map((item, i) => (
              <div key={item.title} className={`about-why-card card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="about-why-icon"><i className={item.icon} aria-hidden="true" /></div>
                <h4 className="about-why-title">{item.title}</h4>
                <p className="about-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team — attractive cards with image ── */}
      <section className="section-pad about-team-section">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label"><i className="fa-solid fa-users" /> Meet the Team</span>
            <h2 className="section-title">The <span className="gold">Visionaries</span></h2>
            <div className="divider center" />
            <p className="section-sub text-center" style={{ marginTop: 16 }}>
              The passionate minds behind every unforgettable JMS celebration.
            </p>
          </div>
          <div className="grid-4" style={{ marginTop: 56 }}>
            {team.map((member, i) => (
              <div key={member.id} className={`team-card-new card reveal reveal-delay-${i + 1}`}>
                {/* Photo */}
                <div className="team-photo-wrap">
                  <img
                    src={TEAM_IMGS[i]}
                    alt={member.name}
                    className="team-photo"
                    loading="lazy"
                  />
                  <div className="team-photo-overlay" />
                  <div className="team-social-links">
                    {TEAM_SOCIALS.map(s => (
                      <a key={s.icon} href={s.url} className="team-social-btn" aria-label={s.icon}>
                        <i className={s.icon} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                {/* Info */}
                <div className="team-info">
                  <div className="team-role-badge">
                    <i className={member.icon} aria-hidden="true" />
                    {member.role}
                  </div>
                  <h4 className="team-name-new">{member.name}</h4>
                  <p className="team-bio">
                    {i === 0 && 'Leading 500+ luxury weddings with unmatched passion and precision.'}
                    {i === 1 && 'Transforming visual concepts into breathtaking event aesthetics.'}
                    {i === 2 && 'Curating the most exquisite floral designs in the industry.'}
                    {i === 3 && 'Capturing every fleeting moment with cinematic artistry.'}
                  </p>
                  <div className="team-stat-row">
                    <div className="team-stat-item">
                      <span className="team-stat-n">{['10+','8+','6+','5+'][i]}</span>
                      <span className="team-stat-l">Yrs Exp</span>
                    </div>
                    <div className="team-stat-divider" />
                    <div className="team-stat-item">
                      <span className="team-stat-n">{['500+','300+','400+','250+'][i]}</span>
                      <span className="team-stat-l">Events</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        onBookNow={onBookNow}
        title="Let's Create Something <em>Extraordinary</em>"
        sub="Your love story deserves the finest chapter."
        primaryLabel="Book a Consultation"
      />
    </main>
  )
}
