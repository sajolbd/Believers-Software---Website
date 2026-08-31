"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Jump To Top"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-[999] bg-primary text-white text-xs font-semibold px-2 sm:px-2.5 py-3.5 sm:py-4 rounded-l-2xl shadow-xl shadow-primary/30 border border-r-0 border-white/20 transition-all duration-300 hover:px-3 active:scale-95 hover:bg-primary/95 flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-1" />
      <span
        className="tracking-wider uppercase text-[10px] sm:text-[11px] font-bold select-none"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Jump To Top
      </span>
    </button>
  );
}

