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

export default function LogosBar() {
  const firstRow = logos.slice(0, 5);
  const secondRow = logos.slice(5);

  return (
    <section className="py-12 bg-white border-y ">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <p className="text-slate-600 text-base leading-relaxed">
          With over{" "}
          <strong className="text-purple-500">40,000 active users</strong> and
          over <strong className="text-purple-500">1,400,000 downloads</strong>,
          Simply Static is the <strong className="text-purple-500">most popular</strong>   static site
          generator for WordPress. It&apos;s also trusted by industry-leading
          businesses.
        </p>
      </div>

      <div className="hidden md:flex flex-col items-center gap-10">
        <div className="flex items-center justify-center gap-12">
          {firstRow.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto"
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-12">
          {secondRow.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 px-6 md:hidden place-items-center">
        {logos.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} className="h-8 w-auto" />
        ))}
      </div>
    </section>
  );
}
