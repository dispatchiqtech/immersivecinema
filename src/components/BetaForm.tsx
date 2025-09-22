import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const BetaForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    role: "creator" as "creator" | "viewer"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('beta_signups')
        .insert([
          {
            email: formData.email,
            role: formData.role
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-6 relative">
        <div className="max-w-md mx-auto text-center">
          <Card className="feature-card p-8">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="font-space text-2xl font-semibold mb-4">Welcome to the Future</h3>
            <p className="text-muted mb-6">
              You're now on the early access list for ImmersiVerse OS. We'll be in touch soon with beta access.
            </p>
            <p className="text-sm text-muted-foreground">
              Check your email for confirmation and next steps.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="join-beta" className="py-24 px-6 relative">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Join the Beta
          </h2>
          <p className="text-lg text-muted">
            Be among the first to shape the future of immersive storytelling.
          </p>
        </div>
        
        <Card className="feature-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border"
              />
            </div>
            
            <div className="space-y-3">
              <Label className="text-foreground">I'm interested as a:</Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="creator"
                    checked={formData.role === "creator"}
                    onChange={(e) => {
                      const value = e.target.value as "creator" | "viewer";
                      setFormData({ ...formData, role: value });
                    }}
                    className="text-primary"
                  />
                  <span className="text-foreground">Creator (filmmaker, storyteller, artist)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="viewer"
                    checked={formData.role === "viewer"}
                    onChange={(e) => {
                      const value = e.target.value as "creator" | "viewer";
                      setFormData({ ...formData, role: value });
                    }}
                    className="text-primary"
                  />
                  <span className="text-foreground">Viewer (story explorer, XR enthusiast)</span>
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full text-lg py-6" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining Beta...
                </>
              ) : (
                'Step Into the Future'
              )}
            </Button>
            
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-950 p-3 rounded-md">
                {error}
              </div>
            )}
            
            <p className="text-xs text-muted-foreground text-center">
              No spam, just updates on beta access and immersive storytelling.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BetaForm;