const WhatsAppButton = () => {
  return (
    <a 
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform cursor-pointer"
      style={{ backgroundColor: '#25D366' }}
      href="#"
      aria-label="تواصل عبر واتساب"
    >
      <span className="material-symbols-outlined text-3xl" style={{ color: '#ffffff' }} data-weight="fill">chat</span>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        a {
          animation: pulse 2s infinite;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;