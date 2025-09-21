import { Button } from "@/components/ui/button";
import portalHero from "@/assets/portal-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 starfield opacity-30"></div>
      
      {/* Hero Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Portal Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-[600px] portal-glow rounded-3xl overflow-hidden">
          <img 
            src={portalHero} 
            alt="Portal gateway to infinite worlds" 
            className="w-full h-full object-cover"
          />
          {/* Portal Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-space text-6xl md:text-8xl font-bold mb-6 text-gradient">
          Step Into Infinite Worlds
        </h1>
        
        <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
          The future of immersive cinema. Create, publish, and experience stories like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg font-semibold">
            Join as Creator
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
            Explore as Viewer
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          Early access beta • No credit card required
        </p>
      </div>
    </section>
  );
};

export default Hero;