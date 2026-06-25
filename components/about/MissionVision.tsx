'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { viewportConfig } from '@/lib/animations'

const cards = [
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To help businesses identify hidden opportunities, overcome operational bottlenecks, and achieve sustainable growth through practical consulting, industry expertise, and outcome-driven execution.',
    gradientFrom: '#2563EB',
    gradientTo: '#22C55E',
    glowColor: 'rgba(37,99,235,0.35)',
    accentColor: 'rgba(37,99,235,0.18)',
    borderGlow: 'rgba(37,99,235,0.5)',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'To create a world where businesses see challenges not as obstacles, but as opportunities for innovation, growth, and lasting competitive advantage.',
    gradientFrom: '#22C55E',
    gradientTo: '#2563EB',
    glowColor: 'rgba(34,197,94,0.35)',
    accentColor: 'rgba(34,197,94,0.18)',
    borderGlow: 'rgba(34,197,94,0.5)',
  },
]

function FloatingOrb({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full pointer-events-none" style={style} />
}

export default function MissionVision() {
  const [shimmer, setShimmer] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(s => !s)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Deep layered background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 55%, #0F2A1A 100%)' }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Floating geometric orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-10 pointer-events-none"
      >
        <FloatingOrb style={{
          width: 140, height: 140,
          background: 'rgba(37,99,235,0.08)',
          border: '1px solid rgba(37,99,235,0.18)',
          backdropFilter: 'blur(4px)',
        }} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-20 left-1/4 pointer-events-none"
      >
        <FloatingOrb style={{
          width: 80, height: 80,
          background: 'rgba(34,197,94,0.07)',
          border: '1px solid rgba(34,197,94,0.15)',
        }} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/3 right-8 pointer-events-none"
      >
        <FloatingOrb style={{
          width: 200, height: 200,
          background: 'rgba(34,197,94,0.06)',
          border: '1px solid rgba(34,197,94,0.12)',
        }} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-10 right-16 pointer-events-none"
      >
        <FloatingOrb style={{
          width: 60, height: 60,
          background: 'rgba(37,99,235,0.10)',
          border: '1px solid rgba(37,99,235,0.20)',
        }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            animate={{ boxShadow: shimmer
              ? '0 0 0 0 rgba(34,197,94,0), 0 0 20px rgba(34,197,94,0.4)'
              : '0 0 0 4px rgba(34,197,94,0.15), 0 0 0 0 rgba(34,197,94,0)'
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-7"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" style={{ boxShadow: '0 0 8px rgba(34,197,94,0.8)' }} />
            <span className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-white/70">Our Purpose</span>
          </motion.div>

          <h2 className="font-manrope font-extrabold text-5xl sm:text-6xl text-white leading-tight">
            Mission &amp;{' '}
            <span style={{
              background: 'linear-gradient(90deg, #22C55E 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Vision
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7 lg:gap-10 items-stretch">
          {cards.map(({ icon: Icon, label, text, gradientFrom, gradientTo, glowColor, accentColor, borderGlow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '28px',
                boxShadow: '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.10)',
                transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
                cursor: 'default',
              }}
              className="relative overflow-hidden p-9 lg:p-11 group"
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: `1px solid ${borderGlow}`, boxShadow: `0 0 30px ${glowColor}, inset 0 0 30px rgba(0,0,0,0.05)` }} />

              {/* Top shimmer line */}
              <div className="absolute top-0 left-8 right-8 h-px pointer-events-none"
                style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)` }} />

              {/* Corner shimmer */}
              <div className="absolute top-0 left-0 w-48 h-32 rounded-tl-[28px] pointer-events-none opacity-30"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />

              {/* Bottom glow blob */}
              <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                style={{ background: accentColor }} />

              {/* Ripple rings */}
              <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full pointer-events-none"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }} />
              <div className="absolute bottom-4 right-4 w-14 h-14 rounded-full pointer-events-none"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                style={{
                  background: `linear-gradient(135deg, ${gradientFrom}40 0%, ${gradientTo}20 100%)`,
                  border: `1px solid ${gradientFrom}50`,
                  boxShadow: `0 8px 24px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.15)`,
                }}
              >
                <Icon size={26} style={{ color: gradientFrom, filter: `drop-shadow(0 0 8px ${gradientFrom})` }} />
              </motion.div>

              {/* Number */}
              <div className="absolute top-9 right-10 font-manrope font-extrabold text-7xl leading-none pointer-events-none select-none"
                style={{ color: 'rgba(255,255,255,0.04)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="relative z-10 font-manrope font-bold text-[28px] text-white mb-5 leading-tight">{label}</h3>

              {/* Accent divider */}
              <div className="relative z-10 w-12 h-0.5 mb-6 rounded-full"
                style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }} />

              <p className="relative z-10 font-inter text-[#E5E7EB] text-lg leading-[1.75] text-justify hyphens-auto">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
