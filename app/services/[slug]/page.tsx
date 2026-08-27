import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Code,
  Search,
  Megaphone,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Globe,
  Layers,
  Lock,
  RefreshCw,
  ShieldCheck,
  Zap,
  Activity,
  TrendingUp,
  ChevronLeft,
} from "lucide-react";

type Props = {
  params: { slug: string };
};

const serviceData: Record<
  string,
  {
    title: string;
    num: string;
    icon: JSX.Element;
    badgeColor: string;
    seoTitle: string;
    seoDesc: string;
    introParagraphs: string[];
    fitsYouIf: string;
    bullets: string[];
    scopeTitle: string;
    scopeItems: { label: string; value: string; highlight?: boolean }[];
    widgetType: "web-dev" | "seo" | "marketing" | "security" | "maintenance";
  }
> = {
  "web-development": {
    title: "Website Design & Development",
    num: "SERVICE 01",
    icon: <Code className="w-8 h-8 text-primary" />,
    badgeColor: "from-primary/20 via-orange-500/10 to-transparent text-primary border-primary/30",
    seoTitle: "Website Design & Development Services | Believers Software",
    seoDesc: "Custom JavaScript (React, Next.js) and WordPress website development services built for speed, SEO, and business growth by Believers Software.",
    introParagraphs: [
      "Website design and development is one service at Believers Software — the technology behind it is a choice we make with you, not a separate product line. Some projects need the flexibility of custom code; others need a website your own team can update without a developer. We scope the right one for your goals, budget, and timeline, and build it properly either way.",
    ],
    fitsYouIf:
      "you need a new business website, an online store, a marketing site, a SaaS product, a dashboard, or a web application — and you want one team to recommend and build the right foundation instead of selling you whatever they happen to know.",
    bullets: [
      "Custom UI/UX design before a single line of code",
      "React & Next.js for speed and SEO-friendly rendering",
      "API integrations & dynamic web applications",
      "Performance optimization — absolutely no bloat",
      "Custom WordPress theme design & WooCommerce setup",
      "Editor training so your team can update content independently",
    ],
    scopeTitle: "Development Specs",
    scopeItems: [
      { label: "Frontend Stack", value: "React / Next.js / WP", highlight: true },
      { label: "Design Process", value: "Custom UI/UX" },
      { label: "Speed Target", value: "100/100 Core Web Vitals" },
      { label: "Code Ownership", value: "100% Full Rights", highlight: true },
    ],
    widgetType: "web-dev",
  },
  seo: {
    title: "SEO Services That Target Real Buyers",
    num: "SERVICE 02",
    icon: <Search className="w-8 h-8 text-indigo-500" />,
    badgeColor: "from-indigo-500/20 via-blue-500/10 to-transparent text-indigo-500 border-indigo-500/30",
    seoTitle: "Technical & On-Page SEO Services | Believers Software",
    seoDesc: "Technical SEO audits, intent-based keyword research, on-page optimization, and local SEO services to get your website ranking on Google.",
    introParagraphs: [
      "A website that isn't visible on Google is a website that's invisible to most of your customers. Our SEO services are built around one goal: getting your site found by the people who are actively searching for what you offer, and turning that visibility into inquiries and sales.",
      "We start every SEO engagement with a technical audit — checking site speed, indexing, mobile usability, and structured data — because no amount of content can fix a website Google can't crawl properly. From there, our SEO services cover on-page optimization, keyword research based on real search intent, content strategy, local SEO for businesses that serve a specific area, and link-building that focuses on relevance over volume.",
    ],
    fitsYouIf:
      "your website gets traffic but few conversions, you're invisible on Google for the keywords that matter, or you're launching a new site and want SEO built in from day one instead of bolted on later.",
    bullets: [
      "Technical SEO audits — speed, crawlability, indexing, structured data",
      "Keyword research based on real search intent, not just search volume",
      "On-page SEO — titles, meta descriptions, internal linking, content structure",
      "Local SEO for businesses that serve a specific city or region",
      "Monthly reporting so you can see rankings and traffic move, not just guess",
    ],
    scopeTitle: "SEO Scope",
    scopeItems: [
      { label: "Technical audit", value: "Included", highlight: true },
      { label: "Keyword research", value: "Intent-based" },
      { label: "On-page SEO", value: "Full site" },
      { label: "Local SEO", value: "Available" },
      { label: "Reporting", value: "Monthly", highlight: true },
    ],
    widgetType: "seo",
  },
  "digital-marketing": {
    title: "Digital Marketing Services — Social Media & Paid Advertising",
    num: "SERVICE 03",
    icon: <Megaphone className="w-8 h-8 text-[#3FC7B0]" />,
    badgeColor: "from-[#3FC7B0]/20 via-teal-500/10 to-transparent text-[#3FC7B0] border-[#3FC7B0]/30",
    seoTitle: "Digital & Social Media Marketing Services | Believers Software",
    seoDesc: "Social media post design, short-form video production, Google Ads, Meta Ads, and automated email marketing campaigns.",
    introParagraphs: [
      "Traffic without a plan is just noise. Our digital marketing services are designed to work with the website we build — not as a separate, disconnected effort — so every post, video, ad, and email actually points somewhere that converts.",
      "Social media marketing is a core part of what we do, not an afterthought. We plan a content calendar, write captions, design graphics, and produce short-form video content, then handle the actual posting and scheduling across your platforms — Facebook, Instagram, LinkedIn, and others — so your brand shows up consistently instead of in bursts. Alongside that, we run paid advertising on Google and Meta for businesses that want faster, targeted reach, and email marketing to stay in front of people who've already shown interest.",
    ],
    fitsYouIf:
      "your social media has gone quiet or inconsistent, you want professional posts and video content without hiring an in-house team, or you're ready to launch paid advertising with a website built to actually convert that traffic.",
    bullets: [
      "Social media marketing — post design, captions, and video content",
      "Content calendar planning & consistent posting schedule",
      "Google Ads & Meta Ads campaign management",
      "Email marketing & automated follow-up sequences",
      "Conversion tracking, so you know exactly what is actually working",
    ],
    scopeTitle: "Marketing Channels",
    scopeItems: [
      { label: "Social media posts", value: "Designed & scheduled", highlight: true },
      { label: "Video content", value: "Short-form, produced" },
      { label: "Paid search", value: "Google Ads" },
      { label: "Paid social", value: "Meta Ads" },
      { label: "Email marketing", value: "Automated" },
      { label: "Tracking", value: "Full-funnel", highlight: true },
    ],
    widgetType: "marketing",
  },
  security: {
    title: "WordPress Security & Malware Removal",
    num: "SERVICE 04",
    icon: <ShieldAlert className="w-8 h-8 text-rose-500" />,
    badgeColor: "from-rose-500/20 via-red-500/10 to-transparent text-rose-500 border-rose-500/30",
    seoTitle: "WordPress Security & Malware Removal Services | Believers Software",
    seoDesc: "Emergency malware removal, Google blacklist review requests, firewall setup, login hardening, and ongoing WordPress security.",
    introParagraphs: [
      "WordPress powers a huge share of the web, which also makes it a constant target. A hacked or malware-infected website doesn't just look bad — it can get your domain blacklisted by Google, blocked by browsers, and stripped of the search rankings you worked to earn.",
      "If your WordPress website has already been compromised, our malware removal process identifies and removes malicious code, patches the vulnerability that let it in, and requests a review to get any Google or browser blacklist warning lifted. If your site is still clean, our WordPress security service closes the door before anyone gets in — firewall setup, login hardening, malware scanning, and automated backups, so you're never one hack away from losing your website.",
    ],
    fitsYouIf:
      "your WordPress site has been hacked or flagged with a malware warning, you've had unexplained slowdowns or strange redirects, or you simply want ongoing WordPress security instead of hoping nothing goes wrong.",
    bullets: [
      "Malware detection & complete removal from infected WordPress sites",
      "Vulnerability patching so the same hack cannot happen twice",
      "Blacklist removal requests with Google Safe Browsing and security filters",
      "Ongoing security monitoring, firewall, and automated backups",
    ],
    scopeTitle: "Security Response",
    scopeItems: [
      { label: "Malware scan", value: "Full site", highlight: true },
      { label: "Cleanup", value: "Code-level removal" },
      { label: "Blacklist review", value: "Post-clean request" },
      { label: "Firewall", value: "Configured" },
      { label: "Backups", value: "Automated" },
    ],
    widgetType: "security",
  },
  maintenance: {
    title: "Website Maintenance",
    num: "SERVICE 05",
    icon: <Wrench className="w-8 h-8 text-amber-500" />,
    badgeColor: "from-amber-500/20 via-orange-400/10 to-transparent text-amber-500 border-amber-500/30",
    seoTitle: "Website Maintenance & Care Plans | Believers Software",
    seoDesc: "Ongoing WordPress and website maintenance, core & plugin updates, 24/7 uptime monitoring, automated backups, and bug fixes.",
    introParagraphs: [
      "Launch day isn't the finish line — it's the point where a website starts needing attention. Plugins go out of date, themes need updates, links break, and small technical issues pile up quietly until something stops working at the worst possible time. Our website maintenance service exists so that never happens on your watch.",
      "Every maintenance plan covers the unglamorous but essential work: core, theme, and plugin updates, uptime monitoring, performance checks, broken-link fixes, and regular backups so you can always roll back if something goes wrong. For WordPress websites, maintenance is paired with the same security monitoring used in our WordPress security service, so updates and protection move together instead of being handled separately.",
    ],
    fitsYouIf:
      "your website was launched — by us or anyone else — and hasn't been actively maintained since, you don't have in-house technical staff to handle routine updates, or you simply want one less thing to worry about each month.",
    bullets: [
      "Core, theme & plugin updates on a regular schedule",
      "Uptime monitoring & performance health checks",
      "Scheduled backups with easy restore points",
      "Small content updates & bug fixes included monthly",
    ],
    scopeTitle: "Maintenance Coverage",
    scopeItems: [
      { label: "Updates", value: "Monthly, scheduled", highlight: true },
      { label: "Uptime", value: "Monitored 24/7" },
      { label: "Backups", value: "Automated" },
      { label: "Minor fixes", value: "Included" },
      { label: "Response time", value: "Priority support", highlight: true },
    ],
    widgetType: "maintenance",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = serviceData[params.slug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDesc,
  };
}

export default function SingleServicePage({ params }: Props) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FCFDFD] py-12 md:py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Back navigation link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-primary uppercase tracking-widest mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900 text-white shadow-md mb-6 border border-slate-800">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
              {service.num}
            </span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-josefin font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
            {service.title}
          </h1>

          {service.introParagraphs.map((para, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-base sm:text-lg mb-4">
              {para}
            </p>
          ))}

          {/* Fits You If Callout Card */}
          <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm border-l-4 border-l-primary">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              This service fits you if:{" "}
              <span className="text-slate-600 font-normal">{service.fitsYouIf}</span>
            </p>
          </div>
        </div>

        {/* Content & Scope Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          {/* Left Column: Bullet Points & Info */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-josefin font-bold text-slate-900 mb-6">
              What Is Included in This Service
            </h3>
            <ul className="flex flex-col gap-4 mb-10">
              {service.bullets.map((li, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base font-medium text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>{li}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
              <div>
                <h4 className="text-xl font-josefin font-bold text-white mb-1">
                  Ready to get started?
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  Request a free consultation and project quote today.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-primary text-white hover:bg-[#ff5d47] transition-all shadow-md text-sm flex-shrink-0"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Scope Table */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-6">
                <h5 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">
                  {service.scopeTitle}
                </h5>
                <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                  VERIFIED SCOPE
                </span>
              </div>

              <div className="flex flex-col gap-4 text-sm font-mono">
                {service.scopeItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2.5 border-b border-slate-800/80 last:border-none">
                    <span className="text-slate-400">{item.label}</span>
                    <span className={item.highlight ? "text-primary font-bold" : "text-white font-semibold"}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
