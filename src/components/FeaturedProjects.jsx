const FeaturedProjects = () => {
  const handleExplore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#f8f9fa' }}
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#2B2D4E', fontFamily: 'Cairo, sans-serif' }}>
            مشاريعنا المميزة
          </h2>
          <p className="text-lg" style={{ color: '#666666' }}>
            روائع معمارية تجسد الفخامة
          </p>
        </div>

        <div 
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{ height: '600px' }}
        >
          <img 
            className="w-full h-full"
            alt="Phoenix Sky Villa project"
            src="/heroSection.png"
          />
          <div 
            className="absolute inset-0 flex items-center"
            style={{ background: 'linear-gradient(90deg, rgba(43,45,78,0.9) 0%, rgba(43,45,78,0.6) 50%, rgba(43,45,78,0.3) 100%)' }}
          >
            <div className="p-8 md:p-12 max-w-2xl">
              <span 
                className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full"
                style={{ backgroundColor: '#C0521A', color: '#ffffff' }}
              >
                دبي، الإمارات
              </span>
              <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
                Phoenix Sky Villa
              </h3>
              <p className="text-lg mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
                فيلات عائمة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة.
              </p>
              <button 
                onClick={() => handleExplore('/building.pdf')}
                className="px-8 py-4 font-bold rounded transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#C0521A', color: '#ffffff' }}
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