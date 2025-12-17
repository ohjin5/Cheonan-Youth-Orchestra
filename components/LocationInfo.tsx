import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin } from 'lucide-react';

export const LocationInfo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6">
      <div 
        ref={ref}
        className={`max-w-sm mx-auto map-buttons scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        <h2 className="text-center text-xl font-serif text-brown-900 mb-12 tracking-widest uppercase border-b-2 border-gold-500 inline-block pb-2">
            오시는 길
        </h2>

        <div className="space-y-8 text-center bg-white/40 p-6 rounded-lg border border-brown-900/5 backdrop-blur-sm shadow-sm">
            {/* Place */}
            <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-brown-900 mb-2" strokeWidth={1.5} />
                <h4 className="text-xs text-brown-500 uppercase tracking-wider mb-2">Location</h4>
                <p className="text-brown-900 text-lg font-bold font-serif leading-tight">
                    천안시청소년복합커뮤니티센터<br/>대공연장
                </p>
            </div>
            
             <div className="w-full h-[1px] bg-brown-900/10 mx-auto" />

             {/* Navigation Buttons */}
            <div className="w-full space-y-3 pt-2">
                {/* Naver Map Button */}
                <a 
                    href="https://map.naver.com/p/search/천안시청소년복합커뮤니티센터"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#03C75A] text-white py-4 rounded-md transition-all duration-300 shadow-md active:scale-95 hover:shadow-lg hover:bg-[#02b351]"
                >
                    <span className="font-bold text-lg">N</span>
                    <span className="font-medium">네이버 지도로 보기</span>
                </a>
                
                {/* Kakao Map Button */}
                <a 
                    href="https://map.kakao.com/link/search/천안시청소년복합커뮤니티센터"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#FEE500] hover:bg-[#FDD835] text-[#3E2723] py-4 rounded-md transition-all duration-300 shadow-md active:scale-95 hover:shadow-lg"
                >
                    <MapPin size={18} fill="#3E2723" />
                    <span className="font-medium">카카오내비로 안내</span>
                </a>
            </div>
        </div>

        <div className="mt-8 text-center px-4">
             <p className="text-xs text-brown-500 leading-relaxed font-serif italic">
                ※ 주차 공간이 협소할 수 있으니<br/>가급적 대중교통을 이용해 주시기 바랍니다.
            </p>
        </div>

      </div>
    </section>
  );
};