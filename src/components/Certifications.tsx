import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Award, ExternalLink, Calendar, Building, Plus, Edit3 } from 'lucide-react';

interface CertificationsProps {
  onOpenEditModal: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
              Certifications & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
              Certificates & Learning
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-2 max-w-xl">
              Verified credentials in programming, machine learning, and software frameworks.
            </p>
          </div>

          <button
            onClick={onOpenEditModal}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit / Add Certificates</span>
          </button>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm relative group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>

                  {cert.isPlaceholder && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                      Editable Slot
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mb-2">
                  <Building className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="font-medium">{cert.organization}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <span>View Certificate Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenEditModal}
                  title="Edit this certificate"
                  className="text-xs text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
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
