
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-tighter">ROHITH<span className="text-blue-500">.</span>SINGH</p>
          <p className="text-slate-500 text-sm mt-1">Built with React, Tailwind CSS, and VIBE.</p>
        </div>

        <p className="text-slate-400 text-xs font-medium">
          &copy; {new Date().getFullYear()} Rohith Singh. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#home" className="text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">Top</a>
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">Source</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
