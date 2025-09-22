import { Button } from "@/components/ui/button";
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
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg flex items-center justify-center">
            <img src={logo} alt="ImmersiVerse OS" className=" object-contain" />
            </div>
          </div>

         

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToBeta}
              className="hidden sm:inline-flex"
            >
              Join as Creator
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={scrollToBeta}
            >
              Explore as Viewer
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
