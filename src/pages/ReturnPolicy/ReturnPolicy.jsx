import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ReturnPolicy.css'

export default function ReturnPolicy() {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="return"
        eyebrow="Legal"
        title="Return <em>Policy</em>"
        sub="Our commitment to fair refunds and transparent service guarantees"
      />

      <section className="section-pad">
        <div className="container policy-container">
          <div className="policy-content reveal">
            <p className="policy-updated">
              <i className="fa-regular fa-calendar" aria-hidden="true" /> Last Updated: January 1, 2026
            </p>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-circle-info" aria-hidden="true" /> 1. Overview
              </h3>
              <p>
                At JMS Wedding Planner, we are committed to delivering exceptional wedding planning services that exceed your expectations. We understand that plans can change, and we strive to handle all refund and return requests fairly and transparently. This Return Policy outlines the circumstances under which refunds may be issued.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-indian-rupee-sign" aria-hidden="true" /> 2. Refund Eligibility
              </h3>
              <div className="policy-list">
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-circle-check refund-green" aria-hidden="true" /></span>
                  <div>
                    <strong>Full Refund:</strong> If JMS Wedding Planner cancels the service due to unforeseen circumstances or inability to deliver the agreed-upon services, a full refund of all payments made will be issued within 15 business days.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-circle-half-stroke refund-yellow" aria-hidden="true" /></span>
                  <div>
                    <strong>Partial Refund:</strong> If the client cancels 90 or more days before the event date, a refund of all payments made minus the non-refundable advance (30% of total service fee) will be issued.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-circle-xmark refund-red" aria-hidden="true" /></span>
                  <div>
                    <strong>No Refund:</strong> Cancellations made within 90 days of the event date are non-refundable. The advance deposit is always non-refundable once services have commenced.
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-sliders" aria-hidden="true" /> 3. Service Modifications & Credits
              </h3>
              <p>
                Rather than refunds, we often work with clients to find solutions that better suit their needs:
              </p>
              <ul className="policy-bullet-list">
                <li><strong>Service Downgrades:</strong> If you need to reduce the scope of services, we will adjust pricing accordingly and may issue a credit for the difference.</li>
                <li><strong>Date Changes:</strong> One complimentary reschedule is allowed if requested at least 60 days before the original date, subject to availability.</li>
                <li><strong>Service Credits:</strong> In certain cases, we may offer service credits that can be applied toward future events or additional services within 12 months.</li>
                <li><strong>Vendor Substitutions:</strong> If a specific vendor becomes unavailable, we will arrange an equivalent replacement at no additional cost to you.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-rotate-left" aria-hidden="true" /> 4. Refund Process
              </h3>
              <div className="policy-list">
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-1" aria-hidden="true" /></span>
                  <div>
                    <strong>Step 1:</strong> Submit your refund request in writing via email to jmsweddingplanner@gmail.com, including your booking reference number, event date, and reason for the request.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-2" aria-hidden="true" /></span>
                  <div>
                    <strong>Step 2:</strong> Our team will review your request and respond within 5 business days with a determination and any supporting details.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-3" aria-hidden="true" /></span>
                  <div>
                    <strong>Step 3:</strong> Approved refunds will be processed within 15 business days to the original payment method. You will receive confirmation once the refund has been initiated.
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-gem" aria-hidden="true" /> 5. Quality Guarantees
              </h3>
              <p>
                We stand behind the quality of our services. If you are dissatisfied with any aspect of our service delivery:
              </p>
              <ul className="policy-bullet-list">
                <li>Contact us within 7 days of your event with specific concerns</li>
                <li>We will investigate the matter thoroughly and respond within 10 business days</li>
                <li>If the concern is valid, we may offer remedial services, partial credits, or a goodwill refund at our discretion</li>
                <li>Photography or videography quality concerns must be directed to the respective vendor, with JMS acting as an intermediary if needed</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-cloud-bolt" aria-hidden="true" /> 6. Force Majeure Events
              </h3>
              <p>
                In the event of circumstances beyond our control — including but not limited to natural disasters, pandemics, government restrictions, or civil unrest — both parties agree to work together in good faith to reschedule or find an equitable solution. Full refunds will be provided if the event cannot be rescheduled within 12 months.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-hand-holding-dollar" aria-hidden="true" /> 7. Vendor Deposits & Third-Party Costs
              </h3>
              <p>
                Some services involve deposits paid to third-party vendors on your behalf (venues, caterers, photographers, etc.). Refund eligibility for these costs depends on the respective vendor's own policies. We will assist you in recovering any refundable vendor deposits, but cannot guarantee their return.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> 8. Contact Us
              </h3>
              <p>
                For any refund or return inquiries, please contact us:
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
