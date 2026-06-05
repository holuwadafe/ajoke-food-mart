import type { IconName } from "@/lib/icons";

// Product types
export interface Product {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  fullName: string;
  weight: string;
  price: number;
  priceDisplay: string;
  emoji: string;
  gradient: string;
  bgColor: string;
  icon?: string; // Optional custom image icon
}

export type ProductCategory = "garri" | "palm-oil" | "rice" | "beans";

export interface ProductCategoryGroup {
  id: ProductCategory;
  label: string;
  emoji: string;
  description: string;
  products: Product[];
  comingSoon?: boolean;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  review: string;
  rating: number;
  initial: string;
}

// Statistic type
export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}

// Feature type
export interface Feature {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

// Theme type
export type Theme = "dark" | "light";
