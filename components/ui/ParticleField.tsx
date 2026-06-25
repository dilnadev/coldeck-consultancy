'use client'

const PARTICLES = [
  // [left%, top%, size, particleClass, delay]
  ['8%',  '15%', 22, 'particle-1',  '0s'],
  ['18%', '70%', 16, 'particle-2',  '3s'],
  ['28%', '35%', 28, 'particle-3',  '7s'],
  ['42%', '80%', 12, 'particle-4',  '1s'],
  ['55%', '20%', 20, 'particle-5',  '5s'],
  ['65%', '55%', 24, 'particle-6',  '9s'],
  ['75%', '10%', 14, 'particle-7',  '2s'],
  ['85%', '75%', 18, 'particle-8',  '6s'],
  ['92%', '40%', 26, 'particle-9',  '4s'],
  ['12%', '50%', 10, 'particle-10', '8s'],
  ['35%', '90%', 20, 'particle-11', '3s'],
  ['48%', '45%', 16, 'particle-12', '11s'],
  ['60%', '85%', 22, 'particle-13', '1s'],
  ['72%', '25%', 14, 'particle-14', '6s'],
  ['82%', '60%', 28, 'particle-15', '10s'],
  ['5%',  '88%', 18, 'particle-16', '4s'],
  ['22%', '12%', 12, 'particle-17', '8s'],
  ['95%', '18%', 20, 'particle-18', '2s'],
  ['50%', '65%', 16, 'particle-19', '7s'],
  ['38%', '5%',  24, 'particle-20', '5s'],
] as const

type ParticleShape = 'snowflake' | 'hex' | 'diamond'

function SnowflakeSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="2"  x2="12" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2"  y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5"  y1="5"  x2="19" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="5"  x2="5"  y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill={color}/>
      <circle cx="12" cy="5"  r="1" fill={color}/>
      <circle cx="12" cy="19" r="1" fill={color}/>
      <circle cx="5"  cy="12" r="1" fill={color}/>
      <circle cx="19" cy="12" r="1" fill={color}/>
    </svg>
  )
}

function HexSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 22,7 22,17 12,22 2,17 2,7"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DiamondSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 22,12 12,22 2,12"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SHAPES: ParticleShape[] = ['snowflake', 'hex', 'diamond']
const COLORS = ['#4D59B7', '#9BC74A', '#CC00BE', '#ffffff']

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {PARTICLES.map(([left, top, size, cls, delay], i) => {
        const shape = SHAPES[i % 3]
        const color = COLORS[i % 4]
        return (
          <div
            key={i}
            className={`particle ${cls}`}
            style={{ left, top, animationDelay: delay }}
          >
            {shape === 'snowflake' && <SnowflakeSVG size={size} color={color} />}
            {shape === 'hex'       && <HexSVG size={size} color={color} />}
            {shape === 'diamond'   && <DiamondSVG size={size} color={color} />}
          </div>
        )
      })}
    </div>
  )
}

