import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const LeadershipSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-16 px-6">
      <div 
        ref={ref}
        className={`max-w-sm mx-auto text-center scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        {/* Baton Icon Representation */}
        <div className="text-4xl mb-4 text-brown-800">🪄</div>
        
        <h2 className="text-xl font-serif text-brown-900 mb-8 tracking-widest border-b-2 border-brown-300 inline-block pb-2">
            지도자 소개
        </h2>

        <div className="space-y-4 font-serif text-lg text-brown-900">
            <div>
                <span className="font-bold mr-2">지휘</span> 
                <span className="mx-2">|</span>
                <span>이중호</span>
            </div>
            
            <div>
                <span className="font-bold mr-2">사회</span>
                <span className="mx-2">|</span>
                <span>김병재</span>
            </div>

            <div className="pt-6 mt-6 border-t border-brown-200">
                <p className="text-brown-600 font-bold mb-4 text-base">지도강사</p>
                <div className="text-base text-brown-800 leading-relaxed">
                    <span className="inline-block mx-1">이소연(Vn1)</span>
                    <span className="inline-block mx-1">윤경희(Vn2)</span>
                    <span className="inline-block mx-1">김민지(Fl)</span>
                    <span className="inline-block mx-1">김동찬(Cl)</span>
                    <span className="inline-block mx-1">서동우(Vc)</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};