import { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote: 'تجربة رائعة من البداية حتى تسلم المفاتيح. دقة في المواعيد وجودة تشطيب فاقت توقعاتي.',
      name: 'د. أحمد المنصور',
      role: 'مستثمر عقاري',
      initials: 'أ',
    },
    {
      quote: 'Phoenix هو الاختيار الأمثل لمن يبحث عن استثمار آمن ومربح. شفافية مطلقة في كل التعاملات.',
      name: 'م. سارة جلال',
      role: 'سيدة أعمال',
      initials: 'س',
    },
    {
      quote: 'تصاميمهم عصرية جداً وتناسب الذوق الرفيع. سعيد جداً باختياري لشقتي في مشروع فينيكس.',
      name: 'أ. خالد العتيبي',
      role: 'عميل سكني',
      initials: 'خ',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0A1220' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="section-badge mb-8" style={{ fontFamily: 'Cairo, sans-serif' }}>
            <span className="material-symbols-outlined text-xs" style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>format_quote</span>
            <span>آراء العملاء</span>
          </div>

          <h2
            className="font-black"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#F0EAD8',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            ثقة{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              شركائنا
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.2}s`,
              }}
            >
              <div
                className="p-8 h-full flex flex-col relative overflow-hidden"
                style={{
                  background: 'rgba(14, 24, 40, 0.6)',
                  border: '1px solid rgba(201, 168, 76, 0.08)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.25)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.08)';
                  e.currentTarget.style.background = 'rgba(14, 24, 40, 0.6)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                dir="rtl"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
                />

                {/* Large quote mark */}
                <div
                  className="absolute top-4 left-6 text-7xl leading-none select-none"
                  style={{
                    color: 'rgba(201, 168, 76, 0.06)',
                    fontFamily: 'Cinzel, serif',
                    lineHeight: 1,
                  }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-base"
                      style={{ color: '#C9A84C', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-base mb-8 flex-1 leading-relaxed"
                  style={{ color: 'rgba(240, 234, 216, 0.75)', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div
                  className="flex items-center gap-4 pt-6"
                  style={{ borderTop: '1px solid rgba(201, 168, 76, 0.08)' }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0 text-base font-bold"
                    style={{
                      background: 'rgba(201, 168, 76, 0.08)',
                      border: '1px solid rgba(201, 168, 76, 0.2)',
                      color: '#C9A84C',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm" style={{ color: '#F0EAD8', fontFamily: 'Cairo, sans-serif' }}>
                      {testimonial.name}
                    </h5>
                    <span className="text-xs" style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}>
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }}
      />
    </section>
  );
};

export default Testimonials;
