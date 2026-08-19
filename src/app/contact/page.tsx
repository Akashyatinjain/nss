"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  HeartPulse,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Inquiry",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
        subject: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Mail className="w-3.5 h-3.5" />
              Reach the NSS Cell
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Let&apos;s Make an Impact Together
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              Whether you are an NGO partner seeking grassroots collaboration, an alumnus looking to mentor, or a citizen requiring emergency blood donors—we are always available.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Panel (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Emergency Hotline Callout */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-nss-red to-nss-red-dark text-white shadow-md flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/20 text-white shrink-0">
                  <HeartPulse className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-200">
                    24/7 Emergency Blood Hotline
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-bold mt-0.5">
                    {siteConfig.contact.emergencyBloodPhone}
                  </div>
                  <p className="text-xs text-red-100 mt-1">
                    Direct dispatch coordination with Indian Red Cross & AIIMS Blood Bank standby rosters.
                  </p>
                </div>
              </div>

              {/* Office Location Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-nss-blue font-heading">
                    Campus Headquarters
                  </span>
                  <h3 className="text-xl font-bold font-heading text-nss-navy mt-1">
                    NSS Cell Office
                  </h3>
                </div>

                <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-nss-red shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-nss-navy">Address</div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {siteConfig.contact.address}, {siteConfig.contact.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-nss-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-nss-navy">Email Inquiries</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-xs text-nss-blue hover:underline mt-0.5 block">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-nss-navy">Office Helpline</div>
                      <div className="text-xs text-slate-600 mt-0.5">{siteConfig.contact.helplinePhone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-nss-navy">Visiting Hours</div>
                      <div className="text-xs text-slate-600 mt-0.5">Monday to Friday: 09:30 AM – 05:30 PM IST</div>
                    </div>
                  </div>
                </div>

                {/* Social Connect Strip */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Connect with us:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={siteConfig.contact.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-nss-red hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.contact.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-nss-red hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.contact.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-nss-red hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={siteConfig.contact.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-nss-red hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  </div>
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
                    Inquiry Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md">
                    Thank you for reaching out. Our NSS coordinating desk has received your details and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-nss-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-nss-navy-light transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold font-heading text-nss-navy">
                      Send an Inquiry or Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in the details below and we will route your inquiry to the relevant domain coordinator.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please complete all required fields.</span>
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
                        placeholder="e.g. Priyanshu Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priyanshu@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                        Inquiry Category
                      </label>
                      <select
                        value={formState.type}
                        onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteering Queries">Volunteering Queries</option>
                        <option value="NGO / Partner Collaboration">NGO / Partner Collaboration</option>
                        <option value="Emergency Blood Requirement">Emergency Blood Requirement</option>
                        <option value="College Event Collaboration">College Event Collaboration</option>
                        <option value="Alumni Mentorship">Alumni Mentorship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief summary of your inquiry..."
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    disabled={status === "submitting"}
                    className="w-full text-xs font-bold uppercase tracking-wider py-4 shadow-md mt-2"
                  >
                    {status === "submitting" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Common queries regarding NSS registration, certificate criteria, camp attendance, and duty leave."
            align="center"
          />

          <div className="flex flex-col gap-4 mt-8">
            {faqsData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-nss-warm-white transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-nss-red shrink-0" />
                      <span className="text-sm sm:text-base font-bold font-heading text-nss-navy">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-body">
                      <div className="pt-3">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
