import { useState, useEffect, useRef } from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { handleMouseMove, handleMouseLeave } = useCardTilt(5, 0.1);

  const phones = [
    { label: 'الخط الأول', number: '01119031117' },
    { label: 'الخط الثاني', number: '01116566604' },
    { label: 'خط أرضي', number: '0220322217' },
  ];

  const handleCall = (number) => window.open(`tel:+20${number}`, '_self');
  const handleEmail = () => window.open('mailto:info@phonixglobal-eg.com', '_self');
  const handleLocation = () => window.open('https://www.google.com/maps?q=30.128553,31.644960', '_blank');

  const ContactCard = ({ onClick, icon, label, value, subValue, delay }) => (
    <button onClick={onClick} className="group w-full text-center relative overflow-hidden cursor-pointer"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s` }}>
      <div className="p-8 relative card-elevated tilt-card">
        <div className="tilt-glare" />
        <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)]"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-terracotta-400), transparent)' }} />

        <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center transition-transform duration-[var(--duration-slow)] group-hover:scale-110"
          style={{ background: 'var(--color-terracotta-50)', border: '1px solid var(--color-terracotta-200)' }}>
          <span className="material-symbols-outlined text-base" style={{ color: 'var(--color-terracotta-600)' }}>{icon}</span>
        </div>

        {label && (<p className="text-xs mb-2 tracking-widest" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-arabic)', letterSpacing: '1px' }}>{label}</p>)}
        <p className="text-base font-bold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }} dir="rtl">{value}</p>
        {subValue && (<p className="text-xs mt-2" style={{ color: 'var(--color-terracotta-600)', fontFamily: 'var(--font-arabic)' }}>{subValue}</p>)}
      </div>
    </button>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="contact" style={{ background: 'var(--color-surface-base)' }}>
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-[var(--duration-cinematic)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-badge mb-8">
            <span className="material-symbols-outlined text-xs" style={{ color: 'var(--color-terracotta-500)' }}>call</span>
            <span>تواصل معنا</span>
          </div>

          <h2 className="font-black mb-4" style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)', color: 'var(--color-charcoal-900)' }}>
            نحن هنا <span className="text-gradient-terracotta">لمساعدتك</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}>
            فريقنا متاح للرد على استفساراتك على مدار الساعة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {phones.map((phone, index) => (
            <ContactCard key={index} onClick={() => handleCall(phone.number)} icon="call" label={phone.label} value={`+20${phone.number}`} delay={0.2 + index * 0.1} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ContactCard onClick={handleEmail} icon="mail" label="البريد الإلكتروني" value="info@phonixglobal-eg.com" delay={0.5} />
          <ContactCard onClick={handleLocation} icon="location_on" label="العنوان" value="78 شارع الفرعي — الشروق — القاهرة" subValue="انقر للعرض على الخريطة" delay={0.6} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px section-divider" />
    </section>
  );
};

export default Contact;