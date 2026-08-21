import { Layers, Zap, Shield, Key } from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "One team, every discipline",
      desc: "Design, development, SEO, marketing, and security work from a single roadmap — not five disconnected vendors passing your project around.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Built for speed, from day one",
      desc: "Every website we design and develop is optimized for load speed and Core Web Vitals before launch, not patched afterward.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Security is standard, not an add-on",
      desc: "Every WordPress website we build ships with security hardening included — you don't have to ask for it separately.",
    },
    {
      icon: <Key className="w-6 h-6 text-primary" />,
      title: "You own everything we build",
      desc: "Your code, your content, your CMS login. No lock-in, no hostage-taking if you ever want to work with someone else.",
    },
  ];

  return (
    <section className="py-20 bg-white relative z-10" id="why-us">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            The Believers Difference
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            Why Believers Software is built differently.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            A website is one of the few assets a business owns outright online. We
            treat it that way — with the same care whether we're writing a line of
            code or answering a support message.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-100 bg-[#FCFDFD] hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.01] transition-all duration-300 group"
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
