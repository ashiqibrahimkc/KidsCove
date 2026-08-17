import Link from "next/link";
import WaveDivider from "./WaveDivider";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics & Gallery" },
  { href: "/contact", label: "Admissions & Contact" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <WaveDivider color="#1A1A2E" />
      <div className="bg-[#1A1A2E] text-white/80 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center">
                  <span className="text-white font-heading text-lg font-bold">
                    K
                  </span>
                </div>
                <div>
                  <span className="font-heading text-xl text-white">
                    Kids covE
                  </span>
                  <p className="text-[9px] text-white/50 -mt-0.5 tracking-wider uppercase">
                    School of Excellence
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-body">
                Empowering young minds through curiosity, creativity, and
                compassion. Building a brighter future, one child at a time.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://wa.me/918113000247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="mailto:ozhukurkids@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13L2 4" />
                  </svg>
                </a>
                <a
                  href="tel:+918113000247"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label="Phone"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-accent-yellow transition-colors duration-300 font-body flex items-center gap-2"
                    >
                      <span className="text-primary text-xs">▸</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-white/60 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">📍</span>
                  <span>
                    Ozhukur Palathinghal, Ozhukur Post, 673642, Mongam Via,
                    Malappuram Dist, Kerala
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">📞</span>
                  <a
                    href="tel:+918113000247"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    +91 8113000247
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-secondary">✉️</span>
                  <a
                    href="mailto:ozhukurkids@gmail.com"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    ozhukurkids@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* School Timings */}
            <div>
              <h3 className="font-heading text-lg text-white mb-4">
                School Hours
              </h3>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-white font-body font-bold text-base">
                      9:30 AM – 3:30 PM
                    </p>
                    <p className="text-white/50 text-xs font-body">
                      Monday – Saturday
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm text-accent-yellow hover:text-accent-yellow-light transition-colors font-body font-semibold"
                  >
                    Admissions Open →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 font-body">
              © {new Date().getFullYear()} Kids covE School of Excellence. All
              rights reserved.
            </p>
            <p className="text-xs text-white/30 font-body flex items-center gap-1">
              Made with <span className="text-accent-pink animate-pulse-soft">❤</span> for little learners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
