'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { filterStores, getMapEmbedUrl } from '@/lib/stores';
import type { Store } from '@/lib/stores';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Count Up Animation Component ── */
function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const isDecimal = value.includes('.');
          const numericTarget = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
          const suffix = value.replace(/[0-9.]/g, '');
          
          const start = 0;
          const end = numericTarget;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing: easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = easeProgress * (end - start) + start;
            
            if (isDecimal) {
              setDisplayValue(currentVal.toFixed(1) + suffix);
            } else {
              setDisplayValue(Math.floor(currentVal) + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (isDecimal) {
                setDisplayValue(end.toFixed(1) + suffix);
              } else {
                setDisplayValue(end + suffix);
              }
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{displayValue}</span>;
}

/* ── Intersection Observer Hook ── */
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-left, .animate-right, .animate-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Categories ── */
const categories = [
  {
    img: '/assets/prescribtion medicines.png',
    label: 'Prescription\nMedicines',
    href: '/categories',
  },
  {
    img: '/assets/otc medicines.png',
    label: 'OTC\nMedicines',
    href: '/categories',
  },
  {
    img: '/assets/personal care.png',
    label: 'Personal\nCare',
    href: '/categories',
  },
  {
    img: '/assets/health devices.png',
    label: 'Health\nDevices',
    href: '/categories',
  },
  {
    img: '/assets/baby care.png',
    label: 'Baby Care',
    href: '/categories',
  },
  {
    img: '/assets/womens health.png',
    label: "Women's\nHealth",
    href: '/categories',
  },
  {
    img: '/assets/ayurvedic.png',
    label: 'Ayurvedic',
    href: '/categories',
  },
  {
    img: '/assets/wellness products.png',
    label: 'Wellness\nProducts',
    href: '/categories',
  },
];

/* ── Trust Badges ── */
const trustBadges = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Genuine Medicines',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: '20% Discount',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'Fast Delivery',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    label: 'Certified Pharmacists',
  },
];

/* ── Metrics ── */
const metrics = [
  { num: '18+', label: 'Pharmacy Stores' },
  { num: '100K+', label: 'Customers Served' },
  { num: '10+', label: 'Cities Covered' },
  { num: '100%', label: 'Genuine Products' },
  { num: '24/7', label: 'Customer Support' },
  { num: '20%', label: 'Discount on Medicine' },
];

/* ── Why Choose ── */
const whyCards = [
  {
    title: 'Verified Medicines',
    desc: 'Every product sourced directly from licensed manufacturers. Zero compromise on quality.',
    icon: '✓',
    color: '#E7EFFA',
  },
  {
    title: 'Easy Reorders',
    desc: 'Get your regular medicines in just a click. Smart repeat-order in seconds.',
    icon: '↺',
    color: '#E7EFFA',
  },
  {
    title: 'Secure Payments',
    desc: 'Bank-grade encrypted transactions. Pay via UPI, card, net banking or cash.',
    icon: '🔒',
    color: '#E7EFFA',
  },
  {
    title: 'Expert Support',
    desc: 'Speak directly with our certified pharmacists anytime. Real humans, real help.',
    icon: '💬',
    color: '#E7EFFA',
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Customer, Patna',
    text: 'Chemist Box has completely changed how I manage my family\'s medicines. The 20% discount plus same-day delivery is unbeatable!',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Patient, Muzaffarpur',
    text: 'The pharmacists are incredibly knowledgeable. They helped me find the right generic alternative and saved me a lot of money.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnan',
    role: 'Health Enthusiast, Bhagalpur',
    text: 'Best pharmacy experience I\'ve ever had. Clean stores, genuine products, and staff that actually cares about your health.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Chronic Patient, Gaya',
    text: 'Ordering monthly diabetes medicines used to be a hassle. Now, with auto-refill on Chemist Box, I never run out of my prescription.',
    rating: 5,
  },
  {
    name: 'Sunita Rao',
    role: 'Mother of Two, Darbhanga',
    text: 'I highly recommend their baby care and wellness products. Fast delivery and genuine brands give me peace of mind as a parent.',
    rating: 5,
  },
  {
    name: 'Vikram Malhotra',
    role: 'Senior Citizen, Arrah',
    text: 'The prescription upload feature is so simple that even I can use it. Excellent customer support and very polite delivery agents.',
    rating: 5,
  },
];

