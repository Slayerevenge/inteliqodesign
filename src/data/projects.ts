export interface Project {
  id: string;
  title: string;
  category: "residential" | "corporate" | "renovation" | "3d-renders";
  location: string;
  sqft: string;
  description: string;
  thumbnail: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "electronics-city-office",
    title: "Electronics City Office",
    category: "corporate",
    location: "Electronics City, Bangalore",
    sqft: "20,000 sqft",
    description:
      "A 20,000 sq ft corporate workspace designed for Sigma Aldrich at Electronics City. The space blends functional open-plan work areas with refined material finishes, creating an environment that supports collaboration while maintaining the precision expected of a global science company.",
    thumbnail: "/projects/electronics-city-office/1.jpg",
    images: Array.from({ length: 14 }, (_, i) => `/projects/electronics-city-office/${i + 1}.jpg`),
  },
  {
    id: "e-city-tower-1",
    title: "E-City Tower 1",
    category: "corporate",
    location: "Electronics City, Bangalore",
    sqft: "40,000 sqft",
    description:
      "A flagship 40,000 sq ft corporate tower interior at Electronics City. Designed with modern aesthetics and optimized spatial planning, the space features premium finishes, collaborative zones, and executive suites that reflect contemporary corporate design at scale.",
    thumbnail: "/projects/e-city-tower-1/1.jpg",
    images: Array.from({ length: 15 }, (_, i) => `/projects/e-city-tower-1/${i + 1}.jpg`),
  },
  {
    id: "sobha-forest-view",
    title: "Sobha Forest View",
    category: "residential",
    location: "Bangalore",
    sqft: "1,650 sqft",
    description:
      "A thoughtfully designed 1,650 sq ft apartment at Sobha Forest View. Every inch has been optimized with custom joinery, warm wood tones, and soft neutral palettes to create a serene, nature-connected living space that maximizes both comfort and functionality.",
    thumbnail: "/projects/sobha-forest-view/1.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/projects/sobha-forest-view/${i + 1}.jpg`),
  },
  {
    id: "private-residence-in-basaveshwarnagar",
    title: "Private Residence, Basaveshwarnagar",
    category: "residential",
    location: "Basaveshwarnagar, Bangalore",
    sqft: "1,800 sqft",
    description:
      "An 1,800 sq ft private residence in Basaveshwarnagar transformed with elegant interiors. The design balances traditional warmth with modern minimalism, featuring bespoke furniture, layered lighting, and rich textures that give each room its own distinct character.",
    thumbnail: "/projects/private-residence-in-basaveshwarnagar/1.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/projects/private-residence-in-basaveshwarnagar/${i + 1}.jpg`),
  },
  {
    id: "residence-in-ullal-civil-interiors",
    title: "Residence in Ullal",
    category: "residential",
    location: "Ullal, Bangalore",
    sqft: "4,000 sqft",
    description:
      "A comprehensive civil and interiors project for a 4,000 sq ft residence in Ullal. Built from the ground up, this home features thoughtful spatial flow, natural material finishes, and design details that bring together structural integrity and aesthetic refinement.",
    thumbnail: "/projects/residence-in-ullal-civil-interiors/1.jpg",
    images: Array.from({ length: 7 }, (_, i) => `/projects/residence-in-ullal-civil-interiors/${i + 1}.jpg`),
  },
  {
    id: "jp-nagar",
    title: "JP Nagar Residence",
    category: "residential",
    location: "JP Nagar, Bangalore",
    sqft: "2,400 sqft",
    description:
      "A 2,400 sq ft residence in JP Nagar reimagined with contemporary interiors. The design incorporates an open layout, custom storage solutions, and a harmonious blend of textures and tones that create a warm, inviting atmosphere for family living.",
    thumbnail: "/projects/jp-nagar/1.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/projects/jp-nagar/${i + 1}.jpg`),
  },
  {
    id: "renovation-projects",
    title: "Renovation Projects",
    category: "renovation",
    location: "Bangalore & Mysore",
    sqft: "Various",
    description:
      "A curated collection of renovation projects across Bangalore and Mysore. From kitchen makeovers to complete home transformations, each project demonstrates our ability to breathe new life into existing spaces while respecting their original character and the client's vision.",
    thumbnail: "/projects/renovation-projects/1.jpg",
    images: Array.from({ length: 24 }, (_, i) => `/projects/renovation-projects/${i + 1}.jpg`),
  },
  {
    id: "3d-architectural-renders",
    title: "3D Architectural Renders",
    category: "3d-renders",
    location: "Various Locations",
    sqft: "-",
    description:
      "A showcase of photorealistic 3D architectural renders that bring design concepts to life before construction begins. From luxury villas and palace bungalows to modern apartments, these visualizations demonstrate our design range and attention to detail.",
    thumbnail: "/projects/villa-makena-exterior.jpg",
    images: [
      "/projects/villa-makena-exterior.jpg",
      "/projects/modern-house-3451.jpg",
      "/projects/classical-villa.jpg",
      "/projects/makena-villa-daylight.jpg",
      "/projects/modern-apartment-front.jpg",
      "/projects/modern-apartment-angle.jpg",
      "/projects/luxury-palace-bungalow.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.id);
}
