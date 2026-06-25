import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { NAV_LINKS, BRAND } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ background: '#060D2A' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="text-center sm:text-left">
            <div className="mb-5 inline-block rounded-xl px-4 py-2" style={{ background: 'rgba(255,255,255,0.90)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/coldeck-logo.svg" alt="Coldeck Solutions" style={{ height: '120px', width: 'auto' }} />
            </div>
            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6">
              Specialist cold chain consultancy delivering precision solutions Pan India and internationally.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/devidaskn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="font-manrope font-semibold text-sm text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-gray-400 hover:text-brand-green transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-manrope font-semibold text-sm text-white uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="flex items-center sm:items-start justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-brand-green" />
                  <span className="font-inter text-sm">{BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center sm:items-start justify-center sm:justify-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-brand-green" />
                  <span className="font-inter text-sm break-all">{BRAND.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-inter text-xs text-gray-400 leading-relaxed">
                <span className="text-brand-green font-semibold">Business Hours:</span><br/>
                Mon &ndash; Sat, 9 AM &ndash; 6 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-gray-500 text-center sm:text-left">
            © {year} Coldeck Solutions. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="font-inter text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-inter text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

