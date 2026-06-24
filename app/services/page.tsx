import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import ProductsExplorer from './ProductsExplorer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Services & Products — Chemist Box',
  description: 'Explore the professional retail pharmacy services and genuine product categories available at Chemist Box.',
};

const servicesList = [
  {
    num: 'SERVICE 01',
    title: 'Personalized Pharmacist Consultation',
    desc: 'Speak directly with our qualified pharmacists who do more than just hand over medicine. We offer dedicated counseling on your prescriptions, advise on proper dosages and storage, suggest bio-equivalent generic alternatives to save costs, and scan for potential adverse drug interactions.',
    features: ['Double-checked prescription accuracy', 'Generic alternatives counseling', 'Empathetic wellness guidance'],
    image: '/assets/why_realistic.png'
  },
  {
    num: 'SERVICE 02',
    title: 'In-Store Basic Diagnostics',
    desc: 'Every Chemist Box outlet is equipped with a clean, sterile diagnostics station where you can walk in for basic screenings. Track your health parameters on the go without booking hospital appointments. We help monitor crucial metrics and guide you if doctor consults are required.',
    features: ['Instant blood pressure screening', 'Digital blood glucose tracking', 'BMI & health parameter checks'],
    image: '/assets/why_realistic1.png'
  },
  {
    num: 'SERVICE 03',
    title: 'Order Pre-Booking & Support',
    desc: 'Pre-book your regular healthcare supplies, chronic care medications, and wellness devices ahead of time. Connect via our phone support or digital app, and our team will assemble, temperature-pack, and verify your order for a swift, contactless pickup or safe delivery.',
    features: ['Cold chain temperature packaging', 'Priority order assembly', 'Subscription auto-refill schedules'],
    image: '/assets/app_realistic.png'
  }
];

