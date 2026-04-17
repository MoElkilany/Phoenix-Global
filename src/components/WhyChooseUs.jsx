import { useEffect, useRef, useState } from 'react';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L4 14V34C4 40.627 10.627 46 18 46H30C37.373 46 44 40.627 44 34V14L24 4Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 14L24 24L44 14" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'جودة متميزة',
      description: 'نلتزم بأعلى معايير الجودة في كل تفاصيل المشروع',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="26" r="16" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 14V26L32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="26" r="2" fill="currentColor" />
          <path d="M18 42H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'تسليم في الوقت',
      description: 'نلتزم بمواعيد التسليم المتفق عليها دون تأخير',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 16H40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 8V40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="32" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 32H26M24 30V34" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'أسعار تنافسية',
      description: 'أسعار خاصة ومناسبة لجميع الميزانيات',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L6 12V24C6 36.914 15.086 44 24 44C32.914 44 42 36.914 42 24V12L24 6Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'استثمار آمن',
      description: 'حماية كاملة للاستثمارات مع عوائد مجزية ومضمونة',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 16H44M4 28H44" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 4V44M28 4V44" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'تصاميم عصرية',
      description: 'أحدث التصاميم المعمارية المبتكرة والمميزة',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.why-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" style={{ backgroundColor: '#060B14' }}>
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>verified</span>
            <span>لماذا فينيكس؟</span>
          </div>
          <h2
            className="font-black mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            نبني المستقبل{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              بثقة
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
            نلتزم بأعلى معايير الجودة في كل مشروع
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className="why-item group cursor-pointer"
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                className="text-center p-8 rounded-sm h-full relative overflow-hidden"
                style={{
                  background: 'rgba(14, 24, 40, 0.5)',
                  border: '1px solid rgba(201, 168, 76, 0.08)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.9)';
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.28)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.5)';
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
                />

                {/* Icon */}
                <div
                  className="mx-auto mb-6 transition-all duration-400 group-hover:scale-110"
                  style={{
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(201, 168, 76, 0.06)',
                    borderRadius: '4px',
                    border: '1px solid rgba(201, 168, 76, 0.15)',
                    color: '#C9A84C',
                  }}
                >
                  <div style={{ width: '28px', height: '28px' }}>{feature.icon}</div>
                </div>

                <div dir="rtl">
                  <h3
                    className="text-base font-bold mb-3"
                    style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: '#7A8898', lineHeight: '1.8', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
      />
    </section>
  );
};

export default WhyChooseUs;
