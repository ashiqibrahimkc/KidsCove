import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { getAdmissionAcademicYear } from "@/lib/academicYear";
import AdmissionForm from "./AdmissionForm";

const currentAcademicYear = getAdmissionAcademicYear();

export const metadata: Metadata = {
  title: `Admissions ${currentAcademicYear} & Contact Details | Apply Online`,
  description:
    `Apply for admission to Kids covE School of Excellence in Ozhukur, Malappuram, Kerala. Learn about admission booking from 1 Jan for ${currentAcademicYear}, procedure from 1 Feb, documents needed, school bus transport, and FAQs.`,
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: `Admissions ${currentAcademicYear} | Kids covE School of Excellence, Ozhukur`,
    description:
      `Reserve your child's seat for Montessori 1 to Grade 4 (${currentAcademicYear}). Complete admission steps, documents checklist, and direct WhatsApp enquiry.`,
    url: "/admissions",
  },
};

const admissionSteps = [
  {
    step: "01",
    title: "Admission Booking",
    date: "From 1 January Onwards",
    desc: "Parents can reserve a seat for their child by making the prescribed advance payment. Seat confirmation will be subject to applicable admission terms and availability.",
    badge: "Booking Phase",
    badgeColor: "bg-accent-yellow/30 text-amber-900",
  },
  {
    step: "02",
    title: "Admission Procedure",
    date: "From 1 February Onwards",
    desc: "The formal admission process begins from 1 February onwards. Parents are required to complete the registration process and pay the applicable Registration Fee.",
    badge: "Registration Phase",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    step: "03",
    title: "Complete Online Admission Form",
    date: "Step 3",
    desc: "Parents must fill in and submit the Online Admission Form with accurate and complete information about the child and parents/guardians.",
    badge: "Form Submission",
    badgeColor: "bg-secondary/15 text-secondary-dark",
  },
  {
    step: "04",
    title: "Submit Required Documents",
    date: "Step 4",
    desc: "Parents are required to provide the necessary documents for verification and completion of the admission process.",
    badge: "Verification Phase",
    badgeColor: "bg-accent-purple/15 text-accent-purple",
  },
];

const requiredDocs = [
  {
    title: "Birth Certificate",
    desc: "Original and photocopy for date-of-birth and age verification.",
    icon: "📜",
  },
  {
    title: "Aadhaar Card",
    desc: "Copies of child's and parents'/guardians' Aadhaar cards.",
    icon: "🆔",
  },
  {
    title: "Two Passport Photos",
    desc: "Recent passport-sized color photographs of the child.",
    icon: "📷",
  },
];

