import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Heart,
  Users,
  Wrench,
  ShieldAlert,
  Sparkles,
  Flag,
  ArrowUpRight,
} from "lucide-react";

export function WhyNssSection() {
  const cards = [
    {
      title: "Community First",
      description: "Stepping beyond lecture halls to listen, understand, and solve real issues faced by neighboring villages and urban slums.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      colorClass: "hover:border-rose-300 hover:bg-rose-50/30",
      accentBg: "bg-rose-50 text-rose-600",
    },
    {
      title: "Youth Leadership",
      description: "Managing large-scale logistics, crisis mitigation, district administration tie-ups, and budget handling at a young age.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      colorClass: "hover:border-amber-300 hover:bg-amber-50/30",
      accentBg: "bg-amber-50 text-amber-600",
    },
    {
      title: "Real-World Action",
      description: "Applying engineering, technology, and management skills directly to test groundwater, install solar lights, and teach STEM.",
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      colorClass: "hover:border-blue-300 hover:bg-blue-50/30",
      accentBg: "bg-blue-50 text-blue-600",
    },
    {
      title: "Social Responsibility",
      description: "Cultivating lifelong civic conscience, ethical empathy, and standing with vulnerable populations in times of crisis.",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-500" />,
      colorClass: "hover:border-emerald-300 hover:bg-emerald-50/30",
      accentBg: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Collaborative Teamwork",
      description: "Learning to bridge interdisciplinary differences, unite diverse departments, and work with single-minded purpose.",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      colorClass: "hover:border-indigo-300 hover:bg-indigo-50/30",
      accentBg: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "National Integration",
      description: "Fostering unity across diverse linguistic, regional, and economic backgrounds through national camps and RD parades.",
      icon: <Flag className="w-6 h-6 text-red-500" />,
      colorClass: "hover:border-red-300 hover:bg-red-50/30",
      accentBg: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white text-nss-dark-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Pillars"
          title="Why Join the National Service Scheme?"
          subtitle="Transforming student potential into real-world social change, personal character, and civic leadership."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 sm:p-7 rounded-2xl bg-nss-warm-white border border-slate-200/90 shadow-sm transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-card-hover ${card.colorClass}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl ${card.accentBg} transition-transform duration-300 group-hover:scale-110`}>
                  {card.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-nss-red transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="text-xl font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors">
                {card.title}
              </h3>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-body">
                {card.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-nss-navy transition-colors">
                <span>0{index + 1}</span>
                <span className="h-0.5 w-6 bg-slate-300 group-hover:bg-nss-red transition-colors" />
                <span>NSS Value</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
