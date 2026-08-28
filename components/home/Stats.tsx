"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      end: 5.0,
      decimals: 1,
      prefix: "",
      suffix: "★",
      label: "Rated by clients",
      sub: "Google & Platform reviews",
    },
    {
      end: 140,
      decimals: 0,
      prefix: "+",
      suffix: "%",
      label: "Organic traffic in 6 months",
      sub: "Average for active SEO clients",
    },
    {
      end: 99.9,
      decimals: 1,
      prefix: "",
      suffix: "%",
      label: "Uptime on maintained sites",
      sub: "Monitored 24/7/365",
    },
    {
      end: 1,
      decimals: 0,
      prefix: "",
      suffix: " day",
      label: "Average response time",
      sub: "For all new quote inquiries",
    },
  ];

  return (
    <div className="py-12 border-y border-slate-100 bg-white relative z-10 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FCFDFD] border border-slate-100 text-center hover:border-primary/20 hover:shadow-sm hover:shadow-primary/5 transition-all duration-300 group"
            >
              <span className="block font-josefin text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                <CountUp
                  start={0}
                  end={stat.end}
                  decimals={stat.decimals}
                  duration={2.5}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
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

