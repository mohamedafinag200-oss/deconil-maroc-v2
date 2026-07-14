import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Globe, ChevronDown, Sun, Moon } from "lucide-react";
import { translations } from "../translations";
import Logo from "./Logo";

interface NavbarProps {
  lang: "fr" | "darija";
  setLang: (lang: "fr" | "darija") => void;
  onOpenQuote: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navbar({ lang, setLang, onOpenQuote, theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = (selectedLang: "fr" | "darija") => {
    setLang(selectedLang);
    setIsLangDropdownOpen(false);
  };

  const menuItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md shadow-md py-3 border-b border-transparent dark:border-gray-800/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <a href="#home" className="flex items-center select-none">
          <Logo size="md" />
        </a>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300 hover:text-gold transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls (Lang switcher & Button) */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Custom Language Dropdown Switcher */}
          <div className="relative">
            <button
              id="lang-dropdown-trigger"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 hover:text-gold transition-colors animate-fade-in"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "fr" ? "Français" : "الدارجة"}
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isLangDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 shadow-xl rounded py-1 z-20 animate-scale-in">
                  <button
                    id="set-lang-fr"
                    onClick={() => toggleLanguage("fr")}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between ${lang === "fr" ? "text-gold font-bold" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Français
                    {lang === "fr" && <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>}
                  </button>
                  <button
                    id="set-lang-darija"
                    onClick={() => toggleLanguage("darija")}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between font-arabic ${lang === "darija" ? "text-gold font-bold" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    الدارجة المغربية
                    {lang === "darija" && <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Theme Switcher Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold transition-colors duration-200 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/60"
            title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300">
            <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <div className="flex flex-col text-left">
              <a href="tel:+212660623981" className="hover:text-dark dark:hover:text-white transition-colors leading-none">+212 (0) 660 62 39 81</a>
              <a href="tel:+212520009092" className="hover:text-dark dark:hover:text-white transition-colors leading-none mt-1">+212 (0) 520 00 90 92</a>
            </div>
          </div>

          <button
            id="open-quote-modal-btn"
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-dark dark:bg-white text-white dark:text-dark text-xs font-display uppercase tracking-wider font-semibold hover:bg-gold hover:text-white dark:hover:text-white dark:hover:bg-gold transition-all duration-300 rounded border border-dark dark:border-white hover:border-gold dark:hover:border-gold"
          >
            {t.nav.requestQuote}
          </button>
        </div>

        {/* Mobile Controls Row */}
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Quick Lang toggle icon */}
          <button
            id="mobile-lang-toggle"
            onClick={() => setLang(lang === "fr" ? "darija" : "fr")}
            className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gold transition-colors flex items-center gap-1"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase font-bold">{lang === "fr" ? "DA" : "FR"}</span>
          </button>

          {/* Mobile Theme Toggle */}
          <button
            id="mobile-theme-toggle"
            onClick={toggleTheme}
            className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gold transition-colors flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/60"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-dark dark:text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-gray-800 shadow-xl py-6 px-6 space-y-4 z-50 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300 hover:text-gold py-1.5 border-b border-gray-50 dark:border-gray-850"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-3 pt-3">
            <div className="flex items-start gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+212660623981" className="hover:text-gold">+212 (0) 660 62 39 81</a>
                <a href="tel:+212520009092" className="hover:text-gold">+212 (0) 520 00 90 92</a>
              </div>
            </div>
            
            <button
              id="mobile-quote-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-dark dark:bg-white text-white dark:text-dark text-xs font-display uppercase tracking-widest font-bold hover:bg-gold dark:hover:bg-gold dark:hover:text-white transition-all duration-300 rounded text-center border border-transparent dark:border-white"
            >
              {t.nav.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
