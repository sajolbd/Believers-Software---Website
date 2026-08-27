import Link from "next/link";
import {
  Code,
  Search,
  Megaphone,
  ShieldAlert,
  Wrench,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

interface ServicesProps {
  showBottomCta?: boolean;
}

export default function Services({ showBottomCta = true }: ServicesProps) {
  const overviewServices = [
    {
      num: "01",
      title: "Website Design & Development",
      desc: "Custom-built websites, designed and developed with whichever technology actually fits your project — JavaScript (React, Next.js) for custom apps and dashboards, or WordPress for fast, editable business sites and stores.",
      href: "/services/web-development",
      icon: <Code className="w-6 h-6 text-primary" />,
      badgeColor: "from-primary/20 via-orange-500/10 to-transparent text-primary border-primary/30",
    },
    {
      num: "02",
      title: "SEO Services",
      desc: "Technical, on-page, and content SEO that gets your website found on Google by the people who are actually ready to buy.",
      href: "/services/seo",
      icon: <Search className="w-6 h-6 text-indigo-500" />,
      badgeColor: "from-indigo-500/20 via-blue-500/10 to-transparent text-indigo-500 border-indigo-500/30",
    },
    {
      num: "03",
      title: "Digital Marketing Services",
      desc: "Social media marketing — posts, graphics, and video content — plus paid ads and email marketing, so your brand shows up consistently, not just when there's budget for ads.",
      href: "/services/digital-marketing",
      icon: <Megaphone className="w-6 h-6 text-[#3FC7B0]" />,
      badgeColor: "from-[#3FC7B0]/20 via-teal-500/10 to-transparent text-[#3FC7B0] border-[#3FC7B0]/30",
    },
    {
      num: "04",
      title: "WordPress Security & Malware Removal",
      desc: "Malware cleanup, hack recovery, and ongoing WordPress security monitoring, so a compromised site never costs you customers.",
      href: "/services/security",
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
      badgeColor: "from-rose-500/20 via-red-500/10 to-transparent text-rose-500 border-rose-500/30",
    },
    {
      num: "05",
      title: "Website Maintenance",
      desc: "Updates, backups, uptime monitoring, and technical fixes handled every month, so your website stays reliable without you having to think about it.",
      href: "/services/maintenance",
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      badgeColor: "from-amber-500/20 via-orange-400/10 to-transparent text-amber-500 border-amber-500/30",
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white relative border-b border-slate-100 overflow-hidden" id="services">
      {/* Background ambient glow orbs */}
      <div className="absolute top-[-5%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#3FC7B0]/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white shadow-md mb-6 border border-slate-800">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-josefin font-bold text-slate-900 leading-[1.18] tracking-tight mb-6">
            Five services. <span className="text-primary">One accountable team.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Most agencies hand your website design and development off to one team,
            your SEO to another, and your security to whoever answers the support ticket.
            Believers Software keeps design, development, maintenance, SEO, marketing,
            and security under one roof, so nothing falls through the cracks between departments.
          </p>
        </div>

        {/* Overview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {overviewServices.map((svc) => (
            <div
              key={svc.num}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-2xl hover:shadow-slate-200/60 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Accent glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-md bg-slate-100 text-slate-500">
                    {svc.num} / SERVICE
                  </span>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm bg-gradient-to-br ${svc.badgeColor}`}>
                    {svc.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-josefin font-bold text-slate-900 group-hover:text-primary transition-colors mb-4">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-slate-900 transition-all group-hover:gap-3"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        {showBottomCta && (
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div>
              <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase block mb-1">
                FULL TECHNICAL BREAKDOWN
              </span>
              <h4 className="text-xl font-josefin font-bold text-white">
                Explore our full service scope, visual widgets &amp; technical specs
              </h4>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-primary text-white hover:bg-[#ff5d47] transition-all shadow-md flex-shrink-0 text-sm"
            >
              Explore All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
