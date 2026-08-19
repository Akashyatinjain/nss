"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/types";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else if (currentIndex === 0) {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else if (currentIndex === items.length - 1) {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top Bar: Title & Close Button */}
      <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-white/15">
        <div>
          <span className="text-xs uppercase tracking-widest text-nss-red-bright font-bold font-heading">
            {currentItem.category} • {currentIndex + 1} / {items.length}
          </span>
          <h3 className="text-base sm:text-lg font-bold font-heading line-clamp-1">
            {currentItem.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-nss-red text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative w-full max-w-5xl flex-1 my-4 flex items-center justify-center">
        {/* Navigation Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-nss-red text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Photograph */}
        <div className="relative w-full h-[65vh] max-h-[700px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Navigation Next */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-nss-red text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-slate-200 font-body leading-relaxed flex-1">
          {currentItem.caption}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-nss-red-bright" />
            {currentItem.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-nss-blue-light" />
            {currentItem.date}
          </span>
        </div>
      </div>
    </div>
  );
}
