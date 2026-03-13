import { motion } from "framer-motion";

const quotes = [
  { text: "Life is too short to not be legendary.", topic: "🔥 Life" },
  { text: "Real ones don't need an introduction — the energy speaks first.", topic: "👑 Confidence" },
  { text: "Good friends, good food, good times. That's the whole recipe.", topic: "❤️ Friendship" },
  { text: "Why fit in when you were born to be Swedish Papi?", topic: "✨ Humor" },
  { text: "Be the kind of person that makes other people want to up their game.", topic: "💪 Motivation" },
  { text: "Every day is a good day when the vibes are right.", topic: "🎉 Living" },
];

const QuotesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">📜 Words of Wisdom</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 text-foreground">
            Dino's Favorite <span className="text-royal">Quotes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift relative"
            >
              <span className="text-6xl absolute top-2 left-4 text-royal/10 font-display font-black">"</span>
              <p className="text-foreground font-body text-lg leading-relaxed mt-4 mb-4 relative z-10">
                {q.text}
              </p>
              <span className="text-sm font-display font-semibold text-gold-dark">{q.topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
