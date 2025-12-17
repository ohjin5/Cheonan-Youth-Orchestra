import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FooterSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-12 px-6 bg-brown-900/5 text-center mt-8 font-serif">
      <div 
        ref={ref}
        className={`max-w-sm mx-auto space-y-4 scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        <div className="text-xs text-brown-800 leading-relaxed space-y-2">
            <p>
               <span className="inline-block font-bold text-brown-900 mr-1">주관 |</span>
               천안시청소년재단, 천안시청소년복합커뮤니티센터
            </p>
            <p>
               <span className="inline-block font-bold text-brown-900 mr-1">문의 |</span>
               <a href="tel:041-557-0924" className="hover:text-brown-900 underline">041-557-0924</a>
            </p>
        </div>
        
        <div className="pt-6 mt-6 border-t border-brown-200 space-y-2">
            <p className="text-[11px] text-brown-500 font-medium">
                ©천안시청소년복합커뮤니티센터
            </p>
            <div className="flex flex-col items-center gap-1">
                 <p style={{ fontSize: '0.8rem', color: '#888' }}>
                    BGM: 유민규 - bed (CC BY)
                </p>
                <a 
                    href="https://www.flaticon.com/kr/free-icons/" 
                    title="바이올린 아이콘" 
                    target="_blank" 
                    style={{ textDecoration: 'none', color: '#888', fontSize: '0.7rem' }}
                >
                    바이올린 아이콘 제작자: Freepik - Flaticon
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};