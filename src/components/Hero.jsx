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

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden" id="hero">

      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-in-out ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              className="w-full h-full object-cover"
              alt={slide.title || 'Phoenix Global luxury real estate'}
              src={slide.image}
            />
          </div>
        ))}

        {/* Cinematic multi-layer overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(6, 11, 20, 0.55)' }} />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(6,11,20,0.6) 0%, rgba(6,11,20,0.0) 30%, rgba(6,11,20,0.0) 60%, rgba(6,11,20,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(6,11,20,0.7) 0%, transparent 60%)',
          }}
        />

        {/* Grain texture */}
        <div className="grain-overlay" />
      </div>

      {/* Gold corner decorations */}
      <div className="absolute top-28 left-10 z-10 hidden md:block">
        <div className="w-12 h-px" style={{ background: 'rgba(201, 168, 76, 0.5)' }} />
        <div className="h-12 w-px mt-0" style={{ background: 'rgba(201, 168, 76, 0.5)' }} />
      </div>
      <div className="absolute top-28 right-10 z-10 hidden md:block">
        <div className="w-12 h-px ml-auto" style={{ background: 'rgba(201, 168, 76, 0.5)' }} />
        <div className="h-12 w-px ml-auto mt-0" style={{ background: 'rgba(201, 168, 76, 0.5)' }} />
      </div>

      {/* Slide number */}
      <div
        className="absolute top-1/2 right-8 -translate-y-1/2 z-10 hidden lg:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span style={{ color: 'rgba(201, 168, 76, 0.4)', fontFamily: 'Cinzel, serif', fontSize: '11px', letterSpacing: '3px' }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center h-full">
        <div className="max-w-3xl text-right md:text-right" dir="rtl">

          {/* Badge */}
          <div
            className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="inline-flex items-center gap-3 mb-10">
              <div className="w-8 h-px" style={{ background: 'rgba(201, 168, 76, 0.6)' }} />
              <span
                style={{
                  color: '#C9A84C',
                  fontSize: '11px',
                  letterSpacing: '3px',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                }}
              >
                نخبة العقارات العالمية
              </span>
              <div className="w-8 h-px" style={{ background: 'rgba(201, 168, 76, 0.6)' }} />
            </div>
          </div>

          {/* Main heading */}
          <h1
            className={`font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
              lineHeight: 1.15,
              textShadow: '0 2px 30px rgba(0,0,0,0.5)',
            }}
          >
            استثمر بثقة مع{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E2C880 50%, #C9A84C 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              فينيكس جلوبال
            </span>
          </h1>

          {/* Slide subtitle */}
          <div
            key={currentSlide}
            className={`transition-all duration-700 delay-400 mb-10 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {slides[currentSlide].title && (
              <p
                className="text-xl md:text-2xl mb-2 font-semibold"
                style={{ color: 'rgba(201, 168, 76, 0.85)', fontFamily: 'Cairo, sans-serif' }}
              >
                {slides[currentSlide].title}
              </p>
            )}
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'rgba(240, 234, 216, 0.7)', fontFamily: 'Cairo, sans-serif' }}
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold transition-all duration-400 hover:scale-105 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #9A7A35)',
                color: '#060B14',
                borderRadius: '4px',
                fontFamily: 'Cairo, sans-serif',
                fontSize: '15px',
                boxShadow: '0 8px 32px rgba(201, 168, 76, 0.25)',
              }}
            >
              <span>شاهد المشاريع</span>
              <span
                className="material-symbols-outlined text-base transition-transform duration-300 group-hover:-translate-x-1"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                arrow_back
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold transition-all duration-400 hover:scale-105 cursor-pointer"
              style={{
                background: 'transparent',
                color: '#F0EAD8',
                border: '1px solid rgba(240, 234, 216, 0.25)',
                borderRadius: '4px',
                fontFamily: 'Cairo, sans-serif',
                fontSize: '15px',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.5)'; e.currentTarget.style.color = '#C9A84C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(240, 234, 216, 0.25)'; e.currentTarget.style.color = '#F0EAD8'; }}
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div
          className="max-w-7xl mx-auto px-6 md:px-12"
          style={{
            borderTop: '1px solid rgba(201, 168, 76, 0.15)',
          }}
        >
          <div
            className="flex justify-center md:justify-start gap-12 md:gap-20 py-7"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(6,11,20,0.8))',
            }}
          >
            {[
              { value: '500+', label: 'وحدة سكنية' },
              { value: '150+', label: 'مشروع مكتمل' },
              { value: '15+', label: 'سنوات خبرة' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div
                  className="text-3xl md:text-4xl font-black mb-1 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'Cinzel, serif',
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-xs tracking-widest" style={{ color: 'rgba(240, 234, 216, 0.5)', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-24 right-8 z-10 hidden lg:flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="transition-all duration-500 rounded-full cursor-pointer block"
            style={{
              width: currentSlide === index ? '2px' : '2px',
              height: currentSlide === index ? '24px' : '6px',
              background: currentSlide === index ? '#C9A84C' : 'rgba(240, 234, 216, 0.2)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
