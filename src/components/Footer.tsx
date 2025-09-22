const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="font-space text-2xl font-bold mb-2 text-gradient">
            ImmersiVerse OS
          </h3>
          <p className="text-muted-foreground mb-6">
            Step Into Infinite Worlds
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="Discord"
            >
              Discord
            </a>
            <a 
              href="#" 
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="/admin" 
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="Admin Dashboard"
            >
              Admin
            </a>
          </div>
          
          <div className="pt-6 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              © 2024 ImmersiVerse OS. The future of immersive storytelling.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;