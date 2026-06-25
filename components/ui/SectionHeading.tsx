'use client'

import { motion } from 'framer-motion'
import { fadeInUp, viewportConfig } from '@/lib/animations'

interface SectionHeadingProps {
  eyebrow?: string
  title:    string
  accent?:  string
  subtitle?: string
  center?:  boolean
  light?:   boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  center = true,
  light  = false,
}: SectionHeadingProps) {
  const titleParts = accent ? title.split(accent) : [title]

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 font-inter ${
          light ? 'text-brand-green' : 'text-brand-blue'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-manrope font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight ${
        light ? 'text-white' : 'text-brand-dark'
      }`}>
        {accent ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{accent}</span>
            {titleParts[1]}
          </>
        ) : title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl font-inter ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

