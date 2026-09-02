import { AdmissionStep, FeeTier, FAQItem } from '../types';

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: 'Official Notification & Registration',
    timeline: 'November – December',
    description: 'Notice published on the official portal and school notice board following the guidelines of the Dept. of Minority Affairs & Madrasah Education, Govt. of West Bengal.',
    requirements: ['Student Birth Certificate', 'Aadhaar Card (Student & Parents)', 'Previous class marksheet/record'],
    iconName: 'FileText'
  },
  {
    stepNumber: 2,
    title: 'Application Submission',
    timeline: 'December – January',
    description: 'Submit online or offline admission form with necessary category certificates, photographs, and academic credentials.',
    requirements: ['Filled admission form', 'Passport size photographs (4 copies)', 'Caste/Minority certificate (if applicable)', 'Transfer Certificate (TC)'],
    iconName: 'Send'
  },
  {
    stepNumber: 3,
    title: 'Screening / Merit Evaluation & Lottery',
    timeline: 'January',
    description: 'Lottery/merit assessment conducted in compliance with West Bengal Government RTE and Model Madrasah admission criteria.',
    requirements: ['Admit card verification', 'Document verification at campus', 'Parent interaction session'],
    iconName: 'UserCheck'
  },
  {
    stepNumber: 4,
    title: 'Merit List Publication & Counseling',
    timeline: 'Late January',
    description: 'Publication of provisional merit list and waiting list on the official portal and campus notice board.',
    requirements: ['Original document verification', 'Bank account details (for DBT scholarships)', 'Health declaration form'],
    iconName: 'CheckCircle2'
  },
  {
    stepNumber: 5,
    title: 'Final Admission & Orientation',
    timeline: 'First week of February',
    description: 'Completion of formal admission paperwork, distribution of free text books, uniform allowance details, and academic orientation.',
    requirements: ['Signed admission receipt', 'Kanyashree/Aikyashree registration form', 'Hostel accommodation form (for boarders)'],
    iconName: 'Compass'
  }
];

export const KEY_DEADLINES = [
  {
    event: 'Admission Notification Release (Classes V to IX)',
    date: 'November 20, 2026',
    status: 'Upcoming'
  },
  {
    event: 'Online & Offline Application Form Submission Deadline',
    date: 'December 28, 2026',
    status: 'Upcoming'
  },
  {
    event: 'Merit List Publication & First Round Counseling',
    date: 'January 10, 2027',
    status: 'Upcoming'
  },
  {
    event: 'Higher Secondary (Class XI Science/Arts) Admission Portal Opens',
    date: 'May 15, 2027 (Post-Madhyamik Results)',
    status: 'Upcoming'
  },
  {
    event: 'Commencement of New Academic Session',
    date: 'February 2027 / June 2027 (HS)',
    status: 'Scheduled'
  }
];

export const TUITION_TIERS: FeeTier[] = [
  {
    gradeLevel: 'Upper Primary Section (Classes V – VIII)',
    annualTuition: '₹0 (Free Education under Govt. of WB)',
    admissionFee: '₹240 (Nominal Annual Session Fee)',
    developmentFee: '₹0 / Nil',
    includes: [
      'Free government NCERT / WBBME textbooks & learning materials',
      'Daily hygienic nutritious Mid-Day Meal program',
      'Free school uniform allowance & school bag distribution',
      'Full ICT computer lab & library access'
    ]
  },
  {
    gradeLevel: 'Secondary / High Madrasah (Classes IX – X)',
    annualTuition: '₹0 (Free Education under Govt. of WB)',
    admissionFee: '₹350 (Annual Examination & Session Fee)',
    developmentFee: '₹0 / Nil',
    includes: [
      'Science laboratory practicals & consumable supplies',
      'Kanyashree (K1) / Aikyashree scholarship facilitation',
      'Free textbook sets & supplementary test papers',
      'Sports, athletics & annual exhibition participation'
    ]
  },
  {
    gradeLevel: 'Higher Secondary Section (Classes XI – XII Science/Arts)',
    annualTuition: '₹120 / month (Nominal Govt. Subsidized)',
    admissionFee: '₹500 (One-time WBCHSE Registration & Session)',
    developmentFee: '₹0 / Nil',
    includes: [
      'Full access to advanced Physics, Chemistry, Biology & Computer Labs',
      'In-house NEET / JEE / WBJEE entrance mentorship modules',
      'Swami Vivekananda Merit-cum-Means (SVMCM) / Kanyashree K2 facilitation (₹12,000 - ₹25,000/yr)',
      'Taruner Swapno free tablet/device grant for Class XII students'
    ]
  }
];

