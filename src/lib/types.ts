export interface PersonalData {
  name: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  resumeUrl: string;
  valueProp: string;
  aboutParagraph: string;
  aboutHighlights: string[];
}

export interface ResearchData {
  title: string;
  status: string;
  bullets: string[];
  techStack: string[];
  repoUrl?: string;
}

export interface ProjectData {
  title: string;
  featured: boolean;
  type: string;
  description: string;
  bullets: string[];
  techStack: string[];
  repoUrl?: string;
  websiteUrl?: string;
  imageUrl?: string;
  images?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceData {
  role: string;
  duration: string;
  description: string;
}

export interface WorkExperienceItem {
  title: string;
  description: string;
  bullets?: string[];
}

export interface ProviderLogo {
  name: string;
  src: string;
}

export interface WorkExperienceData {
  role: string;
  company?: string;
  duration: string;
  items: WorkExperienceItem[];
  techStack?: string[];
  providerLogos?: ProviderLogo[];
}

export interface EducationData {
  institution: string;
  degree: string;
  duration: string;
  details: string;
}

export interface CertificateData {
  title: string;
  issuer: string;
}

export interface PortfolioContent {
  personal: PersonalData;
  research: ResearchData;
  projects: ProjectData[];
  skills: SkillCategory[];
  workExperience: WorkExperienceData[];
  experience: ExperienceData[];
  education: EducationData[];
  certificates: CertificateData[];
}
