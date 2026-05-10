import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMAGES = [
  '/heroSection.png',
  '/heroSection1.png',
  '/heroSection2.png',
  '/heroSection3.png',
  '/heroSection4.png',
  '/heroSection5.png',
  '/heroSection6.jpeg',
  '/heroSection7.jpeg',
  '/heroSection8.jpeg',
  '/heroSection9.jpeg',
  '/heroSection10.jpeg',
  '/heroSection11.jpeg',
  '/heroSection12.jpeg',
  '/heroSection13.jpeg',
  '/heroSection14.jpeg',
  '/heroSection15.jpeg',
  '/heroSection16.jpeg',
  '/heroSection17.jpeg',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(true);
  const { t } = useLanguage();

  const slideTexts = t('hero.slides');
  const slides = HERO_IMAGES.map((image, i) => ({
    image,
    title: slideTexts?.[i]?.title ?? '',
    subtitle: slideTexts?.[i]?.subtitle ?? '',
  }));

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { value: '200+', label: t('hero.stats.units') },
    { value: '50+', label: t('hero.stats.completed') },
    { value: '13+', label: t('hero.stats.years') },
  ];

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
            background: 'linear-gradient(180deg, rgba(13,21,38,0.7) 0%, rgba(13,21,38,0.3) 40%, rgba(13,21,38,0.5) 70%, rgba(13,21,38,0.95) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
        <div className="max-w-5xl text-center">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              color: '#fdf8f0',
              fontFamily: 'var(--font-current)',
            }}
          >
            <span style={{ color: '#fdf8f0' }}>
              {t('hero.title')}
            </span>
          </h1>

          <div
            key={currentSlide}
            className={`transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {slides[currentSlide].title && (
              <p className="text-2xl md:text-3xl mb-4 font-bold" style={{ color: '#fdf8f0', fontFamily: 'var(--font-current)' }}
              >
                {slides[currentSlide].title}
              </p>
            )}
            <p
              className="text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#fdf8f0', fontFamily: 'var(--font-current)' }}
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
                background: 'linear-gradient(135deg, #d44000, #A54215)',
                color: '#fdf8f0',
                boxShadow: '0 8px 32px rgba(212, 64, 0, 0.3)',
                fontFamily: 'var(--font-current)',
              }}
            >
              {t('hero.ctaProjects')}
            </a>
            <a
              href="#contact"
              className="px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#fdf8f0',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'var(--font-current)',
              }}
            >
              {t('hero.ctaContact')}
            </a>
          </div>

          <div
            className={`flex gap-16 mt-24 pt-8 justify-center transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black" style={{ color: '#fdf8f0', fontFamily: 'var(--font-current)' }}>
                  {stat.value}
                </div>
                <p className="text-lg mt-2" style={{ color: '#fdf8f0', fontFamily: 'var(--font-current)' }}>
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
              aria-label={`Slide ${index + 1}`}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                currentSlide === index ? 'w-8 h-2' : 'w-2 h-2'
              }`}
              style={{
                background: currentSlide === index ? '#d44000' : 'rgba(240,244,250,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
