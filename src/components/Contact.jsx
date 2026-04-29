const Contact = () => {
  const phones = [
    { label: 'خط أرضي', number: '+20 2 20322217' },
    { label: '', number: '+20 1116566604' },
    { label: '', number: '+20 1119031117' },
  ];

  const handleCall = (number) => {
    const digits = number.replace(/\s/g, '');
    window.open(`tel:${digits}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@phonixglobal-eg.com', '_self');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps?q=30.128553,31.644960', '_blank');
  };

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#132036' }} id="contact">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #C0501A 0%, transparent 70%)', transform: 'translate(30%, -40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(192, 80, 26, 0.1)', border: '1px solid rgba(192, 80, 26, 0.2)' }}
          >
            <span className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              call
            </span>
            <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'Cairo, sans-serif' }}>تواصل معنا</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
            نحن هنا{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              لمساعدتك
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
            فريقنا متاح للرد على استفساراتك على مدار الساعة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phones.map((phone, index) => (
            <button
              key={index}
              onClick={() => handleCall(phone.number)}
              className="text-center p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.2), rgba(192, 80, 26, 0.05))',
                 border: '1px solid rgba(192, 80, 26, 0.3)',
                }}
              >
                <span className="material-symbols-outlined text-gold">call</span>
              </div>
              {phone.label && (
                <p className="text-sm mb-1" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
                  {phone.label}
                </p>
              )}
              <p className="text-lg font-bold" dir="ltr" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
                {phone.number}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <button
            onClick={handleEmail}
            className="text-center p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.2), rgba(192, 80, 26, 0.05))',
                 border: '1px solid rgba(192, 80, 26, 0.3)',
              }}
            >
              <span className="material-symbols-outlined text-gold">mail</span>
            </div>
            <p className="text-sm mb-1" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
              البريد الإلكتروني
            </p>
            <p className="text-lg font-bold" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
              info@phonixglobal-eg.com
            </p>
          </button>

          <button
            onClick={handleLocation}
            className="text-center p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
background: 'linear-gradient(135deg, rgba(192, 80, 26, 0.2), rgba(192, 80, 26, 0.05))',
                 border: '1px solid rgba(192, 80, 26, 0.3)',
              }}
            >
              <span className="material-symbols-outlined text-gold">location_on</span>
            </div>
            <p className="text-sm mb-1" style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}>
              الموقع
            </p>
            <p className="text-lg font-bold" style={{ color: '#F0F4FA', fontFamily: 'Cairo, sans-serif' }}>
              78 شارع الفرعي - الشروق - القاهرة
            </p>
            <p className="text-sm mt-2" style={{ color: '#C0501A', fontFamily: 'Cairo, sans-serif' }}>
              انقر للعرض على الخريطة
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
