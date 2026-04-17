import { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L4 14V34C4 40.627 10.627 46 18 46H30C37.373 46 44 40.627 44 34V14L24 4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16 46H32" stroke="currentColor" strokeWidth="2" />
          <path d="M24 34V46" stroke="currentColor" strokeWidth="2" />
          <path d="M4 14L24 24L44 14" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'جودة متميزة',
      description: 'نلتزم بأعلى معايير الجودة في كل تفاصيل المشروع',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="26" r="16" stroke="currentColor" strokeWidth="2" />
          <path d="M24 14V26L32 30" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="26" r="3" fill="currentColor" />
          <path d="M18 42H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'تسليم في الوقت',
      description: 'نلتزم بمواعيد التسليم المتفق عليها',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M8 16H40" stroke="currentColor" strokeWidth="2" />
          <path d="M16 8V40" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
          <path d="M22 32H26" stroke="currentColor" strokeWidth="2" />
          <path d="M24 30V34" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'أسعار تنافسية',
      description: 'أسعار خاصة تناسب كل الميزانيات',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L6 12V24C6 36.914 15.086 44 24 44C32.914 44 42 36.914 42 24V12L24 6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'استثمار آمن',
      description: 'حماية كاملة للاستثمارات مع عوائد مجزية',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2" />
          <path d="M4 16H44" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16V44" stroke="currentColor" strokeWidth="2" />
          <path d="M28 16V44" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="10" r="3" fill="currentColor" />
          <circle cx="22" cy="10" r="3" fill="currentColor" />
          <circle cx="37" cy="10" r="3" fill="currentColor" />
        </svg>
      ),
      title: 'تصاميم عصرية',
      description: 'أحدث التصاميم العصرية المبتكرة',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.feature-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1526' }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
             verified
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>لماذا فينيكس؟</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
            نبني المستقبل{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              بثقة
            </span>
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
            نلتزم بأعلى معايير الجودة في كل مشروع
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item group cursor-pointer text-center p-6 rounded-2xl transition-all duration-500"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div
                className="mx-auto mb-5 transition-transform duration-500 group-hover:scale-110"
                style={{
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.15), rgba(192, 80, 26, 0.05))',
                   borderRadius: '14px',
                   border: '1px solid rgba(192, 80, 26, 0.2)',
                }}
              >
                <div style={{ width: '28px', height: '28px', color: '#C0501A' }}>{feature.icon}</div>
              </div>

              <h3 className="text-base font-bold mb-2" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#8E9BB5', lineHeight: '1.7', fontFamily: 'Cairo, sans-serif' }}>
                {feature.description}
              </p>

              <style>{`
                .feature-item { opacity: 0; transform: translateY(20px); }
                .feature-item.reveal { animation: revealFeature 0.6s ease forwards; }
                @keyframes revealFeature { to { opacity: 1; transform: translateY(0); } }
                .feature-item:hover { background-color: rgba(240,244,250,0.06) !important; border-color: rgba(192, 80, 26, 0.2) !important; transform: translateY(-4px) !important; }
                .feature-icon svg { stroke: #C0501A !important; fill: none !important; }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
