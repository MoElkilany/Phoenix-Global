import { useState, useEffect, useRef } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(4, 0.08);

  const testimonials = [
    { quote: 'تجربة رائعة من البداية حتى تسلم المفاتيح. دقة في المواعيد وجودة تشطيب فاقت توقعاتي.', name: 'د. أحمد المنصور', role: 'مستثمر عقاري', initials: 'أ' },
    { quote: 'Phoenix هو الاختيار الأمثل لمن يبحث عن استثمار آمن ومربح. شفافية مطلقة في كل التعاملات.', name: 'م. سارة جلال', role: 'سيدة أعمال', initials: 'س' },
    { quote: 'تصاميمهم عصرية جداً وتناسب الذوق الرفيع. سعيد جداً باختياري لشقتي في مشروع فينيكس.', name: 'أ. خالد العتيبي', role: 'عميل سكني', initials: 'خ' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--color-surface-subtle)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs filled" style={{ color: 'var(--color-terracotta-500)' }}>format_quote</span>
            <span>آراء العملاء</span>
          </div>

          <h2 className="font-black" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            ثقة <span className="text-gradient-terracotta">شركائنا</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group cursor-pointer" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.2}s` }}>
              <div className="p-8 h-full flex flex-col relative overflow-hidden card-elevated tilt-card" dir="rtl" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="absolute top-4 left-6 text-7xl leading-none select-none" style={{ color: 'var(--color-sand-200)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>"</div>

                <div className="tilt-glare" />

                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base filled" style={{ color: 'var(--color-bronze-500)' }}>star</span>
                  ))}
                </div>

                <p className="text-base mb-8 flex-1 leading-relaxed" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-arabic)', lineHeight: '2', opacity: 0.8 }}>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 text-base font-bold rounded-full"
                    style={{ background: 'var(--color-terracotta-100)', border: '1px solid var(--color-terracotta-200)', color: 'var(--color-terracotta-600)', fontFamily: 'var(--font-heading)' }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>{testimonial.name}</h5>
                    <span className="text-xs" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>{testimonial.role}</span>
                  </div>
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

export default Testimonials;