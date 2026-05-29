import { business, nav } from "../content";

export function Nav() {
  return (
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col items-center gap-3">
        <a href="#top" className="flex flex-col items-center gap-2 tracking-tight">
          <span className="font-display font-extralight text-7xl">(Alice)</span>
          <span className="font-display font-extralight text-xl tracking-[0.08em]">TYPE STUDIO</span>
        </a>
        <div className="flex items-center gap-7 text-sm">
          <nav className="flex items-center gap-7">
            {nav.links.map((l, i) => (
              <a key={i} href={l.href} className="text-ink/70 hover:text-ink transition">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={nav.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 hover:text-ink transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
