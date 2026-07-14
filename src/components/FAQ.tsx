import React, { useState } from "react";
import { ChevronDown, HelpCircle, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translations } from "../translations";
import { testimonials } from "../data";

interface FAQProps {
  lang: "fr" | "darija";
}

export default function FAQ({ lang }: FAQProps) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q8, a: t.faq.a8 },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-[#181818] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Double Column Layout: Testimonials (Left) & FAQs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Testimonials Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                {lang === "fr" ? "Témoignages" : "آراء الكليان"}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-dark dark:text-white tracking-tight leading-tight">
                {lang === "fr" 
                  ? "Ce que disent nos clients satisfaits" 
                  : "كلام الكليان اللي ثاقوا في الخدمة ديالنا"}
              </h2>
              <div className="w-12 h-1 bg-gold rounded" />
            </div>

            <div className="space-y-6">
              {testimonials.map((test, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)" }}
                  key={test.id}
                  className="p-6 bg-white dark:bg-[#121212] rounded shadow-sm border border-gray-100 dark:border-gray-800/80 flex flex-col justify-between space-y-4 relative"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-300 italic leading-relaxed font-light">
                    &ldquo;{lang === "fr" ? test.contentFr : test.contentDarija}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gray-50 dark:border-gray-800/60 pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={test.avatar}
                        alt={test.name}
                        className="w-10 h-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display text-xs font-bold text-dark dark:text-white">{test.name}</h4>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 font-sans">
                          {lang === "fr" ? test.roleFr : test.roleDarija} &bull; <span className="text-gold">{lang === "fr" ? test.projectTypeFr : test.projectTypeDarija}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex text-gold">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQs Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                {t.faq.badge}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-dark dark:text-white tracking-tight">
                {t.faq.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-sans text-xs md:text-sm font-light">
                {t.faq.subtitle}
              </p>
              <div className="w-12 h-1 bg-gold rounded" />
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      id={`faq-btn-${idx}`}
                      onClick={() => toggleAccordion(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors cursor-pointer"
                    >
                      <span className="font-display text-sm font-bold text-dark dark:text-white pr-4 flex items-center gap-2 select-none">
                        <HelpCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-gold" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-gray-50 dark:border-gray-800/60"
                        >
                          <div className="px-6 py-5 text-xs md:text-sm text-gray-600 dark:text-gray-300 font-sans leading-relaxed font-light">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