const productCategories = [
  {
    id: 'prescription',
    name: 'Prescription Medicines',
    image: '/assets/prescribtion medicines.png',
    panelImage: '/assets/panel_prescription.png',
    desc: 'At Chemist Box, we stock a comprehensive inventory of prescription medications spanning critical therapy areas. Every single strip is sourced directly from certified pharmaceutical companies, logged in our central database, and stored under recommended temperature conditions (including cold-chain storage for vaccines and insulin) to ensure absolute efficacy.',
    features: ['100% Genuine Direct Sourced', 'Double-Checked by Pharmacists', 'Cold Chain Integrity Maintained', 'Generic Alternates Counseling'],
    segments: ['Cardiac Care', 'Diabetes Management', 'Oncology Support', 'Gastroenterology', 'Respiratory Care', 'Anti-Infectives']
  },
  {
    id: 'otc',
    name: 'OTC Medicines',
    image: '/assets/otc medicines.png',
    panelImage: '/assets/panel_otc.png',
    desc: 'For everyday health needs, we offer an organized selection of over-the-counter essentials. From pain relievers and fever reducers to allergy relief, cough syrups, and digestive aids, you can find high-quality products clearly sorted. Our in-store pharmacists are always available to advise you on standard dosages and usage guidelines.',
    features: ['Easy Aisle Accessibility', 'Trusted National Brands', 'Pharmacist Dosage Guidance', 'First Aid Preparedness'],
    segments: ['Analgesics & Pain Relief', 'Cough, Cold & Flu', 'Digestive & Antacids', 'Allergy & Antihistamines', 'Oral Rehydration', 'First Aid Kits']
  },
  {
    id: 'personal',
    name: 'Personal Care',
    image: '/assets/personal care.png',
    panelImage: '/assets/panel_personal_care.png',
    desc: 'Pamper your skin, hair, and body with our range of dermatologist-tested personal care products. We host leading skincare brands, therapeutic shampoos, organic hygiene solutions, and baby-safe products designed to keep your family healthy and clean without harsh chemical formulas.',
    features: ['Dermatologically Approved', 'Premium Clean Skincare', 'Sensitive Skin Formulations', 'Everyday Hygiene Essentials'],
    segments: ['Therapeutic Skincare', 'Hair & Scalp Solutions', 'Feminine Hygiene', 'Oral & Dental Care', 'Body Washes & Lotion', 'Hand Sanitizers']
  },
  {
    id: 'devices',
    name: 'Health Devices',
    image: '/assets/health devices.png',
    panelImage: '/assets/panel_health_devices.png',
    desc: 'Monitor your health metrics accurately from the comfort of home. We supply clinical-grade medical hardware and testing devices. Every machine comes with official manufacturing warranties, and our staff is trained to demonstrate how to calibrate and use them correctly.',
    features: ['Clinical-Grade Accuracy', 'Official Brand Warranties', 'In-Store Usage Demos', 'Orthopedic Fittings'],
    segments: ['Digital BP Monitors', 'Blood Glucose Meters', 'Nebulizers & Vaporizers', 'Digital Thermometers', 'Orthopedic Supports', 'Pulse Oximeters']
  },
  {
    id: 'baby',
    name: 'Baby Care',
    image: '/assets/baby care.png',
    panelImage: '/assets/panel_baby_care.png',
    desc: 'Your little ones deserve the gentlest, safest ingredients. Chemist Box offers a dedicated baby care section stocked with pediatrician-approved baby foods, hypoallergenic washes, toxin-free diapers, and gentle massage oils that protect delicate skin and aid early growth.',
    features: ['Pediatrician Recommended', '100% Toxin-Free & Gentle', 'Hypoallergenic Testing', 'Complete Baby Nutrition'],
    segments: ['Infant Formulas & Food', 'Baby Skin & Hair Care', 'Hypoallergenic Wipes', 'Premium Soft Diapers', 'Feeding Accessories', 'Massage Oils']
  },
  {
    id: 'womens',
    name: 'Women\'s Health',
    image: '/assets/womens health.png',
    panelImage: '/assets/panel_womens_health.png',
    desc: 'Empowering women with comprehensive health options at every stage of life. We provide organic menstrual care, pre-and-post natal vitamins, hormonal balance supports, and specialized lifestyle wellness products curated for adolescent, maternal, and senior women\'s health.',
    features: ['Complete Organic Menstrual Care', 'Maternal & Prenatal Support', 'Hormonal Balance Wellness', 'Private Consultation Area'],
    segments: ['Prenatal & Postnatal Care', 'Organic Pads & Cups', 'Hormonal Support Vitamins', 'Feminine Wash & Cleansers', 'Iron & Calcium Boosters']
  },
  {
    id: 'ayurvedic',
    name: 'Ayurvedic & Herbal',
    image: '/assets/ayurvedic.png',
    panelImage: '/assets/panel_ayurvedic.png',
    desc: 'Unlock the power of traditional wellness with our selection of genuine Ayurvedic medicines and natural extracts. Complying with age-old recipes and manufactured by certified standard laboratories, these products help build sustainable immunity, reduce stress, and improve gut health.',
    features: ['100% Natural Ingredients', 'Certified Ayurvedic Brands', 'No Substandard Additives', 'Holistic Wellness Solutions'],
    segments: ['Immunity Boosters (Chyawanprash)', 'Pure Herbal Tablets (Tulsi, Neem)', 'Digestive Churnas', 'Therapeutic Massage Oils', 'Herbal Cough Lozenges', 'Stress Relief Tonics']
  },
  {
    id: 'wellness',
    name: 'Wellness & Nutrition',
    image: '/assets/wellness products.png',
    panelImage: '/assets/panel_wellness.png',
    desc: 'Complement your active lifestyle with high-quality dietary supplements. Whether you require daily multivitamins to bridge nutritional gaps, whey proteins for fitness recovery, or dietary fibers for metabolism, we stock a wide array of premium health formulations.',
    features: ['FSSAI Approved & Certified', 'Sugar-Free Health Options', 'Fitness Nutrition Planning', 'Premium Import Quality'],
    segments: ['Daily Multivitamins', 'Whey & Plant Proteins', 'Fish Oil & Omega-3', 'Weight Management Supplements', 'Antioxidant Juices', 'Probiotics & Enzymes']
  }
];

