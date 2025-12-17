import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface MemberGroup {
  instrument: string;
  names: string[];
}

const members: MemberGroup[] = [
  {
    instrument: "Violin 1",
    names: [
      "악장 김선우", "고윤서", "권선우", "김다연", "강지윤", "김수현",
      "김연우", "나예원", "손여원", "송유찬", "신지혜", "양지민",
      "엄지은", "유예슬", "유재원", "윤채이", "이승재", "이아린",
      "이유성", "정인아", "조경연", "조민아"
    ]
  },
  {
    instrument: "Violin 2",
    names: [
      "고은서", "강현우", "김규리", "김라율", "김민주", "김소현",
      "김예건", "김예찬", "김지영", "김하람", "백은송", "심희윤",
      "오민재", "오현우", "이루다", "이시후", "이아라", "이예은",
      "이주엘", "이지훈", "이한준", "정승호", "조윤슬", "최서연",
      "최윤하", "황가을"
    ]
  },
  {
    instrument: "Flute",
    names: ["강태윤", "박시율", "윤영민", "이은엘", "황선유"]
  },
  {
    instrument: "Cello",
    names: ["김시우", "민다영", "엄승유", "엄승호", "유아인", "조서연"]
  },
  {
    instrument: "Clarinet",
    names: ["김예헌", "안지원", "양현", "최수연"]
  },
  {
    instrument: "Trumpet",
    names: ["한성현"]
  }
];

export const MemberListSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="relative py-16 px-4 bg-white/30 backdrop-blur-sm">
      <div 
        ref={ref}
        className={`max-w-md mx-auto scroll-reveal ${isVisible ? 'active' : ''}`}
      >
        <h2 className="text-xl font-serif text-center text-brown-900 mb-12 tracking-widest uppercase border-b border-gold-500/30 pb-4 inline-block w-full">
            Orchestra Members
        </h2>

        <div className="space-y-12">
          {members.map((group, idx) => (
            <div key={idx} className="text-center">
                <div className="flex items-center justify-center mb-5">
                    <div className="h-[1px] w-8 bg-gold-500/50"></div>
                    <h3 className="mx-4 text-brown-900 font-serif font-bold text-lg">
                        {group.instrument}
                    </h3>
                    <div className="h-[1px] w-8 bg-gold-500/50"></div>
                </div>
                
                {/* 4-Column Grid Layout - Critical Requirement */}
                <div className="grid grid-cols-4 gap-2 text-xs text-brown-900/90 font-medium">
                    {group.names.map((name, nameIdx) => (
                        <div key={nameIdx} className="p-1.5 rounded-sm hover:bg-gold-500/10 transition-colors">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};