import type { Variants, Transition } from "framer-motion";

export const scrollEase = [0.22, 1, 0.36, 1] as const;

export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -40px 0px",
} as const;

export const scrollViewportMobile = {
  once: true,
  amount: 0.08,
  margin: "0px",
} as const;

export function scrollTransition(delay = 0, duration = 0.55): Transition {
  return { duration, delay, ease: scrollEase };
}

/** Desktop scroll variants — subtle motion, no large y-offsets that create blank gaps */
export const scrollVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  blurUp: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  revealRotate: {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
} satisfies Record<string, Variants>;

/** Mobile — opacity + tiny movement only to avoid stacked empty space */
export const scrollVariantsMobile = {
  fadeUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeDown: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeRight: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
  blurUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  revealRotate: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
} satisfies Record<string, Variants>;

export type ScrollVariant = keyof typeof scrollVariants;

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: scrollEase },
  },
};

export const staggerItemDesktop: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: scrollEase },
  },
};
