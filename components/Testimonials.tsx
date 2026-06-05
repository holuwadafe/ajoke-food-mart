"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { GoldStars } from "@/lib/icons";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir]         = useState<1 | -1>(1);
  const total = TESTIMONIALS.length;

  const next = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0, scale: 0.96, rotateY: d > 0 ? 8 : -8 }),
    center:                  { x: 0, opacity: 1, scale: 1, rotateY: 0 },
    exit:   (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0, scale: 0.96, rotateY: d > 0 ? -8 : 8 }),
  };

  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--black-primary) 0%, var(--black-medium) 50%, var(--black-primary) 100%)",
      }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[20rem] leading-none"
        style={{ fontFamily: "Georgia, serif", color: "var(--gold-primary)" }}
      >
        &ldquo;
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="revealRotate" className="text-center section-header-gap">
          <p className="section-label mb-3">Happy Customers</p>
          <h2
            className="section-heading font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What They <span className="text-gold-gradient">Say</span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1000 }}
              className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-center"
            >
              {/* Quote Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <Quote size={20} style={{ color: "var(--gold-primary)" }} />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                <GoldStars count={TESTIMONIALS[current].rating} size={18} />
              </div>

              {/* Review */}
              <p
                className="font-display text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;{TESTIMONIALS[current].review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    background: "linear-gradient(135deg, var(--gold-dark), var(--gold-primary))",
                    color: "#000",
                  }}
                >
                  {TESTIMONIALS[current].initial}
                </div>
                <div className="text-left">
                  <p className="font-body font-semibold" style={{ color: "var(--text-primary)" }}>
                    {TESTIMONIALS[current].name}
                  </p>
                  {TESTIMONIALS[current].location && (
                    <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                      <MapPin size={11} style={{ color: "var(--gold-primary)" }} />
                      {TESTIMONIALS[current].location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center"
            >
              <ChevronLeft size={18} style={{ color: "var(--gold-primary)" }} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current
                      ? "var(--gold-primary)"
                      : "rgba(212,175,55,0.25)",
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center"
            >
              <ChevronRight size={18} style={{ color: "var(--gold-primary)" }} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
