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
    <section className="py-20" style={{ backgroundColor: '#2B2D4E' }} id="contact">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}>
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
              className="text-center p-6 rounded-2xl transition-all hover:scale-105 cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#C0521A' }}
              >
                <span className="material-symbols-outlined text-white">call</span>
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
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#C0521A' }}
            >
              <span className="material-symbols-outlined text-white">mail</span>
            </div>
<p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>البريد الإلكتروني</p>
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
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#C0521A' }}
            >
              <span className="material-symbols-outlined text-white">location_on</span>
            </div>
<p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>الموقع</p>
              <p className="text-lg font-bold" style={{ color: '#ffffff' }}>78 شارع الفرعي - المغاورة 3 - الحي الثامن - الشروق - القاهرة</p>
              <p className="text-sm mt-2" style={{ color: '#C0521A' }}>انقر للعرض على الخريطة</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;