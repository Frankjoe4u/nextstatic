"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = ["Product", "Pricing", "Learn", "Blog"];

function HamburgerIcon() {
  return (
    <div className="p-2 rounded-md border border-white/20 text-white">
      <span className="block w-5 h-0.5 bg-current mb-1.5" />
      <span className="block w-5 h-0.5 bg-current mb-1.5" />
      <span className="block w-5 h-0.5 bg-current" />
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d1a] border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://clonestatics.vercel.app/logo/logo-dark.svg"
            alt="Simply Static"
            className="h-8 w-auto brightness-200"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Account
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-5 py-2 rounded-md bg-[#7c3aed] text-white text-sm font-semibold hover:bg-[#6d28d9] transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile — two hamburger icons side by side */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <HamburgerIcon />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0d0d1a] border-t border-white/10 px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="block text-sm font-medium text-slate-300 hover:text-white py-1"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Account
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#7c3aed] text-white text-sm font-semibold hover:bg-[#6d28d9] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
