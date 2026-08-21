import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "They rebuilt our site from scratch and it finally feels like ours — fast, clean, and easy for our own team to update without waiting on a developer.",
      name: "Founder",
      role: "E-commerce Brand, WordPress Development",
      avatarInitials: "EC",
      gradient: "from-[#FF4B33] to-[#FF8C33]",
    },
    {
      stars: 5,
      quote:
        "Our rankings had been flat for a year. Within a few months of the SEO work, we were finally showing up on the first page for the terms that actually bring in customers.",
      name: "Marketing Lead",
      role: "B2B Services Company, SEO",
      avatarInitials: "ML",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      stars: 5,
      quote:
        "Our site got hacked right before a launch. Believers Software cleaned it up fast, explained exactly what happened, and made sure it couldn't happen the same way twice.",
      name: "Operations Manager",
      role: "Healthcare Practice, Security & Malware Removal",
      avatarInitials: "OM",
      gradient: "from-[#3FC7B0] to-emerald-500",
    },
    {
      stars: 5,
      quote:
        "We used to post whenever someone remembered to. Now we have an actual content calendar with real video content, and our engagement has noticeably picked up.",
      name: "Owner",
      role: "Hospitality Brand, Social Media Marketing",
      avatarInitials: "HB",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      stars: 5,
      quote:
        "We stopped worrying about plugin updates and backups the day we signed up for maintenance. If something breaks, it's usually already fixed before we notice.",
      name: "Office Manager",
      role: "Multi-Location Business, Website Maintenance",
      avatarInitials: "MM",
      gradient: "from-slate-500 to-slate-700",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-y border-slate-100 relative z-10" id="testimonials">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900">
            What it's like to work with us.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Stars Row */}
                <div className="flex items-center gap-1 mb-6 text-primary">
                  {Array.from({ length: testi.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-josefin italic font-medium text-slate-700 text-[17px] leading-relaxed mb-8">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-auto">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testi.gradient} flex items-center justify-center text-white text-xs font-bold font-mono shadow-sm`}
                >
                  {testi.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{testi.name}</h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
