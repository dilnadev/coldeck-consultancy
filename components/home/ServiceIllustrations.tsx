'use client'

import { motion } from 'framer-motion'

const VP = { once: true as const }

/* â”€â”€ 1. Investment Advisory â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function InvestmentIllustration() {
  const C = '#4D59B7', G = '#9BC74A'
  const bars = [{ h: 80, x: 72 }, { h: 125, x: 122 }, { h: 58, x: 172 }, { h: 158, x: 222 }, { h: 102, x: 272 }, { h: 78, x: 322 }]
  const floor = 248
  const linePath = 'M ' + bars.map(b => `${b.x},${floor - b.h - 4}`).join(' L ')
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inv-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#030511" /><stop offset="100%" stopColor="#0e1240" /></linearGradient>
        <linearGradient id="inv-bB" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor={C} stopOpacity="0.85" /><stop offset="100%" stopColor={C} stopOpacity="0.08" /></linearGradient>
        <linearGradient id="inv-bG" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor={G} stopOpacity="0.9" /><stop offset="100%" stopColor={G} stopOpacity="0.1" /></linearGradient>
        <filter id="inv-glow"><feGaussianBlur stdDeviation="3.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#inv-bg)" />
      <ellipse cx="195" cy="175" rx="175" ry="110" fill={C} opacity="0.05" />
      {[100, 140, 180, 220].map(y => <line key={y} x1="45" y1={y} x2="365" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="6 10" />)}
      <line x1="48" y1="55" x2="48" y2={floor} stroke="white" strokeOpacity="0.07" strokeWidth="1" />
      <line x1="48" y1={floor} x2="368" y2={floor} stroke="white" strokeOpacity="0.07" strokeWidth="1" />
      {bars.map((b, i) => (
        <motion.rect key={i} x={b.x - 18} width={36} rx={5} fill={i === 3 ? 'url(#inv-bG)' : 'url(#inv-bB)'}
          style={{ originX: '50%', originY: '100%' }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VP}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          // SVG attrs need to be set directly, scaleY works on the wrapper
          y={floor - b.h} height={b.h}
        />
      ))}
      <motion.path d={linePath} fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        filter="url(#inv-glow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={VP} transition={{ delay: 0.7, duration: 1.0 }} />
      {bars.map((b, i) => (
        <motion.circle key={i} cx={b.x} cy={floor - b.h - 4} r={4} fill={G} filter="url(#inv-glow)"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={VP} transition={{ delay: 0.75 + i * 0.06 }} />
      ))}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 1.1 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="305" y="22" width="76" height="40" rx="10" fill={C} fillOpacity="0.22" stroke={C} strokeOpacity="0.5" strokeWidth="1" />
          <text x="343" y="38" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">ROI TARGET</text>
          <text x="343" y="55" fill={G} fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+24.5%</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">INVESTMENT ANALYTICS</text>
    </svg>
  )
}

/* â”€â”€ 2. Infrastructure â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function InfrastructureIllustration() {
  const C = '#9BC74A'
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inf-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#040a04" /><stop offset="100%" stopColor="#0c1f0e" /></linearGradient>
        <linearGradient id="inf-front" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1a3520" /><stop offset="100%" stopColor="#0a1a0c" /></linearGradient>
        <linearGradient id="inf-top" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#2a5530" /><stop offset="100%" stopColor="#1a3a20" /></linearGradient>
        <filter id="inf-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#inf-bg)" />
      <ellipse cx="195" cy="170" rx="160" ry="100" fill={C} opacity="0.04" />
      {/* dot grid pattern */}
      {Array.from({ length: 8 }, (_, r) => Array.from({ length: 12 }, (_, c) => (
        <circle key={`${r}-${c}`} cx={20 + c * 33} cy={20 + r * 38} r={1} fill={C} opacity="0.08" />
      )))}
      {/* isometric warehouse - entrance */}
      <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        {/* right side face */}
        <path d="M 270,108 L 320,82 L 320,192 L 270,218 Z" fill="#0d1f0f" stroke={C} strokeOpacity="0.15" strokeWidth="1" />
        {/* top face */}
        <path d="M 108,108 L 158,82 L 320,82 L 270,108 Z" fill="url(#inf-top)" stroke={C} strokeOpacity="0.3" strokeWidth="1" />
        {/* front face */}
        <path d="M 108,108 L 270,108 L 270,218 L 108,218 Z" fill="url(#inf-front)" stroke={C} strokeOpacity="0.25" strokeWidth="1" />
        {/* door */}
        <rect x="170" y="170" width="50" height="48" rx="2" fill="#050d06" stroke={C} strokeOpacity="0.4" strokeWidth="1" />
        {[175, 185, 195, 205, 215].map(x => <line key={x} x1={x} y1="172" x2={x} y2="218" stroke={C} strokeOpacity="0.15" strokeWidth="1" />)}
        {/* panels */}
        <rect x="118" y="120" width="36" height="24" rx="3" fill="#050d06" stroke={C} strokeOpacity="0.3" strokeWidth="1" />
        <rect x="162" y="120" width="36" height="24" rx="3" fill="#050d06" stroke={C} strokeOpacity="0.3" strokeWidth="1" />
        {/* edge lines on right face */}
        {[110, 140, 170].map((y, i) => (
          <line key={i} x1="270" y1={y} x2={270 + (y < 108 ? 50 : 50 * (1 - (y - 108) / 110))} y2={y === 108 ? 82 : 82 + (y - 108) * 1.0}
            stroke={C} strokeOpacity="0.1" strokeWidth="1" />
        ))}
        {/* C label on building */}
        <text x="140" y="165" fill={C} fontSize="9" opacity="0.35" fontFamily="monospace" letterSpacing="2">COLD CHAIN</text>
      </motion.g>
      {/* snowflake */}
      <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP} transition={{ delay: 0.6, duration: 0.5 }}
        style={{ transformOrigin: '60px 80px' }}>
        <motion.g animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '60px 80px' }}>
          {[0, 45, 90, 135].map(a => (
            <line key={a} x1={60 + 18 * Math.cos(a * Math.PI / 180)} y1={80 + 18 * Math.sin(a * Math.PI / 180)}
              x2={60 - 18 * Math.cos(a * Math.PI / 180)} y2={80 - 18 * Math.sin(a * Math.PI / 180)}
              stroke={C} strokeWidth="2" strokeLinecap="round" filter="url(#inf-glow)" />
          ))}
          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
            <circle key={a} cx={60 + 18 * Math.cos(a * Math.PI / 180)} cy={80 + 18 * Math.sin(a * Math.PI / 180)}
              r={2.5} fill={C} filter="url(#inf-glow)" />
          ))}
        </motion.g>
      </motion.g>
      {/* temp badge */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 0.9 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="305" y="130" width="76" height="42" rx="10" fill={C} fillOpacity="0.18" stroke={C} strokeOpacity="0.5" strokeWidth="1" />
          <text x="343" y="147" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">OPERATING</text>
          <text x="343" y="165" fill={C} fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">-18°C</text>
        </motion.g>
      </motion.g>
      {/* expansion arrow */}
      <motion.g initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP} transition={{ delay: 1.1 }}>
        <motion.g animate={{ x: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <path d="M 330 230 L 370 230 L 362 222 M 370 230 L 362 238" stroke={C} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#inf-glow)" />
          <text x="330" y="248" fill={C} fontSize="8" fontFamily="sans-serif" opacity="0.7">EXPAND</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">COLD CHAIN INFRASTRUCTURE</text>
    </svg>
  )
}

