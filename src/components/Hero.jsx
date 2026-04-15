import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen flex items-center overflow-hidden" 
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <img 
              className="w-full h-full"
              alt={slide.title}
              src={slide.image}
              style={{ width: '100%', height: '100%', objectFit: 'fill', objectPosition: 'center' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(43,45,78,0.7) 0%, rgba(43,45,78,0.3) 50%, rgba(43,45,78,0.8) 100%)' }}></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: currentSlide === index ? '#C0521A' : 'rgba(255,255,255,0.4)',
              transform: currentSlide === index ? 'scale(1.3)' : 'scale(1)'
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
        <div className="max-w-3xl text-center">
          <span 
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full"
            style={{ backgroundColor: '#C0521A', color: '#ffffff' }}
          >
            نخبة العقارات العالمية
          </span>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}
          >
            استثمر بثقة مع{' '}
            <span style={{ color: '#C0521A' }}>فينيكس جلوبال</span>{' '}
            للتطوير العقاري
          </h1>
          
          <div key={currentSlide} className="animate-fade">
            <p className="text-lg md:text-xl mb-4" style={{ color: '#C0521A', fontWeight: '600' }}>
              {slides[currentSlide].title}
            </p>
            <p className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#ffffff', opacity: 0.9 }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 font-bold rounded transition-all hover:scale-105"
              style={{ backgroundColor: '#C0521A', color: '#ffffff' }}
            >
              شاهد المشاريع
            </button>
          </div>

          <div className="flex gap-8 mt-16 pt-8 border-t border-white/20 justify-center">
            <div>
              <h3 className="text-3xl font-bold" style={{ color: '#C0521A' }}>500+</h3>
              <p className="text-white/70 text-sm">وحدة سكنية</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold" style={{ color: '#C0521A' }}>150+</h3>
              <p className="text-white/70 text-sm">مشروع مكتمل</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold" style={{ color: '#C0521A' }}>15+</h3>
              <p className="text-white/70 text-sm">سنوات خبرة</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade {
          animation: fadeSlide 0.5s ease;
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