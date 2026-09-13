import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioDataProvider } from './context/PortfolioDataContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { RecruiterProfiles } from './components/RecruiterProfiles';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditModal } from './components/EditModal';

function PortfolioApp() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalInitialTab, setEditModalInitialTab] = useState('socials');

  const handleOpenEditModal = (tab = 'socials') => {
    setEditModalInitialTab(tab);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenEditModal={() => handleOpenEditModal('socials')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenEditModal={() => handleOpenEditModal('socials')} />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects Showcase */}
        <Projects onOpenEditModal={(projectId) => handleOpenEditModal('projects')} />

        {/* 5. Education */}
        <Education onOpenEditModal={() => handleOpenEditModal('education')} />

        {/* 6. Certifications */}
        <Certifications onOpenEditModal={() => handleOpenEditModal('certs')} />

        {/* 7. Experience / Internships */}
        <Experience onOpenEditModal={() => handleOpenEditModal('experience')} />

        {/* 8. Achievements */}
        <Achievements onOpenEditModal={() => handleOpenEditModal('achievements')} />

        {/* 9. Dedicated GitHub & LinkedIn Profile Section */}
        <RecruiterProfiles onOpenEditModal={() => handleOpenEditModal('socials')} />

        {/* 10. Resume Section */}
        <ResumeSection onOpenEditModal={() => handleOpenEditModal('socials')} />

        {/* 11. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Quick Customizer Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        initialTab={editModalInitialTab}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioDataProvider>
        <PortfolioApp />
      </PortfolioDataProvider>
    </ThemeProvider>
  );
}
