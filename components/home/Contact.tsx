"use client";

import { useState } from "react";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    { label: "JavaScript Dev", value: "JavaScript Development" },
    { label: "WordPress Dev", value: "WordPress Development" },
    { label: "Maintenance", value: "Website Maintenance" },
    { label: "SEO", value: "SEO Services" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Security", value: "Security & Malware Removal" },
  ];

  const handleCheckboxChange = (value: string) => {
    if (selectedServices.includes(value)) {
      setSelectedServices(selectedServices.filter((s) => s !== value));
    } else {
      setSelectedServices([...selectedServices, value]);
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100 relative z-10" id="contact">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-primary" />
              Let's Build Something
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-josefin font-bold text-slate-900 mb-6">
              Tell Us About Your Project
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether it's a custom JavaScript build, a new WordPress website, SEO that
              actually moves rankings, social media marketing, ongoing maintenance, or a
              malware cleanup — Believers Software is ready to start. Tell us a bit
              about the project and we'll reply with next steps.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hello@believerssoftware.com"
                    className="font-josefin font-bold text-slate-800 text-sm hover:text-primary transition-colors"
                  >
                    hello@believerssoftware.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </span>
                  <span className="font-josefin font-bold text-slate-800 text-sm">
                    +880 000-000000
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Response Time
                  </span>
                  <span className="font-josefin font-bold text-slate-800 text-sm">
                    Within 1 business day
                  </span>
                </div>
              </div>
            </div>

            <a
              href="mailto:hello@believerssoftware.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Email Us Directly
            </a>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm"
              action="mailto:hello@believerssoftware.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-name" className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200/80 bg-slate-50/50 text-slate-800 text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-email" className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="cf-email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200/80 bg-slate-50/50 text-slate-800 text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Service Pills Checkboxes */}
              <div className="flex flex-col gap-3 mb-6">
                <label className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Services You Need
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => {
                    const isChecked = selectedServices.includes(svc.value);
                    return (
                      <label
                        key={svc.value}
                        className={`relative cursor-pointer px-4 py-2.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 select-none ${
                          isChecked
                            ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                            : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100/50 hover:text-slate-800"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="service"
                          value={svc.value}
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(svc.value)}
                          className="absolute opacity-0 w-0 h-0"
                        />
                        {svc.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="cf-msg" className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  id="cf-msg"
                  name="message"
                  placeholder="Tell us about your website, timeline, and goals..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200/80 bg-slate-50/50 text-slate-800 text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold bg-primary text-white hover:bg-[#ff5d47] shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-200"
              >
                Send Project Details
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-400 font-mono mt-3">
                We reply to every inquiry within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
