import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminLogin = () => {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if already authenticated
  if (localStorage.getItem("admin_authenticated") === "true") {
    navigate("/admin/dashboard", { replace: true });
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("admin-auth", {
        body: { action: "verify", secret_key: key },
      });

      if (fnError || data?.error) {
        setError("Fel nyckel. Försök igen.");
      } else {
        localStorage.setItem("admin_authenticated", "true");
        localStorage.setItem("admin_key", key);
        navigate("/admin/dashboard", { replace: true });
      }
    } catch {
      setError("Något gick fel. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "hsl(140 18% 12%)" }}>
      <div className="w-full max-w-sm">
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="text-primary" size={24} />
            </div>
          </div>
          <h1 className="text-xl font-bold font-serif text-center mb-2">Admin</h1>
          <p className="text-muted-foreground text-center text-sm mb-6">Ange din hemliga nyckel</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="secret-key">Hemlig nyckel</Label>
              <Input
                id="secret-key"
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Ange nyckel..."
                required
              />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Verifierar..." : "Logga in"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
