"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppIcon, CATEGORY_ICONS, GoldStars, IconBadge } from "@/lib/icons";
import type { Product, ProductCategory } from "@/types";
import { PRODUCT_CATEGORIES, buildWhatsAppOrderURL } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import {
  scrollVariants,
  scrollVariantsMobile,
  scrollTransition,
  scrollViewport,
  scrollViewportMobile,
} from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";

const ALL = "all";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(ALL);
  const [searchQuery, setSearchQuery]       = useState("");

  const filteredProducts = useMemo<Product[]>(() => {
    let products: Product[] = [];

    if (activeCategory === ALL) {
      products = PRODUCT_CATEGORIES.flatMap((c) => c.products);
    } else {
      products = PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)?.products ?? [];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.weight.toLowerCase().includes(q) ||
          p.fullName.toLowerCase().includes(q)
      );
    }
    return products;
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="products"
      className="relative section-pad"
      style={{ background: "var(--black-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader />

        <ScrollReveal immediate variant="scaleIn" delay={0.1} className="max-w-md mx-auto mb-6 sm:mb-8">
          <div className="search-bar flex items-center gap-3 px-5 py-3">
            <AppIcon name="search" size={16} className="opacity-70" />
            <input
              type="text"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm font-body"
              style={{ color: "var(--text-primary)" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                ✕
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal immediate variant="fadeDown" delay={0.15} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          <button
            onClick={() => setActiveCategory(ALL)}
            className={`category-pill px-5 py-2 rounded-full text-sm ${activeCategory === ALL ? "active" : ""}`}
          >
            <span className="inline-flex items-center gap-1.5">
              <AppIcon name="shopping-cart" size={14} />
              All Products
            </span>
          </button>
          {PRODUCT_CATEGORIES.filter(cat => !cat.comingSoon).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill px-5 py-2 rounded-full text-sm ${activeCategory === cat.id ? "active" : ""}`}
            >
              <span className="inline-flex items-center gap-1.5">
                <AppIcon name={CATEGORY_ICONS[cat.id]} size={14} />
                {cat.label}
              </span>
            </button>
          ))}
        </ScrollReveal>

        {activeCategory === ALL && !searchQuery ? (
          <div className="space-y-8 md:space-y-12 lg:space-y-14">
            {PRODUCT_CATEGORIES.map((cat, ci) => (
              <ScrollReveal key={cat.id} variant="fadeUp" delay={ci * 0.05}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <IconBadge name={CATEGORY_ICONS[cat.id]} size={24} className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0" />
                  <div className="min-w-0">
                    <h3
                      className="font-display text-xl sm:text-2xl font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cat.label}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {cat.description}
                    </p>
                  </div>
                  <div
                    className="hidden sm:block flex-1 h-px ml-4"
                    style={{ background: "rgba(212,175,55,0.1)" }}
                  />
                </div>
                {cat.comingSoon ? (
                  <div className="text-center py-12 md:py-16">
                    <p className="font-display text-2xl sm:text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      🚀 Coming Soon
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      We&apos;re preparing premium {cat.label} for you. Stay tuned!
                    </p>
                  </div>
                ) : (
                  <ProductGrid products={cat.products} />
                )}
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-10 md:py-14">
                  <div className="flex justify-center mb-3">
                    <IconBadge name="search" size={28} className="w-14 h-14 rounded-2xl mx-auto" />
                  </div>
                  <p
                    className="font-display text-xl sm:text-2xl mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    No products found
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Try a different keyword or category
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <ScrollReveal immediate variant="blurUp" className="text-center section-header-gap">
      <p className="section-label mb-3">Our Products</p>
      <h2
        className="section-heading font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Premium <span className="text-gold-gradient">Raw Food</span>
      </h2>
      <p className="font-body text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
        Every product is carefully sourced and quality-checked to deliver only the finest to your table.
      </p>
    </ScrollReveal>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isMobile = useIsMobile();
  const variants = isMobile ? scrollVariantsMobile : scrollVariants;
  const viewport = isMobile ? scrollViewportMobile : scrollViewport;

  const handleOrder = () => {
    window.open(buildWhatsAppOrderURL(product), "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants.fadeUp}
      transition={scrollTransition(Math.min(index * 0.04, 0.2), 0.45)}
      whileHover={isMobile ? undefined : { y: -6, scale: 1.02 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div
        className="relative h-36 sm:h-44 md:h-48 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${product.bgColor} 0%, #1a1208 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.6) 0%, transparent 50%)",
          }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={isMobile ? undefined : { scale: 1.12, rotate: 4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {product.icon ? (
            <Image
              src={product.icon}
              alt={product.name}
              fill
              className="object-contain w-full h-full"
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
            />
          ) : (
            <IconBadge
              name={CATEGORY_ICONS[product.category]}
              size={40}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl"
            />
          )}
        </motion.div>

        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            background: "rgba(212,175,55,0.2)",
            border: "1px solid rgba(212,175,55,0.35)",
            color: "var(--gold-light)",
            backdropFilter: "blur(8px)",
          }}
        >
          {product.weight}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-xs tracking-wider uppercase mb-1" style={{ color: "var(--text-muted)" }}>
          {product.categoryLabel}
        </p>
        <h3
          className="font-display text-lg sm:text-xl font-semibold mb-1 leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm mb-3 sm:mb-4" style={{ color: "var(--text-muted)" }}>
          {product.weight} pack
        </p>

        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <p className="font-display text-xl sm:text-2xl font-bold text-gold-gradient">
            {product.priceDisplay}
          </p>
          <GoldStars size={12} />
        </div>

        <motion.button
          onClick={handleOrder}
          whileTap={{ scale: 0.97 }}
          className="w-full btn-gold py-3 rounded-xl text-xs tracking-wider flex items-center justify-center gap-2 relative z-10"
        >
          <Image
            src="/Images/whatsapplogo.jpg"
            alt="WhatsApp"
            width={14}
            height={14}
            className="relative z-10 object-contain"
          />
          <span className="relative z-10">Order via WhatsApp</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
