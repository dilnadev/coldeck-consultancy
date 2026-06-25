'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight as ChevronNext } from 'lucide-react'
import { FAQS } from '@/lib/constants'
import Reveal from '@/components/ui/Reveal'

const SLIDE_SIZE = 6
const SLIDES = [FAQS.slice(0, SLIDE_SIZE), FAQS.slice(SLIDE_SIZE, SLIDE_SIZE * 2)]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 py-4 text-left group"
      >
        <span className="flex-1 font-manrope font-semibold text-sm leading-snug transition-colors duration-200"
          style={{ color: isOpen ? '#4D59B7' : '#111827' }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <ChevronDown
            size={16}
            style={{ color: isOpen ? '#4D59B7' : '#9ca3af' }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="ans"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 font-inter text-sm text-gray-500 leading-relaxed text-justify hyphens-auto">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [slide, setSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const goTo = (next: number) => {
    setDirection(next > slide ? 1 : -1)
    setSlide(next)
    setOpenIndex(null)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <Reveal variant="fadeUp" delay={0}>
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-inter font-semibold text-xs uppercase tracking-[.16em] mb-6"
              style={{
                background: 'rgba(77,89,183,.06)',
                border: '1px solid rgba(77,89,183,.18)',
                color: '#4D59B7',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              FAQ
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.12}>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark">
              Your Questions{' '}
              <span className="italic" style={{ color: '#9BC74A' }}>
                Answered
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Image + Slide container */}
        <div className="grid gap-8 items-start">

        {/* Slide container */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: '1px solid #EEF2FF',
            boxShadow: '0 4px 32px rgba(77,89,183,.07)',
          }}
        >
          {/* Slide tabs */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: '#EEF2FF', background: '#FAFBFF' }}
          >
            <div className="flex items-center gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="font-inter font-semibold text-sm px-5 py-2 rounded-full transition-all duration-300"
                  style={{
                    background: slide === i ? '#4D59B7' : 'rgba(77,89,183,.07)',
                    color: slide === i ? '#fff' : '#6B7280',
                    boxShadow: slide === i ? '0 4px 14px rgba(77,89,183,.3)' : 'none',
                  }}
                >
                  {i === 0 ? 'General' : 'Advanced'}
                </button>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(Math.max(0, slide - 1))}
                disabled={slide === 0}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ border: '1px solid #EEF2FF', background: '#fff' }}
              >
                <ChevronLeft size={15} style={{ color: '#4D59B7' }} />
              </button>
              <button
                onClick={() => goTo(Math.min(SLIDES.length - 1, slide + 1))}
                disabled={slide === SLIDES.length - 1}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ border: '1px solid #EEF2FF', background: '#fff' }}
              >
                <ChevronNext size={15} style={{ color: '#4D59B7' }} />
              </button>
            </div>
          </div>

          {/* Slides */}
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={slide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid sm:grid-cols-2 gap-0 p-6"
              >
                {/* Left column */}
                <div className="sm:pr-6 sm:border-r sm:border-gray-100">
                  {SLIDES[slide].slice(0, 3).map((faq, i) => {
                    const globalIndex = slide * SLIDE_SIZE + i
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        index={globalIndex}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => setOpenIndex(prev => prev === globalIndex ? null : globalIndex)}
                      />
                    )
                  })}
                </div>

                {/* Right column */}
                <div className="sm:pl-6 mt-4 sm:mt-0">
                  {SLIDES[slide].slice(3, 6).map((faq, i) => {
                    const globalIndex = slide * SLIDE_SIZE + i + 3
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        index={globalIndex}
                        isOpen={openIndex === globalIndex}
                        onToggle={() => setOpenIndex(prev => prev === globalIndex ? null : globalIndex)}
                      />
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 pb-5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: slide === i ? '24px' : '8px',
                  height: '8px',
                  background: slide === i
                    ? '#4D59B7'
                    : '#D1D5DB',
                }}
              />
            ))}
          </div>
        </div>

        </div>{/* end grid */}

      </div>
    </section>
  )
}
