import React, { useState, useRef, useEffect } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const FeaturedProjects = () => {
  const [heroFav, setHeroFav] = useState(false);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(4, 0.08);

  const handleExplore = (pdfUrl) => window.open(pdfUrl, '_blank');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" id="projects" style={{ background: 'var(--color-surface-subtle)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-[var(--duration-cinematic)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>apartment</span>
            <span>مشاريعنا</span>
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            مشاريع <span className="text-gradient-terracotta">مميزة</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>
            روائع معمارية تجسد الفخامة
          </p>
        </div>

        <div className={`transition-all duration-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
          <div className="relative overflow-hidden group cursor-pointer rounded-[var(--radius-3xl)] tilt-card" style={{ height: '600px', border: '1px solid var(--color-border-default)', background: 'white' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="tilt-glare" />
            <img className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105" alt="Phoenix Villa" src="/heroSection.png" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(253,252,251,0.95) 0%, rgba(253,252,251,0.7) 50%, transparent 100%)' }} />

            <div className="absolute inset-0 flex items-center" dir="rtl">
              <div className="p-10 md:p-16 max-w-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px" style={{ background: 'var(--color-terracotta-500)' }} />
                  <span style={{ color: 'var(--color-terracotta-600)', fontSize: '11px', letterSpacing: '3px', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>مشروع مميز</span>
                </div>

                <h3 className="font-black mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-charcoal-900)', fontFamily: 'var(--font-display)', lineHeight: 'var(--leading-tight)' }}>
                  Phoenix Villa
                </h3>

                <p className="text-lg mb-10 max-w-md" style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', fontFamily: 'var(--font-arabic)' }}>
                  فيلات فاخرة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة.
                </p>

                <div className="flex gap-8 mb-10">
                  {[{ label: 'النوع', value: 'فيلات سكنية' }, { label: 'الموقع', value: 'القاهرة الجديدة' }, { label: 'الحالة', value: 'قيد التنفيذ' }].map((detail) => (
                    <div key={detail.label}>
                      <div className="text-xs mb-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-arabic)', letterSpacing: '1px' }}>{detail.label}</div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{detail.value}</div>
                    </div>
                  ))}
                </div>

                <button onClick={() => handleExplore('/building.pdf')} className="btn-outline group/btn">
                  <span>استكشف المشروع</span>
                  <span className="material-symbols-outlined text-base transition-transform duration-[var(--duration-normal)] group-hover/btn:-translate-x-1">arrow_back</span>
                </button>
              </div>
            </div>

            <button onClick={(e) => { e.stopPropagation(); setHeroFav(!heroFav); }} className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-[var(--duration-normal)] cursor-pointer z-10"
              style={{ background: heroFav ? 'var(--color-terracotta-500)' : 'white', boxShadow: 'var(--shadow-md)', border: heroFav ? 'none' : '1px solid var(--color-border-subtle)' }}>
              <span className={`material-symbols-outlined text-base ${heroFav ? 'filled' : ''}`} style={{ color: heroFav ? 'white' : 'var(--color-charcoal-700)' }}>favorite</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default FeaturedProjects;