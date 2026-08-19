"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initiativesData } from "@/data/initiatives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MapPin, Users, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All",
  "Education",
  "Environment",
  "Blood Donation",
  "Women Empowerment",
  "Rural Development",
  "Sustainability",
];

export function InitiativesShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredInitiatives =
    activeFilter === "All"
      ? initiativesData
      : initiativesData.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Social Impact Wings"
          title="Our Transformative Initiatives"
          subtitle="Explore the long-term sustainable projects led by our student volunteers across education, healthcare, environment, and rural immersion."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none",
                activeFilter === category
                  ? "bg-nss-navy text-white shadow-md shadow-nss-navy/20 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInitiatives.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Card Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={item.thumbnailImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-nss-navy/90 backdrop-blur-md text-white border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-nss-red text-white">
                      {item.status}
                    </span>
                  </div>

                  {/* Bottom Impact Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span>{item.impactMetric}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-body">
                    {item.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 truncate max-w-[170px]">
                      <MapPin className="w-3.5 h-3.5 text-nss-red shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Users className="w-3.5 h-3.5 text-nss-blue shrink-0" />
                      <span>{item.volunteersInvolved} Vols</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={`/initiatives/${item.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-nss-soft-gray hover:bg-nss-navy hover:text-white text-nss-navy text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200"
                >
                  <span>Learn More & Impact Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button href="/initiatives" variant="secondary" size="lg" showArrow>
            Explore All Social Initiatives
          </Button>
        </div>
      </div>
    </section>
  );
}
