'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TrendingUp } from 'lucide-react'
import { createClient } from '@/lib/supabaseClient'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    if (err) {
      setError(err.message)
      setLoading(false)
    } else {
      setSent(true)
    }
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
          <h1 className="mt-6 text-2xl font-bold text-white">Reset your password</h1>
          <p className="mt-2 text-dark-400 text-sm">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <div className="card">
          {sent ? (
            <div className="text-center py-4">
              <div className="mb-4 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                Check your email for a password reset link.
              </div>
              <Link href="/auth/login" className="text-sm text-brand-400 hover:underline">
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="label">Email address</label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-dark-400">
                Remember your password?{' '}
                <Link href="/auth/login" className="text-brand-400 hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
