import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Project } from '../types';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Edit3, 
  Layers, 
  Compass, 
  Briefcase, 
  Wallet,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsProps {
  onOpenEditModal: (projectId?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'web'>('all');

  const filteredProjects = data.projects.filter((project) => {
    if (selectedFilter === 'ai') return project.techStack.includes('Artificial Intelligence') || project.name.includes('AI');
    if (selectedFilter === 'web') return !project.name.includes('AI');
    return true;
  });

  const getProjectIcon = (id: string) => {
    if (id === 'tripmate') return <Compass className="w-6 h-6 text-indigo-500" />;
    if (id === 'opportunityx') return <Briefcase className="w-6 h-6 text-purple-500" />;
    return <Wallet className="w-6 h-6 text-emerald-500" />;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Software & AI Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 max-w-xl">
              Practical applications built to solve genuine problems, blending artificial intelligence, clean UI, and robust logic.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 self-start md:self-auto">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({data.projects.length})
            </button>
            <button
              onClick={() => setSelectedFilter('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'ai'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI & Intelligent Systems
            </button>
            <button
              onClick={() => setSelectedFilter('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === 'web'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web Applications
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm relative group ${
                project.isFeatured ? 'ring-1 ring-indigo-500/20' : ''
              }`}
            >
              {/* Header inside card */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 shadow-inner">
                    {getProjectIcon(project.id)}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60">
                        {project.badge}
                      </span>
                    )}
                    <button
                      onClick={() => onOpenEditModal(project.id)}
                      title="Edit project URLs & details"
                      className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  "{project.description}"
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Features:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Area: Tech Stack & Action Links */}
              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-live-${project.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-${project.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
                      title="View GitHub Repository (Editable)"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                {/* Quick note on link status */}
                {project.id === 'tripmate' ? (
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-2 text-center font-medium">
                    ✓ Verified Active AI Studio Deployment
                  </p>
                ) : (
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">
                    URLs are editable placeholders
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
