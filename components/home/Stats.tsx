export default function Stats() {
  const stats = [
    {
      value: "5.0★",
      label: "Rated by clients",
      sub: "Google & Platform reviews",
    },
    {
      value: "+140%",
      label: "Organic traffic in 6 months",
      sub: "Average for active SEO clients",
    },
    {
      value: "99.9%",
      label: "Uptime on maintained sites",
      sub: "Monitored 24/7/365",
    },
    {
      value: "1 day",
      label: "Average response time",
      sub: "For all new quote inquiries",
    },
  ];

  return (
    <div className="py-12 border-y border-slate-100 bg-white relative z-10">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FCFDFD] border border-slate-100 text-center hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
            >
              <span className="block font-josefin text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <h4 className="font-semibold text-slate-800 text-sm mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-400 font-mono">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
