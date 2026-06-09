'use client'

import { Bell, Mail, MessageSquare, Smartphone, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function AlertsPage() {
  const [settings, setSettings] = useState({
    emailSignals: true,
    emailAnalysis: true,
    emailMarketing: false,
    smsSignals: false,
    smsUrgent: false,
    browserNotif: true,
  })

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))

  const recentAlerts = [
    { text: 'New BUY signal: EUR/USD at 1.0842', time: '2 hours ago', type: 'signal' },
    { text: 'New BUY signal: XAU/USD at 2318.50', time: '4 hours ago', type: 'signal' },
    { text: 'Weekly Analysis report is now available', time: 'Today, 8:00 AM', type: 'analysis' },
    { text: 'GBP/JPY SELL signal hit TP1 (+42 pips)', time: 'Yesterday', type: 'tp' },
    { text: 'Pre-market briefing: June 7', time: 'Yesterday, 7:30 AM', type: 'analysis' },
    { text: 'USD/CAD signal stopped out (-15 pips)', time: '2 days ago', type: 'sl' },
  ]

  const alertColor: Record<string, string> = {
    signal: 'bg-blue-500/10 text-blue-400',
    analysis: 'bg-purple-500/10 text-purple-400',
    tp: 'bg-emerald-500/10 text-emerald-400',
    sl: 'bg-red-500/10 text-red-400',
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Alerts</h1>
        <p className="text-dark-400 text-sm mt-1">Manage how and when you receive notifications.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Notification settings */}
        <div className="space-y-4">
          {/* Email */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">Email Notifications</h3>
            </div>
            <div className="space-y-3">
              {[
                { key: 'emailSignals', label: 'New trading signals' },
                { key: 'emailAnalysis', label: 'Daily & weekly analysis' },
                { key: 'emailMarketing', label: 'News & promotions' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-sm text-dark-300">{item.label}</span>
                  <button
                    onClick={() => toggle(item.key as keyof typeof settings)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      settings[item.key as keyof typeof settings] ? 'bg-brand-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SMS */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">SMS Notifications</h3>
              </div>
              <span className="rounded-full bg-dark-700 px-2.5 py-0.5 text-xs text-dark-400">Premium+</span>
            </div>
            <div className="space-y-3">
              {[
                { key: 'smsSignals', label: 'New trading signals' },
                { key: 'smsUrgent', label: 'Urgent market alerts' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-sm text-dark-300">{item.label}</span>
                  <button
                    onClick={() => toggle(item.key as keyof typeof settings)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      settings[item.key as keyof typeof settings] ? 'bg-brand-500' : 'bg-dark-700'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      settings[item.key as keyof typeof settings] ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Browser */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">Browser Notifications</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-dark-300">Enable browser notifications</span>
              <button
                onClick={() => toggle('browserNotif')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  settings.browserNotif ? 'bg-brand-500' : 'bg-dark-700'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.browserNotif ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Recent alerts */}
        <div className="card">
          <h3 className="font-semibold text-white mb-4">Recent Notifications</h3>
          <div className="space-y-3">
            {recentAlerts.map((a, i) => (
              <div key={i} className="flex items-start gap-3 border-b border-dark-800 pb-3 last:border-0 last:pb-0">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium shrink-0 mt-0.5 ${alertColor[a.type]}`}>
                  {a.type === 'signal' ? 'Signal' : a.type === 'analysis' ? 'Report' : a.type === 'tp' ? 'TP Hit' : 'SL Hit'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-dark-300 leading-snug">{a.text}</p>
                  <p className="text-xs text-dark-600 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="btn-primary">
        <CheckCircle2 className="h-4 w-4" /> Save Preferences
      </button>
    </div>
  )
}
