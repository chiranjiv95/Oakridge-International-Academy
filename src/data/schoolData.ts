import { StatItem, HighlightPillar, Milestone, LeadershipMember, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: 'Oakridge International Academy',
  shortName: 'Oakridge Academy',
  motto: 'Ad Astra Per Aspera — Nurturing Inquiring Minds, Global Leaders',
  foundedYear: 1988,
  address: '4500 Academic Boulevard, Silicon Valley Campus, CA 94025',
  phone: '+1 (555) 839-2000',
  admissionsPhone: '+1 (555) 839-2020',
  email: 'admissions@oakridgeacademy.edu',
  generalEmail: 'info@oakridgeacademy.edu',
  schoolHours: 'Mon - Fri: 8:00 AM - 4:00 PM',
  officeHours: 'Mon - Fri: 7:30 AM - 5:00 PM | Sat: 9:00 AM - 1:00 PM',
  emergencyHotline: '+1 (555) 839-9911',
  studentCount: 1450,
  facultyCount: 135,
  campusSize: '32 Acres',
  affiliations: ['IB World Continuum', 'Cambridge Assessment International', 'CIS Accredited', 'NEASC Member', 'National Honor Society'],
  socials: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  }
};

export const KEY_STATS: StatItem[] = [
  {
    id: 'stat-1',
    value: '99.4%',
    label: 'Graduation Rate',
    iconName: 'GraduationCap',
    description: 'Over 95% matriculating to Tier-1 & Ivy League universities'
  },
  {
    id: 'stat-2',
    value: '1 : 11',
    label: 'Student-Faculty Ratio',
    iconName: 'Users',
    description: 'Personalized mentorship in small, seminar-style cohorts'
  },
  {
    id: 'stat-3',
    value: '42+',
    label: 'AP & IB Courses',
    iconName: 'BookOpen',
    description: 'Comprehensive college-credit pathways and dual diplomas'
  },
  {
    id: 'stat-4',
    value: '100%',
    label: 'University Acceptance',
    iconName: 'Award',
    description: 'Global admissions across US, UK, Canada, Europe & Asia'
  },
  {
    id: 'stat-5',
    value: '50+',
    label: 'Clubs & Societies',
    iconName: 'Sparkles',
    description: 'Robotics, Model UN, Orchestra, Debate, Eco-Club & more'
  },
  {
    id: 'stat-6',
    value: '38',
    label: 'Nationalities',
    iconName: 'Globe',
    description: 'A vibrant international community fostering intercultural empathy'
  }
];

