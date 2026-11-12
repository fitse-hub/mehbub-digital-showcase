import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Product = {
  id: string;
  num: string;
  name: string;
  line: string;
  img: { src: string; alt: string; position?: string };
  tone: "sun" | "ink";
};

/**
 * Horizontal product banner: copy on the left, artwork flush to the right edge.
 * The "sun" artwork is placed flush so its own yellow edge meets the identical
 * panel yellow — the graphic is never cropped or letter-boxed.
 */
export function ProductCard({
  p,
  href,
  heading = "h3",
}: {
  p: Product;
  href: string;
  heading?: "h2" | "h3";
}) {
  const sun = p.tone === "sun";
  const Title = heading;

  return (
    <a
      href={href}
      className={cn(
        "group relative flex h-[17rem] overflow-hidden rounded-md border transition-colors sm:h-[18.5rem]",
        sun
          ? "border-ink/10 bg-[#FBE500] text-ink hover:border-ink/30"
          : "border-ink-line bg-ink text-ink-foreground hover:border-signal/40",
      )}
    >
      <div className="relative z-10 flex h-full flex-col justify-between p-5 pr-[10.5rem] sm:p-7 sm:pr-[12rem]">
        <div>
          <p className={cn("font-mono text-xs", sun ? "text-ink/50" : "text-ink-muted")}>{p.num}</p>
          <Title className="mt-2.5 text-lg font-semibold leading-snug md:text-xl">{p.name}</Title>
          <p className={cn("mt-2 text-xs leading-relaxed sm:text-sm", sun ? "text-ink/70" : "text-ink-muted")}>
            {p.line}
          </p>
        </div>
        <span
          className={cn(
            "inline-flex size-9 shrink-0 items-center justify-center self-start rounded-full border transition-colors",
            sun
              ? "border-ink/20 group-hover:bg-ink group-hover:text-[#FBE500]"
              : "border-ink-line group-hover:border-signal group-hover:bg-signal group-hover:text-ink-foreground",
          )}
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      {sun ? (
        <img
          src={p.img.src}
          alt={p.img.alt}
          loading="lazy"
          className="absolute inset-y-0 right-0 h-full w-auto origin-right transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <>
          <img
            src={p.img.src}
            alt={p.img.alt}
            loading="lazy"
            className={cn(
              "absolute inset-y-0 right-0 h-full w-[46%] object-cover transition-transform duration-700 group-hover:scale-[1.04]",
              p.img.position,
            )}
          />
          <div
            className="absolute inset-y-0 right-0 w-[46%] bg-gradient-to-r from-ink via-ink/30 to-transparent"
            aria-hidden
          />
        </>
      )}
    </a>
  );
}
