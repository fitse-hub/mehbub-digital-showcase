import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const s = services[active] ?? services[0]!;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Selector */}
      <div role="tablist" aria-label="Services" className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
        {services.map((item, i) => {
          const on = i === active;
          return (
            <button
              key={item.slug}
              role="tab"
              aria-selected={on}
              aria-controls="service-panel"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`group relative flex shrink-0 items-center gap-4 rounded-full border px-4 py-2 text-left transition-colors lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 ${on ? "border-primary bg-primary text-primary-foreground lg:bg-transparent lg:text-foreground" : "bg-background text-muted-foreground hover:text-foreground lg:bg-transparent"}`}
            >
              <span className={`hidden font-mono text-xs transition-colors lg:inline ${on ? "text-primary" : ""}`}>{item.num}</span>
              <span className="whitespace-nowrap text-sm font-medium lg:whitespace-normal lg:text-lg">{item.title}</span>
              <ArrowRight className={`ml-auto hidden size-4 shrink-0 transition-all duration-300 lg:block ${on ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0"}`} />
              {on && <motion.span layoutId="svc-bar" className="absolute -bottom-px left-0 hidden h-0.5 w-full bg-primary lg:block" transition={{ type: "spring", stiffness: 400, damping: 36 }} />}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div id="service-panel" role="tabpanel" className="lg:col-span-7">
        <div className="overflow-hidden rounded-xl border bg-card shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--foreground)_25%,transparent)] lg:sticky lg:top-24">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.slug}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-52 overflow-hidden border-b bg-surface md:h-60">
                {s.image ? (
                  <img src={s.image} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${s.imagePosition ?? ""}`} />
                ) : (
                  <div className="absolute inset-0 bg-accent" aria-hidden>
                    <div className="tech-grid absolute inset-0" />
                    <s.icon className="absolute -right-6 -top-6 size-64 text-primary opacity-10" strokeWidth={0.8} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" aria-hidden />
                <div className="absolute bottom-5 left-6 flex items-center gap-3 md:left-8">
                  <span className="grid size-12 place-items-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <s.icon className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="rounded-full border bg-background/90 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">{s.num} / {String(services.length).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold md:text-3xl">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.purpose}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {s.components.slice(0, 4).map((c) => (
                    <li key={c.name} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {c.name}
                    </li>
                  ))}
                </ul>
                <Button asChild className="group mt-8">
                  <Link to="/services/$slug" params={{ slug: s.slug }}>Explore this service <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
