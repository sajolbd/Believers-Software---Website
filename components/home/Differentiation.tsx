"use client";

import { Layers, ShieldCheck, FileKey, BarChart3 } from "lucide-react";

export default function Differentiation() {
  const items = [
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      badgeColor: "from-primary/15 to-orange-500/10 text-primary border-primary/20",
      number: "01",
      text: "One accountable team across design, dev, SEO, marketing & security",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#3FC7B0]" />,
      badgeColor: "from-[#3FC7B0]/15 to-emerald-500/10 text-[#3FC7B0] border-[#3FC7B0]/20",
      number: "02",
      text: "Security & speed built in from day one, not patched later",
    },
    {
      icon: <FileKey className="w-6 h-6 text-amber-500" />,
      badgeColor: "from-amber-500/15 to-orange-400/10 text-amber-500 border-amber-500/20",
      number: "03",
      text: "Full ownership of your code, content & CMS — no vendor lock-in",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      badgeColor: "from-indigo-500/15 to-blue-500/10 text-indigo-500 border-indigo-500/20",
      number: "04",
      text: "Plain-language monthly reporting, real numbers only",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-b border-slate-100 relative z-10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#3FC7B0]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header Tag */}
        <div className="flex items-center justify-center lg:justify-start mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <h5 className="font-mono text-xs font-bold text-slate-600 uppercase tracking-widest">
              What Makes Us Different
            </h5>
          </div>
        </div>

        {/* Relative Wrapper for Connecting Line */}
        <div className="relative">
          {/* Horizontal Dotted Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-[2px] border-t-2 border-dashed border-slate-300 z-0 pointer-events-none" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                {/* Node Circle Above Card */}
                <div className="mb-5 relative flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 text-slate-600 font-mono text-xs font-bold flex items-center justify-center shadow-md group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 group-hover:scale-110">
                    {item.number}
                  </div>
                  {/* Pulse aura on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none -z-10" />
                </div>

                {/* Card Body */}
                <div className="w-full h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden">
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon Container */}
                    <div className="mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.badgeColor} border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Content Text (100% Unchanged) */}
                    <p className="text-sm sm:text-[15px] font-semibold text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


