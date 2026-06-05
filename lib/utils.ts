import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { IconName } from "@/lib/icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGreeting(): { text: string; icon: IconName } {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return { text: "Good Morning",   icon: "hand" };
  if (hour >= 12 && hour < 17) return { text: "Good Afternoon", icon: "sun" };
  if (hour >= 17 && hour < 21) return { text: "Good Evening",   icon: "moon" };
  return { text: "Welcome",        icon: "hand" };
}

export function formatNumber(value: number): string {
  return value.toLocaleString("en-NG");
}
