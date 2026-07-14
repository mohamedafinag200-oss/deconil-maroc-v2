import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Sparkles,
  Facebook,
  Music as Tiktok
} from "lucide-react";
import { motion } from "motion/react";
import { translations } from "../translations";

interface ContactProps {
  lang: "fr" | "darija";
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Save to localStorage
    const savedSubmissions = localStorage.getItem("deconil_contact_submissions") || "[]";
    const submissions = JSON.parse(savedSubmissions);
    submissions.push({
      id: "sub_" + Date.now(),
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toISOString(),
    });
    localStorage.setItem("deconil_contact_submissions", JSON.stringify(submissions));

    setTimeout(() => {
      setSending(false);
      setSent(true);
      // Reset
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    }, 1200);
  };

  const services = [
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

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t.contact.badge}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light">
            {t.contact.subtitle}
          </p>
          <div className="w-12 h-1 bg-gold rounded mx-auto mt-4" />
        </div>

        {/* Double Column Information & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="p-8 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="font-display text-lg font-bold text-dark dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Deconil.ma
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
                {t.contact.moroccoCoverage}
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Address Card */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 transition-transform group"
                >
                  <div className="p-2.5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded text-gold shadow-sm flex-shrink-0 transition-colors duration-300 group-hover:border-gold/50 dark:group-hover:border-gold/50 group-hover:bg-gold/[0.02] dark:group-hover:bg-gold/[0.02]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white transition-colors">
                      {t.contact.addressLabel}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed font-sans font-light">
                      {t.contact.addressVal}
                    </p>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-sans block mt-0.5">
                      Deconil Maroc
                    </span>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 transition-transform group"
                >
                  <div className="p-2.5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded text-gold shadow-sm flex-shrink-0 transition-colors duration-300 group-hover:border-gold/50 dark:group-hover:border-gold/50 group-hover:bg-gold/[0.02] dark:group-hover:bg-gold/[0.02]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white transition-colors">
                      {t.contact.phoneLabel}
                    </h4>
                    <div className="flex flex-col gap-1 mt-1">
                      <a 
                        href="tel:+212660623981" 
                        className="text-xs text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-sans font-light transition-colors"
                      >
                        +212 (0) 660 62 39 81
                      </a>
                      <a 
                        href="tel:+212520009092" 
                        className="text-xs text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold font-sans font-light transition-colors"
                      >
                        +212 (0) 520 00 90 92
                      </a>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-sans block mt-0.5">
                      {lang === "fr" ? "Disponible de 09h00 à 19h00" : "موجودين من 9 د الصباح ل 7 د الليل"}
                    </span>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 transition-transform group"
                >
                  <div className="p-2.5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded text-gold shadow-sm flex-shrink-0 transition-colors duration-300 group-hover:border-gold/50 dark:group-hover:border-gold/50 group-hover:bg-gold/[0.02] dark:group-hover:bg-gold/[0.02]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white transition-colors">
                      {t.contact.emailLabel}
                    </h4>
                    <a 
                      href="mailto:deconilmaroc33@gmail.com" 
                      className="text-xs text-gray-600 dark:text-gray-300 hover:text-gold dark:hover:text-gold mt-1 block font-sans font-light transition-colors"
                    >
                      deconilmaroc33@gmail.com
                    </a>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-sans block mt-0.5">
                      {lang === "fr" ? "Support par email" : "الدعم بالبريد الإلكتروني"}
                    </span>
                  </div>
                </motion.div>

                {/* Opening Hours */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 transition-transform group"
                >
                  <div className="p-2.5 bg-white dark:bg-[#121212] border border-gray-100 dark:border-gray-800 rounded text-gold shadow-sm flex-shrink-0 transition-colors duration-300 group-hover:border-gold/50 dark:group-hover:border-gold/50 group-hover:bg-gold/[0.02] dark:group-hover:bg-gold/[0.02]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-dark dark:text-white transition-colors">
                      {t.contact.hoursLabel}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-sans font-light leading-relaxed">
                      {t.contact.hoursVal}
                    </p>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-sans block mt-0.5">
                      {lang === "fr" ? "Fermé le Dimanche" : "مغلق يوم الأحد"}
                    </span>
                  </div>
                </motion.div>

              </div>

              {/* Social Channels List */}
              <div className="border-t border-gray-200/60 dark:border-gray-800 pt-6 flex flex-wrap gap-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/deconil.ma/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-gold dark:hover:text-gold hover:border-gold dark:hover:border-gold rounded shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/212660623981"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-600 dark:hover:border-emerald-400 rounded shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500 fill-current" />
                  <span>WhatsApp Chat</span>
                </motion.a>
              </div>
            </div>

            {/* Custom Interactive Casablanca Coordinates Map Widget */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="h-56 bg-dark border border-gray-800 rounded relative overflow-hidden group shadow-md"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              
              {/* Minimalist Grid Map Layout representing Casablanca Coastline */}
              <svg className="absolute inset-0 w-full h-full text-gray-800 pointer-events-none opacity-40" viewBox="0 0 400 200">
                <path d="M 0 100 Q 100 80 180 120 T 320 60 T 400 90" fill="none" stroke="#C89B3C" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="150" y="70" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="180" cy="95" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
              </svg>

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-sans">Showroom Location</span>
                  <h4 className="text-white text-sm font-display font-bold tracking-tight">Casablanca, Oulfa</h4>
                  <p className="text-[10px] text-gray-400 font-mono">33.5612° N, 7.6625° W</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                    <span className="w-2 h-2 rounded-full bg-gold absolute"></span>
                    <span className="text-xs text-white font-sans font-medium pl-1.5">Showroom Deconil.ma</span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.app.goo.gl/bWovFvgDVU91BL7G7"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] uppercase tracking-wider font-semibold text-gold hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {lang === "fr" ? "Ouvrir Google Maps" : "خرائط جوجل"}
                    <Send className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 p-8 rounded relative"
          >
            
            {sent ? (
              <div className="py-16 text-center space-y-4 animate-scale-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-2">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-dark dark:text-white">{lang === "fr" ? "Message Reçu !" : "توصلنا بالميساج ديالك"}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 max-w-sm mx-auto leading-relaxed">
                  {t.contact.formSuccess}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="send-another-message"
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2 bg-dark dark:bg-white text-white dark:text-dark text-xs font-semibold uppercase tracking-wider rounded hover:bg-gold dark:hover:bg-gold dark:hover:text-white transition-colors cursor-pointer"
                >
                  {lang === "fr" ? "Envoyer un autre message" : "صيفط ميساج آخر"}
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Omar Bensouda"
                      className="w-full px-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-xs text-dark dark:text-white focus:outline-none focus:border-gold dark:focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                      {t.contact.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 06 61 XX XX XX"
                      className="w-full px-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-xs text-dark dark:text-white focus:outline-none focus:border-gold dark:focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: omar@gmail.com"
                      className="w-full px-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-xs text-dark dark:text-white focus:outline-none focus:border-gold dark:focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                      {t.contact.formService} *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-xs text-dark dark:text-white focus:outline-none focus:border-gold dark:focus:border-gold transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="dark:bg-[#1a1a1a]">-- {lang === "fr" ? "Choisir" : "اختار"} --</option>
                        {services.map((svc, i) => (
                          <option key={i} value={svc} className="dark:bg-[#1a1a1a]">{svc}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === "fr" ? "Veuillez décrire votre projet..." : "اكتب لينا تفاصيل الصالون أو الحيط اللي بغيتي تصاوب..."}
                    className="w-full px-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded text-xs text-dark dark:text-white focus:outline-none focus:border-gold dark:focus:border-gold transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  id="submit-contact-form"
                  disabled={sending}
                  className="w-full py-3 bg-dark dark:bg-white text-white dark:text-dark font-display uppercase tracking-wider font-semibold text-xs hover:bg-gold hover:text-white dark:hover:text-white dark:hover:bg-gold transition-all duration-300 rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  {sending ? t.contact.formSending : t.contact.formSubmit}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
