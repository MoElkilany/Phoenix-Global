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
    <section className="py-24 bg-surface-container-high relative" id="investment">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-2xl p-12 shadow-sm border-r-8 border-secondary grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-noto-serif text-primary mb-6">استثمر بذكاء، احصد بعناية</h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              نقدم عوائد استثمارية تصل إلى 12% سنوياً من خلال مشاريعنا المختارة بعناية في أكثر المناطق نمواً. فريقنا الاستشاري يساعدك في بناء محفظة عقارية قوية ومستقرة.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-secondary-fixed p-2 rounded">
                    <span className="material-symbols-outlined text-secondary">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{benefit.title}</h4>
                    <p className="text-sm text-on-surface-variant">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              className="rounded-xl shadow-xl" 
              alt="professional person looking at a digital chart of real estate market growth on a large screen in a luxury office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIbIU9pqGAjOiJOwf--1-yrbLizmbqnFnizW62dXBPGQD8rZyL-R72vBWXLVzTlKXW-_nMue-QJH2Y50vRCp-IHR-Um1DQx9hkJVgwQiQflrosqJe8CwpEGuW23eNUc5C19XNuPIWnv9GqUSj5Atr0BX3b4liry1cIXlagMfeeJfzYSk2DPEDvVG7mp-Ooc7MSmrK81sdHTcw9ySW7tkHdlz-gRNML8DsB3M81a1IXo0DlxceEqgJdDOkBoMXudeyJwUss8Ny_ww8"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg">
              <div className="text-4xl font-black text-secondary">ROI</div>
              <div className="text-xl">عوائد مجزية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;