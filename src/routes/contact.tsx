import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/site/CopyButton";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/content/company";
import { contactPage as t } from "@/content/contact";
import contactHero from "@/assets/collaboration-meeting-room.jpg.asset.json";
import { services } from "@/content/services";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Mehbub Technologies" },
    { name: "description", content: "Talk to Mehbub Technologies about your infrastructure, security or software project." },
    { property: "og:title", content: "Contact Mehbub Technologies" },
    { property: "og:description", content: "Let's build something meaningful." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

const field = "mt-2 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm transition-colors placeholder:text-muted-foreground/70 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-ring/15 aria-[invalid=true]:border-destructive";

type FieldName = "name" | "org" | "email" | "phone" | "subject" | "message";

function Field({ n, type = "text", required, error, className = "" }: { n: Exclude<FieldName, "message">; type?: string; required?: boolean; error?: string | undefined; className?: string }) {
  return (
    <label className={`block text-sm font-medium ${className}`}>
      {t.fields[n]}{required && <span className="text-primary"> *</span>}
      <input name={n} type={type} placeholder={t.placeholders[n]} className={field} aria-invalid={!!error} />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-3 px-6 py-5 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-6">
      <p className="eyebrow pt-1.5 text-muted-foreground">{label}</p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function Contact() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sent, setSent] = useState(false);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Partial<Record<FieldName | "service" | "website", string>>;
    if (d.website) return; // honeypot
    const err: Partial<Record<FieldName, string>> = {};
    if (!d.name?.trim()) err.name = t.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? "")) err.email = t.errors.email;
    if ((d.message ?? "").trim().length < 10) err.message = t.errors.message;
    setErrors(err);
    if (Object.keys(err).length) return;
    const body = `Name: ${d.name}\nOrganization: ${d.org}\nPhone: ${d.phone}\nService: ${d.service}\n\n${d.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(d.subject || t.defaultSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b">
        <img src={contactHero.url} alt="" aria-hidden className="absolute inset-0 size-full object-cover object-[80%_50%]" />
        <div className="absolute inset-0 bg-background/60 md:bg-transparent" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden />
        <div className="container-x relative py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="display mt-5 max-w-3xl text-4xl md:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.intro}</p>
            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border bg-surface px-4 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" /><span className="relative inline-flex size-2 rounded-full bg-primary" /></span>
              {t.availability} <span className="font-mono text-foreground">{company.hours}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-x grid gap-8 py-20 md:py-24 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{t.directLabel}</p>
            <div className="mt-5 divide-y rounded-xl border bg-background">
              <Row label={t.rows.address}>
                <p className="text-base font-medium leading-relaxed">{company.address}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <CopyButton value={company.address} label={t.copyLabel} copiedLabel={t.copiedLabel} />
                  <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex h-8 items-center gap-1 rounded-full px-2 text-sm font-medium text-primary hover:underline">
                    {t.mapsLabel} <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </Row>
              <Row label={t.rows.email}>
                <div className="flex items-center justify-between gap-3">
                  <a href={`mailto:${company.email}`} className="truncate text-base font-medium hover:text-primary">{company.email}</a>
                  <CopyButton value={company.email} label={t.copyLabel} copiedLabel={t.copiedLabel} />
                </div>
              </Row>
              <Row label={t.rows.phone}>
                <ul className="space-y-2.5">
                  {company.phones.map((p) => (
                    <li key={p} className="flex items-center justify-between gap-3">
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="font-mono text-[0.95rem] hover:text-primary">{p}</a>
                      <CopyButton value={p} label={t.copyLabel} copiedLabel={t.copiedLabel} />
                    </li>
                  ))}
                </ul>
              </Row>
              <Row label={t.rows.hours}>
                <p className="font-mono text-[0.95rem]">{company.hours}</p>
                <p className="mt-1 text-sm text-muted-foreground">{company.legal}</p>
              </Row>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="eyebrow">{t.formLabel}</p>
            <form onSubmit={submit} noValidate className="mt-5 rounded-xl border bg-background p-6 md:p-10">
              <h2 className="text-2xl font-semibold">{t.formTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.formText}</p>
              <div className="mt-6 h-px bg-border" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field n="name" required error={errors.name} />
                <Field n="org" />
                <Field n="email" type="email" required error={errors.email} />
                <Field n="phone" type="tel" />
                <label className="block text-sm font-medium">{t.fields.service}
                  <select name="service" className={field}>{services.map((s) => <option key={s.slug}>{s.title}</option>)}</select>
                </label>
                <Field n="subject" />
                <label className="block text-sm font-medium sm:col-span-2">{t.fields.message}<span className="text-primary"> *</span>
                  <textarea name="message" rows={6} placeholder={t.placeholders.message} className={`${field} h-auto py-3`} aria-invalid={!!errors.message} />
                  {errors.message && <span className="mt-1.5 block text-xs text-destructive">{errors.message}</span>}
                </label>
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="xl" type="submit" className="group rounded-full">{t.submit} <ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Button>
                {sent && <p className="text-sm text-primary" role="status">{t.sentNote}</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
