import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Kids covE School of Excellence | Best Montessori & Primary School in Ozhukur, Malappuram",
  description:
    "Welcome to Kids covE School of Excellence in Ozhukur, Malappuram, Kerala. Admissions booking open for Montessori 1 to Grade 4 with swimming, karate, roller skating, yoga, and modern facilities.",
  alternates: {
    canonical: "/",
  },
};

const whyChooseUs = [
  {
    icon: "🧒",
    title: "Children Come First",
    desc: "Children are at the heart of everything we do. We focus on their individual needs, happiness, confidence, and overall development.",
    color: "from-primary/10 to-accent-pink/10",
    border: "border-primary/20",
  },
  {
    icon: "🌿",
    title: "Safe, Secure & Nature-Friendly",
    desc: "We provide a clean, safe, secure, and child-friendly environment where children can learn, explore, and grow comfortably in close connection with nature.",
    color: "from-secondary/10 to-accent-green/10",
    border: "border-secondary/20",
  },
  {
    icon: "🌟",
    title: "Enthusiastic & Holistic Education",
    desc: "Our approach to education encourages curiosity, creativity, confidence, and active participation. We aim to make learning enjoyable, meaningful, and engaging for every child.",
    color: "from-accent-purple/10 to-accent-blue/10",
    border: "border-accent-purple/20",
  },
  {
    icon: "🍎",
    title: "Healthy Food & Hygienic Preparation",
    desc: "We give special attention to children's health and nutrition by providing healthy food prepared with proper hygiene, cleanliness, and care.",
    color: "from-accent-yellow/10 to-primary/10",
    border: "border-accent-yellow/20",
  },
  {
    icon: "💬",
    title: "Transparency & Open Communication",
    desc: "We believe that strong communication between the school and parents is essential for a child's success. We maintain transparency and encourage open, respectful, and regular communication with parents.",
    color: "from-accent-blue/10 to-secondary/10",
    border: "border-accent-blue/20",
  },
];

