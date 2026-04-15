const Contact = () => {
  const phones = [
    { label: 'خطوط محمولة', number: '01119031117' },
    { label: 'خطوط محمولة', number: '01116566604' },
    { label: 'خط أرضي', number: '0220322217' },
  ];

  const handleCall = (number) => {
    window.open(`tel:+20${number}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@phonixglobal-eg.com', '_self');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps?q=30.128553,31.644960', '_blank');
  };

  return (
    <section className="py-24 lg:py-32 section-spacing" style={{ backgroundColor: '#0a0a0f' }} id="contact">
      <div className="content-container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full" style={{ backgroundColor: '#d4a849', color: '#051125' }}>
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel" style={{ color: '#ffffff' }}>
            تواصل معنا
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            فريقنا متاح للرد على استفساراتك على مدار الساعة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phones.map((phone, index) => (
            <button 
              key={index}
              onClick={() => handleCall(phone.number)}
              className="text-center p-8 rounded-2xl transition-all hover:scale-105 cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(17,17,24,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#d4a849' }}
              >
                <span className="material-symbols-outlined" style={{ color: '#030712' }}>call</span>
              </div>
              <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{phone.label}</p>
              <p className="text-lg font-bold" style={{ color: '#ffffff' }}>+20{phone.number}</p>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <button 
            onClick={handleEmail}
            className="text-center p-6 rounded-2xl w-full transition-all hover:scale-105 cursor-pointer"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div 
              className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#d4a849' }}
            >
              <span className="material-symbols-outlined" style={{ color: '#051125' }}>mail</span>
            </div>
            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>البريد الإلكترون��</p>
            <p className="text-lg font-bold" style={{ color: '#ffffff' }}>info@phonixglobal-eg.com</p>
          </button>
        </div>

        <div className="mt-6">
          <button 
            onClick={handleLocation}
            className="text-center p-6 rounded-2xl w-full transition-all hover:scale-105 cursor-pointer"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div 
              className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#d4a849' }}
            >
              <span className="material-symbols-outlined" style={{ color: '#051125' }}>location_on</span>
            </div>
            <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>الموقع</p>
            <p className="text-lg font-bold" style={{ color: '#ffffff' }}>78 شارع الفرعي - المغاورة 3 - الحي الثامن - الشروق - القاهرة</p>
            <p className="text-sm mt-2" style={{ color: '#d4a849' }}>انقر للعرض على الخريطة</p>
          </button>
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  );
};

export default Contact;