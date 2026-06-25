'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'

export default function AboutHero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: '#060D2A' }}>
      {/* Background */}
      <div className="absolute inset-0" style={{ background: '#060D2A' }} />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #4D59B7 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(77,89,183,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 text-sm font-inter text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-brand-green">About</span>
        </motion.nav>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Real Experience.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #4D59B7, #CC00BE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Results.
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

