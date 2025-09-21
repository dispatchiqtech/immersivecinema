import { Eye, Smartphone, Users, Play } from "lucide-react";

const ViewersSection = () => {
  const features = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Interactive Episodes",
      description: "Watch stories unfold or step inside and influence the narrative. Choose your level of engagement with every piece of content."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Device Continuity",
      description: "Start watching on your phone, continue in VR, or share moments on your TV. Your story follows you across all devices."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Co-Watch Events",
      description: "Join friends inside stories for shared experiences. Watch together, explore together, and create memories in immersive worlds."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Seamless Transitions",
      description: "Switch between traditional viewing and immersive exploration instantly. The story adapts to how you want to experience it."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-6xl font-bold mb-6 text-gradient">
            For Viewers
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A new way to experience stories. Step through the portal into narratives where you're not just watching, 
            but living the adventure alongside other explorers.
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

export default ViewersSection;