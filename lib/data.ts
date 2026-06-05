import type { Product, ProductCategoryGroup, Testimonial, Statistic, Feature } from "@/types";
export const HERO_CAROUSEL_SLIDES = [
  { src: "/Images/1kg carousel.png", alt: "Premium Garri 1kg", label: "Premium Garri — 1kg" },
  { src: "/Images/gaari 2kg.png", alt: "Premium Garri 2kg", label: "Premium Garri — 2kg" },
  { src: "/Images/gaari carousel.png", alt: "Garri collection", label: "Garri (Ijebu) Collection" },
  { src: "/Images/palmoil seperate.png", alt: "Fresh palm oil", label: "Fresh Palm Oil" },
] as const;

// ─── WhatsApp ─────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "2349051187341";
export const PHONE_NUMBER    = "+234 706 910 6458";
export const TIKTOK_HANDLE   = "@ajokefoodmart";

export function buildWhatsAppOrderURL(product: Product): string {
  const message = `Hello AJOKE FOOD MART 👋,

I want to order:

*${product.fullName}*
Price: *${product.priceDisplay}*

Please provide payment and delivery details. Thank you! 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppChatURL(): string {
  const message = `Hello AJOKE FOOD MART 👋, I'd like to make an enquiry.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCT_CATEGORIES: ProductCategoryGroup[] = [
  {
    id: "garri",
    label: "Garri (Ijebu)",
    emoji: "🌾",
    description: "Premium sun-dried Ijebu Garri — crunchy, tasty & of the finest quality.",
    products: [
      {
        id: "garri-1kg",
        category: "garri",
        categoryLabel: "Garri (Ijebu)",
        name: "Premium Garri",
        fullName: "Premium Garri (Ijebu) — 1kg",
        weight: "1kg",
        price: 1000,
        priceDisplay: "₦1,000",
        emoji: "🌾",
        gradient: "from-amber-900 via-yellow-800 to-amber-700",
        bgColor: "#78350f",
        icon: "/Images/1kg thumb.png",
      },
      {
        id: "garri-2kg",
        category: "garri",
        categoryLabel: "Garri (Ijebu)",
        name: "Premium Garri",
        fullName: "Premium Garri (Ijebu) — 2kg",
        weight: "2kg",
        price: 2000,
        priceDisplay: "₦2,000",
        emoji: "🌾",
        gradient: "from-amber-900 via-yellow-800 to-amber-700",
        bgColor: "#78350f",
        icon: "/Images/2kg thumb.png",
      },
      {
        id: "garri-5kg",
        category: "garri",
        categoryLabel: "Garri (Ijebu)",
        name: "Premium Garri",
        fullName: "Premium Garri (Ijebu) — 5kg",
        weight: "5kg",
        price: 5000,
        priceDisplay: "₦5,000",
        emoji: "🌾",
        gradient: "from-amber-900 via-yellow-800 to-amber-700",
        bgColor: "#78350f",
        icon: "/Images/5kg thumb.png",
      },
      // {
      //   id: "garri-10kg",
      //   category: "garri",
      //   categoryLabel: "Garri (Ijebu)",
      //   name: "Premium Garri",
      //   fullName: "Premium Garri (Ijebu) — 10kg",
      //   weight: "10kg",
      //   price: 22000,
      //   priceDisplay: "₦22,000",
      //   emoji: "🌾",
      //   gradient: "from-amber-900 via-yellow-800 to-amber-700",
      //   bgColor: "#78350f",
      // },
    ],
  },
  {
    id: "palm-oil",
    label: "Palm Oil",
    emoji: "🫙",
    description: "Pure, unrefined red palm oil — rich colour, deep flavour, farm-fresh.",
    products: [
      {
        id: "palmoil-1l",
        category: "palm-oil",
        categoryLabel: "Palm Oil",
        name: "Palm Oil",
        fullName: "Fresh Palm Oil — 1L",
        weight: "1L",
        price: 2200,
        priceDisplay: "₦2,200",
        emoji: "🫙",
        gradient: "from-red-900 via-orange-700 to-red-600",
        bgColor: "#7f1d1d",        icon: "/Images/palmthumb1.png",      },
      {
        id: "palmoil-2l",
        category: "palm-oil",
        categoryLabel: "Palm Oil",
        name: "Palm Oil",
        fullName: "Fresh Palm Oil — 2L",
        weight: "2L",
        price: 4400,
        priceDisplay: "₦4,400",
        emoji: "🫙",
        gradient: "from-red-900 via-orange-700 to-red-600",
        bgColor: "#7f1d1d",        icon: "/Images/palmthumb2.png",      },
      {
        id: "palmoil-5l",
        category: "palm-oil",
        categoryLabel: "Palm Oil",
        name: "Palm Oil",
        fullName: "Fresh Palm Oil — 5L",
        weight: "5L",
        price: 9000,
        priceDisplay: "₦9,000",
        emoji: "🫙",
        gradient: "from-red-900 via-orange-700 to-red-600",
        bgColor: "#7f1d1d",        icon: "/Images/palmthumb3.png",      },
      // {
      //   id: "palmoil-10l",
      //   category: "palm-oil",
      //   categoryLabel: "Palm Oil",
      //   name: "Palm Oil",
      //   fullName: "Fresh Palm Oil — 10L",
      //   weight: "10L",
      //   price: 17500,
      //   priceDisplay: "₦17,500",
      //   emoji: "🫙",
      //   gradient: "from-red-900 via-orange-700 to-red-600",
      //   bgColor: "#7f1d1d",
      // },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    emoji: "🍚",
    description: "Premium local rice — clean, wholesome and perfect for every meal.",
    comingSoon: true,
    products: [
      {
        id: "rice-5kg",
        category: "rice",
        categoryLabel: "Rice",
        name: "Local Rice",
        fullName: "Premium Local Rice — 5kg",
        weight: "5kg",
        price: 12000,
        priceDisplay: "₦12,000",
        emoji: "🍚",
        gradient: "from-stone-700 via-neutral-600 to-stone-500",
        bgColor: "#44403c",
      },
      {
        id: "rice-10kg",
        category: "rice",
        categoryLabel: "Rice",
        name: "Local Rice",
        fullName: "Premium Local Rice — 10kg",
        weight: "10kg",
        price: 23000,
        priceDisplay: "₦23,000",
        emoji: "🍚",
        gradient: "from-stone-700 via-neutral-600 to-stone-500",
        bgColor: "#44403c",
      },
    ],
  },
  {
    id: "beans",
    label: "Beans",
    emoji: "🫘",
    description: "Fresh quality beans — protein-rich and carefully sourced for your family.",
    comingSoon: true,
    products: [
      {
        id: "beans-5kg",
        category: "beans",
        categoryLabel: "Beans",
        name: "Beans",
        fullName: "Premium Beans — 5kg",
        weight: "5kg",
        price: 10000,
        priceDisplay: "₦10,000",
        emoji: "🫘",
        gradient: "from-green-900 via-emerald-800 to-green-700",
        bgColor: "#14532d",
      },
      {
        id: "beans-10kg",
        category: "beans",
        categoryLabel: "Beans",
        name: "Beans",
        fullName: "Premium Beans — 10kg",
        weight: "10kg",
        price: 19000,
        priceDisplay: "₦19,000",
        emoji: "🫘",
        gradient: "from-green-900 via-emerald-800 to-green-700",
        bgColor: "#14532d",
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return PRODUCT_CATEGORIES.flatMap((cat) => cat.products);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllProducts();
  return getAllProducts().filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.fullName.toLowerCase().includes(q) ||
      p.weight.toLowerCase().includes(q)
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Adebayo O.",
    location: "Osogbo",
    review: "Excellent quality Garri! I have been buying from AJOKE FOOD MART for over a year now and the quality never disappoints. Best Ijebu Garri I've ever tasted.",
    rating: 5,
    initial: "A",
  },
  {
    id: "t2",
    name: "Tola A.",
    location: "Ibadan",
    review: "Fast delivery and affordable prices. I ordered Palm Oil and it arrived the same day. The quality is top notch and the price is very fair. Highly recommended!",
    rating: 5,
    initial: "T",
  },
  {
    id: "t3",
    name: "Mary E.",
    location: "Lagos",
    review: "The Palm Oil quality is absolutely top notch. It's pure, rich and aromatic. I'll be a regular customer from now on. Thank you AJOKE FOOD MART!",
    rating: 5,
    initial: "M",
  },
  {
    id: "t4",
    name: "Kunle B.",
    location: "Abuja",
    review: "I ordered Beans and Local Rice in bulk for my restaurant. The quality was excellent and delivery was prompt. AJOKE FOOD MART is truly a trusted brand!",
    rating: 5,
    initial: "K",
  },
  {
    id: "t5",
    name: "Fatima D.",
    location: "Okuku",
    review: "The customer service is amazing! They responded quickly on WhatsApp and made ordering so easy. The products are fresh and genuine. I love this store!",
    rating: 5,
    initial: "F",
  },
];

// ─── Statistics ───────────────────────────────────────────────────────────────
export const STATISTICS: Statistic[] = [
  { id: "s1", value: 500,  suffix: "+", label: "Happy Customers",       icon: "users" },
  { id: "s2", value: 1000, suffix: "+", label: "Orders Delivered",      icon: "package" },
  { id: "s3", value: 99,   suffix: "%", label: "Customer Satisfaction", icon: "star" },
  { id: "s4", value: 4,    suffix: "+", label: "Product Categories",    icon: "shopping-cart" },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  { id: "f1", icon: "sparkles",      title: "Premium Quality",     description: "Only the finest raw food products, carefully sourced from trusted farmers." },
  { id: "f2", icon: "badge-dollar",  title: "Affordable Pricing",  description: "Competitive prices that give you the best value without compromising quality." },
  { id: "f3", icon: "truck",         title: "Fast Delivery",         description: "Swift and reliable delivery to your doorstep anywhere in Nigeria." },
  { id: "f4", icon: "trophy",        title: "Trusted Brand",       description: "Hundreds of satisfied customers trust AJOKE FOOD MART for their food needs." },
  { id: "f5", icon: "heart",         title: "Customer First",      description: "Exceptional customer service — we're always available to assist you." },
  { id: "f6", icon: "globe",         title: "Nationwide Delivery", description: "We deliver across all 36 states in Nigeria. Order from anywhere!" },
];
