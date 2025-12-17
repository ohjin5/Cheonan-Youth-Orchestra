import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Initial visible images (4 slots)
const IMAGES_INIT = [
  'img/photo1.jpg', 
  'img/photo2.jpg', 
  'img/photo3.jpg', 
  'img/photo4.jpg'
];

// Pool of remaining images (Hidden initially)
const IMAGES_POOL_INIT = [
  'img/photo5.jpg', 
  'img/photo6.jpg', 
  'img/photo7.jpg', 
  'img/photo8.jpg',
  'img/photo9.jpg',
  'img/photo10.jpg',
  'img/photo11.jpg',
  'img/photo12.jpg'
];

export const GallerySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [displayImages, setDisplayImages] = useState(IMAGES_INIT);
  const poolRef = useRef(IMAGES_POOL_INIT);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Choose a random slot (0-3) to swap out
      const slotIndex = Math.floor(Math.random() * 4);
      setFadingIndex(slotIndex);

      // 2. Wait for fade out (1200ms - matches CSS duration), then swap image source
      setTimeout(() => {
        setDisplayImages(prev => {
          const newImages = [...prev];
          const oldImage = newImages[slotIndex];
          
          // Pick random image from the hidden pool
          const poolIndex = Math.floor(Math.random() * poolRef.current.length);
          const newImage = poolRef.current[poolIndex];
          
          // Swap logic: Displayed image goes back to pool, Pool image goes to display
          newImages[slotIndex] = newImage;
          poolRef.current[poolIndex] = oldImage;
          
          return newImages;
        });
      }, 1200);
      
      // 3. Reset fading status (start fade in) slightly after swap
      setTimeout(() => {
        setFadingIndex(null);
      }, 1300);

    }, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-6 bg-white/30">
       <div 
        ref={ref}
        className={`max-w-md mx-auto gallery-grid scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        <h2 className="text-xl font-serif text-center text-brown-900 mb-8 tracking-widest uppercase border-b border-gold-500/30 pb-4 inline-block w-full">
            Gallery
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {displayImages.map((src, index) => (
             <div key={index} className="aspect-[4/3] overflow-hidden rounded-md shadow-sm bg-brown-900/10 relative z-0">
                <img 
                  src={src} 
                  alt={`Orchestra Gallery ${index + 1}`}
                  className={`
                    w-full h-full object-cover 
                    transition-all duration-[1200ms] ease-in-out
                    ${fadingIndex === index 
                      ? 'opacity-0 blur-[8px] scale-100' // Hidden State: Transparent, Blurred, Normal Scale
                      : 'opacity-100 blur-0 scale-[1.03]' // Visible State: Clear, Sharp, Slight Zoom
                    }
                  `}
                />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};