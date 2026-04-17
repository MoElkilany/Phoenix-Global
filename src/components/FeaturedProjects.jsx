const FeaturedProjects = () => {
  const handleExplore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#132036' }} id="projects">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              apartment
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>مشاريعنا</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
            مشاريع{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              مميزة
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
            روائع معمارية تجسد الفخامة
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl group cursor-pointer" style={{ height: '600px' }}>
          <img
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            alt="Phoenix Villa project"
            src="/heroSection.png"
          />
          <div
            className="absolute inset-0 flex items-center"
            style={{
              background: 'linear-gradient(90deg, rgba(13,21,38,0.95) 0%, rgba(13,21,38,0.7) 40%, rgba(13,21,38,0.2) 100%)',
            }}
          >
            <div className="p-8 md:p-14 max-w-2xl">
            
            
              <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
                Phoenix Villa
              </h3>
              <p className="text-lg mb-8 max-w-lg" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', fontFamily: 'Cairo, sans-serif' }}>
                فيلات عائمة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة.
              </p>
              <button
                onClick={() => handleExplore('/building.pdf')}
                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #C0501A, #A54215)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 32px rgba(192, 80, 26, 0.3)',
                  fontFamily: 'Cairo, sans-serif',
                }}
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
