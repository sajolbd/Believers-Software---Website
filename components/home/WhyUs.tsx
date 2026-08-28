"use client";

import { motion } from "framer-motion";
import { Layers, Zap, ShieldCheck, KeyRound, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhyUs() {
  const items = [
    {
      number: "01",
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "One team, every discipline",
      desc: "Design, development, SEO, marketing, and security work from a single roadmap — not five disconnected vendors passing your project around.",
      tag: "Unified Roadmap",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    },
    {
      number: "02",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Built for speed, from day one",
      desc: "Every website we design and develop is optimized for load speed and Core Web Vitals before launch, not patched afterward.",
      tag: "95+ Core Web Vitals",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Security is standard, not an add-on",
      desc: "Every WordPress website we build ships with security hardening included — you don't have to ask for it separately.",
      tag: "Hardened Security",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    },
    {
      number: "04",
      icon: <KeyRound className="w-6 h-6 text-indigo-500" />,
      title: "You own everything we build",
      desc: "Your code, your content, your CMS login. No lock-in, no hostage-taking if you ever want to work with someone else.",
      tag: "100% Client Ownership",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    },
  ];

  return (
    <section
      className="py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-y border-slate-100 relative overflow-hidden z-10"
      id="why-us"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-orange-500/5 to-primary/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              The Believers Difference
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              Why Believers Software is built differently.
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4 text-base">
              A website is one of the few assets a business owns outright online. We
              treat it that way — with the same care whether we're writing a line of
              code or answering a support message.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2.5 bg-white border border-slate-200/80 shadow-sm rounded-full px-4 py-2 text-xs font-mono text-slate-700 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="font-bold text-slate-900 font-josefin text-sm">100% Source Access</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Zero Lock-in</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(0,0,0,0.12)] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Step Number */}
              <div className="absolute top-6 right-6 font-mono font-bold text-3xl text-slate-200/80 group-hover:text-primary/20 transition-colors duration-300">
                {item.number}
              </div>

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-josefin font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Feature Tag */}
              <div className="pt-6 border-t border-slate-100/80 mt-auto">
                <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Guarantee Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-josefin font-bold text-white mb-2">
              Ready to build a website you actually own &amp; control?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No long-term trap contracts, no hidden developer lock-in. Get full access and expert support from day one.
            </p>
          </div>

          <Link
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 shrink-0 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

