'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, #4D59B7 0%, #CC00BE 55%, #9BC74A 100%)',
        zIndex: 9998,
        boxShadow: '0 0 8px rgba(77,89,183,.5)',
      }}
    />
  )
}
