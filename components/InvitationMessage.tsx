import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MailOpen } from 'lucide-react';

export const InvitationMessage: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative pt-20 pb-10 px-8 bg-beige-100/50 overflow-hidden">
      <div 
        ref={ref}
        className={`relative z-10 flex flex-col items-center text-center scroll-reveal ${
          isVisible ? 'active' : ''
        }`}
      >
        <div className="mb-8 text-brown-400">
            <MailOpen strokeWidth={1} size={28} />
        </div>
        
        <p className="text-brown-700/80 text-sm leading-8 font-light max-w-sm mx-auto mb-10 break-keep text-justify">
            천안청소년복합커뮤니티센터 관장 윤여숭입니다.<br/><br/>
            한 해 동안 음악으로 성장해 온 천안청소년오케스트라 단원들의 노력과 열정을 여러분과 함께 나누고자 합니다.<br/><br/>
            이번 무대는 단원들의 협력과 도전의 결실이 담긴 소중한 공연입니다.<br/>
            아름다운 선율 속에서 청소년들의 가능성과 희망을 함께 느껴주시기 바랍니다.<br/><br/>
            바쁘신 가운데 함께해 주심에 진심으로 감사드립니다.
        </p>
        
        <div className="w-full max-w-sm text-right">
             <p className="text-brown-900 font-serif font-medium leading-relaxed">
                천안시청소년복합커뮤니티센터 관장<br/>
                윤여숭 올림
             </p>
        </div>
      </div>
    </section>
  );
};