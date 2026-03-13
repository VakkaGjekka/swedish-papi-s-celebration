import { motion } from "framer-motion";

const stats = [
  { label: "Friends Made", value: "∞", emoji: "❤️" },
  { label: "Legendary Moments", value: "999+", emoji: "🏆" },
  { label: "Vibes Given", value: "100%", emoji: "🔥" },
  { label: "Swedish Papi Level", value: "MAX", emoji: "👑" },
];

const StatsBar = () => {
  return (
    <section className="py-12 royal-gradient">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-3xl block mb-1">{s.emoji}</span>
              <span className="font-display font-black text-3xl sm:text-4xl text-primary-foreground">{s.value}</span>
              <span className="block text-sm text-primary-foreground/70 font-body mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
