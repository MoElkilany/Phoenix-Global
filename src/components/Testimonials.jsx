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
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-noto-serif text-center text-primary mb-16">ثقة شركائنا وعملائنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-surface-container-low rounded-xl">
              <div className="flex text-secondary mb-4" aria-label="التقييم: 5 نجوم">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" data-weight="fill">star</span>
                ))}
              </div>
              <p className="text-on-surface-variant mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-300" aria-hidden="true"></div>
                <div>
                  <h5 className="font-bold text-primary">{testimonial.name}</h5>
                  <span className="text-xs text-on-surface-variant">{testimonial.role}</span>
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