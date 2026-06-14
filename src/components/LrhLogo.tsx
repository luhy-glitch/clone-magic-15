/**
 * Officiell LRH Konsult-logga (brand-kit 2026) som inline-SVG.
 * Stapeldiagram-märke + ordmärke i Space Grotesk. Noll nätverksanrop, skalbar.
 * Geometri/färger från de officiella logo-light/dark/icon-svg:erna.
 */
interface LrhLogoProps {
  className?: string;
  monogramOnly?: boolean;
  /** "default"/"white" = ljus logga för mörk bakgrund · "navy" = mörk logga för ljus bakgrund */
  variant?: "default" | "white" | "navy";
  width?: number;
  height?: number;
}

const FONT = "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif";

const LrhLogo = ({
  className = "",
  monogramOnly = false,
  variant = "default",
  width = 190,
  height = 44,
}: LrhLogoProps) => {
  const navy = variant === "navy";
  const bar = navy ? "#1B3B6F" : variant === "white" ? "#ffffff" : "#EEF3FA";
  const gold = "#C49520";
  const lrh = navy ? "#1B3B6F" : variant === "white" ? "#ffffff" : "#EEF3FA";
  const konsult = navy ? "#AABBCC" : "#4A7EA0";

  const Bars = () => (
    <>
      <rect x="0" y="43" width="18" height="23" rx="3.5" fill={bar} />
      <rect x="27" y="28" width="18" height="38" rx="3.5" fill={bar} />
      <rect x="54" y="10" width="18" height="56" rx="3.5" fill={gold} />
    </>
  );

  if (monogramOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 72 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        role="img"
      >
        <Bars />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 205 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
    >
      <title>LRH Konsult – Webbutveckling och SEO i Västerås</title>
      <Bars />
      <text x="90" y="47" fontFamily={FONT} fontSize="36" fontWeight="700" letterSpacing="4" fill={lrh}>LRH</text>
      <text x="92" y="62" fontFamily={FONT} fontSize="9.5" fontWeight="300" letterSpacing="6" fill={konsult}>KONSULT</text>
    </svg>
  );
};

export default LrhLogo;
