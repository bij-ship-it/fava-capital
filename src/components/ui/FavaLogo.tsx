import { cn } from "@/lib/cn";

type Variant = "nav" | "full";

export function FavaLogo({
  variant = "nav",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "nav") {
    return (
      <svg
        viewBox="0 0 190 80"
        role="img"
        aria-label="FAVA Capital"
        className={cn("h-10 w-auto", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>FAVA Capital</title>
        <LatticeMark />
        <text
          x="68"
          y="58"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "46px",
            letterSpacing: "-0.02em",
          }}
        >
          FAVA
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 340 80"
      role="img"
      aria-label="FAVA Capital"
      className={cn("h-12 w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>FAVA Capital</title>
      <LatticeMark />
      <text
        x="68"
        y="58"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "46px",
          letterSpacing: "-0.02em",
        }}
      >
        FAVA
      </text>
      <text
        x="193"
        y="58"
        fill="currentColor"
        opacity="0.75"
        style={{
          fontFamily: "var(--font-heading), 'Outfit', sans-serif",
          fontWeight: 500,
          fontSize: "20px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        CAPITAL
      </text>
    </svg>
  );
}

function LatticeMark() {
  // Redrawn in compact coordinates so mark and wordmark share a sensible baseline.
  // Bars grow toward the peak (index 2 is the tallest), gold crossbar threads through.
  return (
    <g>
      <rect x="0" y="20" width="8" height="50" rx="1.5" fill="#C4B5FD" />
      <rect x="12" y="30" width="8" height="40" rx="1.5" fill="#A78BFA" />
      <rect x="24" y="12" width="8" height="58" rx="1.5" fill="#8B5CF6" />
      <rect x="36" y="32" width="8" height="38" rx="1.5" fill="#6B3FA0" />
      <rect x="0" y="44" width="44" height="3" rx="1" fill="#D4A843" />
    </g>
  );
}
