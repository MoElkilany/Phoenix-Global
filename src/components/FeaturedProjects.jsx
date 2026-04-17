import { useState, useEffect, useRef } from 'react';

const FeaturedProjects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleExplore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0A1220' }}
      id="projects"
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>apartment</span>
            <span>مشاريعنا</span>
          </div>
          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            مشاريع{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              مميزة
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
            روائع معمارية تجسد الفخامة
          </p>
        </div>

        {/* Hero project card */}
        <div
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <div
            className="relative overflow-hidden group cursor-pointer"
            style={{
              height: '580px',
              border: '1px solid rgba(201, 168, 76, 0.12)',
            }}
          >
            {/* Image */}
            <img
              className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-105"
              alt="Phoenix Villa project"
              src="/heroSection.png"
            />

            {/* Overlay layers */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(6,11,20,0.96) 0%, rgba(6,11,20,0.75) 45%, rgba(6,11,20,0.15) 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, rgba(6,11,20,0.8) 0%, transparent 50%)',
              }}
            />

            {/* Content */}
            <div
              className="absolute inset-0 flex items-center"
              dir="rtl"
            >
              <div className="p-10 md:p-16 max-w-2xl">
                {/* Project label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px" style={{ background: '#C9A84C' }} />
                  <span
                    style={{
                      color: '#C9A84C',
                      fontSize: '11px',
                      letterSpacing: '3px',
                      fontFamily: 'Cinzel, serif',
                      textTransform: 'uppercase',
                    }}
                  >
                    مشروع مميز
                  </span>
                </div>

                <h3
                  className="font-black mb-5"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: '#F0EAD8',
                    fontFamily: 'Cinzel, serif',
                    lineHeight: 1.1,
                    textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                  }}
                >
                  Phoenix Villa
                </h3>

                <p
                  className="text-lg mb-10 max-w-md"
                  style={{ color: 'rgba(240, 234, 216, 0.7)', lineHeight: '1.9', fontFamily: 'Cairo, sans-serif' }}
                >
                  فيلات فاخرة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة.
                </p>

                {/* Details */}
                <div className="flex gap-8 mb-10">
                  {[
                    { label: 'النوع', value: 'فيلات سكنية' },
                    { label: 'الموقع', value: 'القاهرة الجديدة' },
                    { label: 'الحالة', value: 'قيد التنفيذ' },
                  ].map((detail, i) => (
                    <div key={i}>
                      <div className="text-xs mb-1" style={{ color: 'rgba(201, 168, 76, 0.6)', fontFamily: 'Cairo, sans-serif', letterSpacing: '1px' }}>
                        {detail.label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}>
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleExplore('/building.pdf')}
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold transition-all duration-400 hover:scale-105 cursor-pointer group/btn"
                  style={{
                    background: 'transparent',
                    color: '#C9A84C',
                    border: '1px solid rgba(201, 168, 76, 0.4)',
                    fontFamily: 'Cairo, sans-serif',
                    fontSize: '15px',
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(201, 168, 76, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.7)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(201, 168, 76, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>استكشف المشروع</span>
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                  >
                    arrow_back
                  </span>
                </button>
              </div>
            </div>

            {/* Corner gold accent - top right */}
            <div className="absolute top-6 right-6 opacity-60">
              <div className="w-8 h-px ml-auto" style={{ background: '#C9A84C' }} />
              <div className="w-px h-8 ml-auto" style={{ background: '#C9A84C' }} />
            </div>
            {/* Bottom left */}
            <div className="absolute bottom-6 left-6 opacity-60">
              <div className="w-px h-8" style={{ background: '#C9A84C' }} />
              <div className="w-8 h-px" style={{ background: '#C9A84C' }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
      />
    </section>
  );
};

export default FeaturedProjects;
