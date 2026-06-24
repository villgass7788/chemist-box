import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Timeline from './Timeline';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us — Chemist Box',
  description: "Learn about Chemist Box's mission to build India's most trusted pharmacy network.",
};

const milestones = [
  { year: '2019', label: 'Founded', desc: 'Started with a single visionary store in Bengaluru. The goal was simple but ambitious: to transform the fragmented Indian healthcare retail landscape into a standardized, trustworthy experience.' },
  { year: '2021', label: '25 Stores', desc: 'Expanded rapidly across Karnataka and Maharashtra. We introduced our highly successful franchise model, partnering with local entrepreneurs to bring genuine medicines to developing neighborhoods.' },
  { year: '2023', label: '75 Stores', desc: 'Reached 75 premium locations across 15 cities, successfully serving over 500,000 customers. We heavily invested in pharmacist training programs and modern IT infrastructure to ensure scale.' },
  { year: '2025', label: '100+ Stores', desc: 'Now serving 25+ cities with 1 million+ customers and a team of 250+ trained pharmacists. Chemist Box has become synonymous with organized pharmacy franchising and reliable community health.' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Absolute full-bleed image — right 52% of section, matches homepage style */}
        <div className={styles.heroImageCol}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/assets/about header.png"
              alt="Modern Chemist Box Pharmacy Interior"
              fill
              priority
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
            />
            <div className={styles.heroFadeMask} />
          </div>
        </div>

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className="eyebrow-pill" style={{ background: 'rgba(46,196,182,0.12)', color: 'var(--teal)', border: '1px solid rgba(46,196,182,0.3)' }}>Our Story</div>
              <h1 className={styles.heroTitle}>
                Redefining<br/>Healthcare<br/>in <span>India</span>
              </h1>
              <p className={styles.heroDesc}>
                Chemist Box is a modern healthcare retail brand — bringing trusted medicines, expert guidance, and genuine wellness to every neighbourhood across India.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>100+</span>
                  <span className={styles.heroStatLabel}>Stores</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>25+</span>
                  <span className={styles.heroStatLabel}>Cities</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatNum}>1M+</span>
                  <span className={styles.heroStatLabel}>Customers</span>
                </div>
              </div>
            </div>
            {/* Spacer column so content stays in left half */}
            <div />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className={styles.brandSection}>
        <div className="container">
          <div className={styles.brandGrid}>
            <div className={styles.brandImageWrap}>
              <Image src="/assets/what is we.png" alt="What is Chemist Box" fill quality={100} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.brandText}>
              <div className="eyebrow">What is Chemist Box?</div>
              <h2>More Than Just a Pharmacy</h2>
              <p>
                In a world rapidly shifting towards impersonal online deliveries, Chemist Box stands firm in the belief that healthcare requires a human touch. We are a chain of premium, modern physical pharmacies designed to provide an unparalleled retail experience.
              </p>
              <p>
                Every Chemist Box outlet is a hub of wellness, featuring organized aisles of 100% genuine medicines, OTC products, and health devices. But our greatest asset is our people—highly trained, empathetic pharmacists who are always ready to counsel you on your prescriptions and holistic health journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.mvContainer}>
          <div className={styles.mvBlock}>
            <div className={styles.mvLabel}>01 &mdash; Our Mission</div>
            <h2 className={styles.mvHeading}>To make premium, reliable, and genuine healthcare accessible to every neighborhood.</h2>
            <p className={styles.mvText}>
              We strive to elevate the standard of physical pharmacy retail by combining authentic products with expert human guidance, ensuring that every patient leaves our store feeling confident about their health.
            </p>
          </div>
          
          <div className={styles.mvDivider}></div>
          
          <div className={styles.mvBlock}>
            <div className={styles.mvLabel}>02 &mdash; Our Vision</div>
            <h2 className={styles.mvHeading}>To become India&apos;s most trusted healthcare retail network.</h2>
            <p className={styles.mvText}>
              We envision a future where Chemist Box is synonymous with wellness, where our stores are deeply integrated into communities, and where we set the national benchmark for organized pharmacy franchising.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyHeader}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2>Growing Together<br />with India</h2>
            <div className="divider divider-center"/>
          </div>
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderImageWrap}>
              <Image src="/assets/founder_portrait.png" alt="Krishna Rungta - Founder" fill quality={100} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.founderText}>
              <div className="eyebrow" style={{ color: 'var(--teal)', borderColor: 'rgba(30,194,180,0.3)' }}>Meet The Founder</div>
              <h2>Krishna Rungta</h2>
              <div className={styles.founderTitle}>Founder & CEO, Chemist Box</div>
              <p>
                With over a decade of experience in healthcare retail and supply chain management, Krishna Rungta identified a critical gap in the Indian pharmacy sector: the lack of standardized, trustworthy, and customer-centric physical pharmacies in developing neighborhoods.
              </p>
              <p>
                Driven by a passion to organize the fragmented retail pharmacy space, Krishna founded Chemist Box with a clear objective: to bring genuine medicines and professional counseling directly to the community. Under his leadership, Chemist Box has rapidly expanded through a successful franchise model, empowering local entrepreneurs while maintaining strict quality controls and premium brand aesthetics.
              </p>
              <div className={styles.quote}>
                &ldquo;Healthcare is built on trust. Our goal isn&apos;t just to hand over a medicine strip, but to assure every customer that their health is in the right hands.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlowOrb1} />
        <div className={styles.ctaGlowOrb2} />
        <div className="container">
          <div className={styles.ctaInner}>

            {/* Header */}
            <div className={styles.ctaHeader}>
              <div className="eyebrow-pill" style={{ background: 'rgba(46,196,182,0.15)', color: 'var(--teal)', border: '1px solid rgba(46,196,182,0.3)', margin: '0 auto 24px' }}>
                Experience the Difference
              </div>
              <h2 className={styles.ctaTitle}>
                Ready to Experience<br />
                <span className={styles.ctaTitleAccent}>Premium Pharmacy Retail?</span>
              </h2>
              <p className={styles.ctaSubtitle}>
                Step into a Chemist Box store and discover what modern, trustworthy pharmacy retail truly feels like — or join us as a franchise partner and bring that experience to your community.
              </p>
            </div>

            {/* Feature Pillars */}
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeatureCard}>
                <div className={styles.ctaFeatureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className={styles.ctaFeatureTitle}>100% Genuine Medicines</h4>
                <p className={styles.ctaFeatureDesc}>Every product on our shelf is sourced directly from licensed distributors with a guaranteed cold-chain and authenticity seal.</p>
              </div>
              <div className={styles.ctaFeatureCard}>
                <div className={styles.ctaFeatureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <h4 className={styles.ctaFeatureTitle}>Expert Pharmacist Counsel</h4>
                <p className={styles.ctaFeatureDesc}>Our 250+ trained, empathetic pharmacists are always ready to guide you — from prescription queries to your holistic wellness journey.</p>
              </div>
              <div className={styles.ctaFeatureCard}>
                <div className={styles.ctaFeatureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h4 className={styles.ctaFeatureTitle}>Premium Store Experience</h4>
                <p className={styles.ctaFeatureDesc}>Walk into an organized, clean, and beautifully designed pharmacy environment — a refreshing break from cluttered, unbranded stores.</p>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.ctaDivider} />

            {/* Dual CTA */}
            <div className={styles.ctaActions}>
              <div className={styles.ctaActionBlock}>
                <p className={styles.ctaActionLabel}>For Customers</p>
                <h3 className={styles.ctaActionTitle}>Find Your Nearest Store</h3>
                <p className={styles.ctaActionDesc}>Locate a Chemist Box outlet near you and experience genuine healthcare retail today.</p>
                <Link href="/store-locator" className={`btn btn-teal btn-lg ${styles.ctaBtn}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Find a Store
                </Link>
              </div>
              <div className={styles.ctaActionVertDivider} />
              <div className={styles.ctaActionBlock}>
                <p className={styles.ctaActionLabel}>For Entrepreneurs</p>
                <h3 className={styles.ctaActionTitle}>Own a Chemist Box Franchise</h3>
                <p className={styles.ctaActionDesc}>Join India&apos;s fastest-growing pharmacy network. Build a profitable business with our proven model and full support.</p>
                <Link href="/franchise" className={`btn btn-outline-white btn-lg ${styles.ctaBtn}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                  Partner With Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
