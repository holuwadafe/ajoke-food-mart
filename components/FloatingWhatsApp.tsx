"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppChatURL } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppChatURL()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center wa-pulse shadow-lg"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />

      {/* Tooltip */}
      <span
        className="absolute right-16 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none hidden md:block"
        style={{
          background: "#25D366",
          color: "white",
        }}
      >
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
