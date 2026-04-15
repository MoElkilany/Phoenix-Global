import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const slides = [
    {
      image: '/heroSection.png',
      title: 'مشاريع سكنية فاخرة',
      subtitle: 'أعلى معايير التصميم والتشطيب'
    },
    {
      image: '/heroSection1.png',
      subtitle: 'مساحات فاخرة بتصميم عصري'
    },
    {
      image: '/heroSection2.png',
      title: 'أبراج سكنية',
      subtitle: 'إطلالات ساحرة على المدينة'
    },
    {
      image: '/heroSection3.png',
      title: 'مشاريع تجارية',
      subtitle: 'فرص استثمارية مربحة'
    },
    {
      image: '/heroSection4.png',
      title: 'تصميم داخلي',
      subtitle: 'لمسات فنية مميزة'
    },
    {
      image: '/heroSection5.png',
      title: 'تشطيبات فاخرة',
      subtitle: 'جودة لا مثيل لها'
    }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen flex items-center overflow-hidden gradient-luxury" 
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="absolute inset-0 transition-all duration-[1500ms]"
            style={{ 
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)'
            }}
          >
            <img 
              className="w-full h-full object-cover"
              alt={slide.title}
              src={slide.image}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(3,7,18,0.7) 0%, rgba(3,7,18,0.3) 40%, rgba(3,7,18,0.8) 100%)' }}></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-12 h-1 rounded-full transition-all duration-500 cursor-pointer"
            style={{ 
              backgroundColor: currentSlide === index ? '#d4a849' : 'rgba(255,255,255,0.2)',
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="content-container relative z-10 flex items-center justify-center h-full">
        <div className={`max-w-4xl text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span 
            className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-[0.2em] uppercase rounded-full"
            style={{ backgroundColor: '#d4a849', color: '#030712' }}
          >
            نخبة العقارات العالمية
          </span>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-cinzel"
            style={{ color: '#ffffff' }}
          >
            استثمر بثقة مع{' '}
            <span style={{ color: '#d4a849' }}>فينيكس جلوبال</span>{' '}
            للتطوير العقاري
          </h1>
          
          <div key={currentSlide} className="animate-fade">
            <p className="text-xl md:text-2xl mb-4 font-semibold text-gold">
              {slides[currentSlide].title}
            </p>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed text-muted">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-10 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: '#d4a849', color: '#030712' }}
            >
              شاهد المشاريع
            </button>
          </div>

          <div className="flex gap-12 mt-20 pt-8 border-t border-white/10 justify-center">
            <div className="text-center">
              <h3 className="text-4xl font-bold font-cinzel text-gold">500+</h3>
              <p className="text-white/50 text-sm mt-1">وحدة سكنية</p>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold font-cinzel text-gold">150+</h3>
              <p className="text-white/50 text-sm mt-1">مشروع مكتمل</p>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center">
              <h3 className="text-4xl font-bold font-cinzel text-gold">15+</h3>
              <p className="text-white/50 text-sm mt-1">سنوات خبرة</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade {
          animation: fadeSlide 0.6s ease;
        }
        
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;