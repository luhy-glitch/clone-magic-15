import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Lightweight scroll-to-top button for long-form pages.
 * Pure CSS transitions, no animation libraries.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scrolla till toppen"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary/90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
