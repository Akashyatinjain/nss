import React from "react";
import { Building2, Heart, Shield, Landmark, Globe, Activity } from "lucide-react";

export function PartnerStrip() {
  const partners = [
    { name: "Indian Red Cross Society", icon: <Heart className="w-5 h-5 text-red-500" />, type: "Blood Bank & Healthcare" },
    { name: "AIIMS Blood Transfusion Unit", icon: <Activity className="w-5 h-5 text-blue-500" />, type: "Clinical Partner" },
    { name: "Ministry of Youth Affairs & Sports", icon: <Landmark className="w-5 h-5 text-amber-500" />, type: "Sponsoring Ministry" },
    { name: "State Directorate of Environment", icon: <Globe className="w-5 h-5 text-emerald-500" />, type: "Forest & Ecology" },
    { name: "Municipal Development Corporation", icon: <Building2 className="w-5 h-5 text-indigo-500" />, type: "Urban Swachhata" },
    { name: "Unnat Bharat Abhiyan", icon: <Shield className="w-5 h-5 text-purple-500" />, type: "Rural Development" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400 font-heading">
            In Active Partnership With
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-nss-warm-white border border-slate-200/80 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-nss-red/30 hover:shadow-sm transition-all"
            >
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 mb-2 group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <span className="text-xs font-bold text-nss-navy font-heading line-clamp-1">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
