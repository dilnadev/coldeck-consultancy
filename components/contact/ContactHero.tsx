'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'
import Reveal from '@/components/ui/Reveal'

export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#060D2A' }}>
      <div className="absolute inset-0" style={{ background: '#060D2A' }} />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #CC00BE 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(77,89,183,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2 text-sm font-inter text-white/40 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand-green">Contact</span>
        </motion.nav>

        <Reveal variant="fadeUp" delay={0.15}>
          <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-7 max-w-3xl mx-auto">
            Let&apos;s Solve Your{' '}
            <span style={{ background: 'linear-gradient(90deg, #4D59B7, #CC00BE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Cold Chain Challenges
            </span>
          </h1>
        </Reveal>
      </div>
    </section>
  )
}

