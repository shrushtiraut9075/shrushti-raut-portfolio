import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Briefcase, Calendar, Building2, CheckCircle2, Edit3, Target, Sparkles } from 'lucide-react';

interface ExperienceProps {
  onOpenEditModal: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
              Work & Practical Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Experience & Internships
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 max-w-xl">
              Practical industry exposure, engineering internships, and collaborative team roles.
            </p>
          </div>

          <button
            onClick={onOpenEditModal}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Experience Details</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Cards */}
          <div className="lg:col-span-8 space-y-6">
            {data.experiences.map((exp) => (
              <div
                key={exp.id}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Technical Experience
                      </span>
                      {exp.isPlaceholder && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          Template Placeholder
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {exp.duration}
                    </span>
                    <button
                      onClick={onOpenEditModal}
                      title="Edit this experience"
                      className="p-1 rounded text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>{exp.organization}</span>
                </div>

                {/* Description Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {exp.description.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right sidebar: What I'm Looking For in Internships */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card rounded-2xl p-6 shadow-sm border border-indigo-200/60 dark:border-indigo-900/40">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-3">
                <Target className="w-5 h-5" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Target Internship Roles
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Actively seeking summer internships and undergraduate developer opportunities where I can apply strong programming and problem-solving skills.
              </p>

              <div className="space-y-2">
                {[
                  'Software Engineer Intern (SDE)',
                  'Web Development Intern (React / Full Stack)',
                  'AI / Machine Learning Engineering Intern',
                  'Frontend Developer Intern'
                ].map((role, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
                >
                  Reach Out with Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