/* â”€â”€ 3. Energy & Operational Excellence â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function EnergyIllustration() {
  const C = '#CC00BE'
  const cx = 200, cy = 145, r = 85
  const arcPath = `M ${cx - r * Math.cos(Math.PI / 4)} ${cy + r * Math.sin(Math.PI / 4)} A ${r} ${r} 0 1 1 ${cx + r * Math.cos(Math.PI / 4)} ${cy + r * Math.sin(Math.PI / 4)}`
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ene-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#080009" /><stop offset="100%" stopColor="#1e0018" /></linearGradient>
        <linearGradient id="ene-arc" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={C} /><stop offset="100%" stopColor="#ff44f0" /></linearGradient>
        <filter id="ene-glow"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        <filter id="ene-soft"><feGaussianBlur stdDeviation="12" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#ene-bg)" />
      {/* ambient glow */}
      <ellipse cx={cx} cy={cy} rx="130" ry="110" fill={C} opacity="0.06" filter="url(#ene-soft)" />
      {/* pulse rings */}
      {[1, 2, 3].map(i => (
        <motion.circle key={i} cx={cx} cy={cy} r={r + 20 + i * 22} fill="none" stroke={C} strokeWidth="1"
          initial={{ opacity: 0.3, scale: 0.85 }} animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity, ease: 'easeOut' }} />
      ))}
      {/* gauge track */}
      <path d={arcPath} fill="none" stroke={C} strokeWidth="10" strokeOpacity="0.12" strokeLinecap="round" />
      {/* gauge fill (87%) */}
      <motion.path d={arcPath} fill="none" stroke="url(#ene-arc)" strokeWidth="10" strokeLinecap="round"
        filter="url(#ene-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.87 }} viewport={VP}
        transition={{ delay: 0.3, duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
      {/* tick marks */}
      {Array.from({ length: 9 }, (_, i) => {
        const angle = -225 + i * 31.25
        const rad = angle * Math.PI / 180
        return (
          <line key={i} x1={cx + (r - 14) * Math.cos(rad)} y1={cy + (r - 14) * Math.sin(rad)}
            x2={cx + (r + 14) * Math.cos(rad)} y2={cy + (r + 14) * Math.sin(rad)}
            stroke={C} strokeWidth="1.5" strokeOpacity="0.3" />
        )
      })}
      {/* center circle */}
      <circle cx={cx} cy={cy} r={42} fill="#0d0010" stroke={C} strokeWidth="1" strokeOpacity="0.3" />
      {/* lightning bolt */}
      <motion.path d="M 207 118 L 194 147 L 203 147 L 191 178 L 210 143 L 200 143 Z"
        fill={C} filter="url(#ene-glow)"
        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP}
        transition={{ delay: 0.8, duration: 0.5 }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {/* percentage text */}
      <motion.text x={cx} y={cy + 58} textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP} transition={{ delay: 1.5 }}>87%</motion.text>
      <text x={cx} y={cy + 72} textAnchor="middle" fill={C} fontSize="7" opacity="0.6" fontFamily="sans-serif" letterSpacing="2">EFFICIENCY</text>
      {/* KPI badge */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 1.2 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="308" y="25" width="76" height="40" rx="10" fill={C} fillOpacity="0.18" stroke={C} strokeOpacity="0.45" strokeWidth="1" />
          <text x="346" y="41" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">COST SAVED</text>
          <text x="346" y="58" fill={C} fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">â‚¹2.4Cr</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">OPERATIONAL EXCELLENCE</text>
    </svg>
  )
}

