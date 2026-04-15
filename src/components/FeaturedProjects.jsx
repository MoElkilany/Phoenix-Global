import { useState } from 'react';

const FeaturedProjects = () => {
  const [hovered, setHovered] = useState(false);
  const handleExplore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section 
      className="py-24 lg:py-32 relative overflow-hidden section-spacing"
      style={{ backgroundColor: '#030712' }}
      id="projects"
    >
      <div className="content-container">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ backgroundColor: '#d4a849', color: '#051125' }}>
            مشروع مميز
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel" style={{ color: '#051125' }}>
            مشاريعنا المميزة
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            روائع معمارية تجسد الفخامة
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-3xl transition-all duration-500"
          style={{ height: '600px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            alt="Phoenix Sky Villa project"
            src="/heroSection.png"
          />
          <div 
            className="absolute inset-0 flex items-center transition-opacity duration-500"
            style={{ background: hovered ? 'linear-gradient(90deg, rgba(5,17,37,0.85) 0%, rgba(5,17,37,0.4) 50%, rgba(5,17,37,0.2) 100%)' : 'linear-gradient(90deg, rgba(5,17,37,0.9) 0%, rgba(5,17,37,0.6) 50%, rgba(5,17,37,0.3) 100%)' }}
          >
            <div className="p-8 md:p-12 max-w-2xl">
              <span 
                className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold rounded-full"
                style={{ backgroundColor: '#d4a849', color: '#051125' }}
              >
                دبي، الإمارات
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel" style={{ color: '#ffffff' }}>
                Phoenix Sky Villa
              </h3>
              <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
                فيلات عائمة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة.
              </p>
              <button 
                onClick={() => handleExplore('/building.pdf')}
                className="px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: '#d4a849', color: '#051125' }}
              >
                استكشف المشروع
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;