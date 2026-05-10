import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const ORIGIN_ICONS = ['domain', 'engineering'];
const ORIGIN_FLAGS = ['🇸🇦', '🇪🇬'];
const ORIGIN_SINCE = ['2013', '2018'];
const PILLAR_ICONS = ['precision_manufacturing', 'verified', 'handshake'];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const origins = (t('about.origins') || []).map((o, i) => ({
    ...o,
    icon: ORIGIN_ICONS[i],
    flag: ORIGIN_FLAGS[i],
    since: ORIGIN_SINCE[i],
  }));

  const pillars = (t('about.pillars') || []).map((title, i) => ({
    title,
    icon: PILLAR_ICONS[i],
  }));

  const arrowIcon = isRTL ? 'arrow_back' : 'arrow_forward';

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      id="about"
      style={{ backgroundColor: '#0D1526' }}
    >
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #E8845A 0%, transparent 70%)', transform: 'translate(30%, 40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
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
              info
            </span>
            <span className="text-sm font-semibold" style={{ color: '#C0501A', fontFamily: 'var(--font-current)' }}>
              {t('about.badge')}
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}
          >
            {t('about.headlineLine1')}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
            >
              {t('about.headlineLine2')}
            </span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)', lineHeight: 2 }}
          >
            {t('about.lead')}
          </p>
        </div>

        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240, 244, 250, 0.9)', fontFamily: 'var(--font-current)', lineHeight: 1.8 }}
          >
            {t('about.emergedFrom')}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {origins.map((origin, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
              }}
            >
              <div
                className="absolute top-0 right-0 left-0 h-1 rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #C0501A, #E8845A)' }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.15), rgba(192, 80, 26, 0.05))',
                    border: '1px solid rgba(192, 80, 26, 0.2)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                  >
                    {origin.icon}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}
                    >
                      {origin.nameAr}
                    </h3>
                    <span className="text-xl">{origin.flag}</span>
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)' }}
                  >
                    {origin.name} — {t('about.since')} {origin.since} — {origin.region}
                  </span>
                </div>
              </div>

              <p
                className="text-lg leading-loose mb-4"
                style={{ color: 'rgba(142, 155, 181, 0.9)', fontFamily: 'var(--font-current)', lineHeight: 2 }}
              >
                {origin.description}
              </p>
              {origin.additionalText && (
                <>
                  <div
                    className="w-16 h-0.5 rounded-full my-4"
                    style={{ background: 'linear-gradient(90deg, #C0501A, #E8845A)' }}
                  />
                  <p
                    className="text-lg leading-loose mb-4"
                    style={{ color: 'rgba(142, 155, 181, 0.9)', fontFamily: 'var(--font-current)', lineHeight: 2 }}
                  >
                    {origin.additionalText}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <div
          className={`text-center mb-16 transition-all duration-1000 delay-[400ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed"
              style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)', lineHeight: 1.8 }}
            >
              {t('about.promiseLine1')}
              <br />
              {t('about.promiseLine2')}
            </p>

            <div
              className="w-16 h-px mx-auto my-8"
              style={{ background: 'linear-gradient(90deg, transparent, #C0501A, transparent)' }}
            />
          </div>
        </div>

        <div
          className={`text-center mb-10 transition-all duration-1000 delay-[500ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)', lineHeight: 2 }}
          >
            {t('about.pillarsIntro')}
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-[600ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center group p-8 rounded-2xl transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.15), rgba(192, 80, 26, 0.05))',
                  border: '1px solid rgba(192, 80, 26, 0.2)',
                }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  {pillar.icon}
                </span>
              </div>
              <h4
                className="text-lg font-bold"
                style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)' }}
              >
                {pillar.title}
              </h4>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-[700ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="inline-block px-10 py-6 rounded-2xl"
            style={{
              background: 'rgba(192, 80, 26, 0.06)',
              border: '1px solid rgba(192, 80, 26, 0.15)',
            }}
          >
            <p
              className="text-xl md:text-2xl font-bold"
              style={{ color: '#F0F4FA', fontFamily: 'var(--font-current)', lineHeight: 1.8 }}
            >
              {t('about.goalLine1')}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
              >
                {t('about.goalLine2')}
              </span>
            </p>
          </div>

          <div className="mt-14 text-center">
            <p
              className="text-lg mb-6"
              style={{ color: '#8E9BB5', fontFamily: 'var(--font-current)', lineHeight: 2 }}
            >
              {t('about.trustNote')}
            </p>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); window.open('/ProfileCompany.pdf', '_blank'); }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #C0501A, #A54215)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-current)',
                boxShadow: '0 4px 20px rgba(192, 80, 26, 0.3)',
              }}
            >
              <span>{t('about.ctaExplore')}</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>
                {arrowIcon}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
