import React from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Sparkles } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-nss-warm-white text-nss-dark-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Community Testimonials"
          title="Why We Serve"
          subtitle="Reflections from village elders, hospital directors, passionate volunteers, and alumni on the lasting ripple of our service."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-card-hover hover:border-nss-red/30 transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-nss-red/15 absolute top-6 right-6" />

              <div>
                {item.initiativeInvolved && (
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-nss-blue/10 text-nss-blue mb-4">
                    {item.initiativeInvolved}
                  </span>
                )}

                <p className="text-base sm:text-lg text-slate-700 font-serif italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-nss-red/30 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-nss-navy">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role}
                  </p>
                  <span className="text-[10px] text-nss-red font-bold uppercase tracking-wider">
                    {item.association}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
