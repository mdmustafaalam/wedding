import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="privacy"
        eyebrow="Legal"
        title="Privacy <em>Policy</em>"
        sub="How we collect, use, and protect your personal information"
      />

      <section className="section-pad">
        <div className="container policy-container">
          <div className="policy-content reveal">
            <p className="policy-updated">
              <i className="fa-regular fa-calendar" aria-hidden="true" /> Last Updated: January 1, 2026
            </p>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-info-circle" aria-hidden="true" /> 1. Introduction
              </h3>
              <p>
                Welcome to JMS Wedding Planner ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our wedding planning services.
              </p>
              <p>
                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-database" aria-hidden="true" /> 2. Information We Collect
              </h3>
              <p>We may collect information about you in various ways, including:</p>
              <div className="policy-list">
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-user" aria-hidden="true" /></span>
                  <div>
                    <strong>Personal Data:</strong> Name, email address, phone number, postal address, wedding date, and other contact information you voluntarily provide when booking our services or filling out forms on our website.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-credit-card" aria-hidden="true" /></span>
                  <div>
                    <strong>Payment Information:</strong> Billing details, transaction history, and payment method information necessary to process payments for our services. All payment data is processed through secure, PCI-compliant third-party payment processors.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-laptop" aria-hidden="true" /></span>
                  <div>
                    <strong>Usage Data:</strong> IP address, browser type, operating system, pages visited, time and date of visit, and other diagnostic data collected automatically when you interact with our website.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-cookie-bite" aria-hidden="true" /></span>
                  <div>
                    <strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-bullseye" aria-hidden="true" /> 3. How We Use Your Information
              </h3>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="policy-bullet-list">
                <li>To provide, operate, and maintain our wedding planning services</li>
                <li>To process bookings, payments, and deliver contracts</li>
                <li>To communicate with you about your event, updates, and service offerings</li>
                <li>To personalize your experience and tailor our services to your preferences</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To send promotional materials and newsletters (with your consent)</li>
                <li>To comply with legal obligations and resolve disputes</li>
                <li>To ensure the security and integrity of our platform</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-share-nodes" aria-hidden="true" /> 4. Information Sharing & Disclosure
              </h3>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="policy-bullet-list">
                <li><strong>Service Providers:</strong> With trusted vendors and partners (photographers, caterers, venues) who assist in delivering our services, strictly under contractual obligations to protect your data.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or valid legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice provided to you.</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information for specific purposes.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-lock" aria-hidden="true" /> 5. Data Security
              </h3>
              <p>
                We implement industry-standard security measures to protect your personal information, including encryption, secure socket layer (SSL) technology, firewalls, and access controls. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-user-clock" aria-hidden="true" /> 6. Data Retention
              </h3>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-sliders" aria-hidden="true" /> 7. Your Rights
              </h3>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="policy-bullet-list">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct any inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict the processing of your data</li>
                <li>Withdraw consent at any time where processing is based on consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the information provided below.</p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-child" aria-hidden="true" /> 8. Children's Privacy
              </h3>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-link" aria-hidden="true" /> 9. Third-Party Links
              </h3>
              <p>
                Our website may contain links to third-party websites or services that are not operated by us. We have no control over the content and practices of these sites and encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-pen-to-square" aria-hidden="true" /> 10. Changes to This Policy
              </h3>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> 11. Contact Us
              </h3>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="policy-contact-card">
                <div className="policy-contact-item">
                  <i className="fa-solid fa-building" aria-hidden="true" />
                  <span>JMS Wedding Planner, Baba Garib Asthan, Near Sudha Dairy, Muzaffarpur, Bihar 842001</span>
                </div>
                <div className="policy-contact-item">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <a href="mailto:jmsweddingplanner@gmail.com">jmsweddingplanner@gmail.com</a>
                </div>
                <div className="policy-contact-item">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <a href="tel:+917324884890">+91 73248 84890</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
