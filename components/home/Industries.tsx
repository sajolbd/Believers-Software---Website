export default function Industries() {
  const industries = [
    {
      num: "01",
      title: "E-commerce & Retail",
      desc: "WooCommerce and custom storefronts built for conversion, speed, and easy product management.",
    },
    {
      num: "02",
      title: "SaaS & Startups",
      desc: "Custom JavaScript web apps, dashboards, and marketing sites that scale with the product.",
    },
    {
      num: "03",
      title: "Local Service Businesses",
      desc: "WordPress websites paired with local SEO to bring in customers searching in your area.",
    },
    {
      num: "04",
      title: "Healthcare & Clinics",
      desc: "Secure, accessible, appointment-friendly websites with WordPress security built in.",
    },
    {
      num: "05",
      title: "Professional Services",
      desc: "Law firms, agencies, and consultancies that need a credible site and steady SEO-driven leads.",
    },
    {
      num: "06",
      title: "Education & Nonprofits",
      desc: "Content-heavy WordPress sites built for easy updates by non-technical staff.",
    },
    {
      num: "07",
      title: "Real Estate",
      desc: "Listing-driven websites with fast search and filtering, built for high traffic volume.",
    },
    {
      num: "08",
      title: "Hospitality & Travel",
      desc: "Visual, booking-ready websites backed by digital marketing to fill the calendar.",
    },
  ];

  return (
    <section className="py-20 bg-white relative z-10" id="industries">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Who We Work With
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
            Industries we design and develop for.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            The right website design and development approach changes depending on
            your industry. A clinic's website has different priorities than a SaaS
            product or an online store — here's where we spend most of our time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.num}
              className="p-6 rounded-2xl border border-slate-100 bg-[#FCFDFD] hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.01] transition-all duration-300 group"
            >
              <span className="block font-mono text-xs font-bold text-slate-300 mb-4 group-hover:text-primary transition-colors duration-200">
                {ind.num}
              </span>
              <h4 className="text-base font-josefin font-bold text-slate-800 mb-2">
                {ind.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
