import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLink, FinalCta, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { deliveryProcess, services, servicesPage } from "@/content/services";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Services — Mehbub Technologies" },
    { name: "description", content: "Network, data center, cybersecurity, managed IT, signage, software and smart technology services." },
    { property: "og:title", content: "Services — Mehbub Technologies" },
    { property: "og:description", content: "Technology Infrastructure. Intelligent Solutions. Enterprise Excellence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const total = String(services.length).padStart(2, "0");
  return (
    <>
      <PageHero eyebrow={servicesPage.eyebrow} title={servicesPage.title}>{servicesPage.intro}</PageHero>

      <section className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 border-b pb-6">
          <p className="eyebrow">{servicesPage.listLabel}</p>
          <span className="font-mono text-xs text-muted-foreground">{total} services</span>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <Link to="/services/$slug" params={{ slug: s.slug }} className="group block">
                <div className="overflow-hidden rounded-xl border bg-surface">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" width={1600} height={1000} className={`aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${s.imagePosition ?? ""}`} />
                </div>
                <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">{s.num}</span>
                  <span className="h-px w-8 bg-border transition-colors group-hover:bg-primary" aria-hidden />
                  <s.icon className="size-4 text-primary" strokeWidth={1.6} aria-hidden />
                  <span>{s.components.length} capabilities</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold md:text-[1.75rem]">{s.title}</h2>
                <p className="mt-3 max-w-lg text-muted-foreground">{s.short}</p>
                <ArrowLink className="mt-5">View service</ArrowLink>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y bg-surface py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">{servicesPage.processLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{servicesPage.processTitle}</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {deliveryProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <li className="border-t pt-6">
                  <span className="font-mono text-xs text-primary">{p.step}</span>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
