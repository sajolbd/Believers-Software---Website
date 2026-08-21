import { Code, Search, Megaphone, ShieldAlert, Wrench, CheckCircle2, ChevronRight, Globe, Layers, Shield } from "lucide-react";

export default function Services() {
  const overviewServices = [
    {
      num: "01",
      title: "Website Design & Development",
      desc: "Custom-built websites, designed and developed with whichever technology actually fits your project — JavaScript (React, Next.js) for custom apps and dashboards, or WordPress for fast, editable business sites and stores.",
      href: "#web-dev",
      icon: <Code className="w-5 h-5 text-primary" />,
    },
    {
      num: "02",
      title: "SEO Services",
      desc: "Technical, on-page, and content SEO that gets your website found on Google by the people who are actually ready to buy.",
      href: "#seo",
      icon: <Search className="w-5 h-5 text-primary" />,
    },
    {
      num: "03",
      title: "Digital Marketing Services",
      desc: "Social media marketing — posts, graphics, and video content — plus paid ads and email marketing, so your brand shows up consistently, not just when there's budget for ads.",
      href: "#marketing",
      icon: <Megaphone className="w-5 h-5 text-primary" />,
    },
    {
      num: "04",
      title: "WordPress Security & Malware Removal",
      desc: "Malware cleanup, hack recovery, and ongoing WordPress security monitoring, so a compromised site never costs you customers.",
      href: "#security",
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
    },
    {
      num: "05",
      title: "Website Maintenance",
      desc: "Updates, backups, uptime monitoring, and technical fixes handled every month, so your website stays reliable without you having to think about it.",
      href: "#maintenance",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      featured: true,
    },
  ];

  return (
    <div className="relative z-10">
      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              What We Do
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-4">
              Five services. One accountable team.
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Most agencies hand your website design and development off to one team,
              your SEO to another, and your security to whoever answers the support ticket.
              Believers Software keeps design, development, maintenance, SEO, marketing,
              and security under one roof, so nothing falls through the cracks between departments.
            </p>
          </div>

          {/* Overview Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewServices.map((svc) => (
              <div
                key={svc.num}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${svc.featured
                    ? "bg-slate-50/80 border-primary/20 shadow-sm"
                    : "bg-[#FCFDFD] border-slate-100 hover:border-slate-200"
                  }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-slate-400 font-bold">
                      {svc.num} / SERVICE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {svc.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-josefin font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE 01: DESIGN & DEV ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="web-dev">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-3">
              Service 01
            </span>
            <h3 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-4">
              Website Design &amp; Development
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Website design and development is one service at Believers Software — the technology behind it is a choice we make with you, not a separate product line. Some projects need the flexibility of custom code; others need a website your own team can update without a developer. We scope the right one for your goals, budget, and timeline, and build it properly either way.
            </p>
            <p className="text-sm font-semibold text-slate-800">
              This service fits you if:{" "}
              <span className="text-slate-500 font-normal">
                you need a new business website, an online store, a marketing site, a SaaS product, a dashboard, or a web application — and you want one team to recommend and build the right foundation instead of selling you whatever they happen to know.
              </span>
            </p>
          </div>

          {/* Tech Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* JavaScript Column */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#3FC7B0]/5 border border-[#3FC7B0]/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#3FC7B0]" />
                  </div>
                  <h4 className="text-xl font-josefin font-bold text-slate-800">
                    Built with JavaScript
                  </h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  For businesses that have outgrown templates — custom UI/UX, React &amp; Next.js development, API integrations, dashboards, and dynamic web applications built mobile-first and optimized for speed.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Custom UI/UX design before a single line of code",
                    "React & Next.js for speed and SEO-friendly rendering",
                    "API integrations & dynamic web applications",
                    "Performance optimization — absolutely no bloat",
                  ].map((li, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WordPress Column */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-josefin font-bold text-slate-800">
                    Built with WordPress
                  </h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  For businesses that need a professional, fast-loading site their own team can manage — custom theme design, a lean plugin stack, WooCommerce for stores, and editor training so updates don't require a developer.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Custom WordPress theme design — no generic templates",
                    "WooCommerce setup for stores & product catalogs",
                    "Page speed & Core Web Vitals optimization",
                    "Editor training so your team can update content",
                  ].map((li, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#3FC7B0] flex-shrink-0 mt-0.5" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 02: SEO ================= */}
      <section className="py-20 bg-white border-t border-slate-100" id="seo">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text side */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-3">
                Service 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-6">
                SEO Services That Target Real Buyers
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                A website that isn't visible on Google is a website that's invisible to most of your customers. Our SEO services are built around one goal: getting your site found by the people who are actively searching for what you offer, and turning that visibility into inquiries and sales.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We start every SEO engagement with a technical audit — checking site speed, indexing, mobile usability, and structured data — because no amount of content can fix a website Google can't crawl properly. From there, our SEO services cover on-page optimization, keyword research based on real search intent, content strategy, local SEO for businesses that serve a specific area, and link-building that focuses on relevance over volume.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-6">
                This service fits you if:{" "}
                <span className="text-slate-500 font-normal">
                  your website gets traffic but few conversions, you're invisible on Google for the keywords that matter, or you're launching a new site and want SEO built in from day one instead of bolted on later.
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Technical SEO audits — speed, crawlability, indexing, structured data",
                  "Keyword research based on real search intent, not just search volume",
                  "On-page SEO — titles, meta descriptions, internal linking, content structure",
                  "Local SEO for businesses that serve a specific city or region",
                  "Monthly reporting so you can see rankings and traffic move, not just guess",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope side */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest pb-4 border-b border-slate-200/60 mb-4">
                  SEO Scope
                </h5>
                <div className="flex flex-col gap-4 text-sm font-mono text-slate-500">
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Technical audit</span>
                    <span className="text-primary font-bold">Included</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Keyword research</span>
                    <span className="text-slate-800 font-semibold">Intent-based</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>On-page SEO</span>
                    <span className="text-slate-800 font-semibold">Full site</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Local SEO</span>
                    <span className="text-slate-800 font-semibold">Available</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Reporting</span>
                    <span className="text-[#3FC7B0] font-bold">Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 03: MARKETING ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="marketing">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Scope side (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest pb-4 border-b border-slate-100 mb-4">
                  Marketing Channels
                </h5>
                <div className="flex flex-col gap-4 text-sm font-mono text-slate-500">
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Social media posts</span>
                    <span className="text-primary font-bold">Designed &amp; scheduled</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Video content</span>
                    <span className="text-slate-800 font-semibold">Short-form, produced</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Paid search</span>
                    <span className="text-slate-800 font-semibold">Google Ads</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Paid social</span>
                    <span className="text-slate-800 font-semibold">Meta Ads</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Email marketing</span>
                    <span className="text-[#3FC7B0] font-bold">Automated</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Tracking</span>
                    <span className="text-primary font-bold">Full-funnel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-3">
                Service 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-6">
                Digital Marketing Services — Social Media &amp; Paid Advertising
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Traffic without a plan is just noise. Our digital marketing services are designed to work with the website we build — not as a separate, disconnected effort — so every post, video, ad, and email actually points somewhere that converts.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Social media marketing is a core part of what we do, not an afterthought. We plan a content calendar, write captions, design graphics, and produce short-form video content, then handle the actual posting and scheduling across your platforms — Facebook, Instagram, LinkedIn, and others — so your brand shows up consistently instead of in bursts. Alongside that, we run paid advertising on Google and Meta for businesses that want faster, targeted reach, and email marketing to stay in front of people who've already shown interest.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-6">
                This service fits you if:{" "}
                <span className="text-slate-500 font-normal">
                  your social media has gone quiet or inconsistent, you want professional posts and video content without hiring an in-house team, or you're ready to launch paid advertising with a website built to actually convert that traffic.
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Social media marketing — post design, captions, and video content",
                  "Content calendar planning & consistent posting schedule",
                  "Google Ads & Meta Ads campaign management",
                  "Email marketing & automated follow-up sequences",
                  "Conversion tracking, so you know exactly what is actually working",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3FC7B0] flex-shrink-0 mt-0.5" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 04: SECURITY ================= */}
      <section className="py-20 bg-white border-t border-slate-100" id="security">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text side */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-3">
                Service 04
              </span>
              <h3 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-6">
                WordPress Security &amp; Malware Removal
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                WordPress powers a huge share of the web, which also makes it a constant target. A hacked or malware-infected website doesn't just look bad — it can get your domain blacklisted by Google, blocked by browsers, and stripped of the search rankings you worked to earn.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                If your WordPress website has already been compromised, our malware removal process identifies and removes malicious code, patches the vulnerability that let it in, and requests a review to get any Google or browser blacklist warning lifted. If your site is still clean, our WordPress security service closes the door before anyone gets in — firewall setup, login hardening, malware scanning, and automated backups, so you're never one hack away from losing your website.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-6">
                This service fits you if:{" "}
                <span className="text-slate-500 font-normal">
                  your WordPress site has been hacked or flagged with a malware warning, you've had unexplained slowdowns or strange redirects, or you simply want ongoing WordPress security instead of hoping nothing goes wrong.
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Malware detection & complete removal from infected WordPress sites",
                  "Vulnerability patching so the same hack cannot happen twice",
                  "Blacklist removal requests with Google Safe Browsing and security filters",
                  "Ongoing security monitoring, firewall, and automated backups",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope side */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-inner">
                <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest pb-4 border-b border-slate-200/60 mb-4">
                  Security Response
                </h5>
                <div className="flex flex-col gap-4 text-sm font-mono text-slate-500">
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Malware scan</span>
                    <span className="text-primary font-bold">Full site</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Cleanup</span>
                    <span className="text-slate-800 font-semibold">Code-level removal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Blacklist review</span>
                    <span className="text-[#3FC7B0] font-bold">Post-clean request</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-200/60">
                    <span>Firewall</span>
                    <span className="text-slate-800 font-semibold">Configured</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Backups</span>
                    <span className="text-slate-800 font-semibold">Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE 05: MAINTENANCE ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="maintenance">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Scope side (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <h5 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-widest pb-4 border-b border-slate-100 mb-4">
                  Maintenance Coverage
                </h5>
                <div className="flex flex-col gap-4 text-sm font-mono text-slate-500">
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Updates</span>
                    <span className="text-primary font-bold">Monthly, scheduled</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Uptime</span>
                    <span className="text-[#3FC7B0] font-bold">Monitored 24/7</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Backups</span>
                    <span className="text-slate-800 font-semibold">Automated</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-dashed border-slate-100">
                    <span>Minor fixes</span>
                    <span className="text-slate-800 font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Response time</span>
                    <span className="text-primary font-bold">Priority support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-3">
                Service 05
              </span>
              <h3 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-6">
                Website Maintenance
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Launch day isn't the finish line — it's the point where a website starts needing attention. Plugins go out of date, themes need updates, links break, and small technical issues pile up quietly until something stops working at the worst possible time. Our website maintenance service exists so that never happens on your watch.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every maintenance plan covers the unglamorous but essential work: core, theme, and plugin updates, uptime monitoring, performance checks, broken-link fixes, and regular backups so you can always roll back if something goes wrong. For WordPress websites, maintenance is paired with the same security monitoring used in our WordPress security service, so updates and protection move together instead of being handled separately.
              </p>
              <p className="text-sm font-semibold text-slate-800 mb-6">
                This service fits you if:{" "}
                <span className="text-slate-500 font-normal">
                  your website was launched — by us or anyone else — and hasn't been actively maintained since, you don't have in-house technical staff to handle routine updates, or you simply want one less thing to worry about each month.
                </span>
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Core, theme & plugin updates on a regular schedule",
                  "Uptime monitoring & performance health checks",
                  "Scheduled backups with easy restore points",
                  "Small content updates & bug fixes included monthly",
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#3FC7B0] flex-shrink-0 mt-0.5" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
