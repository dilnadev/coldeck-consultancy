'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted]   = useState(false)
  const [visible, setVisible]   = useState(false)
  const [isTouch, setIsTouch]   = useState(false)

  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  // Dot: snaps to cursor precisely
  const dotX = useSpring(rawX, { stiffness: 700, damping: 40 })
  const dotY = useSpring(rawY, { stiffness: 700, damping: 40 })

  // Crystal: lags behind with a spring
  const crystalX = useSpring(rawX, { stiffness: 72, damping: 16 })
  const crystalY = useSpring(rawY, { stiffness: 72, damping: 16 })

  useEffect(() => {
    setMounted(true)

    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true)
      return
    }

    document.body.classList.add('custom-cursor')

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [rawX, rawY])

  if (!mounted || isTouch) return null

  return (
    <>
      {/* Precise blue dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#00BFFF',
          boxShadow: '0 0 10px rgba(0,191,255,.9), 0 0 20px rgba(0,191,255,.35)',
          zIndex: 99999,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s',
        }}
      />

      {/* Lagged ice crystal — slow spin */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: crystalX,
          y: crystalY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 99998,
          pointerEvents: 'none',
          opacity: visible ? 0.9 : 0,
          transition: 'opacity 0.2s',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main axes */}
          <line x1="12" y1="2"  x2="12" y2="22" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="2"  y1="12" x2="22" y2="12" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="4.93" y1="4.93"   x2="19.07" y2="19.07" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="19.07" y1="4.93"  x2="4.93"  y2="19.07" stroke="#00BFFF" strokeWidth="1.4" strokeLinecap="round"/>
          {/* Top branches */}
          <line x1="12" y1="5.5" x2="9.5"  y2="3"   stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="5.5" x2="14.5" y2="3"   stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Bottom branches */}
          <line x1="12" y1="18.5" x2="9.5"  y2="21" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="18.5" x2="14.5" y2="21" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Left branches */}
          <line x1="5.5" y1="12" x2="3"   y2="9.5"  stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="5.5" y1="12" x2="3"   y2="14.5" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Right branches */}
          <line x1="18.5" y1="12" x2="21" y2="9.5"  stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="18.5" y1="12" x2="21" y2="14.5" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Center dot */}
          <circle cx="12" cy="12" r="1.5" fill="#00BFFF"/>
        </svg>
      </motion.div>
    </>
  )
}
