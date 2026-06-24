import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chemist Box — India\'s Trusted Pharmacy Chain',
  description: 'Order medicines, wellness products & healthcare essentials – fast, safe, and reliable. Serving 5000+ pincodes across India. Genuine medicines, 20% discount, certified pharmacists.',
  keywords: 'pharmacy, medicines, healthcare, online pharmacy, prescription medicines, wellness, Chemist Box, India',
  openGraph: {
    title: 'Chemist Box — India\'s Trusted Pharmacy Chain',
    description: 'Order medicines, wellness products & healthcare essentials – fast, safe, and reliable.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
