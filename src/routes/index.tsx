import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeHero } from "@/components/site/HomeHero";
import { ProductCard } from "@/components/site/ProductCard";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Reveal } from "@/components/site/Reveal";
import { ArrowLink, FinalCta, SectionHead } from "@/components/site/Blocks";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { FeaturedProject } from "@/components/site/FeaturedProject";
import { mission, vision, company } from "@/content/company";
import { edu, erp } from "@/content/solutions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mehbub Technologies — Transforming Ideas Into Intelligent Technology" },
      { name: "description", content: "Intelligent ICT infrastructure, advanced cybersecurity, enterprise software and future-ready digital solutions from Addis Ababa, Ethiopia." },
      { property: "og:title", content: "Mehbub Technologies — Engineering the Digital Future" },
      { property: "og:description", content: "17+ years delivering ICT infrastructure, cybersecurity and enterprise software across Ethiopia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const solutions = [
  { title: "Secure campus", parts: ["Data center", "Wireless", "CCTV", "Integration"], text: "A connected, monitored multi-site environment — the model delivered for Wollo University." },
  { title: "Customer-facing branch", parts: ["Queue management", "Digital signage", "Network", "MSP"], text: "Organized service halls with centrally managed screens for banks and public offices." },
  { title: "Protected enterprise", parts: ["Zero trust", "SOC", "Audit", "Compliance"], text: "Assessment, monitoring and governance working as one security program." },
];

const innovation = [
  { id: edu.id, num: edu.num, name: edu.name, line: edu.lead, img: edu.image, tone: "sun" as const },
  { id: erp.id, num: erp.num, name: erp.name, line: erp.lead, img: erp.image, tone: "ink" as const },
];

const statements = [
  { label: "Mission", text: mission },
  { label: "Vision", text: vision },
];

function Home() {
  return (
    <>
      <HomeHero />
      <PartnersMarquee />

      {/* Credibility */}
      <section className="container-x grid gap-12 py-24 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="display text-[7rem] leading-none text-primary md:text-[10rem]">17<span className="text-signal">+</span></p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Years · Established {company.established}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:pt-6">
          <h2 className="text-3xl font-semibold md:text-4xl">An Ethiopian engineering company, working end-to-end.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Since 2009, Mehbub General Trading PLC has supported businesses, banks, government institutions and universities — from understanding requirements and designing solutions to deployment, integration, commissioning and ongoing support.</p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-4">
            {["Businesses", "Banks", "Government", "Universities"].map((x) => <div key={x} className="bg-background p-4 text-sm font-medium">{x}</div>)}
          </dl>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="border-y bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Capabilities" title="Ten disciplines. One integrated environment." />
            <Link to="/services" className="group"><ArrowLink>View all services</ArrowLink></Link>
          </div>
          <div className="mt-14"><ServicesShowcase /></div>
        </div>
      </section>

      {/* Solutions composition */}
      <section className="container-x py-24">
        <SectionHead eyebrow="Integrated solutions" title="Technologies combined into complete environments." text="Our value is in the integration — infrastructure, security and software designed to operate as one." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="rounded-md border p-7">
              <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                {s.parts.map((p, j) => (
                  <span key={p} className="flex items-center gap-1.5">
                    <span className="rounded-sm border bg-surface px-2 py-1 font-mono text-[0.7rem]">{p}</span>
                    {j < s.parts.length - 1 && <span className="h-px w-3 bg-primary" />}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <FeaturedProject />

      {/* Innovation */}
      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Products & innovation" title="Software we build for Ethiopian organizations." />
          <Link to="/solutions" className="group"><ArrowLink>Explore solutions</ArrowLink></Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {innovation.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProductCard p={p} href={`/solutions#${p.id}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / vision */}
      <section className="border-y bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Mission &amp; vision</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Two commitments behind every engagement — how we work today, and where we are taking the company.
            </p>
          </Reveal>

          <div className="mt-12 grid overflow-hidden rounded-xl border bg-background md:grid-cols-2">
            {statements.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={cn(
                  "group p-8 transition-colors duration-500 hover:bg-surface/60 md:p-12",
                  i === 0 && "border-b md:border-b-0 md:border-r",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{s.label}</p>
                  <span className="font-mono text-xs text-muted-foreground/70">0{i + 1}</span>
                </div>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-full bg-border transition-colors duration-500 group-hover:bg-primary"
                />
                <p className="mt-7 text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem] md:leading-[1.35]">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
