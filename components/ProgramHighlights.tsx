import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProgramItem {
  titleEn: string;
  titleKo: string;
  composerEn: string;
  composerKo: string;
  details?: string;
  isIntermission?: boolean;
}

const programs: ProgramItem[] = [
  { 
    titleEn: "Symphonic Poem ‘Finlandia’ Op.26", 
    titleKo: "교향시 ‘핀란디아’ Op.26",
    composerEn: "Jean Sibelius",
    composerKo: "장 시벨리우스"
  },
  { 
    titleEn: "Brandenburg Concerto No. 3", 
    titleKo: "브란덴부르크 협주곡 3번",
    composerEn: "J.S. Bach",
    composerKo: "요한 세바스찬 바흐"
  },
  { 
    titleEn: "Hungarian Dance No.5", 
    titleKo: "헝가리 무곡 5번",
    composerEn: "Johannes Brahms",
    composerKo: "요하네스 브람스"
  },
  { 
    titleEn: "New World Symphony", 
    titleKo: "신세계 교향곡",
    composerEn: "Antonio Dvorak",
    composerKo: "안토닌 드보르작"
  },
  { titleEn: "", titleKo: "", composerEn: "", composerKo: "", isIntermission: true },
  { 
    titleEn: "Arirang Fantasy", 
    titleKo: "아리랑 환상곡",
    composerEn: "Choi Sung-hwan",
    composerKo: "최성환"
  },
  { 
    titleEn: "Kazabue", 
    titleKo: "바람피리",
    composerEn: "Michiru Oshima",
    composerKo: "미치루 오시마",
    details: "Solo Flute 강태윤 / Clarinet 최수연"
  },
  { 
    titleEn: "Kiki’s Delivery Service", 
    titleKo: "마녀 배달부 키키",
    composerEn: "Joe Hisaishi",
    composerKo: "히사이시 조",
    details: "Solo Violin 김선우, 김연우, 송유찬, 이아린"
  },
  { 
    titleEn: "Danzón No. 2", 
    titleKo: "단손 2번",
    composerEn: "Arturo Márquez",
    composerKo: "아르투로 마르케스"
  },
];

export const ProgramHighlights: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-16 px-6">
      <div 
        ref={ref}
        className={`max-w-md mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
            <h2 className="text-2xl font-serif text-brown-900 tracking-[0.2em] uppercase inline-block border-b-2 border-brown-300 pb-2">
                Program
            </h2>
        </div>

        <div className="space-y-8">
            {programs.map((item, index) => (
                <div key={index}>
                    {item.isIntermission ? (
                        <div className="py-8 flex items-center justify-center opacity-60">
                            <div className="h-px w-8 bg-brown-900"></div>
                            <span className="mx-4 font-serif italic text-brown-700">Intermission</span>
                            <div className="h-px w-8 bg-brown-900"></div>
                        </div>
                    ) : (
                        <div className="text-center mb-6">
                            <h3 className="text-brown-900 font-serif text-lg leading-tight mb-2">
                                <span className="font-bold block text-xl mb-1">{item.titleEn}</span>
                                <span className="text-sm font-normal text-brown-700">{item.titleKo}</span>
                            </h3>
                            <p className="text-brown-600 text-sm font-serif mt-2">
                                {item.composerEn} <span className="mx-1 text-brown-400">/</span> {item.composerKo}
                            </p>
                            {item.details && (
                                <p className="text-brown-500 text-xs font-medium mt-2 bg-brown-50 inline-block px-3 py-1 rounded-full">
                                    {item.details}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};