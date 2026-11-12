import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

const total = String(services.length).padStart(2, "0");

/** Services mega-menu: list on the left, hovered service's photo on the right. */
export function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0]!;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_21rem] overflow-hidden rounded-xl border bg-popover shadow-hero">
      <div className="flex flex-col p-3">
        <div className="flex items-baseline justify-between px-3 pb-3 pt-2">
          <span className="eyebrow">Services</span>
          <span className="font-mono text-[0.7rem] text-muted-foreground">{total} disciplines</span>
        </div>

        <ul className="grid grid-cols-2 gap-x-1">
          {services.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={onNavigate}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group flex items-center gap-4 rounded-lg px-3 py-2 text-sm transition-colors",
                    on ? "bg-surface text-foreground" : "text-muted-foreground",
                  )}
                >
                  <span className={cn("w-5 font-mono text-[0.7rem] transition-colors", on && "text-primary")}>{s.num}</span>
                  <span className="flex-1 font-medium leading-snug">{s.title}</span>
                  <ArrowRight className={cn("size-3.5 shrink-0 text-primary transition-all duration-200", on ? "translate-x-0 opacity-100" : "-translate-x-1.5 opacity-0")} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex items-center justify-between border-t px-3 pt-3 pb-1 text-xs">
          <Link to="/services" onClick={onNavigate} className="group inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary">
            View all services <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link to="/contact" onClick={onNavigate} className="text-muted-foreground hover:text-foreground">Talk to an engineer</Link>
        </div>
      </div>

      <Link
        to="/services/$slug"
        params={{ slug: current.slug }}
        onClick={onNavigate}
        tabIndex={-1}
        aria-hidden
        className="group relative m-2 ml-0 overflow-hidden rounded-lg bg-ink"
      >
        {services.map((s, i) => (
          <img
            key={s.slug}
            src={s.image}
            alt=""
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out",
              s.imagePosition,
              i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
            )}
          />
        ))}
        <div className="hero-scrim absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
          <span className="font-mono text-[0.7rem] text-ink-muted">{current.num} / {total}</span>
          <p className="mt-2 text-base font-semibold leading-snug">{current.title}</p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">{current.short}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">
            Explore <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </div>
  );
}
