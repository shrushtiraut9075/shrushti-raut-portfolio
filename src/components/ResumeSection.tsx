import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Edit3, 
  CheckCircle2, 
  GraduationCap, 
  Code, 
  Sparkles,
  Eye,
  Calendar,
  Mail,
  Share2
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenEditModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleDownload = () => {
    // If the path is a placeholder, provide a clean fallback notification/download trigger
    const link = document.createElement('a');
    link.href = data.resumeUrl;
    link.download = `${data.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
            Professional Resume
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Download the official PDF resume or review the digital resume overview below.
          </p>
        </div>

        {/* Download Action Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 border-indigo-200/70 dark:border-indigo-900/50 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/25">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Shrushti Raut – Resume.pdf
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Current PDF Path: <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-indigo-600 dark:text-indigo-400">{data.resumeUrl}</code>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleDownload}
              id="resume-download-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>

            <button
              onClick={onOpenEditModal}
              title="Update Resume PDF Path or Link"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Edit3 className="w-4 h-4 text-indigo-500" />
              <span>Change PDF Path</span>
            </button>
          </div>
        </div>

        {/* Digital Resume Sheet Preview Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 shadow-md border border-slate-200/90 dark:border-slate-700/90 relative">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Digital Snapshot
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                {data.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {data.roleTitle}
              </p>
            </div>

            <div className="text-right text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              <p>{data.contact.email}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">2026 Undergraduate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Education & Skills */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  Education
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {data.education[0].degree}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {data.education[0].status}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {data.education[0].institution} • {data.education[0].period}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-indigo-500" />
                  Technical Core
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Languages: </span>
                    <span className="text-slate-600 dark:text-slate-400">Python, Java, C/C++, JavaScript</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Front-End: </span>
                    <span className="text-slate-600 dark:text-slate-400">React, HTML5, CSS3, Tailwind CSS</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200">AI & Algorithms: </span>
                    <span className="text-slate-600 dark:text-slate-400">Artificial Intelligence, ML Fundamentals, Data Structures & Algorithms</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Developer Tools: </span>
                    <span className="text-slate-600 dark:text-slate-400">Git, GitHub, VS Code</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Projects Snapshot */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  Key Projects Highlight
                </h4>
                <div className="space-y-3">
                  {data.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {proj.name}
                        </span>
                        {proj.liveUrl && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-semibold">
                            Deployed
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick print / bottom notice */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>Suitable for campus placements, technical internships, and hackathons.</span>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
            >
              <Eye className="w-3.5 h-3.5" />
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
