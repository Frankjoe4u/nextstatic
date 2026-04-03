import Link from "next/link";

interface SolutionCard {
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaStyle: "light" | "dark";
  gets: string[];
  perfectFor: string[];
  pricing: string;
  dark?: boolean;
}

const solutions: SolutionCard[] = [
  {
    tag: "WORDPRESS PLUGIN",
    title: "Simply Static Pro",
    subtitle:
      "WordPress plugin for your own server. For developers and agencies who want maximum control and profit margins.",
    cta: "Get Simply Static Pro",
    ctaStyle: "light",
    gets: [
      "WordPress Plugin",
      "Deploy to any platform (GitHub, AWS, Netlify, etc.)",
      "Static-friendly forms & search",
      "Multilingual and Multisite support",
      "Complete technical control",
    ],
    perfectFor: [
      "Developers managing multiple client sites",
      "Agencies with existing infrastructure",
      "Technical users who want flexibility",
      "Freelancers maximizing profit margins",
    ],
    pricing: "$99/year per site  ·  $299/year unlimited sites",
  },
  {
    tag: "ALL-IN-ONE HOSTING",
    title: "Simply Static Studio",
    subtitle:
      "All-in-one managed WordPress hosting. For businesses and content creators who want zero maintenance.",
    cta: "Try Free for 7 Days – No Credit Card",
    ctaStyle: "dark",
    gets: [
      "Managed WordPress hosting",
      "Static site hosting on global CDN",
      "Automated backups & SSL",
      "One-click WordPress login",
      "Everything from Simply Static Pro",
    ],
    perfectFor: [
      "Businesses running 1–5 websites",
      "Content creators who want simplicity",
      "Anyone who doesn't want to manage servers",
      "Teams who value convenience over control",
    ],
    pricing: "From $9/month per site  ·  Agency plans available",
    dark: true,
  },
];

export default function Solutions() {
  return (
    <section className="py-20 bg-blue-100 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Choose your solution
          </h2>
          <Link
            href="#"
            className="text-brand-teal bg-purple-700 p-3 rounded text-sm font-semibold hover:underline"
          >
            Compare Studio vs Pro →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-8 flex flex-col border ${
                s.dark
                  ? "bg-brand-navy text-white border-slate-700"
                  : "bg-white text-brand-navy border-brand-border"
              }`}
            >
              {/* Tag */}
              <span
                className={`text-xs font-bold tracking-widest uppercase mb-4 ${
                  s.dark ? "text-brand-teal" : "text-brand-teal"
                }`}
              >
                {s.tag}
              </span>

              {/* Title + subtitle */}
              <h3 className="font-display text-2xl font-bold mb-3">
                {s.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  s.dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {s.subtitle}
              </p>

              {/* CTA */}
              <Link
                href="#"
                className={`inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-bold mb-8 transition-colors ${
                  s.dark
                    ? "bg-brand-teal text-white hover:bg-brand-tealDark"
                    : "bg-brand-navy text-white hover:bg-slate-800"
                }`}
              >
                {s.cta}
              </Link>

              {/* What you get */}
              <div className="mb-5">
                <p
                  className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                    s.dark ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  What you get:
                </p>
                <ul className="space-y-2">
                  {s.gets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-brand-teal font-bold mt-0.5">
                        ✔️
                      </span>
                      <span
                        className={s.dark ? "text-slate-300" : "text-slate-700"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perfect for */}
              <div className="mb-6">
                <p
                  className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                    s.dark ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  Perfect for:
                </p>
                <ul className="space-y-2">
                  {s.perfectFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-brand-teal font-bold mt-0.5">
                        ✔️
                      </span>
                      <span
                        className={s.dark ? "text-slate-300" : "text-slate-700"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div
                className={`mt-auto pt-5 border-t text-sm font-semibold ${
                  s.dark
                    ? "border-slate-700 text-slate-300"
                    : "border-brand-border text-slate-700"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wide block mb-1 ${
                    s.dark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Pricing
                </span>
                {s.pricing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
