"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible || !siteConfig.announcement.active) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-gradient-to-r from-nss-navy-dark via-nss-navy to-nss-blue-light text-white text-xs py-2 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1 bg-nss-red px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
            <Sparkles className="w-3 h-3 animate-spin-slow" />
            {siteConfig.announcement.badge}
          </span>
          <span className="font-medium text-slate-200 text-xs">
            {siteConfig.announcement.text}
          </span>
          <Link
            href={siteConfig.announcement.link}
            className="inline-flex items-center gap-1 font-semibold text-nss-red-bright hover:text-white underline underline-offset-2 transition-colors ml-1"
          >
            Register Now
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white transition-colors p-0.5 rounded"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
