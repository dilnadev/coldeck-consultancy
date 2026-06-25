'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import RippleButton from '@/components/ui/RippleButton'

/* ── Typewriter hook ───────────────────────────── */
function useTypewriter(text: string, speed = 45, startDelay = 800) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) { clearInterval(interval); setDone(true) }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

/* ── Ice particles ─────────────────────────────── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  dur: Math.random() * 10 + 8,
  delay: Math.random() * 6,
  opacity: Math.random() * 0.5 + 0.15,
}))

/* ── Word slide-up variants ────────────────────── */
const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
}
const wordItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], ['0%', '18%'])

  const typeText = 'Cold Chain Infrastructure'
  const { displayed, done } = useTypewriter(typeText, 48, 1200)

  const staticWords = ['Engineering', 'Reliable']

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '640px' }}
    >
      {/* Background image — Ken Burns + parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          animation: 'zoomHero 14s ease-in-out infinite alternate',
          transformOrigin: 'center center',
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(4,8,28,.92) 0%, rgba(4,8,28,.80) 40%, rgba(4,8,28,.40) 70%, rgba(4,8,28,.15) 100%)',
        }}
      />

      {/* Ice-blue frost particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: '#00BFFF',
              boxShadow: `0 0 ${p.size * 3}px rgba(0,191,255,0.6)`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [p.opacity, p.opacity * 1.8, p.opacity],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>


      {/* Hero content */}
      <div
        className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6 lg:items-start lg:text-left lg:px-16 xl:px-24 lg:ml-[5%]"
        style={{ paddingTop: '88px', maxWidth: '820px' }}
      >

        {/* Badge — fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-inter font-semibold uppercase tracking-[.14em]"
            style={{
              fontSize: '9px',
              background: 'rgba(10,14,40,.75)',
              border: '1px solid rgba(255,255,255,.12)',
              color: '#ffffff',
              backdropFilter: 'blur(12px)',
            }}
            animate={{ boxShadow: ['0 0 0 0 rgba(0,191,255,0)', '0 0 0 6px rgba(0,191,255,0.12)', '0 0 0 0 rgba(0,191,255,0)'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background: '#00BFFF', boxShadow: '0 0 8px #00BFFF' }}
            />
            Cold Chain Experts
          </motion.span>
        </motion.div>

        {/* Heading — words slide up */}
        <h1
          className="font-clash text-white leading-[1.04] mb-6"
          style={{ fontSize: 'clamp(38px, 6vw, 77px)', fontWeight: 800, letterSpacing: '-0.03em' }}
        >
          {/* Static words staggered */}
          <motion.span
            className="block"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
          >
            {staticWords.map((word, i) => (
              <motion.span key={i} variants={wordItem} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.span>

          {/* Typewriter line */}
          <span
            style={{
              background: 'linear-gradient(90deg, #00BFFF 0%, #5D7CFF 55%, #8A4DFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            {displayed}
            {!done && (
              <motion.span
                style={{ WebkitTextFillColor: '#00BFFF', opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              >|</motion.span>
            )}
          </span>
        </h1>

        {/* Subtitle — fade slide up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <p
            className="font-inter mb-1"
            style={{ fontSize: 'clamp(11px, 1.3vw, 14px)', color: 'rgba(255,255,255,.80)' }}
          >
            Designing &nbsp;&bull;&nbsp; Manufacturing &nbsp;&bull;&nbsp; Installation
          </p>
          <p
            className="font-inter"
            style={{ fontSize: 'clamp(10px, 1.0vw, 12px)', color: 'rgba(255,255,255,.45)' }}
          >
            Trusted by Pharma &nbsp;&bull;&nbsp; Food &nbsp;&bull;&nbsp; Retail &nbsp;&bull;&nbsp; Logistics
          </p>
        </motion.div>

        {/* CTA Buttons — stagger fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <Link href="/contact">
            <RippleButton
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-inter font-bold text-white rounded-full text-center"
              style={{
                fontSize: '14px',
                padding: '12px 0',
                width: '200px',
                background: '#4D59B7',
                boxShadow: '0 8px 32px rgba(77,89,183,.35)',
              }}
              animate={{ boxShadow: ['0 8px 32px rgba(77,89,183,.35)', '0 8px 40px rgba(77,89,183,.65)', '0 8px 32px rgba(77,89,183,.35)'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />
              Book Consultation
            </RippleButton>
          </Link>

          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,.14)' }}
              whileTap={{ scale: 0.97 }}
              className="font-inter font-semibold text-white rounded-full text-center"
              style={{
                fontSize: '14px',
                padding: '11px 0',
                width: '200px',
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.20)',
                backdropFilter: 'blur(12px)',
              }}
            >
              Explore Projects
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
