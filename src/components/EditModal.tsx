import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { 
  X, 
  Save, 
  RotateCcw, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Trophy,
  Code
} from 'lucide-react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, initialTab = 'socials' }) => {
  const { 
    data, 
    updateSocials, 
    updateResumeUrl, 
    updateProject, 
    updateCertification, 
    updateExperience, 
    updateAchievement, 
    updateEducation,
    resetToDefaults,
    isCustomized
  } = usePortfolioData();

  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [copiedJson, setCopiedJson] = useState(false);

  // Form states initialized from current data
  const [socials, setSocials] = useState({
    email: data.contact.email,
    github: data.contact.github,
    linkedin: data.contact.linkedin,
    location: data.contact.location || ''
  });

  const [resumeUrl, setResumeUrl] = useState(data.resumeUrl);

  const [institution, setInstitution] = useState(data.education[0]?.institution || '');
  const [eduStatus, setEduStatus] = useState(data.education[0]?.status || '');

  if (!isOpen) return null;

  const handleSaveSocials = (e: React.FormEvent) => {
    e.preventDefault();
    updateSocials(socials);
    updateResumeUrl(resumeUrl);
    updateEducation(institution, eduStatus);
  };

  const handleCopyCleanData = () => {
    const code = `export const initialPortfolioData = ${JSON.stringify(data, null, 2)};`;
    navigator.clipboard.writeText(code);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-card rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Quick Customizer & Details Editor</span>
              {isCustomized && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  Customized
                </span>
              )}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Easily update your URLs, college name, certificate links, and internship details.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCleanData}
              title="Copy current data configuration"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedJson ? 'Copied Config!' : 'Export Config'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 flex overflow-x-auto gap-2 py-2.5 bg-slate-50/50 dark:bg-slate-950/30">
          {[
            { id: 'socials', label: 'Links & Resume', icon: <Github className="w-4 h-4" /> },
            { id: 'projects', label: 'Project Links', icon: <Code className="w-4 h-4" /> },
            { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
            { id: 'certs', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
            { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
            { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Socials & Resume */}
          {activeTab === 'socials' && (
            <form onSubmit={handleSaveSocials} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  value={socials.github}
                  onChange={(e) => {
                    const next = { ...socials, github: e.target.value };
                    setSocials(next);
                    updateSocials({ github: e.target.value });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                  placeholder="https://github.com/shrushtiraut"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={socials.linkedin}
                  onChange={(e) => {
                    const next = { ...socials, linkedin: e.target.value };
                    setSocials(next);
                    updateSocials({ linkedin: e.target.value });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                  placeholder="https://linkedin.com/in/shrushti-raut"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={socials.email}
                  onChange={(e) => {
                    const next = { ...socials, email: e.target.value };
                    setSocials(next);
                    updateSocials({ email: e.target.value });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                  placeholder="shrushtiraut9075@gmail.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Resume PDF File Path / Download Link
                </label>
                <input
                  type="text"
                  value={resumeUrl}
                  onChange={(e) => {
                    setResumeUrl(e.target.value);
                    updateResumeUrl(e.target.value);
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                  placeholder="/Shrushti_Raut_Resume.pdf"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  You can specify a local static asset (e.g. <code>/resume.pdf</code>) or a Google Drive / cloud URL.
                </p>
              </div>
            </form>
          )}

          {/* TAB 2: Project Links */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div key={project.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {project.name}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Live Demo URL
                      </label>
                      <input
                        type="text"
                        value={project.liveUrl || ''}
                        onChange={(e) => updateProject(project.id, { liveUrl: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        GitHub Repository URL
                      </label>
                      <input
                        type="text"
                        value={project.githubUrl || ''}
                        onChange={(e) => updateProject(project.id, { githubUrl: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Education */}
          {activeTab === 'education' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  College / University Name
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => {
                    setInstitution(e.target.value);
                    updateEducation(e.target.value, eduStatus);
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                  placeholder="e.g. Pune Institute of Computer Technology (PICT)"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Academic Status
                </label>
                <input
                  type="text"
                  value={eduStatus}
                  onChange={(e) => {
                    setEduStatus(e.target.value);
                    updateEducation(institution, e.target.value);
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
                  placeholder="Second Year Computer Engineering"
                />
              </div>
            </div>
          )}

          {/* TAB 4: Certificates */}
          {activeTab === 'certs' && (
            <div className="space-y-4">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Certificate Name
                      </label>
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => updateCertification(cert.id, { name: e.target.value, isPlaceholder: false })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Issuing Organization
                      </label>
                      <input
                        type="text"
                        value={cert.organization}
                        onChange={(e) => updateCertification(cert.id, { organization: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Issue Date
                      </label>
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Verification Link
                      </label>
                      <input
                        type="text"
                        value={cert.credentialUrl}
                        onChange={(e) => updateCertification(cert.id, { credentialUrl: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Role Title
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => updateExperience(exp.id, { role: e.target.value, isPlaceholder: false })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={exp.organization}
                        onChange={(e) => updateExperience(exp.id, { organization: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) => updateExperience(exp.id, { duration: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: Achievements */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              {data.achievements.map((ach) => (
                <div key={ach.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {ach.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{ach.date}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        value={ach.title}
                        onChange={(e) => updateAchievement(ach.id, { title: e.target.value, isPlaceholder: false })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                        Subtitle / Event
                      </label>
                      <input
                        type="text"
                        value={ach.subtitle}
                        onChange={(e) => updateAchievement(ach.id, { subtitle: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={ach.description}
                      onChange={(e) => updateAchievement(ach.id, { description: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={resetToDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Default
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              ✓ Changes save automatically
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
            >
              Done / Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
