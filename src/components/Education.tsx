import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Edit3, Award } from 'lucide-react';

interface EducationProps {
  onOpenEditModal: () => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();
  const edu = data.education[0];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
            Education Timeline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Rigorous undergraduate studies in Computer Engineering laying theoretical and practical software foundations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-12">
          {/* Timeline Node marker */}
          <div className="relative">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-4 ring-white dark:ring-slate-950">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            {/* Main Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    {edu.status}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {edu.period}
                  </span>

                  <button
                    onClick={onOpenEditModal}
                    title="Edit education details"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Institution / College */}
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                <BookOpen className="w-4 h-4" />
                <span>{edu.institution}</span>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Academic Highlights & Focus Areas:
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (Java/C++)',
                  'Database Management Systems',
                  'Operating Systems',
                  'Discrete Mathematics'
                ].map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
