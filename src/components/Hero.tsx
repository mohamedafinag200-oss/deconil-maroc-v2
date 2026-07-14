import React from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface HeroProps {
  lang: "fr" | "darija";
  onOpenQuote: () => void;
}

export default function Hero({ lang, onOpenQuote }: HeroProps) {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.6 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src="/src/assets/images/moroccan_living_room_1783012986803.jpg"
          alt="Deconil.ma Luxury Living Room"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-dark/50" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded border border-white/10"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white">
            {lang === "fr" ? "Design d'Intérieur Haut de Gamme" : "تصاميم وديكورات راقية"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-[1.4] text-white max-w-4xl mx-auto"
        >
          {t.hero.title.split(" ").map((word, idx) => {
            // Apply gold accent styling to specific words
            const isGoldWord = 
              (lang === "fr" && (word.toLowerCase().includes("chef-d'œuvre") || word.toLowerCase().includes("moderne"))) ||
              (lang === "darija" && (word.includes("تحفة") || word.includes("عصرية")));
            return (
              <span key={idx} className={`${isGoldWord ? "text-gold" : ""} mr-3.5 sm:mr-5 md:mr-6 inline-block last:mr-0`}>
                {word}
              </span>
            );
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(200, 155, 60, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            id="hero-quote-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-3.5 bg-gold text-white font-display text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-dark transition-all duration-300 rounded shadow-lg shadow-gold/20 flex items-center justify-center gap-2 group cursor-pointer"
          >
            {t.hero.ctaQuote}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            href="#portfolio"
            id="hero-portfolio-link"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/40 bg-transparent text-white font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded text-center block cursor-pointer"
          >
            {t.hero.ctaPortfolio}
          </motion.a>
        </motion.div>
      </div>

      {/* Down Chevron Anchor Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 cursor-pointer select-none"
      >
        <span className="text-[9px] uppercase tracking-widest font-semibold font-sans">
          {lang === "fr" ? "Faire défiler" : "هبط تشوف"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
