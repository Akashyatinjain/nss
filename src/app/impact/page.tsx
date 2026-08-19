"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { sdgGoalsData, annualReports } from "@/data/impact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  HeartHandshake,
  Users,
  Clock,
  Droplet,
  TreePine,
  GraduationCap,
  Globe,
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";



export default function ImpactPage() {
  const quantitativeMetrics = [
    {
      title: "28,500+",
      label: "Total Lives Touched",
      desc: "Across 3 adopted rural villages and 8 municipal school clusters.",
      icon: <Globe className="w-6 h-6 text-sky-400" />,
    },
    {
      title: "18,000+",
      label: "Service Hours Logged",
      desc: "Strictly tracked through university biometric and field attendance logs.",
      icon: <Clock className="w-6 h-6 text-amber-400" />,
    },
    {
      title: "2,400+",
      label: "Units of Blood Donated",
      desc: "100% voluntary non-remunerated donations directly supporting trauma and pediatric wards.",
      icon: <Droplet className="w-6 h-6 text-rose-400" />,
    },
    {
      title: "6,200+",
      label: "Native Trees Planted",
      desc: "Using the Miyawaki afforestation method with 92% tracked survival rate.",
      icon: <TreePine className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "1,200+",
      label: "Children Mentored in STEM",
      desc: "Project Udaan weekend remedial tutoring in mathematics and digital literacy.",
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "14+ Tons",
      label: "Plastic Debris Recycled",
      desc: "Plog-runs along riverfronts and community garbage vulnerable point transformations.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text">
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              Evidence-Based Social Return
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Measurable Social Impact Dashboard
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              We believe in rigorous accountability. Every sapling planted, unit of blood collected, and hour of remedial teaching is logged, audited, and aligned with global sustainable development goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quantitative Metric Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Audited Statistics"
            title="A Decade of Grassroots Transformation"
            subtitle="Quantitative outcomes verified by University Authorities and Partner District Organizations."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {quantitativeMetrics.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-nss-warm-white border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-nss-red/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-nss-navy text-white w-fit mb-5 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-nss-navy tracking-tight">
                    {item.title}
                  </div>
                  <div className="text-sm font-bold text-nss-red-dark mt-1 font-heading">
                    {item.label}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals (SDGs) Section */}
      <section className="py-20 lg:py-24 bg-nss-warm-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="United Nations Global Framework"
            title="Aligned with UN Sustainable Development Goals"
            subtitle="How our local student drives contribute directly to global targets for 2030."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoalsData.map((sdg) => (
              <div
                key={sdg.number}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl text-white font-extrabold font-heading text-lg flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: sdg.color }}
                  >
                    #{sdg.number}
                  </div>

                  <h3 className="text-base font-bold font-heading text-nss-navy">
                    {sdg.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 italic">
                    {sdg.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-nss-navy font-heading mb-1">
                      Our Contribution:
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-body">
                      {sdg.ourContribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Annual Reports */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Transparency & Audits"
            title="Annual Social Impact Reports"
            subtitle="Download comprehensive PDF activity summaries, financial audits, and village progress reports."
            align="center"
          />

          <div className="flex flex-col gap-4 mt-8">
            {annualReports.map((report, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-nss-warm-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-nss-blue transition-colors shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-nss-navy text-white shrink-0 mt-0.5">
                    <FileText className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-nss-navy text-white">
                        {report.year}
                      </span>
                      <span className="text-xs text-slate-500">
                        {report.pages} Pages • {report.fileSize} PDF
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-heading text-nss-navy mt-1">
                      {report.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Highlights: {report.highlights}
                    </p>
                  </div>
                </div>

                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Downloading ${report.title} (${report.year})`);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-nss-navy hover:text-white text-nss-navy text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
