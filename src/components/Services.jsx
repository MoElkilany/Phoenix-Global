import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const SERVICE_ICONS = [
  (
    <svg key="dev" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 6L6 22V42C6 48.627 11.373 54 18 54H46C52.627 54 58 48.627 58 42V22L32 6Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 22H58" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22" y="32" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="26" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg key="brokerage" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 50C16 41.163 23.163 34 32 34C40.837 34 48 41.163 48 50" stroke="currentColor" strokeWidth="2.5" />
      <path d="M26 22H32L38 28" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="50" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 58L40 58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="interior" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="48" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 24H56" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 8V56" stroke="currentColor" strokeWidth="2.5" />
      <rect x="14" y="14" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="46" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M34 41V46L38 50" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg key="finishing" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 18H58" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="38" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="38" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M14 50H26" stroke="currentColor" strokeWidth="2" />
      <path d="M38 50H50" stroke="currentColor" strokeWidth="2" />
      <rect x="12" y="10" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="36" y="10" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg key="management" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="44" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 28H54V52C54 54.2091 52.2091 56 50 56H14C11.7909 56 10 54.2091 10 52V28Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 28H54" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M18 36H26M38 36H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 44H34M30 44H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
];

const Services = () => {
  const sectionRef = useRef(null);
  const { t, isRTL } = useLanguage();

  const services = (t('services.items') || []).map((item, i) => ({
    ...item,
    icon: SERVICE_ICONS[i],
  }));

  const arrowIcon = isRTL ? 'arrow_back' : 'arrow_forward';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="services" style={{ backgroundColor: '#132036' }}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              workspace_premium
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'var(--font-current)' }}>{t('services.badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}>
            {t('services.titlePrefix')}{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              {t('services.titleHighlight')}
            </span>
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)' }}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group cursor-pointer"
              style={{
                animationDelay: `${index * 0.15}s`,
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <div
                className="flex-shrink-0"
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.2), rgba(192, 80, 26, 0.05))',
                  borderRadius: '16px',
                  border: '1px solid rgba(192, 80, 26, 0.2)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <div style={{ width: '32px', height: '32px', color: '#C0501A' }}>{service.icon}</div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}>
                  {service.title}
                </h3>
                <p className="text-xl leading-relaxed" style={{ color: '#8E9BB5', lineHeight: '2', fontFamily: 'var(--font-current)' }}>
                  {service.description}
                </p>
              </div>

              <span
                className="material-symbols-outlined text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: '#C0501A', fontVariationSettings: "'FILL' 0, 'wght' 400" }}
              >
                {arrowIcon}
              </span>

              <style>{`
                .service-card { opacity: 0; transform: translateX(-20px); }
                .service-card.reveal { animation: revealSlide 0.6s ease forwards; }
                @keyframes revealSlide { to { opacity: 1; transform: translateX(0); } }
                .service-card:hover { background-color: rgba(255,255,255,0.06) !important; border-color: rgba(192, 80, 26, 0.2) !important; }
                .service-card:hover .flex-shrink-0 { transform: scale(1.05); }
                .service-icon svg { stroke: #C0501A !important; }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
