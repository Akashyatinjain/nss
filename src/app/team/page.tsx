"use client";

import React, { useState } from "react";
import Image from "next/image";
import { teamData } from "@/data/team";
import { TeamRoleCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Users, Mail, Sparkles, Quote, Search } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const ROLE_CATEGORIES = [
  "All",
  "Programme Officer",
  "Faculty Coordinator",
  "Executive Committee",
  "Domain Lead",
  "Active Volunteer",
];

export default function TeamPage() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamData.filter((member) => {
    const matchesRole =
      selectedRole === "All" || member.category === selectedRole;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Users className="w-3.5 h-3.5" />
              Leadership & Volunteers
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              The People Behind the Movement
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              Meet our dedicated Programme Officers, faculty advisors, student executive council, and domain leads steering our community drives with empathy and operational excellence.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-nss-red"
                />
              </div>

              {/* Role Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 md:pb-0 no-scrollbar">
                {ROLE_CATEGORIES.map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors",
                      selectedRole === role
                        ? "bg-nss-red text-white shadow-sm"
                        : "bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10"
                    )}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="py-16 sm:py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 text-xs text-slate-500 font-heading font-bold uppercase tracking-wider">
            <span>Showing {filteredMembers.length} Leaders & Volunteers</span>
            {selectedRole !== "All" && (
              <button
                onClick={() => setSelectedRole("All")}
                className="text-nss-red hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  {/* Photo Card */}
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nss-navy-dark via-transparent to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-nss-navy text-white border border-white/20">
                        {member.category}
                      </span>
                    </div>

                    {/* Social links */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-nss-red transition-colors"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white hover:bg-nss-red transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-nss-red-dark mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 truncate">
                      {member.department} {member.year ? `• ${member.year}` : ""}
                    </div>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed font-body line-clamp-3">
                      {member.bio}
                    </p>

                    {member.quote && (
                      <div className="mt-4 p-3 rounded-xl bg-nss-warm-white border border-slate-200/60 text-[11px] text-slate-700 italic font-serif leading-relaxed">
                        &ldquo;{member.quote}&rdquo;
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Leadership CTA */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-radial-navy text-white text-center border border-white/15 shadow-glass-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-white">
              Aspire to Lead a Domain Wing?
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
              Every year, elections and selections are held for Domain Leads across Education, Health, Environment, PR, and Special Camps.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/join" variant="primary" size="lg" showArrow>
                Enroll as Volunteer Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
