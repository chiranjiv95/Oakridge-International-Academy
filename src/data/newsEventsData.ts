import { NewsArticle, SchoolEvent } from '../types';

export const LATEST_ANNOUNCEMENTS = [
  'Admissions for Academic Year 2026-2027 are now open. Priority application deadline is January 15.',
  'Oakridge Robotics Team Qualifies for FIRST Robotics World Championship in Houston.',
  'Annual Spring Arts Gala tickets now available for reservation at the Symphony Hall Box Office.',
  'Campus Sustainability Report: Oakridge achieves 100% Net-Zero carbon emissions for the 2nd consecutive year.'
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Oakridge Robotics Team Secures 1st Place at National Championship',
    excerpt: 'Our student engineering team engineered an autonomous AI-guided robot to take top honors among 120 global high school competitors.',
    content: `The Oakridge Robotics Syndicate "Titan Bot 4092" has achieved historic victory at the 2026 FIRST National Championship. Over the course of three intensive competition days, the robot demonstrated flawless autonomous visual pathfinding, multi-tier gear articulation, and adaptive machine vision developed entirely by our high school computer science students.

Faculty mentor Dr. Maya Lin-Thornton praised the team's resilience: "What sets our students apart is not just raw coding prowess, but their collaborative poise under immense time pressure. Every line of code and CNC-machined titanium bracket was designed and tested in our Turing Innovation Center."

The team now advances to the World Championships in Houston, where they will compete against elite engineering academies from 34 countries.`,
    category: 'Achievements',
    author: 'Dr. Maya Lin-Thornton',
    authorRole: 'Director of Computer Science',
    publishedDate: 'August 18, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['STEM', 'Robotics', 'Championship', 'Innovation']
  },
  {
    id: 'news-2',
    title: 'Class of 2026 Achieves 100% University Admission with Record Ivy League Placements',
    excerpt: 'Senior scholars celebrate acceptances across Stanford, Harvard, Oxford, MIT, Cambridge, and leading international institutions.',
    content: `We are immensely proud to announce the outstanding university matriculation results for the Oakridge Graduating Class of 2026. This year, 100% of our graduating seniors secured admissions to four-year accredited universities, with over 68% accepted into their first-choice institutions.

Notable highlights include:
• 14 Acceptances to Ivy League Universities
• 22 Acceptances to Stanford, MIT, Caltech & UC Berkeley
• 18 Acceptances to Oxford, Cambridge, Imperial & UCL in the United Kingdom
• Total awarded merit scholarships exceeding $4.8 Million

Director of College Counseling Arthur Sterling noted: "These acceptances reflect our holistic approach to scholarship, independent research fellowships, and personal character development."`,
    category: 'Academics',
    author: 'Arthur Sterling',
    authorRole: 'Director of College Counseling',
    publishedDate: 'August 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['College Placement', 'Academics', 'Graduation', 'Excellence']
  },
  {
    id: 'news-3',
    title: 'Oakridge Inks Global Climate Research Partnership with Stanford Woods Institute',
    excerpt: 'High school biology and environmental science students will contribute real-time watershed telemetry data to university climate models.',
    content: `In an unprecedented collaboration, Oakridge International Academy has joined forces with the Stanford Woods Institute for the Environment. Under this five-year partnership, Oakridge IB Environmental Systems scholars will manage a micro-climate sensing array across our 32-acre campus and adjacent coastal foothills.

Students will analyze real-time soil hydration, particulate air quality, and local carbon sequestering metrics, publishing co-authored research papers with university fellows.`,
    category: 'Community',
    author: 'Dr. Evelyn Montgomery',
    authorRole: 'Chair of Science Department',
    publishedDate: 'July 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Research', 'Environment', 'Partnership', 'Science']
  },
  {
    id: 'news-4',
    title: 'Admissions Open for Academic Year 2026-2027: Campus Tours & Open House Schedule',
    excerpt: 'Join us for our Fall Open House series, featuring division masterclasses, faculty roundtables, and interactive student-led campus tours.',
    content: `Oakridge International Academy is delighted to open applications for the upcoming academic cycle. We invite prospective families to discover our transformative educational model during our upcoming Fall Open House sessions.

During the Open House, families will have the opportunity to:
• Tour our 32-acre research campus and Olympic athletic grounds
• Observe live inquiry seminars across Pre-K, Middle School, and the IB Diploma
• Meet Department Chairs, College Counselors, and Head of School Dr. Eleanor Vance
• Learn about merit scholarship opportunities and need-based financial aid.`,
    category: 'Announcements',
    author: 'Admissions Office',
    authorRole: 'Oakridge Admissions',
    publishedDate: 'July 15, 2026',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Admissions', 'Open House', 'Campus Tour']
  },
  {
    id: 'news-5',
    title: 'Varsity Soccer Team Clinches State Cup Championship in Thrilling Overtime Finish',
    excerpt: 'Oakridge Knights rally from a second-half deficit to capture the State Title 3-2 in front of a capacity crowd at Knights Stadium.',
    content: `Under the floodlights of our Championship Turf Stadium, the Oakridge Knights varsity soccer team completed an undefeated season by capturing the 2026 State Cup. Captain Julian Ortiz scored the game-winning header in the 88th minute.

Athletic Director Coach Bradley commended both teams for exceptional sportsmanship and tactical grit throughout the championship tournament.`,
    category: 'Achievements',
    author: 'Coach Marcus Bradley',
    authorRole: 'Athletic Director',
    publishedDate: 'June 30, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Athletics', 'Soccer', 'Knights', 'Champions']
  }
];

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: 'Fall Open House & Interactive Campus Showcase',
    description: 'Prospective families are invited to experience our classrooms, laboratory demonstrations, and meet division leadership.',
    date: 'September 12, 2026',
    time: '9:00 AM – 1:00 PM PST',
    location: 'Symphony Hall & Campus Quadrangle',
    category: 'Academic',
    audience: 'Prospective Families & Students',
    rsvpRequired: true,
    speakerOrOrganizer: 'Admissions Team & Dr. Eleanor Vance'
  },
  {
    id: 'evt-2',
    title: '38th Annual Oakridge Global Model UN Conference (OAK-MUN)',
    description: 'Welcoming over 600 student delegates from 40 schools to debate international human rights, cybersecurity, and climate accords.',
    date: 'September 26 - 27, 2026',
    time: '8:30 AM – 5:30 PM Daily',
    location: 'Athena Learning Commons & Amphitheater',
    category: 'Cultural',
    audience: 'Middle & High School Delegates',
    rsvpRequired: true,
    speakerOrOrganizer: 'Oakridge MUN Secretariat'
  },
  {
    id: 'evt-3',
    title: 'Autumn Symphony & Choral Gala: Masterworks in Harmony',
    description: 'An evening of classical and contemporary orchestral performances featuring the 75-member Symphony Orchestra and Chamber Choir.',
    date: 'October 15, 2026',
    time: '7:00 PM – 9:30 PM PST',
    location: 'The Symphony Hall (Auditorium)',
    category: 'Cultural',
    audience: 'Open to All Community & Guests',
    rsvpRequired: false,
    speakerOrOrganizer: 'Maestro Alberto Rossi'
  },
  {
    id: 'evt-4',
    title: 'Parent-Teacher Academic Growth Conferences (Term 1)',
    description: 'Individual 20-minute collaborative consultations between parents, advisors, and subject faculty to review holistic student progress.',
    date: 'October 28 - 29, 2026',
    time: '1:00 PM – 7:00 PM PST',
    location: 'Division Classrooms & Virtual Zoom Option',
    category: 'Parent-Teacher',
    audience: 'Enrolled Parents & Guardians',
    rsvpRequired: true,
    speakerOrOrganizer: 'Dean of Academics Office'
  },
  {
    id: 'evt-5',
    title: 'Oakridge Annual STEM & Innovation Symposium',
    description: 'Scholars present their independent research projects, biotech wet lab findings, and autonomous robotics prototypes to industry judges.',
    date: 'November 8, 2026',
    time: '10:00 AM – 4:00 PM PST',
    location: 'Turing Innovation Center & Science Wing',
    category: 'Academic',
    audience: 'Students, Faculty & Industry Mentors',
    rsvpRequired: false,
    speakerOrOrganizer: 'Dr. Evelyn Montgomery & Dr. Maya Lin'
  },
  {
    id: 'evt-6',
    title: 'Varsity Knights Homecoming Football & Tailgate Festival',
    description: 'Cheer on the Oakridge Knights varsity team, featuring marching band halftime show, food trucks, and alumni reunion tent.',
    date: 'November 20, 2026',
    time: '5:30 PM – 9:00 PM PST',
    location: 'Championship Turf Stadium',
    category: 'Sports',
    audience: 'Students, Alumni, Parents & Fans',
    rsvpRequired: false,
    speakerOrOrganizer: 'Oakridge Athletics Boosters'
  }
];

export const NEWS_CATEGORIES = ['All News', 'Academics', 'Achievements', 'Community', 'Announcements'] as const;
export const EVENT_CATEGORIES = ['All Events', 'Academic', 'Sports', 'Cultural', 'Parent-Teacher'] as const;
