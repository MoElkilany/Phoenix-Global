import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '#', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-2xl' : 'glass'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/Logo.png" 
              alt="Phoenix Global logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 
              className="text-xl font-bold tracking-wider font-cinzel"
              style={{ color: '#ffffff' }}
            >
              PHOENIX GLOBAL
            </h1>
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:text-white group cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <span className="relative z-10">{link.label}</span>
                <span 
                  className="absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(212,168,73,0.15)' }}
                />
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d4a849] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </div>

          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span 
                className="absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                style={{ 
                  top: mobileMenuOpen ? '50%' : '0',
                  transform: mobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)',
                }}
              />
              <span 
                className="absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                style={{ 
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? 'translateY(-50%)' : 'translateY(-50%)',
                }}
              />
              <span 
                className="absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 rounded-full"
                style={{ 
                  top: mobileMenuOpen ? '50%' : '100%',
                  transform: mobileMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-100%)',
                }}
              />
            </div>
          </button>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#d4a849]/20 cursor-pointer"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;