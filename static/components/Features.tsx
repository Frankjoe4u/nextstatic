interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Forget expensive hosting, complex caching setups, and countless performance plugins. Static WordPress delivers instant page loads from a global CDN.",
  },
  {
    icon: "🕸️",
    title: "Security",
    description:
      "No database, no login page, no vulnerabilities. Static sites can't be hacked the way traditional WordPress can. Rock-solid security by design.",
  },
  {
    icon: "🛠️",
    title: "Zero Maintenance",
    description:
      "Stop updating plugins every day. Stop worrying about security patches. Focus on your content while Simply Static handles the technical stuff.",
  },
  {
    icon: "🔩",
    title: "Full Compatibility",
    description:
      "Keep using your favorite WordPress plugins – forms, SEO, page builders, and multilingual. Simply Static works with the tools you already love.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading - left aligned */}
        <div className="mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black-700 leading-tight mb-6">
            What is Static WordPress?
          </h2>
          <p className="text-slate-400 text-base md:text-lg text-center max-w-2xl mx-auto">
            WordPress powers your content. Static files power your site. The
            best of both worlds for the best results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon box - purple gradient */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                }}
              >
                {f.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-brand-navy mb-4">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
