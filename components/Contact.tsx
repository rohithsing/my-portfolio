
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl lg:text-6xl font-black">
          Let's build something <span className="text-gradient underline decoration-blue-500/30">amazing</span> together.
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I'm currently available for freelance projects or professional opportunities. Drop me a line and let's discuss your next idea.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <a
            href={`https://wa.me/${PORTFOLIO_DATA.whatsapp}?text=${encodeURIComponent("Hi Rohith! I'd like to connect with you.")}`}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-3xl transition-all shadow-2xl shadow-green-500/40 hover:scale-105 active:scale-95"
          >
            💬 Chat on WhatsApp
            <span className="group-hover:translate-x-1 transition-transform"></span>
          </a>

          <div className="flex gap-8 items-center pt-8 flex-wrap justify-center">
            {Object.entries(PORTFOLIO_DATA.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors capitalize font-bold text-sm tracking-widest"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
