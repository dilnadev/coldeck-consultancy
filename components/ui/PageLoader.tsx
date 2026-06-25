'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#060D2A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all',
          }}
        >
          {/* Background blueprint grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(77,89,183,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,89,183,.06) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              pointerEvents: 'none',
            }}
          />

          {/* Ambient glow */}
          <div
            style={{
              position: 'absolute',
              width: 480,
              height: 480,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(77,89,183,.18) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coldeck-logo-white.svg"
              alt="Coldeck Solutions"
              style={{ height: '72px', width: 'auto' }}
            />
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '32px',
              width: '140px',
              height: '2px',
              borderRadius: '2px',
              background: 'rgba(255,255,255,.10)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{
                height: '100%',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #4D59B7 0%, #CC00BE 60%, #9BC74A 100%)',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.38 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: '16px',
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            Cold Chain Consultancy
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
