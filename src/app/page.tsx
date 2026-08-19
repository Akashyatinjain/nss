import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactStats } from "@/components/home/ImpactStats";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyNssSection } from "@/components/home/WhyNssSection";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { InitiativesShowcase } from "@/components/home/InitiativesShowcase";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { ImpactStoriesSection } from "@/components/home/ImpactStoriesSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { VolunteersSpotlight } from "@/components/home/VolunteersSpotlight";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { JoinCtaSection } from "@/components/home/JoinCtaSection";
import { QuickContactSection } from "@/components/home/QuickContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Statistics */}
      <ImpactStats />

      {/* 3. About NSS Editorial */}
      <AboutSection />

      {/* 4. Why NSS Pillars */}
      <WhyNssSection />

      {/* 5. Featured Flagship Initiative */}
      <FeaturedProject />

      {/* 6. Initiatives Grid Showcase */}
      <InitiativesShowcase />

      {/* 7. Upcoming Service Events & Drives */}
      <UpcomingEventsSection />

      {/* 8. Impact Stories & Voices of Change */}
      <ImpactStoriesSection />

      {/* 9. Photo Gallery Preview */}
      <GalleryPreviewSection />

      {/* 10. Volunteer & Team Spotlight */}
      <VolunteersSpotlight />

      {/* 11. Honors & Achievements */}
      <AchievementsSection />

      {/* 12. Community Testimonials */}
      <TestimonialsSection />

      {/* 13. Institutional Partners */}
      <PartnerStrip />

      {/* 14. Full-Width Join NSS CTA */}
      <JoinCtaSection />

      {/* 15. Contact & Office Information */}
      <QuickContactSection />
    </div>
  );
}
