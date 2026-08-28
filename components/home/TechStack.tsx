"use client";

import { Code2, LineChart, Megaphone, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function TechStack() {
  const columns = [
    {
      title: "Development",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      gradient: "from-primary/15 via-orange-500/10 to-transparent",
      accentBorder: "group-hover:border-primary/40",
      items: [
        "React & Next.js",
        "Node.js",
        "WordPress & WooCommerce",
        "REST & third-party APIs",
      ],
    },
    {
      title: "SEO & Analytics",
      icon: <LineChart className="w-5 h-5 text-indigo-500" />,
      gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      accentBorder: "group-hover:border-indigo-500/40",
      items: [
        "Google Search Console",
        "Google Analytics 4",
        "Schema / structured data",
        "Core Web Vitals tooling",
      ],
    },
    {
      title: "Marketing",
      icon: <Megaphone className="w-5 h-5 text-[#3FC7B0]" />,
      gradient: "from-[#3FC7B0]/15 via-teal-500/10 to-transparent",
      accentBorder: "group-hover:border-[#3FC7B0]/40",
      items: [
        "Google Ads & Meta Ads",
        "Email automation platforms",
        "Social scheduling tools",
        "Conversion tracking & pixels",
      ],
    },
    {
      title: "Security",
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      gradient: "from-rose-500/15 via-red-500/10 to-transparent",
      accentBorder: "group-hover:border-rose-500/40",
      items: [
        "Malware scanning & firewalls",
        "Automated backups",
        "SSL & login hardening",
        "Google Safe Browsing review",
      ],
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100 relative z-10 overflow-hidden" id="tech-stack">
      {/* Subtle Background Ambient Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Under the Hood
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              The tools we build and defend your website with.
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4 text-base">
              We stay deliberately narrow on our tech stack — fewer tools, used well,
              means fewer things that break. Here's what shows up in most projects.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200/80 shadow-sm rounded-full px-4 py-2 text-xs font-mono text-slate-700 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="font-bold text-slate-900 font-josefin text-sm">Battle-Tested Stack</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Zero Bloat</span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`group p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 ${col.accentBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                {/* Column Top Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${col.gradient} border border-slate-200/60 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                      {col.icon}
                    </div>
                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                      {col.title}
                    </h3>
                  </div>
                </div>

                {/* Items List */}
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700 leading-snug group-hover/item:text-slate-900 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

