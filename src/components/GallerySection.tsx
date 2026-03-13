import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import dino1 from "@/assets/dino-1.jpg";
import dino2 from "@/assets/dino-2.jpg";
import dino3 from "@/assets/dino-3.jpg";
import dino4 from "@/assets/dino-4.jpg";
import dino5 from "@/assets/dino-5.jpg";

const photos = [
  { src: dino1, caption: "Certified Swedish Papi Energy ✨" },
  { src: dino2, caption: "Hall of Fame Moment 🏆" },
  { src: dino3, caption: "Too Iconic for One Photo 👑" },
  { src: dino4, caption: "Legendary Vibes Only 🔥" },
  { src: dino5, caption: "The Man, The Myth, The Papi 🎉" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="hall-of-fame" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">🏆 Greatest Hits</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black mt-2 text-foreground">
            Hall of <span className="text-royal">Fame</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden hover-lift ${
                i === 0 ? "md:row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display font-bold text-primary-foreground text-sm sm:text-base">{photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].caption}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="font-display font-bold text-primary-foreground text-center">{photos[selected].caption}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover-lift"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
