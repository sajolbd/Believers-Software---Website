"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Clock, MapPin, ArrowRight, CheckCircle2, MessageSquare, Loader2, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const services = [
    { label: "Custom Website Dev", value: "Custom Website Development" },
    { label: "WordPress Dev", value: "WordPress Development" },
    { label: "Website Maintenance", value: "Website Maintenance" },
    { label: "SEO Services", value: "SEO Services" },
    { label: "Digital Marketing", value: "Digital Marketing" },
    { label: "Security & Malware", value: "Security & Malware Removal" },
  ];

  const handleCheckboxChange = (value: string) => {
    if (selectedServices.includes(value)) {
      setSelectedServices(selectedServices.filter((s) => s !== value));
    } else {
      setSelectedServices([...selectedServices, value]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_b1y766e";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_e2xl93v";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "BfNzv7xG6apsAHa0D";

    // Included parameter aliases so all EmailJS template variable names work seamlessly
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone || "Not provided",
      services: selectedServices.length > 0 ? selectedServices.join(", ") : "General Inquiry",
      message: formData.message,
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone || "Not provided",
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log("EmailJS Sent Successfully:", response.status, response.text);
      if (response.status === 200 || response.text === "OK") {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedServices([]);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      alert(`EmailJS Send Failed (${err?.status || "Error"}): ${err?.text || err?.message || "Please check your EmailJS Service & Template settings."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100 relative z-10 overflow-hidden" id="contact">
      {/* Subtle Background Glows */}
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Column */}
          <div className="md:col-span-5">
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Let's Build Something
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight mb-6">
              Tell Us About Your Project
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              Whether it's a Custom Website build, a new WordPress platform, SEO that
              actually moves rankings, social media marketing, ongoing maintenance, or a
              malware cleanup — Believers Software is ready to start. Tell us a bit
              about your project and we'll reply with next steps.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {/* Email */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Email Address
                  </span>
                  <a
                    href="mailto:hello@believerssoftware.com"
                    className="font-josefin font-bold text-slate-900 text-base hover:text-primary transition-colors"
                  >
                    hello@believerssoftware.com
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Phone / WhatsApp
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+8801716878931"
                      className="font-josefin font-bold text-slate-900 text-base hover:text-primary transition-colors"
                    >
                      +8801716878931
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="https://wa.me/8801716878931"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-emerald-600 hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Office Address
                  </span>
                  <span className="font-josefin font-bold text-slate-900 text-sm sm:text-base leading-snug block">
                    House No 1787, Merul Badda, Dhaka 1212
                  </span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Guaranteed Response
                  </span>
                  <span className="font-josefin font-bold text-slate-900 text-base">
                    Within 1 business day
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-5 sm:p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <h3 className="text-2xl font-josefin font-bold text-slate-900 mb-6 flex items-center gap-2">
                Send Project Details
                <Sparkles className="w-5 h-5 text-primary" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-name" className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-email" className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="cf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="cf-phone" className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="cf-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="01716878931"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                />
              </div>

              {/* Service Pills Checkboxes */}
              <div className="flex flex-col gap-3 mb-6">
                <label className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Services You Need
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => {
                    const isChecked = selectedServices.includes(svc.value);
                    return (
                      <label
                        key={svc.value}
                        className={`relative cursor-pointer px-4 py-2.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 select-none ${isChecked
                          ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
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
                <label htmlFor="cf-msg" className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Project Message *
                </label>
                <textarea
                  id="cf-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your website, timeline, and goals..."
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold font-josefin text-base btn-slide-primary shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Details...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Inquiry</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 font-mono mt-3">
                We reply to every inquiry within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl border border-slate-100 text-center relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Glowing Success Icon */}
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-josefin font-bold text-slate-900 mb-2">
                Inquiry Submitted!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Thank you for reaching out to Believers Software. We have received your project details and will respond within 1 business day.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-primary/90 shadow-md shadow-primary/20 transition-all cursor-pointer"
                >
                  Got It, Thanks!
                </button>

                <a
                  href="https://wa.me/8801716878931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp (01716878931)
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

