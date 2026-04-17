import { useState, useEffect, useRef } from 'react';

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
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              className="w-full h-full object-cover"
              alt={slide.title || 'Phoenix Global luxury real estate'}
              src={slide.image}
            />
          </div>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(12,10,9,0.7) 0%, rgba(12,10,9,0.3) 40%, rgba(12,10,9,0.5) 70%, rgba(12,10,9,0.95) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
        <div className="max-w-5xl text-center">
          <div
            className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-8"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <span
                className="material-symbols-outlined text-gold text-base"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
              >
                diamond
              </span>
              <span className="text-gold text-sm font-semibold tracking-wider" style={{ fontFamily: 'Cairo, sans-serif' }}>
                نخبة العقارات العالمية
              </span>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              color: '#ffffff',
              fontFamily: 'Cairo, sans-serif',
              textShadow: '0 4px 40px rgba(0,0,0,0.6)',
            }}
          >
            استثمر بثقة مع{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #F5E6B3, #D4AF37)' }}>
              فينيكس جلوبال
            </span>
          </h1>

          <div
            key={currentSlide}
            className={`transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {slides[currentSlide].title && (
              <p className="text-2xl md:text-3xl mb-4 font-bold" style={{ color: '#D4AF37', fontFamily: 'Cairo, sans-serif' }}>
                {slides[currentSlide].title}
              </p>
            )}
            <p
              className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Cairo, sans-serif' }}
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <div
            className={`flex gap-6 justify-center transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#projects"
              className="px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #CA8A04)',
                color: '#0C0A09',
                boxShadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              شاهد المشاريع
            </a>
            <a
              href="#contact"
              className="px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              تواصل معنا
            </a>
          </div>

          <div
            className={`flex gap-16 mt-24 pt-8 justify-center transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {[
              { value: '500+', label: 'وحدة سكنية' },
              { value: '150+', label: 'مشروع مكتمل' },
              { value: '15+', label: 'سنوات خبرة' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>
                  {stat.value}
                </div>
                <p className="text-white/60 text-sm mt-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                currentSlide === index ? 'w-8 h-2' : 'w-2 h-2'
              }`}
              style={{
                background: currentSlide === index ? '#D4AF37' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
