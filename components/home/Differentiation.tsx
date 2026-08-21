import { Layers, ShieldCheck, FileKey, BarChart3 } from "lucide-react";

export default function Differentiation() {
  const items = [
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      text: "One accountable team across design, dev, SEO, marketing & security",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#3FC7B0]" />,
      text: "Security & speed built in from day one, not patched later",
    },
    {
      icon: <FileKey className="w-5 h-5 text-primary" />,
      text: "Full ownership of your code, content & CMS — no vendor lock-in",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
      text: "Plain-language monthly reporting, real numbers only",
    },
  ];

  return (
    <div className="py-16 bg-slate-50/50 border-b border-slate-100 relative z-10">
      <div className="max-w-[1180px] mx-auto px-6">
        <h5 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 text-center lg:text-left">
          What Makes Us Different
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200/50 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-slate-700 leading-relaxed pt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
