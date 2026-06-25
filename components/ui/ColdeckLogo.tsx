interface LogoProps {
  inverted?: boolean
  className?: string
}

export default function ColdeckLogo({ inverted = false, className = '' }: LogoProps) {
  const textBlue  = inverted ? '#ffffff' : '#4D59B7'
  const textPink  = inverted ? '#dddddd' : '#CC00BE'

  return (
    <svg
      viewBox="0 0 210 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coldeck Solutions"
    >
      {/* â”€â”€ Hexagon icon â”€â”€ */}
      <polygon
        points="26,3 45,14 45,36 26,47 7,36 7,14"
        fill="none"
        stroke={textBlue}
        strokeWidth="1.8"
      />

      {/* Leaf */}
      <path d="M26 15 C20 21 16 28 19 33 C23 29 28 24 26 15Z" fill="#9BC74A" />

      {/* Cube */}
      <rect x="21" y="28" width="9" height="9" rx="1" fill={textBlue} opacity="0.85" />

      {/* Snowflake */}
      <line x1="33" y1="16" x2="33" y2="27" stroke="#CC00BE" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="27" y1="21.5" x2="39" y2="21.5" stroke="#CC00BE" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="29" y1="17.5" x2="37" y2="25.5" stroke="#CC00BE" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="37" y1="17.5" x2="29" y2="25.5" stroke="#CC00BE" strokeWidth="1.4" strokeLinecap="round" />

      {/* â”€â”€ COLDECK wordmark â”€â”€ */}
      <text
        x="54"
        y="31"
        fontFamily="'Syne', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="21"
        fill={textBlue}
        letterSpacing="1.5"
      >
        COLDECK
      </text>

      {/* â”€â”€ SOLUTIONS subtext â”€â”€ */}
      <text
        x="55"
        y="46"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="500"
        fontSize="10"
        fill={textPink}
        letterSpacing="3.5"
      >
        SOLUTIONS
      </text>
    </svg>
  )
}

