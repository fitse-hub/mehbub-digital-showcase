import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

export function CopyButton({ value, label, copiedLabel, className }: { value: string; label: string; copiedLabel: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    if (!(await copyText(value))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button type="button" onClick={onClick} aria-label={`${label} ${value}`}
      className={cn("inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors",
        copied ? "border-primary/30 bg-accent text-primary" : "bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground", className)}>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
