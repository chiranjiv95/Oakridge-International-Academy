export type PageId =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'faculty'
  | 'facilities'
  | 'gallery'
  | 'news-events'
  | 'contact';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
  description?: string;
}

export interface HighlightPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  image: string;
  message?: string;
  quote?: string;
  credentials: string;
  email?: string;
}

export interface AcademicDivision {
  id: string;
  name: string;
  grades: string;
  ageGroup: string;
  tagline: string;
  description: string;
  image: string;
  keyFeatures: string[];
  subjects: string[];
  headOfDivision: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  division: 'primary' | 'middle' | 'high' | 'ib';
  department: string;
  description: string;
  credits?: string;
  level: string;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  timeline: string;
  description: string;
  requirements: string[];
  iconName: string;
}

export interface FeeTier {
  gradeLevel: string;
  annualTuition: string;
  admissionFee: string;
  developmentFee: string;
  includes: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'admissions' | 'academics' | 'general' | 'transport';
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: 'Leadership' | 'Sciences' | 'Mathematics' | 'Humanities & Languages' | 'Arts & Music' | 'Physical Education & Athletics' | 'Student Counseling';
  qualification: string;
  experienceYears: number;
  bio: string;
  image: string;
  email: string;
  subjectsTaught: string[];
  awards?: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Academic' | 'Sports' | 'Arts & Media' | 'Wellness & Living';
  tagline: string;
  description: string;
  features: string[];
  specs: string;
  image: string;
  galleryImages: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus Life' | 'Sports & Athletics' | 'Arts & Culture' | 'STEM & Robotics' | 'Graduation & Awards' | 'Field Expeditions';
  date: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Academics' | 'Achievements' | 'Community' | 'Announcements';
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface SchoolEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Parent-Teacher' | 'Holiday';
  audience: string;
  rsvpRequired: boolean;
  speakerOrOrganizer?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: 'Parent' | 'Alumni' | 'Student';
  image: string;
  content: string;
  yearOrClass: string;
}
