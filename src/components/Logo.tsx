import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Define sizing classes
  const sizeClasses = {
    sm: {
      text: "text-base",
      sub: "text-[8px] -mt-0.5",
      dotMa: "text-[7px]",
      barHeight: "h-[1.5px] w-4",
      gap: "gap-1",
      mb: "mb-[1px]"
    },
    md: {
      text: "text-lg md:text-xl",
      sub: "text-[9px] -mt-0.5",
      dotMa: "text-[8px]",
      barHeight: "h-[2px] w-5",
      gap: "gap-1.5",
      mb: "mb-[2px]"
    },
    lg: {
      text: "text-2xl md:text-3xl",
      sub: "text-[10px] md:text-[11px] -mt-1",
      dotMa: "text-[10px]",
      barHeight: "h-[2px] w-6",
      gap: "gap-2",
      mb: "mb-[3px]"
    },
    xl: {
      text: "text-4xl md:text-5xl",
      sub: "text-xs md:text-sm -mt-1.5",
      dotMa: "text-sm",
      barHeight: "h-[3px] w-8",
      gap: "gap-3",
      mb: "mb-[4px]"
    }
  };

  const config = sizeClasses[size];

  return (
    <div className={`flex flex-col select-none group leading-none ${className}`}>
      {/* Brand logo in a stylized, modern typographic layout matching the uploaded logo */}
      <div className="flex items-end font-sans tracking-tight">
        {/* 'deCo' in orange/gold */}
        <span className="font-extrabold text-gold tracking-tight">
          deCo
        </span>
        
        {/* 'ni' in dark (light-mode) or white (dark-mode) */}
        <span className="font-extrabold text-[#121212] dark:text-white transition-colors duration-300">
          ni
        </span>

        {/* 'l' + '.ma' suffix block */}
        <div className="flex items-end">
          <span className="font-extrabold text-[#121212] dark:text-white transition-colors duration-300">
            l
          </span>
          {/* Suffix dot-ma with small gold underline */}
          <div className={`flex flex-col items-center ml-0.5 ${config.mb}`}>
            <span className={`font-bold text-[#121212] dark:text-white leading-none tracking-normal transition-colors duration-300 ${config.dotMa}`}>
              .ma
            </span>
            <div className={`bg-gold ${config.barHeight}`} />
          </div>
        </div>
      </div>
      
      {/* Sub-label slogan under the main text */}
      <span className={`uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-sans group-hover:text-[#121212] dark:group-hover:text-white transition-colors duration-300 ${config.sub}`}>
        L'Élégance de la Finition
      </span>
    </div>
  );
}
