import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MailOpen } from 'lucide-react';

export const InvitationMessage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-8 bg-beige-100/50 overflow-hidden">
      <div 
        ref={ref}
        className={`relative z-10 transition-all duration-1000 delay-200 transform flex flex-col items-center text-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 text-brown-400">
            <MailOpen strokeWidth={1} size={28} />
        </div>

        <h2 className="text-lg font-serif text-brown-900 mb-8 leading-relaxed break-keep">
            음악은 때로는 위로가 되고,<br/>
            때로는 희망이 됩니다.
        </h2>
        
        <p className="text-brown-700/80 text-sm leading-8 font-light max-w-xs mx-auto mb-10 break-keep">
            지난 1년, 학업과 연습을 병행하며<br/>
            땀 흘린 우리 청소년들이 만드는<br/>
            감동의 무대에 여러분을 초대합니다.
        </p>

        <div className="font-serif text-brown-800 text-sm">
            <p className="mb-1 text-xs text-brown-500">천안시청소년복합커뮤니티센터 관장</p>
            <p className="font-bold text-base">윤여숭</p>
        </div>
      </div>
    </section>
  );
};