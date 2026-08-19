import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { NssWheel, NssBadgeIcon } from "@/components/ui/NssWheel";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Award, History, Compass, ArrowRight } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      title: "Launched in 1969",
      desc: "Inaugurated during Mahatma Gandhi's birth centenary to link student youth directly with community nation-building.",
    },
    {
      title: "Motto: NOT ME BUT YOU",
      desc: "Reflecting the essence of democratic living and the belief that the welfare of the individual depends upon the welfare of society.",
    },
    {
      title: "The Konark Wheel Symbol",
      desc: "Inspired by the 24 spokes of the chariot wheel of the Konark Sun Temple, symbolizing continuous movement and 24 hours of service.",
    },
    {
      title: "Character Through Service",
      desc: "Developing student personality, administrative leadership, and social empathy through real voluntary work.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Imagery (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-bold text-nss-red uppercase tracking-widest mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-nss-red" />
              About National Service Scheme
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-nss-navy tracking-tight leading-tight">
              More Than Volunteering. <br />
              <span className="text-nss-red">It's a Responsibility.</span>
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed font-body text-base">
              The National Service Scheme (NSS) is a flagship community service programme run under the aegis of the <strong>Ministry of Youth Affairs & Sports, Government of India</strong>.
            </p>

            <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="NSS volunteers mentoring children in rural school"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nss-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  {siteConfig.collegeName}
                </div>
                <div className="text-sm font-bold mt-0.5">
                  Over 10 Years of Continuous Grassroots Leadership
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: NSS Philosophy & 4 Core Tenets (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Philosophy Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-glass relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nss-blue-soft rounded-bl-full -z-0 opacity-50" />
              
              <div className="relative z-10 flex items-start gap-4">
                <NssBadgeIcon className="w-12 h-12 shrink-0 mt-1" />
                <div>
                  <div className="text-xs font-bold text-nss-red uppercase tracking-wider">
                    The NSS Philosophy
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-nss-navy mt-1">
                    “NOT ME BUT YOU”
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    This timeless motto underscores that a student is not an isolated consumer of education, but an integral builder of society. By understanding community problems, our volunteers cultivate genuine empathy, civic responsibility, and selfless leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Detailed Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-nss-blue/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-nss-navy font-bold text-sm font-heading mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-nss-red shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/about" variant="secondary" showArrow size="md">
                Learn Full NSS History & Badges
              </Button>

              <Link
                href="/initiatives"
                className="text-sm font-semibold text-nss-navy hover:text-nss-red transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Our Community Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
