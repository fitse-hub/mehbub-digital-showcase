import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { edu, erp } from "@/content/solutions";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";

type Menu = "services" | "solutions" | null;

const solutionItems = [
  { hash: edu.id, title: edu.name, text: "Bilingual learning for children, parents and educators" },
  { hash: erp.id, title: erp.shortName, text: "Customizable modules with built-in intelligence" },
];

const navCls = "rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:text-foreground";

type TriggerProps = {
  id: Exclude<Menu, null>;
  label: string;
  open: Menu;
  setOpen: (m: Menu) => void;
  enter: (m: Menu) => void;
  leave: () => void;
  /** Positioning for the panel; services anchors to the full header, solutions to its button. */
  panelClass: string;
  wrapperClass?: string;
  children: ReactNode;
};

function Trigger({ id, label, open, setOpen, enter, leave, panelClass, wrapperClass = "", children }: TriggerProps) {
  const isOpen = open === id;
  return (
    <div className={wrapperClass} onMouseEnter={() => enter(id)} onMouseLeave={leave}>
      <button className={`${navCls} inline-flex items-center gap-1 ${isOpen ? "bg-surface text-foreground" : ""}`} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : id)}>
        {label} <ChevronDown className={`size-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}
            className={`absolute top-full z-50 pt-3 ${panelClass}`}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("keydown", esc); };
  }, []);

  const enter = (m: Menu) => { clearTimeout(timer.current); setOpen(m); };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 120); };
  const close = () => { setOpen(null); setMobile(false); };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-background"}`}>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="Mehbub home" onClick={close}><Logo className="h-12" /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link to="/company" className={navCls}>Company</Link>
          <Trigger id="services" label="Services" open={open} setOpen={setOpen} enter={enter} leave={leave}
            panelClass="left-1/2 w-[min(64rem,calc(100vw-3rem))] -translate-x-1/2">
            <ServicesMenu onNavigate={close} />
          </Trigger>
          <Trigger id="solutions" label="Solutions" open={open} setOpen={setOpen} enter={enter} leave={leave} wrapperClass="relative"
            panelClass="left-1/2 w-[22rem] -translate-x-1/2">
            <div className="rounded-xl border bg-popover p-2 shadow-hero">
              <ul>
                {solutionItems.map((s) => (
                  <li key={s.hash}>
                    <Link to="/solutions" hash={s.hash} onClick={close} className="block rounded-lg px-3.5 py-3 transition-colors hover:bg-surface">
                      <span className="block text-sm font-medium text-foreground">{s.title}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{s.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Trigger>
          <Link to="/projects" className={navCls}>Projects</Link>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild size="sm" className="rounded-full px-5"><Link to="/contact">Get in touch</Link></Button>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setMobile((m) => !m)}>{mobile ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>

      {mobile && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            <Link to="/" onClick={close} className="border-b py-3">Home</Link>
            <Link to="/company" onClick={close} className="border-b py-3">Company</Link>
            <Link to="/services" onClick={close} className="border-b py-3">Services</Link>
            <div className="border-b py-3">
              <Link to="/solutions" onClick={close}>Solutions</Link>
              <div className="mt-2 flex flex-col gap-2 pl-4 text-sm text-muted-foreground">
                {solutionItems.map((s) => <Link key={s.hash} to="/solutions" hash={s.hash} onClick={close}>{s.title}</Link>)}
              </div>
            </div>
            <Link to="/projects" onClick={close} className="border-b py-3">Projects</Link>
            <Button asChild className="mt-4 rounded-full"><Link to="/contact" onClick={close}>Get in touch</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
