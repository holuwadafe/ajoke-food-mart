"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
      spring.set(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [spring]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX: progress / 100,
        background: "linear-gradient(90deg, #D4AF37, #FFE06B, #D4AF37)",
        width: "100%",
        transformOrigin: "left",
      }}
    />
  );
}
