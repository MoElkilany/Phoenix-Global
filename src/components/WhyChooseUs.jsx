import { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  
  const features = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L4 14V34C4 40.627 10.627 46 18 46H30C37.373 46 44 40.627 44 34V14L24 4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 46H32" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 34V46" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 14L24 24L44 14" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'جودة متميزة',
      description: 'نلتزم بأعلى معايير الجودة في كل تفاصيل المشروع'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="26" r="16" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 14V26L32 30" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="26" r="3" fill="currentColor"/>
          <path d="M18 42H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'تسليم في الوقت',
      description: 'نلتزم بمواعيد التسليم المتفق عليها'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 16H40" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8V40" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 32H26" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 30V34" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'أسعار تنافسية',
      description: 'أسعار خاصة تناسب كل الميزانيات'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L6 12V24C6 36.914 15.086 44 24 44C32.914 44 42 36.914 42 24V12L24 6Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'استثمار آمن',
      description: 'حماية كاملة للاستثمارات مع عوائد مجزية'
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 16H44" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 16V44" stroke="currentColor" strokeWidth="2"/>
          <path d="M28 16V44" stroke="currentColor" strokeWidth="2"/>
          <circle cx="10" cy="10" r="3" fill="currentColor"/>
          <circle cx="22" cy="10" r="3" fill="currentColor"/>
          <circle cx="37" cy="10" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'تصاميم عصرية',
      description: 'أحدث التصاميم العصرية المبتكرة'
    },
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

    const items = document.querySelectorAll('.feature-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#2B2D4E' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full" style={{ background: '#C0521A' }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full" style={{ background: '#C0521A' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full"
            style={{ backgroundColor: '#C0521A', color: '#ffffff' }}
          >
            ليه فينيكس ؟
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
            نبني المستقبل بثقة
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
            نلتزم بأعلى معايير الجودة في كل مشروع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-item group"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '28px 20px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.4s ease'
              }}
            >
              <div 
                className="feature-icon mx-auto mb-5"
                style={{ 
                  width: '64px', 
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#C0521A',
                  borderRadius: '18px',
                  transition: 'transform 0.4s ease',
                  boxShadow: '0 8px 24px rgba(192, 82, 26, 0.3)'
                }}
              >
                <div style={{ width: '32px', height: '32px', color: '#ffffff' }}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3" style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                {feature.description}
              </p>

              <style>{`
                .feature-item {
                  opacity: 0;
                  transform: translateY(30px);
                }
                
                .feature-item.reveal {
                  animation: revealFeature 0.6s ease forwards;
                }
                
                @keyframes revealFeature {
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .feature-item:hover {
                  backgroundColor: rgba(255,255,255,0.12) !important;
                  transform: translateY(-8px) !important;
                }
                
                .feature-item:hover .feature-icon {
                  transform: scale(1.1) rotate(5deg);
                }
                
                .feature-icon svg {
                  stroke: #ffffff !important;
                  stroke-width: 2 !important;
                  fill: none;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;