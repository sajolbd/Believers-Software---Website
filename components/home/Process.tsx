"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, TrendingUp, CheckCircle2, Terminal } from "lucide-react";

export default function Process() {
  const stages = [
    {
      stage: "STAGE 01",
      number: "01",
      icon: <Search className="w-5 h-5 text-primary" />,
      title: "Discovery & strategy",
      desc: "We learn your business, your customers, and your goals, then map out the site structure, service scope, and success metrics before any design work starts.",
      gradient: "from-primary/10 to-orange-500/10",
      accentColor: "text-primary",
    },
    {
      stage: "STAGE 02",
      number: "02",
      icon: <Palette className="w-5 h-5 text-indigo-500" />,
      title: "Design",
      desc: "Wireframes and visual design tailored to your brand — not a recycled template — reviewed with you before development begins.",
      gradient: "from-indigo-500/10 to-blue-500/10",
      accentColor: "text-indigo-600",
    },
    {
      stage: "STAGE 03",
      number: "03",
      icon: <Code2 className="w-5 h-5 text-teal-500" />,
      title: "Development",
      desc: "Your website is built in JavaScript or WordPress, whichever fits the project, with SEO fundamentals and security hardening built in from the start.",
      gradient: "from-teal-500/10 to-emerald-500/10",
      accentColor: "text-teal-600",
    },
    {
      stage: "STAGE 04",
      number: "04",
      icon: <Rocket className="w-5 h-5 text-amber-500" />,
      title: "Testing & launch",
      desc: "Cross-device testing, speed checks, and a final review before your website goes live — absolutely no surprises after launch day.",
      gradient: "from-amber-500/10 to-orange-500/10",
      accentColor: "text-amber-600",
    },
    {
      stage: "STAGE 05",
      number: "05",
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      title: "Growth: SEO, marketing & security",
      desc: "Once you're live, we keep optimizing — SEO, digital marketing, and WordPress security monitoring — so the site keeps improving after launch.",
      gradient: "from-emerald-500/10 to-green-500/10",
      accentColor: "text-emerald-600",
    },
  ];

  return (
    <section
      className="py-12 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden z-10"
      id="process"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary" />
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight mb-4">
            How Projects Move from Start to Finish
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Every website design and development project at Believers Software follows
            the same disciplined process — because consistency is what keeps a
            project on time and on budget.
          </p>
        </div>

        {/* Desktop Connected Stepper Chain (5 Columns) */}
        <div className="relative">
          {/* Timeline Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-8 right-8 h-[2px] bg-gradient-to-r from-primary/30 via-teal-500/30 to-emerald-500/30 z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -bottom-3 -right-2 font-mono font-bold text-5xl text-slate-100/90 group-hover:text-primary/10 transition-colors duration-300 select-none pointer-events-none">
                  {item.number}
                </span>

                <div className="relative z-10">
                  {/* Top Row: Icon Container & Stage Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} border border-slate-200/70 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>

                    <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      {item.stage}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Step Done Indicator */}
                <div className="pt-4 mt-6 border-t border-slate-100/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 group-hover:text-emerald-600 transition-colors relative z-10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Step {item.number} Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between gap-4 text-xs font-mono text-slate-600 max-w-4xl mx-auto flex-wrap">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary shrink-0" />
            <span>Structured Sprint Milestone Approvals</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>• Clear Timelines</span>
            <span>• Zero Hidden Steps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
