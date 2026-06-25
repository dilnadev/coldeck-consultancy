'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { mobileMenuVariants } from '@/lib/animations'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact' },
]

const underlineVariants = {
  rest:  { scaleX: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  hover: { scaleX: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg border-b border-white/10' : ''
      }`}
      style={{ background: '#060D2A' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center w-full transition-all duration-300"
          style={{ height: scrolled ? '56px' : '96px' }}
        >

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coldeck-logo-white.svg"
              alt="Coldeck Solutions"
              style={{
                height: scrolled ? '50px' : '72px',
                width: 'auto',
                transition: 'height 0.3s ease',
              }}
            />
          </Link>

          {/* Nav + Phone + LinkedIn */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">

            {/* Nav links */}
            <nav className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    className="relative"
                    initial="rest"
                    whileHover="hover"
                    animate={isActive ? 'hover' : 'rest'}
                  >
                    <Link
                      href={link.href}
                      className={`block px-5 py-2 text-sm font-medium font-inter transition-colors duration-200 ${
                        isActive ? 'text-brand-pink' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                    <motion.span
                      variants={underlineVariants}
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: '#CC00BE',
                        originX: 0,
                      }}
                    />
                  </motion.div>
                )
              })}
            </nav>

            {/* Divider */}
            <div className="w-px h-6 bg-white/15 flex-shrink-0" />

            {/* Phone */}
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 flex-shrink-0 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-pink transition-colors duration-200">
                <Phone size={14} className="text-white" />
              </div>
              <span className="text-sm font-semibold font-inter text-white hover:text-brand-green transition-colors">
                {BRAND.phone}
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/devidaskn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-pink transition-colors duration-200 flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', zIndex: 60 }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: '#4D59B7',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1" style={{ background: '#060D2A' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium font-inter transition-colors ${
                    pathname === link.href
                      ? 'text-brand-pink bg-brand-pink/10 font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 px-4 py-2 text-xs text-white/50 font-inter"
                >
                  <Mail size={13} />
                  {BRAND.email}
                </a>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white font-inter"
                >
                  <Phone size={14} className="text-brand-green" />
                  {BRAND.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
