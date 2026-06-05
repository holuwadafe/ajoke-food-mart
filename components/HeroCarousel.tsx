"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_CAROUSEL_SLIDES } from "@/lib/data";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = HERO_CAROUSEL_SLIDES.length;

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 6000);
    return () => clearInterval(id);
  }, [total]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-screen left-1/2 -translate-x-1/2 mb-6 sm:mb-8"
    >
      <div
        className="relative w-full overflow-hidden cover-image"
        style={{
          aspectRatio: "16 / 9",
          maxHeight: "min(50vh, 400px)",
          borderTop: "1px solid rgba(212,175,55,0.2)",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_CAROUSEL_SLIDES[current].src}
              alt={HERO_CAROUSEL_SLIDES[current].alt}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
            <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 z-10">
              <p
                className="font-accent text-[10px] sm:text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--gold-light)" }}
              >
                {HERO_CAROUSEL_SLIDES[current].label}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 glass-card"
        >
          <ChevronLeft size={22} style={{ color: "var(--gold-primary)" }} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 glass-card"
        >
          <ChevronRight size={22} style={{ color: "var(--gold-primary)" }} />
        </button>

        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 z-20 flex items-center gap-1.5">
          {HERO_CAROUSEL_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "22px" : "8px",
                height: "8px",
                background:
                  i === current
                    ? "var(--gold-primary)"
                    : "rgba(212,175,55,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
