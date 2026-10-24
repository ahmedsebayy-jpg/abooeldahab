import React from "react";
import { Droplet, Award, MapPin, CheckCircle2, MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/business";

interface AboutProps {
  currentLang?: "en" | "ar";
}

export const About: React.FC<AboutProps> = ({ currentLang = "en" }) => {
  const highlights = [
    {
      icon: Droplet,
      title: currentLang === "ar" ? "زيوت المحركات المتطورة" : "Engine Lubricants",
      desc: currentLang === "ar" ? "حلول تزييت متكاملة لحماية المحرك من الاحتكاك والحرارة العالية." : "Formulations engineered to protect engine components under heavy load and thermal stress.",
    },
    {
      icon: Award,
      title: currentLang === "ar" ? "جودة وأداء موثوق" : "Quality & Performance",
      desc: currentLang === "ar" ? "نحرص على توفير الزيوت التي تلبي متطلبات سيارتك بدقة وكفاءة." : "Dedicated to providing high-grade fluids that meet your vehicle manufacturer specifications.",
    },
    {
      icon: MapPin,
      title: currentLang === "ar" ? "موقع استراتيجي بالشرقية" : "Al Sharqia Storefront",
      desc: currentLang === "ar" ? "مقرنا بشارع الإنتاج بالديدامون، فاقوس، بخدمتكم وتواصل مباشر دائماً." : "Located on Al Inatag St, Ad Daydamoun, Faqous, offering direct walk-in and consult support.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-automotive-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E53935] uppercase mb-2">
            <span className="w-6 h-[1px] bg-[#E53935]" />
            <span>{currentLang === "ar" ? "نبذة عن أبو الدهب" : "ABOUT ABO EL DAHAB"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight">
            {currentLang === "ar" ? "أكثر من مجرد زيوت." : "MORE THAN JUST OIL."}
          </h2>
        </div>

        {/* Two-Column Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Automotive Oil Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#262626] bg-[#141414] p-3 shadow-2xl">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                  alt="Abo El Dahab Automotive Oils Store Atmosphere"
                  className="w-full h-full object-cover grayscale-[25%] contrast-110 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Floating Corner Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#2A2A2A]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                        {currentLang === "ar" ? "الفرع الرئيسي" : "FLAGSHIP LOCATION"}
                      </p>
                      <p className="text-sm font-heading font-bold text-white tracking-wider">
                        {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.governorate}
                      </p>
                    </div>
                    <span className="text-[#E53935] font-mono text-xs font-bold">EG</span>
                  </div>
                </div>
              </div>

              {/* Aesthetic Tech Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#E53935]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#E53935]" />
            </div>

            {/* Subtle floating stats box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#161616] border border-[#2E2E2E] p-4 shadow-2xl max-w-xs">
              <p className="text-xs font-mono text-[#999999] uppercase tracking-wider mb-1">
                {currentLang === "ar" ? "خدمة العملاء" : "STORE COMMITMENT"}
              </p>
              <p className="text-xs text-[#E0E0E0] font-medium leading-snug">
                {currentLang === "ar"
                  ? "تواصل مباشر مع المتخصصين لاختيار الزيت الأنسب لمحرك سيارتك."
                  : "Direct consultation for your vehicle's exact viscosity and performance needs."}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-wide uppercase mb-6 leading-snug">
              {currentLang === "ar" ? (
                <span className="font-arabic font-bold text-2xl">
                  وجهتك الأولى لزيوت المحركات المتخصصة ومستلزمات الصيانة الدورية
                </span>
              ) : (
                <>
                  BUILT FOR ENTHUSIASTS & EVERYDAY DRIVERS WHO DEMAND UNCOMPROMISING RELIABILITY.
                </>
              )}
            </h3>

            {/* Exact Required Business Description */}
            <p className="text-base sm:text-lg text-[#C5C5C5] leading-relaxed mb-6 font-normal">
              {currentLang === "ar"
                ? "مرحباً بكم في أبو الدهب، وجهتكم لزيوت السيارات. تواصلوا معنا، وتعرفوا على متجرنا، وتفضلوا بزيارتنا في فرعنا بمدينة فاقوس، محافظة الشرقية."
                : "Welcome to Abo El Dahab, your destination for automotive oils. Connect with us, explore our store, and find us at our branch in Faqous, Al Sharqia."}
            </p>

            <p className="text-sm text-[#888888] leading-relaxed mb-8">
              {currentLang === "ar"
                ? "سواء كنت تبحث عن زيوت محركات تخليقية، أو سوائل ناقل الحركة، أو استشارة بشأن اللزوجة المناسبة لسيارتك ودرجات الحرارة، نحرص في أبو الدهب على تقديم أفضل المنتجات بخدمة صادقة واحترافية."
                : "Whether you need high-mileage engine oils, full-synthetic performance lubricants, or advice on the exact viscosity grade for your engine, our team in Faqous is ready to assist you directly."}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#121212] border border-[#222222] p-4 transition-colors hover:border-[#333333]"
                >
                  <item.icon className="w-5 h-5 text-[#E53935] mb-2.5" />
                  <h4 className="text-sm font-heading font-bold text-white tracking-wider uppercase mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7A7A7A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello Abo El Dahab, I would like to learn more about your store and available products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-lg shadow-[#E53935]/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{currentLang === "ar" ? "اسألنا عن الزيوت المتاحة" : "INQUIRE ON WHATSAPP"}</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#181818] text-[#C5C5C5] hover:text-white text-xs font-heading font-semibold tracking-widest uppercase transition-all duration-200 border border-[#2C2C2C]"
              >
                <span>{currentLang === "ar" ? "تصفح الفئات المعروضة" : "EXPLORE PRODUCTS"}</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
