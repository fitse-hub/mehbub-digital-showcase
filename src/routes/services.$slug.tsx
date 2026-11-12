import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowLink, FinalCta } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { deliveryProcess, getService, serviceDetail as t, services } from "@/content/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => { const s = getService(params.slug); if (!s) throw notFound(); return { slug: s.slug, title: s.title, short: s.short }; },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Mehbub Technologies` },
    { name: "description", content: loaderData.short },
    { property: "og:title", content: loaderData.title },
    { property: "og:description", content: loaderData.short },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] : [{ title: "Service not found" }, { name: "robots", content: "noindex" }] }),
  component: ServicePage,
});

const sections = t.sections;
const sec = (id: string) => sections.find((x) => x.id === id)!;

function SectionTitle({ index, label, title }: { index: string; label: string; title: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary">{index}</span>
        <span className="h-px w-8 bg-primary" aria-hidden />
        <span className="eyebrow text-muted-foreground">{label}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h2>
    </div>
  );
}

function ServicePage() {
  const s = getService(Route.useLoaderData().slug)!;
  const i = services.findIndex((x) => x.slug === s.slug);
  const prev = services[(i - 1 + services.length) % services.length]!;
  const next = services[(i + 1) % services.length]!;
  const total = String(services.length).padStart(2, "0");
  const related = s.related.map((r) => getService(r)).filter((x) => x !== undefined);

  return (
    <>
      {/* Hero */}
      <section className="border-b">
        <div className="container-x grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Link to="/services" className="transition-colors hover:text-foreground">Services</Link>
              <span aria-hidden>/</span>
              <span className="text-primary">{s.num} of {total}</span>
            </nav>
            <div className="mt-8 grid size-12 place-items-center rounded-lg border bg-surface text-primary">
              <s.icon className="size-6" strokeWidth={1.5} aria-hidden />
            </div>
            <h1 className="display mt-6 text-4xl md:text-5xl lg:text-[3.5rem]">{s.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{s.purpose}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link to="/contact">{t.primaryCta} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">{t.secondaryCta}</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <figure className="overflow-hidden rounded-xl border bg-surface">
              <img src={s.image} alt={s.imageAlt} width={1600} height={1000} className={`aspect-[4/3] w-full object-cover ${s.imagePosition ?? ""}`} />
            </figure>
          </Reveal>
        </div>

        {/* At a glance */}
        <div className="border-t">
          <dl className="container-x grid grid-cols-2 divide-x md:grid-cols-4">
            {[
              { k: "Capabilities", v: String(s.components.length).padStart(2, "0") },
              { k: "Key outcomes", v: String(s.outcomes.length).padStart(2, "0") },
              { k: "Delivery", v: "4 phases" },
              { k: "Engagement", v: t.engagement },
            ].map((f, n) => (
              <div key={f.k} className={`py-6 ${n === 0 ? "pr-6" : "px-6"} ${n >= 2 ? "border-t md:border-t-0" : ""}`}>
                <dt className="eyebrow text-muted-foreground">{f.k}</dt>
                <dd className="mt-2 text-lg font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Body */}
      <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28">
            <p className="eyebrow text-muted-foreground">{t.onThisPage}</p>
            <ul className="mt-5 space-y-1 border-l">
              {sections.map((sec, n) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="-ml-px flex items-center gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                    <span className="font-mono text-xs">{String(n + 1).padStart(2, "0")}</span>{sec.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="group mt-10 block rounded-xl border p-5 transition-colors hover:bg-surface">
              <p className="text-sm font-semibold">{t.asideTitle}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.asideText}</p>
              <ArrowLink className="mt-3">{t.asideCta}</ArrowLink>
            </Link>
          </div>
        </aside>

        <div className="space-y-24 lg:col-span-9 md:space-y-28">
          <section id="challenges" className="scroll-mt-28">
            <Reveal><SectionTitle index="01" label={sec("challenges").label} title={sec("challenges").title} /></Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
              {s.challenges.map((c, n) => (
                <li key={c} className="bg-background p-6 md:p-7">
                  <span className="font-mono text-xs text-muted-foreground">{String(n + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-lg leading-snug">{c}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="capabilities" className="scroll-mt-28">
            <Reveal><SectionTitle index="02" label={sec("capabilities").label} title={sec("capabilities").title} /></Reveal>
            <ol className="mt-10 border-b">
              {s.components.map((c, n) => (
                <li key={c.name} className="group grid gap-3 border-t py-7 md:grid-cols-12 md:gap-6">
                  <span className="font-mono text-xs text-primary md:col-span-1 md:pt-1">{String(n + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold md:col-span-4">{c.name}</h3>
                  <p className="text-muted-foreground md:col-span-7">{c.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="approach" className="scroll-mt-28">
            <Reveal><SectionTitle index="03" label={sec("approach").label} title={sec("approach").title} /></Reveal>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {deliveryProcess.map((p) => (
                <li key={p.step} className="border-t pt-5">
                  <span className="font-mono text-xs text-primary">{p.step}</span>
                  <h3 className="mt-2 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-xl border bg-surface p-6 md:p-8">
              <p className="eyebrow">{t.noteLabel}</p>
              <p className="mt-3 text-lg leading-relaxed">{s.considerations}</p>
            </div>
          </section>

          <section id="outcomes" className="scroll-mt-28">
            <Reveal><SectionTitle index="04" label={sec("outcomes").label} title={sec("outcomes").title} /></Reveal>
            <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-primary"><Check className="size-3.5" strokeWidth={2.5} /></span>
                  <span className="text-lg leading-snug">{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="audience" className="scroll-mt-28">
            <Reveal><SectionTitle index="05" label={sec("audience").label} title={sec("audience").title} /></Reveal>
            <ul className="mt-10 flex flex-wrap gap-3">
              {s.audience.map((a) => <li key={a} className="rounded-full border px-4 py-2 text-sm">{a}</li>)}
            </ul>
          </section>
        </div>
      </div>

      {/* Related + prev/next */}
      <section className="border-t bg-surface py-20 md:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{t.relatedLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold">{t.relatedTitle}</h2>
            </div>
            <Link to="/services" className="group hidden sm:block"><ArrowLink>{t.secondaryCta}</ArrowLink></Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group block">
                <div className="overflow-hidden rounded-xl border bg-background">
                  <img src={r.image} alt={r.imageAlt} loading="lazy" width={1600} height={1000} className={`aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${r.imagePosition ?? ""}`} />
                </div>
                <p className="mt-5 font-mono text-xs text-primary">{r.num}</p>
                <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.short}</p>
              </Link>
            ))}
          </div>

          <nav aria-label="Service navigation" className="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2">
            <Link to="/services/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-4">
              <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
              <span><span className="block font-mono text-xs text-muted-foreground">Previous · {prev.num}</span><span className="font-medium">{prev.title}</span></span>
            </Link>
            <Link to="/services/$slug" params={{ slug: next.slug }} className="group flex items-center justify-end gap-4 text-right">
              <span><span className="block font-mono text-xs text-muted-foreground">Next · {next.num}</span><span className="font-medium">{next.title}</span></span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