/* â”€â”€ 4. Technology & Vendor Advisory â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function TechIllustration() {
  const C = '#4D59B7'
  const cx = 200, cy = 148
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 - 90) * Math.PI / 180
    return { x: cx + 88 * Math.cos(a), y: cy + 88 * Math.sin(a), delay: i * 0.1 }
  })
  const nodeLabels = ['WMS', 'IoT', 'ERP', 'RFID', 'AI/ML', 'TMS']
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tec-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#030511" /><stop offset="100%" stopColor="#0e1240" /></linearGradient>
        <filter id="tec-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#tec-bg)" />
      <ellipse cx={cx} cy={cy} rx="150" ry="120" fill={C} opacity="0.05" />
      {/* connection lines with animated dots */}
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={C} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 6" />
          <motion.circle r={3} fill={C} filter="url(#tec-glow)"
            animate={{ offsetDistance: ['0%', '100%'] } as any}
            style={{ offsetPath: `path('M ${cx} ${cy} L ${n.x} ${n.y}')` } as any}
            transition={{ duration: 2 + i * 0.3, delay: i * 0.25, repeat: Infinity, ease: 'linear' }}
          />
        </g>
      ))}
      {/* satellite nodes */}
      {nodes.map((n, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP}
          transition={{ delay: 0.3 + n.delay, duration: 0.4 }} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
          <circle cx={n.x} cy={n.y} r={22} fill={C} fillOpacity="0.12" stroke={C} strokeOpacity="0.4" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">{nodeLabels[i]}</text>
        </motion.g>
      ))}
      {/* center hub */}
      <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP}
        transition={{ delay: 0.1, duration: 0.5 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <circle cx={cx} cy={cy} r={34} fill="#0d1035" stroke={C} strokeWidth="2" strokeOpacity="0.7" filter="url(#tec-glow)" />
        {/* gear icon simplified */}
        <circle cx={cx} cy={cy} r={12} fill="none" stroke={C} strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
          const rad = a * Math.PI / 180
          return <line key={a} x1={cx + 11 * Math.cos(rad)} y1={cy + 11 * Math.sin(rad)}
            x2={cx + 16 * Math.cos(rad)} y2={cy + 16 * Math.sin(rad)} stroke={C} strokeWidth="3" strokeLinecap="round" />
        })}
        <circle cx={cx} cy={cy} r={5} fill={C} />
      </motion.g>
      {/* vendor badge */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 1.0 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="15" y="22" width="78" height="40" rx="10" fill={C} fillOpacity="0.2" stroke={C} strokeOpacity="0.5" strokeWidth="1" />
          <text x="54" y="38" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">VENDORS</text>
          <text x="54" y="55" fill="#9BC74A" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">12+ VETTED</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">TECHNOLOGY ECOSYSTEM</text>
    </svg>
  )
}

