'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Variant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight'

interface RevealProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
  slideRight:{ hidden: { opacity: 0, x: 36 },  visible: { opacity: 1, x: 0 } },
}

export default function Reveal({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  duration  = 0.65,
  className = '',
  as        = 'div',
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
