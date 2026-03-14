import { motion } from "framer-motion";
import { Star, Heart, Zap } from "lucide-react";
import dinoChildhood from "@/assets/dino-childhood.jpg";
import dinoSwedishPapi from "@/assets/dino-swedish-papi.jpg";

const timeline = [
  {
    year: "The Early Days",
    emoji: "🌟",
    text: "A young legend in the making. Even back then, Dino had that unmistakable charisma that made everyone gravitate toward him.",
    image: dinoChildhood,
  },
  {
    year: "Rise of Swedish Papi",
    emoji: "🇸🇪",
    text: "The nickname was born. Part Swedish swagger, part pure Dino energy — 'Swedish Papi' became the brand everyone recognized.",
    image: dinoSwedishPapi,
  },
  {
    year: "Global Icon Status",
    emoji: "👑",
    text: "Today, Dino stands as a certified legend among friends. The life of every gathering, the king of good vibes, the one and only Swedish Papi.",
  },
];

const traits = [
  { icon: Star, label: "Charismatic", desc: "Walks into a room and owns it" },
  { icon: Heart, label: "Loyal Friend", desc: "Always there when it matters" },
  { icon: Zap, label: "Pure Energy", desc: "The ultimate vibe booster" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">📖 The Legend</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 text-foreground">
            Who Is <span className="text-royal">Swedish Papi</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Every generation gets one. That person who makes everything more fun, more memorable, more legendary. 
            For us, that person is <strong className="text-foreground">Dino</strong>. 🔥
          </p>
        </motion.div>

        {/* Traits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <trait.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">{trait.label}</h3>
              <p className="text-muted-foreground text-sm mt-1">{trait.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`flex flex-col sm:flex-row items-center gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 glass-card p-6 hover-lift">
                  <span className="text-2xl mb-2 block">{item.emoji}</span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{item.year}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
                <div className="w-4 h-4 rounded-full gold-gradient border-4 border-background shadow-md hidden sm:block" />
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
