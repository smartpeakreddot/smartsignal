import Link from 'next/link'
import { CheckCircle2, Star, ArrowUpRight, CreditCard, Calendar, RefreshCw } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: ['5 Forex signals/day', 'Email delivery', 'Weekly market analysis', 'Basic support'],
    current: false,
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/month',
    features: ['Unlimited Forex signals', 'Commodity signals', 'Email + SMS delivery', 'Daily analysis reports', 'Community access', 'Priority support'],
    current: true,
  },
  {
    name: 'VIP',
    price: '$149',
    period: '/month',
    features: ['Everything in Premium', '1-on-1 weekly consultation', 'Custom signal alerts', 'Portfolio review', 'VIP Telegram group', 'Dedicated account manager'],
    current: false,
  },
]

const invoices = [
  { date: 'Jun 5, 2026', amount: '$79.00', plan: 'Premium', status: 'Paid' },
  { date: 'May 5, 2026', amount: '$79.00', plan: 'Premium', status: 'Paid' },
  { date: 'Apr 5, 2026', amount: '$79.00', plan: 'Premium', status: 'Paid' },
  { date: 'Mar 5, 2026', amount: '$29.00', plan: 'Basic', status: 'Paid' },
]

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Subscription</h1>
        <p className="text-dark-400 text-sm mt-1">Manage your plan and billing details.</p>
      </div>

      {/* Current plan banner */}
      <div className="card border-brand-500/40 bg-gradient-to-br from-brand-500/10 to-transparent">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500">
              <Star className="h-6 w-6 text-dark-950" />
            </div>
            <div>
              <p className="font-bold text-white text-lg">Premium Plan</p>
              <p className="text-sm text-dark-400">Active subscription</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2 text-dark-400">
              <Calendar className="h-4 w-4" />
              Renews July 5, 2026
            </div>
            <div className="flex items-center gap-2 text-dark-400">
              <RefreshCw className="h-4 w-4" />
              $79.00 / month
            </div>
            <button className="text-red-400 text-xs hover:underline">Cancel Plan</button>
          </div>
        </div>
      </div>

      {/* Plan comparison */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Change Plan</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card flex flex-col ${p.current ? 'border-brand-500' : ''}`}
            >
              {p.current && (
                <div className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400">
                  <CheckCircle2 className="h-3 w-3" /> Current Plan
                </div>
              )}
              <h3 className="font-bold text-white">{p.name}</h3>
              <div className="flex items-end gap-1 my-3">
                <span className="text-3xl font-extrabold text-white">{p.price}</span>
                <span className="text-dark-500 mb-1 text-sm">{p.period}</span>
              </div>
              <ul className="flex-1 space-y-2 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-dark-400">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                disabled={p.current}
                className={p.current ? 'btn-ghost text-sm opacity-50 cursor-not-allowed' : 'btn-outline text-sm'}
              >
                {p.current ? 'Current Plan' : `Switch to ${p.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment method */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white">Payment Method</h3>
          <button className="text-xs text-brand-400 hover:underline">Update</button>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-14 items-center justify-center rounded-lg border border-dark-700 bg-dark-800">
            <CreditCard className="h-5 w-5 text-dark-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">•••• •••• •••• 4242</p>
            <p className="text-xs text-dark-500">Expires 08/2028</p>
          </div>
        </div>
      </div>

      {/* Billing history */}
      <div className="card">
        <h3 className="font-semibold text-white mb-4">Billing History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-800">
                {['Date', 'Plan', 'Amount', 'Status', ''].map((h) => (
                  <th key={h} className="pb-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider pr-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-800">
              {invoices.map((inv, i) => (
                <tr key={i} className="hover:bg-dark-800/40">
                  <td className="py-3 pr-4 text-dark-300">{inv.date}</td>
                  <td className="py-3 pr-4 text-dark-300">{inv.plan}</td>
                  <td className="py-3 pr-4 font-medium text-white">{inv.amount}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="flex items-center gap-1 text-xs text-brand-400 hover:underline">
                      Receipt <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
