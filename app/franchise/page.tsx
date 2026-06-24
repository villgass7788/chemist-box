import styles from './page.module.css';
import Link from 'next/link';

export default function FranchisePage() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="eyebrow-pill">Partner With Us</div>
            <h1 className={styles.heroTitle}>Start Your Own <span className="text-teal">Chemist Box</span> Franchise</h1>
            <p className={styles.heroDesc}>
              Join India&apos;s fastest-growing modern pharmacy network. Empower your community with genuine healthcare while building a profitable business.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Partner With Us?</h2>
            <p className="section-desc">We provide end-to-end support to ensure your store&apos;s success.</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.benefitCard}>
              <div className={styles.iconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>High ROI</h3>
              <p>Proven business model with industry-leading margins on genuine products.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.iconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3>Store Setup Support</h3>
              <p>Complete assistance with store location, premium interior design, and inventory setup.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Training & Staffing</h3>
              <p>Comprehensive training programs for you and your staff to deliver exceptional service.</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.iconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>IT & Marketing</h3>
              <p>State-of-the-art POS software and national brand marketing to drive footfall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processBox}>
            <h2 className="text-center text-white mb-4">How It Works</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>1</div>
                <h4>Apply Online</h4>
                <p>Fill out the franchise inquiry form.</p>
              </div>
              <div className={styles.stepLine}></div>
              <div className={styles.step}>
                <div className={styles.stepNum}>2</div>
                <h4>Evaluation</h4>
                <p>Our team reviews your profile & location.</p>
              </div>
              <div className={styles.stepLine}></div>
              <div className={styles.step}>
                <div className={styles.stepNum}>3</div>
                <h4>Agreement</h4>
                <p>Sign documents & finalize the layout.</p>
              </div>
              <div className={styles.stepLine}></div>
              <div className={styles.step}>
                <div className={styles.stepNum}>4</div>
                <h4>Launch</h4>
                <p>Open your modern Chemist Box store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
