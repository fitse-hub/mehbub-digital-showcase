import color from "@/assets/mehbub-logo.png.asset.json";
import white from "@/assets/mehbub-logo-white.png.asset.json";

export function Logo({ className = "h-9", variant = "color" }: { className?: string; variant?: "color" | "white" }) {
  return <img src={(variant === "white" ? white : color).url} alt="Mehbub General Trading PLC" className={`w-auto ${className}`} />;
}
