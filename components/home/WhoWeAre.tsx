'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import RippleButton from '@/components/ui/RippleButton'
import Reveal from '@/components/ui/Reveal'

const BULLETS = [
  '20+ Years of Industry Experience',
  'Pan India & International Reach',
  'Founder-Led Project Delivery',
  'Data-Driven Cold Chain Solutions',
]

const BARS = [
  { label: 'Project Success Rate',  pct: 95 },
  { label: 'Client Retention Rate', pct: 92 },
]

function ProgressBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-inter text-sm text-gray-600">{label}</span>
        <span className="font-inter text-sm font-bold text-brand-blue">{pct}%</span>
      </div>
      <div className="h-[5px] w-full rounded-full overflow-hidden" style={{ background: '#e8ecff' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #4D59B7, #9BC74A)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function WhoWeAre() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden" style={{ background: '#F0EEE9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal variant="fadeUp" delay={0} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-inter font-semibold text-xs uppercase tracking-[.16em]"
                style={{
                  background: 'rgba(77,89,183,.06)',
                  border: '1px solid rgba(77,89,183,.18)',
                  color: '#4D59B7',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                About Us
              </span>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <h2
                className="font-manrope font-extrabold text-brand-dark leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(30px, 3.8vw, 52px)' }}
              >
                Strategy. Execution.{' '}
                <span className="italic" style={{ color: '#9BC74A' }}>
                  Results.
                </span>
              </h2>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
            <p className="font-inter text-gray-500 text-[15px] leading-[1.85] mb-8 max-w-lg text-justify hyphens-auto">
              At{' '}
              <span className="text-brand-dark font-semibold">Coldeck Cold Chain Consultancy</span>
              , we specialise in strategic, results-driven solutions &mdash; from warehousing and
              logistics to pharmaceuticals, Q-commerce, retail, and perishable goods. Led by{' '}
              <span className="text-brand-blue font-semibold">Devidas Narayanan</span> with over
              two decades of deep domain expertise.
            </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.3}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
              {BULLETS.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: '#4D59B7' }} />
                  <span className="font-inter text-sm text-gray-700 font-medium leading-snug">{b}</span>
                </div>
              ))}
            </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4}>
            <div
              className="p-6 rounded-2xl space-y-5 mb-8"
              style={{ background: '#F4F6FF', border: '1px solid #e2e8ff' }}
            >
              {BARS.map((bar) => (
                <ProgressBar key={bar.label} label={bar.label} pct={bar.pct} />
              ))}
            </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.45}>
            <Link href="/about">
              <RippleButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 font-manrope font-semibold text-sm text-white px-7 py-4 rounded-full group"
                style={{
                  background: '#4D59B7',
                  boxShadow: '0 8px 28px rgba(77,89,183,.35)',
                }}
              >
                Learn More About Us
                <motion.span
                  className="flex items-center"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </RippleButton>
            </Link>
            </Reveal>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full">
              <Image
                src="/images/about-new.png"
                alt="About Coldeck"
                width={728}
                height={780}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '780px' }}
              />

              {/* Name card */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] flex items-center gap-4 px-5 py-4 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(77,89,183,0.10)',
                }}
              >
                {/* Accent bar */}
                <div
                  className="flex-shrink-0 w-1 self-stretch rounded-full"
                  style={{ background: 'linear-gradient(180deg, #4D59B7, #CC00BE)' }}
                />
                <div>
                  <p className="font-manrope font-extrabold text-brand-dark leading-tight" style={{ fontSize: '16px' }}>
                    Devidas Narayanan
                  </p>
                  <p className="font-inter font-medium mt-0.5" style={{ fontSize: '13px', color: '#CC00BE' }}>
                    Founder &amp; Principal Consultant
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
