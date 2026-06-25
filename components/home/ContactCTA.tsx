'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
import RippleButton from '@/components/ui/RippleButton'
import { BRAND, SERVICES } from '@/lib/constants'
import { fadeInLeft, fadeInRight, viewportConfig } from '@/lib/animations'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputClass = (error: boolean) =>
  `w-full px-4 py-3 rounded-xl font-inter text-sm outline-none transition-all duration-200 text-white placeholder-white/30 border ${
    error ? 'border-red-400/60 bg-red-400/5' : 'border-white/10 bg-white/5 focus:border-brand-blue focus:bg-brand-blue/5'
  }`

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `New Enquiry from ${data.name} — Coldeck Solutions`,
        from_name: 'Coldeck Website',
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        botcheck: '',
      }),
    })
    const json = await res.json()
    if (json.success) {
      setSubmitted(true)
      reset()
    } else {
      alert('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[#080a14] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #4D59B7, #CC00BE)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-blue text-xs font-semibold font-inter tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" /> Get In Touch
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Start Your{' '}
            <span style={{ background: 'linear-gradient(90deg,#4D59B7,#CC00BE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Cold Chain Journey
            </span>
          </h2>
          <p className="mt-4 font-inter text-white/40 max-w-xl mx-auto text-sm">
            Book a free 30-minute consultation. We will understand your challenge and respond within 48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Form */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="lg:col-span-3 rounded-3xl border border-white/10 p-8"
            style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', boxShadow: '0 0 60px rgba(77,89,183,0.1)' }}>

            {/* Top accent */}
            <div className="absolute top-0 left-8 right-8 h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #4D59B7, #CC00BE, transparent)' }} />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(155,199,74,0.15)', border: '1px solid rgba(155,199,74,0.3)' }}>
                  <CheckCircle2 size={32} className="text-brand-green" />
                </motion.div>
                <h3 className="font-manrope font-bold text-2xl text-white">Message Sent!</h3>
                <p className="font-inter text-white/50 max-w-xs text-sm">Thank you for reaching out. We will get back to you within 48 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 text-brand-blue font-semibold font-inter text-sm hover:text-brand-pink transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input {...register('name')} placeholder="Your name" className={inputClass(!!errors.name)} />
                    {errors.name && <p className="text-xs text-red-400 mt-1 font-inter">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Company *</label>
                    <input {...register('company')} placeholder="Your company" className={inputClass(!!errors.company)} />
                    {errors.company && <p className="text-xs text-red-400 mt-1 font-inter">{errors.company.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input {...register('email')} type="email" placeholder="your@email.com" className={inputClass(!!errors.email)} />
                    {errors.email && <p className="text-xs text-red-400 mt-1 font-inter">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input {...register('phone')} type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass(!!errors.phone)} />
                    {errors.phone && <p className="text-xs text-red-400 mt-1 font-inter">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Service Interested In *</label>
                  <select {...register('service')} className={`${inputClass(!!errors.service)} cursor-pointer`} style={{ colorScheme: 'dark' }}>
                    <option value="" className="bg-[#0D0F1A]">Select a service...</option>
                    {SERVICES.map((s) => <option key={s.id} value={s.id} className="bg-[#0D0F1A]">{s.title}</option>)}
                    <option value="other" className="bg-[#0D0F1A]">Other / Not Sure</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-400 mt-1 font-inter">{errors.service.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold font-inter text-white/50 mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea {...register('message')} rows={4} placeholder="Tell us about your cold chain challenge..."
                    className={`${inputClass(!!errors.message)} resize-none`} />
                  {errors.message && <p className="text-xs text-red-400 mt-1 font-inter">{errors.message.message}</p>}
                </div>
                <RippleButton type="submit" disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold font-manrope text-sm text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  style={{ background: '#4D59B7', boxShadow: '0 8px 24px rgba(77,89,183,.35)' }}>
                  {isSubmitting ? (
                    <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                  ) : (
                    <>Send Message <motion.span className="flex items-center" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><ArrowRight size={16} /></motion.span></>
                  )}
                </RippleButton>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}
            className="lg:col-span-2 space-y-4 hidden lg:block">

            {/* Gradient card */}
            <div className="rounded-3xl p-7 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#4D59B7 0%,#CC00BE 100%)', boxShadow: '0 20px 60px rgba(77,89,183,0.3)' }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                style={{ background: '#CC00BE' }} />
              <h3 className="font-manrope font-bold text-xl mb-2 relative z-10">Let&apos;s Talk Cold Chain</h3>
              <p className="font-inter text-white/70 text-sm mb-6 relative z-10">
                Available Mon–Sat, 9 AM – 6 PM IST. Typically respond within 4 hours.
              </p>
              <div className="space-y-4 relative z-10">
                {[
                  { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g,'')}` },
                  { icon: Mail,  label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
                  { icon: MapPin, label: 'Coverage', value: 'Pan India & International', href: null },
                ].map(({ icon: Icon, label, value, href }) => {
                  const El = href ? 'a' : 'div'
                  return (
                    <El key={label} {...(href ? { href } : {})} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] font-inter text-white/50 uppercase tracking-wider">{label}</div>
                        <div className="font-inter font-medium text-sm">{value}</div>
                      </div>
                    </El>
                  )
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

