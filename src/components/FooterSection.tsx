import { Crown, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 text-center royal-gradient">
      <div className="container mx-auto max-w-2xl">
        <span className="text-4xl block mb-4 animate-float">👑</span>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-primary-foreground mb-2">
          Happy Birthday, Swedish Papi! 🎉
        </h3>
        <p className="text-primary-foreground/80 font-body mb-6">
          Made with{" "}
          <Heart className="inline h-4 w-4 text-gold fill-gold" />{" "}
          for the one and only Dino
        </p>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm font-body">
          <Crown className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Swedish Papi Fan Club. All vibes reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
