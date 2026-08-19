import React from "react";
import { NssWheel } from "@/components/ui/NssWheel";
import { Button } from "@/components/ui/Button";
import { Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";

export function JoinCtaSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text overflow-hidden border-t border-slate-200/80">
      {/* Decorative Rotating NSS Wheels */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <NssWheel size={500} animate={true} color="gold" />
      </div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <NssWheel size={500} animate={true} reverse={true} color="red" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-bold uppercase tracking-widest text-nss-red mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Enrollment Open For All Branches & Years
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-nss-navy leading-tight">
          READY TO SERVE?
        </h2>

        <p className="mt-4 text-xl sm:text-2xl text-slate-600 font-serif italic max-w-2xl mx-auto">
          “Your time. Your skills. Your community.”
        </p>

        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-body">
          Join over 550+ active student volunteers making measurable impact across health, education, environment, and village development.
        </p>

        {/* Highlight Perks Checklist */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Official University NSS Merit Certificate</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Eligible for National RD Parade</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Transformative 7-Day Rural Camp</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/join"
            variant="primary"
            size="xl"
            showArrow
            className="shadow-glow-red font-bold uppercase tracking-wider text-sm sm:text-base"
          >
            Become a Volunteer
          </Button>

          <Button
            href="/contact"
            variant="outline"
            size="xl"
            className="font-semibold text-sm sm:text-base"
          >
            Contact NSS Cell
          </Button>
        </div>
      </div>
    </section>
  );
}
