
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
        <a href="#home" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          ROHITH<span className="text-blue-500">.</span>SINGH
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity">About</a>
          <a href="#skills" className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity">Skills</a>
          <a href="#projects" className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity">Projects</a>
          <a href="#contact" className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity">Contact</a>

          <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2"></div>

          <button onClick={toggleTheme} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-200/30 dark:bg-slate-800/30">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-slide-in">
          <div className="p-8 flex flex-col space-y-6">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black">Contact</a>
            <div className="pt-4 flex items-center justify-end">
              <button onClick={toggleTheme} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                {isDarkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
