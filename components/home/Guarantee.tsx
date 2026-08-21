import { UserCheck, BarChart3, Clock, FileCheck } from "lucide-react";

export default function Guarantee() {
  const items = [
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      title: "Full ownership, always",
      desc: "Your domain, hosting, code, and content stay in your name. Nothing is held hostage to keep you as a client.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Transparent reporting",
      desc: "SEO, marketing, and maintenance clients get plain-language monthly reports — real numbers, not vanity metrics.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Realistic timelines",
      desc: "You get a clear delivery date during discovery — before any contract is signed, not after.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "No lock-in contracts",
      desc: "Retainers and maintenance plans run month to month. You stay because it's working, not because you're stuck.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative z-10" id="guarantee">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Our Commitment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            What You Can Expect from Believers Software
          </h2>
          <p className="text-slate-600 leading-relaxed">
            These aren't upsells — they're the baseline for how we work, whether you
            hire us for a single WordPress website or a full design, SEO, marketing,
            and maintenance package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.01] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-josefin font-bold text-slate-800 mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
