"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/gallery/Lightbox";
import { MapPin, Calendar, ZoomIn, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function GalleryPreviewSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-bold text-nss-red uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nss-red" />
              Moments of Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-nss-navy tracking-tight">
              Action in Focus: Photo Gallery
            </h2>
          </div>
          <Button href="/gallery" variant="outline" size="md" showArrow>
            View Full Masonry Gallery
          </Button>
        </div>

        {/* 6 Grid Preview with Hover Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-slate-900 border border-slate-200"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-nss-navy-dark/40 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

              {/* Top Pill (Visible on hover) */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-nss-red text-white shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details (Visible on hover) */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-sm font-bold font-heading line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-nss-red-bright" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-nss-blue-light" />
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          items={previewItems}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
        />
      </div>
    </section>
  );
}
