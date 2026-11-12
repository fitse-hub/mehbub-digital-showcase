import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { company, mission, vision } from "@/content/company";
import {
  aboutHero, aboutImages, aboutStats, commitment, coreValues, deliver, experience, strength, whoWeAre,
} from "@/content/about";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "About Us — Mehbub Technologies | 17+ Years of ICT Excellence" },
      { name: "description", content: "Mehbub General Trading PLC (Mehbub Technologies): an Addis Ababa ICT solutions provider since 2009 G.C. — infrastructure, cybersecurity, applications and smart technology." },
      { property: "og:title", content: "About Mehbub Technologies — 17+ Years of Engineering Excellence" },
      { property: "og:description", content: "Who we are, our mission, values, strengths and the value-driven ICT solutions we deliver." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompanyPage,
});

function Label({ n, children }: { n: string; children: string }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="text-muted-foreground">{n}</span>
      <span className="h-px w-8 bg-primary/40" aria-hidden />
      {children}
    </p>
  );
}

function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-wash relative overflow-hidden border-b">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">{aboutHero.eyebrow} · Est. {company.established}</p>
            <h1 className="display mt-5 text-5xl md:text-7xl">{aboutHero.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{aboutHero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link to="/contact">Work with us <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Our services</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <figure className="relative">
              <div className="overflow-hidden rounded-2xl border bg-card shadow-hero">
                <img src={aboutImages.team.src} alt={aboutImages.team.alt} className="aspect-[4/3] w-full object-cover object-[50%_35%]" loading="eager" />
              </div>
              <figcaption className="absolute -bottom-5 left-5 rounded-xl border bg-card/95 px-4 py-3 shadow-hero backdrop-blur">
                <p className="text-2xl font-semibold leading-none">{company.experience}</p>
                <p className="mt-1 text-xs text-muted-foreground">years engineering for Ethiopia</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="border-t bg-background/60">
          <dl className="container-x grid grid-cols-2 md:grid-cols-4">
            {aboutStats.map((s, i) => (
              <div key={s.label} className={`py-8 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 md:pl-8" : ""}`}>
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 Who we are */}
      <section className="container-x grid gap-12 py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Label n="01">{whoWeAre.title}</Label>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Enterprise-grade ICT, engineered end to end.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {whoWeAre.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="text-sm font-medium">{whoWeAre.areasTitle}</p>
          <ul className="mt-4 divide-y rounded-2xl border bg-card">
            {whoWeAre.areas.map((a, i) => (
              <li key={a.slug}>
                <Link to="/services/$slug" params={{ slug: a.slug }} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-medium">{a.label}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 02 Mission, vision, values */}
      <section className="border-y bg-surface py-24">
        <div className="container-x">
          <Reveal>
            <Label n="02">Mission, Vision &amp; Values</Label>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold md:text-5xl">What drives us, and how we work.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[["Our Mission", mission], ["Our Vision", vision]].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08}>
                <div className={`h-full rounded-2xl p-8 md:p-10 ${i === 0 ? "bg-ink text-ink-foreground" : "border bg-card"}`}>
                  <p className={`eyebrow ${i === 0 ? "text-signal" : ""}`}>{k}</p>
                  <p className="mt-5 text-2xl font-medium leading-snug md:text-3xl">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl border bg-card p-8">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="mt-6 text-2xl font-semibold">{v.name}</h3>
                  <p className="mt-3 text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Strength */}
      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Label n="03">Our Strength</Label>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Infrastructure built for demanding work.</h2>
            <p className="mt-6 text-muted-foreground">{strength.intro}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border">
              <img src={aboutImages.datacenter.src} alt={aboutImages.datacenter.alt} className="aspect-[4/3] w-full object-cover object-top" loading="lazy" />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
              {strength.items.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.06} className="bg-card">
                  <div className="h-full p-7">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-primary"><s.icon className="size-5" /></span>
                    <h3 className="mt-5 font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{strength.outro}</p>
          </div>
        </div>
      </section>

      {/* 04 Experience */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="tech-grid-dark fade-mask absolute inset-0" aria-hidden />
        <div className="container-x relative grid items-center gap-12 py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-ink-line">
              <img src={aboutImages.field.src} alt={aboutImages.field.alt} className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow flex items-center gap-3 text-signal"><span className="text-ink-muted">04</span><span className="h-px w-8 bg-signal/40" aria-hidden />{experience.title}</p>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">{company.experience} years understanding real operations.</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              {experience.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <p className="mt-8 text-sm font-medium">{experience.principlesIntro}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {experience.principles.map((p) => (
                  <li key={p.title} className="rounded-xl border border-ink-line bg-ink-foreground/5 p-5">
                    <p.icon className="size-5 text-signal" />
                    <h3 className="mt-4 font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
                  </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-muted">{experience.outro}</p>
          </Reveal>
        </div>
      </section>

      {/* 05 What we deliver */}
      <section className="container-x py-24">
        <Reveal className="max-w-3xl">
          <Label n="05">What We Deliver</Label>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Value-driven solutions, not just technology.</h2>
          <p className="mt-6 text-lg text-muted-foreground">{deliver.intro}</p>
          <p className="mt-8 text-sm font-medium">{deliver.lead}</p>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliver.items.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-hero">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><d.icon className="size-5" /></span>
                <h3 className="mt-6 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="border-t bg-surface">
        <div className="container-x grid gap-10 py-24 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-9">
            <p className="eyebrow">Our Commitment</p>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              {commitment.lines.map((l, i) => (
                <span key={l} className={`block ${i === 1 ? "text-primary" : ""}`}>{l}</span>
              ))}
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">{commitment.text}</p>
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
