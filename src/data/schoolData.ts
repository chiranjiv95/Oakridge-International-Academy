import { StatItem, HighlightPillar, Milestone, LeadershipMember, Testimonial } from '../types';

export const SCHOOL_INFO = {
  name: 'Malda Government Model Madrasah (English Medium)',
  shortName: 'Malda Model Madrasah',
  motto: 'Knowledge, Character, and Excellence — Fostering Modern English-Medium Education',
  foundedYear: 1915,
  address: 'Chandan Park, P.O. English Bazar, District - Malda, West Bengal 732101, India',
  phone: '+91 (03512) 220422',
  admissionsPhone: '+91 94340 12345',
  email: 'maldamodelmadrasah@gmail.com',
  generalEmail: 'info@maldamodelmadrasah.edu.in',
  schoolHours: 'Mon - Fri: 10:40 AM - 4:30 PM | Sat: 10:40 AM - 2:00 PM',
  officeHours: 'Mon - Sat: 10:00 AM - 5:00 PM',
  emergencyHotline: '+91 (03512) 220422',
  studentCount: 1250,
  facultyCount: 58,
  campusSize: '15 Acres',
  affiliations: [
    'West Bengal Board of Madrasah Education (WBBME)',
    'West Bengal Council of Higher Secondary Education (WBCHSE)',
    'Dept. of Minority Affairs & Madrasah Education, Govt. of West Bengal',
    'ICT @ Schools & Smart Classroom Initiative',
    'National Talent Search & State Olympiad Center'
  ],
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
    value: '100%',
    label: 'Board Pass Rate',
    iconName: 'GraduationCap',
    description: 'Consistent distinction scores in WBBME High Madrasah and WBCHSE Higher Secondary Examinations'
  },
  {
    id: 'stat-2',
    value: '1 : 22',
    label: 'Student-Teacher Ratio',
    iconName: 'Users',
    description: 'Dedicated guidance by PSC/WBMSC certified postgraduate subject specialists'
  },
  {
    id: 'stat-3',
    value: '100%',
    label: 'English Medium Instruction',
    iconName: 'BookOpen',
    description: 'Modern NCERT/WBBME aligned curriculum delivered in English with multilingual proficiency'
  },
  {
    id: 'stat-4',
    value: '85+',
    label: 'Competitive Qualifiers',
    iconName: 'Award',
    description: 'Students excelling in NEET, JEE Main, WBJEE, CUET, and premier central university entrances'
  },
  {
    id: 'stat-5',
    value: '100%',
    label: 'Govt. Scholarship Coverage',
    iconName: 'Sparkles',
    description: 'Full enablement of Aikyashree, Kanyashree, Shikshashree, and SVMCM merit scholarships'
  },
  {
    id: 'stat-6',
    value: '15 Acres',
    label: 'Green Model Campus',
    iconName: 'Globe',
    description: 'State-of-the-art smart classrooms, composite science labs, ICT computer hub & sports grounds'
  }
];

