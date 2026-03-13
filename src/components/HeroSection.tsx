import { motion } from "framer-motion";
import { Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dino-3.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating emojis */}
      {["🎉", "👑", "🔥", "⭐", "🎂", "🥳"].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl sm:text-4xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto mb-8 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold shadow-2xl"
        >
          <img src={heroImg} alt="Dino - Swedish Papi" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="inline-block text-sm sm:text-base font-semibold tracking-widest uppercase text-gold-dark mb-4">
            👑 The Legend Has Arrived 👑
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-display font-black tracking-tight text-foreground mb-4"
        >
          Happy Birthday{" "}
          <span className="text-royal">Swedish Papi</span>{" "}
          <span className="inline-block animate-sparkle">🎉</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          The legend. The vibe. The one and only <strong className="text-foreground">Dino</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="royal-gradient text-primary-foreground font-display font-bold text-lg px-8 py-6 rounded-full hover-lift"
            onClick={() => document.getElementById("hall-of-fame")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Crown className="mr-2 h-5 w-5" />
            Enter the Hall of Fame
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold-dark font-display font-bold text-lg px-8 py-6 rounded-full hover-lift hover:bg-accent/20"
            onClick={() => document.getElementById("message-wall")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Leave a Message for Dino
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
