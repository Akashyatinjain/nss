import React from "react";
import { achievementsData } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Award, HeartPulse, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

export function AchievementsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-7 h-7 text-amber-400" />,
    Award: <Award className="w-7 h-7 text-nss-red-bright" />,
    HeartPulse: <HeartPulse className="w-7 h-7 text-rose-400" />,
    Leaf: <Leaf className="w-7 h-7 text-emerald-400" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-nss-navy text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honors & Recognition"
          title="Milestones of Excellence"
          subtitle="Honoring our volunteers' relentless dedication at national, state, and university forums."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 group-hover:scale-110 transition-transform">
                    {iconMap[item.iconName] || <Trophy className="w-7 h-7 text-amber-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300/90 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {item.year}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-nss-red-bright mb-1">
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs text-slate-400 mt-1 mb-3">
                  Issuer: <span className="text-slate-200">{item.issuer}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified University Citation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
