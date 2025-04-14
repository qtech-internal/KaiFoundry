'use client';

import { useEffect } from 'react';

export default function ZoomScaler() {
  useEffect(() => {
    const wrapper = document.getElementById('scale-wrapper');

    const applyZoomScaling = () => {
      const zoomLevel = window.devicePixelRatio;

      if (wrapper) {
        wrapper.style.transform = `scale(${1 / zoomLevel})`;
        wrapper.style.transformOrigin = 'top left';
        wrapper.style.width = `${100 * zoomLevel}%`;
        wrapper.style.height = `${100 * zoomLevel}%`;
      }
    };

    applyZoomScaling();
    window.addEventListener('resize', applyZoomScaling);

    return () => window.removeEventListener('resize', applyZoomScaling);
  }, []);

  return null;
}
