
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PORTFOLIO_DATA.roles[roleIndex];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % PORTFOLIO_DATA.roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-[85vh] flex items-center px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 text-center md:text-left">
          <div>
            <p className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Welcome to my Portfolio</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-gradient">{PORTFOLIO_DATA.name}</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mt-6 min-h-[1.5em]">
              I am <span className="text-blue-500">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Crafting the next generation of intelligent web experiences with modern architecture and AI integration.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 transition-all hover:scale-105">
              Explore Projects
            </a>
            <a
              href="/Rohith_Singh_CV.pdf"
              download
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>📄</span> Download CV
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold rounded-2xl transition-all">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
              <img
                src="/profile.png"
                alt="Rohith Singh"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Orbs */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-float">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-float delay-500">
              <span className="text-2xl">🧠</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
