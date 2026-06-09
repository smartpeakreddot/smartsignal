'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TrendingUp, Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import { createClient } from '@/lib/supabaseClient'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.name } },
    })
    if (err) {
      setError(err.message)
      setLoading(false)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-950 px-4">
        <div className="w-full max-w-md text-center card">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold text-white">Check your email</h2>
          <p className="mt-3 text-sm text-dark-400">
            We've sent a confirmation link to <strong className="text-white">{form.email}</strong>.
            Click the link to activate your account.
          </p>
          <Link href="/auth/login" className="btn-primary mt-6 inline-flex">
            Back to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500">
              <TrendingUp className="h-5 w-5 text-dark-950" />
            </div>
            Smart<span className="text-brand-500">Signal</span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-dark-400 text-sm">Start your 7-day free trial — no credit card required</p>
        </div>

        <div className="card">
          {error && (
            <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="label">Email address</label>
              <input
                className="input"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input
                  className="input pr-10"
                  type={showPw ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-300"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-dark-500">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="text-brand-400 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-brand-400 hover:underline">Privacy Policy</Link>.
          </p>
          <p className="mt-4 text-center text-sm text-dark-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-brand-400 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
