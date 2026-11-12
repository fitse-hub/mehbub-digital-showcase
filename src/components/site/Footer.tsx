import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";
import { services } from "@/content/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo variant="white" className="h-12" />
          <p className="mt-5 max-w-xs text-sm text-ink-muted">Intelligent ICT infrastructure, cybersecurity and enterprise software from Addis Ababa since {company.established}</p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-signal">Services</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {services.map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="text-ink-muted hover:text-ink-foreground">{s.title.replace(/ \(.*\)/, "")}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-signal">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {([["/company", "About"], ["/solutions", "Solutions"], ["/projects", "Projects"], ["/contact", "Contact"]] as const).map(([to, l]) => <li key={to}><Link to={to} className="text-ink-muted hover:text-ink-foreground">{l}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-2 text-sm text-ink-muted">
          <p className="eyebrow text-signal">Contact</p>
          <p className="mt-4">{company.address}</p>
          <a href={`mailto:${company.email}`} className="mt-3 block hover:text-ink-foreground">{company.email}</a>
          {company.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-ink-foreground">{p}</a>)}
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {company.legal}. All rights reserved.</p>
          <p className="font-mono">Addis Ababa · {company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
