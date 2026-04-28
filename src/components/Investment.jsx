import { useState } from 'react';

const Investment = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { value: '12%', label: 'العائد السنوي', icon: 'trending_up' },
    { value: '+150', label: 'مشروع مُسلم', icon: 'apartment' },
    { value: '98%', label: 'رضا المستثمرين', icon: 'emoji_events' },
    { value: '+10', label: 'سنوات خبرة', icon: 'calendar_today' },
  ];

  const benefits = [
    {
      icon: 'trending_up',
      title: 'نمو سنوي مستمر',
      description: 'زيادة في قيمة العقار مدعومة بالبنية التحتية المتطورة.',
    },
    {
      icon: 'key',
      title: 'حلول تمليك مرنة',
      description: 'خطط سداد ميسرة تتناسب مع أهدافك المالية.',
    },
    {
      icon: 'savings',
      title: 'حماية من التضخم',
      description: 'استثمار يحافظ على قيمته ويحقق عوائد حقيقية.',
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="investment"
      style={{
        background: 'linear-gradient(160deg, #0D1526 0%, #1B2A4A 50%, #0D1526 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 64, 0, 0.15) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(212, 64, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'investment-drift 20s linear infinite',
          }}
        />
      </div>

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #d44000 0%, transparent 70%)', transform: 'translate(30%, -40%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #d44000 0%, transparent 70%)', transform: 'translate(-30%, 40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(212, 64, 0, 0.1)', border: '1px solid rgba(212, 64, 0, 0.3)' }}
          >
            <span
              className="material-symbols-outlined text-gold text-lg"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
            >
              diamond
            </span>
            <span className="text-gold text-sm font-semibold tracking-wide" style={{ fontFamily: 'Cairo, sans-serif' }}>
              فرص استثمارية حصرية
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
          >
            استثمر بذكاء،{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #d44000, #E8845A, #d44000)' }}
            >
              احصد بعناية
            </span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 1.8 }}
          >
نقدم لك فرصاً استثمارية مميزة من خلال مشاريعنا المختارة بعناية في أكثر المناطق نمواً، مع دعم فريقنا الاستشاري لمساعدتك في بناء محفظة عقارية قوية ومستقرة.          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 text-center transition-all duration-500 cursor-pointer"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                animation: `investment-fade-up 0.6s ease forwards ${index * 0.1}s`,
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(212, 64, 0, 0.3)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(212, 64, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span
                className="material-symbols-outlined block mx-auto mb-3 text-2xl"
                style={{ color: '#d44000', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
              >
                {stat.icon}
              </span>
              <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: '#F0F4FA', fontFamily: 'Cinzel, serif' }}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden transition-all duration-500 group cursor-pointer"
              style={{
                animation: `investment-fade-up 0.6s ease forwards ${0.4 + index * 0.15}s`,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: hoveredCard === index ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${hoveredCard === index ? 'rgba(212, 64, 0, 0.3)' : 'rgba(255, 255, 255, 0.06)'}`,
                }}
              />

              <div
                className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                style={{
                  background: hoveredCard === index
                    ? 'linear-gradient(90deg, transparent, #d44000, transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(212, 64, 0, 0.2), transparent)',
                }}
              />

              <div className="relative p-8">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{
background: 'linear-gradient(135deg, rgba(212, 64, 0, 0.15), rgba(212, 64, 0, 0.05))',
                     border: '1px solid rgba(212, 64, 0, 0.2)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
style={{ color: '#d44000', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                  >
                    {benefit.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: '#8E9BB5', lineHeight: 1.8, fontFamily: 'Cairo, sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ animation: 'investment-fade-up 0.8s ease forwards 0.8s', opacity: 0 }}
        >
          <div
            className="absolute inset-0"
            style={{
background: 'linear-gradient(135deg, rgba(212, 64, 0, 0.08), rgba(212, 64, 0, 0.03))',
               backdropFilter: 'blur(10px)',
               border: '1px solid rgba(212, 64, 0, 0.15)',
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div>
              <h4 className="text-xl md:text-2xl font-bold" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                ابدأ رحلتك الاستثمارية
              </h4>
              <p className="text-sm" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
                تواصل معنا اليوم للحصول على استشارة مجانية
              </p>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #d44000, #A54215)',
                color: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(212, 64, 0, 0.3)',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              <span>تواصل معنا الآن</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>
                arrow_back
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes investment-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes investment-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Investment;
