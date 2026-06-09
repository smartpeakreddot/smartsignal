import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

const reports = [
  {
    title: 'Pre-Market Briefing — June 8, 2026',
    type: 'Daily',
    summary: 'USD strengthening on hawkish Fed commentary. EUR/USD facing key resistance at 1.0870. Gold consolidating above $2,300. Watch NFP data Friday.',
    date: 'Jun 8, 2026',
    readTime: '3 min',
    tag: 'Today',
  },
  {
    title: 'Weekly Macro Outlook — Week of June 8',
    type: 'Weekly',
    summary: 'Central bank decisions dominate this week. ECB rate decision Thursday. US CPI Wednesday. Expect elevated volatility across EUR pairs and gold.',
    date: 'Jun 8, 2026',
    readTime: '7 min',
    tag: 'This Week',
  },
  {
    title: 'Pre-Market Briefing — June 7, 2026',
    type: 'Daily',
    summary: 'Asian session saw JPY weakness as BoJ holds rates. GBP/USD bounced off 1.2680 support. Oil under pressure from demand concerns.',
    date: 'Jun 7, 2026',
    readTime: '3 min',
    tag: null,
  },
  {
    title: 'Gold Technical Deep-Dive',
    type: 'Special',
    summary: 'Comprehensive analysis of XAU/USD structure. Key levels: $2,280 (major support), $2,350 (resistance), $2,400 (target on breakout). Bullish bias maintained.',
    date: 'Jun 6, 2026',
    readTime: '10 min',
    tag: null,
  },
  {
    title: 'Pre-Market Briefing — June 6, 2026',
    type: 'Daily',
    summary: 'EUR/USD broke above 1.0840 on better-than-expected Eurozone PMI. Watch for continuation or fakeout above this level into the US session.',
    date: 'Jun 6, 2026',
    readTime: '3 min',
    tag: null,
  },
  {
    title: 'Weekly Macro Outlook — Week of June 1',
    type: 'Weekly',
    summary: 'Fed minutes released Wednesday showed divided committee on rate path. Dollar retreated broadly. Commodity currencies outperformed.',
    date: 'Jun 1, 2026',
    readTime: '7 min',
    tag: null,
  },
]

const typeColor: Record<string, string> = {
  Daily: 'bg-blue-500/10 text-blue-400',
  Weekly: 'bg-purple-500/10 text-purple-400',
  Special: 'bg-brand-500/10 text-brand-400',
}

export default function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Market Analysis</h1>
        <p className="text-dark-400 text-sm mt-1">Daily and weekly reports from our analyst team.</p>
      </div>

      {/* Today's highlight */}
      <div className="card border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-transparent">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-bold text-dark-950">TODAY</span>
              <span className="text-xs text-dark-500">Daily Briefing</span>
            </div>
            <h2 className="text-lg font-bold text-white">{reports[0].title}</h2>
            <p className="mt-2 text-sm text-dark-400 leading-relaxed">{reports[0].summary}</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-brand-400 hover:underline shrink-0">
            Read full <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* All reports */}
      <div className="space-y-3">
        {reports.slice(1).map((r, i) => (
          <div key={i} className="card hover:border-dark-600 transition cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColor[r.type]}`}>
                    {r.type}
                  </span>
                  {r.tag && (
                    <span className="rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                      {r.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-white text-sm">{r.title}</h3>
                <p className="mt-1 text-xs text-dark-400 leading-relaxed line-clamp-2">{r.summary}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-dark-600">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{r.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{r.readTime}</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-dark-600 shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
