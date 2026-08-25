import { Facility } from '../types';

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'fac-science-hub',
    name: 'Discovery Science & Biotechnology Wing',
    category: 'Academic',
    tagline: 'Research-grade laboratories for university-level empirical discovery',
    description: 'Featuring 8 specialized laboratories for Molecular Genetics, Organic Chemistry, Advanced Physics, and IoT Environmental Sensing. Equipped with PCR thermal cyclers, laminar flow hoods, spectrometer sensors, and digital probe telemetry.',
    features: [
      '8 Specialized Research Wet & Dry Labs',
      'Biosafety Level-1 certified containment systems',
      'Digital sensor arrays for real-time telemetry data',
      'Dedicated independent student fellowship workstations'
    ],
    specs: '18,500 sq. ft. across 2 dedicated laboratory wings',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-robotics-center',
    name: 'Turing Innovation Center & MakerSpace',
    category: 'Academic',
    tagline: 'Where imagination is engineered into physical reality',
    description: 'An advanced rapid prototyping arena housing industrial 3D resin printers, CNC milling machines, laser cutters, electronics fabrication benches, and an official FIRST / VEX robotics competition arena.',
    features: [
      'Industrial 3D Printers & Multi-Axis CNC Routers',
      'Official regulation size Robotics Challenge Arena',
      'Embedded systems & FPGA programming benches',
      'Collaborative agile sprint zones for student startups'
    ],
    specs: '12,000 sq. ft. open-floor innovation space',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-library-commons',
    name: 'The Athena Learning Commons & Digital Library',
    category: 'Academic',
    tagline: 'A sanctuary of knowledge, quiet contemplation, and collaboration',
    description: 'Holding over 45,000 physical volumes, subscriptions to leading academic databases (JSTOR, Nature, Oxford Reference), acoustic quiet study pods, podcast recording studios, and interactive digital research tables.',
    features: [
      '45,000+ Curated physical titles & 250,000+ digital e-books',
      'Direct access to global research databases (JSTOR, EBSCO, IEEE)',
      '12 Private acoustic group study rooms',
      'Soundproof Multimedia & Podcast Creation Studio'
    ],
    specs: '22,000 sq. ft. 3-level library with panoramic campus views',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-aquatics',
    name: 'Olympic Aquatics Complex',
    category: 'Sports',
    tagline: 'Championship training grounds for swimming and water polo',
    description: 'An indoor 50-meter 10-lane Olympic-standard heated competition pool equipped with Colorado Time Systems, underwater stroke-analysis cameras, spectator bleachers for 600 guests, and a separate learn-to-swim junior pool.',
    features: [
      '50m Heated Olympic pool with movable bulkhead',
      'Underwater HD stroke analysis cameras',
      'UV & Eco-Ozone water filtration system',
      'Spectator seating capacity for 600+ guests'
    ],
    specs: 'Olympic 50m x 25m with 600-seat grandstand',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-turf-stadium',
    name: 'Oakridge Championship Turf Stadium & Track',
    category: 'Sports',
    tagline: 'Home of the Oakridge Knights varsity athletics',
    description: 'A professional all-weather FIFA-certified synthetic turf field for soccer, field hockey, rugby, and lacrosse, enclosed by an 8-lane IAAF-certified polyurethane running track, floodlighting for evening games, and stadium grandstands.',
    features: [
      'FIFA Quality Pro synthetic turf field',
      '8-Lane IAAF all-weather sprint & distance track',
      'High-efficiency LED broadcast floodlights',
      'Covered stadium seating for 1,500 supporters'
    ],
    specs: 'Regulation multi-sport field with 1,500 grandstand capacity',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  },
  {
    id: 'fac-auditorium',
    name: 'The Symphony Hall & Performing Arts Center',
    category: 'Arts & Media',
    tagline: 'A world-class acoustic theater for orchestra, drama, and assemblies',
    description: 'An 850-seat proscenium theater featuring Meyer Sound acoustic arrays, computerized fly system, motorized orchestra pit, professional stage lighting, green rooms, and dedicated rehearsal suites.',
    features: [
      '850-Seat acoustic theater with balcony seating',
      'Motorized hydraulic orchestra pit',
      'Full digital DMX lighting grid and automated fly towers',
      '6 Dedicated dressing rooms and scene fabrication shop'
    ],
    specs: '850 seats, 4,000 sq. ft. stage area',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'fac-dining',
    name: 'The Greenhouse Dining Pavilion',
    category: 'Wellness & Living',
    tagline: 'Farm-to-table organic dining fueling young bodies and minds',
    description: 'Serving chef-crafted, nutritionally balanced, organic meals daily. Features live cooking stations, allergen-free preparation zones, and produce harvested directly from our student-managed hydroponic greenhouse.',
    features: [
      '100% Organic, locally sourced seasonal menus',
      'Dedicated allergy-safe (nut-free, gluten-free, halal, vegan) stations',
      'Open-concept natural light architectural hall',
      'Zero-waste composting and organic waste reclamation'
    ],
    specs: '650-seat dining hall with outdoor garden patio',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  },
  {
    id: 'fac-wellness',
    name: 'Student Health & Mindfulness Sanctuary',
    category: 'Wellness & Living',
    tagline: 'Nurturing emotional, psychological, and physical well-being',
    description: 'Staffed 24/7 by certified registered pediatric nurses, physical therapists, and licensed adolescent psychologists. Includes private rest suites, sensory de-escalation rooms, and a tranquil zen garden.',
    features: [
      'Full-time Pediatric Medical Staff & triage bay',
      'Sensory calming spaces & mindfulness meditation pods',
      'Physical therapy & athletic rehab recovery studio',
      'Confidential counseling offices'
    ],
    specs: '5,000 sq. ft. integrated health and wellness pavilion',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: []
  }
];

export const FACILITY_CATEGORIES = ['All Facilities', 'Academic', 'Sports', 'Arts & Media', 'Wellness & Living'] as const;
