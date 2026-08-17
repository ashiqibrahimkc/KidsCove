import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Academics & Gallery",
  description:
    "Explore the classes, activities, facilities, and gallery at Kids covE School of Excellence — Montessori to Grade 4, with diverse extracurriculars like Karate, Swimming, Yoga, and more.",
};

const classes = [
  {
    name: "Montessori 1",
    age: "Age 2.5+",
    color: "from-accent-pink to-primary",
    emoji: "🌱",
  },
  {
    name: "Montessori 2",
    age: "Age 3.5+",
    color: "from-accent-yellow to-primary",
    emoji: "🌻",
  },
  {
    name: "Montessori 3",
    age: "Age 4.5+",
    color: "from-secondary to-accent-green",
    emoji: "🌈",
  },
  {
    name: "Montessori 4",
    age: "Grade 1",
    color: "from-accent-blue to-accent-purple",
    emoji: "⭐",
  },
  {
    name: "Grade 2",
    age: "Age 7+",
    color: "from-accent-purple to-accent-pink",
    emoji: "📚",
  },
  {
    name: "Grade 3",
    age: "Age 8+",
    color: "from-primary to-accent-yellow",
    emoji: "🚀",
  },
  {
    name: "Grade 4",
    age: "Age 9+",
    color: "from-accent-green to-secondary",
    emoji: "🏆",
  },
];

const activities = [
  { name: "Skating", emoji: "⛸️", color: "bg-accent-blue/10", border: "border-accent-blue/20" },
  { name: "Karate", emoji: "🥋", color: "bg-primary/10", border: "border-primary/20" },
  { name: "Swimming", emoji: "🏊", color: "bg-secondary/10", border: "border-secondary/20" },
  { name: "Music", emoji: "🎵", color: "bg-accent-purple/10", border: "border-accent-purple/20" },
  { name: "Yoga", emoji: "🧘", color: "bg-accent-green/10", border: "border-accent-green/20" },
  { name: "Drawing", emoji: "🎨", color: "bg-accent-pink/10", border: "border-accent-pink/20" },
  { name: "Arts & Crafts", emoji: "✂️", color: "bg-accent-yellow/10", border: "border-accent-yellow/20" },
];

const facilities = [
  {
    name: "Computer Lab",
    desc: "Equipped with modern computers for digital literacy and tech-based learning.",
    emoji: "🖥️",
    color: "from-accent-blue/10 to-accent-purple/10",
  },
  {
    name: "Montessori Lab",
    desc: "Dedicated Montessori materials and hands-on learning stations for early learners.",
    emoji: "🧩",
    color: "from-secondary/10 to-accent-green/10",
  },
  {
    name: "Library",
    desc: "A curated collection of age-appropriate books to foster a love for reading.",
    emoji: "📖",
    color: "from-accent-yellow/10 to-primary/10",
  },
  {
    name: "Playground",
    desc: "Safe, spacious outdoor area with play equipment for physical development.",
    emoji: "🎢",
    color: "from-accent-pink/10 to-accent-purple/10",
  },
  {
    name: "Smart Classroom",
    desc: "Interactive digital boards and multimedia tools for engaging lessons.",
    emoji: "💻",
    color: "from-primary/10 to-accent-yellow/10",
  },
  {
    name: "CCTV Monitored",
    desc: "24/7 surveillance for complete campus safety and parental peace of mind.",
    emoji: "📹",
    color: "from-accent-green/10 to-secondary/10",
  },
];

const galleryImages = [
  { src: "/images/hero.png", alt: "Kids covE School campus", span: "col-span-2 row-span-2" },
  { src: "/images/classroom.png", alt: "Montessori Classroom", span: "" },
  { src: "/images/students.png", alt: "Happy students", span: "" },
  { src: "/images/playground.png", alt: "School playground", span: "col-span-2" },
  { src: "/images/activities.png", alt: "Student activities", span: "col-span-2" },
];

export default function AcademicsPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-warm overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span>🎓</span>
              <span className="font-body font-semibold text-sm text-primary">
                Learn & Explore
              </span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-4">
              Academics & <span className="gradient-text">Gallery</span> 📸
            </h1>
            <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">
              From Montessori to Grade 4, we offer a rich curriculum balanced
              with exciting activities and modern facilities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CLASSES OFFERED ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-body font-bold text-sm uppercase tracking-widest text-secondary">
              Our Programs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3">
              Classes We Offer 📝
            </h2>
            <p className="font-body text-text-muted mt-3 max-w-xl mx-auto">
              A structured learning journey from Montessori to primary school
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {classes.map((cls) => (
                <div
                  key={cls.name}
                  className="card-playful bg-white p-6 text-center shadow-lg border border-gray-100 group"
                >
                  <div
                    className={`w-14 h-14 mx-auto bg-gradient-to-br ${cls.color} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{cls.emoji}</span>
                  </div>
                  <h3 className="font-heading text-lg text-text-dark">
                    {cls.name}
                  </h3>
                  <p className="font-body text-xs text-text-muted mt-1 font-semibold">
                    {cls.age}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ACTIVITIES ===== */}
      <WaveDivider color="#FFF1F6" />
      <section className="bg-bg-light-pink py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="font-body font-bold text-sm uppercase tracking-widest text-accent-pink">
                Beyond the Classroom
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl mt-3 mb-6">
                Fun Activities 🎉
              </h2>
              <p className="font-body text-text-body leading-relaxed mb-8">
                We believe learning goes far beyond textbooks! Our students
                enjoy a wide range of exciting extracurricular activities that
                help them discover their passions, build confidence, and stay
                healthy.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {activities.map((act) => (
                  <div
                    key={act.name}
                    className={`card-playful ${act.color} p-4 flex items-center gap-3 border ${act.border}`}
                  >
                    <span className="text-3xl">{act.emoji}</span>
                    <span className="font-body font-semibold text-sm text-text-dark">
                      {act.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-pink/20 via-accent-purple/10 to-accent-yellow/20 rounded-[3rem] blur-xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/activities.png"
                    alt="Students enjoying various activities at Kids covE"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-bg-light-blue py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-body font-bold text-sm uppercase tracking-widest text-accent-blue">
              World-Class Infrastructure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3">
              Our Facilities 🏫
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac) => (
                <div
                  key={fac.name}
                  className={`card-playful bg-gradient-to-br ${fac.color} p-7 border border-white/50 backdrop-blur-sm`}
                >
                  <span className="text-4xl block mb-4">{fac.emoji}</span>
                  <h3 className="font-heading text-xl mb-2 text-text-dark">
                    {fac.name}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-bg-light-yellow py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="font-body font-bold text-sm uppercase tracking-widest text-accent-yellow">
              Life at Kids covE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mt-3">
              Photo Gallery 📸
            </h2>
            <p className="font-body text-text-muted mt-3 max-w-xl mx-auto">
              A glimpse into the vibrant life at our school
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`gallery-item ${img.span} shadow-lg`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
