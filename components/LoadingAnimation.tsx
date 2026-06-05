"use client";

import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

export default function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="loading-overlay"
      style={{ background: "#080808" }}
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo Ring */}
        <div className="relative">
          {/* Spinner */}
          <div className="loader-ring" />

          {/* Center logo */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ inset: "8px" }}
          >
            <BrandLogo size={48} priority />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-accent text-xl tracking-[0.4em]"
            style={{ color: "var(--gold-primary)" }}
          >
            AJOKE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="font-body text-xs tracking-[0.3em] uppercase mt-1"
            style={{ color: "var(--text-muted)" }}
          >
            Food Mart
          </motion.p>
        </div>

        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--gold-primary)" }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-12 font-body text-xs tracking-[0.2em] uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        Quality You Can Trust
      </motion.p>
    </motion.div>
  );
}
