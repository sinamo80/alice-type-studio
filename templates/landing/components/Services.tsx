import { services } from "../content";

export function Services() {
  return (
    <section id="services" className="bg-muted px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{services.heading}</h2>
        <p className="mt-3 text-lg text-ink/65">{services.intro}</p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {services.items.map((s, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-paper border border-ink/10 hover:border-ink/30 transition"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{s.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