/* â”€â”€ 5. GTM & Business Growth â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function GTMIllustration() {
  const C = '#9BC74A'
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gtm-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#040a04" /><stop offset="100%" stopColor="#0c1f0e" /></linearGradient>
        <filter id="gtm-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#gtm-bg)" />
      {/* globe wireframe */}
      <g opacity="0.12">
        <ellipse cx="200" cy="200" rx="140" ry="140" fill="none" stroke={C} strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="100" ry="140" fill="none" stroke={C} strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="50" ry="140" fill="none" stroke={C} strokeWidth="1" />
        {[140, 160, 180, 200, 220].map(y => {
          const dy = y - 200, rw = Math.sqrt(Math.max(0, 140 * 140 - dy * dy))
          return <ellipse key={y} cx="200" cy={y} rx={rw} ry={rw * 0.3} fill="none" stroke={C} strokeWidth="1" />
        })}
      </g>
      {/* trajectory arc */}
      <motion.path d="M 60 260 Q 160 80 320 60" fill="none" stroke={C} strokeWidth="2" strokeDasharray="6 5"
        strokeOpacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VP} transition={{ delay: 0.4, duration: 1.2 }} />
      {/* target rings at destination */}
      {[28, 20, 12].map((r, i) => (
        <motion.circle key={i} cx="320" cy="60" r={r} fill="none" stroke={C} strokeWidth="1.5"
          strokeOpacity={0.2 + i * 0.2} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VP}
          transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }} style={{ transformOrigin: '320px 60px' }} />
      ))}
      <motion.circle cx="320" cy="60" r={5} fill={C} filter="url(#gtm-glow)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VP} transition={{ delay: 1.7 }} />
      {/* rocket */}
      <motion.g initial={{ opacity: 0, x: -20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={VP}
        transition={{ delay: 0.2, duration: 0.8 }}>
        <motion.g animate={{ x: [0, 4, 0], y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <g transform="translate(176, 184) rotate(-45)">
            {/* body */}
            <rect x="-10" y="-24" width="20" height="38" rx="10" fill={C} />
            {/* nose cone */}
            <path d="M -10,-24 Q 0,-44 10,-24" fill={C} />
            {/* fins */}
            <path d="M -10,10 L -20,26 L -10,22 Z" fill={C} opacity="0.7" />
            <path d="M 10,10 L 20,26 L 10,22 Z" fill={C} opacity="0.7" />
            {/* window */}
            <circle cx="0" cy="-8" r="5" fill="#0a1a0c" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
            {/* flame */}
            <motion.path d="M -6,16 Q 0,36 6,16 Q 2,28 0,32 Q -2,28 -6,16"
              fill="#ff6600" opacity="0.9" animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1] }}
              transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '0px 16px' }} />
          </g>
        </motion.g>
      </motion.g>
      {/* flag pins */}
      {[{ x: 100, y: 180 }, { x: 260, y: 140 }, { x: 320, y: 60 }].map((p, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP}
          transition={{ delay: 1.2 + i * 0.15 }}>
          <circle cx={p.x} cy={p.y} r={5} fill={C} fillOpacity="0.3" stroke={C} strokeWidth="1.5" />
          <circle cx={p.x} cy={p.y} r={2} fill={C} filter="url(#gtm-glow)" />
        </motion.g>
      ))}
      {/* market badge */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 1.6 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="14" y="22" width="80" height="40" rx="10" fill={C} fillOpacity="0.18" stroke={C} strokeOpacity="0.5" strokeWidth="1" />
          <text x="54" y="38" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">MARKET REACH</text>
          <text x="54" y="55" fill={C} fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+3 REGIONS</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">GTM GROWTH STRATEGY</text>
    </svg>
  )
}

