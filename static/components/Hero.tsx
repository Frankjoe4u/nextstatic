"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative pt-16 md:pt-24 pb-8 text-center px-4 overflow-visible"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #5b21b6 0%, #2e1065 40%, #1a0533 100%)",
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Static WordPress. <span className="block">Done Right.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Simply Static converts WordPress to static HTML. Keep the flexibility,
          add bulletproof security and instant performance.
        </p>

        {/* CTA */}
        <Link
          href="#"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-base font-bold transition-colors shadow-lg shadow-purple-900/50"
        >
          Get Started Today
        </Link>

        {/* Video — negative bottom margin pulls LogoBar up behind it */}
        <div className="relative z-20 mt-12 max-w-3xl mx-auto mb-[-160px]">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-video bg-slate-900">
              <video
                className="w-full h-full object-cover"
                poster="/vid.jpg"
                controls
              >
                <source src="/simply-static-teaser.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
