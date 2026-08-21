"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Mail, Clock, Shield } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const mainPageLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Process", href: "/process" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          {/* Brand Typographic Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[#FF8C33] text-white font-josefin font-black text-xl shadow-md shadow-primary/20 select-none transform group-hover:scale-105 transition-transform duration-300">
              B
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-slate-900 border-2 border-white" />
            </div>
            <span className="font-josefin font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">
              Believers<span className="text-primary font-black">Software</span>
            </span>
          </Link>

          {/* Desktop Navlinks */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            {mainPageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 transition-colors duration-200 hover:text-slate-900 group font-bold"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white border border-primary hover:bg-[#ff5d47] hover:border-[#ff5d47] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
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
              className="fixed top-0 right-0 w-[78%] max-w-[320px] h-full bg-white shadow-2xl z-50 md:hidden flex flex-col justify-between overflow-y-auto border-l border-slate-100"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#FF8C33] text-white font-josefin font-black text-base shadow-sm select-none">
                    B
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-slate-900 border border-white" />
                  </div>
                  <span className="font-josefin font-extrabold text-base tracking-tight text-slate-900">
                    Believers<span className="text-primary">Software</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="px-6 py-6 flex flex-col gap-3">
                {mainPageLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between text-base font-josefin font-bold text-slate-800 hover:text-primary transition-colors py-2 border-b border-dashed border-slate-100"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: mainPageLinks.length * 0.03 }}
                  className="mt-3"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold bg-primary text-white hover:bg-[#ff5d47] transition-colors shadow-md text-xs uppercase tracking-wider"
                  >
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
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
