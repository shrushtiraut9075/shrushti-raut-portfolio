import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Edit3, 
  Code2, 
  Network,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface RecruiterProfilesProps {
  onOpenEditModal: () => void;
}

export const RecruiterProfiles: React.FC<RecruiterProfilesProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/30 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Connect & Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
            Professional Profiles for Recruiters
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore my code commits, project repositories, technical write-ups, and academic networking profiles.
          </p>
        </div>

        {/* 2 Big Dedicated Cards: GitHub & LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Profile Card */}
          <div className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 shadow-sm relative group">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Github className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenEditModal}
                    title="Edit GitHub URL"
                    className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Code Repository & Version Control
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-3">
                GitHub Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Inspect my open-source project codebases, Git commit history, clean software architecture, and practical implementations in Python, React, Java, and C++.
              </p>

              {/* URL Preview Box */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs mb-6">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-mono truncate">
                  <Code2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="truncate">{data.contact.github}</span>
                </div>
                <button
                  onClick={() => handleCopy(data.contact.github, 'github')}
                  title="Copy GitHub Link"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                >
                  {copiedLink === 'github' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Action button */}
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              id="profiles-github-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-md transition-all group-hover:shadow-lg"
            >
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm relative group">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenEditModal}
                    title="Edit LinkedIn URL"
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Professional Network & Resume
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-3">
                LinkedIn Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Connect with me on LinkedIn to view my academic milestones, technical posts, recommendations, and discuss potential internship opportunities.
              </p>

              {/* URL Preview Box */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3 text-xs mb-6">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-mono truncate">
                  <Network className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="truncate">{data.contact.linkedin}</span>
                </div>
                <button
                  onClick={() => handleCopy(data.contact.linkedin, 'linkedin')}
                  title="Copy LinkedIn Link"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                >
                  {copiedLink === 'linkedin' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Action button */}
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              id="profiles-linkedin-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all group-hover:shadow-lg"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
