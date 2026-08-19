import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initiativesData } from "@/data/initiatives";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  MapPin,
  Users,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowLeft,
  Mail,
  UserCheck,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initiativesData.map((init) => ({
    slug: init.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const initiative = initiativesData.find((item) => item.slug === slug);

  if (!initiative) {
    return {
      title: "Initiative Not Found",
    };
  }

  return {
    title: `${initiative.title} | NSS Initiatives`,
    description: initiative.shortDescription,
  };
}

export default async function InitiativeDetailPage({ params }: Props) {
  const { slug } = await params;
  const initiative = initiativesData.find((item) => item.slug === slug);

  if (!initiative) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text">
      {/* Breadcrumb Bar */}
      <div className="bg-nss-navy-dark text-slate-400 py-3 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/initiatives" className="hover:text-white transition-colors">
            Initiatives
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-200 font-medium truncate max-w-xs sm:max-w-md">
            {initiative.title}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nss-red text-white shadow-sm">
                {initiative.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20">
                Status: {initiative.status}
              </span>
              <span className="text-xs text-slate-300">
                Active Since {initiative.startDate}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {initiative.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-body leading-relaxed font-light">
              {initiative.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15">
              <div>
                <div className="text-2xl font-bold font-heading text-amber-300">
                  {initiative.impactNumber}
                </div>
                <div className="text-xs text-slate-300">{initiative.impactLabel}</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-white">
                  {initiative.volunteersInvolved}
                </div>
                <div className="text-xs text-slate-300">Volunteers Assigned</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-emerald-400">
                  {initiative.hoursDedicated.toLocaleString()}+
                </div>
                <div className="text-xs text-slate-300">Service Hours Logged</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Location</div>
                <div className="text-xs font-bold text-white truncate mt-1">
                  {initiative.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Detailed Narrative */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-nss-navy mb-4">
                  Project Background & Mission
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  {initiative.fullDescription}
                </p>
              </div>

              {/* Core Objectives */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-nss-navy mb-6">
                  Key Objectives & Scope
                </h2>
                <div className="flex flex-col gap-3">
                  {initiative.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-nss-warm-white border border-slate-200/60">
                      <CheckCircle2 className="w-5 h-5 text-nss-red shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Outcomes */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-nss-navy mb-6">
                  Verified Outcomes & Social Return
                </h2>
                <div className="flex flex-col gap-3">
                  {initiative.keyOutcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                      <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery Grid */}
              {initiative.galleryImages && initiative.galleryImages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold font-heading text-nss-navy mb-6">
                    On-Ground Action Photography
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {initiative.galleryImages.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                        <Image
                          src={img}
                          alt={`${initiative.title} photo ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 w-full flex flex-col gap-6 lg:sticky lg:top-24">
              {/* Coordinator Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-nss-blue mb-1">
                  Domain Leadership
                </div>
                <h3 className="text-lg font-bold font-heading text-nss-navy">
                  Initiative Coordinator
                </h3>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-nss-navy text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {initiative.coordinator.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-nss-navy font-heading">
                      {initiative.coordinator.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {initiative.coordinator.role}
                    </div>
                  </div>
                </div>
                {initiative.coordinator.contact && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                    <Mail className="w-4 h-4 text-nss-red" />
                    <a href={`mailto:${initiative.coordinator.contact}`} className="hover:underline text-nss-blue">
                      {initiative.coordinator.contact}
                    </a>
                  </div>
                )}
              </div>

              {/* UN Sustainable Development Goals */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Global Alignment
                </div>
                <h3 className="text-lg font-bold font-heading text-nss-navy mb-3">
                  Aligned UN SDG Goals
                </h3>
                <div className="flex flex-wrap gap-2">
                  {initiative.sdgGoals.map((sdg) => (
                    <span
                      key={sdg}
                      className="px-3 py-1 rounded-xl text-xs font-bold bg-nss-navy text-white shadow-sm"
                    >
                      SDG Goal #{sdg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Join as Volunteer Action Box */}
              <div className="p-6 rounded-3xl bg-radial-navy text-white shadow-glass-lg border border-white/15">
                <h3 className="text-lg font-bold font-heading text-white">
                  Want to contribute to this project?
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Join our weekly weekend volunteer rotation or earn credits for your university NSS certificate.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  <Button href="/join" variant="primary" size="md" showArrow className="w-full text-xs font-bold uppercase">
                    Volunteer for this Initiative
                  </Button>
                  <Button href="/contact" variant="glass" size="md" className="w-full text-xs">
                    Contact Coordinator
                  </Button>
                </div>
              </div>

              <Link
                href="/initiatives"
                className="text-xs font-bold text-nss-navy hover:text-nss-red flex items-center gap-1.5 justify-center py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Initiatives</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
