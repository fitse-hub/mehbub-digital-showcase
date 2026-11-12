import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, heroSlides } from "@/content/home";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 6500;

export function HomeHero() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused]);

  const slide = heroSlides[i] ?? heroSlides[0]!;

  return (
    <section
      className="relative isolate flex h-[clamp(520px,72svh,760px)] items-center overflow-hidden bg-ink text-ink-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fetchPriority={i === 0 ? "high" : "auto"}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition: slide.position }}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4, ease }, scale: { duration: DURATION / 1000 + 1.5, ease: "linear" } }}
        />
      </AnimatePresence>
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />

      <div className="container-x relative flex h-full flex-col justify-end pb-20 pt-16">
        <div className="max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal">
                <span className="h-px w-6 bg-signal" />{slide.kicker}
              </p>
              <h1 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h1>
            </motion.div>
          </AnimatePresence>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <Link to="/services">{hero.primaryCta} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-ink-line bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground">
              <Link to="/contact">{hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex justify-center gap-2.5">
        {heroSlides.map((s, n) => (
          <button
            key={s.kicker}
            onClick={() => setI(n)}
            aria-label={`Show slide ${n + 1}: ${s.kicker}`}
            aria-current={n === i}
            className="relative h-1 w-10 overflow-hidden rounded-full bg-ink-foreground/30 md:w-14"
          >
            {n === i && (
              <span
                key={`${i}-${paused}`}
                className="animate-slide-progress absolute inset-0 origin-left bg-ink-foreground"
                style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
