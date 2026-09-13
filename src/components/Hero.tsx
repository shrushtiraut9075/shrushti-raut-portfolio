import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  ArrowDown, 
  Download, 
  Mail, 
  Sparkles, 
  Github, 
  Linkedin, 
  ExternalLink,
  Terminal,
  Code,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenEditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEditModal }) => {
  const { data } = usePortfolioData();

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[700px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/15 via-sky-500/15 to-purple-500/10 dark:from-indigo-600/20 dark:via-sky-600/15 dark:to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 mb-6 shadow-sm shadow-indigo-500/5 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open for Summer Internships & Software Roles</span>
          <span className="hidden sm:inline text-indigo-400 dark:text-indigo-600">•</span>
          <span className="hidden sm:inline text-slate-600 dark:text-slate-400">2nd Year Computer Engineering</span>
        </div>

        {/* Main Heading & Role */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-400 dark:via-sky-400 dark:to-indigo-300 bg-clip-text text-transparent">{data.name}</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-6 tracking-tight">
          Computer Engineering Student & Aspiring Software Developer
        </p>

        {/* Short Introduction */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          "I enjoy building practical software solutions and exploring Artificial Intelligence, web development, and emerging technologies."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 shadow-md shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Code className="w-4 h-4" />
            View My Projects
          </a>

          <a
            href="#resume"
            id="hero-download-resume-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Download Resume
          </a>

          <a
            href="#contact"
            id="hero-contact-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/60 transition-all transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            Contact Me
          </a>
        </div>

        {/* Social Icons & Highlights */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 max-w-xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Profiles:
            </span>
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              id="hero-github-link"
              title={`Visit GitHub Profile (${data.contact.github})`}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <Github className="w-4 h-4 text-slate-800 dark:text-white group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-600 dark:text-slate-300" />
            </a>

            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              id="hero-linkedin-link"
              title={`Visit LinkedIn Profile (${data.contact.linkedin})`}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800/60 transition-all"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            </a>
          </div>

          <div className="hidden sm:block text-slate-300 dark:text-slate-700">|</div>

          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            <span>BE Computer Engineering</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
          >
            <span>Learn more about me</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
