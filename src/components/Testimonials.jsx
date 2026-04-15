const Testimonials = () => {
  const testimonials = [
    {
      quote: 'تجربة رائعة من البداية حتى تسلم المفاتيح. دقة في المواعيد وجودة تشطيب فاقت توقعاتي.',
      name: 'د. أحمد المنصور',
      role: 'مستثمر عقاري',
    },
    {
      quote: 'فينيكس هي الخيار المثالي لمن يبحث عن استثمار آمن ومربح. شفافية مطلقة في كل التعاملات.',
      name: 'م. سارة جلال',
      role: 'سيدة أعمال',
    },
    {
      quote: 'تصاميمهم عصرية جداً وتناسب الذوق الرفيع. سعيد جداً بشرائي لشقتي في مشروع فينيكس.',
      name: 'أ. خالد العتيبي',
      role: 'عميل سكني',
    },
  ];

  return (
    <section className="py-24 lg:py-32 section-spacing" style={{ backgroundColor: '#030712' }}>
      <div className="content-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ backgroundColor: '#d4a849', color: '#051125' }}>
            آراء العملاء
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-cinzel" style={{ color: '#051125' }}>ثقة شركائنا وعملائنا</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl luxury-card cursor-pointer" style={{ backgroundColor: '#111118', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <div className="flex mb-4" style={{ color: '#d4a849' }} aria-label="التقييم: 5 نجوم">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" data-weight="fill">star</span>
                ))}
              </div>
              <p className="mb-6 italic leading-relaxed" style={{ color: '#475569' }}>"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#d4a849' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold" style={{ color: '#051125' }}>{testimonial.name}</h5>
                  <span className="text-xs" style={{ color: '#64748b' }}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;