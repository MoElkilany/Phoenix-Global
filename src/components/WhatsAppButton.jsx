const WhatsAppButton = () => {
  return (
    <a 
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform"
      href="#"
      aria-label="تواصل عبر واتساب"
    >
      <span className="material-symbols-outlined text-4xl" data-weight="fill">chat</span>
    </a>
  );
};

export default WhatsAppButton;