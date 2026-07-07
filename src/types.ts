export interface Project {
  id: string;
  title: string;
  titleEn: string;
  location: string;
  locationEn: string;
  style: string;
  styleEn: string;
  area: string;
  year: string;
  description: string;
  descriptionEn: string;
  coverImage: string;
  gallery: string[];
  materialsUsed: string[];
  materialsUsedEn: string[];
}

export interface FurnitureStory {
  id: string;
  title: string;
  titleEn: string;
  collection: string;
  collectionEn: string;
  designer: string;
  materials: string;
  materialsEn: string;
  story: string;
  storyEn: string;
  image: string;
  details: string[];
  detailsEn: string[];
}

export interface DesignPhilosophyItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  origin: string;
  originEn: string;
  properties: string[];
  propertiesEn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  content: string;
  contentEn: string;
  project: string;
  projectEn: string;
  avatar: string;
}
