"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Users, Compass, HeartHandshake, Calendar, Clock, TreePine, Droplet } from "lucide-react";

interface StatItem {
  id: string;
  number: string;
  targetNum: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export function ImpactStats() {
  const stats: StatItem[] = [
    {
      id: "volunteers",
      number: "550+",
      targetNum: 550,
      suffix: "+",
      label: "Active Volunteers",
      description: "Dedicated student changemakers",
      icon: <Users className="w-6 h-6 text-nss-red-bright" />,
    },
    {
      id: "initiatives",
      number: "48+",
      targetNum: 48,
      suffix: "+",
      label: "Community Initiatives",
      description: "Across health, education & eco",
      icon: <Compass className="w-6 h-6 text-amber-400" />,
    },
    {
      id: "lives",
      number: "28.5K+",
      targetNum: 28,
      suffix: "K+",
      label: "Lives Touched",
      description: "In adopted rural and urban hubs",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "hours",
      number: "18,000+",
      targetNum: 18,
      suffix: "K+",
      label: "Service Hours",
      description: "Logged in grassroots community action",
      icon: <Clock className="w-6 h-6 text-sky-400" />,
    },
    {
      id: "blood",
      number: "2,400+",
      targetNum: 2400,
      suffix: "+",
      label: "Blood Units Donated",
      description: "Life-saving support to hospitals",
      icon: <Droplet className="w-6 h-6 text-rose-500" />,
    },
    {
      id: "trees",
      number: "6,200+",
      targetNum: 6200,
      suffix: "+",
      label: "Native Trees Planted",
      description: "With 92% tracked survival rate",
      icon: <TreePine className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-nss-dark-text py-16 sm:py-20 border-y border-slate-200/80 overflow-hidden"
    >
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,242,250,0.6)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-semibold uppercase tracking-widest text-nss-red mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nss-red" />
              Measurable Social Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-nss-navy tracking-tight">
              Action in Numbers. Impact in Lives.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md font-body">
            Over a decade of relentless student volunteerism turning empathy into measurable community progress.
          </p>
        </div>

        {/* 6 Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="relative p-5 rounded-2xl bg-nss-soft-gray border border-slate-200 hover:border-nss-red/40 hover:bg-nss-blue-soft/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 w-fit mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight text-nss-navy group-hover:text-nss-red-bright transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 font-heading">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-light leading-snug">
                  {stat.description}
                </div>
              </div>

              {/* Accent bottom line */}
              <div className="w-8 h-0.5 bg-nss-blue group-hover:bg-nss-red group-hover:w-full transition-all duration-300 mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
      }
    {
      id: "lives",
      number: "28.5K+",
      targetNum: 28,
      suffix: "K+",
      label: "Lives Touched",
      description: "In adopted rural and urban hubs",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-400" />,
    },
    {
      id: "hours",
      number: "18,000+",
      targetNum: 18,
      suffix: "K+",
      label: "Service Hours",
      description: "Logged in grassroots community action",
      icon: <Clock className="w-6 h-6 text-sky-400" />,
    },
    {
      id: "blood",
      number: "2,400+",
      targetNum: 2400,
      suffix: "+",
      label: "Blood Units Donated",
      description: "Life-saving support to hospitals",
      icon: <Droplet className="w-6 h-6 text-rose-500" />,
    },
    {
      id: "trees",
      number: "6,200+",
      targetNum: 6200,
      suffix: "+",
      label: "Native Trees Planted",
      description: "With 92% tracked survival rate",
      icon: <TreePine className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-nss-navy-dark text-white py-16 sm:py-20 border-y border-white/10 overflow-hidden"
    >
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(18,59,99,0.3)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-semibold uppercase tracking-widest text-red-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nss-red" />
              Measurable Social Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Action in Numbers. Impact in Lives.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-body">
            Over a decade of relentless student volunteerism turning empathy into measurable community progress.
          </p>
        </div>

        {/* 6 Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-nss-red/50 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight text-white group-hover:text-nss-red-bright transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1 font-heading">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-light leading-snug">
                  {stat.description}
                </div>
              </div>

              {/* Accent bottom line */}
              <div className="w-8 h-0.5 bg-nss-blue group-hover:bg-nss-red group-hover:w-full transition-all duration-300 mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
