import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ActionButtonsProps {
  onShare: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onShare }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="relative pb-16 px-6 bg-beige-100/50">
      <div 
        ref={ref}
        className={`max-w-md mx-auto flex flex-col gap-[15px] scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        {/* Button 1: Reservation (Naver Form) - Gold */}
        <a 
          href="https://naver.me/5AgroLNR" 
          target="_blank" 
          rel="noreferrer"
          className="w-full bg-[#C5A059] text-white py-4 rounded-md shadow-lg flex items-center justify-center hover:bg-[#b08d48] transition-all active:scale-95 group font-bold text-lg"
        >
          관람 신청하기 (선착순/무료)
        </a>

        {/* Button 2: Share - Dark Brown */}
        <button 
          onClick={onShare}
          className="w-full bg-[#3E2723] text-[#F5F0E1] py-4 rounded-md shadow-lg flex items-center justify-center hover:bg-[#2d1b18] transition-all active:scale-95 font-bold text-lg"
        >
          초대장 공유하기
        </button>
      </div>
    </section>
  );
};