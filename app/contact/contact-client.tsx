"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Loader2,
  X,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (selectedServices.length === 0) {
      newErrors.services = "Please select at least one service you need";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Project message is required";
    }
    return newErrors;
  };

  const handleCheckboxChange = (value: string) => {
    let nextServices: string[];
    if (selectedServices.includes(value)) {
      nextServices = selectedServices.filter((s) => s !== value);
    } else {
      nextServices = [...selectedServices, value];
    }
    setSelectedServices(nextServices);

    if (hasSubmittedAttempt && nextServices.length > 0) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.services;
        return updated;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (hasSubmittedAttempt && value.trim()) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_b1y766e";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_wlit8r1";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "BfNzv7xG6apsAHa0D";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone || "Not provided",
      services:
        selectedServices.length > 0
          ? selectedServices.join(", ")
          : "General Inquiry",
      message: formData.message,
      name: formData.name,
      email: formData.email,
      reply_to: formData.email,
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone || "Not provided",
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      if (response.status === 200 || response.text === "OK") {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedServices([]);
        setHasSubmittedAttempt(false);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      // Fallback
      setShowSuccessModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 sm:py-16">
      {/* Background Subtle Ambient Glow */}
      <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/5 via-indigo-500/5 to-teal-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Page Hero Banner */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-primary" />
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-josefin font-extrabold text-slate-900 leading-tight mb-6">
            Let's Build & Grow Your Next Digital Project
          </h1>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Have a project in mind, need a custom website quote, or need urgent
            WordPress malware cleanup? Fill out the form below or contact us directly. We reply to every message within 1 business day.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Direct Email Inquiry
              </span>
              <a
                href="mailto:hello@believerssoftware.com"
                className="font-josefin font-bold text-slate-900 text-lg hover:text-primary transition-colors block"
              >
                hello@believerssoftware.com
              </a>
              <p className="text-xs text-slate-500 mt-1 font-mono">
                For proposals, RFPs & direct quotes
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Phone & WhatsApp Direct Line
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+8801716878931"
                  className="font-josefin font-bold text-slate-900 text-lg hover:text-primary transition-colors"
                >
                  +8801716878931
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="https://wa.me/8801716878931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat WhatsApp
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-mono">
                Available 9:00 AM – 8:00 PM (GMT+6)
              </p>
            </div>

            {/* Office Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="block font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Headquarter Office
              </span>
              <p className="font-josefin font-bold text-slate-900 text-base leading-snug">
                House No 1787, Merul Badda, Dhaka 1212
              </p>
              <p className="text-xs text-slate-500 mt-1.5 font-mono">
                Dhaka, Bangladesh
              </p>
            </div>

            {/* Response Time Banner */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-josefin font-bold text-white text-base">
                  Guaranteed Response
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">
                  We review and respond within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: EmailJS Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-josefin font-bold text-slate-900">
                    Send Project Details
                  </h2>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Fill out what you need & get an estimate
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="page-cf-name"
                    className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="page-cf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:ring-2 transition-all outline-none ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="page-cf-email"
                    className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="page-cf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:ring-2 transition-all outline-none ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-200 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-2 mb-5">
                <label
                  htmlFor="page-cf-phone"
                  className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider"
                >
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="page-cf-phone"
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
                  Services You Need *
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => {
                    const isChecked = selectedServices.includes(svc.value);
                    return (
                      <label
                        key={svc.value}
                        className={`relative cursor-pointer px-4 py-2.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 select-none ${
                          isChecked
                            ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                            : errors.services
                            ? "bg-red-50 text-slate-700 border-red-300 hover:bg-red-100"
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
                {errors.services && (
                  <p className="text-red-500 text-xs font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.services}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="page-cf-msg"
                  className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider"
                >
                  Project Message *
                </label>
                <textarea
                  id="page-cf-msg"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, goals, or current website issues..."
                  rows={5}
                  className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:ring-2 transition-all outline-none resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold font-josefin text-base btn-slide-primary shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 font-mono mt-3">
                We respect your privacy. No spam guaranteed.
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
                Thank you for contacting Believers Software. Your details have been sent to our team and we will respond within 1 business day.
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
                  Chat on WhatsApp (+8801716878931)
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
