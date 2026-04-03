import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-brand-navy px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Make WordPress Fast,
          <br className="hidden sm:block" /> Secure, and Maintenance-Free?
        </h2>
        <p className="text-slate-400 text-base mb-10">
          Choose the solution that fits your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-brand-navy text-sm font-bold hover:bg-slate-100 transition-colors"
          >
            Simply Static Pro
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-brand-teal text-white text-sm font-bold hover:bg-brand-tealDark transition-colors"
          >
            Simply Static Studio
          </Link>
        </div>
      </div>
    </section>
  );
}