const faqs = [
  {
    question: `When does admission booking open for the ${currentAcademicYear} academic year?`,
    answer:
      `Admission booking begins from 1st January onwards, allowing parents to reserve seats in advance for the ${currentAcademicYear} academic session. The formal admission procedure commences from 1st February onwards. We recommend early enquiry as seats are limited.`,
  },
  {
    question: "What are the age requirements for Montessori admission?",
    answer:
      "Montessori 1 begins at Age 2.5+, Montessori 2 at Age 3.5+, Montessori 3 at Age 4.5+, and Montessori 4 (Grade 1) from Age 5.5 to 6 years.",
  },
  {
    question: "What documents are required during the admission process?",
    answer:
      "You will need to submit: 1) Birth Certificate of the child, 2) Aadhaar Card copy of the child and parents, and 3) Two recent passport-size photographs.",
  },
  {
    question: "Is school bus transportation available in my area?",
    answer:
      "Yes, Kids covE provides safe, dedicated school bus transportation covering Ozhukur, Palathinghal, Mongam, and surrounding areas. Transport is subject to route availability.",
  },
  {
    question: "What extracurricular activities and sports are included?",
    answer:
      "Our curriculum includes weekly coaching in Roller Skating, Karate, Swimming, Yoga, Music & Rhymes, Drawing, and Arts & Crafts, alongside student leadership in the ECHO Club and English Club.",
  },
  {
    question: "What are the official school timings?",
    answer:
      "The school runs from 09:20 AM to 03:30 PM, Monday through Saturday, adhering to official academic calendar holidays.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kidscoveschool.com" },
          { name: "Admissions & Contact", url: "https://kidscoveschool.com/admissions" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-hero overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-yellow/40 rounded-full mb-4 text-text-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest">
              <span>🎒</span>
              <span>Session {currentAcademicYear}</span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-4">
              Admissions &amp; <span className="gradient-text">Contact</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              We aim to make the admission process simple, transparent, and
              convenient for parents. Reserve a seat for your child today!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 4-STEP ADMISSION PROCESS ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/15 rounded-full text-secondary-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📋</span> Step-by-Step Guide
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Admission Process &amp; Timeline
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-2xl mx-auto">
              Admissions are offered subject to seat and transportation
              availability. Follow these 4 straightforward steps.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-gray-50/70 p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-heading text-xl font-bold text-primary border border-gray-100">
                        {step.step}
                      </span>
                      <span
                        className={`text-xs font-body font-bold px-3 py-1 rounded-full ${step.badgeColor}`}
                      >
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl text-text-dark mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-primary font-bold mb-3 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{step.date}</span>
                    </p>
                    <p className="font-body text-xs sm:text-sm text-text-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Important Note Alert */}
          <AnimatedSection delay={200}>
            <div className="mt-10 bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-amber-900 mb-1">
                  Important Note on Admissions
                </h4>
                <p className="font-body text-sm text-amber-900/90 leading-relaxed">
                  Admission is confirmed only after completing all required
                  formalities, submission of the necessary documents, and
                  payment of the applicable fees. Admissions are subject to seat
                  and transportation availability.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== REQUIRED DOCUMENTS ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-[#F0F9FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/15 rounded-full text-accent-blue font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📑</span> Checklist
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Required Documents
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Please have these documents ready during the verification and
              enrolment process.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {requiredDocs.map((doc) => (
                <div
                  key={doc.title}
                  className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all"
                >
                  <span className="text-4xl block mb-4">{doc.icon}</span>
                  <h3 className="font-heading text-xl text-text-dark mb-2">
                    {doc.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-body leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ADMISSION FORM & CONTACT GRID ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="left">
                <AdmissionForm />
              </AnimatedSection>
            </div>

            {/* School Contact Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection direction="right">
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-200">
                  <h3 className="font-heading text-2xl text-text-dark mb-6">
                    School Contact Info 📍
                  </h3>

                  <div className="space-y-5 font-body">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-secondary/15 text-secondary-dark flex items-center justify-center shrink-0 mt-1">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-text-muted uppercase tracking-wider mb-1">
                          Campus Address
                        </p>
                        <p className="text-sm text-text-dark leading-relaxed font-semibold">
                          Kids covE School of Excellence
                        </p>
                        <p className="text-xs text-text-body leading-relaxed mt-0.5">
                          Ozhukur Palathinghal, Ozhukur Post, 673642, Mongam Via,
                          Malappuram Dist, Kerala State
                        </p>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-1">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-text-muted uppercase tracking-wider mb-1">
                          Phone Contacts
                        </p>
                        <p className="text-sm text-text-dark">
                          <span className="font-bold">School Desk:</span>{" "}
                          <a
                            href="tel:+918113000247"
                            className="text-primary font-bold hover:underline"
                          >
                            +91 811 3000 247
                          </a>
                        </p>
                        <p className="text-sm text-text-dark mt-1">
                          <span className="font-bold">Chairman Desk:</span>{" "}
                          <a
                            href="tel:+918330800247"
                            className="text-primary font-bold hover:underline"
                          >
                            +91 833 0800 247
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center shrink-0 mt-1">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-text-muted uppercase tracking-wider mb-1">
                          WhatsApp Enquiries
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <a
                            href="https://wa.me/918113000247"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-[#25D366] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#1EBE5D] transition-colors"
                          >
                            811 3000 247
                          </a>
                          <a
                            href="https://wa.me/918330800247"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-[#25D366] text-white px-3 py-1.5 rounded-full font-bold hover:bg-[#1EBE5D] transition-colors"
                          >
                            833 0800 247
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-accent-purple/15 text-accent-purple flex items-center justify-center shrink-0 mt-1">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-text-muted uppercase tracking-wider mb-1">
                          Email Address
                        </p>
                        <p className="text-sm text-text-dark">
                          <span className="font-bold">School:</span>{" "}
                          <a
                            href="mailto:ozhukurkids@gmail.com"
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            ozhukurkids@gmail.com
                          </a>
                        </p>
                        <p className="text-sm text-text-dark mt-1">
                          <span className="font-bold">Chairman:</span>{" "}
                          <a
                            href="mailto:mkchali@gmail.com"
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            mkchali@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-accent-yellow/40 text-amber-900 flex items-center justify-center shrink-0 mt-1">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-xs text-text-muted uppercase tracking-wider mb-1">
                          School Hours
                        </p>
                        <p className="text-sm font-bold text-text-dark">
                          09:20 AM – 03:30 PM
                        </p>
                        <p className="text-xs text-text-muted">
                          Monday through Saturday
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FREQUENTLY ASKED QUESTIONS (FAQ) ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-[#FFFBEB] py-16 sm:py-24 -mt-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-yellow/40 rounded-full text-text-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>❓</span> Common Queries
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Everything you need to know about enrolling your child at Kids covE
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-amber-100 open:shadow-md transition-all duration-200"
                >
                  <summary className="font-heading text-lg text-text-dark cursor-pointer list-none flex items-center justify-between gap-4 font-bold">
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform text-amber-800">
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </summary>
                  <div className="mt-4 pt-3 border-t border-gray-100 font-body text-sm sm:text-base text-text-body leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
