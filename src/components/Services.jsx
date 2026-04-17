import { useState, useEffect, useRef } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(6, 0.12);

  const services = [
    {
      icon: 'apartment',
      title: 'التطوير العقاري',
      description: 'نقدم حلولاً شاملة للتطوير العقاري من بحث السوق واختيار الموقع مروراً بالتخطيط والتصميم والتنفيذ وصولاً التسليم النهائي. نضمن أعلى معايير الجودة والاستدامة.',
      number: '01',
    },
    { icon: 'handshake', title: 'الوساطة العقارية', description: 'نقدم خدمات وساطة عقارية عالية الجودة لمساعدة العملاء في شراء وبيع وتأجير العقارات بسهولة وشفافية، مع تحليل دقيق لاحتياجاتهم.', number: '02' },
    { icon: 'design_services', title: 'التصميم الداخلي', description: 'نقدم تصاميم داخلية مبتكرة تجمع بين الجمال والوظيفة. نحلل احتياجات العملاء لخلق مساحات تعكس شخصيتهم وتوفر أقصى درجات الراحة.', number: '03' },
    { icon: 'palette', title: 'التشطيب والديكور', description: 'ننفذ أعمال التشطيب والديكور بأعلى مستويات الجودة باستخدام أفضل المواد وأحدث التقنيات، مع إشراف هندسي دقيق في جميع مراحل التنفيذ.', number: '04' },
    { icon: 'admin_panel_settings', title: 'إدارة العقارات', description: 'نقدم خدمات إدارة عقارية شاملة تهدف إلى الحفاظ على قيمة العقار وتعظيم العائد الاستثماري، تشمل إدارة التأجير والصيانة الدورية.', number: '05' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => setVisibleItems((prev) => [...prev, index]), index * 120);
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-item');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="services" style={{ background: 'var(--color-surface-subtle)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div dir="rtl">
            <div className="section-badge mb-8">
              <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>workspace_premium</span>
              <span>خدماتنا</span>
            </div>
            <h2 className="font-black leading-tight mb-6" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
              حلول عقارية <span className="text-gradient-terracotta">شاملة</span>
            </h2>
          </div>
          <div dir="rtl">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)', lineHeight: '1.9' }}>
              خبرة احترافية في جميع جوانب العقار — من التطوير والتصميم إلى الإدارة والاستثمار.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} data-index={index} className="service-item group cursor-pointer"
              style={{ opacity: visibleItems.includes(index) ? 1 : 0, transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12 + 0.1}s` }}>
              <div className="card-elevated h-full p-8 relative overflow-hidden tilt-card" dir="rtl" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="tilt-glare" />
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)]"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--color-terracotta-400), transparent)' }} />

                <div className="text-6xl font-black leading-none absolute top-5 left-6 select-none" style={{ color: 'var(--color-sand-200)', fontFamily: 'var(--font-display)', fontSize: '4.5rem' }}>
                  {service.number}
                </div>

                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-[var(--radius-xl)] transition-transform duration-[var(--duration-slow)] group-hover:scale-110"
                  style={{ background: 'var(--color-terracotta-50)', border: '1px solid var(--color-terracotta-200)', color: 'var(--color-terracotta-600)' }}>
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 transition-colors duration-[var(--duration-normal)] group-hover:text-[var(--color-terracotta-600)]"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.9', fontFamily: 'var(--font-arabic)' }}>
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-[var(--duration-normal)] translate-x-2 group-hover:translate-x-0" dir="rtl">
                  <span style={{ color: 'var(--color-terracotta-600)', fontSize: '12px', fontFamily: 'var(--font-arabic)', letterSpacing: '1px' }}>اقرأ المزيد</span>
                  <span className="material-symbols-outlined text-sm" style={{ color: 'var(--color-terracotta-600)' }}>arrow_back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default Services;