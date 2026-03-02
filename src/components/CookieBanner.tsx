import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "lrh-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-foreground flex-1">
          Vi använder cookies för att förbättra din upplevelse. Genom att fortsätta använda sidan godkänner du vår{" "}
          <Link to="/integritetspolicy" className="text-primary underline underline-offset-2">
            integritetspolicy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <Link
            to="/integritetspolicy"
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Läs vår integritetspolicy i sin helhet
          </Link>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
