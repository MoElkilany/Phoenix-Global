import redWhiteLogo from '../assets/redWhiteLogo.png';

const Footer = () => {
  const footerLinks = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#ceo-message', label: 'رسالة المدير' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#investment', label: 'الاستثمار' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  return (
    <footer className="w-full py-12 px-6 md:px-12" style={{ backgroundColor: '#0D1526', borderTop: '1px solid rgba(240,244,250,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <img src={redWhiteLogo} alt="Phoenix Global logo" className="h-10 w-auto object-contain" />
          </div>

          <div className="flex flex-wrap justify-center gap-1">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg group cursor-pointer"
                style={{ color: 'rgba(240, 244, 250, 0.7)', fontFamily: 'Cairo, sans-serif' }}
                href={link.href}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-3/4"
                  style={{ background: '#d44000' }}
                />
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

       <div className="flex flex-col md:flex-row justify-center items-center pt-8 gap-4" style={{ borderTop: '1px solid rgba(240,244,250,0.06)' }}>
   <p className="text-sm text-center" style={{ color: '#5E6F8A', fontFamily: 'Cairo, sans-serif' }}>
     © 2026 فينيكس جلوبال للتطوير. جميع الحقوق محفوظة.
   </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
