"use client";

import { UserCheck, BarChart3, Clock, FileCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function Guarantee() {
  const items = [
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Full ownership, always",
      desc: "Your domain, hosting, code, and content stay in your name. Nothing is held hostage to keep you as a client.",
      tag: "100% Client Owned",
      gradient: "from-primary/15 via-orange-500/10 to-transparent",
      accentBorder: "group-hover:border-primary/40",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: "Transparent reporting",
      desc: "SEO, marketing, and maintenance clients get plain-language monthly reports — real numbers, not vanity metrics.",
      tag: "Real Numbers Only",
      gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      accentBorder: "group-hover:border-indigo-500/40",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Realistic timelines",
      desc: "You get a clear delivery date during discovery — before any contract is signed, not after.",
      tag: "Upfront Delivery Dates",
      gradient: "from-amber-500/15 via-orange-400/10 to-transparent",
      accentBorder: "group-hover:border-amber-500/40",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      title: "No lock-in contracts",
      desc: "Retainers and maintenance plans run month to month. You stay because it's working, not because you're stuck.",
      tag: "Month-to-Month",
      gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      accentBorder: "group-hover:border-emerald-500/40",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100 relative z-10 overflow-hidden" id="guarantee">
      {/* Subtle Background Ambient Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              What You Can Expect from Believers Software
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4 text-base">
              These aren't upsells — they're the baseline for how we work, whether you
              hire us for a single WordPress website or a full design, SEO, marketing,
              and maintenance package.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200/80 shadow-sm rounded-full px-4 py-2 text-xs font-mono text-slate-700 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="font-bold text-slate-900 font-josefin text-sm">Accountable Standard</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">100% Transparency</span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 ${item.accentBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                {/* Icon Container */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 p-2.5 rounded-2xl bg-gradient-to-br ${item.gradient} border border-slate-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-primary transition-colors">
                    #0{index + 1}
                  </span>
                </div>

                {/* Title & Description (100% Unchanged Content) */}
                <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 mt-6 border-t border-slate-100/80 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-500 group-hover:text-slate-800 transition-colors relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

