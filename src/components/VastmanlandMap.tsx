import React from "react";

// Simplified outline of Västmanland county
const MAP_PATH = "M120,20 L180,15 L220,30 L260,25 L290,50 L310,80 L300,120 L310,160 L290,200 L260,230 L230,250 L190,260 L150,250 L110,230 L80,200 L60,160 L50,120 L60,80 L80,50 L100,30 Z";

// Approximate geographic positions on the map (relative to 360x280 viewBox)
const cities = [
  { name: "Sala", x: 220, y: 60 },
  { name: "Köping", x: 100, y: 180 },
  { name: "Västerås", x: 200, y: 170 },
];

export default function VastmanlandMap() {
  return (
    <svg
      viewBox="0 0 360 280"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.15" />
        </linearGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* County outline */}
      <path
        d={MAP_PATH}
        fill="none"
        stroke="url(#mapGlow)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Connection lines between cities */}
      {cities.map((city, i) =>
        cities.slice(i + 1).map((city2, j) => (
          <line
            key={`${i}-${j}`}
            x1={city.x}
            y1={city.y}
            x2={city2.x}
            y2={city2.y}
            stroke="#fbbf24"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
        ))
      )}

      {/* City nodes */}
      {cities.map((city) => (
        <g key={city.name} filter="url(#nodeGlow)">
          <circle cx={city.x} cy={city.y} r="6" fill="#fbbf24" fillOpacity="0.15" />
          <circle cx={city.x} cy={city.y} r="3" fill="#fbbf24" fillOpacity="0.6" />
          <circle cx={city.x} cy={city.y} r="1.5" fill="#fde68a" />
          <text
            x={city.x}
            y={city.y + 16}
            textAnchor="middle"
            fill="#9ca3af"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            {city.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
