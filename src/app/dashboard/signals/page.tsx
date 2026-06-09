import { Filter, Search } from 'lucide-react'

const allSignals = [
  { pair: 'EUR/USD', type: 'BUY', entry: '1.0842', tp1: '1.0870', tp2: '1.0890', sl: '1.0810', rr: '1:1.5', date: 'Jun 8, 2026', status: 'Active', pips: '+32' },
  { pair: 'XAU/USD', type: 'BUY', entry: '2318.50', tp1: '2335.00', tp2: '2345.00', sl: '2300.00', rr: '1:1.5', date: 'Jun 8, 2026', status: 'Active', pips: '+18' },
  { pair: 'GBP/JPY', type: 'SELL', entry: '197.25', tp1: '196.50', tp2: '196.00', sl: '198.20', rr: '1:1.3', date: 'Jun 7, 2026', status: 'Closed', pips: '+85' },
  { pair: 'USD/CAD', type: 'SELL', entry: '1.3680', tp1: '1.3650', tp2: '1.3620', sl: '1.3720', rr: '1:1.5', date: 'Jun 7, 2026', status: 'Closed', pips: '-15' },
  { pair: 'AUD/USD', type: 'BUY', entry: '0.6542', tp1: '0.6570', tp2: '0.6590', sl: '0.6510', rr: '1:1.5', date: 'Jun 6, 2026', status: 'Pending', pips: '—' },
  { pair: 'USD/JPY', type: 'SELL', entry: '156.80', tp1: '156.20', tp2: '155.80', sl: '157.30', rr: '1:1.2', date: 'Jun 6, 2026', status: 'Closed', pips: '+42' },
  { pair: 'GBP/USD', type: 'BUY', entry: '1.2710', tp1: '1.2750', tp2: '1.2790', sl: '1.2670', rr: '1:1.8', date: 'Jun 5, 2026', status: 'Closed', pips: '+67' },
  { pair: 'EUR/GBP', type: 'SELL', entry: '0.8465', tp1: '0.8440', tp2: '0.8420', sl: '0.8490', rr: '1:1.4', date: 'Jun 5, 2026', status: 'Closed', pips: '+28' },
  { pair: 'XAG/USD', type: 'BUY', entry: '29.45', tp1: '29.80', tp2: '30.10', sl: '29.10', rr: '1:1.6', date: 'Jun 4, 2026', status: 'Closed', pips: '+55' },
  { pair: 'NZD/USD', type: 'BUY', entry: '0.6085', tp1: '0.6120', tp2: '0.6145', sl: '0.6050', rr: '1:1.7', date: 'Jun 4, 2026', status: 'Closed', pips: '+38' },
]

export default function SignalsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Signals</h1>
        <p className="text-dark-400 text-sm mt-1">All trading signals from your subscription.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark-500" />
          <input
            className="input pl-9 w-64 text-sm py-2"
            placeholder="Search pair..."
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Active', 'Pending', 'Closed'].map((f) => (
            <button
              key={f}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                f === 'All'
                  ? 'bg-brand-500 text-dark-950'
                  : 'border border-dark-700 text-dark-400 hover:border-brand-500 hover:text-brand-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: 'Total Signals', value: '10' },
          { label: 'Win Rate', value: '88%' },
          { label: 'Total Pips', value: '+350' },
          { label: 'Active Now', value: '2' },
        ].map((s) => (
          <div key={s.label} className="card py-4 text-center">
            <p className="text-2xl font-bold text-brand-500">{s.value}</p>
            <p className="text-xs text-dark-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Signals Table */}
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-800">
              {['Pair', 'Type', 'Entry', 'TP 1', 'TP 2', 'Stop Loss', 'R/R', 'Pips', 'Date', 'Status'].map((h) => (
                <th key={h} className="pb-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider pr-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-800">
            {allSignals.map((s, i) => (
              <tr key={i} className="hover:bg-dark-800/40">
                <td className="py-3 pr-4 font-semibold text-white">{s.pair}</td>
                <td className="py-3 pr-4">
                  <span className={s.type === 'BUY' ? 'signal-badge-buy' : 'signal-badge-sell'}>
                    {s.type}
                  </span>
                </td>
                <td className="py-3 pr-4 text-dark-300">{s.entry}</td>
                <td className="py-3 pr-4 text-emerald-400">{s.tp1}</td>
                <td className="py-3 pr-4 text-emerald-400">{s.tp2}</td>
                <td className="py-3 pr-4 text-red-400">{s.sl}</td>
                <td className="py-3 pr-4 text-dark-400">{s.rr}</td>
                <td className={`py-3 pr-4 font-semibold ${s.pips.startsWith('+') ? 'text-emerald-400' : s.pips.startsWith('-') ? 'text-red-400' : 'text-dark-500'}`}>
                  {s.pips}
                </td>
                <td className="py-3 pr-4 text-dark-500 text-xs">{s.date}</td>
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
  )
}
