import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { NssWheel, NssBadgeIcon } from "@/components/ui/NssWheel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  History,
  Compass,
  Award,
  Sparkles,
  CheckCircle2,
  Quote,
  Clock,
  Shield,
  Heart,
  Flag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About NSS | Philosophy, History & Symbolism",
  description:
    "Learn about the National Service Scheme history, Konark Sun Temple 24-spoke wheel symbolism, colors, and our college unit journey since 2014.",
};

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: "1969",
      title: "National Launch of NSS",
      desc: "Launched by the Government of India on 24th September 1969 across 37 universities during Mahatma Gandhi's birth centenary year.",
      badge: "Historical Genesis",
    },
    {
      year: "2014",
      title: "Unit 04 Established at Apex",
      desc: "Our college NSS Unit was formally chartered with an initial batch of 50 student volunteers dedicating 120 annual hours.",
      badge: "Campus Milestone",
    },
    {
      year: "2017",
      title: "First 7-Day Rural Special Camp",
      desc: "Adopted Sultanpur village, constructing rainwater pits and starting foundational numeracy drives for primary school children.",
      badge: "Grassroots Immersion",
    },
    {
      year: "2021",
      title: "Launch of Project Udaan & Bloodline",
      desc: "Institutionalized weekend STEM mentorship and 24/7 SOS blood dispatch network across 12 regional hospitals.",
      badge: "Flagship Wings",
    },
    {
      year: "2024",
      title: "Miyawaki Forest & Best Unit Trophy",
      desc: "Created 3 urban micro-forests with 6,200+ trees and received the University Rolling Trophy for social excellence.",
      badge: "State Recognition",
    },
    {
      year: "2026",
      title: "Building the Next Chapter",
      desc: "Expanding to 550+ active volunteers, digital literacy for senior citizens, and sustainable rural micro-enterprises.",
      badge: "Current Horizon",
    },
  ];

  const objectives = [
    "Understand the community in which volunteers work and their relation to it.",
    "Identify the needs and problems of the community and involve them in problem-solving processes.",
    "Develop among themselves a sense of social and civic responsibility.",
    "Utilize their knowledge in finding practical solutions to individual and community problems.",
    "Acquire leadership qualities and democratic attitudes through community living.",
    "Develop capacity to meet emergencies and natural disasters with calm organizational efficiency.",
    "Practice national integration and social harmony through selfless volunteerism.",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Header */}
      <section className="relative py-20 lg:py-28 bg-radial-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <NssWheel size={600} animate={true} color="gold" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <History className="w-3.5 h-3.5" />
              History • Symbolism • Mission
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              A Movement of Youth. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nss-red-bright via-orange-400 to-amber-300">
                A Lifetime of Service.
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 font-light leading-relaxed font-body">
              Discover the profound heritage of the National Service Scheme, the architectural meaning behind the Konark Sun Chariot Wheel badge, and how our student unit creates measurable grassroot change.
            </p>
          </div>
        </div>
      </section>

      {/* Symbolism & Badge Deep Dive */}
      <section className="py-20 lg:py-24 bg-white text-nss-dark-text border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sacred Iconography"
            title="The Symbolism of the NSS Badge"
            subtitle="Every spoke, curve, and color in the official NSS emblem carries profound national and philosophical significance."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Center Emblem Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-nss-warm-white border border-slate-200 text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-nss-navy to-nss-blue flex items-center justify-center border-4 border-nss-red shadow-2xl relative overflow-hidden">
                  <NssWheel size={220} animate={false} color="white" opacity={0.9} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-nss-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  24 Spoke Wheel
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading text-nss-navy">
                The Konark Sun Temple Chariot Wheel
              </h3>
              <p className="text-xs text-slate-600 mt-2 max-w-sm leading-relaxed">
                Adapted from the world-heritage Konark Sun Temple in Odisha, representing relentless progress, time, and service without pause.
              </p>
            </div>

            {/* Explanatory Cards (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-nss-warm-white border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-nss-blue text-white shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-nss-navy">
                      The 24 Spokes — 24 Hours of Continuous Readiness
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The 24 spokes signify the 24 hours of the day. It reminds the volunteer to be prepared for the service of the nation round the clock—whether in disaster response, blood emergencies, or community upliftment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-nss-warm-white border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-nss-navy text-white shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-nss-navy">
                      Navy Blue Color — The Vast Cosmos & Selfless Service
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The deep Navy Blue color represents the vastness of the cosmos, reminding volunteers that their individual contribution is part of a larger universal humanitarian mission for the welfare of mankind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-nss-warm-white border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-nss-red text-white shrink-0 mt-0.5">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-nss-navy">
                      Red Color — Youth Energy, Passion & Sacrifice
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      The vibrant NSS Red color signifies the boundless energy, high spirits, courage, and self-sacrificing passion of Indian youth dedicating their formative years to societal progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message (Programme Officer & Principal) */}
      <section className="py-20 lg:py-24 bg-nss-warm-white text-nss-dark-text border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Message"
            title="Voices from the Programme Office"
            subtitle="Guiding principles from our mentors steering the NSS Unit toward national excellence."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative">
              <Quote className="w-10 h-10 text-nss-navy/10 absolute top-6 right-6" />
              <div className="text-xs font-bold text-nss-red uppercase tracking-wider mb-2">
                Programme Officer&apos;s Desk
              </div>
              <h3 className="text-xl font-bold font-heading text-nss-navy mb-4">
                &ldquo;Service is the purest form of education.&rdquo;
              </h3>
              <p className="text-sm text-slate-600 font-serif italic leading-relaxed mb-6">
                When students enter a village, they don&apos;t just teach—they learn humility, fortitude, and resourcefulness from people who thrive despite immense constraints. The transformation in our volunteers is the true measure of our success.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-nss-navy text-white font-bold flex items-center justify-center text-sm">
                  RS
                </div>
                <div>
                  <div className="text-sm font-bold text-nss-navy">Dr. Rajeshwar Sharma</div>
                  <div className="text-xs text-slate-500">Programme Officer, NSS Cell</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative">
              <Quote className="w-10 h-10 text-nss-navy/10 absolute top-6 right-6" />
              <div className="text-xs font-bold text-nss-blue uppercase tracking-wider mb-2">
                Principal & Patron&apos;s Vision
              </div>
              <h3 className="text-xl font-bold font-heading text-nss-navy mb-4">
                &ldquo;Engineers with a Conscience.&rdquo;
              </h3>
              <p className="text-sm text-slate-600 font-serif italic leading-relaxed mb-6">
                Technical prowess is hollow if it is divorced from social reality. Our NSS unit ensures that our graduates enter the world not just as skilled professionals, but as empathetic citizens committed to national building and ethical leadership.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-nss-blue text-white font-bold flex items-center justify-center text-sm">
                  PK
                </div>
                <div>
                  <div className="text-sm font-bold text-nss-navy">Prof. (Dr.) P. K. Srivastava</div>
                  <div className="text-xs text-slate-500">Director & Patron, Apex Institute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline of Unit Journey */}
      <section className="py-20 lg:py-24 bg-white text-nss-dark-text border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Trajectory"
            title="The Journey of Service"
            subtitle="A chronological evolution from an inaugural batch of 50 students to one of the most decorated university NSS units."
            align="center"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 sm:-translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {timelineMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6`}
                  >
                    {/* Center Node Badge */}
                    <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-nss-navy border-4 border-white shadow-md flex items-center justify-center z-10">
                      <span className="w-2 h-2 rounded-full bg-nss-red" />
                    </div>

                    {/* Content Box */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        isEven ? "sm:pl-10 text-left" : "sm:pr-10 sm:text-right"
                      }`}
                    >
                      <div className="p-6 rounded-2xl bg-nss-warm-white border border-slate-200 hover:border-nss-red/30 transition-all shadow-sm">
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? "justify-start" : "sm:justify-end"}`}>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-nss-navy text-white">
                            {milestone.year}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-nss-red">
                            {milestone.badge}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold font-heading text-nss-navy">
                          {milestone.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-body">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Official NSS Objectives */}
      <section className="py-20 lg:py-24 bg-nss-navy text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeading
            badge="Official Framework"
            title="Core Objectives of NSS"
            subtitle="Mandated by the Ministry of Youth Affairs & Sports for all university volunteer contingents."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-nss-red-bright shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                  {obj}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/join" variant="primary" size="xl" showArrow>
              Pledge to Serve — Join NSS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
