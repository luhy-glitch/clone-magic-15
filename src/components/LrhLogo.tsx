/**
 * Inline SVG logo for LRH Konsult – zero network requests, infinite scalability.
 * Each letter is built from separate non-overlapping shapes for clarity.
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
  const blue = variant === "white" ? "#ffffff" : "#1e3a5f";
  const goldStart = variant === "white" ? "#e2e8f0" : "#d4a843";
  const goldEnd = variant === "white" ? "#cbd5e1" : "#b8942e";

  const Letters = ({ gid }: { gid: string }) => (
    <>
      {/* ===== L ===== */}
      {/* Vertical stem */}
      <rect x="0" y="0" width="5" height="35" fill={blue} />
      {/* Horizontal base */}
      <rect x="5" y="31" width="9" height="4" fill={blue} />

      {/* ===== R ===== */}
      {/* Vertical stem */}
      <rect x="18" y="0" width="5" height="35" fill={blue} />
      {/* Bowl top bar */}
      <rect x="23" y="0" width="7" height="4" fill={blue} />
      {/* Bowl right side */}
      <rect x="30" y="4" width="4" height="9" fill={blue} />
      {/* Bowl bottom bar */}
      <rect x="23" y="13" width="7" height="4" fill={blue} />
      {/* Diagonal leg */}
      <polygon points="26,17 31,17 36,35 31,35" fill={blue} />

      {/* ===== H (gold) ===== */}
      {/* Left stem */}
      <rect x="40" y="0" width="5" height="35" fill={`url(#${gid})`} />
      {/* Right stem */}
      <rect x="55" y="0" width="5" height="35" fill={`url(#${gid})`} />
      {/* Cross bar */}
      <rect x="45" y="14" width="10" height="5" fill={`url(#${gid})`} />

      <defs>
        <linearGradient id={gid} x1="40" y1="0" x2="60" y2="35">
          <stop offset="0%" stopColor={goldStart} />
          <stop offset="100%" stopColor={goldEnd} />
        </linearGradient>
      </defs>
    </>
  );

  if (monogramOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 60 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        role="img"
      >
        <Letters gid="lg-m" />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 195 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
    >
      <title>LRH Konsult – Webbutveckling och SEO i Västerås</title>
      <Letters gid="lg-f" />
      <text
        x="70"
        y="23"
        fill={blue}
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="4.5"
      >
        KONSULT
      </text>
    </svg>
  );
};

export default LrhLogo;
