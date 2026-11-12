import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProject as fp } from "@/content/home";

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 6500;

export function FeaturedProject() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = fp.slides.length;
  const go = (i: number) => setActive((i + total) % total);
  const slide = fp.slides[active] ?? fp.slides[0]!;

  return (
    <section
      className="relative overflow-hidden bg-ink text-ink-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Wollo University project"
    >
      <div className="grid lg:grid-cols-2">
        {/* Images */}
        <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[34rem]">
          {fp.slides.map((s, i) => (
            <motion.img
              key={s.image}
              src={s.image}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              aria-hidden={i !== active}
              className="absolute inset-0 h-full w-full object-cover"
              initial={false}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{
                opacity: { duration: 1, ease },
              }}
            />
          ))}

          {/* Image caption */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.label}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-md border border-ink-line bg-ink/70 px-3 py-2 backdrop-blur"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-signal">{slide.label}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous image"
                className="grid size-10 place-items-center rounded-full border border-ink-line bg-ink/70 text-ink-foreground backdrop-blur transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next image"
                className="grid size-10 place-items-center rounded-full border border-ink-line bg-ink/70 text-ink-foreground backdrop-blur transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col px-6 py-12 lg:px-12 lg:py-14">
          <p className="eyebrow text-signal">{fp.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold md:text-4xl">{fp.title}</h2>
          <p className="mt-4 text-base text-ink-muted">{fp.text}</p>

          {/* Dynamic slide text */}
          <div className="relative mt-7 min-h-[10rem] border-t border-ink-line pt-6" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease }}
              >
                <p className="font-mono text-xs text-ink-muted">
                  <span className="text-ink-foreground">{String(active + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{slide.title}</h3>
                <p className="mt-3 max-w-lg text-ink-muted">{slide.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {slide.tags.map((t) => (
                    <li key={t} className="rounded-sm border border-ink-line px-2.5 py-1 font-mono text-[0.7rem] text-ink-foreground">{t}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step selector with progress */}
          <div className="mt-6 grid grid-cols-4 gap-3" role="tablist" aria-label="Project areas">
            {fp.slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => go(i)}
                className="group text-left"
              >
                <span className="relative block h-0.5 overflow-hidden rounded-full bg-ink-line">
                  {i === active && (
                    <span
                      key={`${active}-${reduce ? "static" : "run"}`}
                      className={`absolute inset-0 origin-left bg-signal ${reduce ? "" : "animate-slide-progress"}`}
                      style={reduce ? undefined : { animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                      onAnimationEnd={() => go(active + 1)}
                    />
                  )}
                  {i < active && <span className="absolute inset-0 bg-ink-muted/50" />}
                </span>
                <span className={`mt-3 block truncate text-xs font-medium transition-colors sm:text-sm ${i === active ? "text-ink-foreground" : "text-ink-muted group-hover:text-ink-foreground"}`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <div className="flex flex-wrap gap-6 border-t border-ink-line pt-6">
              {fp.campuses.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 text-sm"><MapPin className="size-4 text-signal" />{c}</span>
              ))}
            </div>
            <Button asChild variant="outline-ink" size="lg" className="mt-6">
              <Link to="/projects">{fp.cta} <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
