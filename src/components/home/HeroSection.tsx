"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { NssWheel } from "@/components/ui/NssWheel";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Sparkles, HeartHandshake, ShieldCheck, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center bg-nss-warm-white text-nss-dark-text overflow-hidden pt-12 pb-20">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      {/* Decorative Large NSS Wheel in Background */}
      <div className="absolute -right-24 md:-right-10 lg:right-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 lg:opacity-25 scale-125 lg:scale-150">
        <NssWheel size={680} animate={true} color="gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* National Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nss-red/10 backdrop-blur-md border border-nss-red/20 text-xs font-semibold tracking-widest uppercase mb-6 text-nss-red shadow-sm animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-nss-red" />
              <span>National Service Scheme • {siteConfig.unitCode}</span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] text-nss-navy">
              <span className="block text-slate-500 font-light text-2xl sm:text-4xl md:text-5xl mb-1 tracking-normal">
                Students Who Serve.
              </span>
              NOT ME.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nss-red via-nss-red-bright to-nss-blue-accent">
                BUT YOU.
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-body leading-relaxed max-w-2xl font-light">
              Empowering youth to turn knowledge into compassionate grassroots action. We build sustainable villages, organize life-saving blood banks, protect ecosystems, and inspire ethical leadership.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="/join"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto shadow-glow-red font-bold uppercase tracking-wider text-sm"
              >
                Join the Movement
              </Button>

              <Button
                href="/initiatives"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto font-semibold text-sm"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="p-1.5 sm:p-2 rounded-lg bg-nss-red/10 text-nss-red border border-nss-red/10 shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-nss-navy font-heading">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">Voluntary</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="p-1.5 sm:p-2 rounded-lg bg-nss-blue-soft text-nss-blue-accent border border-nss-blue-accent/10 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-nss-navy font-heading">10+ Yrs</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">Impact</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="p-1.5 sm:p-2 rounded-lg bg-nss-blue-soft text-nss-blue-accent border border-nss-blue-accent/10 shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-nss-navy font-heading">550+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">Volunteers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Immersive Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Framing & Gradient Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-nss-red via-nss-blue to-amber-500 opacity-40 blur-lg" />

              {/* Main Photograph Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-nss-navy-dark aspect-[4/5] sm:aspect-[4/4.5] group">
                <Image
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80"
                  alt="NSS student volunteers collaborating in rural community village drive"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-nss-navy-dark/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Floating Bottom Card Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-nss-red/90 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3" />
                    Special Rural Camp
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    Shramdaan & Community Building
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    80 volunteers renovating community pathways and conducting free medical surveys in adopted village Sultanpur.
                  </p>
                </div>
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-nss-navy/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-glass-lg hidden sm:flex items-center gap-3 animate-float-slow">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nss-red to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  28K+
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Lives Reached</div>
                  <div className="text-[10px] text-slate-300">Across 3 Adopted Villages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-nss-navy transition-colors pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-nss-red-bright" />
      </div>
    </section>
  );
}
