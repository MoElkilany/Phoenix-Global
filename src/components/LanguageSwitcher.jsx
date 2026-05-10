import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = ({ compact = false }) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { code: 'ar', label: t('languageSwitcher.arabic'), short: 'AR' },
    { code: 'en', label: t('languageSwitcher.english'), short: 'EN' },
  ];

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('languageSwitcher.label')}
        className={`flex items-center gap-2 rounded-full transition-all duration-300 cursor-pointer ${
          compact ? 'px-3 py-2 text-sm' : 'px-4 py-2.5 text-sm'
        }`}
        style={{
          color: 'rgba(240, 244, 250, 0.85)',
          background: open ? 'rgba(212, 64, 0, 0.12)' : 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(212, 64, 0, 0.25)',
          fontFamily: 'var(--font-current)',
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: '18px',
            color: '#d44000',
            fontVariationSettings: "'FILL' 0, 'wght' 500",
          }}
        >
          language
        </span>
        <span className="font-bold tracking-wide">{language === 'ar' ? 'AR' : 'EN'}</span>
        <span
          className="material-symbols-outlined transition-transform duration-300"
          style={{
            fontSize: '16px',
            color: 'rgba(240, 244, 250, 0.6)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          expand_more
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full mt-2 min-w-[160px] rounded-xl overflow-hidden z-50"
          style={{
            [isRTL ? 'right' : 'left']: 0,
            background: 'rgba(13, 21, 38, 0.98)',
            border: '1px solid rgba(212, 64, 0, 0.25)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          {options.map((opt) => {
            const active = opt.code === language;
            return (
              <li key={opt.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt.code)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors duration-200 cursor-pointer"
                  style={{
                    color: active ? '#d44000' : 'rgba(240, 244, 250, 0.85)',
                    background: active ? 'rgba(212, 64, 0, 0.08)' : 'transparent',
                    fontFamily: 'var(--font-current)',
                    fontWeight: active ? 700 : 500,
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span>{opt.label}</span>
                  <span className="text-xs opacity-60 tracking-wider">{opt.short}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
