import Image from "next/image";
import { cn } from "@/lib/utils";

export const LOGO_SRC = "/Images/ajoke logo.png";

interface BrandLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = 40,
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={LOGO_SRC}
        alt="Ajoke Food Mart logo"
        fill
        sizes={`${size}px`}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-contain"
      />
    </div>
  );
}
