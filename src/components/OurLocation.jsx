const OurLocation = () => {
  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#F9F9FE' }} id="location">
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #051125 0%, transparent 70%)', transform: 'translate(-30%, -40%)' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{ background: 'rgba(5, 17, 37, 0.05)', border: '1px solid rgba(5, 17, 37, 0.1)' }}
          >
            <span className="material-symbols-outlined text-sm" style={{ color: '#051125', fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
              location_on
            </span>
            <span className="text-sm font-semibold" style={{ color: '#051125', fontFamily: 'Cairo, sans-serif' }}>موقعنا</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#051125', fontFamily: 'Cairo, sans-serif' }}>
            تجدنا{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #C0501A, #E8845A)' }}>
              هنا
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#5A6978', fontFamily: 'Cairo, sans-serif' }}>
           تفضلوا بزيارتنا في موقعنا الاستراتيجي
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(5, 17, 37, 0.15)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.799405423354!2d31.642385075556895!3d30.128552974881316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA3JzQyLjgiTiAzMcKwMzgnNDEuOSJF!5e0!3m2!1sen!2seg!4v1778357491144!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Phoenix Global Location"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold" style={{ color: '#051125', fontFamily: 'Cairo, sans-serif' }}>
            78 شارع الفارابي - الشروق - القاهرة
          </p>
          <button
            onClick={() => window.open('https://www.google.com/maps?q=30.128553,31.644960', '_blank')}
            className="mt-4 px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, #C0501A, #E8845A)',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            <span style={{ color: '#F0F4FA' }}>افتح في الخريطة</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;