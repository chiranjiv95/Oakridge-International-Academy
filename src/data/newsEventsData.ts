import { NewsArticle, SchoolEvent } from '../types';

export const LATEST_ANNOUNCEMENTS = [
  'Admissions for Academic Session 2026-2027: Online applications open for Classes V to IX.',
  'Malda Model Madrasah students secure top 10 positions in State Level Science Model Exhibition.',
  'Higher Secondary (WBCHSE) 2026 Results: 100% pass rate with 85+ distinction scores.',
  'Aikyashree & SVMCM Scholarship verification drive currently ongoing in the main administrative office.'
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Malda Model Madrasah Students Clinch 1st Prize at State Level Science Exhibition',
    excerpt: 'Our student innovation team engineered a low-cost automated IoT solar irrigation and flood warning model to take top state honors.',
    content: `Students of Malda Government Model Madrasah (English Medium) have secured the 1st prize at the West Bengal State Science Exhibition. Guided by Dr. Tanmoy Banerjee and Ms. Priyanka Sen, the student team demonstrated an ingenious IoT-based solar water filtration and automated flood warning telemetry system tailored for North Bengal river basins.

Headmaster Md. Raisuddin congratulated the victorious scholars: "This victory demonstrates that our English-medium government model madrasah fosters world-class scientific temper and technological innovation among young rural and semi-urban learners."

The team will now represent West Bengal at the National Children's Science Congress.`,
    category: 'Achievements',
    author: 'Dr. Tanmoy Banerjee',
    authorRole: 'Senior Physics Lecturer',
    publishedDate: 'August 18, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['Science Exhibition', 'STEM', 'State Award', 'Innovation']
  },
  {
    id: 'news-2',
    title: '100% Pass Rate in High Madrasah & WBCHSE Higher Secondary 2026 Examinations',
    excerpt: 'Students celebrate stellar performance with over 45 students scoring above 90% and multiple medical/engineering entrance selections.',
    content: `We are immensely proud to announce the outstanding results of the 2026 Board Examinations for Malda Government Model Madrasah (English Medium). 100% of our Class X (High Madrasah) and Class XII (WBCHSE) students have successfully cleared their examinations with first-division and distinction marks.

Notable highlights include:
• 48 Students scored above 90% aggregate in Higher Secondary Science
• 18 Students qualified for NEET Medical admissions across state and national medical colleges
• 14 Students qualified for JEE Main and WBJEE engineering entrance ranks
• 100% enrollment in Aikyashree and Swami Vivekananda Merit-cum-Means Scholarships

Assistant Headmaster Dr. Anisur Rahman commended both the faculty and parents for their tireless dedication.`,
    category: 'Academics',
    author: 'Md. Raisuddin',
    authorRole: 'Headmaster',
    publishedDate: 'August 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['Board Results', 'WBCHSE', 'NEET Qualifiers', 'Excellence']
  },
  {
    id: 'news-3',
    title: 'Smart Classroom & Digital Language Lab Modernization Completed',
    excerpt: 'State-of-the-art interactive digital panels and a 60-seat ICT language lab inaugurated under the Minority Affairs & Madrasah Education Department.',
    content: `Under the patronship of the Department of Minority Affairs & Madrasah Education, Government of West Bengal, Malda Government Model Madrasah has completed the full digitization of its senior secondary classrooms.

The newly inaugurated ICT complex includes 60 networked terminals, interactive 75-inch touchscreen digital teaching boards, and an advanced audio-visual English language phonetics lab.`,
    category: 'Community',
    author: 'Ms. Priyanka Sen',
    authorRole: 'Director of ICT Hub',
    publishedDate: 'July 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Smart Classrooms', 'Digital India', 'ICT Lab', 'Infrastructure']
  },
  {
    id: 'news-4',
    title: 'Admissions Open for Academic Session 2026-2027: Class V to IX & Class XI (10+2)',
    excerpt: 'Official notification released for online registration and lottery/merit selection as per West Bengal Government guidelines.',
    content: `Malda Government Model Madrasah (English Medium) announces the commencement of admission procedures for the upcoming academic session.

Prospective students and guardians are invited to review the eligibility criteria and submit applications via the online portal or directly at the school administrative desk.

Key Highlights:
• 100% English-medium instruction with subsidized government fee structure
• State-of-the-art science laboratories and smart digital learning
• Hostel accommodation available for meritorious outstation students
• Seamless facilitation of Aikyashree, Kanyashree, and SVMCM government scholarships.`,
    category: 'Announcements',
    author: 'Admissions Desk',
    authorRole: 'Administrative Office',
    publishedDate: 'July 15, 2026',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Admissions', 'Notice', 'Govt Model School', 'English Medium']
  },
  {
    id: 'news-5',
    title: 'Malda Model Madrasah Clinches District Interschool Football Tournament',
    excerpt: 'Our football team emerged victorious with a commanding 3-1 victory in the championship final held at the district sports stadium.',
    content: `In a scintillating final match of the District Interschool Football Championship, Malda Government Model Madrasah defeated their opponents 3-1. Striker Arman Mondal scored two goals, while goalkeeper Tariq Anwar made several crucial saves to seal the championship.

Coach Subrata Mondal praised the team's discipline, tactical preparation, and sportsmanship.`,
    category: 'Achievements',
    author: 'Shri Subrata Mondal',
    authorRole: 'Physical Education Teacher',
    publishedDate: 'June 30, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Athletics', 'Football', 'Champions', 'District Sports']
  }
];

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: 'Annual Science & Innovation Exhibition 2026',
    description: 'Students across all classes demonstrate working models in renewable energy, robotics, life sciences, and mathematics.',
    date: 'September 12, 2026',
    time: '10:30 AM – 4:00 PM IST',
    location: 'Central Auditorium & Science Lab Grounds',
    category: 'Academic',
    audience: 'Students, Parents & General Public',
    rsvpRequired: false,
    speakerOrOrganizer: 'Science Department & Dr. Anisur Rahman'
  },
  {
    id: 'evt-2',
    title: 'Inter-School English Debate & Quiz Championship',
    description: 'Welcoming secondary and higher secondary debate teams from across Malda district on contemporary scientific and social topics.',
    date: 'September 26 - 27, 2026',
    time: '11:00 AM – 3:30 PM Daily',
    location: 'Central Library Hall',
    category: 'Cultural',
    audience: 'Participating School Teams & Scholars',
    rsvpRequired: true,
    speakerOrOrganizer: 'Literary Society & Ms. Nasima Begum'
  },
  {
    id: 'evt-3',
    title: 'Rabindra-Nazrul Cultural Evening & Foundation Celebrations',
    description: 'An evening of patriotic songs, classical poetry recitations, and cultural drama by Model Madrasah students.',
    date: 'October 15, 2026',
    time: '4:30 PM – 7:30 PM IST',
    location: 'Rabindra-Nazrul Cultural Hall',
    category: 'Cultural',
    audience: 'Open to All Students, Guardians & Community',
    rsvpRequired: false,
    speakerOrOrganizer: 'Cultural Committee & Headmaster'
  },
  {
    id: 'evt-4',
    title: 'Parent-Teacher Council & Academic Review Meet (Term 1)',
    description: 'Collaborative consultation between guardians and subject teachers to discuss formative assessment marks and board exam preparation.',
    date: 'October 28 - 29, 2026',
    time: '11:30 AM – 3:30 PM IST',
    location: 'Respective Classrooms & Assembly Hall',
    category: 'Parent-Teacher',
    audience: 'Guardians of Enrolled Students',
    rsvpRequired: true,
    speakerOrOrganizer: 'Academic Committee'
  },
  {
    id: 'evt-5',
    title: 'NEET / JEE & WBJEE Mock Diagnostic Test Series',
    description: 'Intensive full-syllabus diagnostic simulation examination for Class XI and XII Science stream aspirants.',
    date: 'November 8, 2026',
    time: '10:00 AM – 1:00 PM IST',
    location: 'Examination Hall & ICT Lab',
    category: 'Academic',
    audience: 'Class XI & XII Science Students',
    rsvpRequired: false,
    speakerOrOrganizer: 'Competitive Coaching Cell'
  },
  {
    id: 'evt-6',
    title: 'Annual Sports Meet & Athletic Championship',
    description: 'Track and field competitions, march-past, 100m/200m/400m races, high jump, shot put, and inter-house trophy presentation.',
    date: 'November 20, 2026',
    time: '9:30 AM – 4:30 PM IST',
    location: 'Main Sports Stadium Grounds',
    category: 'Sports',
    audience: 'Students, Guardians, Alumni & Guests',
    rsvpRequired: false,
    speakerOrOrganizer: 'Sports Committee & Shri Subrata Mondal'
  }
];

export const NEWS_CATEGORIES = ['All News', 'Academics', 'Achievements', 'Community', 'Announcements'] as const;
export const EVENT_CATEGORIES = ['All Events', 'Academic', 'Sports', 'Cultural', 'Parent-Teacher'] as const;
