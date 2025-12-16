import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black-900 via-[#2D1B18] to-[#3E2723] text-beige-100">
      
      {/* Cinematic Golden Glow/Bokeh Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-gold-500 rounded-full blur-[100px] opacity-10 animate-pulse-slow delay-1000"></div>
      <div className="absolute inset-0 grain-overlay"></div>

      <div 
        ref={ref}
        className={`relative z-10 text-center transition-all duration-1000 transform flex flex-col items-center px-6 pb-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="font-serif text-gold-500 text-sm tracking-[0.3em] uppercase mb-6">
          Invitation
        </p>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-beige-100 via-gold-500 to-beige-100 mb-6 leading-relaxed drop-shadow-lg">
          제6회<br />
          천안청소년오케스트라<br />
          정기연주회
        </h1>

        <div className="w-16 h-[1px] bg-gold-500/50 mb-8"></div>

        <p className="font-serif text-beige-100/90 text-lg mb-12 italic font-light tracking-wide font-playfair">
          "꿈과 열정이 빚어낸<br/>여섯 번째 하모니"
        </p>

        {/* Date and Venue Box - Minimalist Border */}
        <div className="border border-gold-500/30 bg-black-900/20 backdrop-blur-sm px-8 py-6 max-w-xs mx-auto">
           <div className="space-y-3 text-beige-100">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">Date</span>
                  <span className="text-lg font-bold">2025. 12. 20.(토) 16:00</span>
                </div>
                <div className="h-[1px] w-full bg-white/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">Venue</span>
                  <span className="text-base">천안시청소년복합커뮤니티센터 대공연장</span>
                </div>
           </div>
        </div>
      </div>

      {/* Critical Requirement: Header Logo */}
      {/* Position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); */}
      <img 
        src="img/logo.png" 
        alt="천안시청소년재단 로고" 
        className="header-logo absolute bottom-[40px] left-1/2 -translate-x-1/2 w-auto max-w-[90%] h-auto opacity-90"
        style={{ zIndex: 20 }}
      />
    </section>
  );
};