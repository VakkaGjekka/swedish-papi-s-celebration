import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2022/03/15/audio_8cb749d484.mp3"; // Happy birthday style track

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_URL);
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggle}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gold-gradient shadow-xl flex items-center justify-center hover-lift"
        title={playing ? "Mute music" : "Play birthday music 🎵"}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div key="on" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <Music className="h-6 w-6 text-accent-foreground animate-pulse" />
            </motion.div>
          ) : (
            <motion.div key="off" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <VolumeX className="h-6 w-6 text-accent-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!playing && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-8 right-22 z-40 glass-card px-3 py-1.5 text-sm font-display font-semibold text-foreground"
        >
          🎵 Play birthday music!
        </motion.div>
      )}
    </>
  );
};

export default MusicToggle;
