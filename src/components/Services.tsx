import React from "react";
import { 
  Layers, 
  Droplet, 
  ExternalLink, 
  Tv, 
  Columns, 
  Grid3X3, 
  Zap,
  Leaf,
  Sparkles,
  UserCheck,
  ArrowUpRight
} from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface ServicesProps {
  lang: "fr" | "darija";
  onOpenQuote: () => void;
}

export default function Services({ lang, onOpenQuote }: ServicesProps) {
  const t = translations[lang];

  const serviceItems = [
    {
      icon: Layers,
      title: t.services.items.wallPanels.title,
      desc: t.services.items.wallPanels.desc,
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Droplet,
      title: t.services.items.pvcPanels.title,
      desc: t.services.items.pvcPanels.desc,
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: ExternalLink,
      title: t.services.items.wpcCladding.title,
      desc: t.services.items.wpcCladding.desc,
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Tv,
      title: t.services.items.tvWalls.title,
      desc: t.services.items.tvWalls.desc,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Columns,
      title: t.services.items.roomSeparators.title,
      desc: t.services.items.roomSeparators.desc,
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Zap,
      title: t.services.items.ledIntegration.title,
      desc: t.services.items.ledIntegration.desc,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Grid3X3,
      title: t.services.items.wall3d.title,
      desc: t.services.items.wall3d.desc,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Leaf,
      title: t.services.items.artificialGardens.title,
      desc: t.services.items.artificialGardens.desc,
      image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Sparkles,
      title: t.services.items.customMoldings.title,
      desc: t.services.items.customMoldings.desc,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: UserCheck,
      title: t.services.items.consulting.title,
      desc: t.services.items.consulting.desc,
      image: "https://images.unsplash.com/photo-1600880212319-7834e794b459?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#181818] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t.services.badge}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light">
            {t.services.subtitle}
          </p>
          <div className="w-12 h-1 bg-gold rounded mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceItems.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
                  borderColor: "rgba(200, 155, 60, 0.2)"
                }}
                className="group relative bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded overflow-hidden shadow-sm transition-all duration-300 flex flex-col h-full"
              >
                {/* Product/Service Preview Image */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gold Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="p-2.5 bg-gray-50 dark:bg-[#1a1a1a] group-hover:bg-gold/10 group-hover:text-gold text-dark dark:text-gray-300 rounded-md transition-colors duration-300"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenQuote}
                        className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 group-hover:text-gold flex items-center gap-0.5 transition-colors cursor-pointer"
                      >
                        {lang === "fr" ? "Devis" : "دوبري"}
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.button>
                    </div>

                    <h3 className="font-display text-base font-bold text-dark dark:text-white group-hover:text-gold dark:group-hover:text-gold transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
            {lang === "fr" 
              ? "Besoin d'un habillage spécifique non listé ici ? Contactez nos artisans pour une solution sur-mesure." 
              : "محتاج شي ديزاين خاص ماذكورش هنا ؟ اتصل بينا وغادي نصاوبوه ليك على العبار."}
          </p>
        </div>

      </div>
    </section>
  );
}
