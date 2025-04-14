'use client';
import { useEffect, useState } from 'react';

export default function ZoomResponsiveWrapper() {
  const [zoomPercent, setZoomPercent] = useState(100);
  const [hasZoomed, setHasZoomed] = useState(false);


  const resetToInitial = () => {
    setZoomPercent(100);
    setHasZoomed(false);
    
    const wrapper = document.getElementById('zoom-wrapper');
    const fixedElements = document.querySelectorAll('.zoom-affected');
    
    if (wrapper) {
      wrapper.style.width = '';
      wrapper.style.transformOrigin = '';
      wrapper.style.transition = '';
      wrapper.style.margin = '';
    }

    fixedElements.forEach(el => {
      (el as HTMLElement).style.width = '';
      (el as HTMLElement).style.left = '';
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === '-') {
          setHasZoomed(true);
          setZoomPercent((prev) => Math.max(50, prev - 10)); 
        } else if (e.key === '+') {
          setHasZoomed(true);
          setZoomPercent((prev) => Math.min(100, prev + 10)); 
        } else if (e.key === '0' || e.key === 'Reset') { 
            resetToInitial();
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!hasZoomed) return;

    const applyZoom = () => {
      const wrapper = document.getElementById('zoom-wrapper');
      const fixedElements = document.querySelectorAll('.zoom-affected');
      
      if (wrapper) {
        wrapper.style.width = `${zoomPercent}%`;
        wrapper.style.transformOrigin = 'top center';
        wrapper.style.transition = 'width 0.3s ease';
        wrapper.style.margin = '0 auto';
      }

      fixedElements.forEach(el => {
        (el as HTMLElement).style.width = `${zoomPercent}%`;
        (el as HTMLElement).style.left = `calc((100% - ${zoomPercent}%) / 2)`;
      });
    };

    applyZoom();
  }, [zoomPercent, hasZoomed]);

  return null;
}