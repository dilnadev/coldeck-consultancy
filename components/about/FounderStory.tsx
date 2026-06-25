'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'

const BADGES = [
  { value: '20+',  label: 'Years',       color: '#4D59B7', glow: 'rgba(77,89,183,.25)',  pos: 'top-6 -left-10'      },
  { value: '200+', label: 'Projects',    color: '#CC00BE', glow: 'rgba(204,0,190,.22)',  pos: 'bottom-24 -left-12'  },
  { value: '15+',  label: 'States',      color: '#9BC74A', glow: 'rgba(155,199,74,.22)', pos: 'top-20 -right-10'    },
  { value: '98%',  label: 'Satisfaction',color: '#4D59B7', glow: 'rgba(77,89,183,.25)',  pos: 'bottom-10 -right-8'  },
]

const BLOBS = [
  { top: '-10%', left: '-8%',  size: 500, color: 'rgba(77,89,183,.07)',  dur: 16 },
  { top: '55%',  left: '65%',  size: 420, color: 'rgba(204,0,190,.055)', dur: 20 },
  { top: '30%',  left: '40%',  size: 350, color: 'rgba(77,89,183,.04)',  dur: 14 },
]

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]),  { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]),  { stiffness: 180, damping: 22 })
  const glareX  = useTransform(x, [-0.5, 0.5], ['0%', '100%'])
  const glareY  = useTransform(y, [-0.5, 0.5], ['0%', '100%'])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width  - 0.5)
    y.set((e.clientY - rect.top)  / rect.height - 0.5)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}
      className="relative w-full max-w-[360px] mx-auto" style={{ perspective: '1200px' }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative">

        {/* Outer glow */}
        <div className="absolute -inset-6 rounded-[32px] opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg, #4D59B7, #CC00BE)' }} />

        {/* Card */}
        <div className="relative rounded-[28px] overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #f4f6ff 0%, #ffffff 100%)',
            boxShadow: '0 32px 80px rgba(77,89,183,.14), 0 0 0 1px rgba(77,89,183,.08)',
          }}>

          <div className="relative w-full" style={{ height: '500px' }}>
            <Image src="/images/founder-photo.png" alt="Devidas Narayanan — Founder"
              fill sizes="400px" quality={100} priority
              className="object-contain object-top"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>

          {/* Glare */}
          <motion.div className="absolute inset-0 pointer-events-none rounded-[28px]"
            style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,.55) 0%, transparent 60%)` }}
          />

          {/* Name plate */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
            style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 60%, transparent 100%)' }}>
            <p className="font-manrope font-bold text-lg" style={{ color: '#060D2A' }}>Devidas Narayanan</p>
            <p className="font-inter text-sm font-semibold mt-0.5" style={{ color: '#CC00BE' }}>Founder &amp; Principal Consultant</p>
            <p className="font-inter text-xs font-medium mt-0.5" style={{ color: '#6B7280' }}>{BRAND.phone}</p>
          </div>
        </div>

        {/* Floating badges */}
        {BADGES.map((b, i) => (
          <motion.div key={b.label} className={`absolute ${b.pos} z-20`}
            style={{ transform: 'translateZ(50px)' }}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.25 } }}
          >
            <div className="flex flex-col items-center justify-center w-[76px] h-[76px] rounded-2xl bg-white"
              style={{
                boxShadow: `0 8px 28px ${b.glow}, 0 0 0 1px ${b.color}20`,
                border: `1px solid ${b.color}22`,
              }}>
              <span className="font-manrope font-extrabold text-xl leading-none" style={{ color: b.color }}>{b.value}</span>
              <span className="font-inter text-[10px] text-gray-400 mt-0.5 tracking-wide">{b.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function FounderStory() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36" style={{ background: '#F8FAFC' }}>

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(77,89,183,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(77,89,183,.028) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Floating blobs */}
      {BLOBS.map((b, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ top: b.top, left: b.left, width: b.size, height: b.size,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`, filter: 'blur(90px)' }}
          animate={{ x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── SECTION 1: Two-column intro ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

          {/* LEFT — portrait */}
          <motion.div
            initial={{ opacity: 0, x: -56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="px-14 lg:px-10"
          >
            <TiltCard />
          </motion.div>

          {/* RIGHT — story */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <Reveal variant="fadeUp" delay={0}>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-8 rounded-full" style={{ background: '#CC00BE' }} />
                <span className="font-inter font-semibold text-xs tracking-[.18em] uppercase" style={{ color: '#CC00BE' }}>
                  Founder Story
                </span>
              </div>
            </Reveal>

            {/* Divider */}
            <div className="h-px mb-7 rounded-full w-16"
              style={{ background: 'linear-gradient(90deg, #4D59B7, #CC00BE)' }} />

            {/* Opening statement */}
            <Reveal variant="fadeUp" delay={0.1}>
              <p className="font-manrope font-bold mb-8 leading-[1.65]"
                style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', color: '#060D2A' }}>
                The best consultants don&apos;t just provide advice — they help businesses make better decisions.
              </p>
            </Reveal>

            {/* Story paragraphs */}
            <Reveal variant="fadeUp" delay={0.2}>
            <div className="space-y-5 mb-8">
              <p className="font-inter leading-[1.85] text-justify hyphens-auto" style={{ fontSize: '16px', color: '#4B5563' }}>
                For over 25 years, I have worked with startups, SMEs, and enterprises across cold chain,
                pharmaceuticals, food processing, logistics, and temperature-controlled industries, helping
                them overcome operational challenges, de-risk investments, improve performance, and unlock
                new growth opportunities.
              </p>
              <p className="font-inter leading-[1.85] text-justify hyphens-auto" style={{ fontSize: '16px', color: '#4B5563' }}>
                I believe every major investment, operational challenge, or expansion decision deserves
                more than a technical solution. It requires practical experience, commercial understanding,
                and a partner who is committed to protecting the client&apos;s interests.
              </p>
              <p className="font-inter leading-[1.85] text-justify hyphens-auto" style={{ fontSize: '16px', color: '#4B5563' }}>
                Through Coldeck Consulting, I help businesses make confident decisions, avoid costly
                mistakes, optimize operations, and build scalable, profitable businesses.
              </p>
            </div>
            </Reveal>

            {/* Closing quote + signature */}
            <Reveal variant="fadeUp" delay={0.25}>
            <div className="mb-10 pl-5 border-l-2" style={{ borderColor: '#4D59B7' }}>
              <p className="font-manrope font-semibold italic leading-relaxed mb-3"
                style={{ fontSize: '15px', color: '#4D59B7' }}>
                &ldquo;Helping clients see opportunities where others see obstacles.&rdquo;
              </p>
              <p className="font-manrope font-bold text-sm" style={{ color: '#060D2A' }}>
                &mdash; Devidas Narayanan
              </p>
              <p className="font-inter text-xs font-medium mt-0.5" style={{ color: '#CC00BE' }}>
                Founder &amp; Principal Consultant
              </p>
            </div>
            </Reveal>

            {/* CTAs */}
            <Reveal variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(77,89,183,.40)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 font-inter font-semibold text-sm text-white rounded-full px-7 py-3.5"
                  style={{ background: '#4D59B7', boxShadow: '0 8px 24px rgba(77,89,183,.30)' }}
                >
                  Schedule a Consultation <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ y: -3, borderColor: '#4D59B7', color: '#4D59B7' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 font-inter font-semibold text-sm rounded-full px-7 py-3.5 transition-colors duration-300"
                  style={{ border: '1.5px solid #D1D5DB', color: '#374151', background: 'white' }}
                >
                  View Our Projects <ArrowRight size={15} />
                </motion.button>
              </Link>
            </div>
            </Reveal>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
