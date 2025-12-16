import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const StarringSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-midnight to-zinc-900">
      <div 
        ref={ref}
        className={`max-w-sm mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl font-serif text-gold-300 text-center mb-12 tracking-wider">
            STARRING
        </h2>

        {/* Conductor */}
        <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gold-500/30 mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <img 
                    src="https://picsum.photos/id/1005/300/300" 
                    alt="Conductor" 
                    className="w-full h-full object-cover grayscale contrast-125"
                />
            </div>
            <div className="space-y-1">
                <span className="text-gold-400 text-xs tracking-widest uppercase">Conductor</span>
                <h3 className="text-xl text-white font-bold">이중호</h3>
            </div>
        </div>

        {/* Soloists Grid */}
        <div className="space-y-12">
            {/* Flute & Clarinet */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/5 backdrop-blur-sm">
                 <h3 className="text-center text-gold-200 font-serif mb-6 border-b border-white/10 pb-2">협연 (Soloists)</h3>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 mb-3 overflow-hidden">
                             <img src="https://picsum.photos/id/64/200/200" alt="Flute" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <p className="text-xs text-gold-500 mb-1">Flute</p>
                        <p className="text-white font-medium">강태윤</p>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-zinc-800 mb-3 overflow-hidden">
                             <img src="https://picsum.photos/id/338/200/200" alt="Clarinet" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <p className="text-xs text-gold-500 mb-1">Clarinet</p>
                        <p className="text-white font-medium">최수연</p>
                    </div>
                 </div>
            </div>

            {/* Violin Group */}
             <div className="bg-white/5 rounded-xl p-6 border border-white/5 backdrop-blur-sm">
                 <h3 className="text-center text-gold-200 font-serif mb-6 border-b border-white/10 pb-2">협연 (Violin)</h3>
                 <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    {[
                        { name: "김선우", img: "1011" },
                        { name: "김연우", img: "1025" },
                        { name: "송유찬", img: "1012" },
                        { name: "이아린", img: "1027" }
                    ].map((person, idx) => (
                         <div key={idx} className="text-center">
                             <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 mb-2 overflow-hidden border border-white/10">
                                 <img src={`https://picsum.photos/id/${person.img}/200/200`} alt="Violin" className="w-full h-full object-cover opacity-80" />
                             </div>
                            <p className="text-white text-sm">{person.name}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};