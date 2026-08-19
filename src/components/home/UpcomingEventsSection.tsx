import React from "react";
import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function UpcomingEventsSection() {
  const upcomingEvents = eventsData.filter((e) => e.status === "Upcoming").slice(0, 3);
  const pastEvents = eventsData.filter((e) => e.status === "Completed").slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-white text-nss-dark-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/10 border border-nss-red/20 text-xs font-bold text-nss-red uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Community Calendar
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-nss-navy tracking-tight">
              Upcoming Service Drives & Camps
            </h2>
          </div>
          <Button href="/events" variant="outline" size="md" showArrow>
            View Full Event Archive
          </Button>
        </div>

        {/* Upcoming Drives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-nss-warm-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                {/* Banner with Date Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={event.bannerImage}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Calendar Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-nss-navy rounded-xl p-2 shadow-md border border-white/40 text-center min-w-[54px]">
                    <div className="text-[10px] font-bold uppercase text-nss-red">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                    </div>
                    <div className="text-lg font-extrabold font-heading leading-none text-nss-navy">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>

                  {/* Flagship Badge */}
                  {event.isFlagship && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-nss-red text-white shadow-md">
                        Flagship Camp
                      </span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-nss-navy group-hover:text-nss-red transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-body">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 border-t border-slate-200/60 pt-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-nss-blue shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <MapPin className="w-3.5 h-3.5 text-nss-red shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  href={`/events/${event.slug}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-nss-navy text-white hover:bg-nss-navy-light text-xs font-bold uppercase tracking-wider text-center transition-colors"
                >
                  View Details
                </Link>
                {event.registrationOpen && (
                  <Link
                    href={`/events/${event.slug}#register`}
                    className="py-2.5 px-3.5 rounded-xl bg-nss-red hover:bg-nss-red-bright text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Completed Drives Highlights Strip */}
        <div className="rounded-3xl bg-nss-soft-gray p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-nss-blue uppercase tracking-wider">
                Recent Milestones
              </div>
              <h3 className="text-xl font-bold font-heading text-nss-navy">
                Successfully Concluded Drives
              </h3>
            </div>
            <Link
              href="/events?tab=past"
              className="text-xs font-bold text-nss-red hover:underline flex items-center gap-1 uppercase tracking-wider"
            >
              <span>Explore Past Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((past) => (
              <div
                key={past.id}
                className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold font-heading text-nss-navy">
                      {past.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Conducted on {formatDate(past.date)} • {past.location}
                    </p>
                  </div>
                </div>
                {past.impactStats && past.impactStats[0] && (
                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-nss-red font-heading">
                      {past.impactStats[0].metric}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {past.impactStats[0].label}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
