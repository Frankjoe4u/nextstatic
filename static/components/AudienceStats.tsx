import { FaCode, FaUsers, FaStar } from "react-icons/fa";

const BASE = "/logo";

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
    icon: <FaCode size={20} />,
    description:
      "Fully automate Static WordPress and run an ultra-secure and fast blog or website from your local computer. You can even use WP-CLI to automate it.",
  },
  {
    title: "Agencies",
    icon: <FaUsers size={20} />,
    description:
      "Deliver outstanding websites to your clients while ensuring that they are performant, secure, and don't need permanent maintenance.",
  },
  {
    title: "Content Creators",
    icon: <FaStar size={20} />,
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight max-w-sm">
            Trusted by developers, agencies, and businesses
          </h2>
          <div className="flex flex-col items-start md:items-end gap-5 md:max-w-xs">
            <p className="text-slate-500 text-base leading-relaxed md:text-right">
              Trusted by over 40,000 developers, agencies, and businesses
              worldwide from small businesses to big enterprises.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-3 rounded-md bg-[#5b21b6] text-white text-sm font-bold hover:bg-[#4c1d95] transition-colors whitespace-nowrap"
            >
              Compare Studio vs Pro →
            </a>
          </div>
        </div>

        <div className="bg-[#ede9fe] rounded-3xl p-8 mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-start md:items-center md:text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5b21b6] flex items-center justify-center text-white mb-4">
                  {a.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                  {a.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

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

        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-7 md:h-9 w-auto object-contain hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}