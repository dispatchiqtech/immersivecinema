import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import portalHero from "@/assets/portal-hero.jpg";

const Hero = () => {
  const scrollToBeta = () => {
    const betaSection = document.getElementById('join-beta');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      {/* Logo - Top Left */}
     
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-space text-6xl md:text-8xl font-bold mb-6 text-gradient drop-shadow-2xl">
          Drop a script. Enter a universe.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
          ImmersiVerse OS turns text into living, playable worlds. Type a scene. AI builds the set, actors, camera, and choices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="default" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold font-space bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-blue-500/50 border-0 transform hover:scale-105 transition-all duration-300"
            onClick={scrollToBeta}
          >
            Join as Creator
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold font-space bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-blue-500/50 border-0 transform hover:scale-105 transition-all duration-300"
            onClick={scrollToBeta}
          >
            Explore as Viewer
          </Button>
          
          {/* Badge positioned to the right of CTAs
          <Badge variant="secondary" className="ml-4 bg-cyan-100 text-cyan-700 border-cyan-200 px-4 py-2 text-sm font-medium shadow-lg">
            First 100 Creators • Founders Perks
          </Badge> */}
        </div>
        
        {/* Micro-proof row
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <Badge variant="outline" className="bg-gray-100/90 text-gray-700 border-gray-200 px-3 py-1 shadow-md backdrop-blur-sm">
            Drop-a-Script™
          </Badge>
          <Badge variant="outline" className="bg-gray-100/90 text-gray-700 border-gray-200 px-3 py-1 shadow-md backdrop-blur-sm">
            Director Packs
          </Badge>
          <Badge variant="outline" className="bg-gray-100/90 text-gray-700 border-gray-200 px-3 py-1 shadow-md backdrop-blur-sm">
            Web/XR Player
          </Badge>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;