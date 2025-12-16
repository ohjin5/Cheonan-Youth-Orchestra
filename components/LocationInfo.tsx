import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Navigation } from 'lucide-react';

export const LocationInfo: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6">
      <div 
        ref={ref}
        className={`max-w-sm mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
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

             {/* Navigation Buttons (Deep Links) */}
            <div className="w-full space-y-3 pt-2">
                <a 
                    href="tmap://search?name=천안시청소년복합커뮤니티센터"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-md transition-all duration-300 shadow-md active:scale-95 hover:shadow-lg"
                >
                    <Navigation size={18} className="text-white" />
                    <span className="font-medium">티맵(T map)으로 안내</span>
                </a>
                
                <a 
                    href="https://map.kakao.com/link/search/천안시청소년복합커뮤니티센터"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#FEE500] hover:bg-[#FDD835] text-brown-900 py-4 rounded-md transition-all duration-300 shadow-md active:scale-95 hover:shadow-lg"
                >
                    <MapPin size={18} />
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