import { Check } from "lucide-react";

export default function Engagement() {
  const models = [
    {
      tag: "Project-Based",
      title: "One-Time Build",
      desc: "A defined website design and development project — JavaScript or WordPress — scoped, quoted, and delivered on a fixed timeline.",
      bullets: [
        "Fixed scope & fixed price",
        "Design, development & launch",
        "SEO fundamentals included",
        "Full ownership on handover",
      ],
      featured: false,
    },
    {
      tag: "Most Common",
      title: "Build + Growth Retainer",
      desc: "Your website is built by us, then supported month to month with SEO, digital marketing, and WordPress security so performance keeps improving.",
      bullets: [
        "Everything in One-Time Build",
        "Ongoing SEO & content strategy",
        "Digital marketing management",
        "Security monitoring & backups",
      ],
      featured: true,
    },
    {
      tag: "Existing Sites",
      title: "Recovery & Support",
      desc: "For businesses with an existing website that needs a malware cleanup, security hardening, an SEO reset, or ongoing maintenance — no rebuild required.",
      bullets: [
        "Malware removal & hardening",
        "Technical SEO audit & fixes",
        "Monthly maintenance & monitoring",
        "No full redesign required",
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-white relative z-10" id="engagement">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            How We Work Together
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            Engagement models built around what you actually need.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Not every business needs the same relationship with an agency. Some need
            a website built once and handed over; others need an ongoing partner
            across development, SEO, marketing, and security. We scope the
            engagement to match, rather than pushing every client into the same
            package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                model.featured
                  ? "bg-slate-50/80 border-primary shadow-md shadow-primary/[0.03] scale-100 lg:scale-[1.03]"
                  : "bg-[#FCFDFD] border-slate-100 hover:border-slate-200"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-6 ${
                    model.featured
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {model.tag}
                </span>
                <h4 className="text-xl font-josefin font-bold text-slate-800 mb-4">
                  {model.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  {model.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3.5 pt-6 border-t border-slate-100/60 mt-auto">
                {model.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