export const SCHOLARSHIPS = [
  {
    name: 'Aikyashree State Scholarship (Pre-Matric & Post-Matric)',
    coverage: '100% Govt. Financial Grant (Up to ₹10,000/year)',
    eligibility: 'Awarded to eligible minority students across West Bengal by the Minority Affairs & Madrasah Education Department for tuition, books, and maintenance.'
  },
  {
    name: 'Kanyashree Prakalpa (K1 & K2 Annual Grants)',
    coverage: 'Annual Grant (K1: ₹1,000/yr) & One-time Grant (K2: ₹25,000)',
    eligibility: 'Flagship Government of West Bengal conditional cash transfer scheme for girl students aged 13-19 to incentivize secondary and higher secondary education.'
  },
  {
    name: 'Swami Vivekananda Merit-cum-Means (SVMCM) Scholarship',
    coverage: '₹12,000 to ₹18,000 per year',
    eligibility: 'Awarded to meritorious students scoring 60%+ in Madhyamik / High Madrasah examinations pursuing Higher Secondary Science/Arts streams.'
  },
  {
    name: 'Shikshashree & Model Madrasah Special Merit Stipend',
    coverage: 'Book Grants, Uniform & Free Boarding Waiver',
    eligibility: 'Special welfare assistance and hostel accommodation fee waivers for meritorious scholars from economically weaker backgrounds.'
  }
];

export const ADMISSION_FAQS: FAQItem[] = [
  {
    question: 'Is the medium of instruction completely English?',
    answer: 'Yes! Malda Government Model Madrasah is a dedicated English-medium government model institution where all core subjects (Sciences, Mathematics, Social Studies, ICT) are taught exclusively in English, with strong language support in Bengali, Urdu, and Arabic.',
    category: 'academics'
  },
  {
    question: 'Which examination boards is the institution affiliated with?',
    answer: 'The secondary section is affiliated with the West Bengal Board of Madrasah Education (WBBME) and the Higher Secondary (10+2) section is affiliated with the West Bengal Council of Higher Secondary Education (WBCHSE).',
    category: 'academics'
  },
  {
    question: 'Are hostel and boarding facilities available on campus?',
    answer: 'Yes, the institution provides separate, secure, and well-equipped hostel facilities for outstation students with hygienic dining, study halls, and 24/7 superintendent supervision.',
    category: 'general'
  },
  {
    question: 'What is the admission procedure for Class V and Class XI?',
    answer: 'Admissions for Class V follow the West Bengal RTE lottery and merit guidelines in December-January. Class XI Science and Arts stream admissions take place immediately following the publication of Madhyamik/High Madrasah results based on merit cutoff marks.',
    category: 'admissions'
  },
  {
    question: 'How do students apply for state government scholarships?',
    answer: 'Our dedicated scholarship facilitation cell assists every admitted student in submitting applications for Aikyashree, Kanyashree, Shikshashree, and SVMCM through direct benefit transfer (DBT).',
    category: 'admissions'
  },
  {
    question: 'What transportation facilities are available in Malda district?',
    answer: 'The campus is centrally located at Chandan Park, English Bazar, Malda, well connected by local bus networks, e-rickshaws, and within 10 minutes of Malda Town Railway Station.',
    category: 'transport'
  }
];
