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
    <footer className="w-full py-12 px-6 md:px-12 border-t border-white/10 text-white" style={{ backgroundColor: '#2B2D4E' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 mb-12">
        <div className="text-xl font-bold" style={{ color: '#C0521A' }}>Phoenix Global</div>
        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              className="text-slate-400 hover:text-secondary-fixed-dim transition-opacity font-plus-jakarta text-sm tracking-wide"
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
              className="material-symbols-outlined text-slate-400 hover:text-secondary cursor-pointer"
              role="button"
              aria-label={icon}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-white/5 pt-8 gap-6">
        <p className="font-plus-jakarta text-sm tracking-wide text-slate-400">
          © 2024 Phoenix Global Developments. All rights reserved.
        </p>
        <div className="flex gap-8">
          {legalLinks.map((link, index) => (
            <a 
              key={index}
              className="text-slate-400 hover:text-secondary-fixed-dim text-sm"
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