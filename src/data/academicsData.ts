import { AcademicDivision, Course } from '../types';

export const ACADEMIC_DIVISIONS: AcademicDivision[] = [
  {
    id: 'primary',
    name: 'Upper Primary Section',
    grades: 'Classes V to VIII',
    ageGroup: 'Ages 10 – 14',
    tagline: 'Foundational English Mastery & Inquisitive Learning',
    description: 'A nurturing English-medium learning environment focused on building strong conceptual foundations in Mathematics, Science, and Language Arts. Students develop analytical thinking, digital literacy, and communicative confidence.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Ms. Nasima Begum, M.A., B.Ed.',
    keyFeatures: [
      'Interactive Smart Classroom enabled audio-visual learning',
      'Dual language fluency: English Medium with Bengali / Arabic / Urdu electives',
      'Foundational Mathematics & hands-on Science laboratory discovery',
      'ICT computer fundamentals & digital literacy programs'
    ],
    subjects: ['English Language & Prose', 'General Science & Lab', 'Mathematics', 'Social Sciences & Civics', 'First Language (Bengali/Urdu)', 'Computer Fundamentals & Arts']
  },
  {
    id: 'middle',
    name: 'Secondary / High Madrasah Section',
    grades: 'Classes IX & X',
    ageGroup: 'Ages 14 – 16',
    tagline: 'Academic Rigor, Scientific Inquiry & Board Distinction',
    description: 'Aligned with the West Bengal Board of Madrasah Education (WBBME) English-medium curriculum. Emphasizes experimental sciences, mathematical problem-solving, social sciences, and comprehensive preparation for state board examinations.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Dr. Manirul Haque, M.Sc., B.Ed., Ph.D.',
    keyFeatures: [
      'Comprehensive Physical & Life Sciences laboratory experiments',
      'State Science Fair participation and inter-school debate forums',
      'Structured chapter-wise test series and board exam strategy',
      'National Talent Search Examination (NTSE) & Olympiad coaching'
    ],
    subjects: ['Physical Science (Physics & Chem)', 'Life Science & Biology', 'Mathematics', 'English First/Second Language', 'History & Civics', 'Geography & Environment']
  },
  {
    id: 'high',
    name: 'Higher Secondary Section (10+2)',
    grades: 'Classes XI & XII',
    ageGroup: 'Ages 16 – 18',
    tagline: 'Excellence in Science & Arts with Competitive Mentorship',
    description: 'Recognized by the West Bengal Council of Higher Secondary Education (WBCHSE). Offers specialized Science and Humanities streams in English Medium with dedicated in-house coaching for NEET, JEE Main, WBJEE, and CUET admissions.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    headOfDivision: 'Prof. S. K. Mahato, M.Sc., Ph.D.',
    keyFeatures: [
      'WBCHSE Science Stream (Physics, Chem, Math, Bio/Computer Science)',
      'Integrated NEET / JEE / WBJEE entrance preparation modules',
      'Advanced research-grade laboratory sessions with individual workbenches',
      'Career counseling for premier universities (AIIMS, IITs, NITs, JU, CU)'
    ],
    subjects: ['Advanced Physics & Lab', 'Chemistry & Organic Synthesis', 'Calculus & Higher Mathematics', 'Biological Sciences & Genetics', 'Computer Science (Python & SQL)', 'English Core & Elective Humanities']
  }
];

