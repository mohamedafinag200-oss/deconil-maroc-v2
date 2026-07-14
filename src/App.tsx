import React, { useState } from "react";
import { MessageSquare, ArrowUp, ArrowRight, Instagram, Phone, Mail, MapPin, Facebook, Music as Tiktok, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import QuoteModal from "./components/QuoteModal";
import { translations } from "./translations";
import Logo from "./components/Logo";

export default function App() {
  const [lang, setLang] = useState<"fr" | "darija">("fr");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  // Auto-expand WhatsApp tooltip on desktop view after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsappTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Initialize language on mount
  React.useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "fr" | "darija" | null;
    if (savedLang === "fr" || savedLang === "darija") {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: "fr" | "darija") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Initialize theme on mount to avoid hydration mismatch with localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  // Synchronize theme with document.documentElement class list
  React.useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const currentTheme = theme || "light";

  const t = translations[lang];

  // Helper to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsappClick = () => {
    const text = lang === "fr"
      ? `Bonjour Deconil Maroc, je souhaiterais obtenir des informations ou un devis pour des matériaux d'habillage mural.`
      : `السلام عليكم Deconil Maroc، بغيت نعرف معلومات وتقدير ثمن على مواد ديكور الحائط.`;
    window.open(`https://wa.me/212660623981?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      currentTheme === "dark" 
        ? "dark bg-[#121212] text-white" 
        : "bg-white text-dark"
    } selection:bg-gold selection:text-white ${lang === "darija" ? "rtl-dir font-arabic" : "ltr-dir"}`}>
      
      {/* Sticky Header Navbar */}
      <Navbar 
        lang={lang} 
        setLang={handleSetLang} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
        theme={currentTheme}
        toggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Fullscreen Hero Banner */}
        <Hero 
          lang={lang} 
          onOpenQuote={() => setIsQuoteOpen(true)} 
        />

        {/* Brand Overview & Animated Statistics */}
        <About lang={lang} />

        {/* 10 Detailed Premium Finishing Services */}
        <Services 
          lang={lang} 
          onOpenQuote={() => setIsQuoteOpen(true)} 
        />

        {/* 5-Step Process Timeline Map */}
        <Process lang={lang} />

        {/* Large Masonry Portfolio & Image Lightbox */}
        <Portfolio lang={lang} />

        {/* Interactive Highlight Advantages */}
        <WhyChooseUs lang={lang} />

        {/* Testimonials & Collapsible Accordion FAQs */}
        <FAQ lang={lang} />

        {/* Map Coordinates & Request Message Form */}
        <Contact lang={lang} />

      </main>

      {/* Luxury Minimalist Studio Footer */}
      <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Logo size="sm" className="!items-start" />
            <p className="text-xs text-gray-400 font-sans leading-relaxed font-light">
              {lang === "fr"
                ? "Grossiste spécialisé dans l'habillage mural et les matériaux décoratifs haut de gamme basé à Casablanca. Nous fournissons des solutions premium pour tous vos projets."
                : "بائع جملة متخصص في تغليف الحائط ومواد الديكور الراقية في الدار البيضاء. كنوفرو حلول ممتازة لجميع المشاريع ديالكم."}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h5 className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              {lang === "fr" ? "Navigation" : "الروابط السريعة"}
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-400 font-sans font-light">
              <li><a href="#home" className="hover:text-gold transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">{t.nav.services}</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">{t.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="space-y-3">
            <h5 className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              {lang === "fr" ? "Nos Produits" : "المنتوجات ديالنا"}
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-400 font-sans font-light">
              <li><a href="#services" className="hover:text-gold transition-colors">{t.services.items.wallPanels.title}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">{t.services.items.pvcPanels.title}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">{t.services.items.wpcCladding.title}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">{t.services.items.tvWalls.title}</a></li>
            </ul>
          </div>

          {/* Contact Details Quicklist */}
          <div className="space-y-3">
            <h5 className="font-display text-xs font-bold uppercase tracking-widest text-gold">
              Showroom
            </h5>
            <ul className="space-y-2 text-xs text-gray-400 font-sans font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{t.contact.addressVal}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+212660623981" className="hover:text-gold transition-colors">+212 (0) 660 62 39 81</a>
                  <a href="tel:+212520009092" className="hover:text-gold transition-colors">+212 (0) 520 00 90 92</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:deconilmaroc33@gmail.com" className="hover:text-gold transition-colors">deconilmaroc33@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright section */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-sans">
          <p>
            &copy; 2026 Deconil Maroc. {lang === "fr" ? "Tous droits réservés." : "جميع الحقوق محفوظة."}
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0 flex-wrap justify-center">
            <a href="https://www.instagram.com/deconil.ma/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
            <span className="text-gray-700">|</span>
            <a href="https://www.facebook.com/deconil.ma/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
              <Facebook className="w-3.5 h-3.5" />
              Facebook
            </a>
            <span className="text-gray-700">|</span>
            <a href="https://www.tiktok.com/@deconil.ma" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
              <Tiktok className="w-3.5 h-3.5" />
              TikTok
            </a>
            <span className="text-gray-700">|</span>
            <span className="text-gray-400 uppercase tracking-widest text-[9px] font-bold">
              {lang === "fr" ? "Qualité & Design" : "جودة وتصميم"}
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Core Actions: WhatsApp Chat & Scroll to top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3 items-center">
        
        {/* Scroll To Top button */}
        <button
          onClick={scrollToTop}
          id="scroll-to-top"
          className="p-3 bg-white dark:bg-[#1a1a1a] hover:bg-gold text-dark dark:text-white hover:text-white rounded-full shadow-lg border border-gray-100 dark:border-gray-800 hover:border-gold dark:hover:border-gold transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
          title={lang === "fr" ? "Retour en haut" : "الرجوع للفوق"}
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Floating Pulsating WhatsApp Button */}
        <button
          id="whatsapp-floating-btn"
          onClick={handleWhatsappClick}
          className="relative p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 transform hover:scale-110 active:scale-95 group flex items-center justify-center cursor-pointer"
          title={lang === "fr" ? "Discuter sur WhatsApp" : "تواصل معنا في واتساب"}
        >
          {/* Pulsating back-ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none -z-10" />
          
          <MessageSquare className="w-5 h-5 fill-current" />
          
          {/* Quick interactive floating tooltip */}
          <span 
            className={`absolute right-full mr-3 bg-white dark:bg-[#1a1a1a] text-dark dark:text-white font-sans text-[10px] font-semibold py-1.5 px-3 rounded shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 whitespace-nowrap hidden sm:flex items-center gap-2 ${
              showWhatsappTooltip 
                ? "opacity-100 translate-x-0 pointer-events-auto" 
                : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto"
            }`}
          >
            <span>
              {lang === "fr" ? "Besoin de matériaux ? Contactez-nous !" : "محتاج سلعة ؟ اتصل بنا !"}
            </span>
            {showWhatsappTooltip && (
              <span
                onClick={(e) => {
                  e.stopPropagation(); // Avoid triggering WhatsApp click
                  setShowWhatsappTooltip(false);
                }}
                className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer"
                title={lang === "fr" ? "Fermer" : "إغلاق"}
              >
                <X className="w-3 h-3" />
              </span>
            )}
          </span>
        </button>
      </div>

      {/* Dynamic Personal Quote Modal Overlay */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        lang={lang} 
      />

    </div>
  );
}
