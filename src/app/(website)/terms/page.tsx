import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — SmartSignal',
}

export default function TermsPage() {
  return (
    <div className="section max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-dark-500 text-sm mb-10">Last updated: June 1, 2026</p>
      <div className="prose-dark space-y-8 text-dark-300 leading-relaxed">
        {[
          {
            title: '1. Acceptance of Terms',
            body: 'By accessing or using SmartSignal ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.',
          },
          {
            title: '2. Description of Service',
            body: 'SmartSignal provides trading signal information and market analysis for educational and informational purposes only. We are not a licensed financial advisor, broker, or investment firm. The signals and analysis provided should not be construed as financial advice.',
          },
          {
            title: '3. Subscription and Payments',
            body: 'Access to premium features requires a paid subscription. Subscriptions are billed on a monthly or annual basis. You may cancel your subscription at any time. Refunds are provided in accordance with our refund policy. We reserve the right to modify pricing with 30 days\' notice.',
          },
          {
            title: '4. User Accounts',
            body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. You may not share your account with third parties.',
          },
          {
            title: '5. Prohibited Uses',
            body: 'You may not redistribute, resell, or commercially exploit our signals or content without express written permission. You may not use automated tools to scrape or download content from our platform.',
          },
          {
            title: '6. Intellectual Property',
            body: 'All content on SmartSignal, including signals, analysis, and educational materials, is owned by SmartSignal and protected by copyright law.',
          },
          {
            title: '7. Limitation of Liability',
            body: 'SmartSignal shall not be liable for any trading losses incurred from following our signals. Trading in financial markets involves significant risk of loss. Past performance is not indicative of future results.',
          },
          {
            title: '8. Changes to Terms',
            body: 'We reserve the right to modify these terms at any time. Continued use of the Service following notification of changes constitutes your acceptance of the revised terms.',
          },
          {
            title: '9. Contact',
            body: 'For questions about these Terms, contact us at legal@smartsignal.com.',
          },
        ].map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-white mb-2">{s.title}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
