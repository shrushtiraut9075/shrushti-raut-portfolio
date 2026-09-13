import React from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { data } = usePortfolioData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              SR
            </div>
            <div>
              <p className="font-extrabold text-base text-slate-900 dark:text-white">
                {data.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {data.roleTitle}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              id="footer-github-icon"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              id="footer-linkedin-icon"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${data.contact.email}`}
              id="footer-email-icon"
              aria-label="Send Email"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Back to top"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright notice required by user */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>© 2026 Shrushti Raut. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
