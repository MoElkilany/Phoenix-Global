import { useCallback } from 'react';

/**
 * Cursor-following 3D tilt + glare effect for cards.
 * Uses direct DOM manipulation for zero React re-renders on mousemove.
 * Apply to the inner visual card element (not animation wrappers).
 *
 * Usage:
 *   const { handleMouseMove, handleMouseLeave } = useCardTilt();
 *   <div className="tilt-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
 *     <div className="tilt-glare" />
 *     ...card content...
 *   </div>
 */
export const useCardTilt = (maxTilt = 6, glareIntensity = 0.15) => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease-out';

    const glare = card.querySelector('.tilt-glare');
    if (glare) {
      glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,${glareIntensity}) 0%, transparent 55%)`;
      glare.style.opacity = '1';
    }
  }, [maxTilt, glareIntensity]);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';

    const glare = card.querySelector('.tilt-glare');
    if (glare) {
      glare.style.opacity = '0';
    }
  }, []);

  return { handleMouseMove, handleMouseLeave };
};