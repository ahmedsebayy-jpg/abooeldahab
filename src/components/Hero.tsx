import React from "react";
import { MessageSquare, MapPin, ChevronDown, ShieldCheck, Flame, Phone } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from "../config/business";

interface HeroProps {
  currentLang?: "en" | "ar";
}

export const Hero: React.FC<HeroProps> = ({ currentLang = "en" }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Image with Dark Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=2000&q=85"
          alt="Premium Automotive Oils and Performance Workshop"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          loading="eager"
        />
        {/* Layered vignette and dark grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/90" />
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="absolute inset-0 bg-automotive-grid opacity-30" />
      </div>

      {/* Decorative Automotive Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E53935] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tag / Location Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-[#151515] border border-[#2A2A2A] rounded-sm text-xs font-mono tracking-widest text-[#A0A0A0] uppercase shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
          <span>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.governorate} • {BUSINESS_CONFIG.country}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white uppercase leading-[0.95] mb-5">
          {currentLang === "ar" ? (
            <span className="font-arabic font-extrabold text-4xl sm:text-6xl md:text-7xl">
              قوة لأدائك على الطريق
            </span>
          ) : (
            <>
              POWER YOUR <span className="text-[#E53935]">DRIVE.</span>
            </>
          )}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-2xl font-heading font-medium tracking-wider text-[#E0E0E0] uppercase mb-4 max-w-2xl">
          {currentLang === "ar"
            ? "زيوت سيارات عالية الجودة وأداء موثوق."
            : "Quality Automotive Oils. Trusted Performance."}
        </p>

        {/* Supporting text */}
        <p className="text-sm sm:text-base font-normal text-[#9A9A9A] max-w-xl mx-auto mb-10 leading-relaxed">
          {currentLang === "ar"
            ? "اكتشف أبو الدهب وتواصل معنا لجميع احتياجات زيوت وشحوم سيارتك بأفضل معايير الأداء والاعتمادية."
            : "Discover Abo El Dahab and connect with us for your automotive oil needs."}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E53935] hover:bg-[#c62828] text-white text-sm font-heading font-bold tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-[0_4px_25px_rgba(229,57,53,0.4)] border border-[#ff5252]/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{currentLang === "ar" ? "تواصل معنا عبر واتساب" : "CONTACT US ON WHATSAPP"}</span>
          </a>

          {/* Secondary CTA */}
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-white text-sm font-heading font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95 border border-[#2E2E2E] hover:border-[#C5C5C5]/40"
          >
            <MapPin className="w-4 h-4 text-[#E53935]" />
            <span>{currentLang === "ar" ? "موقع الفرع على الخريطة" : "FIND OUR LOCATION"}</span>
          </a>

          {/* Quick Call Button */}
          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#121212] hover:bg-[#1A1A1A] text-[#C5C5C5] hover:text-white text-sm font-heading font-semibold tracking-widest uppercase transition-all duration-200 border border-[#262626]"
          >
            <Phone className="w-4 h-4 text-[#8E8E8E]" />
            <span>{BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        {/* Subtle Credibility Badges (Pure real attributes, no fake numbers) */}
        <div className="mt-14 pt-8 border-t border-[#1C1C1C] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-2xl w-full">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-white tracking-wider">
                {currentLang === "ar" ? "منتجات معتمدة" : "PREMIUM OILS"}
              </h4>
              <p className="text-[11px] text-[#737373]">
                {currentLang === "ar" ? "زيوت محركات أصلية" : "Engine & synthetic oils"}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Flame className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-white tracking-wider">
                {currentLang === "ar" ? "استشارة مباشرة" : "EXPERT SUPPORT"}
              </h4>
              <p className="text-[11px] text-[#737373]">
                {currentLang === "ar" ? "تواصل سريع عبر واتساب" : "Direct WhatsApp advice"}
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-heading font-bold text-white tracking-wider">
                {currentLang === "ar" ? "فرع فاقوس" : "FAQOUS BRANCH"}
              </h4>
              <p className="text-[11px] text-[#737373]">
                {currentLang === "ar" ? "الديدامون - الشرقية" : "Al Sharqia Governorate"}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-12 text-[#666666] hover:text-white transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#555555] group-hover:text-[#999999]">
            SCROLL DOWN
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#E53935]" />
        </a>
      </div>
    </section>
  );
};
