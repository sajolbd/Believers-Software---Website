"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
    <section className="py-20 bg-white relative z-10" id="faq">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="py-5 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-josefin font-bold text-slate-800 text-base sm:text-lg py-2 hover:text-primary transition-colors focus:outline-none group"
                >
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
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
                      <p className="text-sm text-slate-500 leading-relaxed pt-3 pb-2 max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
