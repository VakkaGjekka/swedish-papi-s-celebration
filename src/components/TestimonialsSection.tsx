import { motion } from "framer-motion";

const testimonials = [
  {
    name: "A Loyal Friend",
    initials: "LF",
    text: "Dino is the only person who can walk into a room and instantly upgrade the vibe. It's a superpower. 🔥",
  },
  {
    name: "The Squad",
    initials: "TS",
    text: "Swedish Papi isn't just a nickname — it's a lifestyle. And Dino lives it every single day. 👑",
  },
  {
    name: "Everyone Ever",
    initials: "EE",
    text: "You haven't truly partied until you've partied with Dino. Certified legend. 🎉",
  },
  {
    name: "His Barber",
    initials: "HB",
    text: "I've done a lot of haircuts, but only one customer makes the whole shop laugh. That's Dino. 💈",
  },
  {
    name: "Barcelona",
    initials: "BCN",
    text: "We've hosted millions of tourists. But only one Swedish Papi. The city misses him already. 🇪🇸",
  },
  {
    name: "The Internet",
    initials: "TI",
    text: "If charisma had a face, it would be Dino's face. Simple as that. ✨",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">💬 The People Have Spoken</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 text-foreground">
            Fan <span className="text-royal">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full royal-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.initials}
                </div>
                <span className="font-display font-semibold text-foreground">{t.name}</span>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
