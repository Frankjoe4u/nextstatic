"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-10 md:pt-24 md:pb-16 text-center px-4 bg-purple-900 bg-cover bg-center">

      <div className="absolute bg-purpl-700" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Static WordPress. <span className="text-brand-teal">Done Right.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Simply Static converts WordPress to static HTML.{" "}
          <br className="hidden sm:block" />
          Keep the flexibility, add bulletproof security and instant
          performance.
        </p>

        {/* CTA */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-purple-500 text-white text-base "
        >
          Get Started Today
          
        </Link>

        {/* Video */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="aspect-video bg-slate-900">
            <video
              className="w-full h-full object-cover"
              poster="vid.jpg"
              controls
            >
              <source src="/public/simply-static-teaser.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
