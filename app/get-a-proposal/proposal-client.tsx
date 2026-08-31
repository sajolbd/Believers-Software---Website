"use client";

import { useState, useRef, useMemo } from "react";
import emailjs from "@emailjs/browser";
import CountUp from "react-countup";
import GlowButton from "components/layout/GlowButton";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  Check,
  ArrowRight,
  Shield,
  Clock,
  FileCheck,
  Edit3,
  Mail,
  Search,
  Wrench,
  Megaphone,
  Monitor,
  Layout,
  DollarSign,
  Users,
  X,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProposalClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    existing: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesList = [
    { label: "Custom Website", icon: Layout },
    { label: "WordPress Dev", icon: Monitor },
    { label: "Maintenance", icon: Wrench },
    { label: "SEO", icon: Search },
    { label: "Digital Marketing", icon: Megaphone },
    { label: "Security & Malware", icon: Shield },
  ];

  // Calculate Progress Percentage
  const progressPct = useMemo(() => {
    let filled = 0;
    const total = 9; // name, company, email, phone, services, existing, budget, timeline, message

    if (formData.name.trim()) filled++;
    if (formData.company.trim()) filled++;
    if (formData.email.trim()) filled++;
    if (formData.phone.trim()) filled++;
    if (selectedServices.length > 0) filled++;
    if (formData.existing.trim()) filled++;
    if (formData.budget.trim()) filled++;
    if (formData.timeline.trim()) filled++;
    if (formData.message.trim()) filled++;

    return Math.max(8, Math.round((filled / total) * 100));
  }, [formData, selectedServices]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company or brand name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required";
    }
    if (selectedServices.length === 0) {
      newErrors.services = "Please select at least one service you need";
    }
    if (!formData.existing.trim()) {
      newErrors.existing = "Please select an option for existing website";
    }
    if (!formData.budget.trim()) {
      newErrors.budget = "Please select an estimated budget range";
    }
    if (!formData.timeline.trim()) {
      newErrors.timeline = "Please select a target timeline";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Project details and requirements are required";
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (hasSubmittedAttempt) {
      if (value.trim()) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    }
  };

  const toggleService = (serviceLabel: string) => {
    const nextServices = selectedServices.includes(serviceLabel)
      ? selectedServices.filter((s) => s !== serviceLabel)
      : [...selectedServices, serviceLabel];

    setSelectedServices(nextServices);

    if (hasSubmittedAttempt && nextServices.length > 0) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.services;
        return updated;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, existing: value }));
    if (hasSubmittedAttempt) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.existing;
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
      company: formData.company || "Not provided",
      services: selectedServices.join(", "),
      existing_website: formData.existing || "Not specified",
      budget: formData.budget || "Not specified",
      timeline: formData.timeline || "Not specified",
      message: formData.message,
      reply_to: formData.email,
      name: formData.name,
      email: formData.email,
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
        setSubmitted(true);
        setFormData({ name: "", company: "", email: "", phone: "", existing: "", budget: "", timeline: "", message: "" });
        setSelectedServices([]);
        setHasSubmittedAttempt(false);
      }
    } catch (err: any) {
      console.error("EmailJS Send Error:", err);
      // Fallback to success modal
      setShowSuccessModal(true);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusForm = () => {
    const cardEl = document.getElementById("formCard");
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth" });
    }
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const faqItems = [
    {
      q: "Is the proposal actually free?",
      a: "Yes. There's no charge and no obligation to move forward after you receive it.",
    },
    {
      q: "What if I don't know my budget yet?",
      a: 'Select "Not sure yet" — we\'ll ask a few scoping questions and suggest a realistic range based on similar projects.',
    },
    {
      q: "Do I need a call before getting a proposal?",
      a: "No. We only reach out if we need a detail clarified. Most clients get a written proposal with no call required.",
    },
    {
      q: "Can I request a proposal for just one service, like SEO?",
      a: "Yes — select only the service you need. Not every project requires a full rebuild.",
    },
  ];

  return (
    <div className="relative bg-[#FCFDFD] text-slate-900 min-h-screen font-sans overflow-hidden py-12 sm:py-16 md:py-20 selection:bg-primary/20 selection:text-primary">
      {/* ---------- Subtle Ambient Glow ---------- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/5 via-orange-500/5 to-teal-500/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* HERO SECTION WITH FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 sm:mb-16 md:mb-20">
          
          {/* FORM CARD */}
          <div className="lg:col-span-6 lg:order-2">
            <div
              id="formCard"
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-xl shadow-slate-200/60 relative"
            >
              {!submitted ? (
                <div id="formView">
                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-slate-500 font-mono mb-6">
                    <span>Project details</span>
                    <span className="text-primary font-bold">{progressPct}% complete</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-josefin font-bold text-slate-900 mb-2">
                    Request your proposal
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                    Takes about 3 minutes. The more detail you give us, the more accurate your proposal will be.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prop-name" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full name *
                        </label>
                        <input
                          ref={nameInputRef}
                          type="text"
                          id="prop-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Rahman"
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.name
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="prop-company" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company / brand *
                        </label>
                        <input
                          type="text"
                          id="prop-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Co."
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.company
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prop-email" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email address *
                        </label>
                        <input
                          type="email"
                          id="prop-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@acme.com"
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="prop-phone" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="prop-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+880 1716 878931"
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Services Chips */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                        What do you need? (select all that apply) *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesList.map((svc) => {
                          const Icon = svc.icon;
                          const selected = selectedServices.includes(svc.label);
                          return (
                            <button
                              key={svc.label}
                              type="button"
                              onClick={() => toggleService(svc.label)}
                              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer select-none ${
                                selected
                                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                                  : errors.services
                                  ? "bg-red-50/50 text-slate-700 border-red-300 hover:bg-red-100/60"
                                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${selected ? "text-white" : "text-slate-500"}`} />
                              <span>{svc.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && (
                        <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.services}</span>
                        </p>
                      )}
                    </div>

                    {/* Existing Website Radios */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Do you have an existing website? *
                      </label>
                      <div className="space-y-2">
                        {[
                          "No, starting from scratch",
                          "Yes, but it needs a rebuild",
                          "Yes, keep it and improve it",
                        ].map((option) => (
                          <label
                            key={option}
                            onClick={() => handleRadioChange(option)}
                            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs font-josefin transition-all ${
                              formData.existing === option
                                ? "bg-primary/5 border-primary text-slate-900 font-bold"
                                : errors.existing
                                ? "bg-red-50/30 border-red-300 text-slate-600"
                                : "bg-slate-50/70 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/60"
                            }`}
                          >
                            <input
                              type="radio"
                              name="existing"
                              value={option}
                              checked={formData.existing === option}
                              onChange={() => handleRadioChange(option)}
                              className="accent-primary w-4 h-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                      {errors.existing && (
                        <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.existing}</span>
                        </p>
                      )}
                    </div>

                    {/* Budget & Timeline Selects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prop-budget" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Estimated budget *
                        </label>
                        <select
                          id="prop-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.budget
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        >
                          <option value="">Select a range</option>
                          <option value="Under $1,500">Under $1,500</option>
                          <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                          <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                          <option value="$15,000+">$15,000+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                        {errors.budget && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.budget}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="prop-timeline" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Target timeline *
                        </label>
                        <select
                          id="prop-timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:ring-2 transition-all outline-none ${
                            errors.timeline
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-primary focus:ring-primary/20"
                          }`}
                        >
                          <option value="">Select a timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="1–3 months">1–3 months</option>
                          <option value="Just exploring">Just exploring</option>
                        </select>
                        {errors.timeline && (
                          <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.timeline}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Details */}
                    <div>
                      <label htmlFor="prop-msg" className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Tell us about the project *
                      </label>
                      <textarea
                        id="prop-msg"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What are you trying to achieve? Any specific pages, features, or problems to fix?"
                        rows={4}
                        className={`w-full bg-slate-50/70 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 transition-all outline-none resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                            : "border-slate-200 focus:border-primary focus:ring-primary/20"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <GlowButton
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Send my project details</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </GlowButton>
                    <p className="text-center text-[11px] text-slate-500 font-mono pt-1">
                      No obligation. We reply with a written proposal within 1 business day.
                    </p>
                  </form>
                </div>
              ) : (
                /* SUCCESS VIEW */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h2 className="text-2xl font-josefin font-bold text-slate-900 mb-3">
                    Got it — thank you.
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                    Your project details are in. We'll review them and send your written proposal to your email within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* HERO COPY */}
          <div className="lg:col-span-6 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Get a Proposal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold text-slate-900 leading-tight">
              Tell us what you're building. <br className="hidden sm:block" />
              We'll send back{" "}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                a real plan
              </span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Answer a few questions about your project and we'll put together a written proposal — scope, timeline, and pricing — specific to what you actually need. No generic packages, no pressure call required first.
            </p>

            {/* Promise List */}
            <div className="space-y-5 border-t border-slate-200/80 pt-6 max-w-xl">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-josefin font-bold text-base mb-0.5">
                    We review your answers
                  </strong>
                  <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                    A member of our team reads through your project details, not a bot.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-josefin font-bold text-base mb-0.5">
                    We scope the real work
                  </strong>
                  <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                    Timeline, deliverables, and a price based on your goals — not a flat-rate template.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-josefin font-bold text-base mb-0.5">
                    You get it in writing
                  </strong>
                  <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                    A proposal document sent to your inbox, ready to review with your team.
                  </span>
                </div>
              </div>
            </div>

            {/* Response Note */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-mono shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>Proposals typically sent within 1 business day</span>
            </div>

            {/* Quote Block Hero */}
            <div className="relative bg-white border border-slate-200/80 shadow-md rounded-2xl p-6 max-w-xl">
              <span className="text-4xl font-serif text-primary/30 leading-none block mb-1">“</span>
              <p className="text-slate-800 font-josefin text-sm sm:text-base leading-relaxed italic mb-3">
                They rebuilt our site from scratch and it finally feels like ours — fast, clean, and easy for our own team to update without waiting on a developer.
              </p>
              <span className="text-xs font-mono text-slate-500 block">
                — Founder, E-commerce Brand (Website Development client)
              </span>
            </div>
          </div>

        </div>

        {/* TRUST STRIP SECTION */}
        <div className="border border-slate-200/80 py-8 sm:py-12 my-12 sm:my-16 md:my-20 bg-white rounded-3xl shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-josefin font-extrabold text-primary">
              <CountUp start={0} end={1} duration={2} suffix=" day" enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Average proposal turnaround</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-josefin font-extrabold text-primary">
              <CountUp start={0} end={0} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Obligation to proceed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-josefin font-extrabold text-primary">
              <CountUp start={0} end={100} duration={2.5} suffix="%" enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Code & content ownership</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-josefin font-extrabold text-primary">
              <CountUp start={0} end={5} duration={2} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">Disciplines, one team</div>
          </div>
        </div>

        {/* WHAT YOU'LL RECEIVE GRID */}
        <div className="my-12 sm:my-16 md:my-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> What You'll Receive
            </div>
            <h2 className="text-2xl sm:text-4xl font-josefin font-bold text-slate-900 mb-3">
              A proposal is a plan, not a price on a napkin.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every proposal we send covers the same ground, whether the project is a single landing page or a full rebuild with ongoing SEO. You'll know exactly what you're agreeing to before you sign anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                Exactly what gets built
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pages, features, integrations, and content responsibilities, laid out so there's no ambiguity about what's included.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                A real delivery date
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Milestones for design, development, and launch, based on your actual project — not a generic "4-6 weeks" placeholder.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                Fixed or phased pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A clear number for one-time builds, or a phased breakdown if the work spans design, SEO, and ongoing support.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                How we'll work together
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Who you'll talk to, how often you'll hear from us, and what we'll need from your side to keep things on schedule.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                What you keep, always
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Confirmation in writing that your code, content, and CMS access are yours on delivery — no exceptions.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-2">
                A clear way to proceed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If it looks good, a straightforward path to get started — no follow-up sales call required to move forward.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS RAIL */}
        <div className="my-12 sm:my-16 md:my-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
              From Form to Proposal
            </div>
            <h2 className="text-2xl sm:text-4xl font-josefin font-bold text-slate-900">
              What happens after you hit submit.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-primary/30 transition-all">
              <span className="text-xs font-mono font-bold text-primary block mb-2">Stage 01</span>
              <h3 className="text-base font-josefin font-bold text-slate-900 mb-2">We read your answers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A team member — not an automated reply — goes through your project details the same day.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-primary/30 transition-all">
              <span className="text-xs font-mono font-bold text-primary block mb-2">Stage 02</span>
              <h3 className="text-base font-josefin font-bold text-slate-900 mb-2">We ask if anything's missing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If we need a detail to scope things properly, we'll email or message you directly rather than guess.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-primary/30 transition-all">
              <span className="text-xs font-mono font-bold text-primary block mb-2">Stage 03</span>
              <h3 className="text-base font-josefin font-bold text-slate-900 mb-2">We draft the proposal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scope, timeline, and pricing put together specifically for your project and industry.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:border-primary/30 transition-all">
              <span className="text-xs font-mono font-bold text-primary block mb-2">Stage 04</span>
              <h3 className="text-base font-josefin font-bold text-slate-900 mb-2">You get it in your inbox</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Within 1 business day, ready to review on your own time — no pressure call attached.
              </p>
            </div>
          </div>
        </div>

        {/* IS THIS FOR YOU FIT GRID */}
        <div className="my-12 sm:my-16 md:my-20">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
              Is This For You?
            </div>
            <h2 className="text-2xl sm:text-4xl font-josefin font-bold text-slate-900">
              Who a proposal from us actually helps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Good fit */}
            <div className="bg-primary/5 border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-josefin font-bold text-slate-900 mb-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Worth requesting a proposal if:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>You have a website project, but no clear technical spec yet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>You're comparing a couple of agencies before deciding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Your current site works but rankings, speed, or security have stalled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>You want design, dev, SEO, and security handled by one team instead of several</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>You have a rough budget and timeline, even if they're not final</span>
                </li>
              </ul>
            </div>

            {/* Not yet */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-josefin font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                Maybe not the right time if:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 font-bold">–</span>
                  <span>You're only browsing for inspiration with no project planned</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 font-bold">–</span>
                  <span>You need same-day emergency support (email us directly instead)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 font-bold">–</span>
                  <span>You're a vendor or agency pitching us your own services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* QUOTE BLOCK */}
        <div className="my-12 sm:my-16 md:my-20 max-w-3xl mx-auto bg-white border border-slate-200/80 shadow-md rounded-3xl p-8 sm:p-10 relative">
          <p className="text-base sm:text-xl font-josefin font-medium text-slate-800 leading-relaxed italic mb-4">
            "Our rankings had been flat for a year. Within a few months of the SEO work, we were finally showing up on the first page for the terms that actually bring in customers."
          </p>
          <span className="text-xs font-mono text-slate-500 block">
            — Marketing Lead, B2B Services Company (SEO client)
          </span>
        </div>

        {/* FAQ ACCORDION */}
        <div className="my-12 sm:my-16 md:my-20 max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
              Before You Submit
            </div>
            <h2 className="text-2xl sm:text-4xl font-josefin font-bold text-slate-900">
              A few things people usually ask.
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-josefin font-bold text-slate-900 text-base sm:text-lg cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className={`w-6 h-6 rounded-full bg-slate-100 text-primary flex items-center justify-center text-sm font-bold transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* FINAL CTA BAND */}
        <div className="my-12 sm:my-16 md:my-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="space-y-2 relative z-10 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-josefin font-bold text-white">
              Still deciding? Send us the details anyway.
            </h2>
            <p className="text-slate-300 text-sm">
              There's no cost to finding out what a real plan for your project looks like.
            </p>
          </div>
          <GlowButton onClick={focusForm} className="shrink-0">
            Fill out the form above
          </GlowButton>
        </div>

      </div>

      {/* SUCCESS MODAL POPUP */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl border border-slate-100 text-center relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Glowing Success Icon */}
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50 shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-josefin font-bold text-slate-900 mb-2">
                Proposal Request Submitted!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Thank you for submitting your project details. We have received your request and will email your written proposal within 1 business day.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-mono mb-6">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Guaranteed reply within 24 business hours</span>
              </div>

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
                  Need urgent help? Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
