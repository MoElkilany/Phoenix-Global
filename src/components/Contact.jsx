import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const phones = [
    { label: 'الخط الأول', number: '01119031117' },
    { label: 'الخط الثاني', number: '01116566604' },
    { label: 'خط أرضي', number: '0220322217' },
  ];

  const handleCall = (number) => {
    window.open(`tel:+20${number}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@phonixglobal-eg.com', '_self');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps?q=30.128553,31.644960', '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const ContactCard = ({ onClick, icon, label, value, subValue, delay }) => (
    <button
      onClick={onClick}
      className="group w-full text-center relative overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      <div
        className="p-8 relative"
        style={{
          background: 'rgba(14, 24, 40, 0.6)',
          border: '1px solid rgba(201, 168, 76, 0.08)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)';
          e.currentTarget.style.background = 'rgba(14, 24, 40, 0.9)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2), 0 0 30px rgba(201,168,76,0.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.08)';
          e.currentTarget.style.background = 'rgba(14, 24, 40, 0.6)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
        />

        <div
          className="w-12 h-12 mx-auto mb-5 flex items-center justify-center transition-all duration-400 group-hover:scale-110"
          style={{
            background: 'rgba(201, 168, 76, 0.06)',
            border: '1px solid rgba(201, 168, 76, 0.2)',
          }}
        >
          <span className="material-symbols-outlined text-base" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
            {icon}
          </span>
        </div>

        {label && (
          <p className="text-xs mb-2 tracking-widest" style={{ color: 'rgba(201, 168, 76, 0.6)', fontFamily: 'Cairo, sans-serif', letterSpacing: '1px' }}>
            {label}
          </p>
        )}
        <p className="text-base font-bold" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }} dir="rtl">
          {value}
        </p>
        {subValue && (
          <p className="text-xs mt-2" style={{ color: '#C9A84C', fontFamily: 'Cairo, sans-serif' }}>{subValue}</p>
        )}
      </div>
    </button>
  );

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#060B14' }}
      id="contact"
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }}
      />
      <div
        className="absolute -top-40 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 0, 'wght' 300" }}>call</span>
            <span>تواصل معنا</span>
          </div>

          <h2
            className="font-black mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            نحن هنا{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              لمساعدتك
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
            فريقنا متاح للرد على استفساراتك على مدار الساعة
          </p>
        </div>

        {/* Phone cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {phones.map((phone, index) => (
            <ContactCard
              key={index}
              onClick={() => handleCall(phone.number)}
              icon="call"
              label={phone.label}
              value={`+20${phone.number}`}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* Email & Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <ContactCard
            onClick={handleEmail}
            icon="mail"
            label="البريد الإلكتروني"
            value="info@phonixglobal-eg.com"
            delay={0.5}
          />
          <ContactCard
            onClick={handleLocation}
            icon="location_on"
            label="العنوان"
            value="78 شارع الفرعي — الشروق — القاهرة"
            subValue="انقر للعرض على الخريطة"
            delay={0.6}
          />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
      />
    </section>
  );
};

export default Contact;
