import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const slides = [
    { image: '/heroSection.png', title: 'مشاريع سكنية فاخرة', subtitle: 'أعلى معايير التصميم والتشطيب' },
    { image: '/heroSection1.png', subtitle: 'مساحات فاخرة بتصميم عصري' },
    { image: '/heroSection2.png', title: 'أبراج سكنية', subtitle: 'إطلالات ساحرة على المدينة' },
    { image: '/heroSection3.png', title: 'مشاريع تجارية', subtitle: 'فرص استثمارية مربحة' },
    { image: '/heroSection4.png', title: 'تصميم داخلي', subtitle: 'لمسات فنية مميزة' },
    { image: '/heroSection5.png', title: 'تشطيبات فاخرة', subtitle: 'جودة لا مثيل لها' },
  ];

  const stats = [
    { value: '500+', label: 'وحدة سكنية' },
    { value: '150+', label: 'مشروع مكتمل' },
    { value: '15+', label: 'سنوات خبرة' },
  ];

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden" id="hero" style={{ background: 'var(--color-sand-50)' }}>
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-[2500ms] ease-[var(--ease-elegant)] ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <img className="w-full h-full object-cover" alt={slide.title || 'Phoenix Global'} src={slide.image} />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(253,252,251,0.9) 0%, rgba(253,252,251,0.4) 50%, transparent 100%)' }} />
        <div className="grain-overlay" />
      </div>

      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex items-center h-full w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full" dir="rtl">
          <div className={`transition-all duration-[var(--duration-cinematic)] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="section-badge mb-8">
              <span className="decorative-dot"></span>
              <span>نخبة العقارات العالمية</span>
            </div>

            <h1 className="font-black mb-6 leading-tight" style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
              استثمر بثقة مع <span className="text-gradient-terracotta">فينيكس جلوبال</span>
            </h1>

            <div key={currentSlide} className="transition-all duration-[var(--duration-slow)] mb-10">
              {slides[currentSlide].title && (
                <p className="text-xl md:text-2xl mb-2 font-semibold" style={{ color: 'var(--color-terracotta-600)', fontFamily: 'var(--font-heading)' }}>
                  {slides[currentSlide].title}
                </p>
              )}
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)', lineHeight: 'var(--leading-relaxed)' }}>
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 transition-all duration-[var(--duration-cinematic)]">
              <a href="#projects" className="btn-terracotta">
                <span>شاهد المشاريع</span>
                <span className="material-symbols-outlined text-base">arrow_back</span>
              </a>
              <a href="#contact" className="btn-outline">
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-[var(--duration-cinematic)] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex justify-center md:justify-start gap-12 md:gap-20 py-8" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl md:text-4xl font-black mb-1 transition-transform duration-[var(--duration-normal)] group-hover:scale-105 text-gradient-terracotta" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <p className="text-xs tracking-widest" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-arabic)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-8 z-10 hidden lg:flex flex-col gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className="transition-all duration-[var(--duration-slow)] cursor-pointer rounded-full"
            style={{ width: currentSlide === index ? '2px' : '2px', height: currentSlide === index ? '24px' : '6px', background: currentSlide === index ? 'var(--color-terracotta-500)' : 'var(--color-sand-400)' }} />
        ))}
      </div>
    </section>
  );
};

export default Hero;