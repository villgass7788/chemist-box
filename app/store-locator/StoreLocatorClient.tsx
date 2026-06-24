'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Globe,
  Star,
  Navigation,
  Building,
  Search,
  RefreshCw,
  ChevronDown,
  X
} from 'lucide-react';
import { STORES } from '@/lib/stores';
import type { Store } from '@/lib/stores';

/* ── Unique city list derived from data ── */
const CITIES = ['All', ...Array.from(new Set(STORES.map(s => s.city))).sort()];


/* ── Helper: format reviews ── */
function fmtReviews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

export default function StoreLocatorClient() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get('q') || '';

  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState(qParam);

  useEffect(() => {
    setSearchQuery(qParam);
  }, [qParam]);

  const resetFilters = () => {
    setSelectedCity('All');
    setSearchQuery('');
  };

  /* ── Filter logic ──
     City dropdown → exact match on store.city (case-insensitive)
     Text search   → matches against address, pincode, landmark, name
  */
  const filteredStores = useMemo(() => {
    return STORES.filter(store => {
      // 1. City filter
      if (selectedCity !== 'All' && store.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      // 2. Text / pincode search
      const q = searchQuery.trim().toLowerCase();
      if (q === '') return true;
      return (
        store.name.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q) ||
        store.pincode.includes(q) ||
        store.landmark.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q)
      );
    });
  }, [selectedCity, searchQuery]);

  const hasFilters = selectedCity !== 'All' || searchQuery !== '';

  return (
    <div style={{ background: 'var(--offwhite)', minHeight: '100vh', paddingBottom: 80 }}>
      {/* ── Hero Banner ── */}
      <section style={{
        background: 'linear-gradient(135deg, #141D42 0%, #1E2A5E 100%)',
        padding: '70px 0 130px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          <div style={{
            fontSize: '0.8rem', opacity: 0.55, marginBottom: 18,
            fontFamily: 'var(--font-secondary)', letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'white'
          }}>
            Home / Store Locator
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 700, marginBottom: 14 }}>
            Find a Chemist Box Near You
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Serving Bihar with {STORES.length} professional pharmacy locations. Search by city or PIN code to find your nearest store.
          </p>
        </div>
      </section>

      {/* ── Floating Filter Card ── */}
      <div className="container" style={{ marginTop: -56, position: 'relative', zIndex: 10, marginBottom: 48 }}>
        <div style={{
          background: 'var(--white)',
          padding: '32px 40px',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid rgba(30,42,94,0.07)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            alignItems: 'flex-end',
            flexWrap: 'wrap'
          }}>
            {/* City Dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 220px' }}>
              <label style={{
                fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)',
                textTransform: 'uppercase', letterSpacing: '0.07em'
              }}>
                Filter by City
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="city-filter"
                  value={selectedCity}
                  onChange={e => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 44px 14px 18px',
                    borderRadius: 'var(--radius)',
                    border: `1.5px solid ${selectedCity !== 'All' ? 'var(--navy)' : 'var(--border)'}`,
                    background: 'var(--white)',
                    color: 'var(--navy)',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    appearance: 'none',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: selectedCity !== 'All' ? '0 0 0 3px rgba(30,42,94,0.1)' : 'var(--shadow-sm)',
                    transition: 'all var(--transition)'
                  }}
                >
                  {CITIES.map(c => (
                    <option key={c} value={c}>{c === 'All' ? '— All Cities —' : c}</option>
                  ))}
                </select>
                <ChevronDown size={17} style={{
                  position: 'absolute', right: 16, top: '50%',
                  transform: 'translateY(-50%)', color: 'var(--navy)', pointerEvents: 'none'
                }} />
              </div>
            </div>

            {/* PIN Code / Keyword Search */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '2 1 340px' }}>
              <label style={{
                fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)',
                textTransform: 'uppercase', letterSpacing: '0.07em'
              }}>
                Search by PIN Code or Keyword
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="store-search"
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="e.g. 800001, Kankarbagh, Boring Road…"
                  style={{
                    width: '100%',
                    padding: '14px 44px 14px 48px',
                    borderRadius: 'var(--radius)',
                    border: `1.5px solid ${searchQuery ? 'var(--navy)' : 'var(--border)'}`,
                    background: 'var(--white)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxShadow: searchQuery ? '0 0 0 3px rgba(30,42,94,0.1)' : 'var(--shadow-sm)',
                    transition: 'all var(--transition)'
                  }}
                />
                <Search size={17} style={{
                  position: 'absolute', left: 18, top: '50%',
                  transform: 'translateY(-50%)', color: 'var(--text-light)', pointerEvents: 'none'
                }} />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute', right: 14, top: '50%',
                      transform: 'translateY(-50%)', cursor: 'pointer',
                      color: 'var(--text-muted)', display: 'flex'
                    }}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Reset Button — only when filters are active */}
            {hasFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={resetFilters}
                className="btn btn-outline"
                style={{
                  padding: '14px 22px',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontWeight: 600,
                  flex: '0 0 auto',
                  height: '51px'
                }}
              >
                <RefreshCw size={15} />
                Reset
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* ── Store Grid ── */}
      <div className="container">
        {/* Results count */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 28, flexWrap: 'wrap', gap: 12
        }}>
          <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '1.05rem' }}>
            {filteredStores.length === 0
              ? 'No stores found'
              : `Showing ${filteredStores.length} of ${STORES.length} stores`}
            {selectedCity !== 'All' ? ` in ${selectedCity}` : ''}
          </p>
          {hasFilters && filteredStores.length > 0 && (
            <button
              onClick={resetFilters}
              style={{
                color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer'
              }}
            >
              Show all {STORES.length} stores
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'var(--white)', padding: '64px 24px', textAlign: 'center',
              borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)', maxWidth: 500, margin: '40px auto'
            }}
          >
            <MapPin size={44} style={{ color: 'var(--text-light)', marginBottom: 16, display: 'block', margin: '0 auto 16px' }} />
            <h3 style={{ marginBottom: 8, color: 'var(--navy)' }}>No Stores Found</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: 28 }}>
              We couldn&apos;t find stores matching &ldquo;{searchQuery || selectedCity}&rdquo;. Try a different city or keyword.
            </p>
            <button onClick={resetFilters} className="btn btn-primary" style={{ padding: '11px 28px' }}>
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 520px), 1fr))',
          gap: 28
        }}>
          <AnimatePresence mode="popLayout">
            {filteredStores.map((store, idx) => (
              <motion.div
                key={store.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22, delay: Math.min(idx * 0.04, 0.3) }}
                className="card"
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: 'var(--white)', borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border)', overflow: 'hidden'
                }}
              >
                {/* Card header */}
                <div style={{ padding: '26px 30px 18px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.3 }}>
                    {store.name}
                  </h3>

                  {/* City badge + Rating in one row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '4px 12px', borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.06em', background: 'var(--navy)', color: 'white'
                    }}>
                      {store.city}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13}
                            fill={i < Math.floor(store.rating) ? 'var(--warning)' : 'none'}
                            color={i < Math.floor(store.rating) ? 'var(--warning)' : 'var(--border)'}
                          />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
                        {store.rating.toFixed(1)}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        ({fmtReviews(store.reviews)} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '0 30px' }} />

                {/* Details */}
                <div style={{ padding: '18px 30px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {/* Address */}
                  <div style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                    <MapPin size={17} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: '0.875rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
                      {store.address}
                    </p>
                  </div>

                  {/* Landmark */}
                  <div style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                    <Building size={15} style={{ color: 'var(--text-light)', flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                      {store.landmark}
                    </p>
                  </div>

                  {/* Phone + Website */}
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.875rem', marginTop: 2 }}>
                    <a
                      href={`tel:${store.phone}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text)', fontWeight: 500, transition: 'color var(--transition)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                    >
                      <Phone size={14} style={{ color: 'var(--text-light)' }} />
                      {store.phone}
                    </a>
                    <a
                      href="https://chemistbox.in" target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text)', fontWeight: 500, transition: 'color var(--transition)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                    >
                      <Globe size={14} style={{ color: 'var(--text-light)' }} />
                      chemistbox.in
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div style={{
                  padding: '16px 30px 22px',
                  background: '#F8FAFC',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <a
                    href={store.directionUrl} target="_blank" rel="noopener noreferrer"
                    className="link-btn"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)' }}
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--success)', fontSize: '0.875rem', fontWeight: 600 }}>
                    <span style={{
                      display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
                      background: 'var(--success)', boxShadow: '0 0 0 2px rgba(34,197,94,0.25)'
                    }} />
                    Open Now
                  </div>
                </div>
              </motion.div>
            ))}

            {/* "Opening Soon" Card */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: 0.3 }}
              className="card"
              style={{
                display: 'flex', flexDirection: 'column',
                background: 'linear-gradient(135deg, #141D42 0%, #1E2A5E 100%)', 
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px 30px',
                height: '100%',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ marginBottom: '24px', background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '50%' }}>
                <Building size={32} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', color: 'white' }}>
                More shops opening soon!
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '28px', maxWidth: '300px' }}>
                We are expanding rapidly. Stay tuned for more Chemist Box pharmacies in your area.
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  borderRadius: 'var(--radius-full)', 
                  background: 'transparent', 
                  color: 'white', 
                  border: '1px solid rgba(255,255,255,0.4)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#141D42';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Suggest a Location
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
