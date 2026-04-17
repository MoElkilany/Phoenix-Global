import { useState, useEffect, useRef } from 'react';

const Investment = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: '12%', label: 'العائد السنوي', icon: 'trending_up', desc: 'نمو مستمر' },
    { value: '+150', label: 'مشروع مُسلم', icon: 'apartment', desc: 'في مصر والعالم' },
    { value: '98%', label: 'رضا المستثمرين', icon: 'emoji_events', desc: 'ثقة تامة' },
    { value: '+10', label: 'سنوات خبرة', icon: 'calendar_today', desc: 'في السوق' },
  ];

  const benefits = [
    {
      icon: 'trending_up',
      title: 'نمو سنوي مستمر',
      description: 'زيادة في قيمة العقار مدعومة بالبنية التحتية المتطورة والطلب المتصاعد.',
    },
    {
      icon: 'key',
      title: 'حلول تمليك مرنة',
      description: 'خطط سداد ميسرة تتناسب مع أهدافك المالية وتناسب جميع الميزانيات.',
    },
    {
      icon: 'savings',
      title: 'حماية من التضخم',
      description: 'استثمار يحافظ على قيمته ويحقق عوائد حقيقية في السوق المصري.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      id="investment"
      style={{ backgroundColor: '#060B14' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6,11,20,0) 30%, rgba(6,11,20,0.95) 80%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>diamond</span>
            <span>فرص استثمارية حصرية</span>
          </div>

          <h2
            className="font-black mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            استثمر بذكاء،{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E2C880 50%, #C9A84C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              احصد بعناية
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif', lineHeight: 1.9 }}
          >
            نقدم عوائد استثمارية تصل إلى 12% سنوياً من خلال مشاريعنا المختارة بعناية في أكثر المناطق نمواً.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.2}s`,
              }}
            >
              <div
                className="text-center p-8 rounded-sm relative overflow-hidden"
                style={{
                  background: 'rgba(14, 24, 40, 0.7)',
                  border: '1px solid rgba(201, 168, 76, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(201,168,76,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
                />

                <span
                  className="material-symbols-outlined text-xl mb-4 block"
                  style={{ color: 'rgba(201, 168, 76, 0.6)', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  {stat.icon}
                </span>
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
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
                <div className="text-sm font-medium mb-1" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.15}s`,
              }}
            >
              <div
                className="p-8 rounded-sm h-full relative"
                style={{
                  background: 'rgba(14, 24, 40, 0.5)',
                  border: '1px solid rgba(201, 168, 76, 0.08)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.25)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.08)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-50"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
                />

                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-sm mb-6 transition-transform duration-400 group-hover:scale-110"
                  style={{
                    background: 'rgba(201, 168, 76, 0.06)',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                  >
                    {benefit.icon}
                  </span>
                </div>

                <div dir="rtl">
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#7A8898', lineHeight: 1.9, fontFamily: 'Cairo, sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.9s',
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(14, 24, 40, 0.8)',
              border: '1px solid rgba(201, 168, 76, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Accent lines */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
            />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10" dir="rtl">
              <div className="flex items-center gap-6">
                <div
                  className="flex items-center justify-center w-14 h-14"
                  style={{
                    background: 'rgba(201, 168, 76, 0.08)',
                    border: '1px solid rgba(201, 168, 76, 0.25)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                  >
                    trending_up
                  </span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}>
                    ابدأ رحلتك الاستثمارية
                  </h4>
                  <p className="text-sm" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
                    تواصل معنا اليوم للحصول على استشارة مجانية
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 font-bold text-base transition-all duration-400 hover:scale-105 cursor-pointer whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #9A7A35)',
                  color: '#060B14',
                  fontFamily: 'Cairo, sans-serif',
                  boxShadow: '0 4px 24px rgba(201, 168, 76, 0.2)',
                }}
              >
                <span>تواصل معنا الآن</span>
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}>
                  arrow_back
                </span>
              </a>
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

export default Investment;
