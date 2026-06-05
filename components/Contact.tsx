"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, TIKTOK_HANDLE, buildWhatsAppChatURL } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { scrollVariants, scrollVariantsMobile, scrollTransition, scrollViewport, scrollViewportMobile } from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";

const CONTACT_ITEMS = [
  {
    icon: "/Images/whatsapplogo.jpg",
    label: "WhatsApp",
    value: "+234 905 118 7341",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: "#25D366",
    bgColor: "rgba(37,211,102,0.08)",
    borderColor: "rgba(37,211,102,0.2)",
    cta: "Chat Now",
  },
  {
    icon: "/Images/phone.jpg",
    label: "Phone",
    value: PHONE_NUMBER,
    href: `tel:+2347069106458`,
    color: "var(--gold-primary)",
    bgColor: "rgba(212,175,55,0.08)",
    borderColor: "rgba(212,175,55,0.2)",
    cta: "Call Now",
  },
  {
    icon: "/Images/tictok.jpg",
    label: "TikTok",
    value: TIKTOK_HANDLE,
    href: `https://tiktok.com/${TIKTOK_HANDLE}`,
    color: "#ee1d52",
    bgColor: "rgba(238,29,82,0.08)",
    borderColor: "rgba(238,29,82,0.2)",
    cta: "Follow Us",
  },
  {
    icon: "map-pin",
    label: "Location",
    value: "Osogbo, Okuku & Nationwide",
    href: "https://maps.google.com/?q=Osogbo,Osun,Nigeria",
    color: "var(--gold-primary)",
    bgColor: "rgba(212,175,55,0.08)",
    borderColor: "rgba(212,175,55,0.2)",
    cta: "View Map",
  },
];

export default function Contact() {
  const isMobile = useIsMobile();
  const variants = isMobile ? scrollVariantsMobile : scrollVariants;
  const viewport = isMobile ? scrollViewportMobile : scrollViewport;

  return (
    <section
      id="contact"
      className="relative section-pad overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--black-primary) 0%, var(--black-medium) 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 opacity-10 pointer-events-none blur-3xl"
        style={{ background: "var(--gold-primary)" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal variant="blurUp" className="text-center section-header-gap">
          <p className="section-label mb-3">Get In Touch</p>
          <h2
            className="section-heading font-display text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Contact <span className="text-gold-gradient">Us</span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Ready to order? Reach out via WhatsApp for the fastest response. We&apos;re always here to help!
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONTACT_ITEMS.map((item, i) => {
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={variants.fadeUp}
                  transition={scrollTransition(i * 0.06, 0.45)}
                  whileHover={isMobile ? undefined : { y: -4, scale: 1.01 }}
                  className="glass-card rounded-2xl p-6 group cursor-pointer block"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: item.bgColor,
                      border: `1px solid ${item.borderColor}`,
                    }}
                  >
                    {item.icon.startsWith("/") ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    ) : (
                      <MapPin size={20} style={{ color: item.color }} />
                    )}
                  </div>

                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                    {item.label}
                  </p>
                  <p
                    className="font-body font-semibold text-sm mb-4 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.value}
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200"
                    style={{ color: item.color }}
                  >
                    {item.cta}
                    <ExternalLink size={11} />
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* WhatsApp CTA Card + Map */}
          <div className="flex flex-col gap-5">
            {/* Big WhatsApp CTA */}
            <ScrollReveal variant="fadeRight" delay={0.1} className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}
                >
                  <Image
                    src="/Images/whatsapplogo.jpg"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <h3
                    className="font-display text-xl font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Order via WhatsApp
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Fastest response guaranteed
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                Click the button below to start a WhatsApp conversation with us. Tell us what you need and we&apos;ll get back to you instantly with pricing and delivery details.
              </p>
              <motion.a
                href={buildWhatsAppChatURL()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold tracking-wider text-white"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                }}
              >
                <Image
                  src="/Images/whatsapplogo.jpg"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                Start WhatsApp Chat
              </motion.a>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal
              variant="revealRotate"
              delay={0.2}
              className="map-placeholder rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[180px] relative overflow-hidden"
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.22)",
                  }}
                >
                  <MapPin size={28} style={{ color: "var(--gold-primary)" }} />
                </div>
                <h4 className="font-display text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                  Osogbo & Okuku
                </h4>
                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  Osun State, Nigeria
                </p>
                <a
                  href="https://maps.google.com/?q=Osogbo,Osun,Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold text-xs px-5 py-2 rounded-full inline-flex items-center gap-1.5"
                >
                  <MapPin size={12} /> Open in Google Maps
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
