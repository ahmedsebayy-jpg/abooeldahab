import React from "react";
import { MapPin, Navigation, ExternalLink, Compass, ShieldAlert } from "lucide-react";
import { BUSINESS_CONFIG, getEmbedMapUrl } from "../config/business";

interface LocationProps {
  currentLang?: "en" | "ar";
}

export const Location: React.FC<LocationProps> = ({ currentLang = "en" }) => {
  return (
    <section id="location" className="py-24 bg-[#0A0A0A] relative border-t border-[#1C1C1C]">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-automotive-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E53935] uppercase mb-2">
            <span className="w-6 h-[1px] bg-[#E53935]" />
            <span>{currentLang === "ar" ? "موقع الفرع" : "STOREFRONT LOCATION"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight uppercase">
            {currentLang === "ar" ? "تفضل بزيارة أبو الدهب." : "VISIT ABO EL DAHAB."}
          </h2>
          <p className="text-sm sm:text-base text-[#888888] max-w-xl mt-3">
            {currentLang === "ar"
              ? "نسعد باستقبالكم في متجرنا بمدينة فاقوس، محافظة الشرقية، لجميع خدمات واستشارات زيوت السيارات."
              : "Locate our store in Faqous, Al Sharqia. Find easy road access and expert automotive advice on-site."}
          </p>
        </div>

        {/* Content Layout: Address Card + Responsive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Information Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-[#242424] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top red corner accent */}
            <div className="absolute top-0 left-0 w-2 h-20 bg-[#E53935]" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8E8E8E] uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-[#E53935]" />
                <span>Verified Physical Location</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-white tracking-wide uppercase mb-4">
                {currentLang === "ar" ? BUSINESS_CONFIG.storeNameArabic : "Abo El Dahab Automotive Oils"}
              </h3>

              {/* Exact Address Typography */}
              <div className="space-y-4 py-4 border-y border-[#1E1E1E] my-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
                      {currentLang === "ar" ? "العنوان الرسمي" : "Street Address"}
                    </span>
                    <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                      {currentLang === "ar" ? BUSINESS_CONFIG.addressArabic : BUSINESS_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#171717] p-3 border border-[#262626]">
                    <span className="text-[10px] font-mono text-[#737373] uppercase block mb-0.5">
                      {currentLang === "ar" ? "المركز / المدينة" : "City / District"}
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {BUSINESS_CONFIG.city}
                    </span>
                  </div>
                  <div className="bg-[#171717] p-3 border border-[#262626]">
                    <span className="text-[10px] font-mono text-[#737373] uppercase block mb-0.5">
                      {currentLang === "ar" ? "المحافظة" : "Governorate"}
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {BUSINESS_CONFIG.governorate}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#808080] leading-relaxed">
                {currentLang === "ar"
                  ? "يقع المتجر بشارع الإنتاج بمنطقة الديدامون، فاقوس. يمكنك استخدام زر الاتجاهات للوصول مباشرة عبر خرائط جوجل."
                  : "Conveniently situated on Al Inatag St in Ad Daydamoun, Faqous. Tap the directions button below to launch turn-by-turn navigation."}
              </p>
            </div>

            {/* Direct CTAs */}
            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-lg shadow-[#E53935]/25"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{currentLang === "ar" ? "الاتجاهات على الخريطة" : "GET DIRECTIONS"}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#181818] hover:bg-[#202020] text-[#C5C5C5] hover:text-white text-xs font-heading font-semibold tracking-wider uppercase transition-colors border border-[#2B2B2B]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{currentLang === "ar" ? "فتح في جوجل ماب" : "OPEN IN GOOGLE MAPS"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Responsive Interactive Map Container */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#242424] overflow-hidden shadow-2xl relative min-h-[420px] lg:min-h-full flex flex-col">
            {/* Top Toolbar */}
            <div className="px-4 py-3 bg-[#161616] border-b border-[#242424] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E53935]" />
                <span className="text-xs font-mono uppercase text-[#A0A0A0] tracking-wider">
                  Interactive Map • Al Inatag St, Faqous
                </span>
              </div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#E53935] hover:underline flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative flex-1 w-full h-full min-h-[380px]">
              <iframe
                title="Abo El Dahab Automotive Oils Store Location"
                src={getEmbedMapUrl()}
                className="w-full h-full border-0 filter grayscale-[15%] contrast-110"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
