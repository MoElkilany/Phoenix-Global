import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  
  const stats = [
    { number: '500+', label: 'وحدة سكنية' },
    { number: '12', label: 'مشروع عملاق' },
  ];

  const features = [
    'أكثر من 15 عاماً من الخبرة في السوق',
    'التزام كامل بمواعيد التسليم',
    'أعلى معايير الجودة الدولية في البناء',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-spacing"
      style={{ backgroundColor: '#030712' }} 
      id="about"
    >
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <img 
                className="w-full h-72 object-cover rounded-2xl" 
                alt="Phoenix Development project"
                src="/SectionTwo-1.png"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d4a849', boxShadow: '0 10px 30px rgba(212,168,73,0.3)' }}>
                <span className="material-symbols-outlined" style={{ color: '#030712' }}>apartment</span>
              </div>
            </div>
            <div className="mt-12">
              <img 
                className="w-full h-72 object-cover rounded-2xl" 
                alt="Phoenix interior design"
                src="/SectionTwo-2.png"
              />
            </div>
          </div>
          <div className="card-container p-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ backgroundColor: '#d4a849', color: '#030712' }}>
              من نحن
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cinzel" style={{ color: '#ffffff' }}>
              رؤية تتجاوز المباني
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted" style={{ lineHeight: '1.8' }}>
              في فينيكس جلوبال للتطوير العقاري، نؤمن أن العقار ليس مجرد جدران، بل مساحة لصنع الذكريات وفرصة ذهبية لتنمية الثروة. نجمع بين الخبرة العالمية والرؤية المحلية لتقديم مشاريع مستدامة وفاخرة تلبي طموحات عملائنا.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 font-medium" style={{ color: '#ffffff' }}>
                  <span className="material-symbols-outlined" style={{ color: '#d4a849' }}>check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-12 pt-6 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold font-cinzel text-gold">{stat.number}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider mt-20"></div>
    </section>
  );
};

export default About;