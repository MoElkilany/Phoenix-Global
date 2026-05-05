import { useState, useEffect, useCallback, useRef } from 'react';

const ProjectCarousel = ({ images, alt = 'Project image' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);

  const totalImages = images.length;

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    if (!isHovered && totalImages > 1) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, nextSlide, totalImages]);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    touchStartRef.current = null;
  };

  if (!totalImages) {
    return (
      <div className="relative w-full bg-[#132036]" style={{ aspectRatio: '4/3' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#5E6F8A] text-5xl">image_not_supported</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full bg-[#132036] overflow-hidden group/carousel"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 1 : 0,
            }}
          >
            <img
              src={src}
              alt={`${alt} - ${i + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(13,21,38,0) 0%, rgba(13,21,38,0.3) 50%, rgba(13,21,38,0.7) 100%)',
              }}
            />
          </div>
        ))}
      </div>

      {totalImages > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            style={{
              background: 'rgba(13, 21, 38, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F0F4FA',
            }}
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            style={{
              background: 'rgba(13, 21, 38, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F0F4FA',
            }}
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20"
            style={{ direction: 'ltr' }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === currentIndex ? '#C0501A' : 'rgba(255, 255, 255, 0.35)',
                  transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          <div
            className="absolute top-3 left-3 px-2 py-1 rounded-md z-20 text-xs font-semibold font-cairo"
            style={{
              background: 'rgba(13, 21, 38, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#F0F4FA',
            }}
          >
            {currentIndex + 1} / {totalImages}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;