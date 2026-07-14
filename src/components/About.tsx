import React, { useEffect, useState } from "react";
import { ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface AboutProps {
  lang: "fr" | "darija";
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  // Animated counters logic on mount
  const [counts, setCounts] = useState({ projects: 0, clients: 0, categories: 0 });

  useEffect(() => {
    let start = 0;
    const endProjects = 500;
    const endClients = 1000;
    const endCategories = 10;
    const duration = 1800; // ms
    
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out quad
      const easeProgress = progress * (2 - progress);

      setCounts({
        projects: Math.floor(easeProgress * endProjects),
        clients: Math.floor(easeProgress * endClients),
        categories: Math.floor(easeProgress * endCategories),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const stats = [
    {
      value: `${counts.projects}+`,
      label: t.about.statsLabelProjects,
      desc: lang === "fr" ? "Résidentiels et commerciaux" : "شقق، فيلات ومحلات",
    },
    {
      value: `${counts.clients}+`,
      label: t.about.statsLabelClients,
      desc: lang === "fr" ? "Recommandations constantes" : "ثقة متبادلة مستمرة",
    },
    {
      value: `${counts.categories}+`,
      label: t.about.statsLabelCategories,
      desc: lang === "fr" ? "PVC, WPC, Bois, Portes..." : "خشب، رخام، بيبان...",
    },
    {
      value: t.about.baseCity,
      label: t.about.statsLabelCity,
      desc: "Quartier Oulfa",
    },
    {
      value: t.about.serviceArea,
      label: t.about.statsLabelArea,
      desc: lang === "fr" ? "Livraison partout au Maroc" : "توصيل لجميع المدن",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      {/* Decorative absolute elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 dark:bg-dark-light/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* About Info & Graphic Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              {t.about.badge}
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight leading-tight">
              {t.about.title}
            </h2>
            
            <div className="w-20 h-1 bg-gold rounded" />
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 font-sans text-sm md:text-base leading-relaxed font-light">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-1.5 rounded bg-gold/10 text-gold mt-1"
                >
                  <ShieldCheck className="w-4 h-4" />
                </motion.div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white">
                    {lang === "fr" ? "Qualité Certifiée" : "جودة مضمونة"}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {lang === "fr" ? "Des matériaux durables et conformes aux normes." : "مواد صحيحة كتدوم وكتصبر للوقت."}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-1.5 rounded bg-gold/10 text-gold mt-1"
                >
                  <Truck className="w-4 h-4" />
                </motion.div>
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white">
                    {lang === "fr" ? "Stock Permanent" : "السلعة ديما كاينة"}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {lang === "fr" ? "Disponibilité immédiate pour vos chantiers." : "الستوك ديما واجد لجميع الطلبات ديالكم."}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] bg-gray-100 rounded shadow-xl overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Modern luxury finishing workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 pointer-events-none">
                <p className="font-display text-xs font-bold uppercase tracking-widest text-gold">Deconil.ma</p>
                <h4 className="font-display text-lg font-semibold tracking-tight">Casablanca Showroom</h4>
                <p className="text-xs text-gray-300 font-sans font-light">Quartier Oulfa, Hay Hassani</p>
              </div>
            </div>
            
            {/* Background geometric accents */}
            <motion.div 
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 -z-10 rounded translate-x-3 translate-y-3 hidden sm:block pointer-events-none" 
            />
          </motion.div>
        </div>

        {/* Counters Grid Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-gray-100 dark:border-gray-800/60 pt-16">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
                borderColor: "rgba(200, 155, 60, 0.2)"
              }}
              key={i}
              className={`p-6 rounded bg-gray-50 dark:bg-[#1a1a1a] border border-transparent dark:border-gray-800/40 transition-all duration-300 ${
                i >= 3 ? "col-span-1" : "col-span-1"
              } ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <p className="font-display text-2xl md:text-3xl font-extrabold text-gold tracking-tight">
                {stat.value}
              </p>
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white mt-2">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-sans">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
