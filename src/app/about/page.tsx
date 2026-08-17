import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kids covE School of Excellence — our history, vision, mission, and the values that drive us to provide quality education to young minds in Ozhukur, Kerala.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-cool overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/15 rounded-full mb-4">
              <span>📖</span>
              <span className="font-body font-semibold text-sm text-accent-purple">
                Our Story
              </span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-4">
              About <span className="gradient-text">Kids covE</span> 🌟
            </h1>
            <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">
              Discover the heart and soul behind our school — where every child
              is cherished, every dream is celebrated, and every day is an
              adventure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SCHOOL HISTORY ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-accent-blue/10 to-accent-purple/20 rounded-[3rem] blur-xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/students.png"
                    alt="Kids covE School students"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-3 -right-3 bg-accent-yellow rounded-2xl shadow-lg p-4 text-center animate-wobble">
                  <p className="font-heading text-2xl text-text-dark">2022</p>
                  <p className="font-body text-xs text-text-body font-semibold">
                    Est.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="font-body font-bold text-sm uppercase tracking-widest text-secondary">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl mt-3 mb-6">
                A Dream That Became a Home 🏫
              </h2>
              <p className="font-body text-text-body leading-relaxed mb-4">
                Kids covE School of Excellence was born in 2022 from a simple
                yet powerful dream — to create a space where young children
                could learn, grow, and thrive in a nurturing environment, all
                at an affordable cost.
              </p>
              <p className="font-body text-text-body leading-relaxed mb-4">
                What started as a small school with a handful of eager learners
                has blossomed into a vibrant community of families who share
                our passion for quality early education. Nestled in the
                beautiful village of Ozhukur, Malappuram, our school combines
                the warmth of a home with the excellence of modern education.
              </p>
              <p className="font-body text-text-body leading-relaxed">
                Today, Kids covE stands proud as a trusted institution that
                parents choose for its commitment to holistic development,
                experienced faculty, and a curriculum that makes learning a
                joyful adventure.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <WaveDivider color="#F5F3FF" />
      <section className="bg-bg-light-purple py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
              What Drives Us 💫
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="card-playful bg-white p-8 sm:p-10 shadow-lg border border-accent-purple/10 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🔭</span>
                </div>
                <h3 className="font-heading text-2xl mb-4 text-accent-purple">
                  Our Vision
                </h3>
                <p className="font-body text-text-body leading-relaxed text-base">
                  Kids covE envisions a future where every child is empowered
                  to thrive, fuelled by curiosity, creativity and compassion —
                  all made accessible through an affordable fee.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="card-playful bg-white p-8 sm:p-10 shadow-lg border border-secondary/10 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-heading text-2xl mb-4 text-secondary-dark">
                  Our Mission
                </h3>
                <p className="font-body text-text-body leading-relaxed text-base">
                  At Kids covE, we are dedicated to providing a nurturing and
                  inclusive environment where children receive a holistic
                  education that fosters curiosity, critical thinking and a
                  lifelong love for learning.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PRINCIPAL'S MESSAGE ===== */}
      <WaveDivider color="#FFF8F0" />
      <section className="bg-bg-cream py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
              From the Principal&apos;s Desk 📝
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-primary/10">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Principal Image */}
                <div className="md:col-span-2 relative bg-gradient-to-br from-primary/10 via-accent-pink/10 to-accent-yellow/10 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                      <Image
                        src="/images/principal.png"
                        alt="Principal of Kids covE School"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1.5 rounded-full shadow-md">
                      <p className="font-body font-bold text-xs whitespace-nowrap">
                        Principal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="text-5xl text-primary/20 font-serif mb-2">
                    &ldquo;
                  </div>
                  <p className="font-body text-text-body leading-relaxed mb-4">
                    Dear Parents, welcome to Kids covE! As the principal of this
                    wonderful school, I am deeply committed to ensuring that
                    each child who walks through our doors feels safe, valued,
                    and inspired.
                  </p>
                  <p className="font-body text-text-body leading-relaxed mb-4">
                    We believe that early education is the foundation for a
                    lifetime of success. Our team of passionate educators works
                    tirelessly to create a vibrant learning environment where
                    children develop not just academically, but also socially
                    and emotionally.
                  </p>
                  <p className="font-body text-text-body leading-relaxed">
                    I invite you to visit us and see firsthand the love and care
                    that goes into everything we do. Together, let us build a
                    brighter future for your child.
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-heading text-lg text-text-dark">
                      Warm Regards
                    </p>
                    <p className="font-body text-sm text-text-muted">
                      Principal, Kids covE School of Excellence
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
      <section className="bg-bg-light-green py-20 -mt-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-12 text-center border border-accent-green/10">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-soft">
                <span className="text-4xl">🕐</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl mb-2">
                School Timings
              </h2>
              <p className="font-body text-text-muted mb-8">
                We follow a structured daily schedule
              </p>

              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-secondary/10 to-accent-green/10 rounded-2xl px-8 py-6 border border-secondary/20">
                <div className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl text-secondary">
                    9:30
                  </p>
                  <p className="font-body text-sm text-text-muted font-semibold">
                    AM
                  </p>
                </div>
                <div className="text-3xl text-text-muted">→</div>
                <div className="text-center">
                  <p className="font-heading text-3xl sm:text-4xl text-primary">
                    3:30
                  </p>
                  <p className="font-body text-sm text-text-muted font-semibold">
                    PM
                  </p>
                </div>
              </div>

              <p className="font-body text-sm text-text-muted mt-6">
                Monday through Saturday • Holidays as per academic calendar
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
