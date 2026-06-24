import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'Medicine Dispensing', href: '/services' },
    { label: 'Health Checkups', href: '/services' },
    { label: 'Expert Consultation', href: '/services' },
    { label: 'Genuine Products', href: '/services' },
    { label: '24/7 Support', href: '/services' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/policies#privacy' },
    { label: 'Terms & Conditions', href: '/policies#terms' },
    { label: 'Shipping Policy', href: '/policies#shipping' },
    { label: 'Return Policy', href: '/policies#returns' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoImageWrap}>
                  <Image src="/assets/brand-logo.png" alt="Chemist Box Logo" width={160} height={40} style={{ objectFit: 'contain' }} />
                </div>
              </Link>
              <p className={styles.brandDesc}>
                India&apos;s trusted modern pharmacy chain delivering genuine medicines, wellness products, and expert healthcare across 5000+ pincodes.
              </p>
              <div className={styles.socialRow}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Twitter / X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className={styles.colTitle}>Quick Links</h6>
              <ul className={styles.linkList}>
                {footerLinks.company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h6 className={styles.colTitle}>Services</h6>
              <ul className={styles.linkList}>
                {footerLinks.services.map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className={styles.footerLink}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>© 2025 Chemist Box. All rights reserved.</p>
            <div className={styles.legalLinks}>
              {footerLinks.legal.map((l) => (
                <Link key={l.href} href={l.href} className={styles.legalLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
