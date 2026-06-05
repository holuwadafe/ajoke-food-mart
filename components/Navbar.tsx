"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: "Home",     href: "#home"     },
  { label: "Products", href: "#products" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    const sections = ["home", "products", "about", "contact"];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-gold bg-black/40">
                  <BrandLogo size={36} priority />
                </div>
                <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300" />
              </div>
              <div>
                <p className="font-accent text-sm font-bold text-gold-500 leading-none tracking-widest">
                  AJOKE
                </p>
                <p className="font-body text-[10px] text-gold-600/80 tracking-[0.2em] leading-none mt-0.5">
                  FOOD MART
                </p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  whileHover={{ y: -1 }}
                  className={`font-body text-sm tracking-wider transition-colors duration-200 relative pb-1 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-gold-500"
                      : "text-text-muted hover:text-gold-400"
                  }`}
                  style={{
                    color: activeSection === item.href.replace("#", "")
                      ? "var(--gold-primary)"
                      : "var(--text-muted)",
                  }}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: "var(--gold-primary)" }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full glass-card hidden md:flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={16} style={{ color: "var(--gold-primary)" }} />
                ) : (
                  <Moon size={16} style={{ color: "var(--gold-primary)" }} />
                )}
              </motion.button>

              {/* Order CTA */}
              <motion.button
                onClick={() => scrollTo("#products")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs relative z-10"
              >
                <span className="relative z-10">Order Now</span>
              </motion.button>

              {/* Mobile hamburger */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-lg glass-card"
                aria-label="Toggle menu"
              >
                {mobileOpen
                  ? <X size={20} style={{ color: "var(--gold-primary)" }} />
                  : <Menu size={20} style={{ color: "var(--gold-primary)" }} />
                }
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                  onClick={() => scrollTo(item.href)}
                  className="font-display text-4xl font-light text-gold-gradient cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex items-center gap-4 mt-6"
              >
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full glass-card"
                >
                  {theme === "dark"
                    ? <Sun size={20} style={{ color: "var(--gold-primary)" }} />
                    : <Moon size={20} style={{ color: "var(--gold-primary)" }} />
                  }
                </button>
                <button
                  onClick={() => scrollTo("#products")}
                  className="btn-gold px-8 py-3 rounded-full text-sm relative z-10"
                >
                  <span className="relative z-10">Order Now</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
