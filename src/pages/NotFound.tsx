import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="font-space text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted mb-8">This world doesn't exist yet</p>
        <p className="text-muted-foreground mb-8">
          The portal you're looking for hasn't been created. Let's get you back to infinite worlds.
        </p>
        <Button asChild variant="hero">
          <a href="/">Return to ImmersiVerse</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
