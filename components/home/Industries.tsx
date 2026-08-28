"use client";

import {
  ShoppingBag,
  Cpu,
  MapPin,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Building2,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      num: "01",
      title: "E-commerce & Retail",
      desc: "WooCommerce and custom storefronts built for conversion, speed, and easy product management.",
      icon: <ShoppingBag className="w-6 h-6 text-primary" />,
      tag: "High Conversion",
      gradient: "from-primary/15 via-orange-500/10 to-transparent",
      accentBorder: "group-hover:border-primary/40",
    },
    {
      num: "02",
      title: "SaaS & Startups",
      desc: "Custom JavaScript web apps, dashboards, and marketing sites that scale with the product.",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      tag: "Scalable Web Apps",
      gradient: "from-indigo-500/15 via-blue-500/10 to-transparent",
      accentBorder: "group-hover:border-indigo-500/40",
    },
    {
      num: "03",
      title: "Local Service Businesses",
      desc: "WordPress websites paired with local SEO to bring in customers searching in your area.",
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      tag: "Local SEO Focus",
      gradient: "from-teal-500/15 via-emerald-500/10 to-transparent",
      accentBorder: "group-hover:border-teal-500/40",
    },
    {
      num: "04",
      title: "Healthcare & Clinics",
      desc: "Secure, accessible, appointment-friendly websites with WordPress security built in.",
      icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
      tag: "Secure & Accessible",
      gradient: "from-rose-500/15 via-red-500/10 to-transparent",
      accentBorder: "group-hover:border-rose-500/40",
    },
    {
      num: "05",
      title: "Professional Services",
      desc: "Law firms, agencies, and consultancies that need a credible site and steady SEO-driven leads.",
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      tag: "Lead Generation",
      gradient: "from-amber-500/15 via-orange-400/10 to-transparent",
      accentBorder: "group-hover:border-amber-500/40",
    },
    {
      num: "06",
      title: "Education & Nonprofits",
      desc: "Content-heavy WordPress sites built for easy updates by non-technical staff.",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      tag: "Easy Staff CMS",
      gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
      accentBorder: "group-hover:border-blue-500/40",
    },
    {
      num: "07",
      title: "Real Estate",
      desc: "Listing-driven websites with fast search and filtering, built for high traffic volume.",
      icon: <Building2 className="w-6 h-6 text-purple-500" />,
      tag: "Fast Listing Search",
      gradient: "from-purple-500/15 via-violet-500/10 to-transparent",
      accentBorder: "group-hover:border-purple-500/40",
    },
    {
      num: "08",
      title: "Hospitality & Travel",
      desc: "Visual, booking-ready websites backed by digital marketing to fill the calendar.",
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      tag: "Booking Ready",
      gradient: "from-emerald-500/15 via-green-500/10 to-transparent",
      accentBorder: "group-hover:border-emerald-500/40",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-t border-slate-100 relative z-10 overflow-hidden" id="industries">
      {/* Subtle Background Ambient Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Who We Work With
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              Industries we design and develop for.
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4 text-base">
              The right website design and development approach changes depending on
              your industry. A clinic's website has different priorities than a SaaS
              product or an online store — here's where we spend most of our time.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200/80 shadow-sm rounded-full px-4 py-2 text-xs font-mono text-slate-700 self-start md:self-auto">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="font-bold text-slate-900 font-josefin text-sm">Tailored Solutions</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">8 Core Sectors</span>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.num}
              className={`group p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 ${ind.accentBorder} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Background Watermark Number */}
              <span className="absolute -bottom-3 -right-2 font-mono font-bold text-5xl text-slate-100 group-hover:text-primary/10 transition-colors duration-300 select-none pointer-events-none">
                {ind.num}
              </span>

              <div>
                {/* Icon Container & Watermark Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 p-2.5 rounded-2xl bg-gradient-to-br ${ind.gradient} border border-slate-200/60 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    {ind.icon}
                  </div>

                  <span className="font-mono text-[11px] font-bold text-slate-400 group-hover:text-primary transition-colors">
                    #{ind.num}
                  </span>
                </div>

                {/* Industry Title */}
                <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {ind.title}
                </h3>

                {/* Industry Description (100% Unchanged) */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-4 mt-6 border-t border-slate-100/80 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-500 group-hover:text-slate-800 transition-colors relative z-10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{ind.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

