import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — SmartSignal',
  description: 'Choose the SmartSignal subscription plan that fits your trading goals.',
}

const plans = [
  {
    name: 'Basic',
    price: '$29',
    annualPrice: '$23',
    period: '/month',
    desc: 'Perfect for beginners exploring trading signals.',
    features: [
      { text: '5 Forex signals/day', included: true },
      { text: 'Email delivery', included: true },
      { text: 'Weekly market analysis', included: true },
      { text: 'Members community', included: true },
      { text: 'Commodity signals', included: false },
      { text: 'SMS alerts', included: false },
      { text: 'Daily analysis reports', included: false },
      { text: '1-on-1 consultation', included: false },
    ],
    cta: 'Start Basic',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$79',
    annualPrice: '$63',
    period: '/month',
    desc: 'For serious traders who want full signal coverage.',
    features: [
      { text: 'Unlimited Forex signals', included: true },
      { text: 'Email + SMS delivery', included: true },
      { text: 'Daily analysis reports', included: true },
      { text: 'Members community', included: true },
      { text: 'Commodity signals', included: true },
      { text: 'Priority support', included: true },
      { text: 'Video analysis', included: false },
      { text: '1-on-1 consultation', included: false },
    ],
    cta: 'Start Premium',
    highlight: true,
  },
  {
    name: 'VIP',
    price: '$149',
    annualPrice: '$119',
    period: '/month',
    desc: 'Exclusive access for professional traders.',
    features: [
      { text: 'Unlimited Forex signals', included: true },
      { text: 'Email + SMS + Telegram', included: true },
      { text: 'Daily analysis + video', included: true },
      { text: 'VIP members community', included: true },
      { text: 'Commodity signals', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Weekly 1-on-1 consultation', included: true },
      { text: 'Custom signal alerts', included: true },
    ],
    cta: 'Go VIP',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel your subscription at any time from your dashboard. You will retain access until the end of your billing period.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, all plans include a 7-day free trial. No credit card is required to start.',
  },
  {
    q: 'What markets do you cover?',
    a: 'We cover major, minor, and exotic Forex pairs, plus Gold, Silver, and Crude Oil. Premium and VIP plans include commodity signals.',
  },
  {
    q: 'How are signals delivered?',
    a: 'Signals are delivered via email and your member dashboard. Premium and VIP subscribers also receive SMS notifications.',
  },
  {
    q: 'What is your refund policy?',
    a: 'We offer a 7-day money-back guarantee on all paid plans if you are not satisfied with the service.',
  },
]

export default function PricingPage() {
  return (
    <div>
      <section className="border-b border-dark-800 bg-dark-950 px-4 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Simple, <span className="text-brand-500">Transparent Pricing</span>
          </h1>
          <p className="mt-6 text-lg text-dark-400">
            No hidden fees. Cancel anytime. Start with a 7-day free trial.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative card flex flex-col ${
                p.highlight ? 'border-brand-500 bg-gradient-to-b from-brand-500/5 to-transparent' : ''
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-dark-950">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-dark-400">{p.desc}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">{p.price}</span>
                <span className="text-dark-500 mb-1">{p.period}</span>
              </div>
              <p className="text-xs text-dark-500 mt-1">or {p.annualPrice}/mo billed annually</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.included ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-dark-600" />
                    )}
                    <span className={f.included ? 'text-dark-300' : 'text-dark-600'}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className={`mt-8 ${p.highlight ? 'btn-primary' : 'btn-outline'}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-dark-900 py-20 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card">
                <h4 className="font-semibold text-white">{f.q}</h4>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
