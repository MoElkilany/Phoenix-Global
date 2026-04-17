import { useState, useEffect, useRef } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(5, 0.1);

  const features = [
    { icon: 'verified_user', title: 'جودة متميزة', description: 'نلتزم بأعلى معايير الجودة في كل تفاصيل المشروع' },
    { icon: 'schedule', title: 'تسليم في الوقت', description: 'نلتزم بمواعيد التسليم المتفق عليها دون تأخير' },
    { icon: 'payments', title: 'أسعار تنافسية', description: 'أسعار خاصة ومناسبة لجميع الميزانيات' },
    { icon: 'security', title: 'استثمار آمن', description: 'حماية كاملة للاستثمارات مع عوائد مجزية ومضمونة' },
    { icon: 'architecture', title: 'تصاميم عصرية', description: 'أحدث التصاميم المعمارية المبتكرة والمميزة' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => setVisibleItems((prev) => [...prev, index]), index * 100);
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.why-item');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--color-surface-base)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>verified</span>
            <span>لماذا فينيكس؟</span>
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            نبني المستقبل <span className="text-gradient-terracotta">بثقة</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>
            نلتزم بأعلى معايير الجودة في كل مشروع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div key={index} data-index={index} className="why-item group cursor-pointer"
              style={{ opacity: visibleItems.includes(index) ? 1 : 0, transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s` }}>
              <div className="text-center p-6 md:p-8 rounded-[var(--radius-2xl)] h-full relative overflow-hidden card-elevated tilt-card" dir="rtl" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="tilt-glare" />
                <div className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)]"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--color-terracotta-400), transparent)' }} />

                <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-[var(--radius-xl)] transition-transform duration-[var(--duration-slow)] group-hover:scale-110"
                  style={{ background: 'var(--color-terracotta-50)', border: '1px solid var(--color-terracotta-200)' }}>
                  <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-terracotta-600)', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>{feature.icon}</span>
                </div>

                <h3 className="text-base font-bold mb-3" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{feature.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontFamily: 'var(--font-arabic)' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default WhyChooseUs;