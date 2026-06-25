'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value:       number
  suffix?:     string
  prefix?:     string
  className?:  string
  duration?:   number
  startDelay?: number
}

export default function AnimatedCounter({
  value,
  suffix     = '',
  prefix     = '',
  className  = '',
  duration   = 1800,
  startDelay = 0,
}: AnimatedCounterProps) {
  const [count, setCount]  = useState(0)
  const ref                = useRef<HTMLSpanElement>(null)
  const hasAnimated        = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const timer = setTimeout(() => {
            const start   = performance.now()
            const animate = (now: number) => {
              const elapsed  = now - start
              const progress = Math.min(elapsed / duration, 1)
              // Ease out cubic: fast start, decelerate to final value
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }, startDelay)

          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration, startDelay])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
