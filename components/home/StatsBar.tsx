'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, CheckCircle2, MapPin, Users, ArrowRight } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  {
    value: 20, suffix: '+',
    label: 'Years Experience',
    sub: 'Deep domain expertise',
    icon: Clock,
    glow: '#4D59B7',
    gradient: 'linear-gradient(135deg, #4D59B7 0%, #7B86D4 100%)',
  },
  {
    value: 200, suffix: '+',
    label: 'Projects Delivered',
    sub: 'Across India & internationally',
    icon: CheckCircle2,
    glow: '#CC00BE',
    gradient: 'linear-gradient(135deg, #CC00BE 0%, #E040FB 100%)',
  },
  {
    value: 15, suffix: '+',
    label: 'States Covered',
    sub: 'Pan India operations',
    icon: MapPin,
    glow: '#9BC74A',
    gradient: 'linear-gradient(135deg, #9BC74A 0%, #C6E76A 100%)',
  },
  {
    value: 350, suffix: '+',
    label: 'Clients Served',
    sub: 'Trusted partnerships built',
    icon: Users,
    glow: '#4D59B7',
    gradient: 'linear-gradient(135deg, #4D59B7 0%, #CC00BE 100%)',
  },
]

const BLOBS = [
  { top: '-10%', left: '-5%',  size: 400, color: 'rgba(77,89,183,.25)',  dur: 12 },
  { top: '40%',  left: '80%', size: 350, color: 'rgba(204,0,190,.18)',  dur: 15 },
  { top: '70%',  left: '20%', size: 300, color: 'rgba(155,199,74,.15)', dur: 10 },
  { top: '10%',  left: '55%', size: 260, color: 'rgba(77,89,183,.15)',  dur: 18 },
]

const PARTICLES = [
  { top: '12%', left: '8%',  delay: 0,   dur: 14 },
  { top: '35%', left: '25%', delay: 2,   dur: 11 },
  { top: '60%', left: '12%', delay: 5,   dur: 16 },
  { top: '20%', left: '65%', delay: 1.5, dur: 13 },
  { top: '75%', left: '70%', delay: 3.5, dur: 12 },
  { top: '50%', left: '88%', delay: 1,   dur: 15 },
  { top: '85%', left: '40%', delay: 4,   dur: 10 },
  { top: '8%',  left: '92%', delay: 6,   dur: 17 },
]

export default function StatsBar() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: '#060D2A' }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(77,89,183,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(77,89,183,.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Floating blobs */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: b.top, left: b.left,
            width: b.size, height: b.size,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: 'blur(70px)',
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            top: p.top, left: p.left,
            width: 3, height: 3,
            background: 'rgba(155,199,74,.6)',
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl p-6 flex flex-col items-center text-center cursor-default"
                style={{
                  background: 'rgba(255,255,255,.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,.08)',
                  boxShadow: `0 4px 24px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06)`,
                  transition: 'box-shadow 0.3s',
                }}
                onHoverStart={e => {
                  const el = e.target as HTMLElement
                  el.closest?.('.group')
                }}
              >
                {/* Glow on hover via pseudo approach using motion */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ boxShadow: `0 0 32px ${stat.glow}40, 0 0 0 1px ${stat.glow}40` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${stat.glow}18`,
                    border: `1px solid ${stat.glow}35`,
                  }}
                >
                  <Icon size={22} style={{ color: stat.glow }} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <div
                  className="font-manrope font-extrabold mb-1"
                  style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    lineHeight: 1,
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} startDelay={i * 120 + 200} />
                </div>

                {/* Label */}
                <p className="font-manrope font-semibold text-white text-sm mb-1">{stat.label}</p>
                <p className="font-inter text-xs" style={{ color: 'rgba(255,255,255,.38)' }}>{stat.sub}</p>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}

