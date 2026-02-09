import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Meddelande skickat!", description: "Tack, jag återkommer så snart jag kan." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      toast({ title: "Något gick fel", description: err.message || "Försök igen senare.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-14 sm:py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          {/* Left */}
          <AnimatedSection>
            <div>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Kontakt</span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                Låt oss prata om ditt{" "}
                <span className="text-primary">nästa projekt</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Har du en idé du vill förverkliga? Behöver du hjälp med din befintliga webbplats? Tveka inte att höra av dig – jag ser fram emot att höra från dig.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { icon: Mail, label: "E-post", value: "kontakt@lrhkonsult.se" },
                  { icon: Phone, label: "Telefon", value: "070 460 65 78" },
                  { icon: MapPin, label: "Plats", value: "Sverige" },
                ].map((item, i) => (
                  <FadeIn key={item.label} delay={0.2 + i * 0.1}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Namn</label>
                  <input
                    type="text"
                    placeholder="Ditt namn"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">E-post</label>
                  <input
                    type="email"
                    placeholder="din@email.se"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Ämne</label>
                <input
                  type="text"
                  placeholder="Vad gäller det?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Meddelande</label>
                <textarea
                  placeholder="Berätta mer om ditt projekt..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {loading ? (
                  <><Loader2 size={18} className="animate-spin" /> Skickar...</>
                ) : (
                  <>Skicka meddelande <Send size={18} /></>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
