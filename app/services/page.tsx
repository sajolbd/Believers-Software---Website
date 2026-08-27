import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import ServicesOverview from "components/home/Services";
import ServiceDetails from "components/services/ServiceDetails";

export const metadata: Metadata = {
  title: "Our Services — Custom Web Apps, WordPress, SEO & Security | Believers Software",
  description:
    "Explore full-service web development, React & Next.js custom apps, WordPress theme design, SEO, digital marketing, malware removal, and website maintenance by Believers Software.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFD]">
      {/* Services Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-white border-b border-slate-100">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3FC7B0]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white shadow-md mb-6 border border-slate-800">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">
                Full Technical Scope
              </span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-josefin font-bold text-slate-900 leading-[1.12] tracking-tight mb-6">
              Web &amp; Digital Growth Services Offered by One Accountable Team
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Believers Software offers custom JavaScript &amp; WordPress website development, technical SEO, digital &amp; social media marketing, malware cleanup, and ongoing website maintenance under one roof. Explore our full technical breakdown below.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold bg-primary text-white hover:bg-[#ff5d47] shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <ServicesOverview showBottomCta={false} />

      {/* Full Detailed Service Breakdown & Visual Widgets */}
      <ServiceDetails />
    </main>
  );
}
