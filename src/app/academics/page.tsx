import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sparkles, Trophy, Users, Shield, Bus, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElements from "@/components/FloatingElements";
import WaveDivider from "@/components/WaveDivider";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Academics, Facilities & Gallery | Montessori to Grade 4",
  description:
    "Explore academic programs (Montessori 1 to Grade 4), sports (Roller Skating, Karate, Swimming, Yoga), modern facilities, and student clubs (ECHO & English Club) at Kids covE School of Excellence in Ozhukur, Malappuram.",
  alternates: {
    canonical: "/academics",
  },
  openGraph: {
    title: "Academics & Activities | Kids covE School of Excellence",
    description:
      "Montessori to Grade 4, swimming, karate, roller skating, smart classrooms, and nature-friendly play area in Ozhukur.",
    url: "/academics",
  },
};

const classes = [
  {
    name: "Montessori 1",
    age: "Age 2.5+",
    color: "from-accent-pink to-primary",
    emoji: "🌱",
    desc: "Sensory exploration, motor skills & gentle socialization.",
  },
  {
    name: "Montessori 2",
    age: "Age 3.5+",
    color: "from-accent-yellow to-primary",
    emoji: "🌻",
    desc: "Language development, numbers & creative expression.",
  },
  {
    name: "Montessori 3",
    age: "Age 4.5+",
    color: "from-secondary to-accent-green",
    emoji: "🌈",
    desc: "Reading readiness, logical thinking & cooperative play.",
  },
  {
    name: "Montessori 4 (Grade 1)",
    age: "Age 5.5 - 6+",
    color: "from-accent-blue to-accent-purple",
    emoji: "⭐",
    desc: "Structured primary foundation, foundational literacy & numeracy.",
  },
  {
    name: "Grade 2",
    age: "Age 7+",
    color: "from-accent-purple to-accent-pink",
    emoji: "📚",
    desc: "Subject-based learning, inquiry skills & team projects.",
  },
  {
    name: "Grade 3",
    age: "Age 8+",
    color: "from-primary to-accent-yellow",
    emoji: "🚀",
    desc: "Critical thinking, science curiosity & bilingual fluency.",
  },
  {
    name: "Grade 4",
    age: "Age 9+",
    color: "from-accent-green to-secondary",
    emoji: "🏆",
    desc: "Advanced concepts, leadership, digital literacy & sports.",
  },
];

const activities = [
  {
    name: "Roller Skating",
    emoji: "🛼",
    color: "bg-accent-blue/10",
    border: "border-accent-blue/20",
    desc: "Balance, coordination, fitness & agility.",
  },
  {
    name: "Karate",
    emoji: "🥋",
    color: "bg-primary/10",
    border: "border-primary/20",
    desc: "Self-defense, discipline, focus & confidence.",
  },
  {
    name: "Swimming",
    emoji: "🏊",
    color: "bg-secondary/10",
    border: "border-secondary/20",
    desc: "Water safety, stamina & full-body physical growth.",
  },
  {
    name: "Yoga & Mindfulness",
    emoji: "🧘",
    color: "bg-accent-green/10",
    border: "border-accent-green/20",
    desc: "Flexibility, mental calm, posture & breathing control.",
  },
  {
    name: "Music & Rhymes",
    emoji: "🎵",
    color: "bg-accent-purple/10",
    border: "border-accent-purple/20",
    desc: "Rhythm, auditory training, vocals & musicality.",
  },
  {
    name: "Drawing & Sketching",
    emoji: "🎨",
    color: "bg-accent-pink/10",
    border: "border-accent-pink/20",
    desc: "Fine motor control, color sense & visual thinking.",
  },
  {
    name: "Arts & Crafts",
    emoji: "✂️",
    color: "bg-accent-yellow/20",
    border: "border-accent-yellow/40",
    desc: "Hands-on crafting, sculpting, paper folding & origami.",
  },
];

