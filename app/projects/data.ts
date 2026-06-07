export type Feature = {
  id: string;
  label: string;
  value?: string;
  icon?: string; // lucide-react icon name hint
};

export type Project = {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  description: string;
  imageUrl: string;
  images?: string[];
  features?: Feature[];
  coords?: { lat: number; lng: number };
  brochureUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'p-nerul-azure',
    title: 'Azure Heights',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Nerul, Navi Mumbai',
    description:
      'A collection of contemporary 2–4 BHK residences offering panoramic green views, premium amenities including sky-lounge, infinity pool and concierge services. Strategically located near schools and transit.',
    imageUrl:
      'https://images.unsplash.com/photo-1560184897-6c9e7f3b4c6f?auto=format&fit=crop&w=1400&q=60',
    images: [
      'https://images.unsplash.com/photo-1560184897-6c9e7f3b4c6f?auto=format&fit=crop&w=1400&q=60',
      'https://images.unsplash.com/photo-1505691723518-36a2d6c9a4b8?auto=format&fit=crop&w=1400&q=60',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=60',
    ],
    features: [
      { id: 'f-1', label: '3,200 sqft', value: 'Carpet Area', icon: 'Ruler' },
      { id: 'f-2', label: '2–4 BHK', icon: 'Home' },
      { id: 'f-3', label: 'Sky Lounge', icon: 'Star' },
      { id: 'f-4', label: 'Infinity Pool', icon: 'Droplet' },
      { id: 'f-5', label: 'Concierge', icon: 'User' },
    ],
    coords: { lat: 19.0330, lng: 73.0179 },
    brochureUrl: '/brochures/azure-heights-brochure.pdf',
  },
  {
    id: 'p-vashi-golden',
    title: 'Golden Plaza Vashi',
    category: 'Commercial',
    status: 'Completed',
    location: 'Vashi, Navi Mumbai',
    description:
      'Premium Grade-A office development with sustainable façades, flexible floorplates, retail podium and underground parking. Designed for multinational tenants seeking a business hub presence.',
    imageUrl:
      'https://images.unsplash.com/photo-1505691723518-36a2d6c9a4b8?auto=format&fit=crop&w=1400&q=60',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a2d6c9a4b8?auto=format&fit=crop&w=1400&q=60',
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1400&q=60'
    ],
    features: [
      { id: 'f-1', label: 'Grade-A', icon: 'Briefcase' },
      { id: 'f-2', label: 'Large Floorplates', icon: 'Layers' },
      { id: 'f-3', label: 'Retail Podium', icon: 'ShoppingCart' },
    ],
    coords: { lat: 19.0778, lng: 73.0152 },
    brochureUrl: '/brochures/golden-plaza-vashi.pdf',
  },
  {
    id: 'p-kharghar-crest',
    title: 'Crest Residences',
    category: 'Residential',
    status: 'Upcoming',
    location: 'Kharghar, Navi Mumbai',
    description:
      'Ultra-luxury low-rise villas and penthouses nestled in a landscaped estate, featuring private terraces, smart-home integration and dedicated concierge services—exclusive limited release.',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=60',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=60',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=60'
    ],
    features: [
      { id: 'f-1', label: 'Private Terraces', icon: 'MapPin' },
      { id: 'f-2', label: 'Smart Home', icon: 'Phone' },
      { id: 'f-3', label: 'Limited Release', icon: 'Star' },
    ],
    coords: { lat: 19.0350, lng: 73.0520 },
    brochureUrl: '/brochures/crest-residences.pdf',
  },
  // Existing other projects kept minimal
  {
    id: 'p-jui-seawoods-tower',
    title: 'Seawoods Tower One',
    category: 'Commercial',
    status: 'Ongoing',
    location: 'Seawoods, Navi Mumbai',
    description:
      'A transit-oriented mixed-use tower combining retail, co-working spaces and serviced apartments. High visibility frontage and direct connectivity to the Seawoods railway node.',
    imageUrl:
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1400&q=60'
  },
  {
    id: 'p-belapur-marina',
    title: 'Marina Bay Residences',
    category: 'Residential',
    status: 'Completed',
    location: 'CBD Belapur, Navi Mumbai',
    description:
      'Waterfront premium apartments with landscaped promenades, private boat slips, wellness centre and integrated retail. Celebrated for its refined finishes and community design.',
    imageUrl:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=60'
  },
  {
    id: 'p-panvel-gateway',
    title: 'Gateway Business Park',
    category: 'Commercial',
    status: 'Upcoming',
    location: 'Panvel, Navi Mumbai',
    description:
      'Master-planned business park focusing on sustainability, large floorplates, and an integrated hospitality wing for visiting executives. Positioned near the upcoming transit corridor.',
    imageUrl:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=60'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
