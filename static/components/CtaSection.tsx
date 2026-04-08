import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: "#5b21b6" }}
    >
      <div className="max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to Make WordPress Fast,
          <br /> Secure, and Maintenance-Free?
        </h2>
        <p className="text-white/80 text-base mb-10">
          Choose the solution that fits your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-black text-white text-sm font-bold hover:bg-neutral-800 transition-colors"
          >
            Simply Static Pro
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-black text-white text-sm font-bold hover:bg-neutral-800 transition-colors"
          >
            Simply Static Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
