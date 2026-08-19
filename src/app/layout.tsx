import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { AnnouncementBar } from "@/components/navbar/AnnouncementBar";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.motto} — ${siteConfig.collegeName}`,
    template: `%s | ${siteConfig.name} — ${siteConfig.collegeName}`,
  },
  description: siteConfig.description,
  keywords: [
    "NSS",
    "National Service Scheme",
    siteConfig.collegeName,
    "Not Me But You",
    "Student Volunteering",
    "Blood Donation Camp",
    "Rural Development",
    "Project Udaan",
    "Miyawaki Forest",
    "Community Service India",
  ],
  authors: [{ name: "NSS Unit", url: "https://apexinstitute.edu.in/nss" }],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.motto}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} — ${siteConfig.collegeName}`,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.motto}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-nss-warm-white text-nss-dark-text antialiased selection:bg-nss-red selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
