"use client";

import { MessageCircle, Phone, MapPin, Video, Heart } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { WHATSAPP_NUMBER } from "@/lib/data";

const QUICK_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "Products", href: "#products" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const PRODUCT_LINKS = [
  { label: "Garri (Ijebu)", href: "#products" },
  { label: "Palm Oil",      href: "#products" },
  { label: "Local Rice",    href: "#products" },
  { label: "Beans",         href: "#products" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 px-4"
      style={{
        background: "var(--black-medium)",
        borderTop: "1px solid rgba(212,175,55,0.12)",
      }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold-primary), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "var(--gold-primary)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
          {/* Brand */}
          <ScrollReveal variant="fadeLeft" className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "rgba(8,8,8,0.6)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 0 20px rgba(212,175,55,0.3)",
                }}
              >
                <BrandLogo size={36} />
              </div>
              <div>
                <p className="font-accent text-sm font-bold" style={{ color: "var(--gold-primary)" }}>
                  AJOKE
                </p>
                <p className="text-[9px] tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                  FOOD MART
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Your trusted supplier of premium quality raw food products. Quality You Can Trust.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "#25D366" }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} className="text-white" />
              </a>
              <a
                href="https://tiktok.com/@ajokefoodmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "#ee1d52" }}
                aria-label="TikTok"
              >
                <Video size={15} className="text-white" />
              </a>
              <a
                href="tel:+2347069106458"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)" }}
                aria-label="Phone"
              >
                <Phone size={15} style={{ color: "var(--gold-primary)" }} />
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h4 className="font-accent text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold-primary)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-gold-400 flex items-center gap-2 group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="w-4 h-px transition-all duration-200 group-hover:w-6"
                      style={{ background: "var(--gold-primary)" }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Products */}
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <h4 className="font-accent text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold-primary)" }}>
              Products
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="w-4 h-px transition-all duration-200 group-hover:w-6"
                      style={{ background: "var(--gold-primary)" }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="fadeRight" delay={0.2}>
            <h4 className="font-accent text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold-primary)" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold-primary)" }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="text-sm font-medium hover:text-gold-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +234 905 118 7341
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold-primary)" }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Phone</p>
                  <a
                    href="tel:+2347069106458"
                    className="text-sm font-medium hover:text-gold-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    +234 706 910 6458
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold-primary)" }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>Location</p>
                  <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                    Osogbo, Okuku & Nationwide
                  </p>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "rgba(212,175,55,0.08)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} AJOKE FOOD MART. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
            Created by holuwadafedev{" "}
            <Heart size={12} style={{ color: "var(--gold-primary)" }} fill="currentColor" />
            {" "}for Quality Food
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            For inquiries, email us at{" "}
            <a
              href="mailto:holuwadafe@gmail.com"
              className="hover:text-gold-400 transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              holuwadafe@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
