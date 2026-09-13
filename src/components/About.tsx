import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  Code2, 
  Sparkles, 
  Layout, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Lightbulb
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-indigo-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
  Layout: <Layout className="w-5 h-5 text-sky-500" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-500" />,
  Rocket: <Rocket className="w-5 h-5 text-rose-500" />
};

export const About: React.FC = () => {
  const { data } = usePortfolioData();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
            Passionate About Technology & Problem Solving
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A dedicated Computer Engineering student building thoughtful software, experimenting with AI, and pursuing continuous technical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Background & Aspirations
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {data.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* What I Bring to Teams */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  What I bring to an engineering team
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Disciplined algorithmic thinking & DSA basics',
                    'Strong grasp of OOP & modern JavaScript/Python',
                    'Clean component structure & responsive design',
                    'High curiosity for Artificial Intelligence & ML',
                    'Clear technical communication & team spirit',
                    'Rapid learner eager to tackle new tech stacks'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick stats / academic highlight card */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  2nd
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Year Computer Eng.
                </span>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">
                  3+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Featured Projects
                </span>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  100%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Dedication to Code
                </span>
              </div>
            </div>
          </div>

          {/* Core Areas of Interest Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Core Areas of Interest
            </h3>

            {data.about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-4 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 group-hover:scale-105 transition-transform shrink-0">
                    {iconMap[area.icon] || <Code2 className="w-5 h-5 text-indigo-500" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
