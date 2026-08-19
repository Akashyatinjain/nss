"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { NssBadgeIcon } from "@/components/ui/NssWheel";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronRight, HeartHandshake, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 w-full",
        isScrolled
          ? "bg-nss-navy/95 backdrop-blur-md shadow-glass-lg border-b border-white/10 py-3"
          : isHomePage
          ? "bg-transparent py-4 sm:py-5"
          : "bg-nss-navy py-4 border-b border-white/10 shadow-glass"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-nss-red rounded-lg"
          aria-label="NSS Home"
        >
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            <NssBadgeIcon className="w-10 h-10 sm:w-11 sm:h-11" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-heading font-extrabold text-base sm:text-lg tracking-tight group-hover:text-red-300 transition-colors">
                NSS
              </span>
              <span className="text-xs bg-nss-red text-white font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                UNIT 04
              </span>
            </div>
            <span className="text-slate-300 text-[11px] sm:text-xs font-medium tracking-wide truncate max-w-[200px] sm:max-w-[280px]">
              {siteConfig.collegeName}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-nss-red to-nss-red-bright rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA & Emergency Phone */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors py-2 px-2.5 rounded-lg hover:bg-white/5"
            title="Blood Helpline"
          >
            <PhoneCall className="w-3.5 h-3.5 text-nss-red-bright animate-pulse" />
            <span className="font-mono text-[11px]">{siteConfig.contact.emergencyBloodPhone}</span>
          </Link>

          <Button
            href="/join"
            variant="primary"
            size="sm"
            showArrow
            className="text-xs font-bold uppercase tracking-wider shadow-glow-red"
          >
            Join NSS
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/join"
            className="text-xs bg-nss-red text-white font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider"
          >
            Join
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-nss-red transition-colors"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-nss-red-bright" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Right Drawer / Sidebar Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          {/* Dark Blurred Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <aside
            aria-label="Mobile Navigation Sidebar"
            className="fixed inset-y-0 right-0 max-w-full flex pl-10"
          >
            <div className="w-screen max-w-sm bg-nss-navy-dark border-l border-white/15 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300 text-white">
              {/* Drawer Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <NssBadgeIcon className="w-8 h-8" />
                    <div>
                      <div className="text-sm font-extrabold font-heading text-white">
                        NSS UNIT 04
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate max-w-[180px]">
                        {siteConfig.collegeName}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-nss-red text-slate-200 hover:text-white transition-colors"
                    aria-label="Close Sidebar Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links List */}
                <div className="flex flex-col gap-1.5">
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]",
                          isActive
                            ? "bg-gradient-to-r from-nss-red to-nss-red-bright text-white shadow-md font-bold"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isActive ? "text-white translate-x-0.5" : "text-slate-500"
                          )}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
                <Button
                  href="/join"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="w-full text-xs font-bold uppercase tracking-wider shadow-glow-red py-3.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join NSS as Volunteer
                </Button>

                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-nss-red-bright" />
                    <span className="font-medium text-slate-300">NOT ME BUT YOU</span>
                  </div>
                  <span className="text-amber-300 font-bold font-mono">
                    {siteConfig.stats.volunteers} Active
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
