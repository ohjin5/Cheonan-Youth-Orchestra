import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationMessage } from './components/InvitationMessage';
import { ActionButtons } from './components/ActionButtons';
import { ProgramHighlights } from './components/ProgramHighlights';
import { GallerySection } from './components/GallerySection';
import { LeadershipSection } from './components/LeadershipSection';
import { MemberListSection } from './components/MemberListSection';
import { LocationInfo } from './components/LocationInfo';
import { FooterSection } from './components/FooterSection';
import { Share2 } from 'lucide-react';

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
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-500 border-[2px] border-[#3E2723] overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #fffbf0 0%, #f2e6d0 50%, #c5a059 100%)',
                boxShadow: isPlaying 
                    ? '0 0 20px rgba(197, 160, 89, 0.8)' 
                    : '0 4px 15px rgba(197, 160, 89, 0.4)'
            }}
            aria-label="Toggle Music"
          >
             <img 
               src="img/music.png" 
               alt="Music Control" 
               className={`w-[60%] h-[60%] object-contain ${isPlaying ? 'animate-spin-slow' : ''}`}
             />
          </button>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
            <HeroSection />
            <InvitationMessage />
            <ActionButtons onShare={handleShare} />
            <ProgramHighlights />
            <LeadershipSection />
            <MemberListSection />
            <GallerySection />
            <LocationInfo />
            <FooterSection />
        </div>

        {/* Custom Toast Notification */}
        <div 
          className={`fixed bottom-[30px] left-1/2 transform -translate-x-1/2 bg-[rgba(0,0,0,0.8)] text-white px-6 py-3 rounded-[30px] text-sm font-serif tracking-wide shadow-xl transition-opacity duration-300 pointer-events-none z-50 ${showShareToast ? 'opacity-100' : 'opacity-0'}`}
        >
          초대장 링크가 복사되었습니다
        </div>
      </div>
    </div>
  );
};

export default App;