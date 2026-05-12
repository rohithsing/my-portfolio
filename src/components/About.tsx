
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-4xl font-black">About Me</h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>{PORTFOLIO_DATA.about}</p>
            <p>I believe in the power of continuous learning. Every project I undertake is an opportunity to push boundaries and implement cleaner, more efficient code.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-4xl font-black text-blue-500">**</p>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-60">Years Exp.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-4xl font-black text-emerald-500">5+</p>
              <p className="text-sm font-semibold uppercase tracking-wider opacity-60">Projects Built</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white dark:border-slate-800">
            <img
              src={`${import.meta.env.BASE_URL}stage.JPG`}
              alt="Rohith Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
