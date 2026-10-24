import React from "react";
import { ArrowUpRight, Film, Camera } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

interface SocialMediaProps {
  currentLang?: "en" | "ar";
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ currentLang = "en" }) => {
  return (
    <section id="social" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-automotive-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E53935] uppercase mb-2">
            <span className="w-6 h-[1px] bg-[#E53935]" />
            <span>{currentLang === "ar" ? "تواصل وتابعنا" : "COMMUNITY & CHANNELS"}</span>
            <span className="w-6 h-[1px] bg-[#E53935]" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight uppercase mb-4">
            {currentLang === "ar" ? "تابع رحلتنا ويومياتنا." : "FOLLOW OUR JOURNEY."}
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] max-w-xl mx-auto">
            {currentLang === "ar"
              ? "تابع مقاطع الفيديو والعروض والجديد في متجر أبو الدهب لزيوت السيارات عبر تيك توك وإنستغرام."
              : "Experience the workshop culture, new arrivals, and automotive lubricants content directly on our official channels."}
          </p>
        </div>

        {/* Two Large Premium Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: TikTok */}
          <div className="group relative bg-[#121212] border border-[#242424] hover:border-[#383838] transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Ambient Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F2FE]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00F2FE]/10 transition-colors" />

            <div>
              {/* Header with platform icon and tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-[#181818] border border-[#2A2A2A] flex items-center justify-center text-white group-hover:border-[#00F2FE]/40 transition-colors">
                  {/* Clean SVG TikTok Icon */}
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.58a8.28 8.28 0 0 0 4.82 1.55v-3.44h-1z" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#777777] uppercase tracking-wider">
                  <Film className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>Shorts & Reels</span>
                </div>
              </div>

              {/* Title & Username */}
              <div className="mb-8">
                <p className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-1">
                  OFFICIAL TIKTOK
                </p>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-wider mb-2">
                  TIKTOK
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#C5C5C5] tracking-wide">
                  {BUSINESS_CONFIG.tiktokUsername}
                </p>
                <p className="text-xs text-[#7A7A7A] mt-3 leading-relaxed">
                  {currentLang === "ar"
                    ? "فيديوهات عن لزوجة الزيوت، نصائح الصيانة، وأجواء العمل في المتجر."
                    : "Behind-the-scenes, oil maintenance insights, and daily moments from our shop."}
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href={BUSINESS_CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full py-4 px-6 bg-[#181818] hover:bg-white text-white hover:text-black text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 border border-[#2E2E2E] group-hover:border-white shadow-lg"
            >
              <span>{currentLang === "ar" ? "تابعنا على تيك توك" : "FOLLOW ON TIKTOK"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Subtle bottom edge line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00F2FE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Card 2: Instagram */}
          <div className="group relative bg-[#121212] border border-[#242424] hover:border-[#383838] transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Ambient Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E53935]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E53935]/10 transition-colors" />

            <div>
              {/* Header with platform icon and tag */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-[#181818] border border-[#2A2A2A] flex items-center justify-center text-white group-hover:border-[#E53935]/40 transition-colors">
                  {/* Clean SVG Instagram Icon */}
                  <svg className="w-7 h-7 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#777777] uppercase tracking-wider">
                  <Camera className="w-3.5 h-3.5 text-[#E53935]" />
                  <span>Stories & Updates</span>
                </div>
              </div>

              {/* Title & Username */}
              <div className="mb-8">
                <p className="text-xs font-mono text-[#888888] uppercase tracking-widest mb-1">
                  OFFICIAL INSTAGRAM
                </p>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-wider mb-2">
                  INSTAGRAM
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#C5C5C5] tracking-wide">
                  {BUSINESS_CONFIG.instagramUsername}
                </p>
                <p className="text-xs text-[#7A7A7A] mt-3 leading-relaxed">
                  {currentLang === "ar"
                    ? "صور حصرية، إعلانات المنتجات، وتواصل مباشر عبر الرسائل اليومية."
                    : "Product highlights, visual stories, and announcements directly from our branch."}
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <a
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full py-4 px-6 bg-[#181818] hover:bg-[#E53935] text-white text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 border border-[#2E2E2E] group-hover:border-[#E53935] shadow-lg"
            >
              <span>{currentLang === "ar" ? "تابعنا على إنستغرام" : "FOLLOW ON INSTAGRAM"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Subtle bottom edge line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};
