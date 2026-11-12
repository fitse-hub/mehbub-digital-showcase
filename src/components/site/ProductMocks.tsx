// Illustrative interface compositions — not product screenshots.
export function ErpMock() {
  const bars = [42, 58, 51, 66, 72, 61, 80, 76, 88];
  return (
    <div className="overflow-hidden rounded-md border bg-background shadow-sm" aria-label="Illustrative ERP interface" role="img">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        {[0, 1, 2].map((i) => <span key={i} className="size-2 rounded-full bg-border" />)}
        <span className="ml-3 font-mono text-[0.65rem] text-muted-foreground">erp / operations overview</span>
      </div>
      <div className="grid grid-cols-12">
        <aside className="col-span-3 hidden border-r p-3 sm:block">
          {["Overview", "Finance", "Inventory", "HR", "Procurement", "Reports"].map((m, i) => (
            <div key={m} className={`mb-1 rounded-sm px-2 py-1.5 text-[0.7rem] ${i === 0 ? "bg-accent font-medium text-accent-foreground" : "text-muted-foreground"}`}>{m}</div>
          ))}
        </aside>
        <div className="col-span-12 space-y-3 p-4 sm:col-span-9">
          <div className="grid grid-cols-3 gap-2">
            {["Modules", "Workflows", "Integrations"].map((k) => (
              <div key={k} className="rounded-sm border p-2.5"><p className="text-[0.62rem] text-muted-foreground">{k}</p><div className="mt-2 h-2 w-2/3 rounded-full bg-primary/70" /></div>
            ))}
          </div>
          <div className="rounded-sm border p-3">
            <p className="text-[0.65rem] text-muted-foreground">AI-driven analytics</p>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {bars.map((b, i) => <div key={i} className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-signal" : "bg-primary/25"}`} style={{ height: `${b}%` }} />)}
            </div>
          </div>
          <div className="rounded-sm border border-primary/30 bg-accent p-2.5 text-[0.68rem] text-accent-foreground">Insight · Suggested workflow optimization available</div>
        </div>
      </div>
    </div>
  );
}

export function EduMock() {
  return (
    <div className="w-52 rounded-[1.6rem] border-[6px] border-ink bg-background p-3 shadow-sm" role="img" aria-label="Illustrative educational app interface">
      <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
      <p className="text-[0.62rem] text-muted-foreground">Parent dashboard</p>
      <p className="text-sm font-semibold">Today's learning</p>
      <div className="mt-3 flex gap-1">
        {["EN", "አማ"].map((l, i) => <span key={l} className={`rounded-sm px-2 py-0.5 text-[0.6rem] ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{l}</span>)}
      </div>
      {[70, 45, 85].map((p, i) => (
        <div key={i} className="mt-3 rounded-sm border p-2">
          <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/30" />
          <div className="mt-2 h-1 rounded-full bg-muted"><div className="h-1 rounded-full bg-signal" style={{ width: `${p}%` }} /></div>
        </div>
      ))}
      <div className="mt-3 rounded-sm bg-ink p-2 text-center text-[0.6rem] text-ink-foreground">Secure payment</div>
    </div>
  );
}
