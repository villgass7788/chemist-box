import type { Metadata } from 'next';
import StoreLocatorClient from './StoreLocatorClient';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Store Locator — Chemist Box',
  description: 'Find your nearest Chemist Box pharmacy across 100+ locations and 25+ cities in India.',
};

export default function StoreLocatorPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <Suspense fallback={
        <div style={{ 
          padding: '100px 24px', 
          textAlign: 'center', 
          fontFamily: 'var(--font-primary)',
          color: 'var(--navy)',
          fontSize: '1.1rem' 
        }}>
          Loading Store Locator...
        </div>
      }>
        <StoreLocatorClient />
      </Suspense>
    </div>
  );
}
