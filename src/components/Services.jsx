import { useEffect, useRef, useState } from 'react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6L6 22V42C6 48.627 11.373 54 18 54H46C52.627 54 58 48.627 58 42V22L32 6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M6 22H58" stroke="currentColor" strokeWidth="2" />
          <rect x="22" y="32" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'التطوير العقاري',
      description: 'نقدم حلولاً شاملة للتطوير العقاري من بحث السوق واختيار الموقع مروراً بالتخطيط والتصميم والتنفيذ وصولاً التسليم النهائي. نضمن أعلى معايير الجودة والاستدامة.',
      number: '01',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="22" r="12" stroke="currentColor" strokeWidth="2" />
          <path d="M16 50C16 41.163 23.163 34 32 34C40.837 34 48 41.163 48 50" stroke="currentColor" strokeWidth="2" />
          <path d="M26 22H32L38 28" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="50" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M24 58L40 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'الوساطة العقارية',
      description: 'نقدم خدمات وساطة عقارية عالية الجودة لمساعدة العملاء في شراء وبيع وتأجير العقارات بسهولة وشفافية، مع تحليل دقيق لاحتياجاتهم.',
      number: '02',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="2" />
          <path d="M8 24H56" stroke="currentColor" strokeWidth="2" />
          <path d="M24 8V56" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="34" cy="46" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M34 41V46L38 50" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'التصميم الداخلي',
      description: 'نقدم تصاميم داخلية مبتكرة تجمع بين الجمال والوظيفة. نحلل احتياجات العملاء لخلق مساحات تعكس شخصيتهم وتوفر أقصى درجات الراحة.',
      number: '03',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="52" height="52" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M6 18H58" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="44" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 50H26" stroke="currentColor" strokeWidth="1.5" />
          <path d="M38 50H50" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12" y="10" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="36" y="10" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: 'التشطيب والديكور',
      description: 'ننفذ أعمال التشطيب والديكور بأعلى مستويات الجودة باستخدام أفضل المواد وأحدث التقنيات، مع إشراف هندسي دقيق في جميع مراحل التنفيذ.',
      number: '04',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="44" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M10 28H54V52C54 54.2091 52.2091 56 50 56H14C11.7909 56 10 54.2091 10 52V28Z" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 36H26M38 36H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 44H34M30 44H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'إدارة العقارات',
      description: 'نقدم خدمات إدارة عقارية شاملة تهدف إلى الحفاظ على قيمة العقار وتعظيم العائد الاستثماري، تشمل إدارة التأجير والصيانة الدورية.',
      number: '05',
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
            }, index * 120);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-item');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="services" style={{ backgroundColor: '#0A1220' }}>
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div dir="rtl">
            <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
              <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>workspace_premium</span>
              <span>خدماتنا</span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#F0EAD8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              حلول عقارية{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                شاملة
              </span>
            </h2>
          </div>
          <div dir="rtl">
            <p className="text-lg leading-relaxed" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif', lineHeight: 1.9 }}>
              خبرة احترافية في جميع جوانب العقار — من التطوير والتصميم إلى الإدارة والاستثمار.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className="service-item group cursor-pointer relative"
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                className="h-full p-8 rounded-sm relative overflow-hidden"
                style={{
                  background: 'rgba(14, 24, 40, 0.6)',
                  border: '1px solid rgba(201, 168, 76, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.1)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top gold line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.0), transparent)',
                    transition: 'all 0.4s ease',
                  }}
                />

                {/* Service number */}
                <div
                  className="text-5xl font-black mb-6 leading-none"
                  style={{
                    color: 'rgba(201, 168, 76, 0.06)',
                    fontFamily: 'Cinzel, serif',
                    position: 'absolute',
                    top: '20px',
                    left: '24px',
                    fontSize: '4.5rem',
                  }}
                >
                  {service.number}
                </div>

                {/* Icon */}
                <div
                  className="mb-6 transition-transform duration-400 group-hover:scale-110"
                  style={{
                    width: '52px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(201, 168, 76, 0.06)',
                    borderRadius: '4px',
                    border: '1px solid rgba(201, 168, 76, 0.15)',
                    color: '#C9A84C',
                  }}
                >
                  <div style={{ width: '28px', height: '28px' }}>{service.icon}</div>
                </div>

                {/* Content */}
                <div dir="rtl">
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#7A8898', lineHeight: '1.9', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  dir="rtl"
                >
                  <span style={{ color: '#C9A84C', fontSize: '12px', fontFamily: 'Cairo, sans-serif', letterSpacing: '1px' }}>
                    اقرأ المزيد
                  </span>
                  <span className="material-symbols-outlined text-sm" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    arrow_back
                  </span>
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

export default Services;
