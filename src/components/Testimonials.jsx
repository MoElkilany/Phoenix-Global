const Testimonials = () => {
  const testimonials = [
    {
      quote: 'تجربة رائعة من البداية حتى تسلم المفاتيح. دقة في المواعيد وجودة تشطيب فاقت توقعاتي.',
      name: 'د. أحمد المنصور',
      role: 'مستثمر عقاري',
    },
    {
      quote: 'Phoenix is the ideal choice لمن يبحث عن استثمار آمن ومربح. شفافية مطلقة في كل التعاملات.',
      name: 'م. سارة جلال',
      role: 'سيدة أعمال',
    },
    {
      quote: 'تصاميمهم عصرية جداً وتناسب الذوق الرفيع. I am very happy with purchasing my apartment in Phoenix project.',
      name: 'أ. خالد العتيبي',
      role: 'عميل سكني',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0D1526' }}>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(-30%, 40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              format_quote
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>آراء العملاء</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
            ثقة{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              شركائنا
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-500 cursor-pointer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-lg"
                    style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 500" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="text-base mb-8 leading-relaxed" style={{ color: 'rgba(240, 244, 250, 0.8)', fontFamily: 'Cairo, sans-serif', lineHeight: 1.9 }}>
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.2), rgba(192, 80, 26, 0.05))',
                     color: '#C0501A',
                    fontFamily: 'Cinzel, serif',
                  }}
                >
                  {testimonial.name.charAt(2)}
                </div>
                <div>
<h5 className="font-bold" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>{testimonial.name}</h5>
                   <span className="text-xs" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>{testimonial.role}</span>
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
