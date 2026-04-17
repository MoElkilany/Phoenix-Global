import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: '500+', label: 'وحدة سكنية' },
    { number: '12', label: 'مشروع عملاق' },
    { number: '15+', label: 'سنة خبرة' },
    { number: '98%', label: 'رضا العملاء' },
  ];

  const features = [
    'أكثر من 15 عاماً من الخبرة في السوق',
    'التزام كامل بمواعيد التسليم',
    'أعلى معايير الجودة الدولية في البناء',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      id="about"
      style={{ backgroundColor: '#060B14' }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif', letterSpacing: '2px' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>diamond</span>
            <span>من نحن</span>
          </div>

          <h2
            className="font-black mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            رؤية تتجاوز{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              المباني
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
          >
            في فينيكس جلوبال، نؤمن أن العقار ليس مجرد جدران، بل مساحة لصنع الذكريات وفرصة ذهبية لتنمية الثروة.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Images */}
          <div
            className={`relative transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-16 overflow-hidden rounded-sm" style={{ border: '1px solid rgba(201, 168, 76, 0.1)' }}>
                <img
                  className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105"
                  alt="Phoenix Development project"
                  src="/SectionTwo-1.png"
                />
              </div>
              <div className="overflow-hidden rounded-sm" style={{ border: '1px solid rgba(201, 168, 76, 0.1)' }}>
                <img
                  className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105"
                  alt="Phoenix interior design"
                  src="/SectionTwo-2.png"
                />
              </div>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 hidden md:block">
              <div className="w-full h-px" style={{ background: 'rgba(201, 168, 76, 0.4)' }} />
              <div className="w-px h-full" style={{ background: 'rgba(201, 168, 76, 0.4)' }} />
            </div>

            {/* Experience badge */}
            <div
              className="absolute -right-6 top-8 hidden md:flex flex-col items-center justify-center w-24 h-24 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.12), rgba(201, 168, 76, 0.04))',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                className="text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                15+
              </span>
              <span className="text-[9px] text-center" style={{ color: 'rgba(201, 168, 76, 0.7)', fontFamily: 'Cairo, sans-serif' }}>
                سنة خبرة
              </span>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '400ms' }}
            dir="rtl"
          >
            {/* Features */}
            <ul className="space-y-5 mb-12">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group"
                  style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-sm flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(201, 168, 76, 0.1)',
                      border: '1px solid rgba(201, 168, 76, 0.3)',
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                    >
                      check
                    </span>
                  </div>
                  <span className="text-base leading-relaxed" style={{ color: 'rgba(240, 234, 216, 0.8)' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mb-10" style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.2), transparent)' }} />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div
                    className="text-2xl md:text-3xl font-black mb-1 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: 'Cinzel, serif',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
      />
    </section>
  );
};

export default About;
