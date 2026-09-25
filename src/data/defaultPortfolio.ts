import { ProfileData, Project, ServiceItem } from '../types/portfolio';

// Generated high fidelity image paths
import heroPortrait from '../assets/images/hero_portrait_designer_1790333644171.jpg';
import projectLuxeLogo from '../assets/images/project_luxe_logo_1790333659837.jpg';
import projectBusinessCard from '../assets/images/project_business_card_1790333678419.jpg';
import projectRamadanPoster from '../assets/images/project_ramadan_poster_1790333694548.jpg';
import projectResumeDesign from '../assets/images/project_resume_design_1790333710502.jpg';

export const DEFAULT_PROFILE: ProfileData = {
  name: 'Sania',
  greeting: "HELLO, I'M",
  titleRole: 'Graphics DESIGNER',
  tagline: 'DESIGNING BRANDS THAT PEOPLE REMEMBER.',
  heroDescription: 'I create visual identities and designs that help businesses stand out, connect with their audience, and leave a lasting impression.',
  aboutTitle: "I'm Sania!",
  aboutBio: 'I am a passionate Graphic Designer specializing in Logo Design, Brand Identity, Social Media Posts, Business Cards, Posters, CV Design, and Presentation Design. My goal is to create modern, clean, and memorable designs that help businesses stand out.',
  birthDate: '2nd August 1999',
  location: 'Pakistan',
  email: 'saniasajid034272@gmail.com',
  phone: '0317-9948934',
  whatsapp: '+923179948934',
  experienceRole: 'Freelance Graphic Designer',
  experiencePeriod: '2024 – Present',
  experienceBulletPoints: [
    '100+ Creative Designs',
    'Brand Identity Projects',
    'Social Media Campaign Designs',
    'Pinterest SEO Graphics',
  ],
  socials: {
    pinterest: 'saniagraphicsdesigner',
    tiktok: '@saniagraphicsdesigner',
    instagram: '@saniagraphicsdesigner',
    behance: 'saniagraphics',
    linkedin: 'sania-designer',
  },
  whyChooseMe: [
    { title: 'Creative Ideas', icon: 'Lightbulb' },
    { title: 'Modern Design', icon: 'Monitor' },
    { title: 'Fast Delivery', icon: 'Clock' },
    { title: 'High Quality', icon: 'Award' },
    { title: 'Client Satisfaction', icon: 'Smile' },
  ],
};

export const DEFAULT_SERVICES: ServiceItem[] = [
  { id: '1', title: 'Logo Design', iconName: 'Feather', description: 'Unique, memorable vector brand marks tailored to your niche.' },
  { id: '2', title: 'Brand Identity', iconName: 'Layers', description: 'Comprehensive design guidelines, color palettes, and typography.' },
  { id: '3', title: 'Business Card Design', iconName: 'CreditCard', description: 'Premium print-ready cards with luxury textures and finishes.' },
  { id: '4', title: 'Social Media Design', iconName: 'Instagram', description: 'High-converting Instagram, Facebook, and LinkedIn post templates.' },
  { id: '5', title: 'Poster & Flyer Design', iconName: 'FileText', description: 'Impactful marketing posters and event brochures that grab attention.' },
  { id: '6', title: 'CV / Resume Design', iconName: 'FileCheck', description: 'ATS-friendly, aesthetically polished resumes that land interviews.' },
  { id: '7', title: 'Presentation Design', iconName: 'Presentation', description: 'Pitch decks and slides with engaging layout and data visualization.' },
  { id: '8', title: 'Pinterest Pins', iconName: 'Pin', description: 'Click-worthy viral Pinterest pin graphics optimized for SEO traffic.' },
  { id: '9', title: 'AI Design', iconName: 'Sparkles', description: 'Generative AI visual creation, prompt styling, and custom art assets.' },
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Luxe Beauty Brand Logo',
    category: 'Logos',
    imageUrl: projectLuxeLogo,
    aspect: '1:1',
    client: 'Luxe Beauty Co.',
    year: '2024',
    description: 'Gold foil luxury brand identity featuring an elegant floral crown symbol and bespoke serif typography for a premium skincare brand.',
    tags: ['Logo Design', 'Luxury', 'Gold Foil', 'Vector'],
  },
  {
    id: 'proj-2',
    title: 'Monochrome Luxe Business Cards',
    category: 'Branding',
    imageUrl: projectBusinessCard,
    aspect: '1:1',
    client: 'Apex Capital & Studio',
    year: '2024',
    description: 'Matte black and foil-stamped minimalist business cards with textured linen paper and subtle debossed details.',
    tags: ['Branding', 'Print Design', 'Stationery', 'Stationery'],
  },
  {
    id: 'proj-3',
    title: 'Ramadan Special Sale Campaign',
    category: 'Posters',
    imageUrl: projectRamadanPoster,
    aspect: '3:4',
    client: 'Modest Haven Boutique',
    year: '2024',
    description: 'High-conversion retail poster designed for holy month promotional sales, featuring deep emerald hues, golden arabesque geometry, and bold typography.',
    tags: ['Poster', 'Campaign', 'Ramadan Sale', 'Social Media'],
  },
  {
    id: 'proj-4',
    title: 'Executive Professional Resume & CV',
    category: 'Resumes',
    imageUrl: projectResumeDesign,
    aspect: '3:4',
    client: 'Creative Director Portfolio',
    year: '2024',
    description: 'Crisp, structured multi-section curriculum vitae layout highlighting technical proficiencies, education, and career milestones with editorial elegance.',
    tags: ['Resume Design', 'CV Layout', 'Editorial', 'Typography'],
  },
];

export { heroPortrait };
