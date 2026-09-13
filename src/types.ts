export interface Project {
  id: string;
  name: string;
  badge?: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  level?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string; // editable placeholder
  status: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialUrl: string;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  category: 'Hackathons' | 'Technical competitions' | 'Academic achievements' | 'Projects' | 'Workshops';
  title: string;
  subtitle: string;
  date?: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location?: string;
}

export interface PortfolioData {
  name: string;
  roleTitle: string;
  tagline: string;
  about: {
    paragraphs: string[];
    focusAreas: { title: string; desc: string; icon: string }[];
  };
  contact: ContactInfo;
  resumeUrl: string;
  skills: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  experiences: ExperienceItem[];
  achievements: AchievementItem[];
}
