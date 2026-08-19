"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { eventsData } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import { formatDate, cn } from "@/lib/utils";

function EventsContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "past" ? "past" : "upcoming";

  const [activeTab, setActiveTab] = useState<"upcoming" | "past">(initialTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Blood Donation",
    "Rural Development",
    "Environment",
    "Awareness Campaigns",
    "Sustainability",
    "Community Outreach",
  ];

  const filteredEvents = eventsData.filter((item) => {
    const matchesTab =
      activeTab === "upcoming"
        ? item.status === "Upcoming"
        : item.status === "Completed";

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Calendar className="w-3.5 h-3.5" />
              Community Calendar & Drives
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Events, Camps & Service Drives
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              Participate in upcoming on-ground volunteer camps, register for blood drives, or review the archival records of our past community achievements.
            </p>
          </div>

          {/* Tab Switch & Search Bar */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Tab Pills */}
              <div className="flex items-center p-1 bg-black/30 rounded-xl w-full md:w-auto">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={cn(
                    "flex-1 md:flex-none px-5 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all",
                    activeTab === "upcoming"
                      ? "bg-nss-red text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  Upcoming Drives ({eventsData.filter((e) => e.status === "Upcoming").length})
                </button>
                <button
                  onClick={() => setActiveTab("past")}
                  className={cn(
                    "flex-1 md:flex-none px-5 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all",
                    activeTab === "past"
                      ? "bg-nss-navy text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  Past Archive ({eventsData.filter((e) => e.status === "Completed").length})
                </button>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search drives or venue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-nss-red"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Chips Bar */}
      <section className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
              Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors",
                  selectedCategory === cat
                    ? "bg-nss-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 sm:py-20 bg-nss-warm-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <Calendar className="w-12 h-12 text-slate-400 mb-3" />
              <h3 className="text-lg font-bold text-nss-navy">No drives found</h3>
              <p className="text-xs text-slate-500 mt-1">Try switching tabs or resetting your search filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-nss-navy text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Banner Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={event.bannerImage}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      {/* Calendar Date Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-nss-navy rounded-xl p-2 shadow-md border border-white/40 text-center min-w-[54px]">
                        <div className="text-[10px] font-bold uppercase text-nss-red">
                          {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                        </div>
                        <div className="text-lg font-extrabold font-heading leading-none text-nss-navy">
                          {new Date(event.date).getDate()}
                        </div>
                      </div>

                      {/* Status / Flagship Pill */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {event.isFlagship && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-nss-red text-white shadow-md">
                            Flagship
                          </span>
                        )}
                        <span
                          className={cn(
                            "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                            event.status === "Upcoming" ? "bg-emerald-600" : "bg-slate-700"
                          )}
                        >
                          {event.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-body">
                        {event.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-nss-blue shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 truncate">
                          <MapPin className="w-3.5 h-3.5 text-nss-red shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 flex items-center gap-2">
                    <Link
                      href={`/events/${event.slug}`}
                      className="flex-1 py-3 px-3 rounded-xl bg-nss-navy text-white hover:bg-nss-navy-light text-xs font-bold uppercase tracking-wider text-center transition-colors"
                    >
                      View Details
                    </Link>
                    {event.registrationOpen && (
                      <Link
                        href={`/events/${event.slug}#register`}
                        className="py-3 px-4 rounded-xl bg-nss-red hover:bg-nss-red-bright text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        Register
                      </Link>
                    )}
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

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-nss-navy flex items-center justify-center text-white">Loading Events...</div>}>
      <EventsContent />
    </Suspense>
  );
}