const facilities = [
  {
    name: "Montessori Lab",
    desc: "Equipped with specialized sensorial materials, wooden counting toys, and practical life kits.",
    emoji: "🧩",
    color: "from-secondary/10 to-accent-green/10",
  },
  {
    name: "Computer Lab",
    desc: "Modern digital workstations to introduce computational thinking and age-appropriate tech skills.",
    emoji: "🖥️",
    color: "from-accent-blue/10 to-accent-purple/10",
  },
  {
    name: "Smart Classrooms",
    desc: "Interactive screens, audiovisual tools, and multimedia digital content for immersive lessons.",
    emoji: "💻",
    color: "from-primary/10 to-accent-yellow/10",
  },
  {
    name: "School Library",
    desc: "Rich collection of colorful illustrated storybooks, children's encyclopedias, and literature.",
    emoji: "📖",
    color: "from-accent-yellow/10 to-primary/10",
  },
  {
    name: "School Bus Transport",
    desc: "Safe and comfortable bus fleet covering Ozhukur, Mongam, and nearby areas with experienced drivers.",
    emoji: "🚌",
    color: "from-accent-blue/10 to-secondary/10",
  },
  {
    name: "CCTV Surveillance",
    desc: "24/7 campus-wide camera monitoring for comprehensive student safety and peace of mind.",
    emoji: "📹",
    color: "from-accent-green/10 to-secondary/10",
  },
  {
    name: "Dining Hall & Clean Kitchen",
    desc: "Dedicated hygienic dining area ensuring fresh, healthy, and clean food consumption.",
    emoji: "🍽️",
    color: "from-accent-pink/10 to-accent-purple/10",
  },
  {
    name: "Clean & Child-Friendly Toilets",
    desc: "Spotless, sanitized, age-appropriate restroom facilities maintained with utmost hygiene.",
    emoji: "🧼",
    color: "from-secondary/10 to-accent-blue/10",
  },
  {
    name: "Nature Play Area",
    desc: "Spacious outdoor grass play space with child-safe swings, slides, and connection with nature.",
    emoji: "🌳",
    color: "from-accent-green/10 to-accent-yellow/10",
  },
];

