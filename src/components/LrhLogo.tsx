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

  if (monogramOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        role="img"
      >
        {/* L */}
        <path
          d="M6 8h5v24h12v5H6V8z"
          fill={blueColor}
        />
        {/* R */}
        <path
          d="M16 8h10c4.5 0 7 2.5 7 6.5s-2.5 6.5-7 6.5h-5v16h-5V8zm5 9h4.5c1.8 0 2.5-1 2.5-2.5S27.3 12 25.5 12H21v5z"
          fill={blueColor}
        />
        {/* H */}
        <path
          d="M30 8h5v12h8V8h5v29h-5V25h-8v12h-5V8z"
          fill="url(#lrh-gold-grad)"
        />
        <defs>
          <linearGradient id="lrh-gold-grad" x1="30" y1="8" x2="48" y2="37">
            <stop offset="0%" stopColor={goldColor} />
            <stop offset="100%" stopColor={variant === "white" ? "#cbd5e1" : "#b8942e"} />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
    >
      <title>LRH Konsult – Webbutveckling och SEO i Västerås</title>
      {/* L */}
      <path
        d="M6 8h5v24h12v5H6V8z"
        fill={blueColor}
      />
      {/* R */}
      <path
        d="M16 8h10c4.5 0 7 2.5 7 6.5s-2.5 6.5-7 6.5h-5v16h-5V8zm5 9h4.5c1.8 0 2.5-1 2.5-2.5S27.3 12 25.5 12H21v5z"
        fill={blueColor}
      />
      {/* H */}
      <path
        d="M30 8h5v12h8V8h5v29h-5V25h-8v12h-5V8z"
        fill="url(#lrh-gold-full)"
      />
      {/* KONSULT text */}
      <text
        x="60"
        y="30"
        fill={blueColor}
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="14"
        fontWeight="600"
        letterSpacing="3"
      >
        KONSULT
      </text>
      <defs>
        <linearGradient id="lrh-gold-full" x1="30" y1="8" x2="48" y2="37">
          <stop offset="0%" stopColor={goldColor} />
          <stop offset="100%" stopColor={variant === "white" ? "#cbd5e1" : "#b8942e"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LrhLogo;
