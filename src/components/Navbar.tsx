"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics & Gallery" },
  { href: "/admissions", label: "Admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent-pink flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-heading text-2xl font-bold">
                K
              </span>
            </div>
            <div>
              <span className="font-heading text-2xl text-text-dark tracking-tight block">
                Kids covE
              </span>
              <span className="text-[10px] font-body text-primary font-bold -mt-1 tracking-wider uppercase block">
                School of Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-bold text-base transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-primary font-extrabold"
                      : "text-text-body hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+918113000247"
              className="flex items-center gap-2 text-sm font-body font-bold text-text-body hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden lg:inline">+91 8113000247</span>
            </a>
            <Link
              href="/admissions"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white font-body font-bold text-sm shadow-md shadow-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Apply Now 🎓
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-text-dark hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl font-body font-bold text-base transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-body hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3 mt-2">
              <a
                href="tel:+918113000247"
                className="flex items-center gap-3 px-4 py-2 text-sm font-body font-semibold text-text-body"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 8113000247</span>
              </a>
              <Link
                href="/admissions"
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-accent-pink text-white font-body font-bold shadow-md"
              >
                Apply Now 🎓
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
