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
    <section className="py-20 lg:py-28 bg-white text-nss-dark-text relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honors & Recognition"
          title="Milestones of Excellence"
          subtitle="Honoring our volunteers' relentless dedication at national, state, and university forums."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-nss-soft-gray border border-slate-200 flex flex-col justify-between hover:bg-nss-blue-soft/60 hover:border-nss-red/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 group-hover:scale-110 transition-transform">
                    {iconMap[item.iconName] || <Trophy className="w-7 h-7 text-amber-500" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {item.year}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-nss-red mb-1">
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold font-heading text-nss-navy group-hover:text-nss-blue-accent transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs text-slate-500 mt-1 mb-3">
                  Issuer: <span className="text-slate-700">{item.issuer}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified University Citation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
          }
