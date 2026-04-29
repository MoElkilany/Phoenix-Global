import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: 'dual_screen',
      title: 'خبرة مزدوجة قوية',
      description: 'ناتجون عن كيانين لهما سجل أعمال في السوقين السعودي والمصري، بخبرة تمتد لأكثر من عقد.',
    },
    {
      icon: 'verified',
      title: 'سجل مشاريع موثوق',
      description: 'مشاركات فعلية في مشاريع كبرى والتعاون مع شركات رائدة، مما يعكس قدرتنا على التنفيذ في بيئات مختلفة وبمعايير عالية.',
    },
    {
      icon: 'insights',
      title: 'فهم عميق للسوق',
      description: 'نجمع بين الخبرة الإقليمية في السعودية والمعرفة العملية بتفاصيل السوق المصري.',
    },
    {
      icon: 'precision_manufacturing',
      title: 'تنفيذ يعتمد عليه',
      description: 'نركز على الدقة، الالتزام، وتسليم المشاريع بنفس الجودة المتفق عليها — بدون تنازلات.',
    },
    {
      icon: 'handshake',
      title: 'شراكة طويلة المدى',
      description: 'لا ننفذ فقط… بل نبني علاقات قائمة على الثقة والاستمرارية.',
    },
    {
      icon: 'hub',
      title: 'حلول متكاملة من البداية للنهاية',
      description: 'نقدّم منظومة عمل متكاملة تشمل التخطيط، التنفيذ، والإشراف، لضمان تجربة سلسة ونتائج دقيقة دون الحاجة لتعدد الأطراف أو تعقيد الإجراءات.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      id="why-us"
      style={{ backgroundColor: '#0D1526' }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(30%, -40%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #E8845A 0%, transparent 70%)', transform: 'translate(-30%, 40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
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
              verified
            </span>
            <span className="text-sm font-semibold" style={{ color: '#C0501A', fontFamily: 'Cairo, sans-serif' }}>
              لماذا فينيكس؟
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
          >
            لأننا لا نبدأ من الصفر…
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
            >
              بل ننطلق من خبرة حقيقية.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${index * 100 + 200}ms`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.15), rgba(192, 80, 26, 0.05))',
                  border: '1px solid rgba(192, 80, 26, 0.2)',
                }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: '#C0501A', fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  {feature.icon}
                </span>
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;