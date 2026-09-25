export type ProjectCategory = 
  | 'All'
  | 'Logos'
  | 'Branding'
  | 'Social Media'
  | 'Posters'
  | 'Resumes'
  | 'Presentations'
  | 'Packaging';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  aspect?: '1:1' | '3:4' | '4:3' | '16:9';
  client?: string;
  year?: string;
  description?: string;
  tags?: string[];
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  category: 'software' | 'creative';
  icon?: string;
  color?: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  greeting: string;
  titleRole: string;
  tagline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutBio: string;
  birthDate: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  experienceRole: string;
  experiencePeriod: string;
  experienceBulletPoints: string[];
  socials: {
    pinterest: string;
    tiktok: string;
    instagram: string;
    behance?: string;
    linkedin?: string;
  };
  whyChooseMe: {
    title: string;
    icon: string;
  }[];
}
