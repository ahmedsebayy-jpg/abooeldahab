import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/business";

interface FloatingWhatsAppProps {
  currentLang?: "en" | "ar";
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang = "en" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on Desktop / Hover */}
      <div
        className={`hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-[#141414] border border-[#2B2B2B] text-white text-xs font-heading tracking-wider uppercase shadow-2xl transition-all duration-300 pointer-events-none ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>{currentLang === "ar" ? "تواصل معنا واتساب" : "Chat on WhatsApp"}</span>
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl(BUSINESS_CONFIG.defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] focus:ring-offset-[#0A0A0A]"
        aria-label="Contact Abo El Dahab on WhatsApp"
      >
        {/* Radar ping effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping [animation-duration:3s] pointer-events-none" />

        <MessageSquare className="w-7 h-7 relative z-10" />

        {/* Small notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#E53935] border-2 border-[#0A0A0A] rounded-full z-20" />
      </a>
    </div>
  );
};
