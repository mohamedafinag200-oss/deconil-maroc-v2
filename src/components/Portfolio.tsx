import React, { useState, useMemo } from "react";
import { Info, X, ChevronLeft, ChevronRight, Tag, Hash, Ruler, Palette, Hammer, LayoutGrid, ListChecks, ArrowRight, Search, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { products, Product } from "../data";
import { translations } from "../translations";

interface PortfolioProps {
  lang: "fr" | "darija";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("interior");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedVariantIndices, setSelectedVariantIndices] = useState<Record<string, number>>({});

  const t = translations[lang];

  const getActiveData = (item: Product) => {
    const vIdx = selectedVariantIndices[item.id] || 0;
    if (item.variants && item.variants[vIdx]) {
      return {
        image: item.variants[vIdx].image,
        reference: item.variants[vIdx].reference
      };
    }
    return {
      image: item.image,
      reference: item.reference
    };
  };

  // Helper translations for categories
  const categoryLabels: Record<string, string> = {
    interior: t.portfolio.categories.interior,
    exterior: t.portfolio.categories.exterior,
  };

  // Filter and Search logic
  const filteredItems = useMemo(() => {
    return products.filter(item => {
      const matchesCategory = item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      
      if (!query) return matchesCategory;

      const matchesName = (item.nameFr?.toLowerCase().includes(query) || item.nameDarija?.toLowerCase().includes(query));
      const matchesRef = item.reference?.toLowerCase().includes(query);
      const matchesColors = item.colors?.some(c => c.toLowerCase().includes(query));
      const matchesVariants = item.variants?.some(v => 
        v.reference.toLowerCase().includes(query) || 
        v.colorNameFr?.toLowerCase().includes(query) || 
        v.colorNameDarija?.toLowerCase().includes(query)
      );

      return matchesCategory && (matchesName || matchesRef || matchesColors || matchesVariants);
    });
  }, [selectedCategory, searchQuery]);

  const openLightbox = (id: string) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentProduct: Product | undefined = lightboxIndex !== null
    ? filteredItems[lightboxIndex]
    : undefined;

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-[#181818] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t.portfolio.badge}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight">
            {t.portfolio.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light">
            {t.portfolio.subtitle}
          </p>
          <div className="w-12 h-1 bg-gold rounded mx-auto mt-4" />
        </div>

        {/* Category Buttons & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            {Object.entries(categoryLabels).map(([key, value]) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setSearchQuery(""); // Optional: reset search when changing category
                }}
                className={`px-6 py-2.5 text-xs font-display font-bold uppercase tracking-widest rounded-full transition-all duration-500 border-2 cursor-pointer ${
                  selectedCategory === key
                    ? "bg-gold text-white border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "bg-transparent text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {value}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gold transition-colors" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.portfolio.searchPlaceholder}
              className={`w-full bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all dark:text-white ${lang === "darija" ? "text-right pr-11 pl-4" : ""}`}
              dir={lang === "darija" ? "rtl" : "ltr"}
            />
          </div>
        </div>

        {/* Product Catalog Grid */}
        {filteredItems.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group cursor-pointer relative bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-850 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Product Image Frame */}
                <div className={`relative overflow-hidden ${['int-9', 'int-10', 'int-29', 'int-30', 'ext-3', 'ext-5', 'ext-8'].includes(item.id) ? 'aspect-square bg-white dark:bg-white' : 'aspect-[4/5]'}`}>
                  <motion.img
                    key={getActiveData(item).image}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={getActiveData(item).image}
                    alt={lang === "fr" ? item.nameFr : item.nameDarija}
                    className={`w-full h-full transition-all duration-700 ${['int-36', 'int-34', 'int-33', 'int-6', 'int-7', 'int-8', 'int-9', 'int-10', 'int-29', 'int-30', 'ext-3', 'ext-5', 'ext-8'].includes(item.id) ? 'object-contain' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Info Overlay */}
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/90 dark:bg-[#1a1a1a]/90 p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Info className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  {/* Reference Tag */}
                  <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono font-bold text-white flex items-center gap-1.5 border border-white/10 z-10">
                    <Hash className="w-3 h-3 text-gold" />
                    {getActiveData(item).reference}
                  </div>

                  {/* Variant Selection Button / Badge */}
                  {item.variants && item.variants.length > 0 && (
                    <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-bold text-white flex items-center gap-1.5 border border-white/10 z-10 uppercase tracking-wider">
                      <LayoutGrid className="w-3 h-3" />
                      {t.portfolio.variantsAvailable}
                    </div>
                  )}

                  {/* Variant Selectors */}
                  {item.variants && item.variants.length > 0 && (
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-20">
                      {item.variants.map((variant, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVariantIndices(prev => ({ ...prev, [item.id]: idx }));
                          }}
                          className={`flex-1 min-w-[50px] py-1 rounded shadow-sm text-[8px] font-bold transition-all border uppercase tracking-tighter cursor-pointer ${
                            (selectedVariantIndices[item.id] || 0) === idx
                              ? "bg-gold border-gold text-white shadow-gold/20"
                              : "bg-white/80 dark:bg-black/80 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gold/50"
                          }`}
                          title={lang === "fr" ? variant.colorNameFr : variant.colorNameDarija}
                        >
                          {variant.reference.split('-').pop()}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      {categoryLabels[item.category]}
                    </div>
                    <h4 className="font-display text-xl font-bold text-dark dark:text-white leading-tight">
                      {lang === "fr" ? item.nameFr : item.nameDarija}
                    </h4>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-850 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{t.portfolio.viewProject}</span>
                    <ArrowRight className="w-5 h-5 text-gold transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white dark:bg-[#111111] rounded-3xl border border-dashed border-gray-200 dark:border-gray-800"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-900 mb-4">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white">{t.portfolio.noResults}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {lang === "fr" ? "Essayez d'autres mots-clés ou changez de catégorie." : "جرب كلمات أخرى أو غير الفئة."}
            </p>
          </motion.div>
        )}

        {/* Modern Product Detail Popup */}
        <AnimatePresence>
          {currentProduct && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
              onClick={closeLightbox}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl bg-white dark:bg-[#111111] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none border border-gray-200 dark:border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 p-2 rounded-full bg-dark/10 hover:bg-dark/20 dark:bg-white/10 dark:hover:bg-white/20 text-dark dark:text-white transition-colors z-50 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left: Image & Navigation */}
                <div className={`relative w-full lg:w-3/5 aspect-square ${['int-29', 'int-30', 'ext-3', 'ext-5', 'ext-8'].includes(currentProduct.id) ? 'bg-white dark:bg-white' : 'bg-gray-100 dark:bg-gray-900'}`}>
                  <motion.img
                    key={currentProduct.id + "_" + (selectedVariantIndices[currentProduct.id] || 0)}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      scale: currentProduct.id === 'int-36' 
                        ? ((selectedVariantIndices[currentProduct.id] || 0) === 0 ? 1.1 : 0.85) 
                        : currentProduct.id === 'int-34'
                        ? ((selectedVariantIndices[currentProduct.id] || 0) === 0 ? 0.85 : (selectedVariantIndices[currentProduct.id] || 0) === 1 ? 0.95 : 1.15)
                        : 1
                    }}
                    src={getActiveData(currentProduct).image}
                    alt={lang === "fr" ? currentProduct.nameFr : currentProduct.nameDarija}
                    className={`w-full h-full transition-all duration-500 ${['int-36', 'int-34', 'int-33', 'int-6', 'int-7', 'int-8', 'int-9', 'int-10', 'int-29', 'int-30', 'ext-3', 'ext-5', 'ext-8'].includes(currentProduct.id) ? 'object-contain' : 'object-cover'}`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Variant Selectors in Lightbox */}
                  {currentProduct.variants && currentProduct.variants.length > 0 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                      {currentProduct.variants.map((variant, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedVariantIndices(prev => ({ ...prev, [currentProduct.id]: idx }))}
                          className={`px-4 py-2 rounded-full text-xs font-bold transition-all border-2 backdrop-blur-md cursor-pointer ${
                            (selectedVariantIndices[currentProduct.id] || 0) === idx
                              ? "bg-gold border-gold text-white"
                              : "bg-white/20 border-white/40 text-white hover:bg-white/40"
                          }`}
                        >
                          {variant.reference} - {lang === "fr" ? variant.colorNameFr : variant.colorNameDarija}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Prev/Next Navigation */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all pointer-events-auto cursor-pointer"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all pointer-events-auto cursor-pointer"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Right: Specifications & Details */}
                <div className="w-full lg:w-2/5 p-8 lg:p-12 overflow-y-auto bg-white dark:bg-[#0c0c0c]">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-[0.3em]">
                        <Tag className="w-4 h-4" />
                        {categoryLabels[currentProduct.category]}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-extrabold text-dark dark:text-white leading-tight">
                        {lang === "fr" ? currentProduct.nameFr : currentProduct.nameDarija}
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-850 rounded-lg text-sm font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                        <Hash className="w-4 h-4 text-gold" />
                        REF: {currentProduct.reference}
                      </div>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-y border-gray-100 dark:border-gray-850">
                      {currentProduct.dimensions && (
                        <div className="space-y-1">
                          <h4 className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                            <Ruler className="w-3.5 h-3.5" />
                            {t.portfolio.dimensionsLabel}
                          </h4>
                          <p className="text-sm font-medium text-dark dark:text-gray-200">{currentProduct.dimensions}</p>
                        </div>
                      )}
                      {(currentProduct.materialFr || currentProduct.materialDarija) && (
                        <div className="space-y-1">
                          <h4 className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                            <Hammer className="w-3.5 h-3.5" />
                            {t.portfolio.materialLabel}
                          </h4>
                          <p className="text-sm font-medium text-dark dark:text-gray-200">
                            {lang === "fr" ? currentProduct.materialFr : currentProduct.materialDarija}
                          </p>
                        </div>
                      )}
                      {currentProduct.colors && currentProduct.colors.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                            <Palette className="w-3.5 h-3.5" />
                            {t.portfolio.colorsLabel}
                          </h4>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {currentProduct.colors.map((color, i) => (
                              <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-850 rounded text-[10px] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">{color}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Catalogue Button */}
                    {currentProduct.catalogueImage && (
                      <div className="pt-2">
                        <button
                          onClick={() => window.open(currentProduct.catalogueImage, '_blank')}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gold/5 hover:bg-gold/10 text-gold border border-gold/20 rounded-xl font-bold text-sm transition-all group cursor-pointer"
                        >
                          <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          {lang === 'fr' ? 'Voir le Catalogue de Modèles' : 'عرض كتالوج النماذج'}
                        </button>
                        <p className="mt-2 text-[10px] text-gray-500 text-center italic">
                          {lang === 'fr' ? '* Plusieurs variantes et combinaisons disponibles' : '* تتوفر العديد من الأشكال والتنسيقات'}
                        </p>
                      </div>
                    )}

                    {/* Detailed Info */}
                    <div className="space-y-8">
                      {(currentProduct.descriptionFr || currentProduct.descriptionDarija) && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-dark dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3">
                            {t.portfolio.descLabel}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                            {lang === "fr" ? currentProduct.descriptionFr : currentProduct.descriptionDarija}
                          </p>
                        </div>
                      )}

                      {((lang === "fr" && currentProduct.characteristicsFr) || (lang === "darija" && currentProduct.characteristicsDarija)) && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-dark dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3 flex items-center gap-2">
                            <ListChecks className="w-4 h-4 text-gold" />
                            {t.portfolio.charLabel}
                          </h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {(lang === "fr" ? currentProduct.characteristicsFr : currentProduct.characteristicsDarija)?.map((char, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                {char}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {((lang === "fr" && currentProduct.applicationsFr) || (lang === "darija" && currentProduct.applicationsDarija)) && (
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-dark dark:text-white uppercase tracking-widest border-l-2 border-gold pl-3 flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4 text-gold" />
                            {t.portfolio.appsLabel}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(lang === "fr" ? currentProduct.applicationsFr : currentProduct.applicationsDarija)?.map((app, i) => (
                              <span key={i} className="px-3 py-1 bg-gold/5 text-gold text-[10px] font-bold rounded-full border border-gold/20">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* End of info section */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
