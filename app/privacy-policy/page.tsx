import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Coldeck Solutions',
  description: 'Privacy Policy for Coldeck Solutions — how we collect, use and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0D0F1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(ellipse, #4D59B7, #CC00BE)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-inter text-brand-blue text-xs font-semibold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-inter text-white/40 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none font-inter text-gray-600 text-[15px] leading-relaxed">

            <p className="text-gray-500 mb-10">
              Coldeck Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our consulting services.
            </p>

            {[
              {
                title: '1. Information We Collect',
                content: `We may collect the following types of information:

Personal Information: Name, email address, phone number, company name, and job title provided voluntarily through our contact forms, email communications, or during consulting engagements.

Usage Data: Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on each page.

Business Information: Details about your business operations, cold chain infrastructure, and challenges shared during consultations, which we treat as confidential.`,
              },
              {
                title: '2. How We Use Your Information',
                content: `We use the information we collect to:

• Respond to your enquiries and provide consulting services
• Send project-related communications and deliverables
• Improve our website and service offerings
• Send relevant industry insights or updates (with your consent)
• Comply with legal obligations
• Protect against fraud and unauthorised access

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
              },
              {
                title: '3. Legal Basis for Processing',
                content: `We process your personal data on the following legal bases:

• Contractual necessity — to perform consulting services you have engaged us for
• Legitimate interests — to improve our services and communicate relevant information
• Consent — where you have explicitly provided consent, such as for marketing communications
• Legal obligation — where required by applicable law`,
              },
              {
                title: '4. Data Sharing',
                content: `We may share your information with:

Trusted Service Providers: Third-party tools (such as email platforms or project management software) that assist us in delivering our services, bound by confidentiality agreements.

Professional Advisors: Accountants, lawyers, or auditors when required for business operations.

Legal Authorities: Where required by law, court order, or governmental authority.

We do not share client business information with competitors or unauthorised parties under any circumstances.`,
              },
              {
                title: '5. Data Retention',
                content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, including satisfying legal, accounting, or reporting requirements. Consulting engagement records are typically retained for 7 years. You may request deletion of your data at any time, subject to legal retention obligations.`,
              },
              {
                title: '6. Data Security',
                content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
              },
              {
                title: '7. Cookies',
                content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.`,
              },
              {
                title: '8. Your Rights',
                content: `Depending on your location, you may have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your personal data
• Object to or restrict our processing of your data
• Withdraw consent at any time where processing is based on consent
• Lodge a complaint with your local data protection authority

To exercise any of these rights, please contact us at knd@coldeck.com.`,
              },
              {
                title: '9. Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
              },
              {
                title: '10. Changes to This Policy',
                content: `We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last Updated" date. We encourage you to review this policy periodically. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
              },
              {
                title: '11. Contact Us',
                content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

Coldeck Solutions
Email: knd@coldeck.com
Phone: +91 9972110042`,
              },
            ].map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="font-manrope font-bold text-xl text-[#0D0F1A] mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="whitespace-pre-line text-gray-500 text-sm leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="mt-12 p-6 rounded-2xl bg-[#F4F6FF] border border-brand-blue/10">
              <p className="font-manrope font-semibold text-brand-dark text-sm mb-1">Have a question about your data?</p>
              <p className="font-inter text-gray-500 text-sm">
                Contact us at{' '}
                <a href="mailto:knd@coldeck.com" className="text-brand-blue hover:underline">knd@coldeck.com</a>
                {' '}and we will respond within 48 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

