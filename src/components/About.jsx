const About = () => {
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

  return (
    <section className="py-24 relative overflow-hidden" id="about" style={{ backgroundColor: '#0D1526' }}>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(30%, -40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              info
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>من نحن</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
          >
            رؤية تتجاوز{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              المباني
            </span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 1.9 }}>
            في فينيكس جلوبال، نؤمن أن العقار ليس مجرد جدران، بل مساحة لصنع الذكريات وفرصة ذهبية لتنمية الثروة.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full h-72 object-cover rounded-2xl mt-12"
                alt="Phoenix Development project"
                src="/SectionTwo-1.png"
              />
              <img
                className="w-full h-72 object-cover rounded-2xl"
                alt="Phoenix interior design"
                src="/SectionTwo-2.png"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10"
              style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
            />
          </div>

          <div>
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(192, 80, 26, 0.15)' }}
                  >
                    <span className="material-symbols-outlined text-gold text-lg" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>
                      check_circle
                    </span>
                  </span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-black" style={{ color: '#C0501A', fontFamily: 'Cinzel, serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm mt-1" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
