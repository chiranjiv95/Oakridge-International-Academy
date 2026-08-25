import { AdmissionStep, FeeTier, FAQItem } from '../types';

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: 'Submit Initial Inquiry',
    timeline: 'Anytime / Rolling',
    description: 'Fill out our online inquiry form to receive the comprehensive digital prospectus, curriculum guides, and direct contact from an admissions counselor.',
    requirements: ['Parent/Guardian contact info', 'Student current grade level', 'Academic areas of interest'],
    iconName: 'FileText'
  },
  {
    stepNumber: 2,
    title: 'Campus Tour & Information Session',
    timeline: 'September – January',
    description: 'Experience our 32-acre learning environment in person or through an interactive guided virtual session. Meet faculty and sit in on live classroom seminars.',
    requirements: ['Book appointment online', 'Campus visitor registration', 'Q&A session with Division Head'],
    iconName: 'Compass'
  },
  {
    stepNumber: 3,
    title: 'Formal Application Submission',
    timeline: 'Deadline: January 15 (Priority)',
    description: 'Complete the student application portal. Submit official academic transcripts, teacher recommendation letters, and the student reflective essay.',
    requirements: ['Past 2 years academic records', '2 Teacher recommendation forms', 'Student personal essay / portfolio', '$125 Application fee'],
    iconName: 'Send'
  },
  {
    stepNumber: 4,
    title: 'Student Assessment & Family Interview',
    timeline: 'January – February',
    description: 'Age-appropriate holistic evaluation of literacy, mathematical thinking, and problem-solving, alongside a warm conversational family interview.',
    requirements: ['Diagnostic assessment', 'Conversational interview (in-person or Zoom)', 'Optional arts/athletics portfolio review'],
    iconName: 'UserCheck'
  },
  {
    stepNumber: 5,
    title: 'Admission Decision & Enrollment',
    timeline: 'Mid-March',
    description: 'Official decisions released via the portal. Admitted families confirm enrollment by submitting the registration deposit and joining the welcoming orientation.',
    requirements: ['Signed enrollment contract', 'Registration deposit', 'Health & immunization clearance'],
    iconName: 'CheckCircle2'
  }
];

export const KEY_DEADLINES = [
  {
    event: 'Early Decision Application Deadline',
    date: 'November 15, 2026',
    status: 'Upcoming'
  },
  {
    event: 'Regular Admission Priority Deadline',
    date: 'January 15, 2027',
    status: 'Upcoming'
  },
  {
    event: 'Scholarship & Financial Aid Application Deadline',
    date: 'February 1, 2027',
    status: 'Upcoming'
  },
  {
    event: 'Admission Decisions Notification Date',
    date: 'March 10, 2027',
    status: 'Upcoming'
  },
  {
    event: 'Admitted Students Welcome & Enrollment Day',
    date: 'April 5, 2027',
    status: 'Scheduled'
  }
];

export const TUITION_TIERS: FeeTier[] = [
  {
    gradeLevel: 'Primary (Pre-K – Grade 5)',
    annualTuition: '$18,500 / year',
    admissionFee: '$1,500 (one-time)',
    developmentFee: '$800 / year',
    includes: [
      'All instructional textbooks & digital learning software',
      'Daily organic hot lunch & nutritional snacks',
      'Classroom art supplies & junior robotics kits',
      'Annual local educational field trips & cultural days'
    ]
  },
  {
    gradeLevel: 'Middle School (Grades 6 – 8)',
    annualTuition: '$22,800 / year',
    admissionFee: '$1,500 (one-time)',
    developmentFee: '$950 / year',
    includes: [
      '1:1 Apple iPad/MacBook technology package & licensing',
      'Full laboratory consumables & STEM innovation kit',
      'Competitive inter-scholastic sports league fees',
      'Organic dining & comprehensive health clinic access'
    ]
  },
  {
    gradeLevel: 'High School & IB (Grades 9 – 12)',
    annualTuition: '$26,900 / year',
    admissionFee: '$1,800 (one-time)',
    developmentFee: '$1,200 / year',
    includes: [
      'IB Diploma & AP Exam registration support fees',
      'Full 1:1 bespoke College Counseling & SAT/ACT prep',
      'Access to university research fellowship labs',
      'Varsity athletics, performing arts, and MUN travel subsidy'
    ]
  }
];

export const SCHOLARSHIPS = [
  {
    name: 'Presidential Academic Merit Fellowship',
    coverage: 'Up to 75% Tuition Coverage',
    eligibility: 'Awarded to incoming 9th-11th graders with exceptional standardized test scores, top 5% GPA, and proven research leadership.'
  },
  {
    name: 'Ada Lovelace STEM & Innovation Grant',
    coverage: '50% Tuition + $2,500 Project Grant',
    eligibility: 'For students exhibiting extraordinary talent in competitive coding, robotics engineering, or empirical scientific research.'
  },
  {
    name: 'Global Cultural & Artistic Excellence Award',
    coverage: 'Up to 50% Tuition Coverage',
    eligibility: 'For prodigies in orchestral music, fine visual arts, theater, or competitive speech & debate.'
  },
  {
    name: 'Need-Based Financial Assistance (Oakridge Opportunity Fund)',
    coverage: '20% to 100% Comprehensive Aid',
    eligibility: 'Evaluated through confidential third-party financial review (FAST/SSS), ensuring no qualified scholar is turned away due to financial constraints.'
  }
];

export const ADMISSION_FAQS: FAQItem[] = [
  {
    question: 'What is the ideal timeline for submitting an application?',
    answer: 'We encourage families to begin the process 10 to 12 months prior to the intended school year. Priority applications are due by January 15th, though rolling admissions are considered based on grade-level seat availability.',
    category: 'admissions'
  },
  {
    question: 'Do you offer school bus transportation?',
    answer: 'Yes! Oakridge operates an extensive fleet of GPS-tracked, air-conditioned school buses covering over 24 neighborhood routes across the metropolitan region, complete with certified security attendants.',
    category: 'transport'
  },
  {
    question: 'What is the student-to-teacher ratio at Oakridge?',
    answer: 'Our overall student-to-faculty ratio is 1:11, with average class sizes capped at 16 to 18 students. This ensures rich seminar discussions and deep individual mentorship.',
    category: 'academics'
  },
  {
    question: 'Is financial aid available for international students?',
    answer: 'Yes, merit scholarships and need-based financial aid are open to all students regardless of citizenship. International applicants apply through the standard financial aid portal.',
    category: 'admissions'
  },
  {
    question: 'What world languages are taught at the academy?',
    answer: 'We offer intensive language tracks in Spanish, French, Mandarin Chinese, and German from Grade 1 through AP/IB Higher Levels, as well as English as an Additional Language (EAL) support.',
    category: 'academics'
  },
  {
    question: 'Are campus visits required before applying?',
    answer: 'While in-person campus visits are strongly encouraged to get a feel for our vibrant community, we offer interactive virtual tour experiences and online interviews for international or relocating families.',
    category: 'general'
  }
];
