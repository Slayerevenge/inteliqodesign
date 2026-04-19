"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-1 group">
              <span className="font-heading text-2xl font-bold tracking-tight">
                <span className="text-red-500">i</span>
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-[#1E1E1E]" : "text-white"
                  }`}
                >
                  ntel
                </span>
                <span className="text-green-500">i</span>
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-[#1E1E1E]" : "text-white"
                  }`}
                >
                  qo
                </span>
              </span>
              <span
                className={`ml-2 hidden text-xs font-medium uppercase tracking-widest sm:inline-block transition-colors duration-300 ${
                  isScrolled ? "text-[#6B6B6B]" : "text-white/70"
                }`}
              >
                Interiors & Turnkey Solutions
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isScrolled
                      ? "text-[#4A4A4A] hover:text-[#F4A898]"
                      : "text-white/90 hover:text-white"
                  } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#F4A898] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#1E1E1E] text-white hover:bg-[#F4A898]"
                    : "bg-white text-[#1E1E1E] hover:bg-[#F4A898] hover:text-white"
                }`}
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-2 rotate-45 bg-[#1E1E1E]"
                    : isScrolled
                      ? "bg-[#1E1E1E]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                      ? "bg-[#1E1E1E]"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-translate-y-2 -rotate-45 bg-[#1E1E1E]"
                    : isScrolled
                      ? "bg-[#1E1E1E]"
                      : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`text-2xl font-medium tracking-wide text-[#1E1E1E] transition-all duration-300 hover:text-[#F4A898] ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${150 + index * 75}ms`
                  : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className={`mt-4 rounded-lg bg-[#1E1E1E] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#F4A898] ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${150 + navLinks.length * 75}ms`
                : "0ms",
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919945688225"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
