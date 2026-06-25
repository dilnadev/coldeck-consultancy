'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SECTORS } from '@/lib/constants'
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations'

const SECTOR_GRADIENTS = [
  'from-[#1a2060] to-[#2d3a8c]',
  'from-[#0f2010] to-[#1a4020]',
  'from-[#0a1520] to-[#0d2535]',
  'from-[#0d0f1a] to-[#1a2060]',
  'from-[#1f0d30] to-[#3d1a60]',
  'from-[#150a20] to-[#2d1a50]',
  'from-[#0d1520] to-[#1a2535]',
]

const SECTOR_DETAILS: Record<string, { challenges: string[]; solutions: string[] }> = {
  pharma: {
    challenges: ['GDP compliance across the entire chain', 'Temperature excursion management', 'Documentation & audit readiness', 'Cold chain failure during last-mile delivery'],
    solutions:  ['GDP-compliant cold chain design', 'Qualified cold room & transport specs', 'SOP development & staff training', 'IoT monitoring advisory'],
  },
  'food-processing': {
    challenges: ['Product quality & shelf-life consistency', 'FSSAI & food safety compliance', 'Energy cost in refrigerated production', 'Seasonal production volume management'],
    solutions:  ['Cold chain process optimisation', 'HACCP integration advisory', 'Energy-efficient refrigeration design', 'Regulatory compliance roadmap'],
  },
  dairy: {
    challenges: ['Strict temperature sensitivity across SKUs', 'High energy consumption in processing', 'Distribution cold chain reliability', 'Blast freezing & hardening requirements'],
    solutions:  ['Specialised refrigeration system design', 'Energy efficiency improvement programmes', 'Cold storage & distribution optimisation', 'Blast freezer & cold room advisory'],
  },
  logistics: {
    challenges: ['Multi-temperature storage complexity', 'Facility utilisation & throughput', 'Compliance & certification requirements', 'Technology & automation readiness'],
    solutions:  ['3PL facility design & layout optimisation', 'Multi-client zoning strategies', 'BRC, GDP & FSSAI compliance support', 'WMS & automation advisory'],
  },
  retail: {
    challenges: ['Refrigeration efficiency in-store', 'Last-mile cold chain reliability', 'Supplier cold chain standards', 'Energy & maintenance costs'],
    solutions:  ['Retail cold chain audit & redesign', 'Supplier cold chain standards development', 'Energy benchmarking & reduction plans', 'Last-mile cold chain optimisation'],
  },
  hospitality: {
    challenges: ['Commercial kitchen refrigeration sizing', 'Energy cost management', 'Food safety & HACCP compliance', 'Equipment selection & vendor management'],
    solutions:  ['Commercial refrigeration layout design', 'Energy-efficient equipment advisory', 'HACCP process integration support', 'Vendor evaluation & procurement guidance'],
  },
  industrial: {
    challenges: ['Large-scale refrigeration system design', 'Process cooling requirements', 'Energy & utility cost optimisation', 'Compliance & safety standards'],
    solutions:  ['Industrial refrigeration system advisory', 'Process cooling design & optimisation', 'Energy efficiency & cost reduction programmes', 'Compliance & safety framework support'],
  },
}

export default function SectorsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-8"
        >
          {SECTORS.map((sector, i) => {
            const details = SECTOR_DETAILS[sector.id]
            return (
              <motion.div
                key={sector.id}
                variants={fadeInUp}
                id={sector.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card"
              >
                <div className="grid lg:grid-cols-4">
                  {/* Left — gradient panel */}
                  <div className={`bg-gradient-to-br ${SECTOR_GRADIENTS[i]} p-8 flex flex-col justify-between`}>
                    <div>
                      <span className="text-5xl block mb-4">{sector.icon}</span>
                      <h2 className="font-manrope font-bold text-xl text-white">{sector.title}</h2>
                    </div>
                  </div>

                  {/* Right — details */}
                  <div className="lg:col-span-3 p-8">
                    <p className="font-inter text-gray-600 mb-6 leading-relaxed">{sector.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-manrope font-semibold text-sm text-red-500 uppercase tracking-wider mb-3">
                          Common Challenges
                        </h3>
                        <ul className="space-y-2">
                          {details.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2 font-inter text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-manrope font-semibold text-sm text-brand-green uppercase tracking-wider mb-3">
                          How We Help
                        </h3>
                        <ul className="space-y-2">
                          {details.solutions.map((s) => (
                            <li key={s} className="flex items-start gap-2 font-inter text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

