import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Plus, LogOut, Pencil, Trash2, ArrowLeft, Save, Upload, X, Eye, Code, Sparkles, Users, FileText, RefreshCw, Gauge, MapPin, Search, TrendingUp, TrendingDown, Minus, AlertTriangle } from "lucide-react";
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

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

const emptyPost = { slug: "", title: "", date: "", tag: "", excerpt: "", content: "", image_url: "", image_alt: "" };

const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

function getSessionToken(): string | null {
  return sessionStorage.getItem("admin_session_token");
}

interface CityRanking {
  city: string;
  route: string;
  keyword: string;
  rank: number | null;
  prev7: number | null;
  prev30: number | null;
  leads: number;
  color: string;
}

const CITIES: CityRanking[] = [
  { city: "Västerås", route: "/webbutveckling-vasteras", keyword: "Webbutveckling Västerås", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Köping", route: "/seo-koping", keyword: "SEO Köping", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Sala", route: "/hemsidor-sala", keyword: "Hemsidor Sala", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Enköping", route: "/webbutveckling-enkoping", keyword: "Webbutveckling Enköping", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Eskilstuna", route: "/webbutveckling-eskilstuna", keyword: "Webbutveckling Eskilstuna", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Arboga", route: "/webbutveckling-arboga", keyword: "Webbutveckling Arboga", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
  { city: "Fagersta", route: "/webbutveckling-fagersta", keyword: "Webbutveckling Fagersta", rank: null, prev7: null, prev30: null, leads: 0, color: "#888" },
];

interface KeywordSuggestion {
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  city: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"blog" | "leads" | "speed" | "seo">("blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [leads, setLeads] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [aiTopic, setAiTopic] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [bulkImageProgress, setBulkImageProgress] = useState<{ running: boolean; current: number; total: number; currentTitle: string; errors: string[] }>({ running: false, current: 0, total: 0, currentTitle: "", errors: [] });
  const [bulkPostProgress, setBulkPostProgress] = useState<{ running: boolean; current: number; total: number; currentTitle: string; errors: string[] }>({ running: false, current: 0, total: 0, currentTitle: "", errors: [] });
  const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);
  const [pageSpeed, setPageSpeed] = useState<{ performance: number | null; seo: number | null; accessibility: number | null; bestPractices: number | null; loading: boolean }>({ performance: null, seo: null, accessibility: null, bestPractices: null, loading: false });
  const [speedUrl, setSpeedUrl] = useState("https://lrhkonsult.se");
  const [cityRankings, setCityRankings] = useState<CityRanking[]>(CITIES);
  const [keywordSuggestions, setKeywordSuggestions] = useState<KeywordSuggestion[]>([]);
  const [seoSubTab, setSeoSubTab] = useState<"rankings" | "keywords">("rankings");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doLogout = useCallback(async () => {
    const token = getSessionToken();
    if (token) {
      await supabase.functions.invoke("admin-auth", {
        body: { action: "logout", session_token: token },
      });
    }
    sessionStorage.removeItem("admin_session_token");
    navigate("/admin", { replace: true });
  }, [navigate]);

  // Session timeout – 30 min inactivity
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      doLogout();
    }, SESSION_TIMEOUT_MS);
  }, [doLogout]);

  useEffect(() => {
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    const handler = () => resetTimeout();
    events.forEach(e => window.addEventListener(e, handler));
    resetTimeout();
    return () => {
      events.forEach(e => window.removeEventListener(e, handler));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [resetTimeout]);

  useEffect(() => {
    const token = getSessionToken();
    if (!token) { navigate("/admin", { replace: true }); return; }
    supabase.functions.invoke("admin-auth", {
      body: { action: "validate_session", session_token: token },
    }).then(({ data, error: fnError }) => {
      if (fnError || data?.error) {
        sessionStorage.removeItem("admin_session_token");
        navigate("/admin", { replace: true });
      } else {
        fetchPosts();
        fetchLeads();
      }
    });
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const { data } = await supabase.from("blog_posts").select("*").order("date", { ascending: false });
    setPosts((data as BlogPost[]) || []);
    setLoading(false);
  };

  const fetchLeads = async () => {
    const token = getSessionToken();
    if (!token) return;
    const { data, error: fnError } = await supabase.functions.invoke("admin-auth", {
      body: { action: "get_leads", session_token: token },
    });
    if (!fnError && data?.leads) {
      setLeads(data.leads);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    const token = getSessionToken();
    if (!token) return;
    await supabase.functions.invoke("admin-auth", {
      body: { action: "update_lead_status", session_token: token, lead_id: leadId, status: newStatus },
    });
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    if (selectedLead?.id === leadId) setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
  };

  const handleLogout = () => doLogout();

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[åä]/g, "a").replace(/ö/g, "o").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("session_token", getSessionToken() || "");
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/admin-auth`, {
        method: "POST", body: formData,
        headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
      });
      const data = await res.json();
      if (data.url) setEditing(prev => prev ? { ...prev, image_url: data.url } : prev);
      else setError(data.error || "Kunde inte ladda upp bilden.");
    } catch { setError("Uppladdning misslyckades."); }
    finally { setUploading(false); }
  };

  const handleAiGenerate = async () => {
    if (!aiTopic.trim()) return;
    setGenerating(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("generate-blog-post", {
        body: { session_token: getSessionToken(), topic: aiTopic },
      });
      if (fnError || data?.error) setError(data?.error || "AI-generering misslyckades.");
      else if (data?.post) {
        setEditing(prev => prev ? {
          ...prev, title: data.post.title, excerpt: data.post.excerpt, tag: data.post.tag,
          content: data.post.content, image_url: data.post.image_url || prev.image_url || "",
          image_alt: data.post.image_alt || prev.image_alt || "",
          date: prev.date || new Date().toISOString().split("T")[0],
        } : prev);
        setAiTopic("");
      }
    } catch { setError("Något gick fel med AI-genereringen."); }
    finally { setGenerating(false); }
  };

  const handleAiImage = async () => {
    setGeneratingImage(true);
    setError("");
    try {
      const prompt = editing?.title || aiTopic || "Blog header for Swedish web agency";
      const { data, error: fnError } = await supabase.functions.invoke("generate-blog-post", {
        body: { session_token: getSessionToken(), action: "generate_image", image_prompt: prompt },
      });
      if (fnError || data?.error) setError(data?.error || "Kunde inte generera bild.");
      else if (data?.image_url) setEditing(prev => prev ? { ...prev, image_url: data.image_url, image_alt: prev.title || "" } : prev);
    } catch { setError("Bildgenerering misslyckades."); }
    finally { setGeneratingImage(false); }
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setError("");
    const post = { ...editing, slug: editing.slug || generateSlug(editing.title || "") };
    try {
      const action = editing.id ? "update" : "create";
      const { data, error: fnError } = await supabase.functions.invoke("admin-auth", {
        body: { action, session_token: getSessionToken(), post },
      });
      if (fnError || data?.error) setError(data?.error || "Kunde inte spara.");
      else { setEditing(null); await fetchPosts(); }
    } catch { setError("Något gick fel."); }
    finally { setSaving(false); }
  };

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Radera "${post.title}"?`)) return;
    try {
      await supabase.functions.invoke("admin-auth", {
        body: { action: "delete", session_token: getSessionToken(), post: { id: post.id } },
      });
      await fetchPosts();
    } catch { setError("Kunde inte radera."); }
  };

  const handleRegenerateSitemap = async () => {
    setError("");
    try {
      const { error: fnError } = await supabase.functions.invoke("generate-sitemap");
      if (fnError) setError("Kunde inte generera sitemap.");
    } catch { setError("Sitemap-generering misslyckades."); }
  };

  const handleBulkGenerateImages = async () => {
    const postsWithoutImages = posts.filter(p => !p.image_url || p.image_url.trim() === "");
    if (postsWithoutImages.length === 0) { setError("Alla inlägg har redan bilder."); return; }
    if (!confirm(`Generera AI-bilder för ${postsWithoutImages.length} inlägg? Detta kan ta några minuter.`)) return;

    setBulkImageProgress({ running: true, current: 0, total: postsWithoutImages.length, currentTitle: "", errors: [] });
    const errors: string[] = [];

    for (let i = 0; i < postsWithoutImages.length; i++) {
      const post = postsWithoutImages[i];
      setBulkImageProgress(prev => ({ ...prev, current: i + 1, currentTitle: post.title }));

      try {
        const { data, error: fnError } = await supabase.functions.invoke("generate-blog-post", {
          body: {
            session_token: getSessionToken(),
            action: "generate_image_for_post",
            slug: post.slug,
            post_title: post.title,
            image_prompt: `Professional photorealistic blog header image for article about: ${post.title}. Swedish web development and SEO theme.`,
          },
        });
        if (fnError || data?.error) {
          errors.push(`${post.title}: ${data?.error || "Misslyckades"}`);
        }
      } catch {
        errors.push(`${post.title}: Nätverksfel`);
      }

      // Small delay to avoid rate limiting
      if (i < postsWithoutImages.length - 1) {
        await new Promise(r => setTimeout(r, 3000));
      }
    }

    setBulkImageProgress(prev => ({ ...prev, running: false, errors }));
    await fetchPosts();
  };

  // Blog post editor view
  if (editing !== null) {
    return (
      <div className="min-h-screen" style={{ background: "hsl(140 18% 12%)" }}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button onClick={() => setEditing(null)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Tillbaka
          </button>
          <h1 className="text-2xl font-bold font-serif mb-6">{editing.id ? "Redigera inlägg" : "Nytt inlägg"}</h1>

          {!editing.id && (
            <div className="mb-5 bg-primary/5 border border-primary/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-primary" />
                <span className="font-semibold text-sm">Generera med AI</span>
              </div>
              <div className="flex gap-2">
                <Input value={aiTopic} onChange={(e) => setAiTopic(e.target.value)} placeholder="Beskriv ämnet..." disabled={generating} onKeyDown={(e) => e.key === "Enter" && handleAiGenerate()} />
                <Button onClick={handleAiGenerate} disabled={generating || !aiTopic.trim()} size="sm" className="shrink-0">
                  <Sparkles size={14} /> {generating ? "Genererar..." : "Generera"}
                </Button>
              </div>
              {generating && <p className="text-xs text-muted-foreground mt-2">AI skriver inlägget. Det kan ta 15-30 sekunder...</p>}
            </div>
          )}

          <div className="space-y-5 bg-card border border-border rounded-xl p-6">
            <div className="space-y-2"><Label>Titel</Label><Input value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Datum</Label><Input type="date" value={editing.date || ""} onChange={(e) => setEditing({ ...editing, date: e.target.value })} /></div>
              <div className="space-y-2"><Label>Kategori</Label><Input value={editing.tag || ""} onChange={(e) => setEditing({ ...editing, tag: e.target.value })} placeholder="SEO, Prestanda..." /></div>
            </div>
            <div className="space-y-2"><Label>Slug</Label><Input value={editing.slug || ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder="auto-genereras" /></div>
            <div className="space-y-2"><Label>Utdrag</Label><Textarea value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} rows={2} /></div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Innehåll (Markdown)</Label>
                <button type="button" onClick={() => setPreviewMode(!previewMode)} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Bild</Label>
                <Button type="button" variant="outline" size="sm" onClick={handleAiImage} disabled={generatingImage} className="gap-1.5 text-xs">
                  <Sparkles size={12} /> {generatingImage ? "Genererar..." : "Generera med AI"}
                </Button>
              </div>
              {generatingImage && <p className="text-xs text-muted-foreground">Skapar bild... ~10 sek</p>}
              {editing.image_url ? (
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <img src={editing.image_url} alt={editing.image_alt || "Förhandsvisning"} className="w-full h-48 object-cover" />
                  <button onClick={() => setEditing({ ...editing, image_url: "" })} className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background text-foreground"><X size={16} /></button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload size={24} className="text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">{uploading ? "Laddar upp..." : "Klicka för att ladda upp bild"}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                </label>
              )}
              <Input value={editing.image_url || ""} onChange={(e) => setEditing({ ...editing, image_url: e.target.value })} placeholder="Eller klistra in bild-URL..." className="mt-2" />
            </div>
            <div className="space-y-2"><Label>Bildtext / Alt-text</Label><Input value={editing.image_alt || ""} onChange={(e) => setEditing({ ...editing, image_alt: e.target.value })} placeholder="Beskriv bilden kort" /></div>

            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button onClick={handleSave} disabled={saving || !editing.title || !editing.date} className="w-full">
              <Save size={16} /> {saving ? "Sparar..." : "Publicera"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Lead detail view
  if (selectedLead) {
    return (
      <div className="min-h-screen" style={{ background: "hsl(140 18% 12%)" }}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button onClick={() => setSelectedLead(null)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft size={16} /> Tillbaka till leads
          </button>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold font-serif">{selectedLead.name}</h2>
            <p className="text-sm text-muted-foreground">{new Date(selectedLead.created_at).toLocaleString("sv-SE")}</p>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium">E-post:</span> <a href={`mailto:${selectedLead.email}`} className="text-primary hover:underline">{selectedLead.email}</a></p>
              {selectedLead.subject && <p className="text-sm"><span className="font-medium">Ämne:</span> {selectedLead.subject}</p>}
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm whitespace-pre-wrap">{selectedLead.message}</p>
            </div>
            <div className="flex gap-2">
              {["new", "contacted", "client"].map(s => (
                <Button key={s} size="sm" variant={selectedLead.status === s ? "default" : "outline"} onClick={() => updateLeadStatus(selectedLead.id, s)}>
                  {s === "new" ? "Ny" : s === "contacted" ? "Kontaktad" : "Kund"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fetchPageSpeed = async () => {
    setPageSpeed(prev => ({ ...prev, loading: true }));
    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(speedUrl)}&category=performance&category=seo&category=accessibility&category=best-practices&strategy=mobile`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      const cats = data?.lighthouseResult?.categories;
      setPageSpeed({
        performance: cats?.performance?.score != null ? Math.round(cats.performance.score * 100) : null,
        seo: cats?.seo?.score != null ? Math.round(cats.seo.score * 100) : null,
        accessibility: cats?.accessibility?.score != null ? Math.round(cats.accessibility.score * 100) : null,
        bestPractices: cats?.["best-practices"]?.score != null ? Math.round(cats["best-practices"].score * 100) : null,
        loading: false,
      });
    } catch {
      setError("Kunde inte hämta PageSpeed-data.");
      setPageSpeed(prev => ({ ...prev, loading: false }));
    }
  };

  const ScoreCircle = ({ score, label }: { score: number | null; label: string }) => {
    const color = score === null ? "text-muted-foreground" : score >= 90 ? "text-green-500" : score >= 50 ? "text-yellow-500" : "text-red-500";
    const bg = score === null ? "border-muted" : score >= 90 ? "border-green-500/30" : score >= 50 ? "border-yellow-500/30" : "border-red-500/30";
    return (
      <div className="flex flex-col items-center gap-2">
        <div className={`w-20 h-20 rounded-full border-4 ${bg} flex items-center justify-center`}>
          <span className={`text-2xl font-bold ${color}`}>{score ?? "–"}</span>
        </div>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(140 18% 12%)" }}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-serif">Admin</h1>
          <div className="flex gap-2">
            <Button onClick={handleRegenerateSitemap} variant="outline" size="sm" title="Generera sitemap">
              <RefreshCw size={14} /> Sitemap
            </Button>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut size={16} /> Logga ut
            </Button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 mb-6 bg-muted/30 rounded-lg p-1 w-fit">
          <button onClick={() => setActiveTab("blog")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "blog" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <FileText size={14} className="inline mr-1.5" />Blogg
          </button>
          <button onClick={() => setActiveTab("leads")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "leads" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <Users size={14} className="inline mr-1.5" />Leads
            {leads.filter(l => l.status === "new").length > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs">{leads.filter(l => l.status === "new").length}</span>
            )}
          </button>
          <button onClick={() => setActiveTab("speed")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "speed" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <Gauge size={14} className="inline mr-1.5" />PageSpeed
          </button>
          <button onClick={() => setActiveTab("seo")} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "seo" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
            <MapPin size={14} className="inline mr-1.5" />SEO Tracker
          </button>
        </div>

        {error && <p className="text-destructive text-sm mb-4">{error}</p>}

        {activeTab === "blog" && (
          <>
            <div className="flex items-center justify-between mb-4 gap-3">
              <div className="flex-1">
                {bulkImageProgress.running && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-primary animate-spin" />
                      <span className="text-sm font-medium">Genererar bild {bulkImageProgress.current}/{bulkImageProgress.total}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{bulkImageProgress.currentTitle}</p>
                    <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                      <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${(bulkImageProgress.current / bulkImageProgress.total) * 100}%` }} />
                    </div>
                  </div>
                )}
                {!bulkImageProgress.running && bulkImageProgress.errors.length > 0 && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <p className="text-xs text-destructive font-medium mb-1">{bulkImageProgress.errors.length} bilder misslyckades:</p>
                    {bulkImageProgress.errors.slice(0, 3).map((e, i) => <p key={i} className="text-xs text-destructive/80 truncate">{e}</p>)}
                  </div>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <Button onClick={handleBulkGenerateImages} variant="outline" size="sm" disabled={bulkImageProgress.running}>
                  <Sparkles size={14} /> {bulkImageProgress.running ? "Genererar..." : `Generera bilder (${posts.filter(p => !p.image_url || p.image_url.trim() === "").length})`}
                </Button>
                <Button onClick={() => setEditing({ ...emptyPost })} size="sm"><Plus size={16} /> Nytt inlägg</Button>
              </div>
            </div>
            {loading ? <p className="text-muted-foreground">Laddar...</p> : (
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
                    {posts.map(post => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell><span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">{post.tag}</span></TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button size="icon" variant="ghost" onClick={() => setEditing(post)}><Pencil size={14} /></Button>
                          <Button size="icon" variant="ghost" onClick={() => handleDelete(post)}><Trash2 size={14} /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {posts.length === 0 && (
                      <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">Inga inlägg ännu.</TableCell></TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </>
        )}

        {activeTab === "leads" && (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Namn</TableHead>
                  <TableHead>E-post</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Datum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map(lead => (
                  <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/30" onClick={() => setSelectedLead(lead)}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${lead.status === "new" ? "bg-primary/10 text-primary" : lead.status === "contacted" ? "bg-yellow-500/10 text-yellow-500" : "bg-green-500/10 text-green-500"}`}>
                        {lead.status === "new" ? "Ny" : lead.status === "contacted" ? "Kontaktad" : "Kund"}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(lead.created_at).toLocaleDateString("sv-SE")}</TableCell>
                  </TableRow>
                ))}
                {leads.length === 0 && (
                  <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">Inga leads ännu.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}

        {activeTab === "speed" && (
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold font-serif mb-4">PageSpeed Insights</h2>
            <div className="flex gap-2 mb-6">
              <Input value={speedUrl} onChange={(e) => setSpeedUrl(e.target.value)} placeholder="https://lrhkonsult.se" />
              <Button onClick={fetchPageSpeed} disabled={pageSpeed.loading} size="sm" className="shrink-0">
                <Gauge size={14} /> {pageSpeed.loading ? "Analyserar..." : "Analysera"}
              </Button>
            </div>
            {pageSpeed.loading && <p className="text-sm text-muted-foreground mb-4">Kör Lighthouse-analys... detta kan ta 15-30 sekunder.</p>}
            {pageSpeed.performance !== null && (
              <div className="flex justify-around flex-wrap gap-6">
                <ScoreCircle score={pageSpeed.performance} label="Prestanda" />
                <ScoreCircle score={pageSpeed.accessibility} label="Tillgänglighet" />
                <ScoreCircle score={pageSpeed.bestPractices} label="Bästa metoder" />
                <ScoreCircle score={pageSpeed.seo} label="SEO" />
              </div>
            )}
            {pageSpeed.performance === null && !pageSpeed.loading && (
              <p className="text-sm text-muted-foreground text-center py-8">Klicka "Analysera" för att köra en Lighthouse-analys på valfri URL.</p>
            )}
          </div>
        )}

        {activeTab === "seo" && (
          <div className="space-y-6">
            {/* Sub-tabs */}
            <div className="flex gap-2">
              <Button size="sm" variant={seoSubTab === "rankings" ? "default" : "outline"} onClick={() => setSeoSubTab("rankings")}>
                <TrendingUp size={14} /> Ranking Tracker
              </Button>
              <Button size="sm" variant={seoSubTab === "keywords" ? "default" : "outline"} onClick={() => setSeoSubTab("keywords")}>
                <Search size={14} /> Nyckelordsgenerator
              </Button>
            </div>

            {seoSubTab === "rankings" && (
              <>
                {/* Heat Map */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-bold font-serif mb-2">SEO Heat Map – Västmanland</h2>
                  <p className="text-sm text-muted-foreground mb-6">Visuell översikt av SEO-styrka per stad. Grön = Topp 3, Gul = Topp 10, Röd = Utanför topp 10.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cityRankings.map(c => {
                      const bg = c.rank === null ? "border-muted bg-muted/10" : c.rank <= 3 ? "border-green-500/40 bg-green-500/10" : c.rank <= 10 ? "border-yellow-500/40 bg-yellow-500/10" : "border-red-500/40 bg-red-500/10";
                      const textColor = c.rank === null ? "text-muted-foreground" : c.rank <= 3 ? "text-green-500" : c.rank <= 10 ? "text-yellow-500" : "text-red-500";
                      return (
                        <div key={c.city} className={`border-2 rounded-xl p-4 text-center ${bg}`}>
                          <MapPin size={18} className={`mx-auto mb-2 ${textColor}`} />
                          <p className="font-serif font-bold text-sm">{c.city}</p>
                          <p className={`text-2xl font-bold mt-1 ${textColor}`}>{c.rank ?? "–"}</p>
                          <p className="text-xs text-muted-foreground mt-1">{c.keyword}</p>
                          {c.leads > 0 && <p className="text-xs text-primary mt-1">{c.leads} leads</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ranking Table */}
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <h2 className="text-lg font-bold font-serif p-6 pb-3">SERP-positioner</h2>
                  <p className="text-sm text-muted-foreground px-6 pb-4">Manuellt uppdaterbara rankingpositioner per stad och sökord.</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stad</TableHead>
                        <TableHead>Sökord</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>7d trend</TableHead>
                        <TableHead>30d trend</TableHead>
                        <TableHead>Leads</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cityRankings.map((c, i) => {
                        const TrendIcon = c.rank !== null && c.prev7 !== null ? (c.rank < c.prev7 ? TrendingUp : c.rank > c.prev7 ? TrendingDown : Minus) : Minus;
                        const trendColor = c.rank !== null && c.prev7 !== null ? (c.rank < c.prev7 ? "text-green-500" : c.rank > c.prev7 ? "text-red-500" : "text-muted-foreground") : "text-muted-foreground";
                        return (
                          <TableRow key={c.city}>
                            <TableCell className="font-medium">{c.city}</TableCell>
                            <TableCell className="text-sm">{c.keyword}</TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                min={1}
                                max={100}
                                value={c.rank ?? ""}
                                onChange={(e) => {
                                  const val = e.target.value ? parseInt(e.target.value) : null;
                                  setCityRankings(prev => prev.map((r, idx) => idx === i ? { ...r, rank: val } : r));
                                }}
                                className="w-20 h-8 text-center"
                                placeholder="–"
                              />
                            </TableCell>
                            <TableCell><TrendIcon size={16} className={trendColor} /></TableCell>
                            <TableCell>
                              {c.rank !== null && c.prev30 !== null ? (
                                <span className={c.rank < c.prev30 ? "text-green-500" : c.rank > c.prev30 ? "text-red-500" : "text-muted-foreground"}>
                                  {c.rank < c.prev30 ? `↑${c.prev30 - c.rank}` : c.rank > c.prev30 ? `↓${c.rank - c.prev30}` : "–"}
                                </span>
                              ) : "–"}
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                min={0}
                                value={c.leads}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value) || 0;
                                  setCityRankings(prev => prev.map((r, idx) => idx === i ? { ...r, leads: val } : r));
                                }}
                                className="w-16 h-8 text-center"
                              />
                            </TableCell>
                            <TableCell>
                              {c.rank !== null && c.rank > 3 && (
                                <span className="inline-flex items-center gap-1 text-xs text-yellow-500">
                                  <AlertTriangle size={12} /> Åtgärd krävs
                                </span>
                              )}
                              {c.rank !== null && c.rank <= 3 && <span className="text-xs text-green-500">✓ Topp 3</span>}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>

                {/* Weekly Report */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-bold font-serif mb-2">Veckorapport – SEO & Leads</h2>
                  <p className="text-sm text-muted-foreground mb-4">Sammanfattning av rankingförändringar och leadsgenerering de senaste 7 dagarna.</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="border border-border rounded-lg p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Totala leads (7d)</p>
                      <p className="text-2xl font-bold text-primary">{cityRankings.reduce((s, c) => s + c.leads, 0)}</p>
                    </div>
                    <div className="border border-border rounded-lg p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Städer i Topp 3</p>
                      <p className="text-2xl font-bold text-green-500">{cityRankings.filter(c => c.rank !== null && c.rank <= 3).length} / {cityRankings.length}</p>
                    </div>
                    <div className="border border-border rounded-lg p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Åtgärd krävs</p>
                      <p className="text-2xl font-bold text-yellow-500">{cityRankings.filter(c => c.rank !== null && c.rank > 3).length}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => {
                      const now = new Date().toLocaleDateString("sv-SE");
                      const totalLeads = cityRankings.reduce((s, c) => s + c.leads, 0);
                      const top3 = cityRankings.filter(c => c.rank !== null && c.rank <= 3);
                      const needsAction = cityRankings.filter(c => c.rank !== null && c.rank > 3);

                      let content = `VECKORAPPORT – SEO & LEAD PERFORMANCE\n`;
                      content += `Genererad: ${now}\n`;
                      content += `${"=".repeat(50)}\n\n`;
                      content += `SAMMANFATTNING\n`;
                      content += `- Totala leads senaste 7 dagarna: ${totalLeads}\n`;
                      content += `- Städer i Topp 3: ${top3.length} av ${cityRankings.length}\n`;
                      content += `- Städer som kräver åtgärd: ${needsAction.length}\n\n`;
                      content += `DETALJERAD RANKING\n`;
                      content += `${"=".repeat(50)}\n`;
                      cityRankings.forEach(c => {
                        const status = c.rank === null ? "Ej spårad" : c.rank <= 3 ? "✓ Topp 3" : "⚠ Åtgärd krävs";
                        content += `\n${c.city} (${c.keyword})\n`;
                        content += `  Position: ${c.rank ?? "–"} | Leads: ${c.leads} | Status: ${status}\n`;
                      });
                      content += `\n${"=".repeat(50)}\n`;
                      content += `LRH Konsult – lrhkonsult.se\n`;

                      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `lrh-veckorapport-${now}.txt`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <FileText size={14} /> Ladda ner veckorapport
                  </Button>
                </div>
              </>
            )}

            {seoSubTab === "keywords" && (
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="text-lg font-bold font-serif mb-2">Lokal nyckelordsgenerator</h2>
                  <p className="text-sm text-muted-foreground mb-6">Generera SEO-titlar och metabeskrivningar för nya potentiella målstäder i Västmanland.</p>
                  <Button
                    onClick={() => {
                      const expansionCities = ["Hallstahammar", "Surahammar", "Norberg", "Skinnskatteberg"];
                      const templates = [
                        { kw: "Snabba hemsidor för småföretag", service: "Webbutveckling" },
                        { kw: "SEO-optimering för lokala företag", service: "SEO" },
                        { kw: "Modern webbdesign med 100/100 PageSpeed", service: "Webbdesign" },
                      ];
                      const suggestions: KeywordSuggestion[] = [];
                      expansionCities.forEach(city => {
                        templates.forEach(t => {
                          suggestions.push({
                            keyword: `${t.kw} i ${city}`,
                            metaTitle: `${t.service} ${city} | ${t.kw} | LRH Konsult`,
                            metaDescription: `Professionell ${t.service.toLowerCase()} i ${city}. ${t.kw} med React & Next.js. Boka fri konsultation!`,
                            city,
                          });
                        });
                      });
                      setKeywordSuggestions(suggestions);
                    }}
                    size="sm"
                  >
                    <Sparkles size={14} /> Generera förslag
                  </Button>
                </div>

                {keywordSuggestions.length > 0 && (
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <h2 className="text-lg font-bold font-serif p-6 pb-3">Expansionsförslag</h2>
                    <p className="text-sm text-muted-foreground px-6 pb-4">Long-tail nyckelord för nya målstäder.</p>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Stad</TableHead>
                          <TableHead>Nyckelord</TableHead>
                          <TableHead>Meta Title</TableHead>
                          <TableHead>Meta Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {keywordSuggestions.map((s, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{s.city}</TableCell>
                            <TableCell className="text-sm">{s.keyword}</TableCell>
                            <TableCell className="text-xs max-w-[200px] truncate" title={s.metaTitle}>{s.metaTitle}</TableCell>
                            <TableCell className="text-xs max-w-[250px] truncate" title={s.metaDescription}>{s.metaDescription}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
