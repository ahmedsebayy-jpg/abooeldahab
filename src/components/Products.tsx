import React, { useState } from "react";
import { MessageSquare, Info, Sparkles, Droplets, Gauge, Shield } from "lucide-react";
import { getWhatsAppUrl } from "../config/business";

interface ProductsProps {
  currentLang?: "en" | "ar";
}

interface ProductCategory {
  id: string;
  title: string;
  titleArabic: string;
  categoryTag: string;
  categoryTagArabic: string;
  description: string;
  descriptionArabic: string;
  image: string;
  icon: React.ElementType;
}

export const Products: React.FC<ProductsProps> = ({ currentLang = "en" }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories: ProductCategory[] = [
    {
      id: "engine-oils",
      title: "Engine Oils",
      titleArabic: "زيوت المحركات",
      categoryTag: "Heavy & Light Duty",
      categoryTagArabic: "محركات بنزين وديزل",
      description:
        "High-performance motor oils designed to reduce internal friction, withstand extreme engine temperatures, and optimize cylinder life.",
      descriptionArabic:
        "زيوت محركات مصممة لتخفيف الاحتكاك الداخلي ومقاومة درجات الحرارة المرتفعة وحماية أجزاء المحرك.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      icon: Gauge,
    },
    {
      id: "synthetic-oils",
      title: "Synthetic Oils",
      titleArabic: "الزيوت التخليقية",
      categoryTag: "Full & Semi-Synthetic",
      categoryTagArabic: "تخليقية ونصف تخليقية",
      description:
        "Advanced synthetic oil formulations delivering superior viscosity stability, cold-start flow, and sustained engine cleanliness.",
      descriptionArabic:
        "تركيبات تخليقية متطورة تمنح ثباتاً فائقاً للزوجة وتدفقاً سلساً عند بدء التشغيل على البارد.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      icon: Sparkles,
    },
    {
      id: "motor-lubricants",
      title: "Motor Lubricants",
      titleArabic: "شحوم وسوائل التشحيم",
      categoryTag: "Specialized Formulations",
      categoryTagArabic: "تركيبات تشحيم متخصصة",
      description:
        "Specialized automotive lubricants engineered to protect bearings, gearboxes, drivetrain assemblies, and precision mechanical points.",
      descriptionArabic:
        "شحوم وسوائل متخصصة لحماية المحامل ونواقل الحركة وأجزاء منظومة الدفع من التآكل.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      icon: Droplets,
    },
    {
      id: "automotive-products",
      title: "Automotive Oil Products",
      titleArabic: "منتجات زيوت السيارات المساعدة",
      categoryTag: "Essential Fluids",
      categoryTagArabic: "سوائل صيانة أساسية",
      description:
        "Complementary fluids including transmission oils, hydraulic brake fluids, steering fluids, and routine maintenance essentials.",
      descriptionArabic:
        "سوائل مساعدة تشمل زيوت الفتيس ونواقل الحركة، وسوائل الفرامل الهيدروليكية، وزيوت الباور.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      icon: Shield,
    },
  ];

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="products" className="py-24 bg-[#0A0A0A] relative border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E53935] uppercase mb-2">
              <span className="w-6 h-[1px] bg-[#E53935]" />
              <span>{currentLang === "ar" ? "فئات المعروضات" : "PRODUCT SHOWCASE"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
              {currentLang === "ar" ? "زيوت السيارات ومنتجات التزييت" : "AUTOMOTIVE OILS & FLUIDS"}
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center flex-wrap gap-1 p-1 bg-[#141414] border border-[#242424]">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 text-xs font-heading font-semibold tracking-wider uppercase transition-all ${
                activeFilter === "all"
                  ? "bg-[#E53935] text-white"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {currentLang === "ar" ? "جميع الفئات" : "All Categories"}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#E53935] text-white"
                    : "text-[#888888] hover:text-white"
                }`}
              >
                {currentLang === "ar" ? cat.titleArabic : cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Prominent Disclaimer Notice (Mandated by brief) */}
        <div className="mb-10 p-4 bg-[#141414] border-l-2 border-[#E53935] border-y border-r border-[#222222] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
          <div className="text-xs text-[#9E9E9E] leading-relaxed">
            <span className="font-semibold text-white uppercase tracking-wider block mb-0.5">
              {currentLang === "ar" ? "ملاحظة توضيحية هامة" : "Illustrative Display Categories"}
            </span>
            {currentLang === "ar"
              ? "هذه الفئات المعروضة هي فئات توضيحية لتعريفكم بأنواع الزيوت وسوائل السيارات المتاحة بالمتجر. للتحقق من الماركات المتوفرة حالياً، ودرجات اللزوجة (Viscosity)، وكميات العبوات، يرجى التواصل مباشرة عبر واتساب."
              : "These are suggested display categories representing our service spectrum. To inquire about exact brands currently in stock, viscosities (0W-20, 5W-30, 10W-40, etc.), packaging sizes, and current availability, please message us on WhatsApp."}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            const inquiryText = `Hello Abo El Dahab, I would like to inquire about your available ${cat.title} and recommended viscosities.`;

            return (
              <div
                key={cat.id}
                className="group relative bg-[#121212] border border-[#242424] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#181818]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-wider text-[#A0A0A0] uppercase bg-[#0A0A0A]/80 px-2 py-1 border border-[#222222] backdrop-blur-sm">
                    {currentLang === "ar" ? cat.categoryTagArabic : cat.categoryTag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[#E53935]">
                      <Icon className="w-4 h-4" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E7E]">
                        Automotive Category
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white tracking-wide uppercase mb-2 group-hover:text-[#E53935] transition-colors">
                      {currentLang === "ar" ? cat.titleArabic : cat.title}
                    </h3>

                    <p className="text-xs text-[#8A8A8A] leading-relaxed mb-6">
                      {currentLang === "ar" ? cat.descriptionArabic : cat.description}
                    </p>
                  </div>

                  {/* WhatsApp Inquiry Button */}
                  <div className="pt-4 border-t border-[#1F1F1F]">
                    <a
                      href={getWhatsAppUrl(inquiryText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#181818] group-hover:bg-[#E53935] text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all duration-200"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{currentLang === "ar" ? "استفسر عبر واتساب" : "INQUIRE ON WHATSAPP"}</span>
                    </a>
                  </div>
                </div>

                {/* Hover Accent Bar */}
                <div className="h-[2px] w-0 group-hover:w-full bg-[#E53935] transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Custom Inquiry Callout */}
        <div className="mt-12 bg-[#121212] border border-[#242424] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white tracking-wide uppercase mb-1">
              {currentLang === "ar"
                ? "هل تبحث عن لزوجة معينة أو نوع زيت محدد؟"
                : "LOOKING FOR A SPECIFIC OIL SPECIFICATION OR BRAND?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#888888]">
              {currentLang === "ar"
                ? "أرسل لنا نوع سيارتك وسنة الصنع أو رقم اللزوجة المطلوب وسنؤكد لك توافره على الفور."
                : "Send us your car make, model, year, or required viscosity grade (e.g. 5W-30, 10W-40) and we'll confirm availability immediately."}
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Abo El Dahab, I would like to inquire about your available automotive oils.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{currentLang === "ar" ? "راسلنا للاستفسار الآن" : "INQUIRE ABOUT STOCK"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
