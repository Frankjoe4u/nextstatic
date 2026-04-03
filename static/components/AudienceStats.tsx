const BASE = "logo";

const logos = [
  { src: `${BASE}/microsoft-copy.webp`, alt: "Microsoft" },
  { src: `${BASE}/unicef-logo.webp`, alt: "Unicef" },
  { src: `${BASE}/rapid-logo-300x85.webp`, alt: "Rapid" },
  { src: `${BASE}/postman-logo-300x80.webp`, alt: "Postman" },
  { src: `${BASE}/near-logo-300x77.webp`, alt: "Near" },
  { src: `${BASE}/hp-logo-150x150.webp`, alt: "HP" },
  { src: `${BASE}/dash-logo-300x79.webp`, alt: "Dash" },
  { src: `${BASE}/mailtrap-logo-300x79.webp`, alt: "Mailtrap" },
];

const audiences = [
  {
    title: "Developers",
    description:
      "Fully automate Static WordPress and run an ultra-secure and fast blog or website from your local computer. You can even use WP-CLI to automate it.",
  },
  {
    title: "Agencies",
    description:
      "Deliver outstanding websites to your clients while ensuring that they are performant, secure, and don't need permanent maintenance.",
  },
  {
    title: "Content Creators",
    description:
      "Publish your next article or newsletter issue from anywhere in the world, knowing it will be delivered to your visitors in milliseconds.",
  },
];

const stats = [
  { value: "40k", label: "Happy Users" },
  { value: "1500k", label: "Downloads" },
  { value: "4.5/5", label: "User Rating" },
  { value: "25+", label: "Integrations" },
];

export default function AudienceStats() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-2">
              Trusted by developers, agencies,
              <br className="hidden md:block" /> and businesses
            </h2>
            <p className="text-slate-500 text-base">
              Trusted by over 40,000 developers, agencies, and businesses
              worldwide – from small businesses to big enterprises.
            </p>
          </div>
          <a
            href="#"
            className="text-brand-teal text-sm font-semibold hover:underline whitespace-nowrap"
          >
            Compare Studio vs Pro →
          </a>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="p-6 rounded-2xl border border-brand-border bg-brand-light hover:border-brand-teal transition-colors"
            >
              <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                {a.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 py-8 border-y border-brand-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-brand-navy">
                {s.value}
              </div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-7 md:h-9 w-auto object-contain  transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
