"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import GlowButton from "./GlowButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Shield,
  ChevronDown,
  Code,
  Globe,
  Layers,
  Search,
  Megaphone,
  ShieldAlert,
  Wrench,
  Briefcase,
  MessageSquare,
  Zap,
  Users,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasMenu: true,
      servicesCols: {
        col1: {
          title: "Web & Software Development",
          items: [
            {
              name: "Website Design & Development",
              desc: "Custom React, Next.js & WordPress platforms built for high performance.",
              href: "/services/web-development",
              icon: <Code className="w-5 h-5 text-primary" />,
            },
            {
              name: "React & Next.js Custom Apps",
              desc: "Dynamic web apps, SaaS tools, and responsive admin dashboards.",
              href: "/services/web-development#javascript",
              icon: <Globe className="w-5 h-5 text-[#3FC7B0]" />,
            },
            {
              name: "WordPress & WooCommerce",
              desc: "Custom themes, plugin setup, and editable business online stores.",
              href: "/services/web-development#wordpress",
              icon: <Layers className="w-5 h-5 text-amber-500" />,
            },
          ],
        },
        col2: {
          title: "Growth, Security & Care",
          items: [
            {
              name: "SEO Services",
              desc: "Technical audits, intent keyword research, and Google ranking.",
              href: "/services/seo",
              icon: <Search className="w-5 h-5 text-indigo-500" />,
            },
            {
              name: "Digital & Social Marketing",
              desc: "Post design, video reels, Google Ads, Meta Ads, and email campaigns.",
              href: "/services/digital-marketing",
              icon: <Megaphone className="w-5 h-5 text-[#3FC7B0]" />,
            },
            {
              name: "WordPress Security & Malware",
              desc: "Emergency hack recovery, Google blacklist review, and 24/7 firewall.",
              href: "/services/security",
              icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
            },
            {
              name: "Website Maintenance",
              desc: "Core updates, 24/7 uptime checks, daily backups, and bug fixes.",
              href: "/services/maintenance",
              icon: <Wrench className="w-5 h-5 text-amber-500" />,
            },
          ],
        },
        featured: {
          badge: "Coalition Standard",
          title: "Need a Custom Web Solution?",
          desc: "Get a free technical website audit & estimate from our team.",
          btnText: "Get Free Quote",
          href: "/contact",
        },
      },
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
        {/* Mobile Navbar Top Bar (Phone + Get a Proposal) - Hides on Scroll - Mobile Only */}
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

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Believers Software"
              width={200}
              height={60}
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navlinks with Coalition Mega Menu Dropdowns */}
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

                {/* Dropdown Indicator Line */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${activeDropdown === item.name ? "w-full" : "w-0"
                    }`}
                />

                {/* Mega Menu Dropdowns */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.hasMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-auto"
                    >
                      {/* Services Mega Menu */}
                      {item.name === "Services" && item.servicesCols && (
                        <div className="w-[680px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-6 grid grid-cols-2 gap-6 overflow-hidden">
                          {/* Col 1 */}
                          <div className="col-span-1 space-y-2.5">
                            <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                              {item.servicesCols.col1.title}
                            </span>
                            {item.servicesCols.col1.items.map((sub, i) => (
                              <Link
                                key={i}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group/sub"
                              >
                                <div className="p-2.5 rounded-xl bg-slate-100/80 group-hover/sub:bg-primary/10 transition-colors mt-0.5">
                                  {sub.icon}
                                </div>
                                <div>
                                  <span className="font-josefin font-bold text-slate-900 group-hover/sub:text-primary transition-colors text-sm block">
                                    {sub.name}
                                  </span>
                                  <span className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                                    {sub.desc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Col 2 */}
                          <div className="col-span-1 space-y-2.5 border-l border-slate-100 pl-6">
                            <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                              {item.servicesCols.col2.title}
                            </span>
                            {item.servicesCols.col2.items.map((sub, i) => (
                              <Link
                                key={i}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group/sub"
                              >
                                <div className="p-2.5 rounded-xl bg-slate-100/80 group-hover/sub:bg-primary/10 transition-colors mt-0.5">
                                  {sub.icon}
                                </div>
                                <div>
                                  <span className="font-josefin font-bold text-slate-900 group-hover/sub:text-primary transition-colors text-xs block">
                                    {sub.name}
                                  </span>
                                  <span className="text-[11px] text-slate-500 font-normal line-clamp-1">
                                    {sub.desc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Work / Why Us Dropdowns */}
                      {item.name === "Work" && item.workItems && (
                        <div className="w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-xl p-4 space-y-2">
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
                      )}

                      {item.name === "Why Us" && item.whyUsItems && (
                        <div className="w-[380px] rounded-2xl bg-white border border-slate-200/90 shadow-xl p-4 space-y-2">
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
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GlowButton href="/get-a-proposal">
              Get a Proposal
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Right-Side Sliding Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 md:hidden"
            />

            {/* Right Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 w-[85%] max-w-[340px] h-full bg-white shadow-2xl z-50 md:hidden flex flex-col justify-between overflow-y-auto border-l border-slate-100"
            >
              {/* Drawer Top Bar */}
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

              {/* Drawer Navigation Accordion Links */}
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
                          className="overflow-hidden pl-3 pb-3 space-y-2 text-xs font-josefin"
                        >
                          {item.name === "Services" && item.servicesCols && (
                            <>
                              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-2">
                                Web & Software Development
                              </div>
                              {item.servicesCols.col1.items.map((sub, i) => (
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

                              <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pt-2">
                                Growth & Security
                              </div>
                              {item.servicesCols.col2.items.map((sub, i) => (
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

              {/* Drawer Footer Details */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#3FC7B0] animate-pulse" />
                  <span className="font-mono text-[11px] font-semibold text-[#3FC7B0]">
                    STATUS: ONLINE &amp; READY
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">hello@believerssoftware.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">Reply: Within 1 business day</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
