"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA when scrolled past the hero section
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3.5 bg-primary text-white rounded-full font-bold text-sm shadow-xl shadow-primary/30 hover:bg-[#ff5d47] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 group border border-white/10"
      aria-label="Get a free quote"
    >
      <Sparkles className="w-4 h-4 text-[#ffd8b8] group-hover:rotate-12 transition-transform duration-300" />
      <span className="max-w-xs transition-all duration-300 hidden sm:inline">
        Get a Free Quote
      </span>
    </a>
  );
}
