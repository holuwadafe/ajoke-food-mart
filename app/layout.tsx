import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajokefoodmart.com"),
  title: {
    default: "AJOKE FOOD MART — Quality You Can Trust",
    template: "%s | AJOKE FOOD MART",
  },
  description:
    "AJOKE FOOD MART is your trusted supplier of premium raw food products in Nigeria. Order quality Garri (Ijebu), Palm Oil, Rice and Beans at affordable prices with nationwide delivery.",
  keywords: [
    "Ajoke Food Mart",
    "Nigerian raw food",
    "Garri Ijebu",
    "Palm Oil",
    "Local Rice",
    "Beans",
    "Food supplier Nigeria",
    "Osogbo food",
    "Okuku food",
    "Nationwide delivery Nigeria",
    "Quality raw food",
    "Wholesale food Nigeria",
  ],
  authors: [{ name: "AJOKE FOOD MART" }],
  creator: "AJOKE FOOD MART",
  publisher: "AJOKE FOOD MART",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://ajokefoodmart.com",
    siteName: "AJOKE FOOD MART",
    title: "AJOKE FOOD MART — Quality You Can Trust",
    description:
      "Premium Nigerian raw food products — Garri (Ijebu), Palm Oil, Rice & Beans. Affordable prices, fast delivery, nationwide shipping.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AJOKE FOOD MART — Quality You Can Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AJOKE FOOD MART — Quality You Can Trust",
    description: "Premium Nigerian raw food products at affordable prices. Order now!",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/Images/ajoke logo.png" }],
    apple: [{ url: "/Images/ajoke logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#D4AF37" },
    { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "AJOKE FOOD MART",
              description:
                "Trusted supplier of quality raw food products including Garri (Ijebu), Rice, Beans and Palm Oil.",
              url: "https://ajokefoodmart.com",
              telephone: "+2349051187341",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Osogbo",
                addressRegion: "Osun State",
                addressCountry: "NG",
              },
              servesCuisine: "Nigerian",
              priceRange: "₦₦",
              sameAs: ["https://tiktok.com/@ajokefoodmart"],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
