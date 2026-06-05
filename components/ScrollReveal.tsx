"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  scrollVariants,
  scrollVariantsMobile,
  scrollTransition,
  scrollViewport,
  scrollViewportMobile,
  type ScrollVariant,
} from "@/lib/animations";
import { useIsMobile } from "@/lib/useIsMobile";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  variant?: ScrollVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  /** Animate immediately on mount (for above-the-fold blocks) */
  immediate?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.55,
  once = true,
  margin,
  immediate = false,
  className,
  ...props
}: ScrollRevealProps) {
  const isMobile = useIsMobile();
  const variants = isMobile ? scrollVariantsMobile : scrollVariants;
  const viewport = isMobile
    ? scrollViewportMobile
    : { ...scrollViewport, ...(margin !== undefined ? { margin } : {}) };

  return (
    <motion.div
      initial="hidden"
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : viewport}
      variants={variants[variant]}
      transition={scrollTransition(delay, duration)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
