'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface Milestone {
  year: string;
  label: string;
  desc: string;
}

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [trackTop, setTrackTop] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const [activeMilestones, setActiveMilestones] = useState<boolean[]>(
    new Array(milestones.length).fill(false)
  );

  useEffect(() => {
    const updateTimeline = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const firstMarker = markerRefs.current[0];
      const lastMarker = markerRefs.current[milestones.length - 1];
      
      if (!firstMarker || !lastMarker) return;
      
      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();
      
      // Calculate top and bottom positions of the markers relative to the container
      const top = (firstRect.top + firstRect.height / 2) - containerRect.top;
      const bottom = (lastRect.top + lastRect.height / 2) - containerRect.top;
      const height = bottom - top;
      
      setTrackTop(top);
      setTrackHeight(height);
      
      // Calculate progress based on scroll position
      const windowHeight = window.innerHeight;
      const triggerY = windowHeight / 2; // Trigger point in viewport
      
      const firstCenterY = firstRect.top + firstRect.height / 2;
      const lastCenterY = lastRect.top + lastRect.height / 2;
      
      let p = (triggerY - firstCenterY) / (lastCenterY - firstCenterY);
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      setProgress(p);
      
      // Determine active milestones
      const activeStates = milestones.map((_, idx) => {
        const marker = markerRefs.current[idx];
        if (!marker) return false;
        const rect = marker.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        return centerY <= triggerY;
      });
      setActiveMilestones(activeStates);
    };

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    
    // We run it after a short delay to ensure hydration and layouts are fully settled
    const timer = setTimeout(updateTimeline, 50);
    
    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
      clearTimeout(timer);
    };
  }, [milestones.length]);

  return (
    <div className={styles.timeline} ref={containerRef}>
      <div className={styles.timelineTrack} style={{ top: trackTop, height: trackHeight }}>
        <div className={styles.timelineTrackFilled} style={{ height: `${progress * 100}%` }}></div>
      </div>
      {milestones.map((m, i) => {
        const isActive = activeMilestones[i];

        return (
          <div key={i} className={styles.timelineItemWrap}>
            <div 
              ref={(el) => {
                markerRefs.current[i] = el;
              }}
              className={`${styles.timelineMarker} ${isActive ? styles.active : ''}`}
            >
              {isActive && (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div className={styles.timelineYear}>{m.year}</div>
                  <h4 className={styles.timelineTitle}>{m.label}</h4>
                </div>
                <p>{m.desc}</p>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src={`/assets/timeline_${m.year}.png`} alt={m.label} fill quality={100} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
