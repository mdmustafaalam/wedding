import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './TermsConditions.css'

export default function TermsConditions() {
  useScrollReveal()

  return (
    <main>
      <PageHeader page="terms"
        eyebrow="Legal"
        title="Terms &amp; <em>Conditions</em>"
        sub="The rules and guidelines governing your use of our services"
      />

      <section className="section-pad">
        <div className="container policy-container">
          <div className="policy-content reveal">
            <p className="policy-updated">
              <i className="fa-regular fa-calendar" aria-hidden="true" /> Last Updated: January 1, 2026
            </p>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-handshake" aria-hidden="true" /> 1. Acceptance of Terms
              </h3>
              <p>
                By accessing and using the services of JMS Wedding Planner ("we," "our," or "us"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or access our website.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-file-contract" aria-hidden="true" /> 2. Services Overview
              </h3>
              <p>
                JMS Wedding Planner provides professional wedding planning, coordination, and event management services. Our services include, but are not limited to:
              </p>
              <ul className="policy-bullet-list">
                <li>Full wedding planning and consultation</li>
                <li>Venue selection and booking coordination</li>
                <li>Decoration, florals, and theme design</li>
                <li>Photography and videography coordination</li>
                <li>Catering and menu planning assistance</li>
                <li>Day-of event coordination and management</li>
              </ul>
              <p>
                The specific scope, deliverables, and pricing for each event will be outlined in a separate written agreement or contract between JMS Wedding Planner and the client.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-coins" aria-hidden="true" /> 3. Booking & Payment Terms
              </h3>
              <div className="policy-list">
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-file-signature" aria-hidden="true" /></span>
                  <div>
                    <strong>Booking Confirmation:</strong> All bookings are confirmed only after receiving a signed service agreement and the required advance payment. A verbal or email commitment does not constitute a confirmed booking.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-indian-rupee-sign" aria-hidden="true" /></span>
                  <div>
                    <strong>Advance Payment:</strong> A non-refundable advance of 30% of the total service fee is required at the time of booking to secure the date and begin planning.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-calendar-check" aria-hidden="true" /></span>
                  <div>
                    <strong>Payment Schedule:</strong> The remaining balance is due in installments as specified in the service agreement, with the final payment due no later than 7 days before the event date.
                  </div>
                </div>
                <div className="policy-list-item">
                  <span className="policy-list-icon"><i className="fa-solid fa-money-bill-transfer" aria-hidden="true" /></span>
                  <div>
                    <strong>Additional Costs:</strong> Any additional services, vendor upgrades, or changes beyond the original scope will be communicated in advance and billed separately.
                  </div>
                </div>
              </div>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-calendar-xmark" aria-hidden="true" /> 4. Cancellation & Rescheduling
              </h3>
              <ul className="policy-bullet-list">
                <li><strong>Cancellation by Client:</strong> Cancellations made 90 or more days before the event date will receive a refund of payments made minus the non-refundable advance. Cancellations within 90 days of the event are non-refundable.</li>
                <li><strong>Rescheduling:</strong> One complimentary reschedule is allowed if requested at least 60 days before the original event date, subject to availability. Additional reschedules may incur a fee.</li>
                <li><strong>Cancellation by JMS:</strong> In the unlikely event that we must cancel due to force majeure or unforeseen circumstances, a full refund of all payments received will be provided.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-scale-balanced" aria-hidden="true" /> 5. Client Responsibilities
              </h3>
              <p>The client agrees to:</p>
              <ul className="policy-bullet-list">
                <li>Provide accurate and complete information necessary for event planning</li>
                <li>Communicate preferences, changes, and decisions in a timely manner</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Obtain any necessary permits or licenses required for the event</li>
                <li>Ensure compliance with venue rules and local regulations</li>
                <li>Be present or available for key planning meetings and final walkthroughs</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" /> 6. Limitation of Liability
              </h3>
              <p>
                JMS Wedding Planner exercises the utmost care in planning and executing events. However, we shall not be held liable for:
              </p>
              <ul className="policy-bullet-list">
                <li>Delays, cancellations, or failures caused by force majeure events (natural disasters, pandemics, government actions, etc.)</li>
                <li>Errors or defaults of third-party vendors, even if recommended by us</li>
                <li>Losses resulting from inaccurate or incomplete information provided by the client</li>
                <li>Damages exceeding the total amount paid under the service agreement</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-copyright" aria-hidden="true" /> 7. Intellectual Property
              </h3>
              <p>
                All content on this website, including text, images, logos, designs, and branding materials, is the property of JMS Wedding Planner and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
              <p>
                Professional photographs and videos from events may be used by JMS Wedding Planner for portfolio, marketing, and promotional purposes unless the client explicitly requests otherwise in writing.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-gavel" aria-hidden="true" /> 8. Dispute Resolution
              </h3>
              <p>
                Any disputes arising out of or relating to these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If a resolution cannot be reached, the dispute shall be submitted to mediation before pursuing any legal remedies. These Terms shall be governed by the laws of India, and any legal proceedings shall be subject to the jurisdiction of the courts in Muzaffarpur, Bihar.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-pen-to-square" aria-hidden="true" /> 9. Amendments
              </h3>
              <p>
                We reserve the right to amend these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after any modifications constitutes acceptance of the revised terms.
              </p>
            </div>

            <div className="policy-section">
              <h3 className="policy-heading">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> 10. Contact Us
              </h3>
              <p>
                For questions regarding these Terms and Conditions, please reach out to us:
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
