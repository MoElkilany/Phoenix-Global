const Footer = () => {
  const footerLinks = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#projects', label: 'المشاريع' },
    { href: '#about', label: 'من نحن' },
    { href: '#investment', label: 'الاستثمار' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const legalLinks = [
    { href: '#', label: 'الشروط والأحكام' },
    { href: '#', label: 'سياسة الخصوصية' },
    { href: '#', label: 'خريطة الموقع' },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12" style={{ backgroundColor: '#0D1526', borderTop: '1px solid rgba(240,244,250,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" alt="Phoenix Global logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold tracking-wider" style={{ color: '#C0501A', fontFamily: 'Cinzel, serif' }}>
              PHOENIX
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                className="text-sm transition-colors duration-300 cursor-pointer"
                style={{ color: '#8E9BB5', fontFamily: 'Cairo, sans-serif' }}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {['share', 'public', 'camera_alt'].map((icon, index) => (
              <span
                key={index}
                className="material-symbols-outlined text-xl cursor-pointer transition-colors duration-300"
                style={{ color: '#8E9BB5' }}
                role="button"
                aria-label={icon}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4" style={{ borderTop: '1px solid rgba(240,244,250,0.06)' }}>
          <p className="text-sm" style={{ color: '#5E6F8A', fontFamily: 'Cairo, sans-serif' }}>
            © 2024 Phoenix Global Developments. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                className="text-sm transition-colors duration-300 cursor-pointer"
                style={{ color: '#5E6F8A', fontFamily: 'Cairo, sans-serif' }}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
