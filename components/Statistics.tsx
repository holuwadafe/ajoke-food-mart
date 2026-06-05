"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATISTICS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { scrollVariants, scrollVariantsMobile, scrollTransition, scrollViewport, scrollViewportMobile } from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";
import { AppIcon } from "@/lib/icons";

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof STATISTICS)[0];
  index: number;
  active: boolean;
}) {
  const isMobile = useIsMobile();
  const count = useCountUp(stat.value, 2200, active);
  const variants = isMobile ? scrollVariantsMobile : scrollVariants;
  const viewport = isMobile ? scrollViewportMobile : scrollViewport;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants.fadeUp}
      transition={scrollTransition(index * 0.06, 0.45)}
      whileHover={isMobile ? undefined : { y: -6, scale: 1.02 }}
      className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 text-center group relative overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Icon */}
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <AppIcon name={stat.icon} size={36} />
      </div>

      {/* Counter */}
      <div className="flex items-end justify-center gap-1 mb-2">
        <span
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold counter-number text-gold-gradient"
        >
          {count.toLocaleString()}
        </span>
        <span
          className="font-display text-3xl font-bold mb-1"
          style={{ color: "var(--gold-primary)" }}
        >
          {stat.suffix}
        </span>
      </div>

      <p
        className="font-body text-sm tracking-wider uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {stat.label}
      </p>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold-primary), transparent)",
        }}
      />
    </motion.div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative section-pad"
      style={{ background: "var(--black-primary)" }}
    >
      {/* Decorative horizontal lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="text-center section-header-gap">
          <p className="section-label mb-3">Our Impact</p>
          <h2
            className="section-heading font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Numbers That <span className="text-gold-gradient">Speak</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATISTICS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
