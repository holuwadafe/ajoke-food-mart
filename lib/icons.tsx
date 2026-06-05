import {
  Wheat,
  Droplet,
  Package,
  Sprout,
  Users,
  Star,
  ShoppingCart,
  Sparkles,
  BadgeDollarSign,
  Truck,
  Trophy,
  Heart,
  Globe,
  Hand,
  Sun,
  Moon,
  Check,
  Search,
  MapPin,
  Rocket,
  Map,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";

export const ICONS = {
  wheat: Wheat,
  droplet: Droplet,
  package: Package,
  sprout: Sprout,
  users: Users,
  star: Star,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  "badge-dollar": BadgeDollarSign,
  truck: Truck,
  trophy: Trophy,
  heart: Heart,
  globe: Globe,
  hand: Hand,
  sun: Sun,
  moon: Moon,
  check: Check,
  search: Search,
  "map-pin": MapPin,
  rocket: Rocket,
  map: Map,
  "message-circle": MessageCircle,
} as const;

export type IconName = keyof typeof ICONS;

export const CATEGORY_ICONS: Record<ProductCategory, IconName> = {
  garri: "wheat",
  "palm-oil": "droplet",
  rice: "package",
  beans: "sprout",
};

interface AppIconProps {
  name: IconName;
  size?: number;
  className?: string;
  filled?: boolean;
}

export function AppIcon({ name, size = 20, className, filled }: AppIconProps) {
  const Icon = ICONS[name];
  return (
    <Icon
      size={size}
      className={cn("shrink-0", className)}
      style={{ color: "var(--gold-primary)" }}
      fill={filled ? "currentColor" : "none"}
      strokeWidth={filled ? 1.5 : 2}
    />
  );
}

interface IconBadgeProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function IconBadge({ name, size = 22, className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        className
      )}
      style={{
        background: "rgba(212,175,55,0.1)",
        border: "1px solid rgba(212,175,55,0.22)",
      }}
    >
      <AppIcon name={name} size={size} />
    </div>
  );
}

export function GoldStars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <AppIcon key={i} name="star" size={size} filled />
      ))}
    </div>
  );
}
