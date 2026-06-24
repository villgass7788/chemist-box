'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './policies.module.css';

const SECTIONS = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' },
  { id: 'shipping', label: 'Shipping Policy' },
  { id: 'returns', label: 'Return & Refund Policy' },
];

export default function PoliciesPage() {
  const [activeSection, setActiveSection] = useState('privacy');
  
  const privacyRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const returnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen to hash changes in URL on load/hashchange
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && SECTIONS.some(s => s.id === hash)) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Execute on initial mount
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Setup IntersectionObserver to update active menu item on scroll
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the middle portion
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const targets = [
      { id: 'privacy', ref: privacyRef },
      { id: 'terms', ref: termsRef },
      { id: 'shipping', ref: shippingRef },
      { id: 'returns', ref: returnsRef }
    ];

    targets.forEach(t => {
      if (t.ref.current) observer.observe(t.ref.current);
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    window.history.pushState(null, '', `#${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Policies &amp; Legal Agreements</h1>
          <p className={styles.heroSub}>
            Read the terms, conditions, and privacy frameworks that govern our pharmacy operations, digital services, and distribution networks.
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <section className={styles.contentWrapper}>
        <div className="container">
          <div className={styles.layoutGrid}>
            
            {/* Sticky Sidebar Navigation */}
            <aside className={styles.sidebar}>
              <h2 className={styles.sidebarTitle}>Document Sections</h2>
              <nav className={styles.navLinks}>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleNavLinkClick(e, s.id)}
                    className={`${styles.navLink} ${activeSection === s.id ? styles.navLinkActive : ''}`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content Area */}
            <div className={styles.mainContent}>
              
              {/* Privacy Policy Section */}
              <div id="privacy" ref={privacyRef} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>Privacy Policy</h2>
                  <span className={styles.sectionMeta}>Last Updated: June 24, 2026</span>
                </div>
                <div className={styles.policyContent}>
                  <p>
                    Chemist Box (we, us, our) is committed to protecting your privacy and sensitive health details. 
                    This Privacy Policy explains how we collect, store, share, and protect your Sensitive Personal Data or Information (SPDI) 
                    when you use our physical stores, website, or mobile application.
                  </p>
                  
                  <div className={styles.complianceBox}>
                    <strong>Regulatory Compliance Notice:</strong> This policy is compiled in compliance with 
                    <strong> Section 43A of the Information Technology Act, 2000</strong>, and 
                    <strong> Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules)</strong>.
                  </div>

                  <h3>1. Information We Collect</h3>
                  <p>
                    In order to dispense medications and manage health consulting, we collect the following Sensitive Personal Data or Information:
                  </p>
                  <ul>
                    <li>Medical prescriptions containing drug names, dosage information, and patient diagnostics (Mandatory for Schedule H/H1/X drugs).</li>
                    <li>Physiological and mental health conditions disclosed for therapeutic and consulting purposes.</li>
                    <li>Financial information such as credit/debit card numbers, UPI details, or other payment instrument profiles.</li>
                    <li>Demographics, contact information, shipping address, email, and phone numbers.</li>
                  </ul>

                  <h3>2. Purpose of Collection and Usage</h3>
                  <p>
                    We collect your SPDI solely for providing, developing, and auditing our pharmacy services. This includes:
                  </p>
                  <ul>
                    <li>Validating prescriptions via registered pharmacists before dispensing Schedule H/H1/X medicines.</li>
                    <li>Processing financial transactions and invoicing.</li>
                    <li>Coordinating logistics and dispatching wellness orders.</li>
                    <li>Fulfilling statutory audits and regulatory filing requirements under State Drug Control authorities.</li>
                  </ul>

                  <h3>3. Disclosure and Data Sharing</h3>
                  <p>
                    We do not sell, rent, or lease your medical history or health information to third-party marketing companies. We disclose information only:
                  </p>
                  <ul>
                    <li>To government departments or authorized regulatory bodies under mandate of law (e.g. Drug Control Administrations, under the Drugs &amp; Cosmetics Act).</li>
                    <li>To trusted third-party logistics agents to fulfill delivery (they receive only name, shipping address, and phone number, with no medical details unless required for temperature-sensitive shipping verification).</li>
                  </ul>

                  <h3>4. Reasonable Security Practices</h3>
                  <p>
                    We maintain technical, administrative, and physical controls to secure your SPDI. Our databases are encrypted, and access controls restrict data viewing exclusively to certified pharmacists and authorized administrators. We comply with security controls prescribed under the IT Act 2000 to prevent unauthorized disclosure, leakage, or hacking.
                  </p>

                  <h3>5. Grievance Redressal Officer</h3>
                  <p>
                    In accordance with Rule 5(9) of the SPDI Rules 2011, any discrepancies or grievances with respect to processing your information can be reported to our Grievance Officer:
                  </p>
                  <p>
                    <strong>Name:</strong> Rajesh Kumar Sinha<br />
                    <strong>Designation:</strong> Head of Compliance &amp; Data Security, Chemist Box<br />
                    <strong>Email:</strong> compliance@chemistbox.in<br />
                    <strong>Address:</strong> Corporate Office, Chemist Box, Patna, Bihar, 800001
                  </p>
                </div>
              </div>

              {/* Terms & Conditions Section */}
              <div id="terms" ref={termsRef} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>Terms &amp; Conditions</h2>
                  <span className={styles.sectionMeta}>Last Updated: June 24, 2026</span>
                </div>
                <div className={styles.policyContent}>
                  <p>
                    These Terms and Conditions govern your relationship with Chemist Box and define the rules for using our physical outlets, mobile app, and digital procurement services. By accessing or using our services, you agree to comply with these terms.
                  </p>
                  
                  <div className={styles.complianceBox}>
                    <strong>Pharmacy Law Compliance:</strong> All online and offline pharmacy activities are governed under the 
                    <strong> Drugs and Cosmetics Act, 1940</strong>, 
                    <strong> Drugs and Cosmetics Rules, 1945</strong>, and the 
                    <strong> Pharmacy Act, 1948</strong>.
                  </div>

                  <h3>1. Uploading Prescriptions for Restricted Medicines</h3>
                  <p>
                    We strictly implement rules regarding Schedule H, Schedule H1, and Schedule X substances.
                  </p>
                  <ul>
                    <li>No medications categorized under Schedule H/H1/X will be dispensed unless you present/upload a valid, clear, and legible prescription signed by a Registered Medical Practitioner (RMP).</li>
                    <li>Our in-house registered pharmacists verify every uploaded prescription. If a prescription is found invalid, expired, or suspicious, the order will be rejected immediately.</li>
                    <li>Dispensation of Schedule X drugs (narcotics/psychotropics) online is strictly prohibited. Orders containing Schedule X substances will only be processed over-the-counter at licensed physical store hubs.</li>
                  </ul>

                  <h3>2. Customer Representations</h3>
                  <p>
                    By placing an order, you warrant that you are at least 18 years of age and legally competent to purchase pharmaceutical items. You agree not to misuse our website to request prescription drugs without appropriate medical consultation and guidance.
                  </p>

                  <h3>3. Intellectual Property and Store Usage</h3>
                  <p>
                    All brand logos, graphics, interfaces, images, and content are the exclusive intellectual property of Chemist Box. You may not copy, scrape, modify, or publish our corporate assets or software code without prior written consent.
                  </p>

                  <h3>4. Pricing and Errors</h3>
                  <p>
                    While we strive for pricing accuracy, the MRP printed on the manufactured medicine strip is final. Any digital catalog mismatch will be resolved by adjusting the invoice amount to match the statutory MRP at the time of invoicing.
                  </p>
                </div>
              </div>

              {/* Shipping Policy Section */}
              <div id="shipping" ref={shippingRef} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>Shipping Policy</h2>
                  <span className={styles.sectionMeta}>Last Updated: June 24, 2026</span>
                </div>
                <div className={styles.policyContent}>
                  <p>
                    We take utmost care in packing and shipping your medical requirements. Our logistical channels are designed to ensure safety, tracking, and compliance with pharmaceutical preservation standards.
                  </p>

                  <div className={styles.complianceBox}>
                    <strong>Cold Chain Infrastructure Notice:</strong> Temperature-sensitive therapeutic products (such as Insulin, vaccines, and certain bio-equivalents) are packed in insulated shippers with validated gel-ice packs to ensure safe storage within 2&deg;C to 8&deg;C during transit.
                  </div>

                  <h3>1. Shipping Timelines</h3>
                  <p>
                    Delivery timelines depend on your geographic location:
                  </p>
                  <ul>
                    <li><strong>Express Hub Delivery:</strong> Locations within 5km of an active Chemist Box store are eligible for express delivery within 2 to 4 hours.</li>
                    <li><strong>Standard Regional Delivery:</strong> Deliveries to main towns and cities across Bihar and neighboring states take 24 to 48 hours.</li>
                    <li><strong>National Shipping:</strong> Shipping to remote Indian locations takes 3 to 5 business days.</li>
                  </ul>

                  <h3>2. Shipping Fees</h3>
                  <p>
                    Deliveries are charged based on order value. Standard shipping is free for all orders above INR 500. A nominal convenience fee of INR 40 is applicable on smaller orders to offset safe packaging and courier costs.
                  </p>

                  <h3>3. Verification at Delivery</h3>
                  <p>
                    For prescription orders, our delivery associate may ask to verify the original paper prescription at your doorstep or confirm patient credentials to prevent drug diversion.
                  </p>
                </div>
              </div>

              {/* Return & Refund Policy Section */}
              <div id="returns" ref={returnsRef} className={styles.section}>
                <div className={styles.sectionHead}>
                  <h2 className={styles.sectionTitle}>Return &amp; Refund Policy</h2>
                  <span className={styles.sectionMeta}>Last Updated: June 24, 2026</span>
                </div>
                <div className={styles.policyContent}>
                  <p>
                    We want you to be completely satisfied with your healthcare purchase. However, because medicines are subject to strict quality and environmental controls, our return framework is structured to protect public health and safety.
                  </p>

                  <div className={styles.complianceBox}>
                    <strong>E-Commerce Consumer Rights Notice:</strong> This policy is designed in compliance with the 
                    <strong> Consumer Protection (E-Commerce) Rules, 2020</strong>, and the 
                    <strong> Consumer Protection Act, 2019</strong>.
                  </div>

                  <h3>1. Return Window and Eligible Products</h3>
                  <p>
                    You can request a return within 7 days from the date of delivery. Returns are only accepted for:
                  </p>
                  <ul>
                    <li>Products that are damaged during transit.</li>
                    <li>Products that have expired prior to the delivery date.</li>
                    <li>Incomplete orders or incorrect items shipped.</li>
                  </ul>

                  <h3>2. Strictly Non-Returnable Items</h3>
                  <p>
                    To ensure quality control and prevent patient safety hazards, the following items are strictly non-returnable:
                  </p>
                  <ul>
                    <li>Opened medicine strips, bottles, or vials.</li>
                    <li>Insulin, injections, vaccines, and other cold-chain items that require temperature control, as their efficacy cannot be guaranteed once they leave our possession.</li>
                    <li>Personal hygiene items, surgical consumables, and custom-ordered wellness devices.</li>
                  </ul>

                  <h3>3. Refund Procedure</h3>
                  <p>
                    Upon approval of the return by our pharmacist verification team, the refund will be initiated:
                  </p>
                  <ul>
                    <li>For online prepaid orders: Refund credited directly to the original payment instrument within 5 to 7 business days.</li>
                    <li>For Cash-on-Delivery (COD) orders: Refund processed via bank transfer or store credit as preferred by the customer.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
