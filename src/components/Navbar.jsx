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
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(43, 45, 78, 0.95)' : 'rgba(43, 45, 78, 0.8)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/Logo.png" 
              alt="Phoenix Global logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 
              className="text-xl font-black tracking-wider"
              style={{ color: '#ffffff', fontFamily: 'Cairo, sans-serif' }}
              >
                Phoenix Global
              </h1>
          </a>

          {/* Desktop Links */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:text-white group"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="relative z-10">{link.label}</span>
                <span 
                  className="absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(192, 82, 26, 0.3) 0%, rgba(192, 82, 26, 0.1) 100%)',
                  }}
                />
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C0521A] transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'}`}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-[#C0521A]/20"
                style={{ 
                  color: 'rgba(255,255,255,0.85)',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        nav a {
          animation: slideDown 0.3s ease forwards;
          animation-delay: calc(var(--index) * 0.05s);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;