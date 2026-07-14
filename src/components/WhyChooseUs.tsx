import React from "react";
import { 
  Store, 
  Gem, 
  Palette, 
  Sliders, 
  Truck, 
  Headphones, 
  Briefcase, 
  Coins, 
  CheckCircle2 
} from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface WhyChooseUsProps {
  lang: "fr" | "darija";
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang];

  const benefits = [
    {
      icon: Store,
      title: t.whyUs.points.installation.title,
      desc: t.whyUs.points.installation.desc,
    },
    {
      icon: Gem, 
      title: t.whyUs.points.materials.title,
      desc: t.whyUs.points.materials.desc,
    },
    {
      icon: Palette,
      title: t.whyUs.points.designs.title,
      desc: t.whyUs.points.designs.desc,
    },
    {
      icon: Sliders,
      title: t.whyUs.points.custom.title,
      desc: t.whyUs.points.custom.desc,
    },
    {
      icon: Truck,
      title: t.whyUs.points.delivery.title,
      desc: t.whyUs.points.delivery.desc,
    },
    {
      icon: Headphones,
      title: t.whyUs.points.team.title,
      desc: t.whyUs.points.team.desc,
    },
    {
      icon: Briefcase,
      title: t.whyUs.points.expertise.title,
      desc: t.whyUs.points.expertise.desc,
    },
    {
      icon: Coins,
      title: t.whyUs.points.pricing.title,
      desc: t.whyUs.points.pricing.desc,
    },
    {
      icon: CheckCircle2,
      title: t.whyUs.points.consultation.title,
      desc: t.whyUs.points.consultation.desc,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      {/* Absolute Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t.whyUs.badge}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light">
            {t.whyUs.subtitle}
          </p>
          <div className="w-12 h-1 bg-gold rounded mx-auto mt-4" />
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -6,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
                  borderColor: "rgba(200, 155, 60, 0.2)"
                }}
                className="group p-8 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded hover:border-gold/30 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold transition-colors duration-300" />
                
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="inline-flex p-3 rounded-md bg-gray-50 dark:bg-gray-800 group-hover:bg-gold/10 text-dark dark:text-gray-300 group-hover:text-gold transition-colors duration-300"
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.div>
                  
                  <h3 className="font-display text-base font-bold text-dark dark:text-white group-hover:text-gold transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
