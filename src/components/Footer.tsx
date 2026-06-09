import Link from 'next/link'
import { TrendingUp, Twitter, Youtube, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-800 bg-dark-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <TrendingUp className="h-5 w-5 text-dark-950" />
              </div>
              Smart<span className="text-brand-500">Signal</span>
            </Link>
            <p className="mt-4 text-sm text-dark-400 leading-relaxed">
              Professional trading signals for Forex and commodities. Trade smarter, not harder.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-700 text-dark-400 transition hover:border-brand-500 hover:text-brand-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-dark-400 transition hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-400">Legal</h4>
            <ul className="space-y-2">
              {[
                { href: '/terms', label: 'Terms of Service' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/disclaimer', label: 'Risk Disclaimer' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-dark-400 transition hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-dark-400">Contact</h4>
            <a
              href="mailto:support@smartssignal.com"
              className="flex items-center gap-2 text-sm text-dark-400 transition hover:text-brand-400"
            >
              <Mail className="h-4 w-4" />
              support@smartssignal.com
            </a>
            <p className="mt-3 text-sm text-dark-500">Mon – Fri, 9 AM – 6 PM UTC</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-dark-800 pt-6 text-center">
          <p className="text-xs text-dark-600">
            © {new Date().getFullYear()} SmartSignal. All rights reserved. &nbsp;|&nbsp;
            <span className="text-dark-500">
              Trading involves significant risk of loss. Past performance is not indicative of future results.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
