"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Should I choose a JavaScript website or a WordPress website?",
      a: "It depends on what your website needs to do. If you need a marketing site, blog, or online store that your team can update independently, a WordPress website is usually the better fit — it's fast to launch and easy to manage. If you need custom functionality, a web application, a dashboard, or heavy interactivity, a custom JavaScript website gives you more flexibility. We'll recommend the right approach after understanding your goals, not before.",
      openDefault: true,
    },
    {
      q: "Do you offer SEO services on their own, without a new website?",
      a: "Yes. Our SEO services can be applied to an existing website, whether we built it or not. We start with a technical audit to see how the current site is performing, then build an SEO plan around keyword research, on-page optimization, and content strategy.",
    },
    {
      q: "My WordPress site was hacked — how fast can you remove the malware?",
      a: "Malware removal is treated as urgent. Once we have access to your WordPress site, we scan, identify the infected files, remove the malicious code, and patch the vulnerability that allowed it in, then request a review to clear any Google blacklist warning.",
    },
    {
      q: "Do you provide digital marketing services alongside website development?",
      a: "Yes — website design and development, SEO, and digital marketing are often planned together as one roadmap, so your paid ads and social campaigns are sending traffic to a site that's actually built to convert it.",
    },
    {
      q: "What does your social media marketing service actually include?",
      a: "It covers the full posting workflow — content calendar planning, graphic design, captions, and short-form video content — plus the actual scheduling and posting across platforms like Facebook, Instagram, and LinkedIn. It can run on its own or alongside paid advertising, depending on your goals.",
    },
    {
      q: "Do I need a website maintenance plan if my site was built by someone else?",
      a: "Yes, that's a common starting point. We can take over maintenance for a website we didn't build — updates, backups, uptime monitoring, and small fixes — after a quick review to understand how the site was put together.",
    },
    {
      q: "How long does it take to design and develop a website?",
      a: "A standard WordPress website typically takes a few weeks from discovery to launch. Custom JavaScript websites and web applications take longer, depending on complexity. We'll give you a realistic timeline during the discovery stage, before any contract is signed.",
    },
    {
      q: "Do you offer ongoing WordPress security after launch?",
      a: "Yes. Every WordPress website we build can be paired with ongoing security monitoring — firewall protection, malware scanning, and automated backups — so you're protected continuously, not just at launch.",
    },
  ];

  // Store active open indices
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-t border-slate-100 relative z-10 overflow-hidden" id="faq">
      {/* Subtle Background Ambient Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Cards Container */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-white border-primary/40 shadow-lg shadow-primary/5"
                    : "bg-white/95 backdrop-blur-sm border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-josefin font-bold text-slate-900 text-base sm:text-lg p-6 sm:p-7 hover:text-primary transition-colors focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      #0{index + 1}
                    </span>
                    <span className="leading-snug">{faq.q}</span>
                  </div>

                  <span className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                      ? "bg-primary text-white border-primary shadow-sm shadow-primary/20 rotate-180"
                      : "bg-slate-50 border-slate-200/70 text-slate-500 group-hover:border-primary/40 group-hover:text-primary"
                    }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-slate-100/60 mt-1">
                        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-josefin font-bold text-white mb-1">
                Have a question not answered here?
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Send us your project details or questions and we'll reply within 1 business day.
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-xs uppercase tracking-wider bg-primary text-white hover:bg-primary/90 transition-all shadow-md shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

