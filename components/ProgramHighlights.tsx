import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Music } from 'lucide-react';

interface ProgramItem {
  title: string;
  composer: string;
  details?: string;
  isIntermission?: boolean;
}

const programs: ProgramItem[] = [
  { title: "Symphonic Poem ‘Finlandia’ Op.26", composer: "Jean Sibelius" },
  { title: "Brandenburg Concerto No. 3", composer: "J.S. Bach" },
  { title: "Hungarian Dance No.5", composer: "Johannes Brahms" },
  { title: "New World Symphony", composer: "Antonio Dvorak" },
  { title: "", composer: "", isIntermission: true },
  { title: "Arirang Fantasy", composer: "최성환" },
  { 
    title: "Kazabue (바람피리)", 
    composer: "Solo Flute 강태윤 / Clarinet 최수연",
    details: "Michiru Oshima"
  },
  { 
    title: "Kiki’s Delivery Service (마녀 배달부 키키)", 
    composer: "Solo Violin 김선우, 김연우, 송유찬, 이아린",
    details: "Joe Hisaishi"
  },
  { title: "Danzón No. 2", composer: "Arturo Márquez" },
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

        <div className="space-y-6">
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
                            <h3 className="text-brown-900 font-serif text-lg font-medium leading-tight mb-2">
                                {item.title}
                            </h3>
                            <p className="text-brown-600 text-sm italic font-serif">
                                {item.composer}
                            </p>
                            {item.details && (
                                <p className="text-brown-400 text-xs uppercase mt-1 tracking-wider">
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