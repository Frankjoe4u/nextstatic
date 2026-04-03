import Link from "next/link";

const footerColumns = [
  {
    heading: "Company",
    links: [
      "Legal Disclosure",
      "Terms of Service",
      "VDP Program",
      "Data Privacy",
    ],
  },
  {
    heading: "Resources",
    links: ["Changelogs", "Case Studies", "Glossary", "Account"],
  },
  {
    heading: "Static WordPress",
    links: [
      "WordPress to Static",
      "Headless WordPress",
      "Performance Boost",
      "Security Benefits",
    ],
  },
  {
    heading: "Compare",
    links: [
      "WP2Static vs Simply Static",
      "HardyPress vs Simply Static",
      "Strattic vs Simply Static",
      "All Comparisons",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-light border-t border-brand-border px-4 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://clonestatics.vercel.app/logo/logo-dark.svg"
            alt="Simply Static"
            className="h-8 w-auto"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-500 hover:text-brand-teal transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Simply Static. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Built with ❤️ for the WordPress community
          </p>
        </div>
      </div>
    </footer>
  );
}
