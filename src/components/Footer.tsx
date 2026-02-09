import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-sm">LR</span>
          </div>
          <div>
            <div className="font-serif font-bold text-foreground">LRH Konsult</div>
            <div className="text-xs text-muted-foreground">© 2026 Alla rättigheter förbehållna.</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {[Mail, Linkedin, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
