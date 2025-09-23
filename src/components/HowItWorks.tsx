import { Button } from "@/components/ui/button";
import { FileText, Palette, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <FileText className="h-8 w-8" />,
      title: "Drop a Script",
      description: "Type or upload any idea. A single line is enough."
    },
    {
      number: "2",
      icon: <Palette className="h-8 w-8" />,
      title: "Pick a Director Pack",
      description: "Choose the style—sci-fi, thriller, drama, or your own mix."
    },
    {
      number: "3",
      icon: <Rocket className="h-8 w-8" />,
      title: "Publish Your Universe",
      description: "AI builds the set, dialogue, and camera. Watch it as a film or explore it interactively."
    }
  ];

  const scrollToBeta = () => {
    const betaSection = document.getElementById('join-beta');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6 text-gradient">
            How It Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-background rounded-full flex items-center justify-center border-2 border-primary/20">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </div>
              </div>
              <h3 className="font-space text-2xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold font-space"
            onClick={scrollToBeta}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
