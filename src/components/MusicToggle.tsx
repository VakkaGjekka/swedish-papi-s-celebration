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
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const playerHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = document.createElement("div");
    host.setAttribute("aria-hidden", "true");
    host.style.position = "fixed";
    host.style.left = "-9999px";
    host.style.bottom = "0";
    host.style.width = "1px";
    host.style.height = "1px";
    host.style.opacity = "0";
    host.style.pointerEvents = "none";
    document.body.appendChild(host);
    playerHostRef.current = host;

    const initPlayer = () => {
      if (!window.YT?.Player || !playerHostRef.current || playerRef.current) return;

      playerRef.current = new window.YT.Player(playerHostRef.current, {
        height: "1",
        width: "1",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            event.target.setVolume?.(100);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
            setPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }

      const previousReadyHandler = window.onYouTubeIframeAPIReady;
      const nextReadyHandler = () => {
        previousReadyHandler?.();
        initPlayer();
      };

      window.onYouTubeIframeAPIReady = nextReadyHandler;

      return () => {
        if (window.onYouTubeIframeAPIReady === nextReadyHandler) {
          window.onYouTubeIframeAPIReady = previousReadyHandler ?? (() => {});
        }
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
      playerHostRef.current?.remove();
      playerHostRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!playerRef.current || !isReady) return;

    if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false);
    } else {
      playerRef.current.unMute?.();
      playerRef.current.setVolume?.(100);
      playerRef.current.playVideo();
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
        disabled={!isReady}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full gold-gradient shadow-xl flex items-center justify-center hover-lift disabled:opacity-60 disabled:cursor-not-allowed"
        title={
          !isReady
            ? "Loading song..."
            : playing
              ? "Pause music"
              : "Play: will.i.am - It's My Birthday 🎵"
        }
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
          {isReady ? "🎵 It's My Birthday - will.i.am" : "🎵 Loading song..."}
        </motion.div>
      )}
    </>
  );
};

export default MusicToggle;
