'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-dark-800 bg-dark-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
            <TrendingUp className="h-5 w-5 text-dark-950" />
          </div>
          Smart<span className="text-brand-500">Signal</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-dark-300 transition hover:bg-dark-800 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/auth/login" className="btn-ghost text-sm px-4 py-2">
            Login
          </Link>
          <Link href="/auth/register" className="btn-primary text-sm px-4 py-2">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-dark-400 hover:bg-dark-800 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-dark-800 bg-dark-950 px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-dark-300 hover:bg-dark-800 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-dark-800 pt-3">
            <Link href="/auth/login" className="btn-ghost text-sm" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/auth/register" className="btn-primary text-sm" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
