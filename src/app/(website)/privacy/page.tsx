import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — SmartSignal',
}

export default function PrivacyPage() {
  return (
    <div className="section max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-dark-500 text-sm mb-10">Last updated: June 1, 2026</p>
      <div className="space-y-8 text-dark-300 leading-relaxed">
        {[
          {
            title: '1. Information We Collect',
            body: 'We collect information you provide directly to us, such as when you create an account, subscribe to a plan, or contact us. This includes your name, email address, payment information (processed securely by our payment provider), and any communications with us.',
          },
          {
            title: '2. How We Use Your Information',
            body: 'We use the information we collect to provide, maintain, and improve our services; process transactions; send you signals, analysis, and service communications; respond to your requests; and comply with legal obligations.',
          },
          {
            title: '3. Information Sharing',
            body: 'We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website (such as payment processors and email delivery services), subject to confidentiality agreements.',
          },
          {
            title: '4. Data Security',
            body: 'We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.',
          },
          {
            title: '5. Cookies',
            body: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie settings through your browser.',
          },
          {
            title: '6. Your Rights',
            body: 'Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@smartsignal.com.',
          },
          {
            title: '7. Contact Us',
            body: 'If you have questions about this Privacy Policy, please contact us at privacy@smartsignal.com.',
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
