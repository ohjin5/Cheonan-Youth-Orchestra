import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationMessage } from './components/InvitationMessage';
import { ProgramHighlights } from './components/ProgramHighlights';
import { LeadershipSection } from './components/LeadershipSection';
import { MemberListSection } from './components/MemberListSection';
import { LocationInfo } from './components/LocationInfo';
import { FooterSection } from './components/FooterSection';
import { Share2, Music } from 'lucide-react';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // BGM Setup - Source: media/bgm.mp3
    audioRef.current = new Audio('media/bgm.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playAudio = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        // Remove listeners if play succeeded
        cleanupListeners();
      } catch (e) {
        console.log("Autoplay blocked, waiting for interaction...");
      }
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
      document.removeEventListener('scroll', playAudio);
    };

    // Attempt autoplay
    playAudio();

    // Fallback: Play on first interaction
    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);
    document.addEventListener('scroll', playAudio);

    return () => {
      cleanupListeners();
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
        audioRef.current.play().catch(e => console.log("Play failed", e));
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

  // Generate random notes - Low Density (7 notes)
  const renderFloatingNotes = () => {
    const notes = ['♪', '♫', '♩', '♬', '𝄞', '𝄢'];
    return Array.from({ length: 7 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-gold-500 select-none animate-float-note font-serif opacity-0"
        style={{
          left: `${Math.random() * 90 + 5}%`,
          fontSize: `${Math.random() * 1.5 + 1}rem`,
          animationDelay: `-${Math.random() * 15}s`, // Varied delay
          animationDuration: `${Math.random() * 8 + 15}s`,
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

        {/* Floating Music Control Button (Fixed Top-Right) */}
        <div className="fixed top-[20px] right-[20px] z-50">
           <button
            onClick={toggleMusic}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-md border-2 ${
              isPlaying 
                ? 'bg-black-900/80 border-gold-500 animate-spin-slow shadow-[0_0_15px_rgba(197,160,89,0.5)]' 
                : 'bg-gray-200/80 border-gray-400'
            }`}
            aria-label="Toggle Music"
          >
             <Music size={24} className={isPlaying ? "text-gold-500" : "text-gray-500"} />
          </button>
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
            
            {/* Share Button (Bottom) */}
            <div className="px-6 pb-12 pt-4">
              <button 
                onClick={handleShare}
                className="w-full bg-brown-900 text-beige-100 py-4 rounded-none border border-gold-500/30 flex items-center justify-center gap-3 shadow-lg hover:bg-brown-900/90 transition-colors uppercase tracking-widest text-sm font-bold"
              >
                <Share2 size={18} />
                초대장 공유하기
              </button>
            </div>
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