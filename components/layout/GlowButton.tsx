"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export default function GlowButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  fullWidth = false,
  target,
  rel,
}: GlowButtonProps) {
  const baseStyles = `group relative inline-flex items-center justify-center font-josefin font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 ${
    fullWidth ? "w-full" : ""
  } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`;

  const glowWrapper = (
    <>
      {/* Outer subtle orange gradient aura glow */}
      <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#FF4B33] to-[#FF7043] blur-sm opacity-40 group-hover:opacity-65 group-hover:blur-md transition-all duration-300 pointer-events-none" />
      {/* Main button surface */}
      <span className="relative z-10 w-full h-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF4B33] via-[#FF5539] to-[#FF6b4a] border border-white/20 shadow-md shadow-primary/25 group-hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick as any}
        target={target}
        rel={rel}
        className={`${baseStyles} ${className}`}
      >
        {glowWrapper}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {glowWrapper}
    </button>
  );
}

export { GlowButton as Button, GlowButton as PrimaryButton };
