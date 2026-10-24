import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/business";

interface NavbarProps {
  currentLang?: "en" | "ar";
  onToggleLang?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang = "en", onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: currentLang === "ar" ? "الرئيسية" : "Home", href: "#home" },
    { label: currentLang === "ar" ? "من نحن" : "About Us", href: "#about" },
    { label: currentLang === "ar" ? "منتجاتنا" : "Our Products", href: "#products" },
    { label: currentLang === "ar" ? "وسائل التواصل" : "Social Media", href: "#social" },
    { label: currentLang === "ar" ? "موقعنا" : "Location", href: "#location" },
    { label: currentLang === "ar" ? "تواصل معنا" : "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl shadow-black/80"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo link */}
          <a
            href="#home"
            className="group transition-transform active:scale-95 focus:outline-none"
            aria-label="Abo El Dahab Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-[#C5C5C5] hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E53935] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onToggleLang && (
              <button
                type="button"
                onClick={onToggleLang}
                className="text-xs font-mono px-2.5 py-1.5 rounded border border-[#2A2A2A] bg-[#141414] text-[#C5C5C5] hover:text-white hover:border-[#E53935]/60 transition-all"
                title="Toggle Language / تغيير اللغة"
              >
                {currentLang === "en" ? "عربي" : "EN"}
              </button>
            )}

            {/* Prominent WhatsApp CTA button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(229,57,53,0.35)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{currentLang === "ar" ? "تواصل معنا واتساب" : "CONTACT US"}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {onToggleLang && (
              <button
                type="button"
                onClick={onToggleLang}
                className="text-[11px] font-mono px-2 py-1 rounded border border-[#2A2A2A] bg-[#141414] text-[#C5C5C5]"
              >
                {currentLang === "en" ? "عربي" : "EN"}
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#E53935] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-full bg-[#0E0E0E] border-b border-[#222222] transition-all duration-300 ease-in-out shadow-2xl overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-[#C5C5C5] hover:text-[#E53935] py-2 border-b border-[#1A1A1A] transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-[#333333]">→</span>
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#E53935] text-white text-xs font-heading font-bold tracking-widest uppercase active:scale-98 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentLang === "ar" ? "راسلنا على واتساب" : "CONTACT US ON WHATSAPP"}</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#171717] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Call Store</span>
              </a>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#171717] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-white"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
