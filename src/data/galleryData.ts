import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'State Science Fair & Innovation Exhibition',
    category: 'STEM & Robotics',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    description: 'Malda Model Madrasah students demonstrating automated renewable energy and water harvesting models at the state exhibition.',
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Higher Secondary & High Madrasah Toppers Felicitation',
    category: 'Graduation & Awards',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Felicitation ceremony for board examination distinction rankers and medical/engineering entrance qualifiers.',
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Rabindra-Nazrul Jayanti & Cultural Evening',
    category: 'Arts & Culture',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    description: 'Students performing classical recitations, Rabindra Sangeet, and patriotic songs in the school auditorium.',
    featured: true
  },
  {
    id: 'gal-4',
    title: 'District School Football Tournament Champions',
    category: 'Sports & Athletics',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    description: 'The Malda Model Madrasah football team celebrating their championship win at the district athletic meet.',
    featured: true
  },
  {
    id: 'gal-5',
    title: 'Composite Science Laboratory Practical Session',
    category: 'STEM & Robotics',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    description: 'Class XII Science students performing chemical titration and microscopic specimen analysis under faculty guidance.',
    featured: false
  },
  {
    id: 'gal-6',
    title: 'Independence Day & National Flag Hoisting',
    category: 'Campus Life',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    description: 'Grand Independence Day march-past, national flag hoisting by the Headmaster, and cultural parade.',
    featured: true
  },
  {
    id: 'gal-7',
    title: 'Educational Field Trip to Gour Historic Ruins',
    category: 'Field Expeditions',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'History and Geography students exploring the heritage architecture and archaeological sites of historic Gour in Malda.',
    featured: false
  },
  {
    id: 'gal-8',
    title: 'Interactive Smart Classroom English Debate',
    category: 'Campus Life',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    description: 'Secondary students participating in an energetic inter-house English debate on digital ethics and society.',
    featured: false
  },
  {
    id: 'gal-9',
    title: 'Annual Arts, Crafts & Calligraphy Exhibition',
    category: 'Arts & Culture',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    description: 'Student paintings, Arabic and Bengali calligraphy, and handmade science crafts exhibited during the annual festival.',
    featured: false
  },
  {
    id: 'gal-10',
    title: 'Annual Sports Day 100m Sprint & Relay Final',
    category: 'Sports & Athletics',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    description: 'Athletes competing in sprint and relay events on the Malda Model Madrasah main athletics ground.',
    featured: false
  },
  {
    id: 'gal-11',
    title: 'Nature & Environmental Eco-Club Plantation Drive',
    category: 'Field Expeditions',
    date: 'July 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Students planting over 300 saplings across the 15-acre green campus during the Vanamahotsava week.',
    featured: false
  },
  {
    id: 'gal-12',
    title: 'Aikyashree & Kanyashree Felicitation Ceremony',
    category: 'Graduation & Awards',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
    description: 'Special administrative assembly recognizing girl scholars and meritorious students receiving state scholarship awards.',
    featured: false
  }
];

export const GALLERY_CATEGORIES = [
  'All Photos',
  'Campus Life',
  'Sports & Athletics',
  'Arts & Culture',
  'STEM & Robotics',
  'Graduation & Awards',
  'Field Expeditions'
] as const;
