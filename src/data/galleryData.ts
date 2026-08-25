import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'FIRST Robotics World Championship Finals',
    category: 'STEM & Robotics',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    description: 'The Oakridge Titan Bot team fine-tuning autonomous vision algorithms prior to the finals match in Houston.',
    featured: true
  },
  {
    id: 'gal-2',
    title: '38th Annual Commencement & Baccalaureate',
    category: 'Graduation & Awards',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description: 'Graduating seniors celebrating their transition to top global universities on the South Lawn quadrangle.',
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Annual Gala Spring Symphony Concert',
    category: 'Arts & Culture',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    description: 'The 75-piece Oakridge Symphony performing Dvořák’s Symphony No. 9 in our acoustic auditorium.',
    featured: true
  },
  {
    id: 'gal-4',
    title: 'Varsity Soccer State Championship Victory',
    category: 'Sports & Athletics',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    description: 'The Oakridge Knights hoisting the state championship trophy under the stadium floodlights.',
    featured: true
  },
  {
    id: 'gal-5',
    title: 'Molecular Genetics Wet Lab Seminar',
    category: 'STEM & Robotics',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    description: 'Advanced Placement Biology scholars performing gel electrophoresis analysis on synthetic DNA plasmids.',
    featured: false
  },
  {
    id: 'gal-6',
    title: 'International Day Cultural Parade & Food Festival',
    category: 'Campus Life',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    description: 'Celebrating 38 nations represented across our student body with traditional attire, music, and culinary heritage.',
    featured: true
  },
  {
    id: 'gal-7',
    title: 'Marine Ecology Research Expedition in Monterey Bay',
    category: 'Field Expeditions',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Grade 11 IB Environmental Systems scholars sampling oceanic water quality and kelp forest ecosystems.',
    featured: false
  },
  {
    id: 'gal-8',
    title: 'Interactive Socratic Seminar in Athena Commons',
    category: 'Campus Life',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    description: 'Middle school scholars engaging in energetic debate regarding civil liberties and constitutional principles.',
    featured: false
  },
  {
    id: 'gal-9',
    title: 'Senior AP Studio Art Portfolio Showcase',
    category: 'Arts & Culture',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    description: 'Original sculptures, oil paintings, and multimedia installations showcased at the annual juried exhibition.',
    featured: false
  },
  {
    id: 'gal-10',
    title: 'Varsity Aquatics Regional Meet',
    category: 'Sports & Athletics',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80',
    description: 'Oakridge swimmers breaking three school records in the 200m individual medley and 400m freestyle relay.',
    featured: false
  },
  {
    id: 'gal-11',
    title: 'Outdoor Alpine Leadership & Survival Trek',
    category: 'Field Expeditions',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    description: 'High school freshmen embarking on our signature Yosemite wilderness orientation expedition.',
    featured: false
  },
  {
    id: 'gal-12',
    title: 'National Merit Scholar Award Ceremony',
    category: 'Graduation & Awards',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
    description: 'Commending our 34 National Merit Semifinalists and Commended Scholars during our autumn honors convocation.',
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
