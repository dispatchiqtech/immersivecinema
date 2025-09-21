import { Wand2, Zap, Share2, DollarSign } from "lucide-react";

const CreatorsSection = () => {
  const features = [
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Scene Generation",
      description: "Drop in scripts or storyboards and watch our AI help generate immersive environments and interactive scenes."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Branching Narratives",
      description: "Create stories that adapt and branch based on viewer choices, building truly interactive cinematic experiences."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Cross-Platform Builds",
      description: "One-click deployment to web, mobile, and XR devices. Reach audiences wherever they are, however they want to experience your story."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Built-in Monetization",
      description: "Get paid per view, per branch, or per interactive event. Turn your creative vision into sustainable income."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6 text-gradient">
            For Creators
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Turn words into worlds. ImmersiVerse OS makes immersive cinema as easy as uploading a video, 
            with AI-powered tools that handle the technical complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-8 rounded-2xl group">
              <div className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-space text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;