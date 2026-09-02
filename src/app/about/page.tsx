import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Target, Clock, Award, Shield, Users, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | History, Vision & Mission",
  description:
    "Learn about Kids covE School of Excellence in Ozhukur, Malappuram — founded in 2022 with a vision to empower every child through curiosity, creativity, compassion, and holistic education at an affordable fee.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Kids covE School of Excellence, Ozhukur",
    description:
      "Founded in 2022, Kids covE provides nurturing Montessori & primary education in Ozhukur Palathinghal, Malappuram.",
    url: "/about",
  },
};

const values = [
  {
    icon: "💖",
    title: "Children Come First",
    desc: "Every decision revolves around children's happiness, emotional well-being, and individual growth.",
  },
  {
    icon: "🌱",
    title: "Nature Connection",
    desc: "Promoting green awareness, outdoor play, and nature-friendly learning spaces.",
  },
  {
    icon: "🤝",
    title: "Inclusive & Accessible",
    desc: "Providing high-standard Montessori & primary schooling with an affordable fee structure.",
  },
  {
    icon: "🛡️",
    title: "Safety & Care",
    desc: "CCTV surveillance, trained staff, hygienic meal facilities, and secure transportation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kidscoveschool.com" },
          { name: "About Us", url: "https://kidscoveschool.com/about" },
        ]}
      />
      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-cool overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-purple/15 rounded-full mb-4 text-accent-purple font-body font-bold text-xs sm:text-sm uppercase tracking-widest">
              <span>📖</span>
              <span>Our Story &amp; Philosophy</span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-3">
              About <span className="gradient-text">Kids covE</span>
            </h1>
            <p className="font-body text-xs sm:text-sm text-text-muted font-bold uppercase tracking-wider mb-5">
              Run By K C Ibrahim Haji Memorial Educational Trust
            </p>
            <p className="font-body text-base sm:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              Founded in 2022 in Ozhukur, Kerala, Kids covE School of Excellence
              is a vibrant community where children discover the joy of
              learning through love, curiosity, and creativity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SCHOOL HISTORY & JOURNEY ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-accent-blue/10 to-accent-purple/20 rounded-[3rem] blur-xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/gallery 7.jpeg"
                    alt="Students enjoying learning at Kids covE School"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Established Badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent-yellow rounded-2xl shadow-xl p-4 text-center border-2 border-white animate-wobble">
                  <p className="font-heading text-3xl text-text-dark font-bold leading-none">
                    2022
                  </p>
                  <p className="font-body text-xs text-text-dark font-bold uppercase tracking-wider mt-0.5">
                    Established
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* History Text */}
            <AnimatedSection direction="right">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-secondary/15 rounded-full text-secondary-dark font-body font-bold text-xs uppercase tracking-widest mb-3">
                <span>🏫</span> Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-text-dark mt-2 mb-6">
                Founded with a Passion for{" "}
                <span className="gradient-text">Excellence</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed mb-4">
                Established in <strong>2022</strong>, the story of <strong>Kids covE School of Excellence</strong> is one of resilience, unwavering vision, and a profound commitment to educational quality. What began as a &ldquo;simple dream&rdquo; was built from the ground up, starting from scratch with a modest but determined foundation of fewer than 10 students and just two dedicated teachers.
              </p>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed mb-4">
                From its inception, the school was more than just an institution; it was affectionately regarded as the &ldquo;6th member of the family&rdquo;&mdash;a living, breathing entity that required nurturing, sacrifice, and a &ldquo;strong and raw&rdquo; determination to succeed. This personal connection drove the founders to create a sanctuary where curiosity could meet compassion.
              </p>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed mb-4">
                The journey was not without its challenges. In the early days, the school faced significant backlash and external pressure, largely because of its uncompromising focus on excellence rather than following traditional, well-trodden paths. Despite these hurdles, the leadership remained steadfast in their goal to bring high-quality, professional education to the Ozhukur area while maintaining an affordable fee structure.
              </p>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed">
                Today, that vision has thrived. Kids covE has grown into a vibrant community, guiding students from their early Montessori years through the 4th standard. It stands as a testament to the idea that a school built on the values of inclusivity, critical thinking, and holistic development can turn every school day into a journey of discovery and growth.
              </p>
              
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <WaveDivider color="#F5F3FF" />
      <section className="bg-[#F5F3FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-purple/15 rounded-full text-accent-purple font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>💫</span> Guiding Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Our Vision &amp; Mission
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              The core beliefs that shape our curriculum, culture, and care.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <AnimatedSection direction="left">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-accent-purple/20 h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mb-6 shadow-md text-white">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl mb-4 text-accent-purple">
                    Our Vision
                  </h3>
                  <p className="font-body text-base sm:text-lg text-text-body leading-relaxed">
                    &ldquo;Kids covE envisions a future where every child is
                    empowered to thrive, fuelled by curiosity, creativity and
                    compassion – all made accessible through an affordable
                    fee.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-body font-bold text-accent-purple uppercase tracking-wider">
                  <span>✨</span> Future-Ready &amp; Inclusive
                </div>
              </div>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection direction="right">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-secondary/20 h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-green rounded-2xl flex items-center justify-center mb-6 shadow-md text-white">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl mb-4 text-secondary-dark">
                    Our Mission
                  </h3>
                  <p className="font-body text-base sm:text-lg text-text-body leading-relaxed">
                    &ldquo;At Kids covE, we are dedicated to providing a
                    nurturing and inclusive environment where children receive a
                    holistic education that fosters curiosity, critical
                    thinking and a lifelong love for learning.&rdquo;
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-body font-bold text-secondary-dark uppercase tracking-wider">
                  <span>🎯</span> Holistic &amp; Lifelong Learning
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>🌟</span> What We Stand For
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Core Values at Kids covE
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-amber-50/40 p-6 rounded-2xl border border-amber-100/80 shadow-xs hover:shadow-md transition-all text-center"
                >
                  <span className="text-4xl block mb-3">{v.icon}</span>
                  <h3 className="font-heading text-lg text-text-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PRINCIPAL'S DESK ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-[#FFFBEB] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-yellow/40 rounded-full text-text-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📝</span> Leadership &amp; Guidance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              From the Principal&apos;s Desk
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-amber-200/60">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Principal image */}
                <div className="md:col-span-2 relative bg-gradient-to-br from-primary/10 via-accent-pink/10 to-accent-yellow/10 p-8 flex items-center justify-center">
                  <div className="relative text-center">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                      <Image
                        src="/images/principle.png"
                        alt="Principal of Kids covE School of Excellence"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 inline-block bg-primary text-white px-4 py-1 rounded-full shadow-md">
                      <p className="font-body font-bold text-xs">
                        Principal&apos;s Message
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message text */}
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="font-heading text-xl sm:text-2xl text-text-dark mb-3">
                    &ldquo;From a Simple Dream to a Thriving Institution&rdquo;
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    From the first brick laid in 2022 to the vibrant hallways we walk today, watching Kids covE – School of Excellence grow from a simple dream into a thriving institution has been the greatest journey of my life. There is a deep sense of nostalgia in looking back at our beginnings; what started as &ldquo;scratch&rdquo; has been meticulously curated into a sanctuary where curiosity meets compassion.
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-6">
                    Today, we are more than just a school; we are a community dedicated to a holistic education that remains accessible to all. Seeing our Montessori labs filled with life and our students mastering everything from art to karate reminds me that we haven&apos;t just built a building&mdash;we&apos;ve built a future. It is an honor to lead this institution as we continue to turn every school day into a journey of discovery and growth.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-heading text-lg text-primary font-bold">
                      From the Principal&apos;s Desk
                    </p>
                    <p className="font-body text-xs text-text-muted">
                      Kids covE School of Excellence, Ozhukur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CHAIRMAN'S MESSAGE ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-[#F0F9FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/15 rounded-full text-accent-blue font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>💬</span> Chairman&apos;s Desk
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Message from the Chairman
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-blue-100/80">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Chairman image */}
                <div className="md:col-span-2 relative bg-gradient-to-br from-secondary/10 via-accent-blue/10 to-accent-purple/10 p-8 flex items-center justify-center">
                  <div className="relative text-center">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                      <Image
                        src="/images/chairman.png"
                        alt="Mohamed Karattu Chali - Chairman of Kids covE School of Excellence"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 inline-block bg-secondary text-white px-4 py-1 rounded-full shadow-md">
                      <p className="font-body font-bold text-xs">
                        Chairman
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message text */}
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="font-heading text-xl sm:text-2xl text-text-dark mb-3">
                    &ldquo;Building Strong Roots for a Bright Future&rdquo;
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    Welcome to our school website! When we established this institution in 2022 under the <strong>K C Ibrahim Haji Memorial Educational Trust</strong>, our core vision was to create a warm, nurturing environment where young learners feel safe, curious, and excited to explore the world around them. Beyond being an educational institution, our principal goal and ambition have always been to bring high-quality, professional education to the Ozhukur area while maintaining an affordable fee structure.
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    Today, as we proudly guide our students from their early steps through the 4th standard, seeing that vision thrive fills me with immense joy and gratitude.
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    At Kids covE School of Excellence, primary education is about far more than textbooks and exams; it is about building character, fostering creativity, and cultivating a lifelong love for learning. We focus on a holistic approach where strong academic foundations, values, and individual care go hand in hand. Every child is unique, and our dedicated team of educators works tirelessly to discover and nurture the potential within each student.
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    Our success in a short period is a testament to the trust placed in us by parents and the tireless efforts of our faculty and staff. As our young students build strong roots for a bright future, we remain deeply committed to upholding high standards of excellence, safety, and care.
                  </p>
                  <p className="font-body text-base text-text-body leading-relaxed mb-6">
                    Thank you for being a part of our school family. I invite you to explore our website to discover the vibrant life and learning that define our school community.
                  </p>
                  <div className="pt-5 border-t border-gray-100">
                    <p className="font-body text-sm text-text-body italic mb-1">
                      With warm and best regards,
                    </p>
                    <p className="font-heading text-xl text-text-dark font-bold">
                      Mohamed Karattu Chali
                    </p>
                    <p className="font-body text-xs sm:text-sm text-text-muted">
                      Chairman, Kids covE School of Excellence, Ozhukur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SCHOOL TIMINGS ===== */}
      <WaveDivider color="#ECFDF5" />
      <section className="bg-[#ECFDF5] py-16 sm:py-24 -mt-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 text-center border border-accent-green/20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary to-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md text-white">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-text-dark mb-2">
                Official School Timings 🕐
              </h2>
              <p className="font-body text-sm sm:text-base text-text-muted mb-8">
                Structured daily hours ensuring optimal learning, activities, and
                rest
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-gradient-to-r from-secondary/10 to-accent-green/10 rounded-2xl px-8 py-6 border border-secondary/20 shadow-xs">
                <div className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl text-secondary font-bold">
                    09:20 AM
                  </p>
                  <p className="font-body text-xs sm:text-sm text-text-muted font-bold uppercase tracking-wider mt-1">
                    Morning Assembly &amp; Start
                  </p>
                </div>
                <span className="hidden sm:inline text-3xl text-secondary">➔</span>
                <div className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl text-primary font-bold">
                    03:30 PM
                  </p>
                  <p className="font-body text-xs sm:text-sm text-text-muted font-bold uppercase tracking-wider mt-1">
                    Dispersal &amp; Bus Departure
                  </p>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-text-muted mt-6">
                Monday through Saturday • Holidays observed as per state academic
                calendar
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
