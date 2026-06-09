'use client'

import { useState } from 'react'
import { User, Lock, Globe, Shield, CheckCircle2 } from 'lucide-react'

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'John Smith',
    email: 'john@example.com',
    phone: '',
    country: '',
    timezone: 'UTC',
  })
  const [saved, setSaved] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-dark-400 text-sm mt-1">Manage your account preferences.</p>
      </div>

      {saved && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4" /> Settings saved successfully!
        </div>
      )}

      {/* Profile */}
      <div className="card">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
            <User className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-white">Profile Information</h3>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">Full Name</label>
              <input
                className="input"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Email Address</label>
              <input
                className="input"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">Phone Number (optional)</label>
              <input
                className="input"
                type="tel"
                placeholder="+1 234 567 8900"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Country</label>
              <input
                className="input"
                placeholder="e.g. United States"
                value={profile.country}
                onChange={(e) => setProfile({ ...profile, country: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="label">Timezone</label>
            <select
              className="input"
              value={profile.timezone}
              onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
            >
              {['UTC', 'UTC+1 London', 'UTC+2 Frankfurt', 'UTC+3 Dubai', 'UTC+5:30 Mumbai', 'UTC+8 Singapore', 'UTC-5 New York', 'UTC-8 Los Angeles'].map((tz) => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-primary">Save Profile</button>
        </form>
      </div>

      {/* Password */}
      <div className="card">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-white">Change Password</h3>
        </div>
        <form className="space-y-4">
          <div>
            <label className="label">Current Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">New Password</label>
              <input className="input" type="password" placeholder="Min. 8 characters" />
            </div>
            <div>
              <label className="label">Confirm New Password</label>
              <input className="input" type="password" placeholder="Repeat new password" />
            </div>
          </div>
          <button type="submit" className="btn-outline">Update Password</button>
        </form>
      </div>

      {/* Trading Preferences */}
      <div className="card">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-white">Trading Preferences</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="label">Preferred Markets</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Forex Majors', 'Forex Minors', 'Forex Exotics', 'Gold', 'Silver', 'Oil'].map((m) => (
                <button
                  key={m}
                  className="rounded-lg border border-dark-700 px-3 py-1.5 text-xs text-dark-400 hover:border-brand-500 hover:text-brand-400 transition"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Experience Level</label>
            <select className="input">
              <option>Beginner (0–1 years)</option>
              <option>Intermediate (1–3 years)</option>
              <option>Advanced (3+ years)</option>
              <option>Professional</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger zone */}
      <div className="card border-red-500/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-white">Danger Zone</h3>
        </div>
        <p className="text-sm text-dark-400 mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
        <button className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition">
          Delete Account
        </button>
      </div>
    </div>
  )
}
