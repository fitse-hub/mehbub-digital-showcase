import { edu } from "@/content/solutions";

type Props = { dark?: boolean; className?: string };

export function PlayStoreButton({ dark = false, className = "" }: Props) {
  return (
    <a
      href={edu.playStore.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full border py-2.5 pl-4 pr-6 transition-all hover:-translate-y-0.5 ${
        dark
          ? "border-ink-line bg-ink-foreground/5 hover:border-signal/50"
          : "bg-background shadow-sm hover:border-primary/50 hover:shadow-md"
      } ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-7 shrink-0" aria-hidden>
        <path fill="#EA4335" d="M3.6 1.8 13.7 12 3.6 22.2c-.37-.2-.6-.6-.6-1.1V2.9c0-.5.23-.9.6-1.1Z" />
        <path fill="#FBBC04" d="m17.4 8.3-3.7 3.7L3.6 1.8c.2-.11.44-.16.68-.14.3.02.58.12.82.28l12.3 6.36Z" />
        <path fill="#34A853" d="M17.4 15.7 5.1 22.06c-.24.16-.52.26-.82.28-.24.02-.48-.03-.68-.14L13.7 12l3.7 3.7Z" />
        <path fill="#4285F4" d="m20.9 10.2-3.5-1.9-3.7 3.7 3.7 3.7 3.5-1.9c1.4-.8 1.4-2.8 0-3.6Z" />
      </svg>
      <span className="text-left leading-tight">
        <span className={`block text-[0.65rem] uppercase tracking-wide ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>
          {edu.playStore.eyebrow}
        </span>
        <span className="block text-base font-semibold">{edu.playStore.label}</span>
      </span>
    </a>
  );
}
