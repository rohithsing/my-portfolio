
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-300">My toolbelt is focused on building performant, modern, and intelligent applications.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-3xl mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-950 rounded-xl text-sm font-medium border border-slate-100 dark:border-slate-800 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
