"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Search, ShieldCheck, Layout, Zap, CheckCircle2, Cpu } from "lucide-react";

export default function Hero() {
  const badges = [
    "Custom Website Development",
    "WordPress Development",
    "Website Maintenance",
    "SEO Services",
    "Digital & Social Media Marketing",
    "Security & Malware Removal",
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-16 md:pb-28 z-10 bg-[#FCFDFD]">
      {/* Inline Keyframes for Infinite Dotted Line Flow */}
      <style>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -24;
          }
        }
        @keyframes dashFlowReverse {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: 24;
          }
        }
        .animate-dash-forward {
          animation: dashFlow 1.2s linear infinite;
        }
        .animate-dash-reverse {
          animation: dashFlowReverse 1.5s linear infinite;
        }
      `}</style>

      {/* Background Ambient Glow Orbs */}
      <div className="hidden md:block absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-orange-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[520px]">

          {/* Left Content Column (First on Mobile & Desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6">
              <span className="w-5 h-[2px] bg-primary" />
              FULL-SERVICE WEB &amp; DIGITAL GROWTH AGENCY
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-josefin font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
              A website that actually earns its keep —{" "}
              <span className="text-primary italic font-normal">
                design, SEO, and security under one roof.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Believers Software builds and grows websites for e-commerce brands,
              SaaS startups, local service businesses, healthcare practices, and
              professional firms. Get custom JavaScript or WordPress design, speed,
              marketing, and security handled by one accountable team instead of
              five disconnected vendors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold btn-slide-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold btn-slide-dark border border-slate-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Our Services
              </a>
            </div>
            <p className="text-xs font-mono text-slate-400 mb-8 self-start sm:pl-1">
              No obligation · Reply within 1 business day
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-slate-50 text-slate-600 border border-slate-100 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Orbit Levitating Diagram (Second on Mobile, Universal Scaling) */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex items-center justify-center relative w-full h-[320px] min-[380px]:h-[360px] xs:h-[400px] sm:h-[480px] lg:h-[540px] overflow-hidden">
            <div className="relative w-full max-w-[460px] h-[320px] min-[380px]:h-[360px] xs:h-[400px] sm:h-[480px] lg:h-[500px] flex items-center justify-center scale-[0.65] min-[380px]:scale-[0.75] xs:scale-[0.85] sm:scale-95 lg:scale-100 origin-center transition-transform">

              {/* SVG Infinite Flowing Dotted Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Infinite Dotted Rays radiating from Center (250,250) */}
                <line
                  x1="250" y1="250" x2="110" y2="100"
                  stroke="#FF4B33" strokeWidth="3" strokeDasharray="6 6"
                  className="animate-dash-forward opacity-80"
                />
                <line
                  x1="250" y1="250" x2="390" y2="100"
                  stroke="#FF8C33" strokeWidth="3" strokeDasharray="6 6"
                  className="animate-dash-forward opacity-80"
                />
                <line
                  x1="250" y1="250" x2="390" y2="400"
                  stroke="#3FC7B0" strokeWidth="3" strokeDasharray="6 6"
                  className="animate-dash-forward opacity-80"
                />
                <line
                  x1="250" y1="250" x2="110" y2="400"
                  stroke="#10B981" strokeWidth="3" strokeDasharray="6 6"
                  className="animate-dash-forward opacity-80"
                />

                {/* Infinite Rotating Circular Workflow Ring */}
                <circle
                  cx="250" cy="250" r="170"
                  stroke="#FF4B33" strokeWidth="2" strokeDasharray="8 8"
                  className="animate-dash-reverse opacity-40"
                />
                <circle
                  cx="250" cy="250" r="215"
                  stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 6"
                  className="animate-dash-forward opacity-30"
                />
              </svg>

              {/* Floating Traveling Glowing Data Particles */}
              <motion.div
                animate={{
                  x: [250 - 250, 110 - 250, 250 - 250],
                  y: [250 - 250, 100 - 250, 250 - 250],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_4px_rgba(255,75,51,0.8)] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  x: [250 - 250, 390 - 250, 250 - 250],
                  y: [250 - 250, 100 - 250, 250 - 250],
                }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear", delay: 0.5 }}
                className="absolute w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_12px_4px_rgba(245,158,11,0.8)] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  x: [250 - 250, 390 - 250, 250 - 250],
                  y: [250 - 250, 400 - 250, 250 - 250],
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                className="absolute w-3 h-3 rounded-full bg-[#3FC7B0] shadow-[0_0_12px_4px_rgba(63,199,176,0.8)] z-20 pointer-events-none"
              />
              <motion.div
                animate={{
                  x: [250 - 250, 110 - 250, 250 - 250],
                  y: [250 - 250, 400 - 250, 250 - 250],
                }}
                transition={{ repeat: Infinity, duration: 3.2, ease: "linear", delay: 1.5 }}
                className="absolute w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_4px_rgba(16,185,129,0.8)] z-20 pointer-events-none"
              />

              {/* Central Glowing Core (Believers Software Engine) */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-primary via-[#FF7A33] to-[#FF8C33] shadow-[0_0_50px_12px_rgba(255,75,51,0.35)] flex flex-col items-center justify-center text-white border-2 border-white select-none group cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse text-amber-200" />
                  <span className="font-josefin font-black text-xl sm:text-2xl tracking-tight">BS</span>
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] font-bold tracking-widest uppercase mt-0.5 text-white/90">CORE ENGINE</span>
              </motion.div>

              {/* Workflow Step 01: UI/UX & Architecture (Top-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1 left-0 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2 sm:gap-3 w-40 xs:w-44 sm:w-56 group hover:border-primary transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  <Layout className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-primary">01.</span>
                    <h4 className="font-bold text-[11px] sm:text-xs text-slate-800 leading-tight">UI/UX Design</h4>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 font-semibold block mt-0.5">
                    Figma Wireframes
                  </span>
                </div>
              </motion.div>

              {/* Workflow Step 02: Code & API Development (Top-Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute top-1 right-0 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2 sm:gap-3 w-40 xs:w-44 sm:w-56 group hover:border-amber-500 transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold flex-shrink-0">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-amber-600">02.</span>
                    <h4 className="font-bold text-[11px] sm:text-xs text-slate-800 leading-tight">Custom Code</h4>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-amber-600 font-bold flex items-center gap-1 mt-0.5">
                    <Zap className="w-3 h-3 text-amber-500" /> Next.js / WP
                  </span>
                </div>
              </motion.div>

              {/* Workflow Step 03: SEO & Traffic Optimization (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute bottom-4 right-0 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2 sm:gap-3 w-40 xs:w-44 sm:w-56 group hover:border-[#3FC7B0] transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#3FC7B0]/10 flex items-center justify-center text-[#3FC7B0] font-bold flex-shrink-0">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#3FC7B0]">03.</span>
                    <h4 className="font-bold text-[11px] sm:text-xs text-slate-800 leading-tight">SEO &amp; Growth</h4>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#3FC7B0] font-bold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> +140% Rank
                  </span>
                </div>
              </motion.div>

              {/* Workflow Step 04: Security & Maintenance (Bottom-Left) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
                className="absolute bottom-4 left-0 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 flex items-center gap-2 sm:gap-3 w-40 xs:w-44 sm:w-56 group hover:border-emerald-500 transition-all"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-emerald-600">04.</span>
                    <h4 className="font-bold text-[11px] sm:text-xs text-slate-800 leading-tight">Security &amp; Care</h4>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-emerald-600 font-bold block mt-0.5">
                    0 Malware · 99.9%
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