const galleryImages = [
  {
    src: "/images/grad gala.jpeg",
    alt: "Montessori 3 Convocation & Grad Gala Ceremony at Kids covE School",
    label: "Montessori Convocation & Grad Gala",
  },
  {
    src: "/images/students.jpeg",
    alt: "Students in roller skating practice with safety helmets and gear at Kids covE School",
    label: "Roller Skating Coaching & Sports",
  },
  {
    src: "/images/school.jpeg",
    alt: "Kids covE Main Campus & School Building",
    label: "Main Campus & School Building",
  },
  {
    src: "/images/staff.jpeg",
    alt: "Our dedicated teaching faculty and staff team at Kids covE School of Excellence",
    label: "Our Dedicated Faculty & Staff",
  },
  {
    src: "/images/colours day.jpeg",
    alt: "Colours Day celebration with teachers and school leadership",
    label: "Colours Day Celebration",
  },
  {
    src: "/images/onam.jpeg",
    alt: "Onam celebration with floral pookalam carpet and traditional attire",
    label: "Onam Festival Celebration",
  },
  {
    src: "/images/independence day.jpeg",
    alt: "Independence Day celebration at Kids covE School of Excellence",
    label: "Independence Day Celebration",
  },
  {
    src: "/images/karat.jpeg",
    alt: "Karate & Martial Arts Coaching",
    label: "Karate & Martial Arts Coaching",
  },
  {
    src: "/images/Drawing .jpeg",
    alt: "Drawing & Creative Art Corner",
    label: "Drawing & Creative Art Corner",
  },
  {
    src: "/images/activity 1.jpeg",
    alt: "Hands-on Montessori Learning",
    label: "Hands-on Montessori Learning",
  },
  {
    src: "/images/activity 2.jpeg",
    alt: "Interactive Classroom Activities",
    label: "Co-Curricular Activities",
  },
  {
    src: "/images/gallery.jpeg",
    alt: "Sensory & Experiential Education",
    label: "Sensory & Experiential Education",
  },
  {
    src: "/images/gallery 1.jpeg",
    alt: "Early Phonics & Language Skills",
    label: "Parent-Teacher Interaction",
  },
  {
    src: "/images/gallery 2.jpeg",
    alt: "Joyful Moments with Friends",
    label: "Our Happy Students",
  },
  {
    src: "/images/gallery 3.jpeg",
    alt: "Foundational STEM & Numeracy",
    label: "Flowers Day Celebration",
  },
  
  {
    src: "/images/gallery 5.jpeg",
    alt: "Early Childhood Development",
    label: "Zoo Field Trip",
  },
  {
    src: "/images/gallery 6.jpeg",
    alt: "Practical Life Skills Training",
    label: "Exploring Marine Life",
  },
  {
    src: "/images/gallery 7.jpeg",
    alt: "Vibrant School Community",
    label: "Happy Moments with Friends",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://kidscoveschool.com" },
          { name: "Academics & Gallery", url: "https://kidscoveschool.com/academics" },
        ]}
      />
      {/* ===== PAGE HERO ===== */}
      <section className="relative bg-gradient-hero overflow-hidden pt-28 pb-16">
        <FloatingElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4 text-primary font-body font-bold text-xs sm:text-sm uppercase tracking-widest">
              <span>🎓</span>
              <span>Holistic Learning &amp; Campus</span>
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-dark mb-4">
              Academics, Facilities &amp; <span className="gradient-text">Gallery</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
              From our vibrant Montessori stages through Grade 4, we combine
              academics with dynamic sports, arts, modern labs, and enriching
              clubs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CLASSES OFFERED ===== */}
      <WaveDivider color="#FFFFFF" />
      <section className="bg-white py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/15 rounded-full text-secondary-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📚</span> Programs Offered
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Classes from Montessori to Grade 4
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Tailored age-appropriate stages nurturing confidence, knowledge,
              and character at every milestone.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {classes.map((cls) => (
                <div
                  key={cls.name}
                  className="bg-white p-6 rounded-3xl text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-16 h-16 mx-auto bg-gradient-to-br ${cls.color} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-3xl">{cls.emoji}</span>
                    </div>
                    <h3 className="font-heading text-xl text-text-dark">
                      {cls.name}
                    </h3>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-body font-bold text-text-muted mt-2 mb-3">
                      {cls.age}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-text-body leading-relaxed">
                      {cls.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <Link
                      href="/admissions"
                      className="text-xs font-body font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1"
                    >
                      <span>Enquire for {cls.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SPECIAL STUDENT CLUBS ===== */}
      <WaveDivider color="#F0FDF4" />
      <section className="bg-[#F0FDF4] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-green/20 rounded-full text-accent-green-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>🌟</span> Skill Development &amp; Outreach
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Special Student Clubs
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-2xl mx-auto">
              Empowering students beyond textbooks with real-world communication,
              ecological awareness, and social leadership.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ECHO Club */}
            <AnimatedSection direction="left">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-accent-green/30 h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-secondary rounded-2xl flex items-center justify-center shadow-md text-white text-3xl">
                      🌿
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl text-text-dark">
                        ECHO Club
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-secondary-dark font-bold">
                        Environmental Care, Health &amp; Outreach Club
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    The ECHO Club inspires our children to understand and
                    cherish the environment, practice good health and hygiene,
                    and participate in meaningful community outreach.
                  </p>
                  <ul className="space-y-2 font-body text-sm text-text-body">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green font-bold">✓</span>
                      <span>Tree planting, gardening, and waste segregation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green font-bold">✓</span>
                      <span>Healthy lifestyle and nutritional awareness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green font-bold">✓</span>
                      <span>Compassionate outreach and community care</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <span className="text-xs font-body font-bold text-accent-green uppercase tracking-wider">
                    Eco-Conscious Generation
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* English Club */}
            <AnimatedSection direction="right">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-accent-blue/30 h-full flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center shadow-md text-white text-3xl">
                      🗣️
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl text-text-dark">
                        English Club
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-accent-blue font-bold">
                        Language, Confidence &amp; Public Speaking
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-base text-text-body leading-relaxed mb-4">
                    A vibrant platform created to develop English language
                    skills, communication, confidence, creativity, and public
                    speaking through exciting and engaging activities.
                  </p>
                  <ul className="space-y-2 font-body text-sm text-text-body">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-blue font-bold">✓</span>
                      <span>Storytelling, recitations, and vocabulary games</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-blue font-bold">✓</span>
                      <span>Role plays, skits, and drama sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-blue font-bold">✓</span>
                      <span>Public speaking and conversational confidence</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <span className="text-xs font-body font-bold text-accent-blue uppercase tracking-wider">
                    Confident Communicators
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== ACTIVITIES ===== */}
      <WaveDivider color="#FFF1F6" />
      <section className="bg-[#FFF1F6] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-pink/15 rounded-full text-accent-pink font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
                <span>🎉</span> Active Lifestyle
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-text-dark mt-2 mb-6">
                Special Activities &amp; Sports
              </h2>
              <p className="font-body text-base sm:text-lg text-text-body leading-relaxed mb-8">
                We believe that physical health, artistic expression, and mental
                calm are vital to a child&apos;s holistic growth. Our students
                benefit from dedicated weekly coaching in specialized sports and
                creative arts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((act) => (
                  <div
                    key={act.name}
                    className={`bg-white p-4 rounded-2xl flex items-start gap-3.5 border ${act.border} shadow-xs hover:shadow-md transition-shadow`}
                  >
                    <span className="text-3xl">{act.emoji}</span>
                    <div>
                      <h4 className="font-heading text-base text-text-dark">
                        {act.name}
                      </h4>
                      <p className="font-body text-xs text-text-muted mt-0.5">
                        {act.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Activities Photos */}
            <AnimatedSection direction="right" className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/20 via-primary/10 to-accent-yellow/20 rounded-[2.5rem] blur-xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/images/students.jpeg"
                    alt="Students practicing Roller Skating with safety gear at Kids covE School"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-3.5 bg-white text-center border-t border-gray-100">
                    <p className="font-heading text-sm text-text-dark font-bold">
                      🛼 Roller Skating Coaching
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-accent-pink/20 via-accent-purple/10 to-accent-yellow/20 rounded-[2.5rem] blur-xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-white">
                  <Image
                    src="/images/karat.jpeg"
                    alt="Students practicing Karate and Martial Arts at Kids covE School"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="p-3.5 bg-white text-center border-t border-gray-100">
                    <p className="font-heading text-sm text-text-dark font-bold">
                      🥋 Karate &amp; Martial Arts Training
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CAMPUS FACILITIES ===== */}
      <WaveDivider color="#F0F9FF" />
      <section className="bg-[#F0F9FF] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/15 rounded-full text-accent-blue font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>🏫</span> Safe &amp; Modern Infrastructure
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              Our Facilities
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Every corner of Kids covE is planned for safety, hygiene, and
              interactive discovery.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac) => (
                <div
                  key={fac.name}
                  className={`bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-4xl block mb-4">{fac.emoji}</span>
                    <h3 className="font-heading text-xl mb-2 text-text-dark">
                      {fac.name}
                    </h3>
                    <p className="font-body text-sm text-text-body leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <WaveDivider color="#FFFBEB" />
      <section className="bg-[#FFFBEB] py-16 sm:py-24 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-yellow/40 rounded-full text-text-dark font-body font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <span>📸</span> Life at Kids covE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-dark">
              School Photo Gallery
            </h2>
            <p className="font-body text-sm sm:text-base text-text-muted mt-3 max-w-xl mx-auto">
              Glimpses of daily joy, learning, exploration, and celebration at
              our campus.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white text-center">
                    <p className="font-heading text-base text-text-dark">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
