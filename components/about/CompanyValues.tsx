'use client'

import { motion } from 'framer-motion'
import { COMPANY_VALUES } from '@/lib/constants'
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations'

export default function CompanyValues() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3 font-inter">
              What We Stand For
            </span>
            <h2 className="font-manrope font-bold text-3xl sm:text-4xl text-brand-dark">
              Our{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #4D59B7, #9BC74A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Core Values
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {COMPANY_VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className={`bg-brand-gray rounded-3xl p-7 border border-gray-100 hover:border-brand-blue/20 hover:shadow-card transition-all duration-300 text-center lg:col-span-2${i === 3 ? ' lg:col-start-2' : ''}${i === 4 ? ' lg:col-start-4' : ''}`}
              >
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="font-manrope font-bold text-lg text-brand-dark mb-3">{value.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

