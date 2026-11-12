import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { edu, erp, impact, solutionsHero } from "@/content/solutions";
import { PlayStoreButton } from "@/components/site/PlayStoreButton";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Educational Super App & AI ERP | Mehbub Technologies" },
      { name: "description", content: "Ethiopia's first in-house Educational Super App and an intelligent, AI-powered Business Management (ERP) platform from Mehbub Technologies." },
      { property: "og:title", content: "Mehbub Technologies Solutions — Educational Super App & Intelligent ERP" },
      { property: "og:description", content: "Smarter, bilingual learning for families and adaptable, AI-driven business management for organizations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function Label({ n, children, dark = false }: { n: string; children: string; dark?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${dark ? "text-signal" : ""}`}>
      <span className={dark ? "text-ink-muted" : "text-muted-foreground"}>{n}</span>
      <span className={`h-px w-8 ${dark ? "bg-signal/40" : "bg-primary/40"}`} aria-hidden />
      {children}
    </p>
  );
}

function SolutionsPage() {
  const products = [
    { id: edu.id, num: edu.num, name: edu.name, line: edu.lead, img: edu.image, tone: "sun" as const },
    { id: erp.id, num: erp.num, name: erp.name, line: erp.lead, img: erp.image, tone: "ink" as const },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-wash relative overflow-hidden border-b">
        <div className="tech-grid fade-mask absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative pb-16 pt-16 md:pb-24 md:pt-24">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{solutionsHero.eyebrow}</p>
              <h1 className="display mt-5 text-5xl md:text-7xl">{solutionsHero.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground lg:col-span-5 lg:pb-2">{solutionsHero.intro}</p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={0.08 * i}>
                <ProductCard p={p} href={`#${p.id}`} heading="h2" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Educational Super App */}
      <section id={edu.id} className="scroll-mt-16">
        <div className="container-x py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Label n={edu.num}>{edu.name}</Label>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">{edu.title}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg font-semibold">{edu.lead}</p>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {edu.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {edu.audience.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3.5 py-1.5 text-sm font-medium">
                    <Check className="size-3.5 text-primary" /> {a}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PlayStoreButton />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-wrap items-center justify-center gap-6 overflow-hidden rounded-3xl border bg-[#FBE500] px-6 py-10 shadow-hero sm:gap-10 md:py-14">
              {edu.gallery.map((g, i) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-44 rounded-2xl shadow-xl sm:w-56 md:w-64 ${i === 1 ? "hidden sm:block" : ""}`}
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-20">
            <Reveal className="flex items-end justify-between gap-6">
              <h3 className="text-2xl font-semibold md:text-3xl">Key features</h3>
              <span className="hidden font-mono text-xs text-muted-foreground sm:block">{edu.features.length} capabilities</span>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {edu.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border bg-card p-7 transition-colors hover:border-primary/40">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary"><f.icon className="size-5" /></span>
                    <h4 className="mt-6 text-lg font-semibold">{f.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="h-full overflow-hidden rounded-3xl border">
                <img src={edu.photo.src} alt={edu.photo.alt} className="h-full min-h-72 w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-surface p-8 md:p-10">
                <div>
                  <Quote className="size-8 text-primary" />
                  <p className="eyebrow mt-6">Our Vision</p>
                  <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">{edu.vision}</p>
                </div>
                <Button asChild size="lg" className="group mt-10 self-start">
                  <Link to="/contact">{edu.cta} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02 Intelligent ERP */}
      <section id={erp.id} className="relative scroll-mt-16 overflow-hidden bg-ink text-ink-foreground">
        <div className="tech-grid-dark fade-mask absolute inset-x-0 top-0 h-[44rem]" aria-hidden />
        <div className="container-x relative py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Label n={erp.num} dark>{erp.name}</Label>
              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
                {erp.titleLines.map((l, i) => (
                  <span key={l} className={`block ${i === 2 ? "text-signal" : ""}`}>{l}</span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg font-semibold">{erp.lead}</p>
              <p className="mt-2 text-ink-muted">{erp.tagline}</p>
              <div className="mt-4 space-y-4 text-ink-muted">
                {erp.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-ink-line">
              <img src={erp.image.src} alt={erp.image.alt} className="aspect-[16/9] w-full object-cover md:aspect-[21/10]" loading="lazy" />
            </div>
          </Reveal>

          <div className="mt-20">
            <Reveal className="flex items-end justify-between gap-6">
              <h3 className="text-2xl font-semibold md:text-3xl">Key features</h3>
              <span className="hidden font-mono text-xs text-ink-muted sm:block">{erp.features.length} capabilities</span>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-6">
              {erp.features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 0.06} className={i < 2 ? "md:col-span-3" : "md:col-span-2"}>
                  <div className="h-full rounded-2xl border border-ink-line bg-ink-foreground/5 p-7 transition-colors hover:border-signal/40">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-signal/15 text-signal"><f.icon className="size-5" /></span>
                      <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                    </div>
                    <h4 className="mt-6 text-lg font-semibold">{f.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-12">
            <Reveal className="lg:order-2 lg:col-span-7">
              <div className="h-full overflow-hidden rounded-3xl border border-ink-line">
                <img src={erp.photo.src} alt={erp.photo.alt} className="h-full min-h-72 w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:order-1 lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-ink-line bg-ink-foreground/5 p-8 md:p-10">
                <div>
                  <Quote className="size-8 text-signal" />
                  <p className="eyebrow mt-6 text-signal">Our Vision</p>
                  <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">{erp.vision}</p>
                </div>
                <Button asChild variant="light" size="lg" className="group mt-10 self-start">
                  <Link to="/contact">{erp.cta} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="hero-wash">
        <div className="container-x grid gap-10 py-24 md:grid-cols-12 md:items-end md:py-32">
          <Reveal className="md:col-span-9">
            <p className="eyebrow">{impact.eyebrow}</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              {impact.lines.map((l, i) => (
                <span key={l} className={`block ${i === 1 ? "text-primary" : ""}`}>{l}</span>
              ))}
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">{impact.text}</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-3 md:justify-self-end">
            <Button asChild size="xl" className="group">
              <Link to="/contact">Start a Conversation <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
