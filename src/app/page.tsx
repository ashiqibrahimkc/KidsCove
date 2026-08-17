import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";

const whyChooseUs = [
  {
    icon: "🎨",
    title: "Creative Learning",
    desc: "Hands-on activities that spark imagination and foster a lifelong love for learning.",
    color: "from-primary/10 to-accent-pink/10",
    border: "border-primary/20",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Educators",
    desc: "Caring, qualified teachers who nurture every child's unique potential.",
    color: "from-secondary/10 to-accent-green/10",
    border: "border-secondary/20",
  },
  {
    icon: "🏫",
    title: "Safe Environment",
    desc: "CCTV-monitored campus with secure entry ensuring your child's safety at all times.",
    color: "from-accent-purple/10 to-accent-blue/10",
    border: "border-accent-purple/20",
  },
  {
    icon: "💰",
    title: "Affordable Fees",
    desc: "Quality education made accessible to every family in the community.",
    color: "from-accent-yellow/10 to-primary/10",
    border: "border-accent-yellow/20",
  },
  {
    icon: "🧒",
    title: "Holistic Growth",
    desc: "Balanced curriculum with sports, arts, yoga, and extracurricular activities.",
    color: "from-accent-pink/10 to-accent-purple/10",
    border: "border-accent-pink/20",
  },
  {
    icon: "🚌",
    title: "Transport Facility",
    desc: "Comfortable school bus service covering surrounding areas for hassle-free commute.",
    color: "from-accent-blue/10 to-secondary/10",
    border: "border-accent-blue/20",
  },
];

const highlights = [
  { icon: "💻", label: "Smart Classrooms" },
  { icon: "👩‍🏫", label: "Experienced Teachers" },
  { icon: "🚌", label: "School Bus" },
  { icon: "📹", label: "CCTV Surveillance" },
  { icon: "🧪", label: "Montessori Lab" },
  { icon: "🖥️", label: "Computer Lab" },
  { icon: "🎨", label: "Arts & Crafts" },
  { icon: "🧘", label: "Yoga & Fitness" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
        <FloatingElements />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/20 rounded-full mb-6">
                  <span className="animate-wiggle inline-block">🌟</span>
                  <span className="font-body font-semibold text-sm text-primary">
                    Admissions Open 2025–26
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
                  Welcome to{" "}
                  <span className="gradient-text">Kids covE</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-text-body">
                    School of Excellence
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="font-body text-lg text-text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Where tiny hands create big dreams! We nurture every child
                  with love, creativity, and care — building confident
                  learners who are ready to explore the world with curiosity
                  and joy.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent-pink text-white rounded-full font-body font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Apply Now 🎓
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 bg-white text-text-dark rounded-full font-body font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-secondary/30"
                  >
                    Discover More ✨
                  </Link>
                </div>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection delay={400}>
                <div className="flex items-center justify-center lg:justify-start gap-8 mt-10">
                  {[
                    { num: "3+", label: "Years" },
                    { num: "7", label: "Grades" },
                    { num: "7+", label: "Activities" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-heading text-3xl text-primary">
                        {stat.num}
                      </p>
                      <p className="font-body text-xs text-text-muted uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Image */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                {/* Decorative blob behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-yellow/30 via-primary/20 to-accent-pink/30 rounded-[3rem] blur-2xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/hero.png"
                    alt="Happy children learning and playing at Kids covE School"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce-gentle">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-heading text-sm text-text-dark">
                      Trusted by
                    </p>
                    <p className="font-body text-xs text-text-muted">
                      100+ Families
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WELCOME MESSAGE ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-20 -mt-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="font-body font-bold text-sm uppercase tracking-widest text-secondary">
              Welcome to Our Family
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6">
              A Place Where{" "}
              <span className="gradient-text">Dreams Begin</span> 🌈
            </h2>
            <p className="font-body text-lg text-text-body leading-relaxed max-w-3xl mx-auto">
              At Kids covE School of Excellence, we believe every child is a
              star waiting to shine. Founded in 2022 in the heart of Ozhukur,
              our school provides a warm, nurturing environment where little
              learners discover the joy of education. Our dedicated team of
              educators blends modern teaching methods with the time-tested
              Montessori approach to develop well-rounded, confident, and
              compassionate young individuals. From creative arts to
              physical fitness, we ensure your child grows in every dimension
              — intellectually, emotionally, and socially.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-bg-light-blue py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-body font-bold text-sm uppercase tracking-widest text-primary">
              Why Families Love Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3">
              Why Choose{" "}
              <span className="gradient-text">Kids covE</span>? 🌟
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className={`card-playful bg-gradient-to-br ${item.color} p-7 border ${item.border} backdrop-blur-sm`}
                >
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="font-heading text-xl mb-2 text-text-dark">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SCHOOL HIGHLIGHTS ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-bg-light-yellow py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-body font-bold text-sm uppercase tracking-widest text-accent-pink">
              What Makes Us Special
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3">
              School Highlights ✨
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="card-playful bg-white p-6 text-center shadow-md border border-accent-yellow/10"
                >
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <p className="font-body font-semibold text-sm text-text-dark">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <WaveDivider color="#FF6B35" />
      <section className="bg-primary py-20 -mt-1 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Give Your Child the Best Start? 🚀
            </h2>
            <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join the Kids covE family today! Limited seats available for the
              upcoming academic session. Enquire now to secure your child&apos;s
              spot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-primary rounded-full font-body font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Apply for Admission 🎓
              </Link>
              <a
                href="tel:+918113000247"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-body font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Call Us: 8113000247 📞
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
