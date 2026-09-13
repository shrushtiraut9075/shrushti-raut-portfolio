import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { AchievementItem } from '../types';
import { 
  Trophy, 
  Code2, 
  GraduationCap, 
  Laptop, 
  Users, 
  Calendar, 
  Edit3, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface AchievementsProps {
  onOpenEditModal: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Hackathons: <Trophy className="w-5 h-5 text-amber-500" />,
  'Technical competitions': <Code2 className="w-5 h-5 text-indigo-500" />,
  'Academic achievements': <GraduationCap className="w-5 h-5 text-emerald-500" />,
  Projects: <Laptop className="w-5 h-5 text-sky-500" />,
  Workshops: <Users className="w-5 h-5 text-purple-500" />
};

export const Achievements: React.FC<AchievementsProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Hackathons', 'Technical competitions', 'Academic achievements', 'Projects', 'Workshops'];

  const filteredAchievements = selectedCategory === 'all'
    ? data.achievements
    : data.achievements.filter((a) => a.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
              Milestones & Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Achievements & Competitions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 max-w-xl">
              Competitive hackathons, algorithmic contests, university milestones, and technical workshops.
            </p>
          </div>

          <button
            onClick={onOpenEditModal}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Achievements</span>
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Milestones' : cat}
            </button>
          ))}
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm relative group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {categoryIcons[item.category] || <Trophy className="w-5 h-5 text-amber-500" />}
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date || 'Active Milestone'}</span>
                </div>

                <button
                  onClick={onOpenEditModal}
                  title="Edit details"
                  className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
