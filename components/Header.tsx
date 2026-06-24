'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(2);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.headerContainer}>
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              <div className={styles.logoImageWrap}>
                <Image src="/assets/brand-logo.png" alt="Chemist Box Logo" width={220} height={55} style={{ objectFit: 'contain' }} />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className={styles.actions}>
              <Link href="/store-locator" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Find Store
              </Link>

              {/* Hamburger */}
              <button
                className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                id="hamburger-btn"
              >
                <span/>
                <span/>
                <span/>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileInner}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCta}>
            <Link href="/store-locator" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              Find Nearest Store
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
