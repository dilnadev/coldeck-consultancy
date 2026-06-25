'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BarChart3, Building2, Zap, Settings2, TrendingUp, Target, Briefcase, CheckCircle2, Users, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations'
import Reveal from '@/components/ui/Reveal'

const ICONS: Record<string, React.ElementType> = { BarChart3, Building2, Zap, Settings2, TrendingUp, Target, Briefcase }

export default function ServicesExpanded() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F6FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #4D59B7 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #4D59B7, #CC00BE)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-5"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            const color = service.color
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeInUp}
                className="relative rounded-3xl border border-gray-100 overflow-hidden group bg-white"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                {/* Side accent */}
                <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-3xl"
                  style={{ background: `linear-gradient(180deg, ${color}, transparent)` }} />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${color}08, transparent 60%)` }} />

                <div className="p-8 lg:p-10 pl-10 lg:pl-12">
                  <div className="grid lg:grid-cols-12 gap-8">

                    {/* Number badge */}
                    <div className="hidden lg:flex lg:col-span-1 items-start pt-1">
                      <span className="font-manrope font-extrabold text-4xl leading-none"
                        style={{ color: `${color}30` }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Left — overview */}
                    <div className="lg:col-span-3">
                      <div className="inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: `${color}15`, border: `1px solid ${color}35` }}>
                        <Icon size={22} style={{ color }} />
                      </div>
                      <Reveal variant="fadeUp" delay={0.05}>
                        <h2 className="font-manrope font-bold text-xl text-brand-dark mb-3 leading-snug">{service.title}</h2>
                      </Reveal>
                      <Reveal variant="fadeUp" delay={0.12}>
                        <p className="font-inter text-gray-500 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                      </Reveal>
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold font-manrope text-sm transition-all duration-300"
                          style={{ background: '#4D59B7', boxShadow: '0 8px 24px rgba(77,89,183,.35)' }}
                        >
                          Book a Consultation <ArrowRight size={14} />
                        </motion.button>
                      </Link>
                    </div>

                    {/* Middle — what's included */}
                    <div className="lg:col-span-4">
                      <h3 className="font-manrope font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit"
                        style={{ color, background: `${color}12`, border: `1px solid ${color}30` }}>
                        <CheckCircle2 size={13} /> What&apos;s Included
                      </h3>
                      <ul className="space-y-2.5">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 font-inter text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right — who + outcome */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="rounded-2xl p-4"
                        style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                        <h3 className="font-manrope font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5" style={{ color }}>
                          <Users size={13} /> Who It&apos;s For
                        </h3>
                        <p className="font-inter text-sm text-gray-600">{service.whoFor}</p>
                      </div>
                      <div className="rounded-2xl p-4"
                        style={{ background: 'rgba(155,199,74,0.06)', border: '1px solid rgba(155,199,74,0.2)' }}>
                        <h3 className="font-manrope font-bold text-sm text-brand-green uppercase tracking-wider mb-2">
                          Expected Outcome
                        </h3>
                        <p className="font-inter text-sm text-gray-600">{service.outcome}</p>
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

