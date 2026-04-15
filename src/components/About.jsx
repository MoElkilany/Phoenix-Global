const About = () => {
  const stats = [
    { number: '500+', label: 'وحدة سكنية' },
    { number: '12', label: 'مشروع عملاق' },
  ];

  const features = [
    'أكثر من 15 عاماً من الخبرة في السوق',
    'التزام كامل بمواعيد التسليم',
    'أعلى معايير الجودة الدولية في البناء',
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f8f9fa' }} id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              className="w-full h-64 object-cover rounded-xl mt-12" 
              alt="Phoenix Development project"
              src="/SectionTwo-1.png"
            />
            <img 
              className="w-full h-64 object-cover rounded-xl" 
              alt="Phoenix interior design"
              src="/SectionTwo-2.png"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6" style={{ color: '#2B2D4E', fontFamily: 'Cairo, sans-serif' }}>
              رؤية تتجاوز المباني
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#666666' }}>
              At Phoenix Global Developments, نؤمن أن العقار ليس مجرد جدران، بل مساحة لصنع الذكريات وفرصة ذهبية لتنمية الثروة. نجمع بين الخبرة العالمية والرؤية المحلية لتقديم مشاريع مستدامة وفاخرة.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 font-bold" style={{ color: '#2B2D4E' }}>
                  <span className="material-symbols-outlined" style={{ color: '#C0521A' }}>verified</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-12 pt-8" style={{ borderTop: '1px solid #e0e0e0' }}>
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-black" style={{ color: '#C0521A' }}>{stat.number}</div>
                  <div className="text-sm" style={{ color: '#666666' }}>{stat.label}</div>
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