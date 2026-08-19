"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NssBadgeIcon } from "@/components/ui/NssWheel";
import {
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Download,
  Calendar,
  ShieldCheck,
  Send,
  User,
  Mail,
  Phone,
  GraduationCap,
} from "lucide-react";

const INTEREST_AREAS = [
  "Education & STEM Mentorship (Project Udaan)",
  "Environment & Miyawaki Forest (Project Harit)",
  "Healthcare & Emergency Bloodline (Project Sanjeevani)",
  "Women Empowerment & Hygiene (Project Shakti)",
  "Rural Immersion & Special Camps (Village Development)",
  "Swachhata & Cleanliness Drives",
  "Design, Media & Filmmaking",
  "Event Logistics & Stage Management",
  "Dramatics & Street Plays (Nukkad Natak)",
];

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeId: "",
    department: "Computer Science & Engineering",
    year: "1st Year",
    bloodGroup: "O+",
    motivation: "",
    interests: [] as string[],
    priorExperience: "",
    pledgeAgreed: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [registeredSlipData, setRegisteredSlipData] = useState<any>(null);

  const toggleInterest = (area: string) => {
    if (formData.interests.includes(area)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== area),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, area],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.collegeId || !formData.motivation) {
      setErrorMessage("Please fill all mandatory fields including motivation statement.");
      setStatus("error");
      return;
    }

    if (formData.interests.length === 0) {
      setErrorMessage("Please select at least one area of interest.");
      setStatus("error");
      return;
    }

    if (!formData.pledgeAgreed) {
      setErrorMessage("Please accept the NSS Volunteer Pledge.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      const slip = {
        registrationId: `NSS-2026-${Math.floor(10000 + Math.random() * 90000)}`,
        name: formData.fullName,
        collegeId: formData.collegeId,
        department: formData.department,
        year: formData.year,
        bloodGroup: formData.bloodGroup,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        interests: formData.interests,
      };
      setRegisteredSlipData(slip);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#D62828", "#123B63", "#FAFAF7", "#E63946", "#F4A261"],
        });
      } catch (err) {
        // ignore if canvas not supported
      }
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col w-full bg-nss-warm-white text-nss-dark-text min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-radial-navy text-white overflow-hidden print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nss-red/20 border border-nss-red/30 text-xs font-bold uppercase tracking-widest text-red-200 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Volunteer Enrollment 2026–27
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Become a Volunteer. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nss-red-bright via-orange-400 to-amber-300">
                Turn Empathy Into Action.
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed font-body">
              Join the National Service Scheme Unit. Open to all students across all branches and academic years. Earn official university credits and transform communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Registration Form or Success Slip */}
      <section className="py-16 sm:py-20 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === "success" && registeredSlipData ? (
            /* Printable Registration Confirmation Slip */
            <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-8 sm:p-12 animate-in zoom-in-95 duration-300">
              {/* Slip Header */}
              <div className="flex items-center justify-between border-b-2 border-nss-navy pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <NssBadgeIcon className="w-14 h-14" />
                  <div>
                    <h2 className="text-xl font-extrabold font-heading text-nss-navy">
                      NATIONAL SERVICE SCHEME (NSS)
                    </h2>
                    <p className="text-xs text-slate-600 font-semibold">
                      {siteConfig.collegeName} • {siteConfig.unitCode}
                    </p>
                    <p className="text-[11px] font-bold text-nss-red uppercase tracking-wider">
                      Motto: NOT ME BUT YOU
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 block">
                    Registration No.
                  </span>
                  <span className="text-base sm:text-lg font-mono font-extrabold text-nss-navy">
                    {registeredSlipData.registrationId}
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                    CONFIRMED
                  </span>
                </div>
              </div>

              {/* Success Badge */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <strong className="block font-bold">Enrollment Application Successfully Recorded!</strong>
                  <span className="text-xs text-emerald-700">
                    Welcome to the NSS family. Please save or print this acknowledgement slip for your records.
                  </span>
                </div>
              </div>

              {/* Slip Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-nss-warm-white border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    Volunteer Name
                  </span>
                  <span className="text-sm font-bold text-nss-navy font-heading">
                    {registeredSlipData.name}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    College Student ID
                  </span>
                  <span className="text-sm font-bold text-nss-navy font-heading font-mono">
                    {registeredSlipData.collegeId}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    Department & Year
                  </span>
                  <span className="text-sm font-bold text-nss-navy font-heading">
                    {registeredSlipData.department} ({registeredSlipData.year})
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    Blood Group
                  </span>
                  <span className="text-sm font-bold text-nss-red font-heading">
                    {registeredSlipData.bloodGroup}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    Registration Date
                  </span>
                  <span className="text-sm font-bold text-nss-navy font-heading">
                    {registeredSlipData.date}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider font-semibold block text-[10px]">
                    Assigned Unit
                  </span>
                  <span className="text-sm font-bold text-nss-navy font-heading">
                    Unit 04 (Junior Contingent)
                  </span>
                </div>
              </div>

              {/* Chosen Interest Wings */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600 font-heading mb-2">
                  Selected Domain Preferences:
                </div>
                <div className="flex flex-wrap gap-2">
                  {registeredSlipData.interests.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 border border-slate-200 text-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* The NSS Volunteer Pledge */}
              <div className="mt-8 p-6 rounded-2xl bg-nss-navy text-white text-xs leading-relaxed">
                <div className="font-bold font-heading text-amber-300 uppercase tracking-wider text-[11px] mb-1">
                  The NSS Volunteer Pledge
                </div>
                <p className="italic text-slate-200">
                  &ldquo;I solemnly pledge that I will serve the nation through the National Service Scheme with dedication and selfless spirit. I will respect the dignity of labor, foster communal harmony, protect the environment, and always uphold the motto: NOT ME BUT YOU.&rdquo;
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 print:hidden">
                <Button
                  onClick={handlePrint}
                  variant="primary"
                  size="md"
                  icon={<Download className="w-4 h-4" />}
                >
                  Print / Save Slip as PDF
                </Button>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      collegeId: "",
                      department: "Computer Science & Engineering",
                      year: "1st Year",
                      bloodGroup: "O+",
                      motivation: "",
                      interests: [],
                      priorExperience: "",
                      pledgeAgreed: false,
                    });
                  }}
                  className="text-xs font-semibold text-nss-navy hover:text-nss-red transition-colors"
                >
                  Submit Another Registration
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-glass p-8 sm:p-12">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-nss-red font-heading">
                  Step 1 of 1 • Membership Portal
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-nss-navy mt-1">
                  NSS Volunteer Enrollment Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Please provide accurate academic and contact details. Applications are validated against the institute registrar database.
                </p>
              </div>

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* 1. Personal & Academic Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Official College Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul.s@apexinstitute.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Mobile Phone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      College Roll / ID No. *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 24CSE108"
                      value={formData.collegeId}
                      onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Blood Group
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Academic Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Biotechnology">Biotechnology</option>
                      <option value="Applied Sciences & Humanities">Applied Sciences & Humanities</option>
                      <option value="Management Studies">Management Studies</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                      Current Academic Year *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>

                {/* 2. Areas of Interest Checkboxes */}
                <div className="mt-4 pt-6 border-t border-slate-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 font-heading">
                    Areas of Interest / Domain Preferences (Select all that apply) *
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTEREST_AREAS.map((area) => {
                      const isSelected = formData.interests.includes(area);
                      return (
                        <div
                          key={area}
                          onClick={() => toggleInterest(area)}
                          className={`p-3.5 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
                            isSelected
                              ? "bg-red-50/80 border-nss-red text-nss-navy font-semibold"
                              : "bg-nss-warm-white border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isSelected
                                ? "bg-nss-red border-nss-red text-white"
                                : "border-slate-400 bg-white"
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-xs">{area}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Motivation & Statement of Purpose */}
                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                    Why do you want to join NSS? (Statement of Purpose) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what motivates you to serve the community and what skills you hope to contribute or develop..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                  />
                </div>

                {/* 4. Prior Experience (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-heading">
                    Prior Volunteering or Extracurricular Experience (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. School Eco-Club, NGO tutoring, Scout & Guide, blood donor"
                    value={formData.priorExperience}
                    onChange={(e) => setFormData({ ...formData, priorExperience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nss-navy text-sm bg-nss-warm-white"
                  />
                </div>

                {/* 5. NSS Pledge Agreement */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 mt-2">
                  <input
                    type="checkbox"
                    id="pledge"
                    checked={formData.pledgeAgreed}
                    onChange={(e) => setFormData({ ...formData, pledgeAgreed: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-nss-red focus:ring-nss-red cursor-pointer"
                  />
                  <label htmlFor="pledge" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                    <strong>NSS Code of Conduct:</strong> I pledge to abide by the NSS rules, attend assigned weekend drives sincerely, maintain high standards of civic discipline, and actively uphold the motto <em>NOT ME BUT YOU</em>.
                  </label>
                </div>

                {/* Submit CTA */}
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  disabled={status === "submitting"}
                  className="w-full text-xs font-bold uppercase tracking-wider py-4 shadow-glow-red mt-2"
                >
                  {status === "submitting" ? (
                    <span>Processing Enrollment...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Volunteer Registration
                    </span>
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
