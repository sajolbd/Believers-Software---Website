export default function Process() {
  const stages = [
    {
      stage: "STAGE 01",
      title: "Discovery & strategy",
      desc: "We learn your business, your customers, and your goals, then map out the site structure, service scope, and success metrics before any design work starts.",
    },
    {
      stage: "STAGE 02",
      title: "Design",
      desc: "Wireframes and visual design tailored to your brand — not a recycled template — reviewed with you before development begins.",
    },
    {
      stage: "STAGE 03",
      title: "Development",
      desc: "Your website is built in JavaScript or WordPress, whichever fits the project, with SEO fundamentals and security hardening built in from the start.",
    },
    {
      stage: "STAGE 04",
      title: "Testing & launch",
      desc: "Cross-device testing, speed checks, and a final review before your website goes live — absolutely no surprises after launch day.",
    },
    {
      stage: "STAGE 05",
      title: "Growth: SEO, marketing & security",
      desc: "Once you're live, we keep optimizing — SEO, digital marketing, and WordPress security monitoring — so the site keeps improving after launch.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative z-10" id="process">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            How We Work
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            How Projects Move from Start to Finish
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every website design and development project at Believers Software follows
            the same disciplined process — because consistency is what keeps a
            project on time and on budget.
          </p>
        </div>

        {/* Developer Console Timeline Container */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm max-w-4xl mx-auto">
          {/* Console Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-4 font-mono text-xs text-slate-400 font-semibold select-none">
              project_timeline.log
            </span>
          </div>

          {/* Console Body */}
          <div className="divide-y divide-slate-100 bg-[#FCFDFD]">
            {stages.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 p-6 sm:p-8 hover:bg-slate-50/50 transition-colors duration-150"
              >
                {/* Stage tag */}
                <div className="font-mono text-xs font-bold text-primary tracking-wider uppercase self-start pt-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item.stage}
                </div>
                {/* Content */}
                <div>
                  <h4 className="text-lg font-josefin font-bold text-slate-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
