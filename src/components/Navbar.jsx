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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled ? 'rgba(13, 21, 38, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(192, 80, 26, 0.1)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img src="/Logo.png" alt="Phoenix Global logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-xl font-bold tracking-widest block" style={{ color: '#C0501A', fontFamily: 'Cinzel, serif' }}>
                PHOENIX
              </span>
              <span className="text-[10px] tracking-wider block -mt-1" style={{ color: 'rgba(240, 244, 250, 0.5)', fontFamily: 'Cairo, sans-serif' }}>
                GLOBAL
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group cursor-pointer"
                style={{ color: 'rgba(240, 244, 250, 0.7)', fontFamily: 'Cairo, sans-serif' }}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-3/4"
                  style={{ background: '#C0501A' }}
                />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #C0501A, #A54215)',
              color: '#FFFFFF',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}>
              call
            </span>
            <span>تواصل معانا</span>
          </a>

          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span
                className="absolute left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
                style={{
                  top: mobileMenuOpen ? '50%' : '0',
                  transform: mobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)',
background: '#C0501A',
                }}
               />
               <span
                 className="absolute left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
                 style={{
                   top: '50%',
                   opacity: mobileMenuOpen ? 0 : 1,
                   transform: 'translateY(-50%)',
                   background: '#C0501A',
                 }}
               />
               <span
                 className="absolute left-0 w-6 h-0.5 transition-all duration-300 rounded-full"
                 style={{
                   top: mobileMenuOpen ? '50%' : '100%',
                   transform: mobileMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(0)',
                   background: '#C0501A',
                }}
              />
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 pt-6 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 cursor-pointer"
                style={{ color: 'rgba(240, 244, 250, 0.85)', fontFamily: 'Cairo, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 mx-4 px-6 py-3 rounded-full text-center text-sm font-bold cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #C0501A, #A54215)',
                color: '#FFFFFF',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
           تواصل معانا
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
