"use client";

interface LatticeLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function LatticeLogo({
  className = "",
  size = 48,
  animated = false,
}: LatticeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Four pillars of varying height — the Lattice mark */}
      <rect x="4" y="24" width="6" height="20" rx="1" fill="#8B5CF6">
        {animated && (
          <animate
            attributeName="height"
            values="0;20"
            dur="0.6s"
            fill="freeze"
          />
        )}
      </rect>
      <rect x="14" y="14" width="6" height="30" rx="1" fill="#8B5CF6">
        {animated && (
          <animate
            attributeName="height"
            values="0;30"
            dur="0.8s"
            fill="freeze"
          />
        )}
      </rect>
      <rect x="24" y="8" width="6" height="36" rx="1" fill="#8B5CF6">
        {animated && (
          <animate
            attributeName="height"
            values="0;36"
            dur="1s"
            fill="freeze"
          />
        )}
      </rect>
      <rect x="34" y="4" width="6" height="40" rx="1" fill="#8B5CF6">
        {animated && (
          <animate
            attributeName="height"
            values="0;40"
            dur="1.2s"
            fill="freeze"
          />
        )}
      </rect>
      {/* Gold connecting thread */}
      <line
        x1="4"
        y1="22"
        x2="40"
        y2="2"
        stroke="#D4A843"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {animated && (
          <animate
            attributeName="stroke-dashoffset"
            from="60"
            to="0"
            dur="1.5s"
            fill="freeze"
          />
        )}
      </line>
    </svg>
  );
}
