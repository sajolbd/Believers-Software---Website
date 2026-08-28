"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, TrendingUp, Layers } from "lucide-react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Custom Website",
    "WordPress",
    "SEO",
    "Marketing",
    "Security",
    "Maintenance",
  ];

  const projects = [
    {
      id: 1,
      category: "Custom Website Development",
      categorySlug: "Custom Website",
      title: "Custom Analytics Dashboard for a SaaS Startup",
      desc: "A data-heavy internal dashboard rebuilt from a slow legacy app into a fast React and Next.js interface, with live data visualization and role-based access.",
      statLabel1: "Load time",
      statValue1: "Under 1.5s",
      statLabel2: "Stack",
      statValue2: "React + Next.js",
      image: "/images/portfolio/saas-dashboard.jpg",
    },
    {
      id: 2,
      category: "WordPress Development",
      categorySlug: "WordPress",
      title: "WooCommerce Rebuild for a Retail Brand",
      desc: "Migrated a slow, plugin-heavy store to a lean custom WordPress theme with a streamlined checkout and mobile-first product pages.",
      statLabel1: "Page speed",
      statValue1: "+62% faster",
      statLabel2: "Platform",
      statValue2: "WooCommerce",
      image: "/images/portfolio/woocommerce-store.jpg",
    },
    {
      id: 3,
      category: "SEO Services",
      categorySlug: "SEO",
      title: "Local SEO Overhaul for a Service Business",
      desc: "Rebuilt the site's on-page structure, fixed technical indexing issues, and ran local SEO to move the business from page three to the first page for its core keywords.",
      statLabel1: "Organic traffic",
      statValue1: "+140% in 6mo",
      statLabel2: "Focus",
      statValue2: "Local SEO",
      image: "/images/portfolio/seo-local-site.jpg",
    },
    {
      id: 4,
      category: "WordPress Security",
      categorySlug: "Security",
      title: "Malware Removal & Recovery for a Blacklisted Site",
      desc: "Cleaned an infected WordPress site flagged by Google Safe Browsing, patched the entry point, requested a blacklist review, and set up ongoing monitoring.",
      statLabel1: "Blacklist status",
      statValue1: "Cleared 100%",
      statLabel2: "Downtime",
      statValue2: "Under 24h",
      image: "/images/portfolio/security-recovery.jpg",
    },
    {
      id: 5,
      category: "Digital & Social Media Marketing",
      categorySlug: "Marketing",
      title: "Social Media Growth for a Hospitality Brand",
      desc: "Took over a dormant Instagram and Facebook presence — built a content calendar, designed posts, and produced short-form video content on a consistent weekly schedule.",
      statLabel1: "Engagement",
      statValue1: "+3.1x in 90 days",
      statLabel2: "Channels",
      statValue2: "Insta, Facebook",
      image: "/images/portfolio/social-marketing.jpg",
    },
    {
      id: 6,
      category: "Website Maintenance",
      categorySlug: "Maintenance",
      title: "Maintenance & Uptime Plan for Multi-Location Site",
      desc: "Took over update and backup responsibilities for a WordPress site running across multiple location pages, cutting downtime incidents and keeping every plugin current.",
      statLabel1: "Uptime",
      statValue1: "99.9% Verified",
      statLabel2: "Coverage",
      statValue2: "24/7 monitoring",
      image: "/images/portfolio/maintenance-care.jpg",
    },
  ];

  const getCategoryCount = (slug: string) => {
    if (slug === "All") return projects.length;
    return projects.filter((p) => p.categorySlug === slug).length;
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50/50 to-white relative z-10" id="portfolio">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Selected Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              Recent projects across design, development &amp; growth.
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 self-start md:self-auto">
            <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-mono font-bold shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              {projects.length} Case Studies
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                  ? "bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]"
                  : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image Mockup Container */}
              <div className="h-48 sm:h-52 relative overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-900/85 backdrop-blur-md text-white border border-white/10 shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {project.category}
                  </span>
                </div>

                {/* Action Link Icon */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {project.desc}
                  </p>
                </div>

                {/* Results & Key Metrics */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5 mt-auto">
                  <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 group-hover:border-primary/10 transition-colors">
                    <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider mb-0.5">
                      {project.statLabel1}
                    </span>
                    <strong className="text-slate-900 text-xs font-bold font-josefin flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                      {project.statValue1}
                    </strong>
                  </div>

                  <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 group-hover:border-primary/10 transition-colors">
                    <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider mb-0.5">
                      {project.statLabel2}
                    </span>
                    <strong className="text-primary text-xs font-bold font-josefin">
                      {project.statValue2}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3 text-xs text-slate-500 font-mono max-w-3xl leading-relaxed">
          <Layers className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>
            Project names and identifying client details are withheld or generalized per client confidentiality. Ask us for live demo walkthroughs and references relevant to your industry.
          </span>
        </div>
      </div>
    </section>
  );
}
