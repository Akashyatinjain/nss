"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { GalleryCategory, GalleryItem } from "@/types";
import { Lightbox } from "@/components/gallery/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, ZoomIn, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Special Camps",
  "Blood Donation",
  "Tree Plantation",
  "Education Drives",
  "Awareness Rallies",
  "Cleanliness Drives",
  "Community Visits",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Camera className="w-3.5 h-3.5" />
              Visual Archive
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Action in Focus: Photo Gallery
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              A vibrant photographic chronicle of our volunteers digging canals, planting saplings, screening patients, and mentoring young minds across our adopted villages and urban drives.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Tabs Bar */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none",
                  activeCategory === cat
                    ? "bg-nss-navy text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Grid Photo Gallery */}
      <section className="py-16 sm:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 text-xs text-slate-500 font-heading font-bold uppercase tracking-wider">
            <span>Showing {filteredItems.length} Photographs</span>
            <span>Click any image to expand fullscreen</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-slate-900 border border-slate-200 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark Hover Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-nss-navy-dark/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-between text-white" />

                {/* Top Category Pill */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-nss-red text-white shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Details (Visible on hover) */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-sm sm:text-base font-bold font-heading line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-nss-red-bright" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-nss-blue-light" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
      />
    </div>
  );
}
