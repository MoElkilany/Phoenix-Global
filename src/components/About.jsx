import { useState, useEffect, useRef } from 'react';

const About = () => {
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

  const origins = [
    {
      name: 'Building Stone',
      nameAr: 'بلدنج ستون',
      flag: '🇸🇦',
      since: '2013',
      region: 'السوق السعودي',
      description: 'أثبتت حضورها في السوق السعودي منذ عام 2013، وشاركت في تنفيذ أعمال داخل مشاريع كبرى، من بينها مشروعات في جامعة جازان، إلى جانب التعاون مع كيانات بحجم مجموعة بن لادن السعودية — أحد أكبر الأسماء في قطاع المقاولات بالمنطقة.',
      icon: 'domain',
    },
    {
      name: 'Matrix',
      nameAr: 'ماتريكس',
      flag: '🇪🇬',
      since: '2018',
      region: 'السوق المصري',
      description: 'عملت داخل السوق المصري جنبًا إلى جنب مع كبرى شركات المقاولات، مثل أجواء مصر للمقاولات، والنور للمقاولات، وديليلز للمقاولات، واسبيس للمقاولات، مما أكسبها خبرة واسعة في التعامل مع مختلف أنواع المشاريع والتحديات التنفيذية.',
      icon: 'engineering',
    },
  ];

  const pillars = [
    { title: 'تنفيذ دقيق', icon: 'precision_manufacturing' },
    { title: 'جودة لا تقبل التنازل', icon: 'verified' },
    { title: 'شراكات مبنية على الثقة', icon: 'handshake' },
  ];

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
            <span className="text-sm font-semibold" style={{ color: '#C0501A', fontFamily: 'Cairo, sans-serif' }}>
              من نحن
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
          >
            فينيكس جلوبال ليست بداية…
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
            >
              بل هي نتيجة.
            </span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
          >
            نتيجة سنوات من العمل الحقيقي على الأرض، وخلاصة خبرات تراكمت عبر شركتين صنعتا اسمًا وثقة في سوق المقاولات والتوريدات.
          </p>
        </div>

        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240, 244, 250, 0.9)', fontFamily: 'Cairo, sans-serif', lineHeight: 1.8 }}
          >
            انبثقت فينيكس جلوبال من كيانين قويين
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
                      style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
                    >
                      {origin.nameAr}
                    </h3>
                    <span className="text-xl">{origin.flag}</span>
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {origin.name} — منذ {origin.since} — {origin.region}
                  </span>
                </div>
              </div>

              <p
                className="text-lg leading-loose"
                style={{ color: 'rgba(142, 155, 181, 0.9)', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
              >
                {origin.description}
              </p>
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
              style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif', lineHeight: 1.8 }}
            >
              اليوم، لا نقدّم شركة جديدة…
              <br />
              بل نقدّم كيانًا وُلد وهو يمتلك بالفعل{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
              >
                خبرة السنين.
              </span>
            </p>

            <div
              className="w-16 h-px mx-auto my-8"
              style={{ background: 'linear-gradient(90deg, transparent, #C0501A, transparent)' }}
            />

            <p
              className="text-xl md:text-2xl font-semibold leading-relaxed"
              style={{ color: 'rgba(240, 244, 250, 0.85)', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
            >
              في فينيكس جلوبال، نحن لا نبيع وعودًا — نحن نبني على{' '}
              <span style={{ color: '#C0501A' }}>تاريخ</span>.
            </p>
            <p
              className="text-lg mt-3"
              style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
            >
              تاريخ من الالتزام، الجودة، والقدرة على التنفيذ تحت أصعب الظروف.
            </p>
          </div>
        </div>

        <div
          className={`text-center mb-10 transition-all duration-1000 delay-[500ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
          >
            نجمع بين قوة الخبرة الإقليمية في السوق السعودي، وعمق الفهم العملي للسوق المصري، لنقدّم خدمات قائمة على:
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
                style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}
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
              style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif', lineHeight: 1.8 }}
            >
              هدفنا ليس فقط تنفيذ المشاريع…
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}
              >
                بل أن نكون جزءًا من نجاحها.
              </span>
            </p>
          </div>

          <div className="mt-14 text-center">
            <p
              className="text-lg mb-6"
              style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif', lineHeight: 2 }}
            >
              لأن الثقة تُبنى على الأدلة… يمكنك الاطلاع على سجل أعمالنا ومشاريعنا السابقة.
            </p>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); window.open('/ProfileCompany.pdf', '_blank'); }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #C0501A, #A54215)',
                color: '#FFFFFF',
                fontFamily: 'Cairo, sans-serif',
                boxShadow: '0 4px 20px rgba(192, 80, 26, 0.3)',
              }}
            >
              <span>استكشف خبراتنا</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>
                arrow_back
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;