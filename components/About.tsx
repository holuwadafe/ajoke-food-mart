"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Shield, Heart } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { AppIcon } from "@/lib/icons";
import ScrollReveal from "@/components/ScrollReveal";
import { staggerContainer, staggerItem, staggerItemDesktop, scrollViewport, scrollViewportMobile } from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";

const HIGHLIGHTS = [
  { icon: Shield,  label: "Premium Quality",    desc: "Every product is tested for quality before delivery." },
  { icon: Truck,   label: "Fast Delivery",      desc: "Same-day delivery available in Osogbo & Okuku." },
  { icon: Heart,   label: "Customer First",      desc: "We prioritize your satisfaction above everything." },
  { icon: MapPin,  label: "Wide Coverage",       desc: "Available in Osogbo, Okuku & nationwide." },
];

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      className="relative section-pad overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--black-primary) 0%, var(--black-medium) 50%, var(--black-primary) 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "var(--gold-primary)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "var(--gold-primary)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal variant="blurUp" className="text-center section-header-gap">
          <p className="section-label mb-3">Our Story</p>
          <h2
            className="section-heading font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            About <span className="text-gold-gradient">Us</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Main About Card */}
          <ScrollReveal variant="fadeLeft" duration={0.7} className="glass-card rounded-3xl p-8 lg:p-10">
            {/* Brand mark */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                  border: "1px solid rgba(212,175,55,0.25)",
                }}
              >
                <BrandLogo size={48} />
              </div>
              <div>
                <h3
                  className="font-accent text-lg tracking-widest"
                  style={{ color: "var(--gold-primary)" }}
                >
                  AJOKE FOOD MART
                </h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Quality You Can Trust
                </p>
              </div>
            </div>

            <p
              className="font-body text-base leading-8 mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="font-display text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                AJOKE FOOD MART
              </span>{" "}
              is a trusted supplier of quality raw food products including{" "}
              <span style={{ color: "var(--gold-primary)" }}>Garri (Ijebu)</span>,{" "}
              <span style={{ color: "var(--gold-primary)" }}>Rice</span>,{" "}
              <span style={{ color: "var(--gold-primary)" }}>Beans</span> and{" "}
              <span style={{ color: "var(--gold-primary)" }}>Palm Oil</span>.
            </p>

            <p
              className="font-body text-base leading-8 mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              We are committed to delivering premium quality food products at affordable
              prices while maintaining excellent customer service. Our products are
              sourced directly from trusted farmers to ensure freshness and authenticity
              in every purchase.
            </p>

            {/* Locations */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              <p
                className="font-accent text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--gold-primary)" }}
              >
                We Serve Customers In
              </p>
              <div className="flex flex-wrap gap-3">
                {(
                  [
                    { label: "Osogbo", icon: "map-pin" as const },
                    { label: "Okuku", icon: "map-pin" as const },
                    { label: "Nationwide Delivery", icon: "rocket" as const },
                  ] as const
                ).map((loc) => (
                  <span
                    key={loc.label}
                    className="px-4 py-2 rounded-full text-sm inline-flex items-center gap-1.5"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <AppIcon name={loc.icon} size={14} />
                    {loc.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={isMobile ? scrollViewportMobile : scrollViewport}
          >
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={isMobile ? staggerItem : staggerItemDesktop}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--gold-primary)" }} />
                  </div>
                  <h4
                    className="font-display text-lg font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.label}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
