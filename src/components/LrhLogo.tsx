/**
 * Inline SVG logo for LRH Konsult – zero network requests, infinite scalability.
 * Renders the "LRH" monogram + "KONSULT" text in brand colors.
 */
interface LrhLogoProps {
  className?: string;
  monogramOnly?: boolean;
  variant?: "default" | "white";
  width?: number;
  height?: number;
}

const LrhLogo = ({
  className = "",
  monogramOnly = false,
  variant = "default",
  width = 180,
  height = 45,
}: LrhLogoProps) => {
  const blueColor = variant === "white" ? "#ffffff" : "#1e3a5f";
  const goldColor = variant === "white" ? "#e2e8f0" : "#d4a843";
  const gradEnd = variant === "white" ? "#cbd5e1" : "#b8942e";

  // Shared letter paths (viewBox 0 0 56 40)
  const letters = (gradientId: string) => (
    <>
      {/* L – clean vertical + base */}
      <path d="M0 0h4.5v31h11v4H0V0z" fill={blueColor} />

      {/* R – stem + bowl + diagonal leg */}
      <path
        d="M19 0h7.5c4.2 0 7 2.8 7 7s-2.8 7-7 7h-3l7 21h-5l-6.5-21H23.5V0z
           M23.5 4v6h3c1.8 0 3-1.2 3-3s-1.2-3-3-3h-3z"
        fill={blueColor}
        fillRule="evenodd"
      />

      {/* H – gold gradient */}
      <path
        d="M37 0h4.5v14.5h9V0H55v35h-4.5V19h-9v16H37V0z"
        fill={`url(#${gradientId})`}
      />
    </>
  );

  if (monogramOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 56 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        role="img"
      >
        {letters("lrh-g-mono")}
        <defs>
          <linearGradient id="lrh-g-mono" x1="37" y1="0" x2="55" y2="35">
            <stop offset="0%" stopColor={goldColor} />
            <stop offset="100%" stopColor={gradEnd} />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
    >
      <title>LRH Konsult – Webbutveckling och SEO i Västerås</title>
      {letters("lrh-g-full")}
      {/* KONSULT text – vertically centered, spaced from monogram */}
      <text
        x="66"
        y="24"
        fill={blueColor}
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="4"
      >
        KONSULT
      </text>
      <defs>
        <linearGradient id="lrh-g-full" x1="37" y1="0" x2="55" y2="35">
          <stop offset="0%" stopColor={goldColor} />
          <stop offset="100%" stopColor={gradEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LrhLogo;
