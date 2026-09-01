import type { Metadata } from "next";
import { Briefcase, Users, GraduationCap, Truck, Home, Settings } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import JobApplicationForm from "./JobApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Job Opportunities",
  description:
    "Join the Kids covE School of Excellence team in Ozhukur, Malappuram. We are hiring Grade Teachers, Montessori Teachers, Drivers, House Keeping, and Administration staff. Apply now via WhatsApp.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Job Opportunities | Kids covE School of Excellence",
    description:
      "Explore job opportunities at Kids covE School of Excellence, Ozhukur. Apply for teaching, driving, housekeeping, and administrative positions.",
    url: "/careers",
  },
};

const openPositions = [
  {
    title: "Grade Teacher",
    emoji: "📚",
    desc: "Teach and guide primary-level students (Grade 1–4) with engaging, activity-based learning methods.",
    color: "from-secondary/10 to-accent-green/10",
    border: "border-secondary/20",
  },
  {
    title: "Montessori Teacher",
    emoji: "🧒",
    desc: "Facilitate hands-on Montessori-based learning for early learners (Montessori 1–3) in a nurturing environment.",
    color: "from-accent-purple/10 to-accent-blue/10",
    border: "border-accent-purple/20",
  },
  {
    title: "Driver",
    emoji: "🚌",
    desc: "Safely transport students to and from school with care, punctuality, and responsibility.",
    color: "from-accent-blue/10 to-secondary/10",
    border: "border-accent-blue/20",
  },
  {
    title: "House Keeping",
    emoji: "🏠",
    desc: "Maintain cleanliness, hygiene, and a child-friendly environment across the school campus.",
    color: "from-accent-yellow/10 to-primary/10",
    border: "border-accent-yellow/20",
  },
  {
    title: "Administration",
    emoji: "🗂️",
    desc: "Support school operations including records, communication, scheduling, and parent coordination.",
    color: "from-accent-pink/10 to-primary/10",
    border: "border-accent-pink/20",
  },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kidscoveschool.com" },
          { name: "Careers", url: "https://kidscoveschool.com/careers" },
        ]}
      />

      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-cool overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-purple/15 rounded-full mb-4 text-accent-purple font-body font-bold text-xs sm:text-sm uppercase tracking-widest">
              <span>💼</span>
              <span>Join Our Team</span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-5">
              Career{" "}
              <span className="gradient-text">Opportunities</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              Be a part of the Kids covE family! We are looking for passionate,
              dedicated individuals who share our vision of nurturing young minds
              with excellence and care.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OPEN POSITIONS ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/15 rounded-full text-secondary-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📋</span> Open Positions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              We Are Hiring
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Explore the roles currently available at Kids covE School of
              Excellence, Ozhukur.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((pos) => (
                <div
                  key={pos.title}
                  className={`bg-gradient-to-br ${pos.color} p-7 rounded-3xl border ${pos.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <span className="text-4xl block mb-4">{pos.emoji}</span>
                  <h3 className="font-heading text-xl text-text-dark mb-2">
                    {pos.title}
                  </h3>
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    {pos.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <WaveDivider color="#F5F3FF" />
      <section className="bg-[#F5F3FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="left">
                <JobApplicationForm />
              </AnimatedSection>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection direction="right">
                <div className="bg-white p-8 rounded-[2rem] border border-accent-purple/20 shadow-sm">
                  <h3 className="font-heading text-2xl text-text-dark mb-6">
                    Why Work at Kids covE? ✨
                  </h3>
                  <ul className="space-y-4 font-body text-sm text-text-body">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>
                        <strong className="text-text-dark">Supportive Work Environment</strong> — A collaborative and respectful atmosphere where your contributions are valued.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>
                        <strong className="text-text-dark">Growth Opportunities</strong> — Continuous learning, training, and professional development support.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>
                        <strong className="text-text-dark">Meaningful Impact</strong> — Shape the future by nurturing young minds during their most formative years.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 shrink-0">✓</span>
                      <span>
                        <strong className="text-text-dark">Child-Friendly Campus</strong> — Work in a safe, clean, nature-friendly environment in Ozhukur.
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={150}>
                <div className="bg-amber-50 rounded-[2rem] p-6 sm:p-8 border border-amber-200/80">
                  <h4 className="font-heading text-lg text-amber-900 mb-2">
                    How to Apply
                  </h4>
                  <ol className="space-y-2 font-body text-sm text-amber-900/90 leading-relaxed list-decimal list-inside">
                    <li>Fill in the application form with your details.</li>
                    <li>Click &quot;Submit &amp; Send via WhatsApp&quot; to send your application.</li>
                    <li>Share your CV and certificates as attachments in the WhatsApp conversation.</li>
                  </ol>
                  <p className="font-body text-xs text-amber-900/70 mt-4">
                    Our team will review your application and contact you for the next steps.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
