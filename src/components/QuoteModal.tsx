import React, { useState, useEffect } from "react";
import { X, Calendar, ArrowRight, CheckCircle2, History, Sparkles } from "lucide-react";
import { translations } from "../translations";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "fr" | "darija";
}

interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  timeframe: string;
  date: string;
}

export default function QuoteModal({ isOpen, onClose, lang }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pastRequests, setPastRequests] = useState<QuoteRequest[]>([]);

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem("deconil_quote_requests");
    if (saved) {
      try {
        setPastRequests(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [submitted]);

  if (!isOpen) return null;

  const servicesList = [
    t.services.items.wallPanels.title,
    t.services.items.pvcPanels.title,
    t.services.items.wpcCladding.title,
    t.services.items.tvWalls.title,
    t.services.items.roomSeparators.title,
    t.services.items.ledIntegration.title,
    t.services.items.wall3d.title,
    t.services.items.artificialGardens.title,
    t.services.items.customMoldings.title,
    t.services.items.consulting.title,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !service) return;

    const newRequest: QuoteRequest = {
      id: "req_" + Date.now(),
      name,
      phone,
      service,
      timeframe: timeframe || (lang === "fr" ? "Non spécifié" : "غير محدد"),
      date: new Date().toLocaleDateString(lang === "fr" ? "fr-FR" : "ar-MA", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    const updated = [newRequest, ...pastRequests];
    localStorage.setItem("deconil_quote_requests", JSON.stringify(updated));
    setPastRequests(updated);
    setSubmitted(true);

    // Form reset
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setTimeframe("");
    setMessage("");
  };

  const handleClearHistory = () => {
    localStorage.removeItem("deconil_quote_requests");
    setPastRequests([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        id="quote-modal-container"
        className="relative w-full max-w-2xl bg-white dark:bg-[#1a1a1a] text-dark dark:text-white max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl border border-gold/10 dark:border-gray-850 transition-colors duration-300"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between z-10 transition-colors">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-dark dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              {t.quoteModal.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-sans">{t.quoteModal.subtitle}</p>
          </div>
          <button 
            id="close-quote-modal"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 hover:text-dark dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-dark dark:text-white">{t.quoteModal.successTitle}</h4>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                {t.quoteModal.successDesc}
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  id="done-quote"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-dark dark:bg-white text-white dark:text-dark font-medium hover:bg-gold dark:hover:bg-gold dark:hover:text-white transition-all duration-300 rounded text-sm tracking-wide cursor-pointer"
                >
                  {t.quoteModal.close}
                </button>
                <button
                  id="request-another"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded text-sm cursor-pointer"
                >
                  {lang === "fr" ? "Nouvelle Demande" : "طلب آخر"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Youssef El Alami"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                    {t.contact.formPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: 06 61 XX XX XX"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                    {t.quoteModal.selectService} *
                  </label>
                  <select
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="dark:bg-[#1a1a1a]">-- {lang === "fr" ? "Choisir" : "اختار"} --</option>
                    {servicesList.map((svc, i) => (
                      <option key={i} value={svc} className="dark:bg-[#1a1a1a]">{svc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                    {t.quoteModal.preferredTime}
                  </label>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all cursor-pointer"
                  >
                    <option value="" className="dark:bg-[#1a1a1a]">-- {lang === "fr" ? "Sélectionner" : "اختار المدة"} --</option>
                    {lang === "fr" ? (
                      <>
                        <option value="Urgemment (1-2 semaines)" className="dark:bg-[#1a1a1a]">Urgemment (1-2 semaines)</option>
                        <option value="Sous un mois" className="dark:bg-[#1a1a1a]">Sous un mois</option>
                        <option value="Prochainement (2-3 mois)" className="dark:bg-[#1a1a1a]">Prochainement (2-3 mois)</option>
                      </>
                    ) : (
                      <>
                        <option value="مستعجل (أسبوع - أسبوعين)" className="dark:bg-[#1a1a1a]">مستعجل (أسبوع - أسبوعين)</option>
                        <option value="خلال هاد الشهر" className="dark:bg-[#1a1a1a]">خلال هاد الشهر</option>
                        <option value="قريباً (شهرين تال 3 أشهر)" className="dark:bg-[#1a1a1a]">قريباً (شهرين تال 3 أشهر)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                  {t.contact.formEmail}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: mail@example.com"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                  {t.contact.formMessage}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === "fr" ? "Dimensions approximatives du mur (Longueur x Hauteur), finitions..." : "العبار التقريبي للحيط (العرض والطول)، نوع المواد اللي بغيتي..."}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-sm text-dark dark:text-white focus:outline-none focus:border-gold focus:bg-white dark:focus:bg-[#181818] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="submit-quote-form"
                className="w-full py-3 bg-dark dark:bg-white text-white dark:text-dark font-display uppercase tracking-wider font-semibold text-xs hover:bg-gold hover:text-white dark:hover:text-white dark:hover:bg-gold transition-all duration-300 rounded flex items-center justify-center gap-2 cursor-pointer"
              >
                {t.contact.formSubmit}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Past Requests / History */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-display text-sm font-semibold tracking-tight text-dark dark:text-white flex items-center gap-1.5">
                <History className="w-4 h-4 text-gold" />
                {t.quoteModal.pastRequests}
              </h5>
              {pastRequests.length > 0 && (
                <button
                  id="clear-quote-history"
                  onClick={handleClearHistory}
                  className="text-xs text-red-500 hover:text-red-700 font-sans hover:underline cursor-pointer"
                >
                  {lang === "fr" ? "Effacer l'historique" : "مسح السجل"}
                </button>
              )}
            </div>

            {pastRequests.length === 0 ? (
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center py-4 bg-gray-50/50 dark:bg-gray-800/20 rounded italic">
                {t.quoteModal.noRequests}
              </p>
            ) : (
              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                {pastRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-3 bg-gray-50 dark:bg-[#121212] hover:bg-gray-100/75 dark:hover:bg-gray-800/40 rounded border border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs transition-colors"
                  >
                    <div className="space-y-1">
                      <p className="font-semibold text-dark dark:text-white">{req.service}</p>
                      <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold" />
                        {req.date} &bull; {req.timeframe}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-medium text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {lang === "fr" ? "En attente" : "قيد المعالجة"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
