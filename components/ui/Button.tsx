'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'filled' | 'ghost' | 'outline'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children:  ReactNode
  variant?:  Variant
  size?:     Size
  href?:     string
  onClick?:  () => void
  className?: string
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?:     ReactNode
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants: Record<Variant, string> = {
  filled:  'bg-brand-blue text-white hover:bg-brand-pink border-2 border-brand-blue hover:border-brand-pink',
  ghost:   'bg-transparent text-white border-2 border-white/60 hover:bg-white hover:text-brand-blue',
  outline: 'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white',
}

export default function Button({
  children,
  variant   = 'filled',
  size      = 'md',
  href,
  onClick,
  className = '',
  type      = 'button',
  disabled  = false,
  icon,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold font-manrope transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.04 },
    whileTap:   { scale: disabled ? 1 : 0.97 },
  }

  if (href) {
    return (
      <Link href={href}>
        <motion.span {...motionProps} className={`${base} cursor-pointer`}>
          {children}
          {icon && icon}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {children}
      {icon && icon}
    </motion.button>
  )
}

