
export default function Footer() {
  return (
    <footer
      className="py-20 px-16 max-sm:py-16 max-sm:px-6"
      style={{ backgroundColor: "#f0f0f8" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10 md:grid-cols-2 max-sm:grid-cols-1 text-center">
        <div>
          <h4 className="text-base font-bold text-gray-900 mb-8">Company</h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Legal Disclosure
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                VDP Program
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Data Privacy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-gray-900 mb-8">Resources</h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Changelogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Glossary
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Account
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-gray-900 mb-8">
            Static WordPress
          </h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                WordPress to Static
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Headless WordPress
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Performance Boost
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Security Benefits
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-bold text-gray-900 mb-8">Compare</h4>
          <ul className="flex flex-col gap-6">
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                WP2Static vs Simply Static
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                HardyPress vs Simply Static
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                Strattic vs Simply Static
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-700 underline underline-offset-2 hover:text-violet-700 transition-colors"
              >
                All Comparisons
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
