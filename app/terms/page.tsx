import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Coldeck Solutions',
  description: 'Terms and Conditions governing the use of Coldeck Solutions website and consulting services.',
}

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="font-inter text-white/40 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none font-inter text-gray-600 text-[15px] leading-relaxed">

            <p className="text-gray-500 mb-10">
              These Terms and Conditions ("Terms") govern your use of the Coldeck Solutions website (coldeck.com) and any consulting services provided by Coldeck Solutions ("we", "us", or "our"). By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            {[
              {
                title: '1. Acceptance of Terms',
                content: `By accessing or using our website, you confirm that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you are accessing our services on behalf of a company or organisation, you represent that you have the authority to bind that entity to these Terms.`,
              },
              {
                title: '2. Consulting Services',
                content: `Coldeck Solutions provides B2B management consulting services in the cold chain, logistics, and related industries. All consulting engagements are governed by a separate engagement letter or service agreement that specifies the scope, deliverables, timeline, and commercial terms.

These Terms apply to your use of our website and general interactions. Specific consulting engagements are governed by the individual service agreements executed between the parties.`,
              },
              {
                title: '3. Intellectual Property',
                content: `All content on this website — including text, graphics, logos, illustrations, and reports — is the intellectual property of Coldeck Solutions and is protected by applicable copyright and trademark laws.

Consulting deliverables (reports, frameworks, strategies) produced for clients are subject to the intellectual property provisions of the relevant engagement agreement. Unless otherwise agreed in writing, Coldeck Solutions retains ownership of methodologies, frameworks, and tools, while clients receive a licence to use deliverables for their internal business purposes.`,
              },
              {
                title: '4. Confidentiality',
                content: `Any business information, data, or insights shared during consultations or engagements will be treated as strictly confidential. We will not disclose client information to any third party without prior written consent, except where required by law.

Clients are similarly expected to treat any proprietary methodologies, frameworks, or intellectual property shared by Coldeck Solutions as confidential.`,
              },
              {
                title: '5. Website Use',
                content: `You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

• Attempt to gain unauthorised access to any part of our website or systems
• Transmit any harmful, offensive, or disruptive content
• Use our website to collect information about other users
• Reproduce, duplicate, or resell any part of our website content without written permission
• Introduce any malicious code, virus, or other harmful material`,
              },
              {
                title: '6. Disclaimers',
                content: `Our website content is provided for general information purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.

Consulting insights and recommendations are based on information provided by clients and available market data. Outcomes are not guaranteed, and Coldeck Solutions is not liable for business decisions made based on our recommendations.`,
              },
              {
                title: '7. Limitation of Liability',
                content: `To the maximum extent permitted by applicable law, Coldeck Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunities, arising from your use of our website or services.

Our total liability in connection with any consulting engagement shall not exceed the fees paid by the client for that specific engagement.`,
              },
              {
                title: '8. Payment Terms',
                content: `Payment terms for consulting services will be specified in the individual engagement agreement. Unless otherwise agreed, invoices are due within 30 days of issue. Late payments may attract interest at the rate specified in the engagement agreement.

We reserve the right to suspend or terminate services for accounts with outstanding overdue payments after providing reasonable notice.`,
              },
              {
                title: '9. Termination',
                content: `Either party may terminate a consulting engagement by providing written notice as specified in the engagement agreement. Upon termination, fees for work completed up to the termination date are payable.

We reserve the right to terminate access to our website or services for users who violate these Terms without notice.`,
              },
              {
                title: '10. Third-Party Links',
                content: `Our website may contain links to third-party websites for your convenience. These links do not constitute endorsement of those sites. We have no control over the content or practices of third-party sites and accept no responsibility for them.`,
              },
              {
                title: '11. Governing Law',
                content: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.`,
              },
              {
                title: '12. Changes to Terms',
                content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Your continued use of our website after any changes constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
              },
              {
                title: '13. Contact Us',
                content: `If you have any questions about these Terms and Conditions, please contact us:

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
              <p className="font-manrope font-semibold text-brand-dark text-sm mb-1">Questions about our Terms?</p>
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

