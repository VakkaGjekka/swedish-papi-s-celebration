import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
// We'll use an embedded YouTube audio approach via an iframe for the actual song
const YOUTUBE_ID = "5uo0oebWVQo"; // will.i.am - It's My Birthday

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <>
      {/* Hidden YouTube iframe for audio */}
      {playing && (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=0`}
          allow="autoplay"
          className="hidden"
          title="Birthday Music"
        />
      )}

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

      {/* Label tooltip on first load */}
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
