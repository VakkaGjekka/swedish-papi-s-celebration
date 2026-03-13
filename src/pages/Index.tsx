import { useEffect } from "react";
import confetti from "canvas-confetti";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuotesSection from "@/components/QuotesSection";
import MessageWall from "@/components/MessageWall";
import DailyWisdom from "@/components/DailyWisdom";
import MusicToggle from "@/components/MusicToggle";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Birthday confetti burst on load
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#2563eb", "#d4a017", "#ffffff", "#fbbf24"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DailyWisdom />
      <MusicToggle />
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <GallerySection />
      <TestimonialsSection />
      <QuotesSection />
      <MessageWall />
      <FooterSection />
    </div>
  );
};

export default Index;
