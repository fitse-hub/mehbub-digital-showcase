import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="tech-grid fade-mask absolute inset-0 opacity-70" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl text-4xl md:text-6xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, className = "" }: { eyebrow: string; title: ReactNode; text?: ReactNode; className?: string }) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function FinalCta({ title = "Let's Engineer What Comes Next.", text = "Whether you are modernizing infrastructure, securing critical systems, or building intelligent business applications, our team is ready to help.", cta = "Start a Conversation" }: { title?: string; text?: string; cta?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="tech-grid-dark fade-mask absolute inset-0" aria-hidden />
      <div className="container-x relative grid gap-10 py-24 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <p className="eyebrow text-signal">Next step</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{text}</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:justify-self-end">
          <Button asChild variant="light" size="xl" className="group">
            <Link to="/contact">{cta} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function ArrowLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center gap-1 text-sm font-medium text-primary ${className}`}>{children} <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>;
}
