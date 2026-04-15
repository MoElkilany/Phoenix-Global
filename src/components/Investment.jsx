const Investment = () => {
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
  ];

  return (
    <section className="py-24 relative section-spacing" style={{ backgroundColor: '#111118' }} id="investment">
      <div className="content-container">
        <div className="glass-card p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ backgroundColor: '#d4a849', color: '#051125' }}>
              فرص استثمارية
            </span>
            <h2 className="text-4xl font-bold mb-6 font-cinzel" style={{ color: '#051125' }}>استثمر بذكاء، احصد بعناية</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#64748b' }}>
              نقدم عوائد استثمارية تصل إلى 12% سنوياً من خلال مشاريعنا المختارة بعناية في أكثر المناطق نمواً. فريقنا الاستشاري يساعدك في بناء محفظة عقارية قوية ومستقرة.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#d4a849' }}>
                    <span className="material-symbols-outlined" style={{ color: '#051125' }}>{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: '#051125' }}>{benefit.title}</h4>
                    <p className="text-sm" style={{ color: '#64748b' }}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              className="rounded-2xl shadow-2xl" 
              alt="Investment growth chart"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
            />
            <div className="absolute -bottom-6 -right-6 p-6 rounded-xl" style={{ backgroundColor: '#051125' }}>
              <div className="text-4xl font-bold text-gold font-cinzel">ROI</div>
              <div className="text-white">عوائد مجزية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;