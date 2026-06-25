'use client'

const SECTORS_TEXT = [
  'Pharmaceutical', 'Food & Beverage', 'Modern Retail', 'Cold Chain Logistics',
  'Q-Commerce', 'Temperature-Controlled Warehousing', 'Healthcare', 'Frozen Foods',
  'B2B Distribution', 'FMCG',
]

const track = [...SECTORS_TEXT, ...SECTORS_TEXT]

export default function TrustedBar() {
  return (
    <div className="bg-[#0a0c1a] border-y border-white/5 py-5 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10"
        style={{ background: 'linear-gradient(90deg, #4D59B7 0%, transparent 30%, transparent 70%, #CC00BE 100%)' }} />
      <div className="flex items-center justify-center mb-3">
        <span className="text-[10px] text-white/30 font-inter tracking-[0.2em] uppercase">
          Trusted by businesses across
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-4 whitespace-nowrap">
          {track.map((sector, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs font-bold font-inter text-white/80 px-4 py-2 rounded-full border border-white/10 flex-shrink-0 hover:border-brand-blue/50 hover:text-white transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
            >
              <span className="w-1 h-1 rounded-full bg-brand-blue" />
              {sector}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

