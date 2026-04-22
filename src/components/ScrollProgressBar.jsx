import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 w-full z-[1001] pointer-events-none bg-slate-100" 
      style={{ top: '75px', height: '2px' }}
    >
      <div 
        className="h-full bg-gradient-to-r from-[#1ABC9C] via-[#000075] to-[#c9a84c] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(26,188,156,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