export const HIGHLIGHT_PILLARS: HighlightPillar[] = [
  {
    id: 'pillar-stem',
    title: 'STEM & Applied Innovation',
    badge: 'Future-Ready',
    description: 'State-of-the-art AI, IoT, robotics, and advanced biotech wet labs that prepare students for emerging global technologies and research.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-humanities',
    title: 'Global Leadership & Arts',
    badge: 'Humanities & Culture',
    description: 'Rigorous debate, philosophy, studio arts, and musical ensembles cultivating expressive, socially conscious leaders with global perspective.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-athletics',
    title: 'Championship Athletics',
    badge: 'Wellness & Tenacity',
    description: 'Olympic aquatic center, FIFA-grade turf stadium, tennis academy, and cross-country trails promoting resilience, teamwork, and health.',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-wellbeing',
    title: 'Holistic Student Well-Being',
    badge: 'Mind & Character',
    description: 'Integrated socio-emotional learning, personalized college counselors, mindfulness sanctuaries, and peer-to-peer mentorship programs.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Dr. Eleanor Vance, Ph.D.',
    role: 'Head of School & Principal',
    credentials: 'Ph.D. in Educational Leadership (Stanford), M.Ed. (Harvard)',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'We do not merely prepare students for university; we inspire them to architect a more just, sustainable, and luminous world.',
    message: 'Welcome to Oakridge International Academy. For over three decades, our campus has stood as a beacon of academic rigor, boundless curiosity, and compassionate leadership. Here, every student is seen, challenged, and celebrated.',
    email: 'principal@oakridgeacademy.edu'
  },
  {
    id: 'lead-2',
    name: 'Prof. Marcus Holloway',
    role: 'Dean of Academics & Innovation',
    credentials: 'M.Sc. Physics (MIT), B.Ed. (Oxford)',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    quote: 'Curiosity is the engine of intellect. Our interdisciplinary curriculum transforms passive learners into active creators.',
    email: 'academics@oakridgeacademy.edu'
  },
  {
    id: 'lead-3',
    name: 'Dr. Sophia Reyes, Ed.D.',
    role: 'Dean of Student Life & Wellbeing',
    credentials: 'Ed.D. Child Psychology (Columbia University)',
    image: 'https://images.unsplash.com/photo-1580894732415-467975871239?auto=format&fit=crop&w=600&q=80',
    quote: 'A child who feels psychologically secure and deeply valued will naturally achieve extraordinary intellectual heights.',
    email: 'studentlife@oakridgeacademy.edu'
  },
  {
    id: 'lead-4',
    name: 'Arthur Sterling',
    role: 'Director of Global Admissions & College Counseling',
    credentials: 'Former Admissions Officer at Yale University, M.A. Counseling',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    quote: 'Finding the right university is not about prestige metrics; it is about discovering the ecosystem where your specific gifts will flourish.',
    email: 'admissions.director@oakridgeacademy.edu'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '1988',
    title: 'The Foundation',
    description: 'Founded with 65 students as an independent preparatory school committed to inquiry-based education.'
  },
  {
    year: '1997',
    title: 'IB Continuum Authorization',
    description: 'Earned official authorization for the International Baccalaureate (IB) Primary, Middle Years, and Diploma programs.'
  },
  {
    year: '2008',
    title: 'Campus Expansion & Science Wing',
    description: 'Inaugurated the 32-acre modern campus, featuring Olympic sports facilities and 8 cutting-edge science and research laboratories.'
  },
  {
    year: '2016',
    title: 'Applied Robotics & Maker Center',
    description: 'Launched the Center for Emerging Technologies with dedicated 3D prototyping, AI labs, and competitive robotics arenas.'
  },
  {
    year: '2022',
    title: 'Sustainable Campus Initiative',
    description: 'Achieved 100% net-zero campus energy status, LEED Platinum certification, and organic farm-to-table dining.'
  },
  {
    year: 'Present',
    title: 'Global Leadership Hub',
    description: 'Educating 1,450+ students representing 38 nations, with alumni making impact across world-renowned research, arts, and enterprise.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Intellectual Integrity',
    desc: 'Upholding relentless honesty, critical examination of evidence, and courageous pursuit of truth.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Compassionate Empathy',
    desc: 'Fostering profound understanding across cultures, championing equity, and actively serving local and global communities.',
    icon: 'Heart'
  },
  {
    title: 'Innovative Tenacity',
    desc: 'Embracing complex challenges with resilience, creative problem solving, and an iterative mindset.',
    icon: 'Zap'
  },
  {
    title: 'Global Citizenship',
    desc: 'Cultivating stewards of humanity and the planet who act with sustainability, ethics, and mutual respect.',
    icon: 'Globe2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'David & Catherine Chen',
    role: 'Parents of Maya (Class of 2025) & Lucas (Class of 2028)',
    relation: 'Parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    content: 'Oakridge provided our children with more than academic excellence. The teachers nurtured their individual curiosity and taught them how to think analytically. Maya received acceptances to Princeton and MIT, but more importantly, she is a kind, grounded young leader.',
    yearOrClass: 'Parents of 2 Oakridge Scholars'
  },
  {
    id: 't-2',
    name: 'Siddharth Narayan',
    role: 'Stanford Graduate & Founder of CleanWater AI',
    relation: 'Alumni',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    content: 'The independent research and robotics program at Oakridge taught me how to tackle open-ended real world problems. The faculty gave me the freedom to experiment, fail, and build. That exact mindset led to founding my startup today.',
    yearOrClass: 'Class of 2019'
  },
  {
    id: 't-3',
    name: 'Zoe Kensington',
    role: 'Senior Prefect & Student Council President',
    relation: 'Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    content: 'What makes Oakridge special is the community. Whether you are in the chemistry lab late at night or rehearsing for the spring musical, you are surrounded by passionate peers and teachers who genuinely believe in you.',
    yearOrClass: 'Class of 2026'
  }
];
