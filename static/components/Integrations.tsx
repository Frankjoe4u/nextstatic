const BASE = "2logo";

interface Plugin {
  src: string;
  alt: string;
}

const plugins: Plugin[] = [
  { src: `${BASE}/wpforms-logo-300x86.webp`, alt: "WPForms" },
  { src: `${BASE}/gravity-forms-logo-300x39.webp`, alt: "Gravity Forms" },
  { src: `${BASE}/fluent-forms-logo-300x66.webp`, alt: "Fluent Forms" },
  { src: `${BASE}/ws-form-logo-300x86.webp`, alt: "WS Form" },
  { src: `${BASE}/elementor-logo-300x60.webp`, alt: "Elementor" },
  { src: `${BASE}/bricks-logo-300x62.webp`, alt: "Bricks" },
  { src: `${BASE}/brizy-logo-300x113.webp`, alt: "Brizy" },
  { src: `${BASE}/yoast-logo-300x133.webp`, alt: "Yoast" },
  { src: `${BASE}/rankmath-logo-300x49.webp`, alt: "Rank Math" },
  { src: `${BASE}/aioseo-logo-300x59.webp`, alt: "AIOSEO" },
  { src: `${BASE}/seopress-logo-300x52.webp`, alt: "SEOPress" },
  { src: `${BASE}/wpml-logo-300x98.webp`, alt: "WPML" },
  { src: `${BASE}/jetpack-logo-300x82.webp`, alt: "Jetpack" },
  { src: `${BASE}/polylang-logo-300x72.webp`, alt: "Polylang" },
  { src: `${BASE}/shortpixel-logo-300x62.webp`, alt: "ShortPixel" },
  { src: `${BASE}/complianz-logo-300x67.webp`, alt: "Complianz" },
];

export default function Integrations() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal mb-3">
            Integrations
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Simply Static works with your
            <br className="hidden md:block" /> favorite plugins
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            We keep integrating new plugins with Simply Static to make it easier
            than ever before to run Static WordPress.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {plugins.map((p) => (
            <div
              key={p.alt}
              className="flex items-center justify-center p-5 rounded-xl border  bg-brand-light hover:border-brand-teal hover:shadow-sm transition-all duration-300 group"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-8 w-auto object-contain  group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
