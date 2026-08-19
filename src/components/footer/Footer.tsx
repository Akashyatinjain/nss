import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { NssBadgeIcon, NssWheel } from "@/components/ui/NssWheel";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-nss-navy-dark text-slate-300 border-t border-white/10 overflow-hidden pt-16 pb-12">
      {/* Background Decorative Wheel Graphic */}
      <div className="absolute -bottom-24 -right-24 pointer-events-none opacity-10">
        <NssWheel size={500} animate={true} color="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Motto (2 Spans) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <NssBadgeIcon className="w-12 h-12" />
              <div>
                <span className="text-white font-heading font-extrabold text-xl tracking-tight block">
                  NATIONAL SERVICE SCHEME
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {siteConfig.collegeName} • {siteConfig.unitCode}
                </span>
              </div>
            </Link>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md my-2">
              <div className="text-xs uppercase tracking-widest font-bold text-nss-red-bright mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Official NSS Motto
              </div>
              <p className="text-xl font-heading font-extrabold text-white tracking-wide">
                NOT ME BUT YOU
              </p>
              <p className="text-xs text-slate-400 mt-1 italic">
                {siteConfig.mottoHindi}
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Empowering students to turn knowledge into compassionate action, fostering civic empathy, sustainable villages, and resilient communities across the nation.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-nss-red hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-nss-red hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-nss-red hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-nss-red hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-white font-heading">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About NSS & Symbolism
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-white hover:underline transition-colors">
                  Flagship Initiatives
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white hover:underline transition-colors">
                  Upcoming Camps & Drives
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition-colors">
                  Photo & Action Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white hover:underline transition-colors">
                  Leadership & Volunteers
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white hover:underline transition-colors">
                  Impact Dashboard & SDGs
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-nss-red-bright font-semibold hover:text-white transition-colors">
                  Join NSS as Volunteer →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-white font-heading">
              Focus Areas
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/initiatives/project-udaan-education" className="hover:text-white transition-colors">
                  Project Udaan (Education)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-harit-environment" className="hover:text-white transition-colors">
                  Project Harit (Urban Forests)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-sanjeevani-bloodline" className="hover:text-white transition-colors">
                  Project Sanjeevani (Blood Bank)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-shakti-women-empowerment" className="hover:text-white transition-colors">
                  Project Shakti (Women Equity)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-gramodyan-rural-development" className="hover:text-white transition-colors">
                  Project Gramodyan (Villages)
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-nirmal-cleanliness-swachhata" className="hover:text-white transition-colors">
                  Project Nirmal (Swachhata)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-white font-heading">
              NSS Cell Office
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-nss-red-bright shrink-0 mt-1" />
                <span>{siteConfig.contact.address}, {siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-nss-red-bright shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-nss-red-bright shrink-0" />
                <span>Helpline: {siteConfig.contact.helplinePhone}</span>
              </div>

              {/* Official External Links */}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-1.5 text-xs">
                <a
                  href={siteConfig.officialNssLinks.nationalPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>National NSS Portal (nss.gov.in)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.officialNssLinks.ministry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  <span>Ministry of Youth Affairs & Sports</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NSS Unit, {siteConfig.collegeName}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with purpose & passion by the NSS volunteer community</span>
            <Heart className="w-3.5 h-3.5 text-nss-red fill-nss-red ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