/* â”€â”€ 6. Sales Transformation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function SalesIllustration() {
  const C = '#CC00BE'
  const cx = 220, cy = 148
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sal-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#080009" /><stop offset="100%" stopColor="#1e0018" /></linearGradient>
        <filter id="sal-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#sal-bg)" />
      <ellipse cx={cx} cy={cy} rx="120" ry="110" fill={C} opacity="0.04" />
      {/* bullseye rings */}
      {[75, 56, 37, 18].map((r, i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={r}
          fill={i % 2 === 0 ? C : 'none'} fillOpacity={i % 2 === 0 ? 0.08 : 0}
          stroke={C} strokeWidth={i === 0 ? 1.5 : 1} strokeOpacity={0.2 + i * 0.12}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VP}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }} style={{ transformOrigin: `${cx}px ${cy}px` }} />
      ))}
      {/* center dot */}
      <motion.circle cx={cx} cy={cy} r={7} fill={C} filter="url(#sal-glow)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VP} transition={{ delay: 0.5 }}
        animate={{ scale: [1, 1.3, 1] }} />
      {/* arrow hitting bullseye */}
      <motion.g initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={VP}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        <line x1={cx - 110} y1={cy} x2={cx - 10} y2={cy} stroke={C} strokeWidth="3" strokeLinecap="round" filter="url(#sal-glow)" />
        <path d={`M ${cx - 10} ${cy - 6} L ${cx + 4} ${cy} L ${cx - 10} ${cy + 6} Z`} fill={C} filter="url(#sal-glow)" />
        <line x1={cx - 90} y1={cy - 8} x2={cx - 90} y2={cy + 8} stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1={cx - 70} y1={cy - 5} x2={cx - 70} y2={cy + 5} stroke={C} strokeWidth="1.5" strokeOpacity="0.5" />
      </motion.g>
      {/* rising bars left side */}
      {[{ h: 40, x: 60 }, { h: 65, x: 88 }, { h: 90, x: 116 }].map((b, i) => (
        <motion.rect key={i} x={b.x - 10} width={20} rx={4}
          fill={C} fillOpacity={0.25 + i * 0.15} stroke={C} strokeOpacity="0.5" strokeWidth="1"
          style={{ originX: '50%', originY: '100%' }}
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VP}
          y={220 - b.h} height={b.h}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
      ))}
      {/* trend line above bars */}
      <motion.path d="M 60 178 L 88 153 L 116 128" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round"
        filter="url(#sal-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VP}
        transition={{ delay: 0.6, duration: 0.6 }} />
      {/* revenue badge */}
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={VP} transition={{ delay: 1.0 }}>
        <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="300" y="22" width="80" height="40" rx="10" fill={C} fillOpacity="0.18" stroke={C} strokeOpacity="0.5" strokeWidth="1" />
          <text x="340" y="38" fill="white" fontSize="7" textAnchor="middle" opacity="0.55" fontFamily="sans-serif">REVENUE</text>
          <text x="340" y="55" fill={C} fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">+42%</text>
        </motion.g>
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">COMMERCIAL EXCELLENCE</text>
    </svg>
  )
}

