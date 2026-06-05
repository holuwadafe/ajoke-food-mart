"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { scrollVariants, scrollVariantsMobile, scrollTransition, scrollViewport, scrollViewportMobile } from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";
import { AppIcon } from "@/lib/icons";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const isMobile = useIsMobile();
  const variants = isMobile ? scrollVariantsMobile : scrollVariants;
  const viewport = isMobile ? scrollViewportMobile : scrollViewport;

  return (
    <section
      className="relative section-pad"
      style={{ background: "var(--black-primary)" }}
    >
      {/* Background deco */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fadeDown" className="text-center section-header-gap">
          <p className="section-label mb-3">Our Advantage</p>
          <h2
            className="section-heading font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose <span className="text-gold-gradient">Us</span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            We stand out from the crowd with our commitment to quality, reliability and exceptional service.
          </p>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={variants[i % 2 === 0 ? "fadeLeft" : "fadeRight"]}
              transition={scrollTransition(i * 0.06, 0.45)}
              whileHover={isMobile ? undefined : { y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Check badge */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon disc */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <AppIcon name={feature.icon} size={26} />
                </div>

                <div
                  className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(212,175,55,0.15)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <Check size={12} style={{ color: "var(--gold-primary)" }} />
                </div>
              </div>

              <h3
                className="font-display text-xl font-semibold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--gold-primary), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
