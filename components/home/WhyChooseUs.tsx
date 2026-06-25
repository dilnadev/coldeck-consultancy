'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const ITEMS = [
  {
    num: '01',
    title: '22+ Years of Real-World Industry Experience',
    desc: 'Our recommendations are built on decades of hands-on experience across cold chain, refrigeration, logistics, pharmaceuticals, food processing, and industrial infrastructure—not just theoretical frameworks.',
  },
  {
    num: '02',
    title: 'Business-First, Not Technology-First',
    desc: 'Every recommendation is evaluated through the lens of business impact, operational practicality, risk mitigation, and long-term profitability—not just technical feasibility.',
  },
  {
    num: '03',
    title: 'Proven Ability to Identify Hidden Opportunities',
    desc: 'Some of the most valuable growth opportunities are hidden within operational challenges. Our experience in uncovering niche applications, optimizing processes, and creating new business possibilities helps clients gain a competitive advantage.',
  },
  {
    num: '04',
    title: 'Independent & Objective Advice',
    desc: 'As independent consultants, our recommendations are driven solely by what is best for your business—not by vendor affiliations, product preferences, or commission-based incentives.',
  },
  {
    num: '05',
    title: 'End-to-End Perspective',
    desc: 'We support clients throughout the journey—from opportunity assessment and investment planning to implementation, optimization, and performance improvement.',
  },
  {
    num: '06',
    title: 'De-Risking High-Value Investments',
    desc: 'Infrastructure and operational decisions can have long-term consequences. We help clients identify risks early, make informed decisions, and invest with confidence.',
  },
  {
    num: '07',
    title: 'Practical Solutions That Can Be Implemented',
    desc: 'Our focus is on actionable recommendations that work in real-world operating environments. We prioritize execution, results, and measurable impact over complex reports.',
  },
  {
    num: '08',
    title: 'Strong Industry Network & Ecosystem Knowledge',
    desc: 'Clients benefit from access to a trusted ecosystem of consultants, vendors, contractors, technology providers, and industry specialists built over decades.',
  },
  {
    num: '09',
    title: 'Cross-Industry Perspective',
    desc: 'Our experience spans multiple sectors, allowing us to transfer best practices, identify emerging opportunities, and bring fresh thinking to complex challenges.',
  },
  {
    num: '10',
    title: 'Trusted Partner During Critical Decisions',
    desc: 'Whether it is expansion, modernization, technology selection, or business growth planning, we work closely with clients to provide clarity, confidence, and support when important decisions need to be made.',
  },
  {
    num: '11',
    title: 'Outcome-Focused Engagements',
    desc: 'Success is not measured by the number of recommendations delivered. It is measured by improved performance, reduced risk, stronger profitability, and sustainable business growth.',
  },
]

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[55fr_45fr] items-stretch lg:min-h-[700px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">

        {/* LEFT — white bg */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 sm:px-10 lg:px-12 py-12 lg:py-16"
        >
          {/* Eyebrow */}
          <Reveal variant="fadeUp" delay={0}>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 0L8 4.5H13L9 7.3L10.5 12L6.5 9.2L2.5 12L4 7.3L0 4.5H5L6.5 0Z" fill="#9BC74A"/>
              </svg>
              <span className="font-inter font-semibold uppercase tracking-[.18em]" style={{ fontSize: '12px', color: '#9BC74A' }}>
                Why Choose Us
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2
              className="font-manrope font-extrabold text-brand-dark leading-[1.07] mb-4"
              style={{ fontSize: 'clamp(22px, 2.6vw, 38px)' }}
            >
              The Coldeck{' '}
              <span className="italic" style={{ color: '#9BC74A' }}>Difference</span>
            </h2>
          </Reveal>

          {/* Divider */}
          <div className="mb-1 h-px" style={{ background: 'rgba(0,0,0,.08)' }} />

          {/* Accordion */}
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.num} className="border-b" style={{ borderColor: 'rgba(0,0,0,.07)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-4 py-3 text-left"
                  style={{
                    background: isOpen ? 'rgba(77,89,183,.04)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  <span
                    className="font-manrope font-extrabold flex-shrink-0 transition-colors duration-300 leading-none"
                    style={{
                      fontSize: 'clamp(16px, 1.7vw, 24px)',
                      color: isOpen ? '#9BC74A' : 'rgba(0,0,0,.15)',
                      minWidth: '2.6ch',
                    }}
                  >
                    {item.num}
                  </span>

                  <span
                    className="flex-1 font-manrope font-semibold transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(13px, 1.1vw, 15px)',
                      color: isOpen ? '#060D2A' : 'rgba(0,0,0,.50)',
                    }}
                  >
                    {item.title}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 26,
                      height: 26,
                      background: isOpen ? '#9BC74A' : 'rgba(0,0,0,.06)',
                      border: `1px solid ${isOpen ? '#9BC74A' : 'rgba(0,0,0,.12)'}`,
                      transition: 'background 0.25s, border-color 0.25s',
                    }}
                  >
                    <Plus size={12} color={isOpen ? 'white' : '#666'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="font-inter leading-[1.7] pb-3 text-gray-500 text-justify hyphens-auto"
                        style={{ fontSize: '13px', paddingLeft: 'calc(2.6ch + 20px)' }}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* RIGHT — stacked card design */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center bg-white lg:p-[48px_110px_100px_32px]"
        >
          {/* Mobile: full image, no stacked card */}
          <div className="block lg:hidden w-full" style={{ height: '280px', position: 'relative' }}>
            <Image
              src="/images/why-choose-img.png"
              alt="Why Choose Coldeck"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>

          {/* Desktop: stacked card with blue accent */}
          <div className="relative hidden lg:block" style={{ width: '440px', height: '520px', flexShrink: 0 }}>

            {/* Blue accent block — offset bottom-right */}
            <div
              className="absolute"
              style={{
                right: '-94px',
                bottom: '-80px',
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                background: '#4D59B7',
              }}
            />

            {/* Main image card — sits above */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: '20px',
                boxShadow: '0 24px 64px rgba(0,0,0,.18)',
              }}
            >
              <Image
                src="/images/why-choose-img.png"
                alt="Why Choose Coldeck"
                fill
                className="object-cover object-top"
                sizes="440px"
              />
            </div>

          </div>
        </motion.div>

      </div>
      </div>
    </section>
  )
}
