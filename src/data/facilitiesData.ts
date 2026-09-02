import { Facility } from '../types';

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-science-hub',
    name: 'Composite & Advanced Science Laboratories',
    category: 'Academic',
    tagline: 'Modern specialized laboratories for Physics, Chemistry, and Biological Sciences',
    description: 'Equipped with precision compound microscopes, digital sensor kits, optics benches, chemical fume hoods, analytical balances, and comprehensive apparatus for WBCHSE and WBBME practicals.',
    features: [
      'Dedicated Physics, Chemistry & Life Science Lab Wings',
      'Advanced optical spectrometers & digital galvanometers',
      'Comprehensive biological specimen & botanical slide library',
      'Individual student experimental workstations with safety protocols'
    ],
    specs: '3 Large Specialized Laboratories accommodating 45 students each',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-robotics-center',
    name: 'ICT Computer Hub & Digital Language Lab',
    category: 'Academic',
    tagline: 'High-speed computing and digital language enhancement facility',
    description: 'Featuring 60+ networked workstations with high-speed optical fiber connectivity, Python and MySQL development environments, language acquisition audio headsets, and smart projection arrays.',
    features: [
      '60+ High-Performance Desktop Terminals with UPS backup',
      'Dedicated Digital English Language training modules',
      'High-speed broadband optical fiber network',
      'Smart interactive projection & teacher monitoring station'
    ],
    specs: 'Air-conditioned 2,400 sq. ft. modern ICT laboratory',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-library-commons',
    name: 'Central Library & Reference Reading Room',
    category: 'Academic',
    tagline: 'Rich repository of academic texts, competitive journals, and literature',
    description: 'Housing over 15,000 titles covering NCERT textbooks, reference science volumes, encyclopedias, competitive exam guides (NEET/JEE/WBJEE), daily national English & regional newspapers, and reading alcoves.',
    features: [
      '15,000+ Curated books & competitive examination resources',
      'Quiet individual reading cubicles and reference section',
      'National & state periodicals, science journals, and dailies',
      'Digital e-library catalog and book lending automation'
    ],
    specs: 'Spacious reading hall with seating for 120 students',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-smart-class',
    name: 'Interactive Smart Digital Classrooms',
    category: 'Academic',
    tagline: 'Audio-visual dynamic learning under ICT @ Schools initiative',
    description: 'Equipped with interactive touchscreen smart boards, high-definition multimedia projectors, digital curriculum content repository, and ergonomic modular seating.',
    features: [
      '75-inch Touchscreen Interactive Digital Panels',
      'Pre-loaded multimedia 3D science and mathematics animations',
      'Acoustically balanced classrooms with natural cross-ventilation',
      'Wi-Fi enabled hybrid presentation infrastructure'
    ],
    specs: '35+ Smart classrooms across Upper Primary, Secondary & HS blocks',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  },
  {
    id: 'fac-turf-stadium',
    name: 'Model Madrasah Sports Ground & Athletic Field',
    category: 'Sports',
    tagline: 'Multi-sport athletic arena for football, cricket, and track events',
    description: 'A sprawling natural grass sports ground supporting football tournaments, cricket nets, volleyball courts, badminton arenas, and a 400-meter athletics track for the annual sports meet.',
    features: [
      'Full-size Football Ground & Cricket pitch',
      '400-Meter running track and field event zones',
      'Volleyball and badminton outdoor courts',
      'Annual Sports Day & Subroto Cup training facilities'
    ],
    specs: '5-Acre expansive outdoor playing complex',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  },
  {
    id: 'fac-auditorium',
    name: 'Rabindra-Nazrul Cultural Hall & Seminar Auditorium',
    category: 'Arts & Media',
    tagline: 'Multipurpose auditorium for seminars, cultural assemblies, and exhibitions',
    description: 'A 500-seat multipurpose assembly hall featuring professional public address audio system, stage lighting, podium, and air circulation for annual cultural programs, science exhibitions, and guest lectures.',
    features: [
      '500-Seat capacity assembly hall with elevated stage',
      'Integrated digital PA audio and projection setup',
      'Green rooms and preparation suites for performers',
      'Venue for State Science Seminars and Annual Cultural Festivals'
    ],
    specs: '500 seats with 1,200 sq. ft. stage area',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-dining',
    name: 'Nutritional Dining Hall & Mid-Day Meal Pavilion',
    category: 'Wellness & Living',
    tagline: 'Hygienic dining serving balanced, wholesome meals daily',
    description: 'Spacious and hygienic dining facility catering to both day scholars with fresh hot Mid-Day Meals and residential students with nutritious multi-course daily dining.',
    features: [
      'Clean automated water filtration (RO + UV) units',
      'FSSAI compliant hygienic steam-kitchen setup',
      'Separate hand-washing stations and sanitization bays',
      'Regular nutritional audit under Govt. Mid-Day Meal guidelines'
    ],
    specs: '400-seat open airy dining hall',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  },
  {
    id: 'fac-wellness',
    name: 'Campus Health & First Aid Clinic',
    category: 'Wellness & Living',
    tagline: 'Dedicated medical room and student wellness care',
    description: 'Equipped with emergency medical beds, essential first aid supplies, regular physician visits, periodic health checkup camps, and tie-ups with Malda Medical College & Hospital.',
    features: [
      'On-call physician and trained healthcare attendant',
      'Periodic eye, dental, and general health screening camps',
      'Direct emergency referral link with Malda Medical College',
      'Comfortable observation beds and medical inventory'
    ],
    specs: 'Well-appointed on-campus primary healthcare bay',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  }
];

export const FACILITY_CATEGORIES = ['All Facilities', 'Academic', 'Sports', 'Arts & Media', 'Wellness & Living'] as const;
