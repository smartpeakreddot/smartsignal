import Link from 'next/link'
import {
  TrendingUp, LayoutDashboard, Bell, BarChart2, CreditCard,
  Settings, LogOut, Menu,
} from 'lucide-react'

const sideLinks = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/signals', icon: TrendingUp, label: 'Signals' },
  { href: '/dashboard/analysis', icon: BarChart2, label: 'Analysis' },
  { href: '/dashboard/alerts', icon: Bell, label: 'Alerts' },
  { href: '/dashboard/subscription', icon: CreditCard, label: 'Subscription' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-dark-950">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-dark-800 bg-dark-900 md:flex">
        <div className="flex h-16 items-center gap-2 border-b border-dark-800 px-6 font-bold text-xl text-white">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500">
            <TrendingUp className="h-4 w-4 text-dark-950" />
          </div>
          Smart<span className="text-brand-500">Signal</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sideLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-dark-400 transition hover:bg-dark-800 hover:text-white"
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-dark-800 p-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-dark-500 transition hover:bg-dark-800 hover:text-red-400">
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-dark-800 bg-dark-900 px-4 md:px-6">
          <button className="text-dark-400 hover:text-white md:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative text-dark-400 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-500" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-dark-950">
              J
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
