import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SmartSignal — Professional Forex & Commodity Trading Signals',
  description:
    'Get real-time, expert-verified Forex and commodity trading signals. Join thousands of traders using SmartSignal to grow their portfolios.',
  keywords: 'forex signals, trading signals, commodity signals, forex tips, smart signal',
  openGraph: {
    title: 'SmartSignal — Professional Trading Signals',
    description: 'Real-time Forex and commodity trading signals trusted by thousands.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
