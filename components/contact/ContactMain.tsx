'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { BRAND, SERVICES } from '@/lib/constants'
import { fadeInLeft, fadeInRight, viewportConfig } from '@/lib/animations'
import { useState } from 'react'
import Link from 'next/link'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactMain() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

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
    <section className="py-20 lg:py-28 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Contact Form — 60% */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-card p-8"
          >
            <h2 className="font-manrope font-bold text-2xl text-brand-dark mb-8">Send Us a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center"
                >
                  <CheckCircle2 size={32} className="text-brand-green" />
                </motion.div>
                <h3 className="font-manrope font-bold text-2xl text-brand-dark">Message Sent!</h3>
                <p className="font-inter text-gray-500 max-w-xs">
                  Thank you for reaching out. Devidas will personally review and respond within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-brand-blue font-semibold font-inter text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input {...register('name')} placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50
                        ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Company *</label>
                    <input {...register('company')} placeholder="Your company"
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50
                        ${errors.company ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                    />
                    {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input {...register('email')} type="email" placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50
                        ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input {...register('phone')} type="tel" placeholder=""
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50
                        ${errors.phone ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Service Interested In *</label>
                    <select {...register('service')}
                      className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50 cursor-pointer
                        ${errors.service ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold font-inter text-gray-700 mb-1.5 uppercase tracking-wide">Message *</label>
                  <textarea {...register('message')} rows={5} placeholder="Tell us about your cold chain challenge, project scope, or question..."
                    className={`w-full px-4 py-3 rounded-xl border font-inter text-sm outline-none transition-all bg-brand-gray/50 resize-none
                      ${errors.message ? 'border-red-400' : 'border-gray-200 focus:border-brand-blue'}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 text-white py-4 rounded-full font-semibold font-manrope text-sm disabled:opacity-70 transition-all duration-300"
                  style={{ background: '#4D59B7', boxShadow: '0 8px 24px rgba(77,89,183,.35)' }}
                >
                  {isSubmitting ? (
                    <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>Sending...</>
                  ) : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right — info */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact card */}
            <div className="rounded-3xl p-7 text-white" style={{ background: 'linear-gradient(135deg, #4D59B7 0%, #CC00BE 100%)' }}>
              <h3 className="font-manrope font-bold text-xl mb-6">Contact Details</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone',    value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g,'')}` },
                  { icon: Mail,  label: 'Email',    value: BRAND.email, href: `mailto:${BRAND.email}` },
                  { icon: MapPin,label: 'Coverage', value: 'Pan India & International', href: undefined },
                  { icon: Clock, label: 'Hours',    value: 'Mon–Sat, 9 AM – 6 PM IST', href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-brand-green" />
                    </div>
                    <div>
                      <div className="text-xs font-inter text-gray-400 uppercase tracking-wider">{label}</div>
                      {href ? (
                        <a href={href} className="font-inter text-sm text-white hover:text-brand-green transition-colors">{value}</a>
                      ) : (
                        <div className="font-inter text-sm text-white">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={28} className="text-brand-blue mx-auto mb-2" />
                <p className="font-inter text-sm text-gray-500">India Â· Pan India &amp; International</p>
                <p className="font-inter text-xs text-gray-400 mt-1">Serving all major markets</p>
              </div>
            </div>


            {/* FAQ teaser */}
            <div className="bg-brand-gray rounded-2xl p-5 border border-gray-100">
              <h4 className="font-manrope font-semibold text-sm text-brand-dark mb-2">Have Questions?</h4>

              <Link href="/#faq" className="text-brand-blue text-xs font-semibold font-inter hover:underline flex items-center gap-1">
                View FAQ <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

