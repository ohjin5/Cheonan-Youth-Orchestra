import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden text-beige-100">
      
      {/* Background Image: poster.jpg */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/poster.jpg')" }}
      ></div>

      {/* Dark Gradient Overlay (Black/Amber, Opacity ~0.7) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black-900/80 via-black-900/60 to-brown-900/90 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-black-900/40"></div> {/* Additional layer for readability */}

      {/* Cinematic Golden Glow/Bokeh Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-500 rounded-full blur-[120px] opacity-10 animate-pulse-slow z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-gold-500 rounded-full blur-[100px] opacity-10 animate-pulse-slow delay-1000 z-0"></div>
      <div className="absolute inset-0 grain-overlay z-0"></div>

      {/* Main Content - Gentle Slow Animation (Duration 1.5s, Delay 0.5s) */}
      <div className="relative z-10 text-center flex flex-col items-center px-6 pt-[70px] pb-40 opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
        <p className="font-serif text-gold-500 text-sm tracking-[0.3em] uppercase mb-6 drop-shadow-md">
          Invitation
        </p>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-beige-100 via-gold-500 to-beige-100 mb-6 leading-relaxed drop-shadow-lg">
          제6회<br />
          천안청소년오케스트라<br />
          정기연주회
        </h1>

        <div className="w-16 h-[1px] bg-gold-500/80 mb-8 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>

        <p className="font-serif text-[#EBE5CE] text-lg mb-12 italic font-light tracking-wide font-playfair drop-shadow-md">
          "꿈과 열정이 빚어낸<br/>여섯 번째 하모니"
        </p>

        {/* Date and Venue Box - Minimalist Border */}
        <div className="border border-gold-500/40 bg-black-900/40 backdrop-blur-sm px-8 py-6 max-w-xs mx-auto shadow-lg">
           <div className="space-y-3 text-beige-100">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">Date</span>
                  <span className="text-lg font-bold text-shadow">2025. 12. 20.(토) 16:00</span>
                </div>
                <div className="h-[1px] w-full bg-white/20"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gold-500 uppercase tracking-wider">Venue</span>
                  <span className="text-base text-shadow">천안시청소년복합커뮤니티센터 대공연장</span>
                </div>
           </div>
        </div>
      </div>

      {/* Header Logo */}
      <img 
        src="img/logo.png" 
        alt="천안시청소년재단 로고" 
        className="header-logo absolute bottom-[40px] left-1/2 -translate-x-1/2 w-auto max-w-[85%] h-auto opacity-90 drop-shadow-xl"
        style={{ zIndex: 20 }}
      />
    </section>
  );
};