const statsMetrics = [
  { num: '100+', label: 'Premium Stores' },
  { num: '250+', label: 'Qualified Pharmacists' },
  { num: '1M+', label: 'Customers Served' },
  { num: '25+', label: 'Cities Covered' },
  { num: '100%', label: 'Genuine Products' },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGlow}/>
        </div>

        {/* Right side: Realistic Image with fade mask */}
        <div className={styles.heroVisual}>
          <Image
            src="/assets/why_realistic.png"
            alt="Chemist Box Services & Products"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroFadeMask} />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>What We Do</div>
              <h1 className={styles.heroTitle}>
                Services & <span>Products</span>
              </h1>
              <p className={styles.heroDesc}>
                Discover a pharmacy experience designed around your wellbeing. From expert consultation and instant basic checkups to a curated selection of 100% genuine healthcare products.
              </p>
              <a href="#products-section" className="btn btn-teal btn-lg" style={{ marginTop: '16px' }}>
                Explore Categories
                <ArrowRight size={18} style={{ marginLeft: 8, display: 'inline-block', verticalAlign: 'middle' }} />
              </a>
            </div>
            <div className={styles.heroVisualSpacer} />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Services</div>
            <h2>Community Health Redefined</h2>
            <div className="divider divider-center"/>
            <p>We combine advanced retail efficiency with empathetic, expert care to deliver an unparalleled experience at every store.</p>
          </div>

          <div className={styles.serviceRows}>
            {servicesList.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={isEven ? styles.serviceRow : `${styles.serviceRow} ${styles.serviceRowReverse}`}>
                  <div className={styles.serviceImgWrap}>
                    <Image 
                      src={s.image} 
                      alt={s.title} 
                      fill 
                      quality={100}
                    />
                  </div>
                  <div className={styles.serviceText}>
                    <div className={styles.serviceNum}>{s.num}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className={styles.serviceFeatures}>
                      {s.features.map((feat, idx) => (
                        <div key={idx} className={styles.serviceFeature}>
                          <div className={styles.serviceFeatureIcon}>
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection} id="products-section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Offerings</div>
            <h2>100% Genuine Health & Wellness Products</h2>
            <div className="divider divider-center"/>
            <p>Explore our catalog of certified medicines, medical devices, and personal care products sourced directly from manufacturers.</p>
          </div>

          <ProductsExplorer categories={productCategories} />
        </div>
      </section>

      {/* ── Why Choose Chemist Box — Trust Engine Section ── */}
      <section className={styles.trustSection}>

        {/* ── ZONE 1: Stats Strip ── */}
        <div className={styles.marqueeBar}>
          <div className={styles.marqueeTrack}>
            {[...statsMetrics, ...statsMetrics, ...statsMetrics, ...statsMetrics, ...statsMetrics, ...statsMetrics, ...statsMetrics, ...statsMetrics].map((s, i) => (
              <div key={i} className={styles.metricChip}>
                <div className={styles.metricDot}/>
                <span className={styles.metricNum}>{s.num}</span>
                <span className={styles.metricLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>


        {/* ── ZONE 2: The Chemist Box Guarantee ── */}
        <div className={styles.guaranteeZone}>
          <div className="container">
            <div className={styles.guaranteeHeader}>
              <div className={styles.guaranteeEyebrow}>The Chemist Box Guarantee</div>
              <h2 className={styles.guaranteeTitle}>
                Every Visit. Every Time.<br/>
                <span>No Compromises.</span>
              </h2>
              <p className={styles.guaranteeSubtitle}>
                We don&apos;t just sell medicines. We commit to a standard of care that every patient deserves — verifiable, measurable, and non-negotiable.
              </p>
            </div>

            <div className={styles.guaranteeGrid}>
              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4 className={styles.guaranteeCardTitle}>Verified Authenticity Seal</h4>
                <p className={styles.guaranteeCardDesc}>Every medicine is batch-verified against the manufacturer database. Counterfeit products have zero chance at any Chemist Box store.</p>
                <div className={styles.guaranteeCardTag}>Batch Traceability</div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4 className={styles.guaranteeCardTitle}>Zero Wait Promise</h4>
                <p className={styles.guaranteeCardDesc}>Our streamlined billing and dispensing system ensures you&apos;re never stuck in a long queue. Pre-booked orders are ready in under 3 minutes.</p>
                <div className={styles.guaranteeCardTag}>Ready in &lt;3 mins</div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h4 className={styles.guaranteeCardTitle}>Human-First Counseling</h4>
                <p className={styles.guaranteeCardDesc}>We dedicate time to explain your prescription — generics, dosages, interactions, and side effects — before you leave the counter. Always.</p>
                <div className={styles.guaranteeCardTag}>Empathetic Care</div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"/>
                    <path d="M16 8h4l3 3v5h-7V8z"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <h4 className={styles.guaranteeCardTitle}>Cold-Chain Delivery Ready</h4>
                <p className={styles.guaranteeCardDesc}>Temperature-sensitive medications like insulin and vaccines are stored and packed with cold-chain integrity, maintaining full clinical efficacy.</p>
                <div className={styles.guaranteeCardTag}>2°C – 8°C Maintained</div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className={styles.guaranteeCardTitle}>Private Consultation Zone</h4>
                <p className={styles.guaranteeCardDesc}>Sensitive health matters deserve discretion. Every store has a private consultation area so you can speak openly with our pharmacist without hesitation.</p>
                <div className={styles.guaranteeCardTag}>Full Confidentiality</div>
              </div>

              <div className={styles.guaranteeCard}>
                <div className={styles.guaranteeCardIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className={styles.guaranteeCardBody}>
                  <h4 className={styles.guaranteeCardTitle}>Smart Savings Counseling</h4>
                  <p className={styles.guaranteeCardDesc}>Our pharmacists proactively suggest high-quality generic alternatives, helping you save up to 60% on your prescription costs without sacrificing efficacy.</p>
                  <div className={styles.guaranteeCardTag}>Save up to 60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ZONE 3: Pharmacist Promise Banner ── */}
        <div className={styles.pharmacistBanner}>
          <div className={styles.pharmacistBannerGlow1}/>
          <div className={styles.pharmacistBannerGlow2}/>
          <div className="container">
            <div className={styles.pharmacistBannerInner}>
              <div className={styles.pharmacistBannerLeft}>
                <div className={styles.pharmacistBannerEyebrow}>Our Commitment</div>
                <h3 className={styles.pharmacistBannerTitle}>A Pharmacist You Can Trust.<br/>Every Single Day.</h3>
                <p className={styles.pharmacistBannerDesc}>
                  In a world of algorithm-driven, faceless online deliveries, Chemist Box stands apart. We believe healthcare must be human — and every one of our 250+ certified pharmacists is trained to prove it, visit after visit.
                </p>
                <div className={styles.pharmacistBannerCreds}>
                  <div className={styles.pharmacistBannerCred}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    D.Pharm / B.Pharm Certified Staff
                  </div>
                  <div className={styles.pharmacistBannerCred}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Mandatory Quarterly Training Programs
                  </div>
                  <div className={styles.pharmacistBannerCred}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    State Pharmacy Council Registered
                  </div>
                </div>
              </div>
              <div className={styles.pharmacistBannerRight}>
                <div className={styles.pharmacistBannerActions}>
                  <div className={styles.pharmacistBannerAction}>
                    <p className={styles.pharmacistBannerActionLabel}>For Customers</p>
                    <h4 className={styles.pharmacistBannerActionTitle}>Walk Into Any Store</h4>
                    <p className={styles.pharmacistBannerActionDesc}>100+ locations. No appointment needed. Your nearest Chemist Box is minutes away.</p>
                    <Link href="/store-locator" className="btn btn-teal btn-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      Find Your Store
                    </Link>
                  </div>
                  <div className={styles.pharmacistBannerActionDivider}/>
                  <div className={styles.pharmacistBannerAction}>
                    <p className={styles.pharmacistBannerActionLabel}>For Partners</p>
                    <h4 className={styles.pharmacistBannerActionTitle}>Own a Franchise</h4>
                    <p className={styles.pharmacistBannerActionDesc}>Bring the Chemist Box standard to your neighbourhood. Proven model, full support.</p>
                    <Link href="/franchise" className="btn btn-outline-white btn-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      Partner With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
