'use client'

import { useRef, ReactNode, MouseEvent, CSSProperties } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface RippleButtonProps extends MotionProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  rippleColor?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function RippleButton({
  children,
  className = '',
  style = {},
  rippleColor = 'rgba(255,255,255,0.30)',
  onClick,
  type = 'button',
  disabled,
  ...motionProps
}: RippleButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = ref.current
    if (!btn) return

    const rect   = btn.getBoundingClientRect()
    const x      = e.clientX - rect.left
    const y      = e.clientY - rect.top
    const size   = Math.max(rect.width, rect.height) * 2.2

    const ripple       = document.createElement('span')
    ripple.style.cssText = [
      'position:absolute',
      `left:${x - size / 2}px`,
      `top:${y - size / 2}px`,
      `width:${size}px`,
      `height:${size}px`,
      'border-radius:50%',
      `background:${rippleColor}`,
      'transform:scale(0)',
      'animation:ripple-anim 0.55s ease-out forwards',
      'pointer-events:none',
    ].join(';')

    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 650)

    onClick?.(e)
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={className}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onClick={handleClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
