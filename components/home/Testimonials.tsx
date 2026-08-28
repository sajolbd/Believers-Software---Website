"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      stars: 5,
      quote:
        "They rebuilt our site from scratch and it finally feels like ours — fast, clean, and easy for our own team to update without waiting on a developer.",
      name: "Founder",
      role: "E-commerce Brand, WordPress Development",
      avatarInitials: "EC",
      avatar: "/images/testimonials/avatar-1.jpg",
      gradient: "from-[#FF4B33] to-[#FF8C33]",
    },
    {
      stars: 5,
      quote:
        "Our rankings had been flat for a year. Within a few months of the SEO work, we were finally showing up on the first page for the terms that actually bring in customers.",
      name: "Marketing Lead",
      role: "B2B Services Company, SEO",
      avatarInitials: "ML",
      avatar: "/images/testimonials/avatar-2.jpg",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      stars: 5,
      quote:
        "Our site got hacked right before a launch. Believers Software cleaned it up fast, explained exactly what happened, and made sure it couldn't happen the same way twice.",
      name: "Operations Manager",
      role: "Healthcare Practice, Security & Malware Removal",
      avatarInitials: "OM",
      avatar: "/images/testimonials/avatar-3.jpg",
      gradient: "from-[#3FC7B0] to-emerald-500",
    },
    {
      stars: 5,
      quote:
        "We used to post whenever someone remembered to. Now we have an actual content calendar with real video content, and our engagement has noticeably picked up.",
      name: "Owner",
      role: "Hospitality Brand, Social Media Marketing",
      avatarInitials: "HB",
      avatar: "/images/testimonials/avatar-4.jpg",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      stars: 5,
      quote:
        "We stopped worrying about plugin updates and backups the day we signed up for maintenance. If something breaks, it's usually already fixed before we notice.",
      name: "Office Manager",
      role: "Multi-Location Business, Website Maintenance",
      avatarInitials: "MM",
      avatar: "/images/testimonials/avatar-5.jpg",
      gradient: "from-slate-500 to-slate-700",
    },
  ];

  return (
    <section
      className="py-12 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-y border-slate-100 relative overflow-hidden z-10"
      id="testimonials"
    >
      {/* Background Subtle Glow & Grid */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/5 via-amber-500/5 to-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        {/* Header Section with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-primary" />
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-josefin font-bold text-slate-900 leading-tight">
              What it's like to work with us.
            </h2>
          </div>

          {/* Social Proof & Navigation Controls */}
          <div className="flex items-center gap-6">
            {/* Rating Summary Badge */}
            <div className="hidden sm:flex items-center gap-2.5 bg-white border border-slate-200/80 shadow-sm rounded-full px-4 py-2 text-xs font-mono text-slate-700">
              <div className="flex items-center text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900 font-josefin text-sm">5.0</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">100% Satisfaction</span>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                aria-label="Previous slide"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/40 hover:shadow-md active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                aria-label="Next slide"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-primary hover:border-primary/40 hover:shadow-md active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="testimonials-swiper-container w-full max-w-full overflow-hidden py-4">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full group p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.12)] hover:border-primary/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">

                  {/* Decorative Subtle Background Quote */}
                  <Quote className="absolute top-4 right-6 w-20 h-20 text-slate-100 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none -z-0" />

                  <div className="relative z-10">
                    {/* Top Row: Stars & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: testi.stars }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>

                      {/* <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                      </span> */}
                    </div>

                    {/* Quote Text */}
                    <p className="font-josefin italic font-medium text-slate-700 text-[16px] sm:text-[17px] leading-relaxed mb-8">
                      "{testi.quote}"
                    </p>
                  </div>

                  {/* Author / Client Profile */}
                  <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100/80 mt-auto relative z-10">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-sm ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
                      <Image
                        src={testi.avatar}
                        alt={testi.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold font-josefin text-slate-900 text-base leading-snug">
                        {testi.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5 leading-snug">
                        {testi.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Slide Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperInstance?.slideToLoop(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === idx
                  ? "w-8 bg-primary"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
