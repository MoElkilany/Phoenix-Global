import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import ProjectCarousel from './ProjectCarousel';

const FeaturedProjects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.projectId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleExplore = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="projects"
      style={{ backgroundColor: '#0D1526' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(192, 80, 26, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20" dir="rtl">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
            >
              apartment
            </span>
            <span className="text-sm font-semibold" style={{ color: '#C0501A', fontFamily: 'Cairo, sans-serif' }}>
              مشاريعنا
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
          >
            مشاريع{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
            >
              مميزة
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
            روائع معمارية تجسد الفخامة والعصرية في أفخم المواقع
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleCards.has(String(project.id));
            const isEven = index % 2 === 0;
            const hasPdfs = project.pdfs && project.pdfs.length > 0;

            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[project.id] = el)}
                data-project-id={project.id}
                className="group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  transitionDelay: `${isVisible ? '0.05s' : '0s'}`,
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(192, 80, 26, 0.3)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25), 0 0 32px rgba(192, 80, 26, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`md:w-[50%] relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                      style={{ background: '#132036' }}
                    >
                      <ProjectCarousel images={project.images} alt={project.nameAr} />
                    </div>

                    <div
                      className={`md:w-[50%] p-6 md:p-8 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      dir="rtl"
                    >
                      <div className="mb-1">
                        <p
                          className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-1"
                          style={{ color: project.tagColor, fontFamily: 'Cinzel, serif' }}
                        >
                          {project.name}
                        </p>
                        <h3
                          className="text-2xl md:text-3xl font-black leading-tight"
                          style={{ color: '#FFFFFF', fontFamily: 'Cairo, sans-serif' }}
                        >
                          {project.nameAr}
                        </h3>
                      </div>

                      <div className="flex items-start gap-2 mt-3 mb-4">
                        <span
                          className="material-symbols-outlined flex-shrink-0 mt-0.5"
                          style={{ color: '#E8845A', fontVariationSettings: "'FILL' 1, 'wght' 400", fontSize: '18px' }}
                        >
                          location_on
                        </span>
                        <span className="text-sm font-semibold leading-relaxed" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                          {project.locationDetail}
                        </span>
                      </div>

                      {project.images.length > 0 && (
                        <div className="flex items-center gap-2 mb-5">
                          <span
                            className="material-symbols-outlined"
                            style={{ color: '#8E9BB5', fontVariationSettings: "'FILL' 0, 'wght' 400", fontSize: '16px' }}
                          >
                            photo_library
                          </span>
                          <span className="text-xs" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
                            {project.images.length} صورة
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        {hasPdfs && (
                          <button
                            onClick={() => handleExplore(project.pdfs[0])}
                            className="flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl cursor-pointer"
                            style={{
                              background: 'linear-gradient(135deg, #C0501A, #8C3A12)',
                              color: '#FFFFFF',
                              boxShadow: '0 4px 16px rgba(192, 80, 26, 0.25)',
                              fontFamily: 'Cairo, sans-serif',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-1px)';
                              e.currentTarget.style.boxShadow = '0 6px 20px rgba(192, 80, 26, 0.35)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 4px 16px rgba(192, 80, 26, 0.25)';
                            }}
                          >
                            <span className="text-sm">{project.id === 2 ? 'استكشف المشروع' : 'معاينة التصميم'}</span>
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>
                              {project.id === 2 ? 'explore' : 'picture_as_pdf'}
                            </span>
                          </button>
                        )}

                        {hasPdfs && project.pdfs.length > 1 && (
                          <button
                            onClick={() => handleExplore(project.pdfs[1])}
                            className="flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl cursor-pointer"
                            style={{
                              background: 'transparent',
                              color: '#C0501A',
                              border: '1px solid rgba(192, 80, 26, 0.4)',
                              fontFamily: 'Cairo, sans-serif',
                              transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(192, 80, 26, 0.08)';
                              e.currentTarget.style.borderColor = '#C0501A';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.borderColor = 'rgba(192, 80, 26, 0.4)';
                            }}
                          >
                            <span className="text-sm">{project.id === 2 ? 'استكشف مدخل الفيلا' : 'تصميم آخر'}</span>
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>
                              {project.id === 2 ? 'door_front' : 'description'}
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;