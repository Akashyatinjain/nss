import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventsData } from "@/data/events";
import { Button } from "@/components/ui/Button";
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  ArrowLeft,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((item) => item.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | NSS Events`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsData.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text">
      {/* Breadcrumbs */}
      <div className="bg-nss-navy-dark text-slate-400 py-3 border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/events" className="hover:text-white transition-colors">
            Events & Drives
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-200 font-medium truncate max-w-xs sm:max-w-md">
            {event.title}
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nss-red text-white">
                {event.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20">
                Venue Type: {event.venueType}
              </span>
              {event.isFlagship && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  Flagship Camp
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {event.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-body leading-relaxed font-light">
              {event.tagline}
            </p>

            {/* Quick Timing & Venue Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-nss-red/20 text-nss-red-bright border border-nss-red/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Date</div>
                  <div className="text-sm font-bold text-white font-heading">
                    {formatDate(event.date)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-nss-blue/30 text-sky-400 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Timings</div>
                  <div className="text-sm font-bold text-white font-heading truncate">
                    {event.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Location</div>
                  <div className="text-sm font-bold text-white font-heading truncate">
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail & Schedule Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Event Banner */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={event.bannerImage}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 800px"
                  priority
                />
              </div>

              {/* Comprehensive Description */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-nss-navy mb-4">
                  Event Overview & Scope
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  {event.fullDetails || event.description}
                </p>
              </div>

              {/* Core Objectives */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-nss-navy mb-6">
                  Drive Objectives & Key Milestones
                </h2>
                <div className="flex flex-col gap-3">
                  {event.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-nss-warm-white border border-slate-200/60">
                      <CheckCircle2 className="w-5 h-5 text-nss-red shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hour-by-Hour Schedule (if available) */}
              {event.schedule && event.schedule.length > 0 && (
                <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                  <h2 className="text-2xl font-bold font-heading text-nss-navy mb-6">
                    Event Schedule & Itinerary
                  </h2>
                  <div className="relative border-l-2 border-slate-200 ml-3 pl-6 flex flex-col gap-6">
                    {event.schedule.map((item, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-nss-navy border-2 border-white shadow-sm" />
                        <div className="text-xs font-mono font-bold text-nss-red uppercase">
                          {item.time}
                        </div>
                        <h4 className="text-base font-bold font-heading text-nss-navy mt-0.5">
                          {item.activity}
                        </h4>
                        {item.speakerOrLead && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            Lead / Speaker: {item.speakerOrLead}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Key Features */}
              {event.highlights && (
                <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80">
                  <h3 className="text-lg font-bold font-heading text-emerald-950 mb-3">
                    Important Participant Guidelines & Perks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-900">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
              {/* Registration Action Card */}
              <div id="register" className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-glass">
                <div className="text-xs font-bold uppercase tracking-wider text-nss-red mb-1">
                  Registration Portal
                </div>
                <h3 className="text-xl font-bold font-heading text-nss-navy">
                  {event.registrationOpen ? "Register for this Drive" : "Registrations Closed"}
                </h3>

                {event.registrationOpen ? (
                  <div className="mt-4 flex flex-col gap-4">
                    {event.registrationDeadline && (
                      <div className="text-xs text-slate-500 bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                        Deadline: <strong className="text-amber-900">{formatDate(event.registrationDeadline)}</strong>
                      </div>
                    )}

                    {event.volunteersRequired && (
                      <div className="flex items-center justify-between text-xs text-slate-600">
                        <span>Volunteer Slots Filled:</span>
                        <span className="font-bold text-nss-navy">
                          {event.volunteersRegistered || 0} / {event.volunteersRequired}
                        </span>
                      </div>
                    )}

                    <Button
                      href="/join"
                      variant="primary"
                      size="lg"
                      showArrow
                      className="w-full text-xs font-bold uppercase tracking-wider shadow-glow-red"
                    >
                      Confirm Volunteer Participation
                    </Button>
                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      Official duty leaves (OD) and NSS participation credits are granted for all confirmed volunteers.
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                    This drive has concluded. You can explore upcoming opportunities or register for future drives in the portal.
                  </div>
                )}
              </div>

              {/* Coordinator Contact Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Event Organizer
                </div>
                <h3 className="text-base font-bold font-heading text-nss-navy">
                  {event.coordinator.name}
                </h3>
                <div className="mt-4 flex flex-col gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{event.coordinator.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-nss-blue" />
                    <a href={`mailto:${event.coordinator.email}`} className="hover:underline text-nss-blue">
                      {event.coordinator.email}
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/events"
                className="text-xs font-bold text-nss-navy hover:text-nss-red flex items-center gap-1.5 justify-center py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Events</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
