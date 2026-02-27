import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Plus, LogOut, Pencil, Trash2, ArrowLeft, Save, Upload, X, Eye, Code } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
  image_url: string;
  image_alt: string;
}

const emptyPost = { slug: "", title: "", date: "", tag: "", excerpt: "", content: "", image_url: "", image_alt: "" };

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const adminKey = localStorage.getItem("admin_key");

  useEffect(() => {
    if (localStorage.getItem("admin_authenticated") !== "true") {
      navigate("/admin", { replace: true });
      return;
    }
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase.from("blog_posts").select("*").order("date", { ascending: false });
    setPosts((data as BlogPost[]) || []);
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    localStorage.removeItem("admin_key");
    navigate("/");
  };

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[åä]/g, "a")
      .replace(/ö/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("secret_key", adminKey || "");

      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/admin-auth`,
        {
          method: "POST",
          body: formData,
          headers: {
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
        }
      );
      const data = await res.json();

      if (data.url) {
        setEditing((prev) => prev ? { ...prev, image_url: data.url } : prev);
      } else {
        setError(data.error || "Kunde inte ladda upp bilden.");
      }
    } catch {
      setError("Uppladdning misslyckades.");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setError("");

    const post = {
      ...editing,
      slug: editing.slug || generateSlug(editing.title || ""),
    };

    try {
      const action = editing.id ? "update" : "create";
      const { data, error: fnError } = await supabase.functions.invoke("admin-auth", {
        body: { action, secret_key: adminKey, post },
      });

      if (fnError || data?.error) {
        setError(data?.error || "Kunde inte spara.");
      } else {
        setEditing(null);
        await fetchPosts();
      }
    } catch {
      setError("Något gick fel.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Radera "${post.title}"?`)) return;

    try {
      await supabase.functions.invoke("admin-auth", {
        body: { action: "delete", secret_key: adminKey, post: { id: post.id } },
      });
      await fetchPosts();
    } catch {
      setError("Kunde inte radera.");
    }
  };

  if (editing !== null) {
    return (
      <div className="min-h-screen" style={{ background: "hsl(140 18% 12%)" }}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button onClick={() => setEditing(null)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Tillbaka
          </button>
          <h1 className="text-2xl font-bold font-serif mb-6">
            {editing.id ? "Redigera inlägg" : "Nytt inlägg"}
          </h1>

          <div className="space-y-5 bg-card border border-border rounded-xl p-6">
            <div className="space-y-2">
              <Label>Titel</Label>
              <Input value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Datum</Label>
                <Input type="date" value={editing.date || ""} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Kategori</Label>
                <Input value={editing.tag || ""} onChange={(e) => setEditing({ ...editing, tag: e.target.value })} placeholder="SEO, Prestanda..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input value={editing.slug || ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder="auto-genereras från titeln" />
            </div>
            <div className="space-y-2">
              <Label>Utdrag</Label>
              <Textarea value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} rows={2} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Innehåll (Markdown)</Label>
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {previewMode ? <><Code size={14} /> Redigera</> : <><Eye size={14} /> Förhandsvisning</>}
                </button>
              </div>
              {previewMode ? (
                <div className="min-h-[400px] rounded-md border border-input bg-background px-4 py-3 prose prose-invert prose-sm max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground">
                  <ReactMarkdown>{editing.content || "*Inget innehåll ännu...*"}</ReactMarkdown>
                </div>
              ) : (
                <Textarea value={editing.content || ""} onChange={(e) => setEditing({ ...editing, content: e.target.value })} rows={16} className="font-mono text-sm" />
              )}
            </div>

            {/* Image upload */}
            <div className="space-y-2">
              <Label>Bild</Label>
              {editing.image_url ? (
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <img src={editing.image_url} alt={editing.image_alt || "Förhandsvisning"} className="w-full h-48 object-cover" />
                  <button
                    onClick={() => setEditing({ ...editing, image_url: "" })}
                    className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background text-foreground"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload size={24} className="text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    {uploading ? "Laddar upp..." : "Klicka för att ladda upp bild"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                </label>
              )}
              <Input
                value={editing.image_url || ""}
                onChange={(e) => setEditing({ ...editing, image_url: e.target.value })}
                placeholder="Eller klistra in bild-URL..."
                className="mt-2"
              />
            </div>

            {/* Image alt text */}
            <div className="space-y-2">
              <Label>Bildtext / Alt-text</Label>
              <Input
                value={editing.image_alt || ""}
                onChange={(e) => setEditing({ ...editing, image_alt: e.target.value })}
                placeholder="Beskriv bilden kort (för SEO och tillgänglighet)"
              />
            </div>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <Button onClick={handleSave} disabled={saving || !editing.title || !editing.date} className="w-full">
              <Save size={16} /> {saving ? "Sparar..." : "Publicera"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "hsl(140 18% 12%)" }}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold font-serif">Blogg-admin</h1>
          <div className="flex gap-3">
            <Button onClick={() => setEditing({ ...emptyPost })} size="sm">
              <Plus size={16} /> Nytt inlägg
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut size={16} /> Logga ut
            </Button>
          </div>
        </div>

        {error && <p className="text-destructive text-sm mb-4">{error}</p>}

        {loading ? (
          <p className="text-muted-foreground">Laddar...</p>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titel</TableHead>
                  <TableHead>Datum</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead className="text-right">Åtgärder</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.date}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{post.tag}</span>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="icon" variant="ghost" onClick={() => setEditing(post)}>
                        <Pencil size={14} />
                      </Button>
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(post)}>
                        <Trash2 size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {posts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                      Inga inlägg ännu.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
