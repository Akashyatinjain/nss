"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible || !siteConfig.announcement.active) return null;

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-gradient-to-r from-nss-navy-dark via-nss-navy to-nss-blue-light text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1 bg-nss-red px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shrink-0">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin-slow" />
            {siteConfig.announcement.badge}
          </span>
          <span className="font-medium text-slate-200 text-[11px] sm:text-xs line-clamp-1 sm:line-clamp-none">
            {siteConfig.announcement.text}
          </span>
          <Link
            href={siteConfig.announcement.link}
            className="inline-flex items-center gap-1 font-semibold text-nss-red-bright hover:text-white underline underline-offset-2 transition-colors ml-0.5 shrink-0"
          >
            Register Now
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
