import { partners, partnersSection } from "@/content/partners";

const half = Math.ceil(partners.length / 2);
const rows = [partners.slice(0, half), partners.slice(half)];

export function PartnersMarquee() {
  return (
    <section aria-labelledby="partners-title" className="border-b py-16 md:py-20">
      <div className="container-x flex flex-col items-center text-center">
        <p className="eyebrow">{partnersSection.eyebrow}</p>
        <h2 id="partners-title" className="mt-3 text-xl font-semibold text-foreground md:text-2xl">{partnersSection.title}</h2>
      </div>
      <div className="marquee-mask mt-8 md:mt-10">
        {rows.map((row, r) => (
          <div key={r} className="partner-row flex overflow-hidden py-4">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className={`flex shrink-0 items-center gap-4 pr-4 animate-marquee ${r === 1 ? "[animation-direction:reverse]" : ""}`}
              >
                {row.map((p) => (
                  <li key={p.name} className="partner-tile flex h-20 w-40 shrink-0 items-center justify-center p-3 md:h-24 md:w-48">
                    <img src={p.logo} alt={copy === 0 ? p.name : ""} loading="lazy" width={225} height={128} className="h-full w-full object-contain" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
