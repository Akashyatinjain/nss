"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function QuickContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        type: "General Inquiry",
        message: "",
      });
    }, 800);
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-nss-dark-text border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Make an Impact Together."
          subtitle="Whether you are an NGO looking to collaborate, a student seeking guidance, or need emergency blood support — our team is here."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Panel (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-nss-warm-white border border-slate-200/80 shadow-sm flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-nss-red font-heading">
                Visit NSS Cell
              </span>
              <h3 className="text-2xl font-bold font-heading text-nss-navy mt-1">
                Student Activity Centre
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Our office is open for student registrations, event planning, and volunteer drop-ins every weekday.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nss-red shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-nss-navy">Campus Location</div>
                  <div className="text-xs text-slate-600">{siteConfig.contact.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-nss-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-nss-navy">Official Email</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-xs text-nss-blue hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-nss-navy">Helpline & Blood Hotline</div>
                  <div className="text-xs text-slate-600">{siteConfig.contact.helplinePhone}</div>
                  <div className="text-xs font-mono font-bold text-nss-red mt-0.5">
                    Emergency: {siteConfig.contact.emergencyBloodPhone}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-nss-navy">Office Hours</div>
                  <div className="text-xs text-slate-600">Mon – Fri: 09:30 AM – 05:30 PM IST</div>
                </div>
              </div>
            </div>

            {/* Programme Officer Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 mt-2">
              <div className="text-xs font-bold text-nss-navy font-heading">
                {siteConfig.contact.programmeOfficer.name}
              </div>
              <div className="text-[11px] text-slate-500">
                {siteConfig.contact.programmeOfficer.designation}
              </div>
              <div className="text-xs text-nss-blue mt-1">
                {siteConfig.contact.programmeOfficer.email}
              </div>
            </div>
          </div>

          {/* Right Contact Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-glass">
            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-nss-navy">
                  Message Received!
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md">
                  Thank you for reaching out to the NSS Unit. Our team coordinators will review your inquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-nss-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-nss-navy-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please fill in your name, email, and message.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm text-slate-900 bg-nss-warm-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm text-slate-900 bg-nss-warm-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm text-slate-900 bg-nss-warm-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm text-slate-900 bg-nss-warm-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering Question">Volunteering Question</option>
                      <option value="NGO / Partner Collaboration">NGO / Partner Collaboration</option>
                      <option value="Blood Donation Emergency">Blood Donation Emergency</option>
                      <option value="Event Collaboration">Event Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can collaborate, help, or answer your questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm text-slate-900 bg-nss-warm-white placeholder:text-slate-400"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full text-xs font-bold uppercase tracking-wider py-3.5 shadow-md"
                >
                  {status === "submitting" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
