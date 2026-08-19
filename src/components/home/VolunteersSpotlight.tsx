import React from "react";
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

export function VolunteersSpotlight() {
  const spotlightTeam = teamData.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white text-nss-dark-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-bold text-nss-red uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nss-red" />
              Youth Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-nss-navy tracking-tight">
              Driven by Students. Guided by Purpose.
            </h2>
          </div>
          <Button href="/team" variant="outline" size="md" showArrow>
            Meet Full NSS Council
          </Button>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightTeam.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-nss-warm-white border border-slate-200/80 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with zoom on hover */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-nss-navy text-white border border-white/20">
                      {member.category}
                    </span>
                  </div>

                  {/* Social links hover overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-nss-red transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-nss-red transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-nss-red-dark mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 truncate">
                    {member.department}
                  </div>
                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed font-body">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
