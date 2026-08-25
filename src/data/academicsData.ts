import { AcademicDivision, Course } from '../types';

export const ACADEMIC_DIVISIONS: AcademicDivision[] = [
  {
    id: 'primary',
    name: 'Primary & Early Years',
    grades: 'Pre-K to Grade 5',
    ageGroup: 'Ages 4 – 11',
    tagline: 'Igniting Wonder & Foundational Mastery',
    description: 'A vibrant inquiry-driven learning environment utilizing the IB Primary Years Programme (PYP). Young learners develop reading fluency, mathematical thinking, linguistic skills, and joyful curiosity through hands-on discovery.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Ms. Rebecca Wright, M.Ed.',
    keyFeatures: [
      'Play-based Early Childhood & Reggio Emilia inspired discovery',
      'Dual-Language Immersion (Spanish / French / Mandarin)',
      'Singapore Math & conceptual problem solving',
      'Junior Maker Lab & introductory coding'
    ],
    subjects: ['Literacy & Phonics', 'Inquiry Science', 'Conceptual Mathematics', 'World Languages', 'Visual Arts & Choir', 'Physical Literacy']
  },
  {
    id: 'middle',
    name: 'Middle School',
    grades: 'Grades 6 to 8',
    ageGroup: 'Ages 11 – 14',
    tagline: 'Bridging Curiosity with Critical Analysis',
    description: 'The Middle Years Programme (MYP) fosters intellectual independence, structured debate, scientific investigation, and emotional resilience as students transition through vital developmental stages.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Dr. James Chen, Ph.D.',
    keyFeatures: [
      'Interdisciplinary STEM projects & robotics teams',
      'Formal Socratic seminars and Model United Nations',
      '1:1 iPad & MacBook computational thinking program',
      'Community Service & Design thinking modules'
    ],
    subjects: ['Integrated Sciences', 'Pre-Algebra & Geometry', 'Global Humanities & Civics', 'World Languages II', 'Digital Media & Design', 'Performing Arts']
  },
  {
    id: 'high',
    name: 'High School & Senior Secondary',
    grades: 'Grades 9 to 12',
    ageGroup: 'Ages 14 – 18',
    tagline: 'Academic Rigor, Leadership & College Distinction',
    description: 'Offering dual pathways through the prestigious International Baccalaureate Diploma Programme (IBDP) and Advanced Placement (AP) Capstone. Prepares scholars for premier global university admissions and real-world leadership.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Prof. David Vance, M.A.',
    keyFeatures: [
      'Full IB Diploma & 28+ AP Capstone Courses',
      'University-level Independent Research Fellowship',
      'Dedicated 1:1 College Counseling starting in Grade 9',
      'Global Internships & Silicon Valley Tech Mentorships'
    ],
    subjects: ['AP/IB Higher Sciences', 'Multivariable Calculus & Linear Algebra', 'World Literature & Rhetoric', 'Economics & World Politics', 'Applied Computer Science', 'Studio Arts AP']
  }
];