/* ── App Features ── */
const appFeatures = [
  'Search 50,000+ medicines instantly',
  'Upload prescription & get doorstep delivery',
  'Track your order in real-time',
  'Set medicine reminders & auto-refill',
  'Exclusive app-only discounts',
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function HomePage() {
  useScrollAnimation();
  const router = useRouter();

  // Testimonials Scroll Snap State
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 380;
      container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 380;
      container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollToCard = (idx: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[idx] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
        setActiveDot(idx);
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 380;
      const index = Math.round(container.scrollLeft / (cardWidth + 24));
      const clampedIndex = Math.max(0, Math.min(testimonials.length - 1, index));
      setActiveDot(clampedIndex);
    }
  };

  // Store Locator CTA state
  const [locatorSearch, setLocatorSearch] = useState('');
  const handleSearch = () => {
    router.push(`/store-locator${locatorSearch ? `?q=${encodeURIComponent(locatorSearch)}` : ''}`);
  };
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const matchedStores = useMemo(() => filterStores(locatorSearch), [locatorSearch]);

  useEffect(() => {
    if (matchedStores.length > 0) {
      if (!selectedStore || !matchedStores.find(s => s.id === selectedStore.id)) {
        setSelectedStore(matchedStores[0]);
      }
    } else {
      setSelectedStore(null);
    }
  }, [matchedStores, selectedStore]);

  return (
    <div className={styles.page}>
      {/* ═══════════════════════════
          HERO SECTION
      ═══════════════════════════ */}
      <section className={styles.hero}>
        {/* Background decorations */}
        <div className={styles.heroBg}>
          <div className={styles.heroBgCircle1}/>
          <div className={styles.heroBgCircle2}/>
        </div>

        {/* Right side: Premium Realistic Pharmacy Interior Image (occupying whole right side with fade mask) */}
        <div className={styles.heroVisual}>
          <Image
            src="/assets/header.png"
            alt="Chemist Box pharmacy store interior counter"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroFadeMask} />
        </div>

        <div className="container">
          <div className={styles.heroInner}>
            {/* Left: Content */}
            <div className={styles.heroContent}>
              <div className={`eyebrow-pill ${styles.heroPill}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                India&apos;s Modern Healthcare Brand
              </div>

              <h1 className={styles.heroTitle}>
                Your Trusted<br/>
                Pharmacy,{' '}
                <span className={styles.heroAccent}>Delivered.</span>
              </h1>

              <p className={styles.heroSub}>
                Order medicines, wellness products &amp; healthcare essentials — fast, safe, and reliable.
              </p>

              <div className={styles.heroActions} style={{ marginTop: '32px' }}>
                <Link href="/store-locator" className="btn btn-teal btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Store Locator
                </Link>
                <Link href="#app-download" className="btn btn-outline-white btn-lg">
                  Download App
                </Link>
              </div>
            </div>

            {/* Right side spacer for column layout */}
            <div className={styles.heroVisualSpacer} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          METRICS MARQUEE
      ═══════════════════════════ */}
      <div className={styles.marqueeBar}>
        <div className={styles.marqueeTrack}>
          {[...metrics, ...metrics, ...metrics, ...metrics].map((m, i) => (
            <div key={i} className={styles.metricChip}>
              <div className={styles.metricDot}/>
              <span className={styles.metricNum}>{m.num}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════
          CATEGORIES
      ═══════════════════════════ */}
      <section className={`section ${styles.categoriesSection}`} id="categories">
        <div className="container">
          <div className={`${styles.sectionHead} animate-on-scroll`}>
            <div className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              What We Offer
            </div>
            <h2>Your Health Needs, Delivered.</h2>
            <p className={styles.categorySub}>
              Get medicines, anytime with us. Your trusted neighbourhood pharmacy is now online, bringing genuine prescriptions, daily wellness essentials, and healthcare services straight to your home.
            </p>
            <div className="divider divider-center"/>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`${styles.categoryCard} animate-on-scroll delay-${(i % 4) + 1}`}
              >
                <div className={styles.categoryIconWrap}>
                  <Image
                    src={cat.img}
                    alt={cat.label.replace('\n', ' ')}
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className={styles.categoryLabel}>
                  {cat.label.split('\n').map((line, j) => (
                    <span key={j} style={{ display: 'block' }}>{line}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className={`${styles.catCTA} animate-on-scroll`}>
            <Link href="/services#products-section" className="btn btn-outline">
              View Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          WHY CHOOSE / TRUST
      ═══════════════════════════ */}
      <section className={`section ${styles.whySection}`} id="why-choose">
        <div className="container">
          <div className={styles.whyInner}>
            {/* Left: Content */}
            <div className={`${styles.whyLeft} animate-left`}>
              <div className="eyebrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Reliable Healthcare
              </div>
              <h2>Reliable Healthcare at<br/>Your Doorstep</h2>
              <div className="divider"/>

              <div className={styles.ratingRow}>
                <div className={styles.ratingStars}>
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingScore}>4.8</span>
                <span className={styles.ratingCount}>· Trusted by 10,000+ customers</span>
              </div>

              <ul className={styles.checkList}>
                {whyCards.map((w, i) => (
                  <li key={i} className={styles.checkItem}>
                    <div className={styles.checkIcon}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <strong>{w.title}</strong>
                      <p>{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className={`btn btn-primary btn-lg ${styles.reviewBtn}`}>
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>

            {/* Right: Premium Realistic Pharmacist Image */}
            <div className={`${styles.whyRight} animate-right`}>
              <div className={styles.illustrationWrapper}>
                <Image
                  src="/assets/why_realistic.png"
                  alt="Professional Indian pharmacist standing in pharmacy"
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: 'var(--radius-2xl)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          IMPACT / STATS (DARK)
      ═══════════════════════════ */}
      <section className={styles.impactSection} id="impact">
        <div className={styles.impactBg}>
          <div className={styles.impactBgGlow1}/>
          <div className={styles.impactBgGlow2}/>
        </div>
        <div className="container">
          <div className={styles.impactInner}>
            <motion.div 
              className={styles.impactLeft}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.impactEyebrow}>
                <span className={styles.pulseDot} />
                Our Impact
              </div>
              <h2 className={styles.impactTitle}>Trusted by Millions<br/>Across India</h2>
              <p className={styles.impactDesc}>
                Since 2019, we&apos;ve been building India&apos;s most trusted pharmacy network — one neighbourhood, one patient, one genuine interaction at a time.
              </p>
              <Link href="/about" className={styles.impactCta}>
                Read Our Story
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            <div className={styles.impactStats}>
              {[
                { num: '15+', label: 'Pharmacy Locations', desc: 'Across every locales, nearby you' },
                { num: '100K+', label: 'Patients Served', desc: 'Families who rely on Chemist Box' },
                { num: '250+', label: 'Pharmacists Employed', desc: 'Trained healthcare professionals' },
                { num: '100%', label: 'Genuine Products', desc: 'Zero-tolerance on substandard medicines' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className={styles.impactStat}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.impactNum}>
                    <CountUp value={s.num} />
                  </div>
                  <div>
                    <div className={styles.impactStatLabel}>{s.label}</div>
                    <div className={styles.impactStatDesc}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          STORE LOCATOR CTA
      ═══════════════════════════ */}
      <section className={`section ${styles.locatorSection}`} id="store-locator-cta">
        <div className="container">
          <div className={`${styles.locatorCard} animate-scale`}>
            <div className={styles.locatorContent}>
              <div className={styles.locatorEyebrow}>Store Locator</div>
              <h2 className={styles.locatorTitle}>Find Your Nearest<br/>Chemist Box</h2>
              <p className={styles.locatorDesc}>
                Search across 15+ pharmacy locations by city, area, or PIN code.
              </p>

              <div className={styles.locatorSearch}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  type="text"
                  placeholder="City, area, or PIN code..."
                  className={styles.locatorInput}
                  id="store-search-input"
                  value={locatorSearch}
                  onChange={(e) => setLocatorSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                />
                <button onClick={handleSearch} className={styles.locatorBtn}>Search</button>
              </div>

              <div className={styles.cityPills}>
                {matchedStores.length > 0 && (
                  matchedStores.map((store) => (
                    <button
                      key={store.id}
                      onClick={() => setSelectedStore(store)}
                      className={styles.cityPill}
                      style={{ 
                        background: selectedStore?.id === store.id ? 'var(--teal)' : 'rgba(255,255,255,0.08)',
                        borderColor: selectedStore?.id === store.id ? 'var(--teal)' : 'rgba(255,255,255,0.15)',
                        color: selectedStore?.id === store.id ? 'white' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {store.name.replace('Chemist Box - ', '')}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Map preview */}
            <div className={styles.locatorMapPreview}>
              {selectedStore ? (
                <div className={styles.mapBg} style={{ padding: 0 }}>
                  <iframe
                    src={getMapEmbedUrl(selectedStore)}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className={styles.mapBg}>
                  <Image
                    src="/assets/map.png"
                    alt="Map showing store locations"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              
              {selectedStore ? (
                <a href={selectedStore.directionUrl} target="_blank" rel="noopener noreferrer" className={styles.findNearbyBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Get Directions
                </a>
              ) : (
                <Link href="/store-locator" className={styles.findNearbyBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Find Nearby Store
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          TESTIMONIALS
      ═══════════════════════════ */}
      <section className={`section ${styles.testimonialsSection}`} id="testimonials">
        <div className="container">
          <div className={`${styles.sectionHead} animate-on-scroll`}>
            <div className="eyebrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              Customer Reviews
            </div>
            <h2>What Our Customers Say</h2>
            <p>Real stories from people we&apos;ve helped.</p>
            <div className="divider divider-center"/>
          </div>

          <div className={styles.carouselContainer}>
            <div 
              ref={scrollContainerRef}
              className={styles.scrollContainer}
              onScroll={handleScroll}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={styles.reviewCard}
                >
                  <Quote className={styles.reviewQuoteIcon} />
                  
                  <div className={styles.reviewStars}>
                    {Array(t.rating).fill(0).map((_, j) => (
                      <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>

                  <p className={styles.reviewText}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className={styles.reviewAuthor}>
                    <div className={styles.reviewAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.reviewName}>{t.name}</div>
                      <div className={styles.reviewRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.carouselControls}>
              <button 
                onClick={scrollPrev} 
                className={styles.arrowBtn} 
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={scrollNext} 
                className={styles.arrowBtn} 
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className={styles.carouselDots}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`${styles.dot} ${idx === activeDot ? styles.dotActive : ''}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          APP DOWNLOAD CTA
      ═══════════════════════════ */}
      <section className={`section ${styles.appSection}`} id="app-download">
        <div className="container">
          <div className={styles.appBlock}>
            <div className={`${styles.appContent} animate-left`}>
              <div className="eyebrow" style={{color: 'rgba(46,196,182,0.9)'}}>
                Mobile App
              </div>
              <h2 className={styles.appTitle}>
                Your Pharmacy,<br/>In Your Pocket
              </h2>
              <p className={styles.appDesc}>
                Download the Chemist Box app for a seamless healthcare experience. Order, track, and manage your medicines — anywhere, anytime.
              </p>

              <ul className={styles.featureList}>
                {appFeatures.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.featureDot}/>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.appBadges}>
                <a 
                  href="https://apps.apple.com/in/app/insta-chemistbox/id6754067810" 
                  className={styles.storeBadge} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Download on App Store"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div className={styles.storeBadgeSmall}>Download on the</div>
                    <div className={styles.storeBadgeLarge}>App Store</div>
                  </div>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.chemistbox.customerapp" 
                  className={styles.storeBadge} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Get it on Google Play"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
                  </svg>
                  <div>
                    <div className={styles.storeBadgeSmall}>Get it on</div>
                    <div className={styles.storeBadgeLarge}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* App preview realistic image */}
            <div className={`${styles.appVisual} animate-right`}>
              <div className={styles.illustrationWrapper}>
                <Image
                  src="/assets/dwnl_our_app.png"
                  alt="Chemist Box smartphone application features and delivery agent"
                  width={550}
                  height={450}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════
          BIHAR PARTNER SECTION
      ═══════════════════════════ */}
      <section className={styles.biharSection}>
        {/* Full-bleed background map blending into the section */}
        <div className={styles.biharMapBg}>
          <Image
            src="/assets/bihar map.png"
            alt="Chemist Box expansion map of Bihar"
            fill
            style={{ objectFit: 'contain', objectPosition: 'right 20%' }}
            priority
          />
          <div className={styles.biharMapFade} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.biharFlexWrap}>
            <div className={`${styles.biharContent} animate-left`}>
              <div className="eyebrow-pill" style={{ background: 'rgba(46,196,182,0.15)', color: 'var(--teal)', border: '1px solid rgba(46,196,182,0.3)', alignSelf: 'flex-start', display: 'inline-flex' }}>
              Strategic Expansion 2026
            </div>
            <h2 className={styles.biharTitle}>
              Partner with Bihar&apos;s
              <span>Fastest-Growing Pharmacy Network</span>
            </h2>
            <p className={styles.biharDesc}>
              Chemist Box is rapidly expanding its footprint across Bihar, establishing premium healthcare hubs in key districts. Join us in our mission to organize healthcare retail and deliver authentic services to every community.
            </p>

            <div className={styles.biharGrid}>
              <div className={styles.biharSubItem}>
                <div className={styles.biharSubIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.biharSubTitle}>Unparalleled Market Demand</h4>
                  <p className={styles.biharSubDesc}>Tap into Bihar&apos;s rapidly growing consumer market with rising awareness for genuine medicines and healthcare standards.</p>
                </div>
              </div>

              <div className={styles.biharSubItem}>
                <div className={styles.biharSubIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 17 22 12"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.biharSubTitle}>Full Supply Chain Support</h4>
                  <p className={styles.biharSubDesc}>Benefit from our advanced warehouse networks, 100% genuine medicine guarantee, and cold-chain supply operations.</p>
                </div>
              </div>

              <div className={styles.biharSubItem}>
                <div className={styles.biharSubIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.biharSubTitle}>Next-Gen Smart POS & ERP</h4>
                  <p className={styles.biharSubDesc}>Operational ease with our custom retail software, automatic inventory replenishment, and customer loyalty management.</p>
                </div>
              </div>

              <div className={styles.biharSubItem}>
                <div className={styles.biharSubIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.biharSubTitle}>Trusted Brand & Marketing</h4>
                  <p className={styles.biharSubDesc}>Leverage regional brand equity, localized advertising campaigns, and continuous local marketing support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.biharActions} animate-right`}>
            <Link href="/contact" className="btn btn-teal btn-lg">
              Inquire Now
            </Link>
            <Link href="/franchise" className="btn btn-outline-white btn-lg">
              Franchise Model Details
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
