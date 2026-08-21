export default function TechStack() {
  const columns = [
    {
      title: "Development",
      items: [
        "React & Next.js",
        "Node.js",
        "WordPress & WooCommerce",
        "REST & third-party APIs",
      ],
    },
    {
      title: "SEO & Analytics",
      items: [
        "Google Search Console",
        "Google Analytics 4",
        "Schema / structured data",
        "Core Web Vitals tooling",
      ],
    },
    {
      title: "Marketing",
      items: [
        "Google Ads & Meta Ads",
        "Email automation platforms",
        "Social scheduling tools",
        "Conversion tracking & pixels",
      ],
    },
    {
      title: "Security",
      items: [
        "Malware scanning & firewalls",
        "Automated backups",
        "SSL & login hardening",
        "Google Safe Browsing review",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100 relative z-10" id="tech-stack">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Under the Hood
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            The tools we build and defend your website with.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We stay deliberately narrow on our tech stack — fewer tools, used well,
            means fewer things that break. Here's what shows up in most projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <h5 className="font-mono text-xs font-bold text-primary uppercase tracking-widest pb-4 border-b border-slate-100 mb-4">
                {col.title}
              </h5>
              <ul className="flex flex-col">
                {col.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-sm font-medium text-slate-600 py-3 border-b border-dashed border-slate-100 last:border-b-0"
                  >
                    {item}
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
