"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initiativesData } from "@/data/initiatives";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Search,
  MapPin,
  Users,
  Clock,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Education",
  "Environment",
  "Blood Donation",
  "Women Empowerment",
  "Rural Development",
  "Sustainability",
];

export default function InitiativesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = initiativesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Compass className="w-3.5 h-3.5" />
              Social Impact Spectrum
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Our Community Initiatives
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              Long-term, evidence-backed student campaigns driving transformative change across education, public health, climate resilience, and village development.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-nss-red"
                />
              </div>

              {/* Category Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
                      selectedCategory === cat
                        ? "bg-nss-red text-white shadow-sm"
                        : "bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Directory Grid */}
      <section className="py-20 bg-nss-warm-white text-nss-dark-text min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
              Showing {filteredList.length} of {initiativesData.length} Initiatives
            </div>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-semibold text-nss-red hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredList.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <Compass className="w-12 h-12 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-nss-navy">No initiatives found</h3>
              <p className="text-xs text-slate-500 mt-1">Try refining your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-nss-navy text-white text-xs font-bold"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Banner Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={item.thumbnailImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-nss-navy/90 backdrop-blur-md text-white border border-white/20">
                          {item.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-nss-red text-white">
                          {item.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          <span>{item.impactMetric}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-body">
                        {item.shortDescription}
                      </p>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 truncate max-w-[180px]">
                            <MapPin className="w-3.5 h-3.5 text-nss-red shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
                            <Users className="w-3.5 h-3.5 text-nss-blue shrink-0" />
                            <span>{item.volunteersInvolved} Volunteers</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{item.hoursDedicated.toLocaleString()} Hours Logged</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/initiatives/${item.slug}`}
                      className="w-full py-3 px-4 rounded-xl bg-nss-soft-gray hover:bg-nss-navy hover:text-white text-nss-navy text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Explore Project & Outcomes</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
