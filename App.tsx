import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationMessage } from './components/InvitationMessage';
import { ProgramHighlights } from './components/ProgramHighlights';
import { LeadershipSection } from './components/LeadershipSection';
import { MemberListSection } from './components/MemberListSection';
import { LocationInfo } from './components/LocationInfo';
import { FooterSection } from './components/FooterSection';
import { Music, Music2, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Classical background music
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/08/23/audio_d14f63c81e.mp3'); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction required):", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '제6회 천안청소년오케스트라 정기연주회',
        text: '꿈과 열정이 빚어낸 여섯 번째 하모니에 초대합니다.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  // Generate random notes for background - Updated to Gold Color
  const renderFloatingNotes = () => {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯', '𝄞', '𝄢'];
    return Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-gold-500 select-none animate-float-note font-serif opacity-0"
        style={{
          left: `${Math.random() * 90 + 5}%`,
          fontSize: `${Math.random() * 1.5 + 1}rem`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 8 + 12}s`,
        }}
      >
        {notes[Math.floor(Math.random() * notes.length)]}
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex justify-center bg-stone-100 font-serif text-brown-900 overflow-hidden">
      {/* Mobile Container */}
      <div className="w-full max-w-[540px] bg-beige-100 relative shadow-2xl overflow-y-auto no-scrollbar scroll-smooth">
        
        {/* Faint Staff Lines Background (Global) */}
        <div className="music-staff-bg"></div>

        {/* Animated Floating Gold Notes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 h-full w-full max-w-[540px] mx-auto mix-blend-multiply">
            {renderFloatingNotes()}
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed top-6 right-4 z-50 flex flex-col gap-4 max-w-md w-full items-end pointer-events-none">
          <div className="pointer-events-auto flex flex-col gap-3 mr-2 sm:mr-0">
             <button
              onClick={toggleMusic}
              className={`p-3 rounded-full backdrop-blur-sm border shadow-lg transition-all duration-500 ${
                isPlaying 
                ? 'bg-gold-500/80 border-gold-500 text-white animate-pulse-slow' 
                : 'bg-black-900/40 border-white/20 text-gold-500 hover:bg-black-900/60'
              }`}
              aria-label="Toggle Music"
            >
              {isPlaying ? <Music2 size={20} /> : <Music size={20} />}
            </button>
            
            <button
              onClick={handleShare}
              className="p-3 rounded-full bg-beige-100/80 backdrop-blur-sm border border-brown-900/10 text-brown-900 shadow-md transition-all active:scale-95"
              aria-label="Share"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
            <HeroSection />
            <InvitationMessage />
            <ProgramHighlights />
            <LeadershipSection />
            <MemberListSection />
            <LocationInfo />
            <FooterSection />
        </div>

        {/* Toast Notification */}
        <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black-900/90 text-gold-500 px-6 py-3 rounded-full text-sm font-serif tracking-wide shadow-xl transition-opacity duration-300 pointer-events-none z-50 ${showShareToast ? 'opacity-100' : 'opacity-0'}`}>
          초대장 링크가 복사되었습니다
        </div>
      </div>
    </div>
  );
};

export default App;