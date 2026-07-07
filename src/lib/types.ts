export interface PersonalData {
  name: string;
  headline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
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
  company?: string;
  duration: string;
  description: string;
  bullets?: string[];
  techStack?: string[];
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
  workExperience: ExperienceData[];
  experience: ExperienceData[];
  education: EducationData[];
  certificates: CertificateData[];
}
