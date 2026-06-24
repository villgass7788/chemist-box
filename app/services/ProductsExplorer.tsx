'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './page.module.css';

interface Category {
  id: string;
  name: string;
  image: string;        // small icon for the tab sidebar
  panelImage: string;   // realistic use-case photo for the panel background
  desc: string;
  features: string[];
  segments: string[];
}

export default function ProductsExplorer({ categories }: { categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  return (
    <div className={`${styles.productExplorer} ${isMobileExpanded ? styles.mobileExpanded : ''}`}>

      {/* ── Left: Vertical Tab Sidebar ── */}
      <div className={styles.tabsList} role="tablist">
        {categories.map((cat) => {
          const isActive = activeCategory.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat);
                setIsMobileExpanded(true);
              }}
              className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
              aria-selected={isActive}
              role="tab"
            >
              {/* Icon: fills the container 100% */}
              <div className={styles.tabIconWrap}>
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  quality={100}
                  className={isActive ? styles.tabIconActive : styles.tabIcon}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span className={styles.tabLabel}>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* ── Right: Detail Panel ── */}
      <div className={styles.panelContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.activeTabPanel}
            role="tabpanel"
          >
            <button 
              className={styles.mobileCloseBtn} 
              onClick={() => setIsMobileExpanded(false)}
              aria-label="Close details"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* ── Panel Left: Full-bleed REALISTIC photo with right fade mask ── */}
            <div className={styles.panelImgColumn}>
              <Image
                src={activeCategory.panelImage}
                alt={activeCategory.name}
                fill
                quality={90}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              {/* Fade mask — right edge dissolves into white */}
              <div className={styles.panelImgMask} />

            </div>

            {/* ── Panel Right: Text content ── */}
            <div className={styles.panelRight}>
              <div className={styles.panelCategoryTag}>{activeCategory.name}</div>
              <h3 className={styles.panelTitle}>{activeCategory.name}</h3>
              <p className={styles.panelDesc}>{activeCategory.desc}</p>

              <div className={styles.panelSegmentsTitle}>Product Offerings</div>
              <div className={styles.segmentsGrid}>
                {activeCategory.segments.map((seg, idx) => (
                  <div key={idx} className={styles.segmentTag}>
                    <span className={styles.segmentTagDot} />
                    <span>{seg}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
