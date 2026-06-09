import Link from 'next/link'
import {
  TrendingUp, Shield, Clock, Star, ChevronRight, ArrowRight,
  BarChart2, Bell, Users, CheckCircle2, Zap,
} from 'lucide-react'

const stats = [
  { value: '12,500+', label: 'Active Subscribers' },
  { value: '94%', label: 'Signal Accuracy' },
  { value: '5+ Years', label: 'Market Experience' },
  { value: '24/7', label: 'Signal Delivery' },
]

const features = [
  {
    icon: TrendingUp,
    title: 'Forex Signals',
    desc: 'Major, minor, and exotic pairs. Entry, take-profit, and stop-loss levels included with every signal.',
  },
  {
    icon: BarChart2,
    title: 'Commodity Signals',
    desc: 'Gold, Silver, Oil, and more. Capitalise on commodity market movements with precision signals.',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    desc: 'Receive signals the moment they are generated via email, SMS, or your dashboard.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    desc: 'Every signal includes risk/reward ratios and position sizing guidance to protect your capital.',
  },
  {
    icon: Clock,
    title: 'Daily & Weekly Analysis',
    desc: 'In-depth market analysis reports published daily and weekly by our senior analysts.',
  },
  {
    icon: Users,
    title: 'Community Access',
    desc: 'Join our members-only community to discuss signals, strategies, and market insights.',
  },
]

const testimonials = [
  {
    name: 'James O.',
    role: 'Full-time Trader, UK',
    text: 'SmartSignal transformed the way I trade. The accuracy is consistently above 90% and the risk management guidance is invaluable.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Part-time Investor, India',
    text: 'I was skeptical at first, but after three months I\'m up over 40%. The daily analysis alone is worth the subscription.',
    rating: 5,
  },
  {
    name: 'Carlos M.',
    role: 'Forex Trader, Brazil',
    text: 'Best signal service I\'ve used. Clear entry/exit points and the support team responds within minutes.',
    rating: 5,
  },
]

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    desc: 'Perfect for beginners exploring trading signals.',
    features: ['5 Forex signals/day', 'Email delivery', 'Weekly market analysis', 'Basic support'],
    cta: 'Start Basic',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/month',
    desc: 'For serious traders who want full signal coverage.',
    features: [
      'Unlimited Forex signals',
      'Commodity signals',
      'Email + SMS delivery',
      'Daily analysis reports',
      'Community access',
      'Priority support',
    ],
    cta: 'Start Premium',
    highlight: true,
  },
  {
    name: 'VIP',
    price: '$149',
    period: '/month',
    desc: 'Exclusive access for professional traders.',
    features: [
      'Everything in Premium',
      '1-on-1 weekly consultation',
      'Custom signal alerts',
      'Portfolio review',
      'VIP Telegram group',
      'Dedicated account manager',
    ],
    cta: 'Go VIP',
    highlight: false,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-950 px-4 py-28 md:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-brand-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm text-brand-400">
            <Zap className="h-4 w-4" />
            94% Verified Signal Accuracy
          </div>
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Trade Smarter with
            <br />
            <span className="text-brand-500">Professional Signals</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-400 leading-relaxed">
            Real-time Forex and commodity trading signals delivered by expert analysts. Join 12,500+ traders
            who rely on SmartSignal to grow their portfolios every day.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/auth/register" className="btn-primary text-base px-8 py-4">
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/pricing" className="btn-outline text-base px-8 py-4">
              View Pricing
            </Link>
          </div>
          <p className="mt-4 text-xs text-dark-500">No credit card required • 7-day free trial</p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-4xl grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card text-center">
              <p className="text-3xl font-extrabold text-brand-500">{s.value}</p>
              <p className="mt-1 text-sm text-dark-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="text-center">
          <h2 className="section-title">Everything You Need to Trade Successfully</h2>
          <p className="section-subtitle mx-auto">
            Expert analysis, real-time alerts, and proven strategies — all in one platform.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card group transition hover:border-brand-500/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-dark-950 transition">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-dark-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Signal Preview */}
      <section className="bg-dark-900 py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="section-title">Sample Signals</h2>
            <p className="section-subtitle mx-auto">Here's what our signals look like. Clear, actionable, and accurate.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { pair: 'EUR/USD', type: 'BUY', entry: '1.0842', tp: '1.0890', sl: '1.0810', rr: '1:1.5' },
              { pair: 'XAU/USD', type: 'BUY', entry: '2,318.50', tp: '2,345.00', sl: '2,300.00', rr: '1:1.5' },
              { pair: 'GBP/JPY', type: 'SELL', entry: '197.25', tp: '196.00', sl: '198.20', rr: '1:1.3' },
            ].map((sig) => (
              <div key={sig.pair} className="card border-dark-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-white">{sig.pair}</span>
                  <span className={sig.type === 'BUY' ? 'signal-badge-buy' : 'signal-badge-sell'}>
                    {sig.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Entry', value: sig.entry },
                    { label: 'Take Profit', value: sig.tp },
                    { label: 'Stop Loss', value: sig.sl },
                    { label: 'Risk/Reward', value: sig.rr },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-dark-500">{row.label}</span>
                      <span className="font-medium text-dark-200">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/auth/register" className="btn-primary">
              Get Full Access <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="text-center">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle mx-auto">Choose the plan that fits your trading goals.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative card flex flex-col ${
                p.highlight
                  ? 'border-brand-500 bg-gradient-to-b from-brand-500/5 to-transparent'
                  : ''
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-bold text-dark-950">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-dark-400">{p.desc}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-dark-500 mb-1">{p.period}</span>
                </div>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className={p.highlight ? 'btn-primary' : 'btn-outline'}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark-900 py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="section-title">What Our Members Say</h2>
            <p className="section-subtitle mx-auto">Trusted by traders around the world.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-sm text-dark-300 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 border-t border-dark-800 pt-4">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-dark-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-transparent p-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Trade with Confidence?
          </h2>
          <p className="mt-4 text-dark-400">
            Start your 7-day free trial today. No credit card required.
          </p>
          <Link href="/auth/register" className="btn-primary mt-8 inline-flex text-base px-8 py-4">
            Start Free Trial <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
