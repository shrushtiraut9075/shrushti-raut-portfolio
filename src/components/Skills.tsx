import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  Code, 
  Globe, 
  BrainCircuit, 
  Wrench, 
  Terminal, 
  Layers, 
  Check,
  Cpu
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Code className="w-5 h-5 text-indigo-500" />,
  'Web Development': <Globe className="w-5 h-5 text-sky-500" />,
  'AI & Computer Science': <BrainCircuit className="w-5 h-5 text-purple-500" />,
  Tools: <Wrench className="w-5 h-5 text-amber-500" />
};

export const Skills: React.FC = () => {
  const { data } = usePortfolioData();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
            Skills & Core Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Structured foundation in programming, web development, intelligent systems, and industry-standard tools.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.skills.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
                    {categoryIcons[category.category] || <Terminal className="w-5 h-5 text-indigo-500" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills inside Category */}
                <div className="mt-5 space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{category.skills.length} core technologies</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">Verified in Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
