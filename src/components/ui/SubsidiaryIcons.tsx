interface IconProps {
  size?: number;
  className?: string;
}

// FAVA Wealth — ascending stepped bars representing compounding growth
export function WealthIcon({ size = 80, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stepped ascending bars — compounding returns */}
      <rect x="8" y="52" width="12" height="20" rx="1.5" fill="#2D1B69" />
      <rect x="24" y="40" width="12" height="32" rx="1.5" fill="#4A2C8A" />
      <rect x="40" y="28" width="12" height="44" rx="1.5" fill="#6B3FA0" />
      <rect x="56" y="12" width="12" height="60" rx="1.5" fill="#8B5CF6" />
      {/* Growth line — gold accent connecting the tops */}
      <path
        d="M14 52 L30 40 L46 28 L62 12"
        stroke="#059669"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dot at peak */}
      <circle cx="62" cy="12" r="3" fill="#059669" />
    </svg>
  );
}

// FAVA Markets — candlestick chart pattern representing trading
export function MarketsIcon({ size = 80, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Candlestick wicks */}
      <line x1="16" y1="14" x2="16" y2="66" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="32" y1="8" x2="32" y2="58" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="48" y1="18" x2="48" y2="70" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="64" y1="6" x2="64" y2="54" stroke="#2D1B69" strokeWidth="1.5" />
      {/* Candlestick bodies */}
      <rect x="10" y="24" width="12" height="28" rx="1" fill="#4A2C8A" />
      <rect x="26" y="18" width="12" height="24" rx="1" fill="#6B3FA0" />
      <rect x="42" y="30" width="12" height="26" rx="1" fill="#8B5CF6" />
      <rect x="58" y="14" width="12" height="30" rx="1" fill="#A78BFA" />
      {/* Teal accent — spread line */}
      <path
        d="M10 72 L70 72"
        stroke="#14B8A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      {/* Teal price marker */}
      <rect x="58" y="10" width="12" height="4" rx="1" fill="#14B8A6" />
    </svg>
  );
}

// FAVA Digital — connected blocks representing blockchain/nodes
export function DigitalIcon({ size = 80, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Connection lines */}
      <line x1="26" y1="26" x2="54" y2="26" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="26" y1="54" x2="54" y2="54" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="26" y1="26" x2="26" y2="54" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="54" y1="26" x2="54" y2="54" stroke="#2D1B69" strokeWidth="1.5" />
      <line x1="26" y1="26" x2="54" y2="54" stroke="#2D1B69" strokeWidth="1" />
      <line x1="54" y1="26" x2="26" y2="54" stroke="#2D1B69" strokeWidth="1" />
      {/* Nodes — blocks */}
      <rect x="14" y="14" width="24" height="24" rx="3" fill="#4A2C8A" />
      <rect x="42" y="14" width="24" height="24" rx="3" fill="#6B3FA0" />
      <rect x="14" y="42" width="24" height="24" rx="3" fill="#8B5CF6" />
      <rect x="42" y="42" width="24" height="24" rx="3" fill="#A78BFA" />
      {/* Center indigo accent — the exchange core */}
      <rect x="30" y="30" width="20" height="20" rx="2" fill="#6366F1" />
      {/* Inner detail */}
      <rect x="35" y="35" width="10" height="10" rx="1" fill="#0C0716" />
      <rect x="37" y="37" width="6" height="6" rx="0.5" fill="#6366F1" />
    </svg>
  );
}

// FAVA Commodities — stacked layers representing raw materials/ingots
export function CommoditiesIcon({ size = 80, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stacked ingot layers — bottom to top, lighter as they go up */}
      <path
        d="M12 62 L20 54 L60 54 L68 62 Z"
        fill="#2D1B69"
      />
      <rect x="12" y="62" width="56" height="8" rx="1" fill="#2D1B69" />

      <path
        d="M16 50 L24 42 L56 42 L64 50 Z"
        fill="#4A2C8A"
      />
      <rect x="16" y="50" width="48" height="8" rx="1" fill="#4A2C8A" />

      <path
        d="M20 38 L28 30 L52 30 L60 38 Z"
        fill="#6B3FA0"
      />
      <rect x="20" y="38" width="40" height="8" rx="1" fill="#6B3FA0" />

      <path
        d="M24 26 L32 18 L48 18 L56 26 Z"
        fill="#8B5CF6"
      />
      <rect x="24" y="26" width="32" height="8" rx="1" fill="#8B5CF6" />

      {/* Gold bar accent on top */}
      <path
        d="M30 16 L36 10 L44 10 L50 16 Z"
        fill="#D97706"
      />
      <rect x="30" y="16" width="20" height="4" rx="0.5" fill="#D97706" />
    </svg>
  );
}

// FAVA Payments — flowing arrows representing money movement/transfers
export function PaymentsIcon({ size = 80, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Card shape — base */}
      <rect x="8" y="18" width="64" height="44" rx="4" fill="#2D1B69" />
      <rect x="8" y="18" width="64" height="12" rx="4" fill="#4A2C8A" />
      {/* Chip */}
      <rect x="16" y="38" width="12" height="10" rx="2" fill="#6B3FA0" />
      <line x1="22" y1="38" x2="22" y2="48" stroke="#8B5CF6" strokeWidth="1" />
      <line x1="16" y1="43" x2="28" y2="43" stroke="#8B5CF6" strokeWidth="1" />
      {/* Flow arrows — money in motion */}
      <path
        d="M38 40 L54 40"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 36 L54 40 L50 44"
        stroke="#0EA5E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62 48 L46 48"
        stroke="#8B5CF6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 44.5 L46 48 L50 51.5"
        stroke="#8B5CF6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Contactless waves */}
      <path
        d="M56 68 C60 64, 60 60, 56 56"
        stroke="#0EA5E9"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 70 C68 64, 68 58, 62 52"
        stroke="#0EA5E9"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
