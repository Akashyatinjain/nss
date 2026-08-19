import React from "react";
import Image from "next/image";
import { impactStoriesData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Sparkles, MapPin, Calendar, HeartHandshake } from "lucide-react";

export function ImpactStoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-nss-navy text-white relative overflow-hidden">
      {/* Background Radial Texture */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Voices of Change"
          title="Stories That Matter"
          subtitle="Real accounts of empathy, community resilience, and transformative student experiences on the ground."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {impactStoriesData.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl bg-white/5 border border-white/15 overflow-hidden flex flex-col justify-between hover:bg-white/10 hover:border-nss-red/40 transition-all duration-300 group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nss-navy via-nss-navy/40 to-transparent" />

                  {/* Impact Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-nss-red text-white shadow-md flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      {story.impactMetric}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-nss-red-bright" />
                      {story.location}
                    </span>
                    <span>{story.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-red-300 transition-colors">
                    {story.title}
                  </h3>

                  {/* Quote Box */}
                  <div className="my-4 p-4 rounded-xl bg-white/5 border border-white/10 relative">
                    <Quote className="w-5 h-5 text-nss-red-bright/40 mb-1" />
                    <p className="text-xs sm:text-sm italic text-slate-200 font-serif leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed line-clamp-4">
                    {story.story}
                  </p>
                </div>
              </div>

              {/* Author Strip */}
              <div className="px-6 pb-6 pt-0 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-white font-heading">{story.personName}</span>
                <span className="text-slate-400">{story.personRole}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
