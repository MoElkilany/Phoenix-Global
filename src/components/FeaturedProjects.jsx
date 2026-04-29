import { useState, useEffect, useRef } from 'react';

const FeaturedProjects = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef({});

  const projects = [
    {
      id: 1,
      name: 'Phoenix Villa',
      nameAr: 'فيلات فينيكس',
      location: 'القاهرة الجديدة، التجمع الخامس',
      image: '/heroSection.png',
      features: ['فيلا مستقلة', '٤٥٠ م²', 'حديقة خاصة', 'تشطيب سوبر لوكس'],
      description: 'فيلات فاخرة مع إطلالات بانورامية على أفق المدينة مع خدمات فندقية متكاملة',
      tag: 'PREMIUM',
      tagColor: '#C0501A',
    },
    {
      id: 2,
      name: 'Phoenix Heights',
      nameAr: 'برج فينيكس',
      location: 'القاهرة الجديدة، مويلح',
      image: '/heroSection.png',
      features: ['شقق فاخرة', '١٧٥ م²', 'بلكونة', 'إطلالة بانورامية'],
      description: 'أبراج سكنية راقية بتصاميم عصرية ومرافق ترفيهية متكاملة',
      tag: 'LUXURY',
      tagColor: '#E8845A',
    },
    {
      id: 3,
      name: 'Phoenix Gardens',
      nameAr: 'حدائق فينيكس',
      location: 'العبور، المنطقة الأولى',
      image: '/heroSection.png',
      features: ['تاونهاوس', '٣٢٠ م²', 'حديقة خاصة', 'موقف سيارات'],
      description: 'مجمع سكني عائلي بحدائق خضراء ومرافق ترفيهية مميزة',
      tag: 'FAMILY',
      tagColor: '#8C3A12',
    },
    {
      id: 4,
      name: 'Phoenix Royal',
      nameAr: 'فينيكس رويال',
      location: 'القاهرة الجديدة، التجمع الأول',
      image: '/heroSection.png',
      features: ['دوبلكس فاخر', '٥٢٠ م²', 'حمام سباحة', 'خدمة كونسيرج'],
      description: 'دوبلكسات فاخرة بتصاميم ملكية وخدمات فندقية على أعلى مستوى',
      tag: 'ROYAL',
      tagColor: '#C0501A',
    },
    {
      id: 5,
      name: 'Phoenix Pearl',
      nameAr: 'لؤلؤة فينيكس',
      location: 'الساحل، المنطقة الثالثة',
      image: '/heroSection.png',
      features: ['شقق بنتهاوس', '٢٤٠ م²', 'تراس خاص', 'أمن ٢٤ ساعة'],
      description: 'بنتهاوس راقي بإطلالات بحرية ساحرة وخصوصية تامة',
      tag: 'EXCLUSIVE',
      tagColor: '#E8845A',
    },
    {
      id: 6,
      name: 'Phoenix Green',
      nameAr: 'فينيكس جرين',
      location: 'العاصمة الإدارية، R7',
      image: '/heroSection.png',
      features: ['شاليه مودرن', '١٨٠ م²', 'تصميم أخضر', 'صالة رياضية'],
      description: 'وحدات سكنية صديقة للبيئة بتصاميم عصرية ومرافق صحية متكاملة',
      tag: 'ECO',
      tagColor: '#8C3A12',
    },
  ];

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

            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[project.id] = el)}
                data-project-id={project.id}
                className="group cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  transitionDelay: `${isVisible ? '0.05s' : '0s'}`,
                }}
                onClick={() => handleExplore('/building.pdf')}
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
                      style={{ minHeight: '280px' }}
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{
                          transition: 'transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        }}
                        alt={project.nameAr}
                        src={project.image}
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(180deg, rgba(13,21,38,0) 0%, rgba(13,21,38,0.4) 50%, rgba(13,21,38,0.8) 100%)',
                        }}
                      />
                      <div
                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(13, 21, 38, 0.6)',
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${project.tagColor}`,
                        }}
                      >
                        <span
                          className="text-[10px] font-bold tracking-wider"
                          style={{ color: project.tagColor, fontFamily: 'Cinzel, serif', letterSpacing: '0.15em' }}
                        >
                          {project.tag}
                        </span>
                      </div>
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

                      <div className="flex items-center gap-2 mt-3 mb-4">
                        <span
                          className="material-symbols-outlined"
                          style={{ color: '#E8845A', fontVariationSettings: "'FILL' 1, 'wght' 400", fontSize: '18px' }}
                        >
                          location_on
                        </span>
                        <span className="text-sm font-semibold" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                          {project.location}
                        </span>
                      </div>

                      <p
                        className="text-sm mb-5"
                        style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 1.9 }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                            style={{
                              background: 'rgba(192, 80, 26, 0.08)',
                              border: '1px solid rgba(192, 80, 26, 0.15)',
                              color: '#C8D3E6',
                              fontFamily: 'Cairo, sans-serif',
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button
                        className="self-start flex items-center gap-2 px-5 py-2.5 font-bold rounded-xl cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #C0501A, #8C3A12)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 16px rgba(192, 80, 26, 0.25)',
                          fontFamily: 'Cairo, sans-serif',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <span className="text-sm">استكشف المشروع</span>
                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>
                          arrow_back
                        </span>
                      </button>
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