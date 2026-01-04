import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-coffee-highlands.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-indigenous opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">
              ASEAN SOAR Together 2025 Awardee
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-bold leading-tight mb-6 animate-fade-in-up">
            Brewing Culture,
            <br />
            <span className="text-gradient-gold">Empowering Communities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-delayed font-body">
            A social enterprise specialty coffee producer from Bukidnon, Philippines — 
            empowering Manobo farmers through sustainable, ethically-sourced coffee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">Shop Coffee</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Discover</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
