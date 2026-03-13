import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const wisdoms = [
  { flag: "🇦🇱", lang: "Albanian", text: "Me ta merzit krejt kja jet" },
  { flag: "🇸🇪", lang: "Swedish", text: "Lev stort, skratta mycket, och var alltid lite Swedish Papi." },
  { flag: "🇧🇦", lang: "Bosnian", text: "Život je bolji kad imaš dobre prijatelje i dobru priču." },
  { flag: "🇬🇧", lang: "English", text: "Stay legendary. Stay Swedish Papi." },
  { flag: "🇦🇱", lang: "Albanian", text: "Jeta është e shkurtër — bëje çdo ditë legjendare me papin" },
  { flag: "🇸🇪", lang: "Swedish", text: "En riktig kung behöver ingen krona — energin räcker." },
  { flag: "🇧🇦", lang: "Bosnian", text: "Pravi prijatelji su zlata vrijedni — čuvaj ih." },
  { flag: "🇬🇧", lang: "English", text: "The vibe is not something you create — it's something you are." },
];

const DailyWisdom = () => {
  const [show, setShow] = useState(false);
  const [wisdom, setWisdom] = useState(wisdoms[0]);

  useEffect(() => {
    const shown = sessionStorage.getItem("wisdom-shown");
    if (!shown) {
      const random = wisdoms[Math.floor(Math.random() * wisdoms.length)];
      setWisdom(random);
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem("wisdom-shown", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
            className="glass-card p-8 max-w-md w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="font-display font-black text-xl text-foreground mb-1">
              Daily Wisdom from Swedish Papi 👑
            </h3>
            <span className="text-sm text-muted-foreground">{wisdom.flag} {wisdom.lang}</span>
            <p className="text-foreground text-lg mt-4 mb-6 italic font-body leading-relaxed">
              "{wisdom.text}"
            </p>
            <Button onClick={close} className="royal-gradient text-primary-foreground font-display font-bold rounded-full px-8">
              Stay Legendary ✨
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DailyWisdom;
