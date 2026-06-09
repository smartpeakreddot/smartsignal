import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, BarChart2, Bell, BookOpen, Users, HeadphonesIcon, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — SmartSignal',
  description: 'Explore SmartSignal\'s full suite of trading signal services for Forex and commodities.',
}

const services = [
  {
    icon: TrendingUp,
    title: 'Forex Trading Signals',
    desc: 'Daily signals covering major, minor, and exotic currency pairs. Each signal includes entry price, take-profit targets, and stop-loss levels.',
    features: ['EUR/USD, GBP/USD, USD/JPY & more', 'Multiple TP levels', 'Strict stop-loss placement', 'Signal strength rating'],
  },
  {
    icon: BarChart2,
    title: 'Commodity Signals',
    desc: 'Expert signals for Gold (XAU/USD), Silver, Crude Oil, and Natural Gas — assets that offer diversification outside currency markets.',
    features: ['Gold & Silver (XAU, XAG)', 'WTI Crude Oil signals', 'Commodity-specific analysis', 'Weekly outlook reports'],
  },
  {
    icon: Bell,
    title: 'Multi-Channel Delivery',
    desc: 'Receive your signals however works best for you. We support email, SMS, and dashboard notifications so you never miss a trade.',
    features: ['Instant email delivery', 'SMS alerts (Premium+)', 'Dashboard notifications', 'Telegram integration (VIP)'],
  },
  {
    icon: BookOpen,
    title: 'Market Analysis',
    desc: 'Daily and weekly reports covering macroeconomic events, central bank decisions, and technical market structure.',
    features: ['Daily pre-market briefing', 'Weekly macro outlook', 'Event calendar coverage', 'Video analysis (VIP)'],
  },
  {
    icon: Users,
    title: 'Members Community',
    desc: 'Connect with fellow traders, discuss signal setups, and learn from our analyst team in real time.',
    features: ['Private members forum', 'Live Q&A sessions', 'Trade journal sharing', 'Peer learning environment'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Our support team is available 5 days a week to help with account questions, signal queries, and technical issues.',
    features: ['Email & chat support', 'Priority for Premium members', '1-on-1 sessions (VIP)', 'Help center & FAQ'],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b border-dark-800 bg-dark-950 px-4 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Our <span className="text-brand-500">Services</span>
          </h1>
          <p className="mt-6 text-lg text-dark-400">
            Everything you need to trade confidently — from signals to analysis to community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-dark-400 leading-relaxed flex-1">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/pricing" className="btn-primary text-base px-8 py-4">
            See Pricing Plans <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
