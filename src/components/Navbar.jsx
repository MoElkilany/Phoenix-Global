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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{
        background: scrolled
          ? 'rgba(6, 11, 20, 0.96)'
          : 'linear-gradient(180deg, rgba(6,11,20,0.8) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.1)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative">
              <img src="/Logo.png" alt="Phoenix Global logo" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105" />
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }}
              />
            </div>
            <div>
              <span
                className="text-xl font-bold tracking-[4px] block"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E2C880, #C9A84C)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                PHOENIX
              </span>
              <span
                className="text-[9px] tracking-[3px] block -mt-1"
                style={{ color: 'rgba(201, 168, 76, 0.45)', fontFamily: 'Cinzel, serif' }}
              >
                GLOBAL
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg group cursor-pointer"
                style={{ color: 'rgba(240, 234, 216, 0.65)', fontFamily: 'Cairo, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EAD8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(240, 234, 216, 0.65)'; }}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-400 group-hover:w-1/2"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold cursor-pointer transition-all duration-400 hover:scale-105 group"
            style={{
              background: 'transparent',
              color: '#C9A84C',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              borderRadius: '4px',
              fontFamily: 'Cairo, sans-serif',
              letterSpacing: '1px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201, 168, 76, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.7)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(201, 168, 76, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>call</span>
            <span>تواصل معنا</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-4">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute left-0 w-6 h-px transition-all duration-400 rounded-full"
                  style={{
                    background: '#C9A84C',
                    top: i === 0 ? (mobileMenuOpen ? '50%' : '0') : i === 1 ? '50%' : (mobileMenuOpen ? '50%' : '100%'),
                    opacity: i === 1 ? (mobileMenuOpen ? 0 : 1) : 1,
                    transform: i === 0
                      ? (mobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)')
                      : i === 1
                      ? 'translateY(-50%)'
                      : (mobileMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(0)'),
                  }}
                />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 pt-6 pb-6' : 'max-h-0'}`}
        >
          <div
            className="rounded-xl p-4 mt-2"
            style={{
              background: 'rgba(10, 18, 32, 0.98)',
              border: '1px solid rgba(201, 168, 76, 0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-5 py-3 rounded-lg text-base font-medium transition-all duration-300 cursor-pointer"
                  style={{ color: 'rgba(240, 234, 216, 0.8)', fontFamily: 'Cairo, sans-serif' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-3 px-6 py-3 text-center text-sm font-bold cursor-pointer rounded-lg"
                style={{
                  background: 'rgba(201, 168, 76, 0.1)',
                  color: '#C9A84C',
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  fontFamily: 'Cairo, sans-serif',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
