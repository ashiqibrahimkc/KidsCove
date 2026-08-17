import type { Metadata } from "next";
import { Nunito, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export const metadata: Metadata = {
  title: {
    default: "Kids covE School of Excellence",
    template: "%s | Kids covE School of Excellence",
  },
  description:
    "Kids covE School of Excellence — A nurturing Montessori & Primary school in Ozhukur, Malappuram, Kerala. Empowering young minds through curiosity, creativity, and compassion.",
  keywords: [
    "Kids covE",
    "school",
    "Montessori",
    "Ozhukur",
    "Malappuram",
    "Kerala",
    "primary school",
    "preschool",
    "admissions",
  ],
  openGraph: {
    title: "Kids covE School of Excellence",
    description:
      "A nurturing Montessori & Primary school empowering young minds through curiosity, creativity, and compassion.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${bubblegum.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
