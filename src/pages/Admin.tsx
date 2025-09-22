import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Users, Mail, Calendar, User } from "lucide-react";
import { supabase, BetaSignup } from "@/lib/supabase";

const Admin = () => {
  const [signups, setSignups] = useState<BetaSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSignups = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase
        .from('beta_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setSignups(data || []);
    } catch (err) {
      console.error('Error fetching signups:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch signups');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSignups();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRoleBadgeVariant = (role: string) => {
    return role === 'creator' ? 'default' : 'secondary';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading signups...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-space text-3xl font-bold text-gradient">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">Beta signup entries</p>
            </div>
            <Button onClick={fetchSignups} disabled={loading} variant="outline">
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {error && (
          <Card className="p-6 mb-6 border-red-200 bg-red-50 dark:bg-red-950">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <Button 
              onClick={fetchSignups} 
              variant="outline" 
              size="sm" 
              className="mt-4"
            >
              Try Again
            </Button>
          </Card>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold">{signups.length}</p>
                <p className="text-muted-foreground">Total Signups</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-2xl font-bold">
                  {signups.filter(s => s.role === 'creator').length}
                </p>
                <p className="text-muted-foreground">Creators</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="text-2xl font-bold">
                  {signups.filter(s => s.role === 'viewer').length}
                </p>
                <p className="text-muted-foreground">Viewers</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Signups Table */}
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="font-space text-xl font-semibold">Recent Signups</h2>
          </div>
          
          {signups.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No signups yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Email</th>
                    <th className="text-left p-4 font-medium">Role</th>
                    <th className="text-left p-4 font-medium">Signed Up</th>
                    <th className="text-left p-4 font-medium">ID</th>
                  </tr>
                </thead>
                <tbody>
                  {signups.map((signup) => (
                    <tr key={signup.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">{signup.email}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge variant={getRoleBadgeVariant(signup.role)}>
                          {signup.role}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(signup.created_at || '')}
                        </div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        #{signup.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Admin;
