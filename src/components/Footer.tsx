import React from "react";
import { Phone, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from "../config/business";

interface FooterProps {
  currentLang?: "en" | "ar";
}

export const Footer: React.FC<FooterProps> = ({ currentLang = "en" }) => {
  const currentYear = 2026;

  const quickLinks = [
    { label: currentLang === "ar" ? "الرئيسية" : "Home", href: "#home" },
    { label: currentLang === "ar" ? "من نحن" : "About Us", href: "#about" },
    { label: currentLang === "ar" ? "منتجاتنا" : "Our Products", href: "#products" },
    { label: currentLang === "ar" ? "وسائل التواصل" : "Social Media", href: "#social" },
    { label: currentLang === "ar" ? "موقع الفرع" : "Location", href: "#location" },
    { label: currentLang === "ar" ? "تواصل معنا" : "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#070707] border-t border-[#1C1C1C] text-[#8E8E8E] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top red accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#181818]">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block" aria-label="Abo El Dahab Home">
              <Logo size="lg" />
            </a>

            <p className="text-xs sm:text-sm text-[#7E7E7E] leading-relaxed max-w-sm pt-2">
              {currentLang === "ar"
                ? "أبو الدهب لزيوت السيارات — وجهتكم الموثوقة لزيوت المحركات، وسوائل التشحيم، ومنتجات صيانة السيارات في فاقوس، محافظة الشرقية."
                : "Abo El Dahab — Your trusted destination for quality automotive oils, engine lubricants, and vehicle maintenance fluids in Faqous, Al Sharqia, Egypt."}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={BUSINESS_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#141414] border border-[#242424] hover:border-[#00F2FE]/50 text-[#C5C5C5] hover:text-[#00F2FE] flex items-center justify-center transition-colors"
                aria-label="Abo El Dahab TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.58a8.28 8.28 0 0 0 4.82 1.55v-3.44h-1z" />
                </svg>
              </a>

              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#141414] border border-[#242424] hover:border-[#E53935]/50 text-[#C5C5C5] hover:text-[#E53935] flex items-center justify-center transition-colors"
                aria-label="Abo El Dahab Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#141414] border border-[#242424] hover:border-[#25D366]/50 text-[#C5C5C5] hover:text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="Abo El Dahab WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              {currentLang === "ar" ? "روابط سريعة" : "QUICK LINKS"}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-heading tracking-wider uppercase text-[#777777] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              {currentLang === "ar" ? "بيانات التواصل والموقع" : "CONTACT & LOCATION"}
            </h4>

            <div className="space-y-2.5 text-xs text-[#808080]">
              <a
                href={getPhoneCallUrl()}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E53935]" />
                <span className="font-mono text-[#B0B0B0]">{BUSINESS_CONFIG.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-mono text-[#B0B0B0]">{BUSINESS_CONFIG.whatsapp}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors pt-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E53935] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-[#A0A0A0]">
                  {currentLang === "ar" ? BUSINESS_CONFIG.addressArabic : BUSINESS_CONFIG.address}
                </span>
              </a>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E53935] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#555555] gap-4">
          <p>© {currentYear} {BUSINESS_CONFIG.storeName}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Faqous, Al Sharqia, Egypt</span>
            <span>·</span>
            <span className="text-[#777777]">Automotive Oils & Lubricants</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
