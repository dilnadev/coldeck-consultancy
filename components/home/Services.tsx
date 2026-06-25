'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import RippleButton from '@/components/ui/RippleButton'
import Reveal from '@/components/ui/Reveal'

const CARDS = [
  {
    id: 'investment-advisory',
    tag: 'Advisory',
    title: 'Investment & Expansion Advisory',
    desc: 'Helping businesses make informed infrastructure and temperature-controlled supply chain investment decisions before capital is committed.',
    image: '/images/servicecard1.png',
    color: '#4D59B7',
    glow: 'rgba(77,89,183,.5)',
  },
  {
    id: 'gtm-strategy',
    tag: 'Strategy',
    title: 'Business Growth & Go-To-Market Strategy',
    desc: 'Helping businesses identify new growth opportunities, strengthen commercial capabilities, and accelerate market expansion.',
    image: '/images/servicecard22.png',
    color: '#CC00BE',
    glow: 'rgba(204,0,190,.5)',
  },
  {
    id: 'infrastructure',
    tag: 'Infrastructure',
    title: 'Cold Chain Infrastructure Consulting',
    desc: 'Designing and optimizing temperature-controlled facilities that deliver operational reliability, scalability, and long-term value.',
    image: '/images/about-cold-storage.jpg',
    color: '#9BC74A',
    glow: 'rgba(155,199,74,.5)',
  },
]

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Reveal variant="fadeUp" delay={0}>
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-inter font-semibold text-xs uppercase tracking-[.16em]"
              style={{
                background: 'rgba(77,89,183,.06)',
                border: '1px solid rgba(77,89,183,.18)',
                color: '#4D59B7',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              What We Do
            </span>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.12}>
            <h2
              className="font-manrope font-extrabold text-brand-dark leading-[1.1] mb-6 mx-auto"
              style={{ fontSize: 'clamp(30px, 4vw, 54px)', maxWidth: '820px' }}
            >
              Expert Advisory.{' '}
              <span className="italic" style={{ color: '#9BC74A' }}>Real Outcomes.</span>
            </h2>
          </Reveal>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <ServiceCard key={card.id} card={card} i={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link href="/services">
            <RippleButton
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-inter font-semibold text-white"
              style={{
                fontSize: '15px',
                background: '#4D59B7',
                boxShadow: '0 8px 28px rgba(77,89,183,.35)',
              }}
              rippleColor="rgba(255,255,255,0.25)"
            >
              Explore All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center"
              >
                <ArrowRight size={16} />
              </motion.span>
            </RippleButton>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

function ServiceCard({ card, i }: { card: typeof CARDS[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.72, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden flex flex-col"
      style={{
        borderRadius: '20px',
        height: '520px',
        border: `1px solid ${hovered ? card.color + '55' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 0 40px ${card.glow}` : '0 4px 24px rgba(0,0,0,.3)',
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <div style={{
          position: 'absolute', inset: 0,
          transition: 'transform 0.6s cubic-bezier(.22,1,.36,1)',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
        }}>
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Blue gradient overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(29,53,135,0.00) 0%, rgba(29,53,135,0.25) 45%, rgba(15,23,66,0.62) 100%)' }}
        />
      </div>

      {/* Tag — top left */}
      <div className="relative z-10 p-6">
        <span
          className="font-inter font-semibold text-white px-3.5 py-1.5 rounded-full"
          style={{
            fontSize: '10.5px',
            letterSpacing: '.13em',
            textTransform: 'uppercase',
            background: card.color,
            boxShadow: `0 4px 14px ${card.glow}`,
          }}
        >
          {card.tag}
        </span>
      </div>

      {/* White content panel — floats over image at bottom */}
      <div className="relative z-10 mt-auto mx-4 mb-4 rounded-xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        }}
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full" style={{ background: card.color }} />

        <div className="px-4 py-3.5">
          <h3
            className="font-manrope font-bold text-brand-dark leading-snug mb-1.5"
            style={{ fontSize: '15px' }}
          >
            {card.title}
          </h3>
          <p
            className="font-inter leading-[1.65] mb-3 text-justify hyphens-auto"
            style={{ fontSize: '12.5px', color: '#6B7280' }}
          >
            {card.desc}
          </p>
          <Link
            href={`/services#${card.id}`}
            className="inline-flex items-center gap-1.5 font-inter font-semibold"
            style={{ fontSize: '12.5px', color: card.color }}
          >
            Learn More
            <span style={{
              display: 'flex', alignItems: 'center',
              transition: 'transform 0.3s ease',
              transform: hovered ? 'translateX(5px)' : 'translateX(0)',
            }}>
              <ArrowRight size={12} />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