export const COURSE_CATALOG: Course[] = [
  {
    id: 'c-1',
    code: 'SCI-PHY-12',
    title: 'Advanced Physics & Practical Laboratory',
    division: 'high',
    department: 'Sciences',
    description: 'Comprehensive Mechanics, Electromagnetism, Wave Optics, Semiconductors, and hands-on laboratory experiments aligned with WBCHSE & NEET/JEE syllabus.',
    credits: 'Core Science',
    level: 'Higher Secondary (XI-XII)'
  },
  {
    id: 'c-2',
    code: 'SCI-CHEM-12',
    title: 'Chemistry: Organic, Inorganic & Physical Lab',
    division: 'high',
    department: 'Sciences',
    description: 'Thermodynamics, Chemical Kinetics, Coordination Compounds, Reaction Mechanisms, and volumetric & salt analysis lab practicals.',
    credits: 'Core Science',
    level: 'Higher Secondary (XI-XII)'
  },
  {
    id: 'c-3',
    code: 'SCI-BIO-12',
    title: 'Biological Sciences & Human Physiology',
    division: 'high',
    department: 'Sciences',
    description: 'Genetics, Molecular Biology, Plant & Animal Physiology, Ecology, and micro-technique dissection lab modules with intensive NEET orientation.',
    credits: 'Core Science',
    level: 'Higher Secondary (XI-XII)'
  },
  {
    id: 'c-4',
    code: 'MATH-12',
    title: 'Higher Mathematics & Differential Calculus',
    division: 'high',
    department: 'Mathematics',
    description: 'Differential and Integral Calculus, Vector Algebra, 3D Geometry, Linear Programming, and Probability modeling.',
    credits: 'Core Science',
    level: 'Higher Secondary (XI-XII)'
  },
  {
    id: 'c-5',
    code: 'CS-102',
    title: 'Computer Science & ICT (Python & Database Management)',
    division: 'high',
    department: 'Computer Science',
    description: 'Object-oriented programming with Python, SQL Relational Database systems, Computer Networks, and Cyber Security fundamentals.',
    credits: 'Elective',
    level: 'Advanced ICT'
  },
  {
    id: 'c-6',
    code: 'ENG-10',
    title: 'English Language, Rhetoric & World Literature',
    division: 'middle',
    department: 'Humanities & Languages',
    description: 'Mastery of English grammar, composition, phonetics, public speaking, and analysis of classic and contemporary prose and poetry.',
    credits: 'Core Language',
    level: 'Secondary (IX-X)'
  },
  {
    id: 'c-7',
    code: 'SCI-9',
    title: 'Physical & Life Sciences Laboratory Foundation',
    division: 'middle',
    department: 'Sciences',
    description: 'Fundamental principles of Motion, Heat, Atomic Structure, Living World, and scientific method through guided laboratory demonstrations.',
    credits: 'Core Science',
    level: 'Secondary (IX-X)'
  },
  {
    id: 'c-8',
    code: 'GEO-ENV-8',
    title: 'Environmental Geography & Earth Systems',
    division: 'primary',
    department: 'Humanities & Languages',
    description: 'Physical geography of West Bengal and India, weather systems, conservation of natural resources, and map-reading skills.',
    credits: 'General Studies',
    level: 'Upper Primary (V-VIII)'
  }
];

export const CO_CURRICULAR_CLUBS = [
  {
    name: 'State Science & Innovation Club',
    category: 'STEM',
    badge: 'District & State Champions',
    desc: 'Empirical model making, science fairs, solar energy demonstrations, and state exhibition projects.'
  },
  {
    name: 'Model Madrasah Debate & Quiz Society',
    category: 'Leadership',
    badge: 'State Inter-School Laurels',
    desc: 'Sharpening oratory skills, parliamentary debate formats, general knowledge quizzes, and essay contests.'
  },
  {
    name: 'ICT, Coding & Digital Literacy Society',
    category: 'STEM',
    badge: 'Digital India Partner',
    desc: 'Python programming, web development basics, digital media design, and cyber safety workshops.'
  },
  {
    name: 'Football & Athletics Academy',
    category: 'Sports',
    badge: 'Subroto Cup Contenders',
    desc: 'Rigorous coaching in football, cricket, volleyball, 100m/400m sprint athletics, and annual sports meet.'
  },
  {
    name: 'Cultural & Literary Guild',
    category: 'Fine Arts',
    badge: 'State Heritage Award',
    desc: 'Celebrating Rabindra Jayanti, Kazi Nazrul Islam birth anniversary, Independence Day concerts, and drama.'
  },
  {
    name: 'Eco-Club & Campus Greenery Project',
    category: 'Environment',
    badge: 'Green Campus Initiative',
    desc: 'Tree plantation drives, plastic-free campus campaigns, medicinal plant garden, and waste segregation.'
  }
];

export const ACADEMIC_COUNSELING = [
  {
    title: 'Integrated NEET, JEE & WBJEE Guidance',
    desc: 'In-house expert mentoring, chapter-wise test series, and past-years question solving for medical and engineering entrances.'
  },
  {
    title: 'Board Examination Mentorship & Doubt Clearing',
    desc: 'Special remedial coaching, model answer paper evaluations, and one-on-one subject doubt-clearing sessions for board examinees.'
  },
  {
    title: 'Central & State University Admissions',
    desc: 'Comprehensive guidance for CUET, Calcutta University, Jadavpur University, Aligarh Muslim University, and Jamia Millia Islamia admissions.'
  },
  {
    title: 'Scholarship Portal & Welfare Assistance',
    desc: 'Dedicated cell for seamless application and document verification under Aikyashree, Kanyashree (K1/K2/K3), Shikshashree, and SVMCM.'
  }
];
