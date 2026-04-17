import { useState, useEffect, useRef } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const Investment = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(6, 0.12);

  const stats = [
    { value: '+150', label: 'مشروع مُسلم', icon: 'apartment', desc: 'في مصر والعالم' },
    { value: '98%', label: 'رضا المستثمرين', icon: 'emoji_events', desc: 'ثقة تامة' },
    { value: '+10', label: 'سنوات خبرة', icon: 'calendar_today', desc: 'في السوق' },
  ];

  const benefits = [
    { icon: 'trending_up', title: 'نمو سنوي مستمر', description: 'زيادة في قيمة العقار مدعومة بالبنية التحتية المتطورة والطلب المتصاعد.' },
    { icon: 'key', title: 'حلول تمليك مرنة', description: 'خطط سداد ميسرة تتناسب مع أهدافك المالية وتناسب جميع الميزانيات.' },
    { icon: 'savings', title: 'حماية من التضخم', description: 'استثمار يحافظ على قيمته ويحقق عوائد حقيقية في السوق المصري.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" id="investment" style={{ background: 'var(--color-surface-base)' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(201, 97, 58, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 97, 58, 1) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
      <div className="absolute top-0 left-0 w-full h-px section-divider" />

      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>diamond</span>
            <span>فرص استثمارية حصرية</span>
          </div>

          <h2 className="font-black mb-6 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            استثمر بذكاء، <span className="text-gradient-terracotta">احصد بعناية</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)', lineHeight: '1.9' }}>
نوفر فرص استثمارية مدروسة في مشاريع متميزة داخل أكثر المناطق نمواً، لتحقيق قيمة مستدامة على المدى الطويل.          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-pointer" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.2}s` }}>
              <div className="text-center p-8 rounded-[var(--radius-2xl)] relative overflow-hidden card-elevated tilt-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="tilt-glare" />
                <div className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)]" style={{ background: 'linear-gradient(90deg, transparent, var(--color-terracotta-400), transparent)' }} />

                <span className="material-symbols-outlined text-xl mb-4 block" style={{ color: 'var(--color-terracotta-500)', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-black mb-1 text-gradient-terracotta" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-arabic)' }}>{stat.label}</div>
                <div className="text-xs" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group cursor-pointer" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.5 + index * 0.15}s` }}>
              <div className="p-8 rounded-[var(--radius-2xl)] h-full card-elevated tilt-card" dir="rtl" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-xl)] mb-6 transition-transform duration-[var(--duration-slow)] group-hover:scale-110"
                  style={{ background: 'var(--color-terracotta-50)', border: '1px solid var(--color-terracotta-200)' }}>
                  <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-terracotta-600)', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>{benefit.icon}</span>
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{benefit.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.9', fontFamily: 'var(--font-arabic)' }}>{benefit.description}</p>
                <div className="tilt-glare" />
              </div>
            </div>
          ))}
        </div>

        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.9s' }}>
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] card-elevated">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10" dir="rtl">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-[var(--radius-xl)]" style={{ background: 'var(--color-terracotta-50)', border: '1px solid var(--color-terracotta-200)' }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: 'var(--color-terracotta-600)', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>trending_up</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>ابدأ رحلتك الاستثمارية</h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>تواصل معنا اليوم للحصول على استشارة مجانية</p>
                </div>
              </div>

              <a href="#contact" className="btn-terracotta whitespace-nowrap">
                <span>تواصل معنا الآن</span>
                <span className="material-symbols-outlined text-base">arrow_back</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default Investment;