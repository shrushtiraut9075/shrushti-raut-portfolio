import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, Project, CertificationItem, ExperienceItem, AchievementItem } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

interface PortfolioDataContextType {
  data: PortfolioData;
  updateSocials: (socials: { email?: string; github?: string; linkedin?: string; location?: string }) => void;
  updateResumeUrl: (url: string) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  updateCertification: (id: string, updated: Partial<CertificationItem>) => void;
  updateExperience: (id: string, updated: Partial<ExperienceItem>) => void;
  updateAchievement: (id: string, updated: Partial<AchievementItem>) => void;
  updateEducation: (institution: string, status: string) => void;
  resetToDefaults: () => void;
  isCustomized: boolean;
}

const PortfolioDataContext = createContext<PortfolioDataContextType | undefined>(undefined);

const STORAGE_KEY = 'shrushti_portfolio_custom_data_v1';

export const PortfolioDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialPortfolioData;
  });

  const [isCustomized, setIsCustomized] = useState<boolean>(() => {
    return !!localStorage.getItem(STORAGE_KEY);
  });

  const saveToStorage = (newData: PortfolioData) => {
    setData(newData);
    setIsCustomized(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const updateSocials = (socials: { email?: string; github?: string; linkedin?: string; location?: string }) => {
    saveToStorage({
      ...data,
      contact: {
        ...data.contact,
        ...socials
      }
    });
  };

  const updateResumeUrl = (url: string) => {
    saveToStorage({
      ...data,
      resumeUrl: url
    });
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    const updatedProjects = data.projects.map((p) => (p.id === id ? { ...p, ...updated } : p));
    saveToStorage({
      ...data,
      projects: updatedProjects
    });
  };

  const updateCertification = (id: string, updated: Partial<CertificationItem>) => {
    const updatedCerts = data.certifications.map((c) => (c.id === id ? { ...c, ...updated } : c));
    saveToStorage({
      ...data,
      certifications: updatedCerts
    });
  };

  const updateExperience = (id: string, updated: Partial<ExperienceItem>) => {
    const updatedExp = data.experiences.map((e) => (e.id === id ? { ...e, ...updated } : e));
    saveToStorage({
      ...data,
      experiences: updatedExp
    });
  };

  const updateAchievement = (id: string, updated: Partial<AchievementItem>) => {
    const updatedAch = data.achievements.map((a) => (a.id === id ? { ...a, ...updated } : a));
    saveToStorage({
      ...data,
      achievements: updatedAch
    });
  };

  const updateEducation = (institution: string, status: string) => {
    const updatedEdu = data.education.map((e) => ({ ...e, institution, status }));
    saveToStorage({
      ...data,
      education: updatedEdu
    });
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialPortfolioData);
    setIsCustomized(false);
  };

  return (
    <PortfolioDataContext.Provider
      value={{
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
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
};
