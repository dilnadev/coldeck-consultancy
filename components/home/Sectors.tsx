'use client'

import { motion } from 'framer-motion'
import { SECTORS } from '@/lib/constants'

const COLORS = ['#4D59B7', '#9BC74A', '#CC00BE', '#4D59B7', '#9BC74A']

export default function Sectors() {
  const items = [...SECTORS, ...SECTORS, ...SECTORS]

  return (
    <section className="py-20 lg:py-28 bg-[#F4F6FF] overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-inner {
          animation: scroll-left 32s linear infinite;
          will-change: transform;
        }
        .marquee-outer:hover .marquee-inner {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/8 text-brand-blue text-xs font-semibold font-inter tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" /> Industries
        </span>
        <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
          Industries{' '}
          <span className="italic" style={{ color: '#9BC74A' }}>
            We Serve
          </span>
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative marquee-outer">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #F4F6FF, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #F4F6FF, transparent)' }} />

        <div className="flex marquee-inner" style={{ width: 'max-content' }}>
          {items.map((sector, i) => {
            const color = COLORS[i % COLORS.length]
            return (
              <div
                key={i}
                className="flex-shrink-0 mx-3 bg-white rounded-2xl px-7 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-default"
                style={{ borderTop: `3px solid ${color}` }}
              >
                <h3 className="font-manrope font-bold text-brand-dark text-[15px] leading-snug whitespace-nowrap">
                  {sector.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

