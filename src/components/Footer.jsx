const Footer = () => {
  const footerLinks = [
    { href: '#', label: 'الرئيسية' },
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

  const socialIcons = ['share', 'public', 'camera_alt'];

  return (
    <footer className="w-full py-12 px-6 md:px-12" style={{ backgroundColor: '#030712' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 mb-12">
        <div className="text-xl font-bold font-cinzel" style={{ color: '#d4a849' }}>PHOENIX GLOBAL</div>
        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              className="text-sm tracking-wide transition-colors cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <span 
              key={index}
              className="material-symbols-outlined cursor-pointer transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              role="button"
              aria-label={icon}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-white/10 pt-8 gap-6">
        <p className="text-sm tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
          © 2024 Phoenix Global Developments. All rights reserved.
        </p>
        <div className="flex gap-8">
          {legalLinks.map((link, index) => (
            <a 
              key={index}
              className="text-sm transition-colors cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;