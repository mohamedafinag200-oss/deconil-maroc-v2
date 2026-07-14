import React from "react";
import { MessageSquare, Layers, Calculator, CreditCard, Truck } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface ProcessProps {
  lang: "fr" | "darija";
}

export default function Process({ lang }: ProcessProps) {
  const t = translations[lang];

  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: t.process.steps.step1.title,
      desc: t.process.steps.step1.desc,
    },
    {
      num: "02",
      icon: Layers,
      title: t.process.steps.step2.title,
      desc: t.process.steps.step2.desc,
    },
    {
      num: "03",
      icon: Calculator,
      title: t.process.steps.step3.title,
      desc: t.process.steps.step3.desc,
    },
    {
      num: "04",
      icon: CreditCard,
      title: t.process.steps.step4.title,
      desc: t.process.steps.step4.desc,
    },
    {
      num: "05",
      icon: Truck,
      title: t.process.steps.step5.title,
      desc: t.process.steps.step5.desc,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t.process.badge}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light">
            {t.process.subtitle}
          </p>
          <div className="w-12 h-1 bg-gold rounded mx-auto mt-4" />
        </div>

        {/* Process Roadmap Grid */}
        <div className="relative mt-16">
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-[43px] left-[5%] right-[5%] h-[2px] bg-gray-100 dark:bg-gray-800/60 -z-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-gold/30" 
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10"
          >
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={stepVariants}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step Marker Circle */}
                  <motion.div 
                    whileHover={{ scale: 1.08, rotate: 5, borderColor: "#C89B3C" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative flex items-center justify-center w-20 h-20 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-850 rounded-full shadow-md group-hover:shadow-lg transition-colors duration-300"
                  >
                    <IconComponent className="w-7 h-7 text-dark dark:text-gray-300 group-hover:text-gold transition-colors duration-300" />
                    
                    {/* Number Badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#1a1a1a] select-none">
                      {step.num}
                    </span>
                  </motion.div>

                  {/* Step Content */}
                  <div className="space-y-2 max-w-xs">
                    <h3 className="font-display text-sm font-bold text-dark dark:text-white group-hover:text-gold transition-colors duration-200">
                      {step.title.substring(3)} {/* Remove "1. " etc. prefix as we have the badge */}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