/* â”€â”€ 7. Strategy Alignment & Profitability â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export function StrategyIllustration() {
  const C = '#4D59B7', G = '#9BC74A'
  const cx = 200, cy = 145
  const arrowDirs = [
    { x1: cx - 90, y1: cy, x2: cx - 38, y2: cy },
    { x1: cx + 90, y1: cy, x2: cx + 38, y2: cy },
    { x1: cx, y1: cy - 90, x2: cx, y2: cy - 38 },
    { x1: cx, y1: cy + 90, x2: cx, y2: cy + 38 },
  ]
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="str-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#030511" /><stop offset="100%" stopColor="#0e1240" /></linearGradient>
        <linearGradient id="str-curve" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={C} /><stop offset="100%" stopColor={G} /></linearGradient>
        <filter id="str-glow"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="400" height="300" fill="url(#str-bg)" />
      <ellipse cx={cx} cy={cy} rx="150" ry="120" fill={C} opacity="0.04" />
      {/* subtle dot grid */}
      {Array.from({ length: 6 }, (_, r) => Array.from({ length: 10 }, (_, c) => (
        <circle key={`${r}-${c}`} cx={20 + c * 40} cy={20 + r * 50} r={1} fill={C} opacity="0.1" />
      )))}
      {/* P&L curve at bottom */}
      <motion.path d="M 40 255 Q 120 230 180 210 Q 240 190 310 140 Q 340 118 370 100"
        fill="none" stroke="url(#str-curve)" strokeWidth="2.5" strokeLinecap="round"
        filter="url(#str-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VP}
        transition={{ delay: 0.4, duration: 1.4 }} />
      {/* area under curve */}
      <motion.path d="M 40 255 Q 120 230 180 210 Q 240 190 310 140 Q 340 118 370 100 L 370 270 L 40 270 Z"
        fill="url(#str-curve)" fillOpacity="0.06"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP} transition={{ delay: 0.8 }} />
      {/* dot on curve */}
      <motion.circle cx="310" cy="140" r={5} fill={G} filter="url(#str-glow)"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* alignment arrows */}
      {arrowDirs.map((a, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP}
          transition={{ delay: 0.2 + i * 0.1 }}>
          <motion.line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
            stroke={C} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 4"
            animate={{ strokeDashoffset: [0, -18] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
        </motion.g>
      ))}
      {/* center diamond */}
      <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VP}
        transition={{ delay: 0.5, duration: 0.6 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <path d={`M ${cx} ${cy - 28} L ${cx + 28} ${cy} L ${cx} ${cy + 28} L ${cx - 28} ${cy} Z`}
          fill={C} fillOpacity="0.18" stroke={C} strokeWidth="2" filter="url(#str-glow)" />
        <path d={`M ${cx} ${cy - 12} L ${cx + 12} ${cy} L ${cx} ${cy + 12} L ${cx - 12} ${cy} Z`}
          fill={C} fillOpacity="0.5" />
      </motion.g>
      <text x="200" y="292" textAnchor="middle" fill="white" fontSize="8" opacity="0.18" letterSpacing="4" fontFamily="sans-serif">STRATEGY &amp; PROFITABILITY</text>
    </svg>
  )
}

/* â”€â”€ Registry â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export const SERVICE_ILLUSTRATIONS: Record<string, React.ComponentType> = {
  'investment-advisory':  InvestmentIllustration,
  'infrastructure':       InfrastructureIllustration,
  'energy-efficiency':    EnergyIllustration,
  'technology-advisory':  TechIllustration,
  'gtm-strategy':         GTMIllustration,
  'sales-transformation': SalesIllustration,
  'business-strategy':    StrategyIllustration,
}

