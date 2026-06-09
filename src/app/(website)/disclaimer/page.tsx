import type { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Risk Disclaimer — SmartSignal',
}

export default function DisclaimerPage() {
  return (
    <div className="section max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
        <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-500" />
        <p className="text-sm text-yellow-200">
          <strong>Important:</strong> Trading in financial markets involves substantial risk of loss. Please read this disclaimer carefully before using our services.
        </p>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">Risk Disclaimer</h1>
      <p className="text-dark-500 text-sm mb-10">Last updated: June 1, 2026</p>
      <div className="space-y-8 text-dark-300 leading-relaxed">
        {[
          {
            title: 'No Financial Advice',
            body: 'The trading signals, analysis, and content provided by SmartSignal are for informational and educational purposes only. Nothing on this platform constitutes financial advice, investment advice, trading advice, or any other type of advice. You should not treat any information as such.',
          },
          {
            title: 'High Risk Warning',
            body: 'Forex, commodities, and other financial instruments carry a high level of risk to your capital. It is possible to lose more than your initial investment. Only trade with money you can afford to lose. You should not trade in these instruments unless you understand the nature of the contracts you are entering into and the extent of your exposure to risk.',
          },
          {
            title: 'Past Performance',
            body: 'Past signal performance and historical results do not guarantee or predict future results. Market conditions change continuously, and there is no assurance that any signal or strategy will be profitable in the future.',
          },
          {
            title: 'Independent Verification',
            body: 'Before making any trading decision, you should independently verify any information provided by SmartSignal and consider seeking advice from a licensed financial advisor who understands your individual financial circumstances.',
          },
          {
            title: 'No Liability',
            body: 'SmartSignal and its affiliates, employees, and analysts shall not be held liable for any losses incurred as a result of using our signals or acting on information provided on this platform.',
          },
          {
            title: 'Regulatory Compliance',
            body: 'SmartSignal does not operate as a registered investment advisor, broker-dealer, or financial institution in any jurisdiction. Our services are not regulated financial services. Please ensure that trading in financial markets is legal in your jurisdiction before using our services.',
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
