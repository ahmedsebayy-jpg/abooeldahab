import React, { useState } from "react";
import { Phone, MessageSquare, Send, Car, Sparkles, Check, Copy } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from "../config/business";

interface ContactProps {
  currentLang?: "en" | "ar";
}

export const Contact: React.FC<ContactProps> = ({ currentLang = "en" }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [viscosity, setViscosity] = useState("");
  const [inquiryNotes, setInquiryNotes] = useState("");

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Abo El Dahab, I would like to inquire about automotive oils.`;
    if (carModel) text += `\n- Vehicle: ${carModel}`;
    if (viscosity) text += `\n- Requested Viscosity/Oil: ${viscosity}`;
    if (inquiryNotes) text += `\n- Inquiry: ${inquiryNotes}`;

    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative border-t border-[#1C1C1C]">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E53935] uppercase mb-2">
            <span className="w-6 h-[1px] bg-[#E53935]" />
            <span>{currentLang === "ar" ? "قنوات الاتصال المباشرة" : "DIRECT COMMUNICATION"}</span>
            <span className="w-6 h-[1px] bg-[#E53935]" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight uppercase mb-4">
            {currentLang === "ar" ? "تواصل معنا مباشرة." : "LET'S TALK."}
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E8E] max-w-xl mx-auto">
            {currentLang === "ar"
              ? "نحن جاهزون للإجابة على جميع استفساراتكم بشأن زيوت المحركات، التوافر، والأسعار عبر الهاتف والواتساب."
              : "Reach out via phone call or WhatsApp for quick oil recommendations, product inquiries, and branch assistance."}
          </p>
        </div>

        {/* 3 Main Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Direct Phone Call */}
          <div className="bg-[#121212] border border-[#242424] p-8 flex flex-col justify-between hover:border-[#383838] transition-all duration-300 shadow-xl">
            <div>
              <div className="w-12 h-12 bg-[#181818] border border-[#262626] flex items-center justify-center text-[#E53935] mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-mono text-[#777777] uppercase tracking-widest mb-1">
                {currentLang === "ar" ? "اتصال هاتفي مباشر" : "DIRECT CALL"}
              </p>
              <h3 className="text-xl font-heading font-bold text-white tracking-wider mb-2">
                {currentLang === "ar" ? "اتصل بنا الآن" : "Call Store Directly"}
              </h3>
              <p className="text-lg font-mono text-[#E0E0E0] font-semibold mb-4">
                {BUSINESS_CONFIG.phone}
              </p>
              <p className="text-xs text-[#7A7A7A] leading-relaxed mb-6">
                {currentLang === "ar"
                  ? "تواصل هاتفياً وتحدث مباشرة مع المتجر للاستفسار السريع."
                  : "Speak directly with our team for quick questions and location directions."}
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href={getPhoneCallUrl()}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{currentLang === "ar" ? "اتصل الآن" : "CALL NOW"}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3.5 py-3 bg-[#181818] border border-[#2A2A2A] text-[#A0A0A0] hover:text-white transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: General WhatsApp Chat */}
          <div className="bg-[#121212] border border-[#242424] p-8 flex flex-col justify-between hover:border-[#25D366]/40 transition-all duration-300 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="w-12 h-12 bg-[#181818] border border-[#262626] flex items-center justify-center text-[#25D366] mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-mono text-[#777777] uppercase tracking-widest mb-1">
                {currentLang === "ar" ? "محادثة فورية" : "INSTANT CHAT"}
              </p>
              <h3 className="text-xl font-heading font-bold text-white tracking-wider mb-2">
                {currentLang === "ar" ? "شات واتساب" : "WhatsApp Chat"}
              </h3>
              <p className="text-lg font-mono text-[#E0E0E0] font-semibold mb-4">
                {BUSINESS_CONFIG.whatsapp}
              </p>
              <p className="text-xs text-[#7A7A7A] leading-relaxed mb-6">
                {currentLang === "ar"
                  ? "ابدأ محادثة فورية واطرح استفسارك بكل سهولة."
                  : "Start a chat on WhatsApp with our store number for general inquiries."}
              </p>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#1E1E1E] hover:bg-[#25D366] text-white text-xs font-heading font-bold tracking-widest uppercase transition-colors border border-[#2D2D2D] hover:border-[#25D366]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{currentLang === "ar" ? "بدء المحادثة" : "OPEN WHATSAPP CHAT"}</span>
            </a>
          </div>

          {/* Card 3: WhatsApp with Prefilled Inquiry Message */}
          <div className="bg-[#121212] border border-[#242424] p-8 flex flex-col justify-between hover:border-[#E53935]/40 transition-all duration-300 shadow-xl">
            <div>
              <div className="w-12 h-12 bg-[#181818] border border-[#262626] flex items-center justify-center text-[#E53935] mb-6">
                <Send className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-mono text-[#777777] uppercase tracking-widest mb-1">
                {currentLang === "ar" ? "استفسار جاهز بنقرة واحدة" : "ONE-CLICK INQUIRY"}
              </p>
              <h3 className="text-xl font-heading font-bold text-white tracking-wider mb-2">
                {currentLang === "ar" ? "رسالة استفسار الزيوت" : "Pre-filled Oil Inquiry"}
              </h3>
              <p className="text-xs font-mono text-[#888888] mb-4 bg-[#181818] p-3 border border-[#262626] italic">
                "{BUSINESS_CONFIG.defaultWhatsAppMessage}"
              </p>
              <p className="text-xs text-[#7A7A7A] leading-relaxed mb-6">
                {currentLang === "ar"
                  ? "أرسل رسالة تلقائية بنقرة واحدة للاستفسار عن الزيوت المتاحة."
                  : "Launch WhatsApp with the verified inquiry message already typed out."}
              </p>
            </div>

            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-colors shadow-lg shadow-[#E53935]/25"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{currentLang === "ar" ? "إرسال الاستفسار الجاهز" : "SEND PREFILLED MESSAGE"}</span>
            </a>
          </div>
        </div>

        {/* Interactive Fast Inquiry Builder (Directly builds WhatsApp URL - No fake backend or fake email) */}
        <div className="max-w-3xl mx-auto bg-[#141414] border border-[#262626] p-6 sm:p-10 shadow-2xl relative">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-5 h-5 text-[#E53935]" />
            <div>
              <h3 className="text-lg font-heading font-bold text-white tracking-wide uppercase">
                {currentLang === "ar" ? "منشئ الاستفسار السريع للواتساب" : "FAST VEHICLE OIL INQUIRY ASSISTANT"}
              </h3>
              <p className="text-xs text-[#808080]">
                {currentLang === "ar"
                  ? "حدد بيانات سيارتك لتجهيز رسالة واتساب دقيقة بنقرة واحدة دون انتظار."
                  : "Enter your car details to generate and launch a customized WhatsApp message directly."}
              </p>
            </div>
          </div>

          <form onSubmit={handleCustomWhatsAppSend} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  {currentLang === "ar" ? "نوع السيارة والموديل" : "Vehicle Make & Model"}
                </label>
                <input
                  type="text"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="e.g. Toyota Corolla 2021, Hyundai Elantra"
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2B2B2B] text-white text-xs focus:border-[#E53935] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                  {currentLang === "ar" ? "اللزوجة أو الزيت المطلوب" : "Requested Viscosity / Oil Type"}
                </label>
                <input
                  type="text"
                  value={viscosity}
                  onChange={(e) => setViscosity(e.target.value)}
                  placeholder="e.g. 5W-30, 5W-40, 10W-40 Synthetic"
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2B2B2B] text-white text-xs focus:border-[#E53935] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                {currentLang === "ar" ? "أي ملاحظات أو استفسار إضافي" : "Additional Question (Optional)"}
              </label>
              <input
                type="text"
                value={inquiryNotes}
                onChange={(e) => setInquiryNotes(e.target.value)}
                placeholder="e.g. How many liters needed, or recommended brand?"
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2B2B2B] text-white text-xs focus:border-[#E53935] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold tracking-widest uppercase transition-all duration-200 active:scale-98 shadow-xl shadow-[#E53935]/25"
            >
              <MessageSquare className="w-4 h-4" />
              <span>
                {currentLang === "ar"
                  ? "فتح واتساب مع الرسالة المخصصة"
                  : "LAUNCH CUSTOM INQUIRY ON WHATSAPP"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
