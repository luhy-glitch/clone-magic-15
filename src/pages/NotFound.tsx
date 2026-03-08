import { Link, useLocation } from "react-router-dom";
import PageHead from "@/components/PageHead";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4" style={{ background: "hsl(140 18% 12%)" }}>
      <PageHead
        title="Sidan hittades inte | LRH Konsult"
        description="Sidan du letar efter finns inte. Utforska våra tjänster inom webbutveckling och SEO i Västmanland."
      />
      <div className="text-center max-w-lg">
        <p className="text-7xl font-serif font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-serif font-bold text-foreground mb-3">Sidan hittades inte</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Sidan du letar efter kan ha flyttats eller tagits bort. Utforska våra tjänster eller gå tillbaka till startsidan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Till startsidan
          </Link>
          <Link to="/tjanster/webbutveckling" className="px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
            Webbutveckling
          </Link>
          <Link to="/tjanster/seo-optimering" className="px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
            SEO-optimering
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;