
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const filtered = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-300">A curated selection of my recent developments.</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 flex-wrap">
          {['all', 'fullstack', 'ai'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === f
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold py-1 px-3 bg-slate-100 dark:bg-slate-950 rounded-lg text-slate-500">#{tag}</span>
                  ))}
                </div>
                <div className="pt-6 mt-auto flex gap-6">
                  <a href={project.liveUrl} target="_blank" className="text-xs font-bold text-blue-500 hover:underline uppercase tracking-wider">Live Demo</a>
                  <a href={project.repoUrl} target="_blank" className="text-xs font-bold opacity-60 hover:opacity-100 uppercase tracking-wider">Source</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
