import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { wolloProject as p } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Wollo University Case Study — Projects | Mehbub Technologies" },
      { name: "description", content: "Enterprise data centers, centralized CCTV and campus-wide Wi-Fi delivered across Wollo University's Dessie, Kombolcha and Tita campuses." },
      { property: "og:title", content: "Wollo University Infrastructure Modernization" },
      { property: "og:description", content: "Innovation delivered, excellence proven: a complete ICT infrastructure across three campuses, inaugurated 27 June 2026." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-wash border-b">
        <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:items-center md:py-24">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">{p.eyebrow}</p>
            <h1 className="display mt-5 text-4xl md:text-6xl">{p.title}</h1>
            <p className="mt-5 text-xl font-medium text-primary">{p.tagline}</p>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.intro}</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-6 lg:grid-cols-4">
              {p.facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">{f.label}</dt>
                  <dd className="mt-1.5 text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <figure className="relative overflow-hidden rounded-xl border bg-card shadow-hero">
              <img src={p.heroImage.src} alt={p.heroImage.alt} className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md border bg-background/90 px-3 py-2 text-xs font-medium backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" />{p.heroImage.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b bg-surface">
        <div className="container-x grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {p.highlights.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.04} className="flex items-center gap-3 py-6 pr-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-md border bg-background text-primary"><Icon className="size-4" /></span>
              <span className="text-sm font-medium leading-tight">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">The project</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">One secure network for three campuses.</h2>
          </Reveal>
          <div className="mt-12 border-t">
            {p.story.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="grid gap-3 border-b py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold">{s.label}</h3>
                </div>
                <p className="text-muted-foreground md:text-lg">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.1} className="lg:col-span-5">
          <figure className="lg:sticky lg:top-24">
            <img src={p.poster.src} alt={p.poster.alt} loading="lazy" className="w-full rounded-xl border object-cover shadow-hero" />
            <figcaption className="mt-3 text-xs text-muted-foreground">Official project poster · Mehbub Technologies</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="border-t bg-surface py-20 md:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Inside the project</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">From the data center to the campus.</h2>
            </div>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary" />Dessie · Kombolcha · Tita</p>
          </Reveal>
          <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 md:auto-rows-[15rem] lg:grid-cols-4">
            {p.gallery.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.05} className={`group relative overflow-hidden rounded-xl border bg-card ${g.className}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  style={g.position ? { objectPosition: g.position } : undefined}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ink-foreground">
                  <p className="text-sm font-semibold">{g.title}</p>
                  <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services delivered */}
      <section className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Services delivered</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Planned, installed, tested and commissioned.</h2>
          <p className="mt-5 text-muted-foreground">Every component was delivered by one team under one multi-campus plan.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.related.map((r) => (
              <Button key={r.slug} asChild variant="outline">
                <Link to="/services/$slug" params={{ slug: r.slug }}>{r.label} <ArrowRight /></Link>
              </Button>
            ))}
          </div>
        </Reveal>
        <div className="divide-y border-y md:col-span-7">
          {p.services.map((s, i) => (
            <Reveal key={s} delay={i * 0.04} className="flex items-center gap-5 py-5">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="flex-1 font-medium">{s}</span>
              <span className="grid size-7 place-items-center rounded-full bg-accent text-primary"><Check className="size-3.5" /></span>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta title="Planning a campus or enterprise project?" text="Talk to the team that delivered Wollo University's data centers, CCTV and campus-wide Wi-Fi." />
    </>
  );
}
