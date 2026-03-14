import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "5uo0oebWVQo"; // will.i.am - It's My Birthday

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a detached div for YouTube player (outside React DOM)
    const playerDiv = document.createElement("div");
    playerDiv.style.display = "none";
    document.body.appendChild(playerDiv);

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(playerDiv, {
        height: "0",
        width: "0",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
        },
        events: {
          onReady: () => {
            console.log("YouTube Player Ready");
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playerRef.current?.playVideo();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      playerRef.current?.destroy();
      playerDiv.remove();
    };
  }, []);

  const toggle = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false);
    } else {
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setPlaying(true);
    }
  };

  return (
    <>
      <div id="yt-player" style={{ display: "none" }} />

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggle}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gold-gradient shadow-xl flex items-center justify-center hover-lift"
        title={playing ? "Pause music" : "Play: will.i.am - It's My Birthday 🎵"}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div
              key="on"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Music className="h-6 w-6 text-accent-foreground animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="off"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
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
          className="fixed bottom-8 right-24 z-40 glass-card px-3 py-1.5 text-sm font-display font-semibold text-foreground"
        >
          🎵 It's My Birthday - will.i.am
        </motion.div>
      )}
    </>
  );
};

export default MusicToggle;