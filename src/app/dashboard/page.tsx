import { TrendingUp, TrendingDown, Activity, Bell, Star, ArrowUpRight } from 'lucide-react'

const recentSignals = [
  { pair: 'EUR/USD', type: 'BUY', entry: '1.0842', tp: '1.0890', sl: '1.0810', status: 'Active', pips: '+32' },
  { pair: 'XAU/USD', type: 'BUY', entry: '2318.50', tp: '2345.00', sl: '2300.00', status: 'Active', pips: '+18' },
  { pair: 'GBP/JPY', type: 'SELL', entry: '197.25', tp: '196.00', sl: '198.20', status: 'Closed', pips: '+85' },
  { pair: 'USD/CAD', type: 'SELL', entry: '1.3680', tp: '1.3620', sl: '1.3720', status: 'Closed', pips: '-15' },
  { pair: 'AUD/USD', type: 'BUY', entry: '0.6542', tp: '0.6590', sl: '0.6510', status: 'Pending', pips: '—' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-dark-400 text-sm mt-1">Welcome back. Here's your trading overview.</p>
      </div>

      {/* Subscription notice */}
      <div className="rounded-xl border border-brand-500/30 bg-brand-500/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Star className="h-5 w-5 text-brand-500" />
          <div>
            <p className="text-sm font-semibold text-white">Premium Plan — Active</p>
            <p className="text-xs text-dark-400">Renews July 5, 2026</p>
          </div>
        </div>
        <button className="text-xs text-brand-400 hover:underline">Manage</button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Signals This Week', value: '12', icon: Activity, trend: '+3 from last week' },
          { label: 'Win Rate (30d)', value: '91%', icon: TrendingUp, trend: 'Based on closed signals' },
          { label: 'Total Pips (30d)', value: '+342', icon: ArrowUpRight, trend: 'Across all pairs' },
          { label: 'Active Signals', value: '2', icon: Bell, trend: 'EUR/USD, XAU/USD' },
        ].map((s) => (
          <div key={s.label} className="card">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-dark-500 uppercase tracking-wider">{s.label}</p>
              <s.icon className="h-4 w-4 text-brand-500" />
            </div>
            <p className="text-3xl font-extrabold text-white">{s.value}</p>
            <p className="mt-1 text-xs text-dark-500">{s.trend}</p>
          </div>
        ))}
      </div>

      {/* Recent Signals */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-white">Recent Signals</h2>
          <button className="text-xs text-brand-400 hover:underline">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-800">
                {['Pair', 'Type', 'Entry', 'Take Profit', 'Stop Loss', 'Pips', 'Status'].map((h) => (
                  <th key={h} className="pb-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-800">
              {recentSignals.map((s) => (
                <tr key={`${s.pair}-${s.entry}`} className="hover:bg-dark-800/40">
                  <td className="py-3 font-semibold text-white">{s.pair}</td>
                  <td className="py-3">
                    <span className={s.type === 'BUY' ? 'signal-badge-buy' : 'signal-badge-sell'}>
                      {s.type}
                    </span>
                  </td>
                  <td className="py-3 text-dark-300">{s.entry}</td>
                  <td className="py-3 text-dark-300">{s.tp}</td>
                  <td className="py-3 text-dark-300">{s.sl}</td>
                  <td className={`py-3 font-semibold ${s.pips.startsWith('+') ? 'text-emerald-400' : s.pips.startsWith('-') ? 'text-red-400' : 'text-dark-400'}`}>
                    {s.pips}
                  </td>
                  <td className="py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      s.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' :
                      s.status === 'Closed' ? 'bg-dark-700 text-dark-400' :
                      'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {s.status}
                    </span>
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
