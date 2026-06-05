"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ShoppingBag, Star, MessageCircle, Check } from "lucide-react";
import { getGreeting } from "@/lib/utils";
import { AppIcon } from "@/lib/icons";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  const [greeting, setGreeting] = useState(getGreeting);
  const [enableParallax, setEnableParallax] = useState(false);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  useEffect(() => {
    setGreeting(getGreeting());

    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnableParallax(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center overflow-hidden min-h-[calc(100dvh-4rem)] pt-[4.75rem] pb-10 sm:min-h-[calc(100dvh-5rem)] sm:pt-20 sm:pb-12 lg:min-h-screen lg:justify-center lg:py-16"
      style={{ background: "var(--black-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={enableParallax ? { y: heroY, opacity: heroOpacity } : undefined}
        className="relative z-10 flex w-full flex-col items-center text-center"
      >
        <div className="w-full max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 sm:mb-6 w-full flex justify-center"
          >
            <div
              className="inline-flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card border max-w-full"
              style={{ borderColor: "rgba(212,175,55,0.22)" }}
            >
              <span className="inline-flex items-center justify-center sm:justify-start gap-2">
                <AppIcon name={greeting.icon} size={16} />
                <span
                  className="font-body text-sm font-medium leading-tight tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {greeting.text}
                </span>
              </span>
              <span
                className="hidden sm:block w-px h-3.5 shrink-0"
                style={{ background: "rgba(212,175,55,0.35)" }}
              />
              <span
                className="font-body text-[10px] sm:text-xs leading-tight tracking-[0.16em] sm:tracking-[0.18em] uppercase text-center sm:text-left"
                style={{ color: "var(--gold-primary)" }}
              >
                You're Welcome!!!
              </span>
            </div>
          </motion.div>
        </div>

        <HeroCarousel />

        <div className="w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-2 sm:mb-3"
          >
            <span className="text-gold-gradient">AJOKE</span>
            <br />
            <span
              className="text-[0.65em] sm:text-[0.7em]"
              style={{ color: "var(--text-primary)", letterSpacing: "0.1em" }}
            >
              FOOD MART
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5"
          >
            <div className="gold-line" />
            <Star size={10} style={{ color: "var(--gold-primary)" }} fill="currentColor" />
            <div className="gold-line" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="font-accent text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3"
            style={{ color: "var(--gold-primary)" }}
          >
            Quality You Can Trust
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="font-body text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 px-1"
            style={{ color: "var(--text-muted)" }}
          >
            Premium raw food products — Garri (Ijebu), Palm Oil, Rice & Beans.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Serving Osogbo, Okuku &amp; delivering nationwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto"
          >
            <motion.button
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold relative z-10 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm font-bold tracking-widest uppercase shadow-gold"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag size={16} />
                Shop Now
              </span>
            </motion.button>

            <motion.a
              href="https://wa.me/2349051187341"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-gold px-8 py-3.5 sm:py-4 rounded-full text-sm tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} style={{ color: "var(--gold-primary)" }} />
              WhatsApp Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10"
          >
            {["500+ Happy Customers", "Nationwide Delivery", "99% Satisfaction"].map((item) => (
              <span
                key={item}
                className="text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full glass-card inline-flex items-center gap-1.5"
                style={{ color: "var(--text-muted)" }}
              >
                <Check size={12} style={{ color: "var(--gold-primary)" }} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span
          className="text-xs tracking-widest uppercase font-body"
          style={{ color: "var(--text-muted)" }}
        >
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "var(--gold-primary)" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
