import { useState } from 'react';
import heroBg from '../assets/Hero-BG.png';
import ShapeButton from './ShapeButton';

const Hero = () => {
  const [loaded] = useState(true);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Phoenix Global luxury real estate"
          src={heroBg}
        />
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
              color: '#ffffff',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            استثمر بثقة مع{' '}
<span style={{ color: '#d44000' }}>
                فينيكس جلوبال
            </span>
          </h1>

          <div
            className={`transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p
              className="text-2xl md:text-4xl mb-14 max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Cairo, sans-serif' }}
            >
              نُحقق أحلامك العقارية بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div
            className={`flex gap-6 justify-center transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <ShapeButton href="#projects">
              شاهد المشاريع
            </ShapeButton>
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
              { value: '200+', label: 'وحدة سكنية' },
              { value: '50+', label: 'مشروع مكتمل' },
              { value: '13+', label: 'سنوات خبرة' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black" style={{ color: '#ffffff', fontFamily: 'Cairo, serif' }}>
                  {stat.value}
                </div>
                <p  className="text-white/60 text-lg mt-2" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
