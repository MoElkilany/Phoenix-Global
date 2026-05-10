import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const CEOMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t, dir } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ceo-message"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      dir={dir}
      style={{
        background: 'linear-gradient(160deg, #0A1220 0%, #132036 50%, #0A1220 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(192, 80, 26, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(192, 80, 26, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'ceo-drift 20s linear infinite',
          }}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(-40%, -40%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(40%, 50%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #E8845A 0%, transparent 60%)', transform: 'translate(-50%, -50%)' }}
      />

      <div
        className="absolute top-12 right-12 w-px h-32 opacity-10"
        style={{ background: 'linear-gradient(180deg, #C0501A, transparent)' }}
      />
      <div
        className="absolute bottom-12 left-12 w-px h-32 opacity-10"
        style={{ background: 'linear-gradient(180deg, transparent, #C0501A)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span
              className="material-symbols-outlined text-sm"
              style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
            >
              format_quote
            </span>
            <span className="text-sm font-semibold" style={{ color: '#C0501A', fontFamily: 'var(--font-current)' }}>
              {t('ceo.badge')}
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}
          >
            {t('ceo.titlePrefix')}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
            >
              {t('ceo.titleHighlight')}
            </span>
          </h2>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="material-symbols-outlined absolute -top-6 right-8 md:right-16 text-[120px] md:text-[180px] select-none leading-none"
            style={{
              color: 'rgba(192, 80, 26, 0.06)',
              fontVariationSettings: "'FILL' 1, 'wght' 300",
            }}
          >
            format_quote
          </span>

          <div
            className="relative rounded-3xl p-10 md:p-16"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
            }}
          >
            <div
              className="absolute top-0 right-8 md:right-16 w-20 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #C0501A, #E8845A)' }}
            />

            <div className="relative z-10 mb-8" style={{ borderTop: 'none' }}>
              <p
                className="text-xl md:text-2xl font-bold mb-6 relative z-10"
                style={{
                  color: '#F0F4FA',
                  fontFamily: 'var(--font-current)',
                  lineHeight: 2,
                }}
              >
                {t('ceo.brandName')}{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
                >
                  {t('ceo.brandHighlight')}
                </span>
                {' '}{t('ceo.brandSuffix')}
              </p>

              <p
                className="text-lg md:text-xl mb-6 relative z-10"
                style={{
                  color: 'rgba(240, 244, 250, 0.85)',
                  fontFamily: 'var(--font-current)',
                  lineHeight: 2,
                }}
              >
                {t('ceo.paragraph2')}
              </p>

              <p
                className="text-lg md:text-xl mb-6 relative z-10"
                style={{
                  color: 'rgba(240, 244, 250, 0.85)',
                  fontFamily: 'var(--font-current)',
                  lineHeight: 2,
                }}
              >
                {t('ceo.paragraph3')}
              </p>

              <p
                className="text-lg md:text-xl mb-6 relative z-10"
                style={{
                  color: 'rgba(240, 244, 250, 0.85)',
                  fontFamily: 'var(--font-current)',
                  lineHeight: 2,
                }}
              >
                {t('ceo.paragraph4Prefix')}{' '}
                <span style={{ color: '#C0501A', fontWeight: 600 }}>{t('ceo.paragraph4Highlight1')}</span>
                {t('ceo.paragraph4Middle')}{' '}
                <span style={{ color: '#C0501A', fontWeight: 600 }}>{t('ceo.paragraph4Highlight2')}</span>
                {t('ceo.paragraph4Suffix')}
              </p>
            </div>

            <div
              className="relative z-10 p-6 rounded-xl"
              style={{
                background: 'rgba(192, 80, 26, 0.06)',
                border: '1px solid rgba(192, 80, 26, 0.15)',
              }}
            >
              <p
                className="text-lg md:text-xl font-semibold"
                style={{
                  color: '#F0F4FA',
                  fontFamily: 'var(--font-current)',
                  lineHeight: 2,
                }}
              >
                {t('ceo.vision')}
              </p>
            </div>

            <div
              className="flex items-center gap-5 pt-8"
              style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
            >
              <img
                src="/src/assets/Ceo-Image.jpeg"
                alt={t('ceo.ceoAlt')}
                className="w-16 h-16 rounded-2xl object-cover"
                style={{
                  boxShadow: '0 4px 20px rgba(192, 80, 26, 0.3)',
                }}
              />

              <div className="flex-1">
                <h5
                  className="text-xl font-bold mb-1"
                  style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}
                >
                  {t('ceo.ceoName')}
                </h5>
                <span
                  className="text-sm"
                  style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)' }}
                >
                  {t('ceo.ceoTitle')}
                </span>
              </div>

              <div
                className="hidden md:flex items-center gap-2 opacity-30"
                style={{ color: '#C0501A' }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}
                >
                  diamond
                </span>
              </div>
            </div>
          </div>

          <span
            className="material-symbols-outlined absolute -bottom-6 left-8 md:left-16 text-[120px] md:text-[180px] select-none leading-none rotate-180"
            style={{
              color: 'rgba(192, 80, 26, 0.06)',
              fontVariationSettings: "'FILL' 1, 'wght' 300",
            }}
          >
            format_quote
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ceo-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default CEOMessage;