const highlights = [
  { icon: "💻", label: "Smart Classrooms", sub: "Interactive Digital Boards" },
  { icon: "🧩", label: "Montessori Lab", sub: "Hands-on Sensory Learning" },
  { icon: "🖥️", label: "Computer Lab", sub: "Digital Literacy & Skills" },
  { icon: "🚌", label: "School Bus Service", sub: "Safe Commute with Tracking" },
  { icon: "📹", label: "CCTV Surveillance", sub: "24/7 Campus-wide Safety" },
  { icon: "📖", label: "School Library", sub: "Storybooks & Reading Corner" },
  { icon: "🌳", label: "Nature Play Area", sub: "Open & Green Recreation" },
  { icon: "🗣️", label: "ECHO & English Clubs", sub: "Outreach & Public Speaking" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden pt-24 pb-12">
        <FloatingElements />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/30 border border-accent-yellow/50 rounded-full mb-6 shadow-sm">
                  <span className="animate-wiggle inline-block">🌟</span>
                  <span className="font-body font-bold text-xs sm:text-sm text-text-dark uppercase tracking-wider">
                    Admissions Booking Open • 2025–26
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
                  Welcome to{" "}
                  <span className="gradient-text">Kids covE</span>
                  <br />
                  <span className="text-2xl sm:text-4xl lg:text-5xl text-text-dark">
                    School of Excellence
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="font-body text-base sm:text-lg text-text-body max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  A nurturing sanctuary where every child&apos;s curiosity is met
                  with compassion and a holistic education that fuels lifelong
                  learning. Empowering young minds in Ozhukur, Kerala since 2022.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link
                    href="/admissions"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent-pink text-white rounded-full font-body font-bold text-base sm:text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-text-dark rounded-full font-body font-bold text-base sm:text-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-secondary/30 text-center"
                  >
                    Discover Our Story ✨
                  </Link>
                </div>
              </AnimatedSection>

              {/* Key Highlights Bar */}
              <AnimatedSection delay={400}>
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200/60 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-2xl sm:text-3xl text-primary font-bold">
                      2022
                    </p>
                    <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Founded
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-2xl sm:text-3xl text-secondary font-bold">
                      7 Grades
                    </p>
                    <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Mont 1 – Gr 4
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-heading text-2xl sm:text-3xl text-accent-purple font-bold">
                      Affordable
                    </p>
                    <p className="font-body text-xs text-text-muted font-semibold uppercase tracking-wider">
                      Fee Structure
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Image & Visual Badges */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative glow blob */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-yellow/30 via-primary/20 to-accent-pink/30 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/hero.png"
                    alt="Happy children learning and playing at Kids covE School of Excellence"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating badge 1 */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 sm:p-4 flex items-center gap-3 border border-gray-100 animate-bounce-gentle">
                  <div className="w-11 h-11 bg-accent-green/20 rounded-xl flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-heading text-sm text-text-dark font-bold">
                      Montessori & Primary
                    </p>
                    <p className="font-body text-xs text-text-muted">
                      Holistic Development
                    </p>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 flex items-center gap-2.5 border border-gray-100 animate-pulse-soft">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="font-heading text-xs text-text-dark font-bold">
                      Nature-Friendly
                    </p>
                    <p className="font-body text-[11px] text-text-muted">
                      Campus at Ozhukur
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== OFFICIAL WELCOME MESSAGE ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/15 rounded-full text-secondary-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
              <span>🌈</span> Welcome to Our Family
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark mb-6">
              A Nurturing Sanctuary Where{" "}
              <span className="gradient-text">Dreams Begin</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="bg-gradient-to-br from-amber-50/50 via-white to-pink-50/50 p-6 sm:p-10 rounded-[2rem] border border-amber-100/80 shadow-sm">
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed text-center sm:text-justify mb-6">
                <strong>Kids covE School of Excellence</strong> is a nurturing
                sanctuary where every child&apos;s curiosity is met with compassion
                and a holistic education that fuels lifelong learning. We
                empower our students to thrive through a dedicated mission of
                critical thinking and inclusivity, all while remaining
                accessible through an affordable fee structure.
              </p>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed text-center sm:text-justify mb-6">
                From our vibrant Montessori labs to specialized activities like{" "}
                <strong>
                  swimming, karate, art &amp; craft, roller skating, and yoga
                </strong>
                , we provide an environment designed to uncover and cultivate
                unique talents. Founded in 2022, we envision a future where your
                child is a leader of tomorrow, grounded in the values of
                excellence and creativity.
              </p>
              <p className="font-body text-base sm:text-lg text-text-dark font-semibold text-center">
                Join our community at Kids covE, where we turn every school day
                into a journey of discovery and growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-[#F0F9FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>💖</span> The Kids covE Difference
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Why Choose{" "}
              <span className="gradient-text">Kids covE</span>?
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-2xl mx-auto">
              We provide an enriching environment built around child happiness,
              safety, health, and transparent partnership with parents.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-gradient-to-br ${item.color} p-7 rounded-3xl border ${item.border} bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl sm:text-4xl">{item.icon}</span>
                    <span className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center font-heading text-sm font-bold text-text-dark shadow-xs ml-auto">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl mb-2.5 text-text-dark">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Commitment Card */}
              <div className="bg-gradient-to-br from-primary via-accent-pink to-accent-purple p-7 rounded-3xl text-white shadow-lg sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-4">
                    ✨
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-white">
                    Our Unwavering Commitment
                  </h3>
                  <p className="font-body text-sm text-white/90 leading-relaxed">
                    At Kids covE – School of Excellence, we are committed to
                    providing a nurturing, safe, and inspiring environment where
                    every child is valued, supported, and empowered to reach their
                    full potential.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                  <span className="font-body text-xs text-white/80 font-bold uppercase tracking-wider">
                    School of Excellence
                  </span>
                  <Link
                    href="/admissions"
                    className="text-xs bg-white text-primary px-3.5 py-1.5 rounded-full font-body font-bold hover:bg-white/90 transition-colors"
                  >
                    Join Us →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SCHOOL HIGHLIGHTS ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-[#FFFBEB] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-yellow/40 rounded-full text-text-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>🏫</span> Campus Facilities &amp; Features
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              School Highlights ✨
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-2xl mx-auto">
              Modern infrastructure designed for safety, comfort, and interactive
              learning.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-amber-100 hover:-translate-y-1 group"
                >
                  <span className="text-4xl sm:text-5xl block mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg text-text-dark mb-1">
                    {item.label}
                  </h3>
                  <p className="font-body text-xs text-text-muted font-medium">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <WaveDivider color="#FF6B6B" />
      <section className="bg-primary py-16 sm:py-24 -mt-1 relative overflow-hidden text-white">
        {/* Decorative background shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full text-white font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
              <span>🎒</span> Admissions Open • Session 2025–26
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
              Ready to Give Your Child the Best Start? 🚀
            </h2>
            <p className="font-body text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Kids covE family today! Admission booking starts from{" "}
              <strong>1st January</strong> and formal procedure from{" "}
              <strong>1st February</strong>. Seats and transportation are subject
              to availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admissions"
                className="w-full sm:w-auto px-9 py-4 bg-white text-primary rounded-full font-body font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Apply for Admission 🎓
              </Link>
              <a
                href="tel:+918113000247"
                className="w-full sm:w-auto px-9 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-body font-bold text-base sm:text-lg border-2 border-white/40 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call School: 811 3000 247</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