export const COURSE_CATALOG: Course[] = [
  {
    id: 'c-1',
    code: 'SCI-401',
    title: 'Advanced Placement Biology & Genetics',
    division: 'high',
    department: 'Sciences',
    description: 'In-depth molecular genetics, evolutionary biology, cellular biochemistry, and biotechnology wet lab research.',
    credits: '1.0 Credit',
    level: 'AP / Honors'
  },
  {
    id: 'c-2',
    code: 'CS-302',
    title: 'Artificial Intelligence & Machine Learning Fundamentals',
    division: 'high',
    department: 'Computer Science',
    description: 'Explores neural networks, Python data analytics, ethical AI frameworks, and autonomous robotics programming.',
    credits: '1.0 Credit',
    level: 'Advanced'
  },
  {
    id: 'c-3',
    code: 'MATH-405',
    title: 'IB Mathematics: Analysis and Approaches (HL)',
    division: 'ib',
    department: 'Mathematics',
    description: 'Rigorous pure mathematics including advanced differential equations, vector spaces, and probability modeling.',
    credits: '1.0 Credit',
    level: 'IB Higher Level'
  },
  {
    id: 'c-4',
    code: 'HUM-310',
    title: 'Comparative World Politics & International Law',
    division: 'high',
    department: 'Humanities',
    description: 'Seminar analyzing constitutional models, geopolitical dynamics, United Nations simulations, and diplomatic treaties.',
    credits: '1.0 Credit',
    level: 'Honors'
  },
  {
    id: 'c-5',
    code: 'ART-205',
    title: 'Digital Cinema & Visual Storytelling',
    division: 'middle',
    department: 'Fine Arts',
    description: 'Hands-on cinematography, screenplay composition, digital editing suite workflow, and sound design.',
    credits: '0.5 Credit',
    level: 'Intermediate'
  },
  {
    id: 'c-6',
    code: 'LANG-320',
    title: 'Mandarin Chinese: Literature & Culture IV',
    division: 'high',
    department: 'World Languages',
    description: 'Advanced conversational fluency, classical and contemporary Chinese literature, and business communications.',
    credits: '1.0 Credit',
    level: 'Advanced / AP'
  },
  {
    id: 'c-7',
    code: 'STEM-108',
    title: 'Junior Robotics & Autonomous Rovers',
    division: 'middle',
    department: 'Computer Science',
    description: 'Design, build, and code autonomous sensor-guided rovers using VEX and Arduino robotics kits.',
    credits: '0.5 Credit',
    level: 'Foundational'
  },
  {
    id: 'c-8',
    code: 'SCI-210',
    title: 'Environmental Ecology & Sustainable Systems',
    division: 'middle',
    department: 'Sciences',
    description: 'Fieldwork investigation of local watersheds, urban biodiversity conservation, and renewable energy modeling.',
    credits: '1.0 Credit',
    level: 'Standard'
  }
];

export const CO_CURRICULAR_CLUBS = [
  {
    name: 'Competitive Robotics (VEX & FIRST)',
    category: 'STEM',
    badge: 'National Champions',
    desc: 'Engineering autonomous competition bots, CAD design, and telemetry programming.'
  },
  {
    name: 'Model United Nations (OAK-MUN)',
    category: 'Leadership',
    badge: 'Global Delegate Award',
    desc: 'Simulating global policymaking, diplomacy, and international conflict resolution.'
  },
  {
    name: 'Symphony Orchestra & Jazz Ensemble',
    category: 'Fine Arts',
    badge: 'State Honors',
    desc: 'Performing classical masterworks, modern jazz arrangements, and chamber music.'
  },
  {
    name: 'Biomedical Research Society',
    category: 'STEM',
    badge: 'Published Journals',
    desc: 'Student-led empirical research investigating antibiotic resistance and genetics.'
  },
  {
    name: 'Varsity Speech & Debate Team',
    category: 'Humanities',
    badge: 'TOC Qualified',
    desc: 'Lincoln-Douglas, Policy, and Public Forum debate coaching with tournament travel.'
  },
  {
    name: 'Sustainability & Eco-Agriculture',
    category: 'Environment',
    badge: 'Green Campus',
    desc: 'Managing our 2-acre organic campus greenhouse, solar telemetry, and composting.'
  }
];

export const ACADEMIC_COUNSELING = [
  {
    title: 'Personalized College Roadmap',
    desc: 'Dedicated counselors match each student with best-fit universities across North America, the UK, Europe, and Asia.'
  },
  {
    title: 'Standardized Test Prep & Strategy',
    desc: 'Complimentary on-campus diagnostic testing and bespoke prep modules for SAT, ACT, and IB/AP Examinations.'
  },
  {
    title: 'Global University Visits & Fairs',
    desc: 'Over 120 college admissions representatives visit our auditorium annually for private information sessions.'
  },
  {
    title: 'Fellowship & Scholarship Guidance',
    desc: 'Dedicated coaching for prestigious merit fellowships including Morehead-Cain, Robertson, and Gates Millennium.'
  }
];
