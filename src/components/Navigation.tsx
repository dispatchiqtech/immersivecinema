import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/immersiVerse.png";

const Navigation = () => {
  const scrollToBeta = () => {
    const betaSection = document.getElementById('join-beta');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Tagline */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg flex items-center justify-center">
              <img src={logo} alt="ImmersiVerse OS" className="object-contain" />
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-xs font-medium">
              Scripts → Universes
            </Badge>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#examples" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Examples
            </a>
            <a href="#for-creators" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              For Creators
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#beta" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Beta
            </a>
          </div>

          {/* Right: Apply Button + First 100 Badge */}
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-3 py-1 text-xs font-medium">
              First 100
            </Badge>
            <Button 
              variant="default" 
              size="sm"
              onClick={scrollToBeta}
              className="font-medium"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
