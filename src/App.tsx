import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { SocialMedia } from "./components/SocialMedia";
import { Location } from "./components/Location";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div
      className={`min-h-screen bg-[#0A0A0A] text-[#C5C5C5] antialiased selection:bg-[#E53935] selection:text-white ${
        currentLang === "ar" ? "font-arabic" : ""
      }`}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Sticky Header Navigation */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Content Sections */}
      <main>
        {/* Section B: Cinematic Hero */}
        <Hero currentLang={currentLang} />

        {/* Section C: About Abo El Dahab */}
        <About currentLang={currentLang} />

        {/* Section D: Products Showcase */}
        <Products currentLang={currentLang} />

        {/* Section E: Social Media */}
        <SocialMedia currentLang={currentLang} />

        {/* Section F: Store Location & Interactive Google Map */}
        <Location currentLang={currentLang} />

        {/* Section G: Contact & Direct Communication */}
        <Contact currentLang={currentLang} />
      </main>

      {/* Section H: Premium Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp currentLang={currentLang} />
    </div>
  );
}
