import { LucideIcon } from 'lucide-react';

export type Category = 'print' | 'model';

export interface Collection {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface Project {
  id: number;
  title: string;
  category: Category; 
  collectionId?: string; // Link to a collection
  image: string;
  span: string;
  description: string;
  gallery?: string[];
  reviews?: Review[];
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  price: string;
  description: string;
  features: string[];
}

export interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
}