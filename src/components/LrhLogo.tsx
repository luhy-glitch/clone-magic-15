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
          d="M2 6h4v26h10v4H2V6z"
          fill={blueColor}
        />
        {/* R */}
        <path
          d="M18 6h8c4 0 6.5 2.8 6.5 6.5S30 19 26 19h-4v17h-4V6zm4 4v9h4c2.2 0 3.5-1.8 3.5-4.5S28.2 10 26 10h-4z"
          fill={blueColor}
        />
        {/* H */}
        <path
          d="M34 6h4v13h8V6h4v30h-4V23h-8v13h-4V6z"
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
        d="M2 6h4v26h10v4H2V6z"
        fill={blueColor}
      />
      {/* R */}
      <path
        d="M18 6h8c4 0 6.5 2.8 6.5 6.5S30 19 26 19h-4v17h-4V6zm4 4v9h4c2.2 0 3.5-1.8 3.5-4.5S28.2 10 26 10h-4z"
        fill={blueColor}
      />
      {/* H */}
      <path
        d="M34 6h4v13h8V6h4v30h-4V23h-8v13h-4V6z"
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
