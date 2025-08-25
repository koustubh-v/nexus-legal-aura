import { NeonButton } from "@/components/ui/neon-button";
import { Upload, MessageCircle, Sparkles } from "lucide-react";
import legalHologram from "@/assets/legal-hologram.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background hologram image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={legalHologram} 
          alt="Holographic legal documents"
          className="w-full h-full object-cover opacity-20 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating badges */}
        <div className="flex justify-center mb-8">
          <div className="glass-card px-4 py-2 inline-flex items-center space-x-2 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Powered by Advanced AI</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-hologram-flicker">
            AI-Powered
          </span>
          <br />
          <span className="text-foreground">
            Legal Document
          </span>
          <br />
          <span className="bg-gradient-neon bg-clip-text text-transparent">
            Assistant
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          <span className="text-accent">Upload.</span>{" "}
          <span className="text-primary">Analyze.</span>{" "}
          <span className="text-secondary">Ask.</span>{" "}
          Get Legal Clarity Instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <NeonButton variant="hero" size="xl" className="group">
            <Upload className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Upload Document
          </NeonButton>
          <NeonButton variant="glass" size="xl" className="group">
            <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Ask AI
          </NeonButton>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-primary mb-2">256-bit</div>
            <div className="text-muted-foreground">Encryption</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Accuracy</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
            <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};