export const HIGHLIGHT_PILLARS: HighlightPillar[] = [
  {
    id: 'pillar-stem',
    title: 'Modern STEM & Digital ICT Labs',
    badge: 'Technology-Enabled',
    description: 'Equipped with cutting-edge Physics, Chemistry, Biology laboratories, and high-speed broadband ICT computer centers preparing students for modern digital careers.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-humanities',
    title: 'English Fluency & Multilingual Arts',
    badge: 'Language & Culture',
    description: 'Comprehensive English language immersion alongside rigorous mastery in Bengali, English, and modern language arts through debates, creative writing, and drama.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-athletics',
    title: 'Sports & District Athletics',
    badge: 'Fitness & Leadership',
    description: 'Sprawling outdoor playing fields for football, cricket, volleyball, badminton, and track athletics fostering team spirit and physical fitness.',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pillar-wellbeing',
    title: 'Ethics, Character & Student Welfare',
    badge: 'Values & Discipline',
    description: 'Nurturing ethical integrity, social harmony, hygienic mid-day meal nutrition, and dedicated student counseling under state government welfare standards.',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Md. Raisuddin',
    role: 'Headmaster & Academic In-Charge',
    credentials: 'M.Sc. (Physics), B.Ed., State Educational Administration Specialist',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    quote: 'Our mission is to provide world-class English-medium education to every aspiring student in Malda, empowering them to excel in national competitive examinations and lead with moral integrity.',
    message: 'Welcome to Malda Government Model Madrasah (English Medium). Established as a flagship institution under the Department of Minority Affairs & Madrasah Education, Government of West Bengal, we blend modern scientific inquiry with timeless ethical values.',
    email: 'headmaster@maldamodelmadrasah.edu.in'
  },
  {
    id: 'lead-2',
    name: 'Dr. Anisur Rahman',
    role: 'Assistant Headmaster & Lead Coordinator (Sciences)',
    credentials: 'Ph.D. in Chemistry (University of Calcutta), M.Sc., B.Ed.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    quote: 'Scientific temper and conceptual clarity are the cornerstones of modern learning. Our laboratories nurture inquisitive minds.',
    email: 'academics@maldamodelmadrasah.edu.in'
  },
  {
    id: 'lead-3',
    name: 'Sultana Khatun, M.A.',
    role: 'Coordinator of Humanities & Language Arts',
    credentials: 'M.A. English Literature (Jadavpur University), B.Ed.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'Language mastery opens doors to global opportunities while anchoring students firmly in their cultural ethos.',
    email: 'humanities@maldamodelmadrasah.edu.in'
  },
  {
    id: 'lead-4',
    name: 'Tariqul Islam',
    role: 'In-Charge of Admissions & State Welfare Scholarships',
    credentials: 'M.Sc. Mathematics, B.Ed., State Nodal Officer for Scholarships',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    quote: 'No deserving student shall be held back. We ensure 100% student enrollment under Kanyashree, Aikyashree, and SVMCM welfare programs.',
    email: 'scholarships@maldamodelmadrasah.edu.in'
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: '1915',
    title: 'Historic Foundation',
    description: 'Established with a vision to impart quality value-based learning in the historic district of Malda.'
  },
  {
    year: '2014',
    title: 'State Government Model Upgrade',
    description: 'Inaugurated as a flagship Government Model Madrasah with comprehensive English-medium instruction under the Minority Affairs & Madrasah Education Department.'
  },
  {
    year: '2017',
    title: 'Modern Science & ICT Complex',
    description: 'Constructed state-of-the-art Physics, Chemistry, Biology laboratories and a digital ICT computer lab with high-speed internet.'
  },
  {
    year: '2020',
    title: 'Higher Secondary (10+2) Stream Expansion',
    description: 'Introduced WBCHSE-recognized Higher Secondary streams in Science, Arts, and Commerce with dedicated NEET/JEE competitive guidance.'
  },
  {
    year: '2023',
    title: 'Smart Classrooms & Solar Campus',
    description: 'Implemented interactive digital smart boards across all divisions and commissioned solar power arrays for eco-friendly operations.'
  },
  {
    year: 'Present',
    title: 'Beacon of Educational Excellence',
    description: 'Educating 1,250+ students with 100% board examination pass rates, top state rankings, and admissions to premier medical and engineering institutes.'
  }
];

export const CORE_VALUES = [
  {
    title: 'Academic Distinction',
    desc: 'Upholding rigorous English-medium instruction, conceptual mastery in sciences, mathematics, and humanities.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Moral Integrity & Empathy',
    desc: 'Inculcating universal ethical values, mutual respect, humility, and selfless service to the community.',
    icon: 'Heart'
  },
  {
    title: 'Scientific Temper & Innovation',
    desc: 'Inspiring curiosity, experimental inquiry, hands-on laboratory discovery, and digital problem solving.',
    icon: 'Zap'
  },
  {
    title: 'Inclusivity & Social Upliftment',
    desc: 'Empowering students from all socio-economic backgrounds with 100% government scholarship enablement.',
    icon: 'Globe2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dr. Farhan Akhtar & Sabina Yasmin',
    role: 'Parents of Rehan (Class XII Science) & Ayesha (Class IX)',
    relation: 'Parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    content: 'Malda Government Model Madrasah has provided our children with exemplary English-medium schooling and top-notch laboratory facilities. The teachers take immense care in preparing students for board exams and competitive entrances like NEET.',
    yearOrClass: 'Parents of 2 Model Madrasah Students'
  },
  {
    id: 't-2',
    name: 'Wasim Akram Mondal',
    role: 'MBBS Scholar (Calcutta Medical College) & State Board Ranker',
    relation: 'Alumni',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    content: 'The solid foundation in Biology and Chemistry from our teachers at Malda Model Madrasah, coupled with continuous mock tests, helped me clear NEET with an outstanding rank. I owe my success to my alma mater.',
    yearOrClass: 'Batch of 2022'
  },
  {
    id: 't-3',
    name: 'Zinia Parveen',
    role: 'School Captain & WBCHSE Topper Candidate',
    relation: 'Student',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    content: 'Studying in an English-medium government model madrasah with interactive smart boards, a peaceful library, and dedicated mentors has transformed my ambition. I am proud to represent Malda Model Madrasah.',
    yearOrClass: 'Class of 2026'
  }
];
