const VastmanlandMap = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Simplified outline of Västmanland county */}
    <path
      d="M80 60 L120 30 L180 20 L240 25 L300 40 L340 70 L360 120 L350 180 L330 230 L300 270 L260 300 L200 320 L140 310 L100 280 L70 240 L50 190 L55 130 Z"
      stroke="hsl(38 92% 50%)"
      strokeWidth="1"
      strokeOpacity="0.15"
      fill="none"
    />
    <path
      d="M80 60 L120 30 L180 20 L240 25 L300 40 L340 70 L360 120 L350 180 L330 230 L300 270 L260 300 L200 320 L140 310 L100 280 L70 240 L50 190 L55 130 Z"
      fill="hsl(38 92% 50%)"
      fillOpacity="0.02"
    />
    {/* Västerås dot */}
    <circle cx="220" cy="200" r="5" fill="hsl(38 92% 50%)" fillOpacity="0.5" />
    <circle cx="220" cy="200" r="8" stroke="hsl(38 92% 50%)" strokeOpacity="0.2" strokeWidth="1" fill="none" />
    <text x="232" y="204" fill="hsl(38 92% 50%)" fillOpacity="0.4" fontSize="11" fontFamily="Inter, sans-serif">Västerås</text>
    {/* Köping dot */}
    <circle cx="150" cy="175" r="4" fill="hsl(38 92% 50%)" fillOpacity="0.4" />
    <text x="120" y="168" fill="hsl(38 92% 50%)" fillOpacity="0.35" fontSize="10" fontFamily="Inter, sans-serif">Köping</text>
    {/* Sala dot */}
    <circle cx="260" cy="100" r="4" fill="hsl(38 92% 50%)" fillOpacity="0.4" />
    <text x="270" y="104" fill="hsl(38 92% 50%)" fillOpacity="0.35" fontSize="10" fontFamily="Inter, sans-serif">Sala</text>
    {/* Connecting lines between cities */}
    <line x1="150" y1="175" x2="220" y2="200" stroke="hsl(38 92% 50%)" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="4 4" />
    <line x1="220" y1="200" x2="260" y2="100" stroke="hsl(38 92% 50%)" strokeOpacity="0.1" strokeWidth="0.5" strokeDasharray="4 4" />
  </svg>
);

export default VastmanlandMap;
