import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface SolutionCard {
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
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
    <section className="py-20 px-4" style={{ backgroundColor: "#eeeef5" }}>
      <div className="max-w-5xl mx-auto">
       
        <div className="flex items-start justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight max-w-xs">
            Choose your solution
          </h2>
          <Link
            href="#"
            className="shrink-0 inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white"
            style={{ backgroundColor: "#6d28d9" }}
          >
            Compare Studio vs Pro →
          </Link>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={
                "rounded-2xl p-8 flex flex-col " +
                (s.dark ? "text-white" : "bg-white text-brand-navy")
              }
              style={s.dark ? { backgroundColor: "#1e1b3a" } : {}}
            >
              
              <div className="mb-5">
                <span
                  className={
                    "inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border " +
                    (s.dark
                      ? "border-slate-500 text-slate-300"
                      : "border-slate-300 text-slate-600")
                  }
                >
                  {s.tag}
                </span>
              </div>

             
              <h3 className="font-display text-2xl font-bold mb-3 text-center">
                {s.title}
              </h3>
              <p
                className={
                  "text-sm leading-relaxed mb-6 text-center " +
                  (s.dark ? "text-slate-400" : "text-slate-500")
                }
              >
                {s.subtitle}
              </p>

             
              <Link
                href="#"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold mb-8 text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#6d28d9" }}
              >
                {s.cta}
              </Link>

             
              <div className="mb-4">
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-3 text-center"
                  style={{ color: s.dark ? "#94a3b8" : "#94a3b8" }}
                >
                  What you get:
                </p>
                <div
                  className={
                    "rounded-xl p-4 " + (s.dark ? "bg-white/5" : "bg-slate-50")
                  }
                >
                  <ul className="space-y-2">
                    {s.gets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <FaCheck
                          className="mt-0.5 shrink-0"
                          style={{ color: "#6d28d9" }}
                        />
                        <span
                          className={
                            s.dark ? "text-slate-300" : "text-slate-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              
              <div className="mb-6">
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-3 text-center"
                  style={{ color: s.dark ? "#94a3b8" : "#94a3b8" }}
                >
                  Perfect for:
                </p>
                <div
                  className={
                    "rounded-xl p-4 " + (s.dark ? "bg-white/5" : "bg-slate-50")
                  }
                >
                  <ul className="space-y-2">
                    {s.perfectFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <FaCheck
                          className="mt-0.5 shrink-0"
                          style={{ color: "#6d28d9" }}
                        />
                        <span
                          className={
                            s.dark ? "text-slate-300" : "text-slate-700"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

             
              <div
                className={
                  "mt-auto pt-5 border-t text-sm font-semibold " +
                  (s.dark
                    ? "border-slate-700 text-slate-300"
                    : "border-slate-200 text-slate-700")
                }
              >
                <span
                  className="text-xs font-bold uppercase tracking-wide block mb-1"
                  style={{ color: s.dark ? "#64748b" : "#94a3b8" }}
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
