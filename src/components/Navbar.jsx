import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#investment', label: 'الاستثمار' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[var(--z-navbar)] transition-all duration-[var(--duration-slow)] ${scrolled ? 'py-4' : 'py-6'}`}
      style={{
        background: scrolled ? 'rgba(253, 252, 251, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border-subtle)' : 'none',
      }}
    >
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-4 shrink-0 group">
            <img src="/Logo.png" alt="Phoenix Global" className="w-12 h-12 object-contain transition-transform duration-[var(--duration-slow)] group-hover:scale-105" />
            <div className="hidden md:block">
              <span className="text-xl font-bold tracking-[3px] block" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-charcoal-900)' }}>PHOENIX</span>
              <span className="text-[9px] tracking-[2px] block -mt-0.5" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-sand-500)' }}>GLOBAL</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 text-sm font-medium rounded-[var(--radius-md)] transition-all duration-[var(--duration-normal)] group cursor-pointer"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-arabic)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-charcoal-900)'; e.currentTarget.style.background = 'var(--color-sand-100)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:inline-flex btn-terracotta text-sm">
            <span className="material-symbols-outlined text-base">call</span>
            <span>تواصل معنا</span>
          </a>

          <button className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="القائمة">
            <div className="relative w-6 h-4">
              {[0, 1, 2].map((i) => (
                <span key={i} className="absolute left-0 w-6 h-px rounded-full transition-all duration-[var(--duration-slow)]"
                  style={{
                    background: 'var(--color-charcoal-900)',
                    top: i === 0 ? (mobileMenuOpen ? '50%' : '0') : i === 1 ? '50%' : (mobileMenuOpen ? '50%' : '100%'),
                    opacity: i === 1 ? (mobileMenuOpen ? 0 : 1) : 1,
                    transform: i === 0 ? (mobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)') : i === 1 ? 'translateY(-50%)' : (mobileMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(0)'),
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-[var(--duration-slow)] ${mobileMenuOpen ? 'max-h-96 pt-6 pb-6' : 'max-h-0'}`}>
          <div className="card-elevated p-4 mt-2" dir="rtl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="px-5 py-3 rounded-[var(--radius-md)] text-base font-medium transition-colors duration-[var(--duration-fast)] cursor-pointer hover:bg-[var(--color-sand-100)]"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-arabic)' }} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mt-3 btn-terracotta justify-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="material-symbols-outlined text-base">call</span>
                <span>تواصل معنا</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;