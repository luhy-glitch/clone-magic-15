import { useState, useCallback } from "react";

/**
 * Performance-optimized video facade.
 * Shows a CSS-only play button over a placeholder; loads iframe only on click.
 * Zero impact on LCP/TBT until user interaction.
 */
const VideoFacade = ({ videoId = "dQw4w9WgXcQ" }: { videoId?: string }) => {
  const [loaded, setLoaded] = useState(false);

  const handlePlay = useCallback(() => setLoaded(true), []);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden border border-border/30 shadow-2xl group">
      {loaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="LRH Konsult – Webbutveckling & SEO i Västmanland"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      ) : (
        <button
          onClick={handlePlay}
          aria-label="Spela introduktionsvideo"
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-background/90 via-background/70 to-primary/20 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:from-background/80 group-hover:via-background/60"
        >
          {/* Thumbnail with CSS gradient overlay */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video: Webbutveckling och SEO i Västmanland"
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          {/* CSS-only play button */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:bg-primary transition-transform duration-300">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" className="text-primary-foreground" />
            </svg>
          </div>

          <span className="absolute bottom-6 text-sm text-muted-foreground font-medium z-10">
            Se hur vi jobbar
          </span>
        </button>
      )}
    </div>
  );
};

export default VideoFacade;
