import type { Metadata } from "next";
import { Nunito, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SchoolJsonLd } from "@/components/JsonLd";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bubblegum = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kidscoveschool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kids covE School of Excellence | Best Montessori & Primary School in Ozhukur, Malappuram",
    template: "%s | Kids covE School of Excellence",
  },
  description:
    "Kids covE School of Excellence — Premier Montessori & Primary school in Ozhukur Palathinghal, Malappuram, Kerala. Nurturing young minds from Montessori 1 to Grade 4 with swimming, karate, roller skating, yoga, and smart classrooms at affordable fees.",
  keywords: [
    "Kids covE",
    "Kids covE School of Excellence",
    "Kids covE Ozhukur",
    "Best Montessori school in Ozhukur",
    "Primary school in Malappuram",
    "School admissions in Ozhukur Mongam",
    "Preschool in Malappuram Kerala",
    "Montessori school with swimming and karate",
    "Roller skating school Kerala",
    "Affordable school in Malappuram",
    "ECHO club English club school",
    "Ozhukur Palathinghal school",
  ],
  authors: [{ name: "Kids covE School of Excellence" }],
  creator: "Kids covE School of Excellence",
  publisher: "Kids covE School of Excellence",
  category: "Education",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kids covE School of Excellence | Ozhukur, Malappuram",
    description:
      "A nurturing sanctuary where every child's curiosity is met with compassion, holistic education, sports, and creativity at affordable fees in Ozhukur, Malappuram, Kerala.",
    url: siteUrl,
    siteName: "Kids covE School of Excellence",
    images: [
      {
        url: "/images/school.jpeg",
        width: 1200,
        height: 630,
        alt: "Kids covE School of Excellence Campus Building",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids covE School of Excellence | Ozhukur, Malappuram",
    description:
      "Nurturing Montessori & Primary school in Ozhukur, Malappuram with holistic learning, sports, and modern facilities.",
    images: ["/images/school.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Ozhukur, Malappuram, Kerala",
    "geo.position": "11.1687;75.9862",
    ICBM: "11.1687, 75.9862",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${bubblegum.variable} h-full antialiased`}
    >
      <head>
        <SchoolJsonLd />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
