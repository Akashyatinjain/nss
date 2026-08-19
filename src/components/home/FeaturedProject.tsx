import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Sparkles, Users, Clock, Leaf, Target, MapPin, Check } from "lucide-react";

export function FeaturedProject() {
  return (
    <section className="py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200 shadow-glass-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Col: Flagship Editorial Spotlight (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                Featured Flagship Initiative
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-nss-navy tracking-tight leading-tight">
                PROJECT HARIT: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Miyawaki Urban Forests
                </span>
              </h2>

              <p className="mt-5 text-slate-600 text-base leading-relaxed font-body font-light">
                Turning barren institutional and riverbank zones into dense, self-sustaining native biodiverse forests. Using Japan&apos;s Miyawaki methodology, our saplings grow 10x faster and absorb 30x more carbon dioxide than conventional plantations.
              </p>

              {/* Live Metric Progress Bars */}
              <div className="mt-8 w-full flex flex-col gap-4 p-5 rounded-2xl bg-nss-soft-gray border border-slate-200">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-emerald-600" />
                      Annual Afforestation Target (6,200 / 7,000 Saplings)
                    </span>
                    <span className="text-emerald-600 font-bold font-mono">88.5% Completed</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[88.5%]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center border-t border-slate-200">
                  <div>
                    <div className="text-xl font-bold text-nss-navy font-heading">6,200+</div>
                    <div className="text-[11px] text-slate-500">Trees Planted</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-emerald-600 font-heading">92%</div>
                    <div className="text-[11px] text-slate-500">Survival Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-nss-navy font-heading">140+</div>
                    <div className="text-[11px] text-slate-500">Volunteers Active</div>
                  </div>
                </div>
              </div>

              {/* Key Highlights Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Geo-tagged sapling foster care system</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% native resilient indigenous species</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rainwater harvesting drip pits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Partnership with State Forest Dept</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href="/initiatives/project-harit-environment"
                  variant="primary"
                  size="md"
                  showArrow
                  className="bg-emerald-600 hover:bg-emerald-500 border-emerald-400/30 text-white font-semibold"
                >
                  View Full Project Details
                </Button>
                <Link
                  href="/initiatives"
                  className="text-sm font-semibold text-slate-600 hover:text-nss-navy transition-colors"
                >
                  Explore All 8 Initiatives →
                </Link>
              </div>
            </div>

            {/* Right Col: High Res Visual Showcase (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-slate-200 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Miyawaki urban forest plantation by NSS student volunteers"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-nss-navy/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold">North Campus Eco Zone & Floodplain</div>
                      <div className="text-[10px] text-slate-400">3 Dense Micro-Forests Created</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
