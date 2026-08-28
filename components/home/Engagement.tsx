"use client";

import Link from "next/link";
import { Rocket, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Engagement() {
  const models = [
    {
      tag: "Project-Based",
      title: "One-Time Build",
      desc: "A defined website design and development project — JavaScript or WordPress — scoped, quoted, and delivered on a fixed timeline.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      bullets: [
        "Fixed scope & fixed price",
        "Design, development & launch",
        "SEO fundamentals included",
        "Full ownership on handover",
      ],
      featured: false,
      ctaText: "Start One-Time Project",
      gradient: "from-primary/10 via-orange-500/5 to-transparent",
    },
    {
      tag: "Most Common",
      title: "Build + Growth Retainer",
      desc: "Your website is built by us, then supported month to month with SEO, digital marketing, and WordPress security so performance keeps improving.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      bullets: [
        "Everything in One-Time Build",
        "Ongoing SEO & content strategy",
        "Digital marketing management",
        "Security monitoring & backups",
      ],
      featured: true,
      ctaText: "Choose Retainer Plan",
      gradient: "from-primary via-orange-500 to-amber-500",
    },
    {
      tag: "Existing Sites",
      title: "Recovery & Support",
      desc: "For businesses with an existing website that needs a malware cleanup, security hardening, an SEO reset, or ongoing maintenance — no rebuild required.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bullets: [
        "Malware removal & hardening",
        "Technical SEO audit & fixes",
        "Monthly maintenance & monitoring",
        "No full redesign required",
      ],
      featured: false,
      ctaText: "Request Site Support",
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-t border-slate-100 relative z-10 overflow-hidden" id="engagement">
      {/* Subtle Ambient Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-orange-500/5 to-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary" />
            How We Work Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
            Engagement models built around what you actually need.
          </h2>
          <p className="text-slate-600 leading-relaxed mt-4 text-base">
            Not every business needs the same relationship with an agency. Some need
            a website built once and handed over; others need an ongoing partner
            across development, SEO, marketing, and security. We scope the
            engagement to match, rather than pushing every client into the same
            package.
          </p>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-9 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/95 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 ${model.featured
                  ? "border-primary/50 shadow-md shadow-primary/5"
                  : "border-slate-200/80"
                }`}
            >
              {/* Top Highlight Accent Bar for Featured Card */}
              {model.featured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />
              )}

              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-block px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${model.featured
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-slate-100 text-slate-600 border border-slate-200/60"
                      }`}
                  >
                    {model.tag}
                  </span>

                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200/70 bg-slate-50 shadow-xs group-hover:scale-105 transition-transform duration-300">
                    {model.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-josefin font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                  {model.title}
                </h3>
                <p className="text-sm leading-relaxed mb-8 text-slate-600">
                  {model.desc}
                </p>

                {/* Bullets List (100% Unchanged Content) */}
                <ul className="flex flex-col gap-3.5 pt-6 border-t border-slate-100/80 mb-8">
                  {model.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                      <span className="text-slate-700 font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${model.featured
                    ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                    : "bg-slate-900 text-white hover:bg-primary shadow-sm"
                  }`}
              >
                <span>{model.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

