const capabilities = [
  {
    number: "01",
    title: "Shape the product",
    description: "Turn an unclear opportunity into a focused scope, usable flows, and an engineering plan.",
  },
  {
    number: "02",
    title: "Build the system",
    description: "Ship full-stack web products, internal tools, and integrations that are ready for real operations.",
  },
  {
    number: "03",
    title: "Create traction",
    description: "Build technical SEO, acquisition surfaces, analytics, and product loops into the product itself.",
  },
  {
    number: "04",
    title: "Improve what exists",
    description: "Untangle performance, architecture, accessibility, and product-quality problems in live software.",
  },
];

export default function Capabilities() {
  return (
    <section className="section-block" aria-labelledby="capabilities-heading">
      <div className="max-w-2xl">
        <p className="eyebrow">How I help</p>
        <h2 id="capabilities-heading" className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          One partner from product thinking to production.
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Useful when you need senior engineering judgment without splitting product, delivery, and growth across several people.
        </p>
      </div>
      <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <li key={item.number} className="min-h-56 rounded-xl bg-secondary/35 p-6">
            <span className="text-xs font-bold tracking-[0.15em] text-primary">{item.number}</span>
            <h3 className="mt-10 font-serif text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
