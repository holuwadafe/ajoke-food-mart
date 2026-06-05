# AJOKE FOOD MART — Website

> **Quality You Can Trust** — A luxury one-page website for AJOKE FOOD MART, a premium Nigerian raw food business.

---

## 🚀 Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Framework   | Next.js 15 (App Router) |
| Language    | TypeScript           |
| Styling     | Tailwind CSS v3      |
| Animation   | Framer Motion        |
| Icons       | Lucide React         |
| Fonts       | Cormorant Garamond · Jost · Cinzel |

---

## ✨ Features

- **Luxury Gold + Black** theme with glassmorphism cards
- **Dynamic greeting** (Morning / Afternoon / Evening / Night) based on visitor's local time
- **WhatsApp ordering** — prefilled messages auto-generated per product
- **Product search** and **category filter** (Garri, Palm Oil, Rice, Beans)
- **Animated counters** for statistics section
- **Testimonial carousel** with auto-advance
- **Floating particles** canvas background
- **Dark / Light theme** toggle
- **Scroll progress** indicator bar
- **Back-to-top** button
- **Floating WhatsApp** chat button
- **Loading animation** on first load
- **PWA** manifest
- **SEO** metadata + Open Graph + Structured Data (JSON-LD)
- **Fully responsive** (Mobile · Tablet · Desktop)
- **Smooth scrolling** + Framer Motion scroll reveal

---

## 📦 Project Structure

```
ajoke-food-mart/
├── app/
│   ├── layout.tsx          # Root layout · SEO metadata · JSON-LD
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles · CSS variables · utilities
│
├── components/
│   ├── Navbar.tsx          # Sticky glassmorphism navbar · mobile menu · theme toggle
│   ├── Hero.tsx            # Hero · floating logo · dynamic greeting · CTA
│   ├── Products.tsx        # Product cards · search · category filter · WhatsApp order
│   ├── About.tsx           # About section · glass card · locations
│   ├── WhyChooseUs.tsx     # Feature cards with icons
│   ├── Testimonials.tsx    # Sliding testimonial carousel
│   ├── Statistics.tsx      # Animated number counters
│   ├── Contact.tsx         # Contact cards · WhatsApp CTA · map placeholder
│   ├── Footer.tsx          # Full footer · links · social icons
│   ├── FloatingWhatsApp.tsx # Fixed WhatsApp chat button
│   ├── ScrollProgress.tsx  # Top scroll progress bar
│   ├── BackToTop.tsx       # Back-to-top button
│   ├── LoadingAnimation.tsx # Initial page loader
│   └── Particles.tsx       # Floating gold particles (canvas)
│
├── lib/
│   ├── data.ts             # All products · testimonials · features · data
│   └── utils.ts            # cn() helper · getGreeting()
│
├── types/
│   └── index.ts            # TypeScript types & interfaces
│
├── public/
│   └── manifest.json       # PWA manifest
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** ≥ 18.17
- **npm** ≥ 9 (or pnpm/yarn)

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## ⚙️ Configuration

### WhatsApp Number
Edit `lib/data.ts`:
```ts
export const WHATSAPP_NUMBER = "2349051187341"; // change to your number
export const PHONE_NUMBER    = "+234 706 910 6458";
export const TIKTOK_HANDLE   = "@ajokefoodmart";
```

### Products
All products are defined in `lib/data.ts` → `PRODUCT_CATEGORIES`. Add, remove or update products there:
```ts
{
  id: "garri-1kg",
  name: "Premium Garri",
  fullName: "Premium Garri (Ijebu) — 1kg",
  weight: "1kg",
  price: 2500,
  priceDisplay: "₦2,500",
  emoji: "🌾",
  ...
}
```

### Colors / Theme
Edit `app/globals.css` → `:root` block:
```css
:root {
  --gold-primary:  #D4AF37;
  --gold-light:    #FFE06B;
  --black-primary: #080808;
  ...
}
```

---

## 📱 WhatsApp Order Flow

When a user clicks **"Order via WhatsApp"** on any product card, this message is sent:

```
Hello AJOKE FOOD MART 👋,

I want to order:

*Premium Garri (Ijebu) — 5kg*
Price: *₦11,500*

Please provide payment and delivery details. Thank you! 🙏
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Upload /out directory to Netlify
```

### cPanel / Shared Hosting
```bash
npm run build
# Upload .next/, package.json, next.config.ts to server
# Run: node_modules/.bin/next start
```

---

## 🎨 Design System

| Token           | Value              |
|-----------------|--------------------|
| Gold Primary    | `#D4AF37`          |
| Gold Light      | `#FFE06B`          |
| Gold Dark       | `#C49B2A`          |
| Black Primary   | `#080808`          |
| Black Card      | `#111111`          |
| Text Primary    | `#F5F0E0`          |
| Text Muted      | `#9A8C6E`          |
| Display Font    | Cormorant Garamond |
| Body Font       | Jost               |
| Accent Font     | Cinzel             |

---

## 📋 Sections Checklist

- [x] Navigation Bar (sticky · glassmorphism · mobile hamburger · theme toggle)
- [x] Hero (floating logo · dynamic greeting · CTA buttons)
- [x] Products (4 categories · 12 products · search · filter · WhatsApp order)
- [x] About (glass card · locations)
- [x] Why Choose Us (6 feature cards)
- [x] Testimonials (carousel · 5 reviews · auto-advance)
- [x] Statistics (animated counters)
- [x] Contact (WhatsApp · Phone · TikTok · Map)
- [x] Footer (links · social · copyright)
- [x] Floating WhatsApp Button
- [x] Scroll Progress Indicator
- [x] Back to Top Button
- [x] Loading Animation
- [x] Floating Particles
- [x] Dark/Light Theme Toggle
- [x] PWA Manifest
- [x] SEO Metadata & Open Graph
- [x] JSON-LD Structured Data

---

**© 2025 AJOKE FOOD MART — Quality You Can Trust**
# ajoke-food-mart
