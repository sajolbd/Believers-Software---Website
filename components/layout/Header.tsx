"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import GlowButton from "./GlowButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Shield,
  ChevronDown,
  Code,
  Search,
  Megaphone,
  Briefcase,
  MessageSquare,
  Zap,
  Users,
  Sparkles,
  Smartphone,
  Terminal,
  Lock,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  const handleProposalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `/get-a-proposal?url=${encodeURIComponent(websiteUrl)}`;
    }, 800);
  };

  // 100% Unchanged HTML Services Structure
  const servicesMegaMenu = {
    col1: {
      webDev: {
        category: "Website Design & Development",
        icon: <Code className="w-4 h-4 text-primary" />,
        items: [
          { name: "Custom Website Design", href: "/services/web-development" },
          { name: "Business Website Design", href: "/services/web-development#business" },
          { name: "WordPress Website Development", href: "/services/web-development#wordpress" },
          { name: "E-commerce Website Development", href: "/services/web-development#ecommerce" },
          { name: "Custom Web Development", href: "/services/web-development#custom" },
          { name: "Website Redesign", href: "/services/web-development#redesign" },
          { name: "Landing Page Design", href: "/services/web-development#landing" },
        ],
      },
      softwareDev: {
        category: "Software Development",
        icon: <Terminal className="w-4 h-4 text-primary" />,
        items: [
          { name: "Custom Software Development", href: "/services/software-development" },
          { name: "SaaS Development", href: "/services/software-development#saas" },
          { name: "Web Application Development", href: "/services/software-development#webapp" },
          { name: "CRM Development", href: "/services/software-development#crm" },
          { name: "ERP Development", href: "/services/software-development#erp" },
          { name: "API Development & Integration", href: "/services/software-development#api" },
          { name: "Business Software Development", href: "/services/software-development#business" },
        ],
      },
    },
    col2: {
      mobileApps: {
        category: "Mobile App Development",
        icon: <Smartphone className="w-4 h-4 text-[#3FC7B0]" />,
        platforms: {
          title: "Platforms",
          items: [
            { name: "Custom Mobile App Development", href: "/services/mobile-app-development" },
            { name: "Android App Development", href: "/services/mobile-app-development#android" },
            { name: "iOS App Development", href: "/services/mobile-app-development#ios" },
            { name: "App UI/UX Design", href: "/services/mobile-app-development#ui-ux" },
          ],
        },
        frameworks: {
          title: "Frameworks & Support",
          items: [
            { name: "Flutter App Development", href: "/services/mobile-app-development#flutter" },
            { name: "React Native App Development", href: "/services/mobile-app-development#react-native" },
            { name: "Cross-Platform App Development", href: "/services/mobile-app-development#cross-platform" },
            { name: "App Maintenance & Support", href: "/services/mobile-app-development#support" },
          ],
        },
      },
      security: {
        category: "WordPress Security",
        icon: <Lock className="w-4 h-4 text-rose-500" />,
        items: [
          { name: "WordPress Security", href: "/services/security" },
          { name: "WordPress Malware Removal", href: "/services/security#malware" },
        ],
      },
    },
    col3: {
      marketing: {
        category: "Digital Marketing",
        icon: <Megaphone className="w-4 h-4 text-amber-500" />,
        advertising: {
          title: "Advertising",
          items: [
            { name: "Google Ads Management", href: "/services/digital-marketing#google-ads" },
            { name: "Meta Ads Management", href: "/services/digital-marketing#meta-ads" },
            { name: "PPC Advertising", href: "/services/digital-marketing#ppc" },
            { name: "Conversion Rate Optimization", href: "/services/digital-marketing#cro" },
          ],
        },
        growth: {
          title: "Growth & Content",
          items: [
            { name: "Social Media Marketing", href: "/services/digital-marketing#smm" },
            { name: "Social Media Management", href: "/services/digital-marketing#management" },
            { name: "Content Marketing", href: "/services/digital-marketing#content" },
            { name: "Email Marketing", href: "/services/digital-marketing#email" },
            { name: "Lead Generation", href: "/services/digital-marketing#lead-gen" },
          ],
        },
      },
    },
    col4: {
      seo: {
        category: "AI Search & SEO",
        icon: <Search className="w-4 h-4 text-indigo-500" />,
        title: "Core SEO",
        items: [
          { name: "SEO Audit", href: "/services/seo#audit" },
          { name: "Technical SEO", href: "/services/seo#technical" },
          { name: "On-Page SEO", href: "/services/seo#on-page" },
          { name: "Off-Page SEO", href: "/services/seo#off-page" },
          { name: "Local SEO", href: "/services/seo#local" },
          { name: "E-commerce SEO", href: "/services/seo#ecommerce" },
          { name: "WordPress SEO", href: "/services/seo#wordpress" },
          { name: "International SEO", href: "/services/seo#international" },
          { name: "Content SEO", href: "/services/seo#content" },
        ],
      },
      aiSearch: {
        category: "AI Search Optimization",
        badge: "NEW",

        items: [
          { name: "AI Search Optimization", href: "/services/seo#ai-search" },
          { name: "Generative Engine Optimization (GEO)", href: "/services/seo#geo" },
          { name: "Answer Engine Optimization (AEO)", href: "/services/seo#aeo" },
          { name: "AI Overview Optimization", href: "/services/seo#ai-overview" },
          { name: "AI Mode Optimization", href: "/services/seo#ai-mode" },
          { name: "ChatGPT SEO", href: "/services/seo#chatgpt-seo" },
        ],
      },
    },
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasMenu: true,
      type: "services",
    },
    {
      name: "Work",
      href: "/portfolio",
      hasMenu: true,
      workItems: [
        {
          name: "Featured Case Studies",
          desc: "Explore custom web applications and business site redesigns.",
          href: "/portfolio",
          icon: <Briefcase className="w-5 h-5 text-primary" />,
        },
        {
          name: "Client Testimonials",
          desc: "See how we help businesses solve technical and growth challenges.",
          href: "/testimonials",
          icon: <MessageSquare className="w-5 h-5 text-indigo-500" />,
        },
      ],
    },
    {
      name: "Why Us",
      href: "/process",
      hasMenu: true,
      whyUsItems: [
        {
          name: "Our Development Process",
          desc: "From UI design wireframes to clean production code deployment.",
          href: "/process",
          icon: <Zap className="w-5 h-5 text-amber-500" />,
        },
        {
          name: "The Believers Difference",
          desc: "Design, development, SEO, marketing, and security under one roof.",
          href: "/#why-us",
          icon: <Users className="w-5 h-5 text-[#3FC7B0]" />,
        },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-2.5 sm:py-3.5"
          : "bg-white/90 backdrop-blur-lg border-b border-slate-100/60 py-3 sm:py-5"
          }`}
      >
        {/* Mobile Top Bar */}
        <div className="block md:hidden">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100/80 px-4"
              >
                <a
                  href="tel:+8801716878931"
                  className="flex items-center gap-1.5 font-bold text-xs text-slate-800 hover:text-primary transition-colors pt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+8801716878931</span>
                </a>

                <Link
                  href="/get-a-proposal"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-xs font-josefin font-extrabold uppercase tracking-wider shadow-md shadow-primary/25 hover:bg-[#ff5d47] transition-all mt-1"
                >
                  <span>Get a Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Believers Software"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 font-josefin font-bold text-sm text-slate-700">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary ${activeDropdown === item.name ? "text-primary" : "text-slate-700"
                    }`}
                >
                  <span>{item.name}</span>
                  {item.hasMenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180 text-primary" : "text-slate-400"
                        }`}
                    />
                  )}
                </Link>

                {/* Bottom Active Line Indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${activeDropdown === item.name ? "w-full" : "w-0"
                    }`}
                />

                {/* Work & Why Us Dropdowns (Positioned relative to item) */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.name === "Work" && item.workItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-auto w-[380px]"
                    >
                      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xl p-4 space-y-2">
                        {item.workItems.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all group/sub"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 group-hover/sub:bg-primary/10 transition-colors">
                              {sub.icon}
                            </div>
                            <div>
                              <span className="font-josefin font-bold text-slate-900 group-hover/sub:text-primary text-sm block">
                                {sub.name}
                              </span>
                              <span className="text-xs text-slate-500 font-normal">{sub.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeDropdown === item.name && item.name === "Why Us" && item.whyUsItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 0, scale: 1 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-auto w-[380px]"
                    >
                      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xl p-4 space-y-2">
                        {item.whyUsItems.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all group/sub"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 group-hover/sub:bg-primary/10 transition-colors">
                              {sub.icon}
                            </div>
                            <div>
                              <span className="font-josefin font-bold text-slate-900 group-hover/sub:text-primary text-sm block">
                                {sub.name}
                              </span>
                              <span className="text-xs text-slate-500 font-normal">{sub.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GlowButton href="/get-a-proposal">Get a Proposal</GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* FULL PAGE WIDTH SCROLLABLE MEGA MENU DROPDOWN WITH ORANGEY BRAND GRADIENT BACKGROUND */}
        <AnimatePresence>
          {activeDropdown === "Services" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={handleMouseLeave}
              className="hidden md:block absolute top-full left-0 right-0 w-full bg-gradient-to-b from-[#FFF6F4] via-[#FFFBF9] to-[#FFF1EE] border-t-2 border-primary border-b border-orange-200/80 shadow-2xl shadow-slate-900/20 py-6 px-4 sm:px-8 z-50 pointer-events-auto text-slate-800 max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              <div className="max-w-[1280px] mx-auto grid grid-cols-12 gap-7">

                {/* LEFT FEATURED PROPOSAL FORM CARD (Thrive Agency Style in Brand Colors) */}
                <div className="col-span-3 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-5 flex flex-col justify-between border border-slate-800 relative overflow-hidden shadow-xl">
                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/25 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3FC7B0]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3">
                      <Sparkles className="w-3 h-3 animate-pulse text-primary" />
                      <span>Free Audit</span>
                    </span>

                    <h3 className="font-josefin font-bold text-xl leading-tight text-white mb-2">
                      Experience Real Results
                    </h3>

                    <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                      Partner with Believers Software to build & scale your business online.
                    </p>

                    <form onSubmit={handleProposalSubmit} className="space-y-2.5">
                      <div>
                        <input
                          type="url"
                          placeholder="Enter Your Website Address"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formSubmitted}
                        className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-[#ff5d47] active:scale-[0.98] text-white text-xs font-josefin font-extrabold uppercase tracking-wider shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        {formSubmitted ? (
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Redirecting...
                          </span>
                        ) : (
                          <>
                            <span>Send My Free Proposal</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Social Proof Footer */}
                  <div className="relative z-10 pt-4 mt-4 border-t border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-white">+500% Growth</div>
                      <div className="text-[10px] text-slate-400">Guaranteed Technical Audit</div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SERVICE COLUMNS (100% Unchanged HTML Items) */}
                <div className="col-span-9 grid grid-cols-4 gap-6">

                  {/* Col 1: Website & Software Development */}
                  <div className="space-y-5">
                    {/* Website Design & Development */}
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                        {servicesMegaMenu.col1.webDev.icon}
                        <span>{servicesMegaMenu.col1.webDev.category}</span>
                      </div>
                      <ul className="space-y-1">
                        {servicesMegaMenu.col1.webDev.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Development */}
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                        {servicesMegaMenu.col1.softwareDev.icon}
                        <span>{servicesMegaMenu.col1.softwareDev.category}</span>
                      </div>
                      <ul className="space-y-1">
                        {servicesMegaMenu.col1.softwareDev.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 2: Mobile Apps & Security */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                        {servicesMegaMenu.col2.mobileApps.icon}
                        <span>{servicesMegaMenu.col2.mobileApps.category}</span>
                      </div>

                      <div className="space-y-3">
                        {/* Platforms */}
                        <div>
                          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                            {servicesMegaMenu.col2.mobileApps.platforms.title}
                          </span>
                          <ul className="space-y-1">
                            {servicesMegaMenu.col2.mobileApps.platforms.items.map((sub, i) => (
                              <li key={i}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Frameworks & Support */}
                        <div>
                          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                            {servicesMegaMenu.col2.mobileApps.frameworks.title}
                          </span>
                          <ul className="space-y-1">
                            {servicesMegaMenu.col2.mobileApps.frameworks.items.map((sub, i) => (
                              <li key={i}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* WordPress Security */}
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                        {servicesMegaMenu.col2.security.icon}
                        <span>{servicesMegaMenu.col2.security.category}</span>
                      </div>
                      <ul className="space-y-1">
                        {servicesMegaMenu.col2.security.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Col 3: Digital Marketing */}
                  <div>
                    <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                      {servicesMegaMenu.col3.marketing.icon}
                      <span>{servicesMegaMenu.col3.marketing.category}</span>
                    </div>

                    <div className="space-y-3">
                      {/* Advertising */}
                      <div>
                        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          {servicesMegaMenu.col3.marketing.advertising.title}
                        </span>
                        <ul className="space-y-1">
                          {servicesMegaMenu.col3.marketing.advertising.items.map((sub, i) => (
                            <li key={i}>
                              <Link
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Growth & Content */}
                      <div>
                        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                          {servicesMegaMenu.col3.marketing.growth.title}
                        </span>
                        <ul className="space-y-1">
                          {servicesMegaMenu.col3.marketing.growth.items.map((sub, i) => (
                            <li key={i}>
                              <Link
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-[13px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Col 4: AI Search & SEO */}
                  <div className="space-y-4">
                    {/* Core SEO */}
                    <div>
                      <div className="flex items-center gap-2 pb-2 mb-2 border-b border-orange-200/60 font-josefin font-bold text-xs uppercase tracking-wider text-slate-900">
                        {servicesMegaMenu.col4.seo.icon}
                        <span>{servicesMegaMenu.col4.seo.category}</span>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        {servicesMegaMenu.col4.seo.title}
                      </span>
                      <ul className="space-y-0.5">
                        {servicesMegaMenu.col4.seo.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-[12.5px] text-slate-700 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Search Optimization Highlighted Box */}
                    <div className="p-3.5 rounded-2xl bg-[#0f172a] text-white border border-slate-800 shadow-md">
                      <span className="inline-block font-mono text-[9px] font-extrabold tracking-widest text-primary bg-primary/20 px-2 py-0.5 rounded mb-1.5 uppercase">
                        {servicesMegaMenu.col4.aiSearch.badge}
                      </span>
                      <div className="flex items-center gap-1.5 pb-1.5 mb-2 border-b border-slate-700/80 font-josefin font-bold text-xs uppercase tracking-wider text-primary">
                        <span>{servicesMegaMenu.col4.aiSearch.category}</span>
                      </div>
                      <ul className="space-y-0.5">
                        {servicesMegaMenu.col4.aiSearch.items.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-[12px] text-slate-200 hover:text-primary hover:translate-x-1 transition-all duration-150 py-0.5"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 w-[88%] max-w-[360px] h-full bg-white shadow-2xl z-50 md:hidden flex flex-col justify-between overflow-y-auto border-l border-slate-100"
            >
              {/* Drawer Top */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
                  <Image
                    src="/images/logo.png"
                    alt="Believers Software"
                    width={180}
                    height={56}
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="px-5 py-5 flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    key={item.name}
                    className="border-b border-slate-100 last:border-none pb-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-josefin font-bold text-slate-800 hover:text-primary transition-colors py-2.5 flex-1"
                      >
                        {item.name}
                      </Link>

                      {item.hasMenu && (
                        <button
                          onClick={() => toggleMobileExpand(item.name)}
                          className="p-2 text-slate-400 hover:text-primary transition-colors"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.name ? "rotate-180 text-primary" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Accordion Sub Menu */}
                    <AnimatePresence>
                      {item.hasMenu && mobileExpanded === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3 pb-3 space-y-3 text-xs font-josefin"
                        >
                          {item.type === "services" && (
                            <div className="space-y-4 pt-1">
                              {/* Web Dev */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  {servicesMegaMenu.col1.webDev.category}
                                </div>
                                {servicesMegaMenu.col1.webDev.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Software Dev */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  {servicesMegaMenu.col1.softwareDev.category}
                                </div>
                                {servicesMegaMenu.col1.softwareDev.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Mobile Apps */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  {servicesMegaMenu.col2.mobileApps.category}
                                </div>
                                {servicesMegaMenu.col2.mobileApps.platforms.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                                {servicesMegaMenu.col2.mobileApps.frameworks.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Security */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  {servicesMegaMenu.col2.security.category}
                                </div>
                                {servicesMegaMenu.col2.security.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* Marketing */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  {servicesMegaMenu.col3.marketing.category}
                                </div>
                                {servicesMegaMenu.col3.marketing.advertising.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                                {servicesMegaMenu.col3.marketing.growth.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>

                              {/* SEO & AI Search */}
                              <div>
                                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                                  SEO & AI Search Optimization
                                </div>
                                {servicesMegaMenu.col4.seo.items.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 hover:text-primary py-1 font-semibold"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                                <div className="p-2.5 rounded-xl bg-slate-900 text-white mt-2">
                                  <div className="text-[10px] text-[#3FC7B0] font-bold uppercase mb-1">
                                    AI Search Optimization (NEW)
                                  </div>
                                  {servicesMegaMenu.col4.aiSearch.items.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={sub.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-slate-200 hover:text-primary py-0.5 text-[11px]"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {item.name === "Work" && item.workItems && (
                            <>
                              {item.workItems.map((sub, i) => (
                                <Link
                                  key={i}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2.5 text-slate-700 hover:text-primary py-1.5"
                                >
                                  {sub.icon}
                                  <span className="font-bold">{sub.name}</span>
                                </Link>
                              ))}
                            </>
                          )}

                          {item.name === "Why Us" && item.whyUsItems && (
                            <>
                              {item.whyUsItems.map((sub, i) => (
                                <Link
                                  key={i}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-2.5 text-slate-700 hover:text-primary py-1.5"
                                >
                                  {sub.icon}
                                  <span className="font-bold">{sub.name}</span>
                                </Link>
                              ))}
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <div className="mt-4">
                  <Link
                    href="/get-a-proposal"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold bg-primary text-white hover:bg-[#ff5d47] transition-colors shadow-md text-xs uppercase tracking-wider"
                  >
                    Get a Proposal <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#3FC7B0] animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-[#3FC7B0]">
                    STATUS: ONLINE &amp; READY
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="text-[11px]">hello@believerssoftware.com</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
