"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "JavaScript",
    "WordPress",
    "SEO",
    "Marketing",
    "Security",
    "Maintenance",
  ];

  const projects = [
    {
      id: 1,
      category: "JavaScript Development",
      categorySlug: "JavaScript",
      title: "Custom Analytics Dashboard for a SaaS Startup",
      desc: "A data-heavy internal dashboard rebuilt from a slow legacy app into a fast React and Next.js interface, with live data visualization and role-based access.",
      statLabel1: "Load time",
      statValue1: "Under 1.5s",
      statLabel2: "Stack",
      statValue2: "React + Next.js",
      gradient: "from-blue-50 to-indigo-50/50 text-indigo-600",
      bgText: "SaaS Dashboard — React / Next.js",
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
      gradient: "from-emerald-50 to-teal-50/50 text-teal-600",
      bgText: "WooCommerce Storefront",
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
      gradient: "from-amber-50 to-orange-50/50 text-orange-600",
      bgText: "Local Service Website + SEO",
    },
    {
      id: 4,
      category: "WordPress Security",
      categorySlug: "Security",
      title: "Malware Removal & Recovery for a Blacklisted Site",
      desc: "Cleaned an infected WordPress site flagged by Google Safe Browsing, patched the entry point, requested a blacklist review, and set up ongoing monitoring.",
      statLabel1: "Blacklist status",
      statValue1: "Cleared",
      statLabel2: "Downtime",
      statValue2: "Under 24h",
      gradient: "from-red-50 to-rose-50/50 text-rose-600",
      bgText: "Hack Recovery & Hardening",
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
      gradient: "from-purple-50 to-pink-50/50 text-purple-600",
      bgText: "Social Media Content Calendar",
    },
    {
      id: 6,
      category: "Website Maintenance",
      categorySlug: "Maintenance",
      title: "Maintenance & Uptime Plan for Multi-Location Site",
      desc: "Took over update and backup responsibilities for a WordPress site running across multiple location pages, cutting downtime incidents and keeping every plugin current.",
      statLabel1: "Uptime",
      statValue1: "99.9%",
      statLabel2: "Coverage",
      statValue2: "24/7 monitoring",
      gradient: "from-slate-50 to-slate-100/50 text-slate-600",
      bgText: "Ongoing Care Plan",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

  return (
    <section className="py-20 bg-white relative z-10" id="portfolio">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Selected Work
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            Recent projects across design, development &amp; recovery.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            A sample of the kind of work that runs through Believers Software —
            custom JavaScript builds, WordPress websites, SEO-driven redesigns,
            and malware recovery projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 ${activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-50 text-slate-500 border border-slate-100 hover:bg-slate-100/70 hover:text-slate-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group rounded-2xl border border-slate-100 bg-[#FCFDFD] overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.02] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumb */}
                <div
                  className={`h-48 relative bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden border-b border-slate-100`}
                >
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                  <span className="relative z-10 text-center font-josefin font-bold text-lg max-w-[280px]">
                    {project.bgText}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-primary tracking-wider uppercase block mb-3">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-josefin font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Results Footer */}
                  <div className="pt-5 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        {project.statLabel1}
                      </span>
                      <strong className="text-slate-800 text-sm font-bold font-sans">
                        {project.statValue1}
                      </strong>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        {project.statLabel2}
                      </span>
                      <strong className="text-primary text-sm font-bold font-sans">
                        {project.statValue2}
                      </strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-xs text-slate-400 font-mono border-l-2 border-primary/40 pl-4 max-w-2xl leading-relaxed">
          Project names and identifying client details are withheld or generalized per client confidentiality. Ask us for live examples and references relevant to your industry.
        </p>
      </div>
    </section>
  );
}
