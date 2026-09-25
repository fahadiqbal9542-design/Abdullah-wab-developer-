export type ProjectCategory = 'All' | 'Frontend' | 'Full-Stack' | 'E-Commerce' | 'UI/UX' | 'APIs';

export interface DeveloperProject {
  id: string;
  title: string;
  category: string;
  image: string;
  websiteUrl?: string;
  description: string;
  client: string;
  year: string;
  deliverables?: string[];
}

export interface SkillDetail {
  full: string;
  rating: string;
  projects: string;
  note: string;
  color: string;
  tip: string;
  codeSnippet?: string;
  architectureFeatures?: string[];
}

export interface ClientProposal {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceType: string;
  budget: number;
  complexity: string;
  message: string;
  status: 'In Progress' | 'Completed' | 'Review' | 'Pending';
  date: string;
}

export interface ToastMessage {
  id: string;
  text: string;
  type: 'success' | 'error' | 'info';
}
