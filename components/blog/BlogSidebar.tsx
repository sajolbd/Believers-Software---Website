"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ArrowRight,
  Shield,
  Code,
  Terminal,
  Smartphone,
  Megaphone,
  Sparkles,
  Lock,
  CheckCircle2,
  TrendingUp,
  Mail,
} from "lucide-react";
import { BlogPost, getPopularPosts } from "lib/blogData";

interface BlogSidebarProps {
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
}

export default function BlogSidebar({ onSearchChange, searchQuery = "" }: BlogSidebarProps) {
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const popularPosts = getPopularPosts();

  const handleProposalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;
    window.location.href = `/get-a-proposal?url=${encodeURIComponent(urlInput)}`;
  };

  const handleSubscribeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
    }, 2000);
  };

  return (
    <aside className="space-y-8">
      {/* 1. Search Box Widget */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-3">
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search Web, SEO, Security topics..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-primary transition-all placeholder:text-slate-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* 2. About Believers Software Widget (Ignite Visibility style) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-josefin font-bold text-slate-900 uppercase tracking-wider">
            About Believers Software
          </h3>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Believers Software is a premier full-service web development &amp; digital growth agency. We build custom JavaScript apps, fast WordPress websites, SEO strategies, and security systems under one accountable team.
        </p>
        <Link
          href="/process"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#ff5d47] transition-colors"
        >
          <span>Learn Our Process</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3. Our Services Accordion / Quick Nav Widget */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100">
          Explore Our Services
        </h3>
        <ul className="space-y-2.5 text-xs font-josefin font-bold text-slate-700">
          <li>
            <Link
              href="/services/web-development"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all group"
            >
              <Code className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>Custom Website Development</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services/software-development"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all group"
            >
              <Terminal className="w-4 h-4 text-slate-600 group-hover:scale-110 transition-transform" />
              <span>SaaS &amp; Web Applications</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services/seo"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all group"
            >
              <Search className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span>SEO &amp; AI Search Optimization</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services/mobile-app-development"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all group"
            >
              <Smartphone className="w-4 h-4 text-[#3FC7B0] group-hover:scale-110 transition-transform" />
              <span>Mobile App Development</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services/security"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 hover:text-primary transition-all group"
            >
              <Lock className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
              <span>WordPress Security &amp; Malware</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* 4. Get Free Audit / Proposal CTA Card (Ignite Dark Card style) */}
      <div className="p-6 rounded-2xl bg-[#0f172a] text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-2xl pointer-events-none" />
        <span className="inline-block font-mono text-[9px] font-extrabold tracking-widest text-primary bg-primary/20 px-2 py-0.5 rounded mb-2 uppercase">
          FREE ANALYSIS
        </span>
        <h3 className="text-base font-josefin font-bold text-white mb-2">
          Want More Traffic &amp; Better Conversions?
        </h3>
        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          Enter your website URL to request a customized proposal and technical audit from our engineering team.
        </p>

        <form onSubmit={handleProposalSubmit} className="space-y-2.5">
          <input
            type="url"
            required
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all"
          />
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-[#ff5d47] text-white text-xs font-bold font-josefin uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Get a Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* 5. Popular Articles Widget */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100">
          Popular Articles
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 shrink-0 overflow-hidden relative border border-slate-200/60">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h4 className="text-xs font-josefin font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-mono mt-1">
                  {post.date} &bull; {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 6. Newsletter Subscription Widget */}
      <div className="bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent p-6 rounded-2xl border border-orange-200/60">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-josefin font-bold text-slate-900">
            Subscribe to Growth Insights
          </h3>
        </div>
        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
          Get weekly technical breakdown of web development trends, GEO strategies, and WordPress security updates.
        </p>

        {subscribed ? (
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center gap-2 border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribeSubmit} className="space-y-2.5">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-all"
            />
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-josefin uppercase tracking-wider transition-all"
            >
              Subscribe Free
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
