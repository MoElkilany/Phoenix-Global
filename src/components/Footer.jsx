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
    <footer className="w-full relative" style={{ background: 'var(--color-sand-950)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12">
          <a href="#hero" className="flex items-center gap-4 shrink-0 group">
            <img src="/Logo.png" alt="Phoenix Global" className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)]" />
            <div>
              <span className="text-lg font-bold tracking-[3px] block" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-sand-100)' }}>PHOENIX</span>
              <span className="text-[8px] tracking-[2px] block -mt-0.5" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-sand-500)', opacity: 0.6 }}>GLOBAL</span>
            </div>
          </a>

          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a key={link.href} className="text-sm transition-colors duration-[var(--duration-normal)] cursor-pointer hover:text-[var(--color-sand-200)]"
                style={{ color: 'var(--color-sand-400)', fontFamily: 'var(--font-arabic)' }} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map(({ icon, label }, index) => (
              <button key={index} className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-lg)] transition-all duration-[var(--duration-normal)] cursor-pointer"
                style={{ border: '1px solid var(--color-sand-700)', background: 'transparent', color: 'var(--color-sand-400)' }}
                aria-label={label}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-sand-300)'; e.currentTarget.style.color = 'var(--color-sand-100)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-sand-700)'; e.currentTarget.style.color = 'var(--color-sand-400)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--color-sand-800)' }} />

        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-xs" style={{ color: 'var(--color-sand-600)', fontFamily: 'var(--font-arabic)' }}>
            © 2024 Phoenix Global Developments. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} className="text-xs transition-colors duration-[var(--duration-normal)] cursor-pointer hover:text-[var(--color-sand-300)]"
                style={{ color: 'var(--color-sand-600)', fontFamily: 'var(--font-arabic)' }} href={link.href}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-sand-300)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-sand-600)'; }}>
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