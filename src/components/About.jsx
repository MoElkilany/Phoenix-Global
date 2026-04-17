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
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="about" style={{ background: 'var(--color-surface-base)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>diamond</span>
            <span>من نحن</span>
          </div>

          <h2 className="font-black mb-6 leading-tight" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            رؤية تتجاوز <span className="text-gradient-terracotta">المباني</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)', lineHeight: 'var(--leading-relaxed)' }}>
            في فينيكس جلوبال، نؤمن أن العقار ليس مجرد جدران، بل مساحة لصنع الذكريات وفرصة ذهبية لتنمية الثروة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`relative transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '250ms' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="mt-16 overflow-hidden rounded-[var(--radius-2xl)] img-reveal">
                <img className="w-full h-80 object-cover" alt="Phoenix project" src="/SectionTwo-1.png" />
              </div>
              <div className="overflow-hidden rounded-[var(--radius-2xl)] img-reveal">
                <img className="w-full h-80 object-cover" alt="Phoenix interior" src="/SectionTwo-2.png" />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} dir="rtl" style={{ transitionDelay: '400ms' }}>
            <ul className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-arabic)' }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-[var(--duration-normal)] group-hover:scale-110"
                    style={{ background: 'var(--color-terracotta-100)', border: '1px solid var(--color-terracotta-300)' }}>
                    <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-600)' }}>check</span>
                  </div>
                  <span className="text-base leading-relaxed" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10" style={{ height: '1px', background: 'linear-gradient(90deg, var(--color-border-default), transparent)' }} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-2xl md:text-3xl font-black mb-1 transition-transform duration-[var(--duration-normal)] group-hover:scale-105 text-gradient-terracotta" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default About;