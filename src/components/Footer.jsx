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

  const socials = [
    { icon: 'share', label: 'Facebook' },
    { icon: 'public', label: 'Website' },
    { icon: 'camera_alt', label: 'Instagram' },
  ];

  return (
    <footer
      className="w-full relative"
      style={{
        backgroundColor: '#030609',
        borderTop: '1px solid rgba(201, 168, 76, 0.1)',
      }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main footer row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0 group">
            <img src="/Logo.png" alt="Phoenix Global logo" className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <span
                className="text-lg font-bold tracking-[3px] block"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E2C880)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                PHOENIX
              </span>
              <span
                className="text-[8px] tracking-[2px] block -mt-0.5"
                style={{ color: 'rgba(201, 168, 76, 0.35)', fontFamily: 'Cinzel, serif' }}
              >
                GLOBAL
              </span>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                className="text-sm transition-all duration-300 cursor-pointer"
                style={{ color: '#7A8898', fontFamily: 'Cairo, sans-serif' }}
                href={link.href}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#7A8898'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon, label }, index) => (
              <button
                key={index}
                className="w-9 h-9 flex items-center justify-center transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid rgba(201, 168, 76, 0.12)',
                  background: 'transparent',
                  color: '#7A8898',
                }}
                aria-label={label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)';
                  e.currentTarget.style.color = '#C9A84C';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.12)';
                  e.currentTarget.style.color = '#7A8898';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                >
                  {icon}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(201, 168, 76, 0.06)' }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-xs" style={{ color: '#3E4D5C', fontFamily: 'Cairo, sans-serif' }}>
            © 2024 Phoenix Global Developments. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                className="text-xs transition-colors duration-300 cursor-pointer"
                style={{ color: '#3E4D5C', fontFamily: 'Cairo, sans-serif' }}
                href={link.href}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(201, 168, 76, 0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#3E4D5C'; }}
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
