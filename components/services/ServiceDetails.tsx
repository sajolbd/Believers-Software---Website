"use client";

import { useState } from "react";
import {
  Code,
  Search,
  Megaphone,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  Globe,
  Layers,
  Lock,
  RefreshCw,
  ShieldCheck,
  Zap,
  Activity,
  TrendingUp,
} from "lucide-react";

export default function ServiceDetails() {
  const [activeNav, setActiveNav] = useState("web-dev");

  const serviceNav = [
    { id: "web-dev", name: "01. Design & Dev", icon: <Code className="w-4 h-4" /> },
    { id: "seo", name: "02. SEO Services", icon: <Search className="w-4 h-4" /> },
    { id: "marketing", name: "03. Digital Marketing", icon: <Megaphone className="w-4 h-4" /> },
    { id: "security", name: "04. Security", icon: <ShieldAlert className="w-4 h-4" /> },
    { id: "maintenance", name: "05. Maintenance", icon: <Wrench className="w-4 h-4" /> },
  ];

  return (
    <div>
      {/* ================= STICKY QUICK NAVIGATION BAR ================= */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-slate-200/80 shadow-xs hidden md:block">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between py-3.5">
          <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
            Jump to Service:
          </span>
          <div className="flex items-center gap-2">
            {serviceNav.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setActiveNav(nav.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-josefin font-bold transition-all duration-200 ${
                  activeNav === nav.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {nav.icon}
                <span>{nav.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SERVICE 01: DESIGN & DEV ================= */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100 relative" id="web-dev">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                <Code className="w-3.5 h-3.5" /> Service 01
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-josefin font-bold text-slate-900 leading-tight tracking-tight mb-5">
                Website Design &amp; Development
              </h3>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Website design and development is one service at Believers Software — the technology behind it is a choice we make with you, not a separate product line. Some projects need the flexibility of custom code; others need a website your own team can update without a developer. We scope the right one for your goals, budget, and timeline, and build it properly either way.
              </p>

              {/* Callout Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm border-l-4 border-l-primary relative overflow-hidden">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  This service fits you if:{" "}
                  <span className="text-slate-600 font-normal">
                    you need a new business website, an online store, a marketing site, a SaaS product, a dashboard, or a web application — and you want one team to recommend and build the right foundation instead of selling you whatever they happen to know.
                  </span>
                </p>
              </div>
            </div>

            {/* UI Visual Preview Widget: Code Architecture Studio */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-white font-mono text-xs">
                <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-400 text-[11px] font-semibold">architecture.config.ts</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">NEXT.JS + WP</span>
                </div>
                <div className="p-6 space-y-3 bg-slate-900/90 text-slate-300 leading-relaxed text-[12px]">
                  <div><span className="text-purple-400">export const</span> <span className="text-amber-300">StackEngine</span> = &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">frontend:</span> <span className="text-emerald-400">"React 18 / Next.js App Router"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">cmsOption:</span> <span className="text-emerald-400">"Custom WP Theme or Headless"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">performance:</span> <span className="text-emerald-400">"100/100 Core Web Vitals"</span>,</div>
                  <div className="pl-4"><span className="text-blue-400">ownership:</span> <span className="text-emerald-400">"100% Full Source Code Rights"</span></div>
                  <div>&#125;;</div>
                </div>
                <div className="p-4 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> READY FOR SCALE
                  </span>
                  <span>BUILD: OPTIMIZED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* JavaScript Column */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:border-[#3FC7B0]/40 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#3FC7B0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3FC7B0]/20 to-emerald-500/10 border border-[#3FC7B0]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Globe className="w-7 h-7 text-[#3FC7B0]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-josefin font-bold text-slate-900">
                      Built with JavaScript
                    </h4>
                    <span className="font-mono text-xs text-[#3FC7B0] font-bold">React · Next.js · Node.js</span>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8">
                  For businesses that have outgrown templates — custom UI/UX, React &amp; Next.js development, API integrations, dashboards, and dynamic web applications built mobile-first and optimized for speed.
                </p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "Custom UI/UX design before a single line of code",
                    "React & Next.js for speed and SEO-friendly rendering",
                    "API integrations & dynamic web applications",
                    "Performance optimization — absolutely no bloat",
                  ].map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#3FC7B0]/15 text-[#3FC7B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WordPress Column */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Layers className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-josefin font-bold text-slate-900">
                      Built with WordPress
                    </h4>
                    <span className="font-mono text-xs text-primary font-bold">Custom Themes · WooCommerce</span>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-8">
                  For businesses that need a professional, fast-loading site their own team can manage — custom theme design, a lean plugin stack, WooCommerce for stores, and editor training so updates don't require a developer.
                </p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "Custom WordPress theme design — no generic templates",
                    "WooCommerce setup for stores & product catalogs",
                    "Page speed & Core Web Vitals optimization",
                    "Editor training so your team can update content",
                  ].map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 02: SEO ================= */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative" id="seo">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text side */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/20">
                <Search className="w-3.5 h-3.5" /> Service 02
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-josefin font-bold text-slate-900 leading-tight tracking-tight mb-6">
                SEO Services That Target Real Buyers
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">
                A website that isn't visible on Google is a website that's invisible to most of your customers. Our SEO services are built around one goal: getting your site found by the people who are actively searching for what you offer, and turning that visibility into inquiries and sales.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We start every SEO engagement with a technical audit — checking site speed, indexing, mobile usability, and structured data — because no amount of content can fix a website Google can't crawl properly. From there, our SEO services cover on-page optimization, keyword research based on real search intent, content strategy, local SEO for businesses that serve a specific area, and link-building that focuses on relevance over volume.
              </p>

              {/* Callout card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 mb-8 border-l-4 border-l-indigo-500">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  This service fits you if:{" "}
                  <span className="text-slate-600 font-normal">
                    your website gets traffic but few conversions, you're invisible on Google for the keywords that matter, or you're launching a new site and want SEO built in from day one instead of bolted on later.
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3.5">
                {[
                  "Technical SEO audits — speed, crawlability, indexing, structured data",
                  "Keyword research based on real search intent, not just search volume",
                  "On-page SEO — titles, meta descriptions, internal linking, content structure",
                  "Local SEO for businesses that serve a specific city or region",
                  "Monthly reporting so you can see rankings and traffic move, not just guess",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/15 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope side & UI Visual Widget */}
            <div className="lg:col-span-5 space-y-6">
              {/* Rank Tracker Visual Mockup Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl border border-indigo-800/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" /> ORGANIC RANK OVERVIEW
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    +140% GROWTH
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-josefin font-bold text-3xl text-white">#1 RANK</span>
                  <span className="text-xs font-mono text-indigo-300">Target Keywords</span>
                </div>
                {/* Simulated Rank Curve */}
                <div className="h-16 flex items-end gap-2 pt-4">
                  {[25, 40, 35, 60, 55, 80, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-indigo-500/30 rounded-t group-hover:bg-indigo-500 transition-all relative overflow-hidden" style={{ height: `${h}%` }}>
                      <div className="w-full bg-indigo-400 h-1.5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope Table */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <h5 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">
                      SEO Scope
                    </h5>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                    ACTIVE MONITORING
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-sm font-mono">
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Technical audit</span>
                    <span className="text-primary font-bold">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Keyword research</span>
                    <span className="text-white font-semibold">Intent-based</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">On-page SEO</span>
                    <span className="text-white font-semibold">Full site</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Local SEO</span>
                    <span className="text-white font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5">
                    <span className="text-slate-400">Reporting</span>
                    <span className="text-[#3FC7B0] font-bold">Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 03: MARKETING ================= */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-100 relative" id="marketing">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Scope side & UI Visual Widget (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              {/* Campaign Performance Mockup Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#3FC7B0] uppercase tracking-wider flex items-center gap-1.5">
                    <Megaphone className="w-4 h-4" /> CAMPAIGN CALENDAR
                  </span>
                  <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    LIVE ADS & SOCIAL
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-josefin font-bold text-xs text-slate-800">Weekly Video Reels</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">Scheduled</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#3FC7B0]" />
                      <span className="font-josefin font-bold text-xs text-slate-800">Google Search Ads</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#3FC7B0] font-bold">Converting</span>
                  </div>
                </div>
              </div>

              {/* Scope Table */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest">
                      Marketing Channels
                    </h5>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#3FC7B0] bg-[#3FC7B0]/10 border border-[#3FC7B0]/20 px-2.5 py-1 rounded-full">
                    FULL FUNNEL
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-sm font-mono">
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Social media posts</span>
                    <span className="text-primary font-bold">Designed &amp; scheduled</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Video content</span>
                    <span className="text-slate-800 font-semibold">Short-form, produced</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Paid search</span>
                    <span className="text-slate-800 font-semibold">Google Ads</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Paid social</span>
                    <span className="text-slate-800 font-semibold">Meta Ads</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Email marketing</span>
                    <span className="text-[#3FC7B0] font-bold">Automated</span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5">
                    <span className="text-slate-500">Tracking</span>
                    <span className="text-primary font-bold">Full-funnel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3FC7B0]/10 text-[#3FC7B0] font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-[#3FC7B0]/20">
                <Megaphone className="w-3.5 h-3.5" /> Service 03
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-josefin font-bold text-slate-900 leading-tight tracking-tight mb-6">
                Digital Marketing Services — Social Media &amp; Paid Advertising
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">
                Traffic without a plan is just noise. Our digital marketing services are designed to work with the website we build — not as a separate, disconnected effort — so every post, video, ad, and email actually points somewhere that converts.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Social media marketing is a core part of what we do, not an afterthought. We plan a content calendar, write captions, design graphics, and produce short-form video content, then handle the actual posting and scheduling across your platforms — Facebook, Instagram, LinkedIn, and others — so your brand shows up consistently instead of in bursts. Alongside that, we run paid advertising on Google and Meta for businesses that want faster, targeted reach, and email marketing to stay in front of people who've already shown interest.
              </p>

              {/* Callout card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 mb-8 border-l-4 border-l-[#3FC7B0]">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  This service fits you if:{" "}
                  <span className="text-slate-600 font-normal">
                    your social media has gone quiet or inconsistent, you want professional posts and video content without hiring an in-house team, or you're ready to launch paid advertising with a website built to actually convert that traffic.
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3.5">
                {[
                  "Social media marketing — post design, captions, and video content",
                  "Content calendar planning & consistent posting schedule",
                  "Google Ads & Meta Ads campaign management",
                  "Email marketing & automated follow-up sequences",
                  "Conversion tracking, so you know exactly what is actually working",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#3FC7B0]/15 text-[#3FC7B0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 04: SECURITY ================= */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 relative" id="security">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text side */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-rose-500/20">
                <ShieldAlert className="w-3.5 h-3.5" /> Service 04
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-josefin font-bold text-slate-900 leading-tight tracking-tight mb-6">
                WordPress Security &amp; Malware Removal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">
                WordPress powers a huge share of the web, which also makes it a constant target. A hacked or malware-infected website doesn't just look bad — it can get your domain blacklisted by Google, blocked by browsers, and stripped of the search rankings you worked to earn.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                If your WordPress website has already been compromised, our malware removal process identifies and removes malicious code, patches the vulnerability that let it in, and requests a review to get any Google or browser blacklist warning lifted. If your site is still clean, our WordPress security service closes the door before anyone gets in — firewall setup, login hardening, malware scanning, and automated backups, so you're never one hack away from losing your website.
              </p>

              {/* Callout card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 mb-8 border-l-4 border-l-rose-500">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  This service fits you if:{" "}
                  <span className="text-slate-600 font-normal">
                    your WordPress site has been hacked or flagged with a malware warning, you've had unexplained slowdowns or strange redirects, or you simply want ongoing WordPress security instead of hoping nothing goes wrong.
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3.5">
                {[
                  "Malware detection & complete removal from infected WordPress sites",
                  "Vulnerability patching so the same hack cannot happen twice",
                  "Blacklist removal requests with Google Safe Browsing and security filters",
                  "Ongoing security monitoring, firewall, and automated backups",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope side & UI Visual Widget */}
            <div className="lg:col-span-5 space-y-6">
              {/* Security Shield Scanner Visual Mockup */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-rose-500/30 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-rose-500" /> LIVE FIREWALL SCANNER
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> 0 THREATS DETECTED
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Malware Scanner:</span>
                    <span className="text-emerald-400 font-bold">CLEAN</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Google Safe Browsing:</span>
                    <span className="text-emerald-400 font-bold">VERIFIED CLEAN</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Login Hardening:</span>
                    <span className="text-emerald-400 font-bold">PROTECTED</span>
                  </div>
                </div>
              </div>

              {/* Scope Table */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <h5 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">
                      Security Response
                    </h5>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full">
                    24/7 PROTECTED
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-sm font-mono">
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Malware scan</span>
                    <span className="text-primary font-bold">Full site</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Cleanup</span>
                    <span className="text-white font-semibold">Code-level removal</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Blacklist review</span>
                    <span className="text-[#3FC7B0] font-bold">Post-clean request</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Firewall</span>
                    <span className="text-white font-semibold">Configured</span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5">
                    <span className="text-slate-400">Backups</span>
                    <span className="text-white font-semibold">Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 05: MAINTENANCE ================= */}
      <section className="py-20 md:py-28 bg-slate-50/60" id="maintenance">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Scope side & UI Visual Widget (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              {/* Uptime & Backup Health Widget */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-4 h-4" /> UPTIME & BACKUP HEALTH
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                    99.9% UPTIME
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-600">Core/Plugin Updates</span>
                    <span className="text-primary font-bold">UP TO DATE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-600">Automated Backups</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" /> DAILY BACKUP
                    </span>
                  </div>
                </div>
              </div>

              {/* Scope Table */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest">
                      Maintenance Coverage
                    </h5>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    PRIORITY CARE
                  </span>
                </div>

                <div className="flex flex-col gap-4 text-sm font-mono">
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Updates</span>
                    <span className="text-primary font-bold">Monthly, scheduled</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Uptime</span>
                    <span className="text-[#3FC7B0] font-bold">Monitored 24/7</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Backups</span>
                    <span className="text-slate-800 font-semibold">Automated</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-dashed border-slate-200/80">
                    <span className="text-slate-500">Minor fixes</span>
                    <span className="text-slate-800 font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5">
                    <span className="text-slate-500">Response time</span>
                    <span className="text-primary font-bold">Priority support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/20">
                <Wrench className="w-3.5 h-3.5" /> Service 05
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-josefin font-bold text-slate-900 leading-tight tracking-tight mb-6">
                Website Maintenance
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">
                Launch day isn't the finish line — it's the point where a website starts needing attention. Plugins go out of date, themes need updates, links break, and small technical issues pile up quietly until something stops working at the worst possible time. Our website maintenance service exists so that never happens on your watch.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every maintenance plan covers the unglamorous but essential work: core, theme, and plugin updates, uptime monitoring, performance checks, broken-link fixes, and regular backups so you can always roll back if something goes wrong. For WordPress websites, maintenance is paired with the same security monitoring used in our WordPress security service, so updates and protection move together instead of being handled separately.
              </p>

              {/* Callout card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 mb-8 border-l-4 border-l-amber-500">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  This service fits you if:{" "}
                  <span className="text-slate-600 font-normal">
                    your website was launched — by us or anyone else — and hasn't been actively maintained since, you don't have in-house technical staff to handle routine updates, or you simply want one less thing to worry about each month.
                  </span>
                </p>
              </div>

              <ul className="flex flex-col gap-3.5">
                {[
                  "Core, theme & plugin updates on a regular schedule",
                  "Uptime monitoring & performance health checks",
                  "Scheduled backups with easy restore points",
                  "Small content updates & bug fixes included monthly",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
