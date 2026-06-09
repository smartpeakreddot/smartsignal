import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — SmartSignal',
  description: 'Market analysis, trading education, and Forex insights from SmartSignal analysts.',
}

const posts = [
  {
    slug: 'gold-breakout-analysis',
    title: 'Gold (XAU/USD) Breakout Analysis: What to Watch This Week',
    excerpt: 'Gold has broken above key resistance at $2,320. We break down the technical setup and what traders should watch for next.',
    category: 'Market Analysis',
    date: 'June 3, 2026',
    readTime: '5 min read',
    author: 'Alex Rivera',
  },
  {
    slug: 'nfp-trading-guide',
    title: 'How to Trade Non-Farm Payrolls (NFP): A Complete Guide',
    excerpt: 'NFP Friday is one of the most volatile sessions of the month. Here is our proven strategy for trading the event safely.',
    category: 'Education',
    date: 'May 28, 2026',
    readTime: '8 min read',
    author: 'Sarah Chen',
  },
  {
    slug: 'risk-management-forex',
    title: 'Why 90% of Traders Fail (And How Proper Risk Management Changes Everything)',
    excerpt: 'Position sizing and stop-loss placement are the two most overlooked aspects of successful trading. Here\'s how to get them right.',
    category: 'Risk Management',
    date: 'May 20, 2026',
    readTime: '6 min read',
    author: 'Mohammed Al-Farsi',
  },
  {
    slug: 'eurusd-technical-outlook',
    title: 'EUR/USD Technical Outlook: Key Levels for Q3 2026',
    excerpt: 'As we head into Q3, we identify the critical support and resistance zones that will define EUR/USD trading opportunities.',
    category: 'Market Analysis',
    date: 'May 15, 2026',
    readTime: '4 min read',
    author: 'Elena Kovač',
  },
  {
    slug: 'fibonacci-trading-guide',
    title: 'Mastering Fibonacci Retracements for Precision Entries',
    excerpt: 'Fibonacci levels are a cornerstone of our signal methodology. This guide explains how to apply them to any timeframe.',
    category: 'Education',
    date: 'May 8, 2026',
    readTime: '7 min read',
    author: 'Alex Rivera',
  },
  {
    slug: 'crude-oil-market-update',
    title: 'Crude Oil Market Update: Supply Pressures and Price Outlook',
    excerpt: 'OPEC+ production decisions are creating volatility in oil markets. Here\'s what the data says about future price direction.',
    category: 'Market Analysis',
    date: 'May 1, 2026',
    readTime: '5 min read',
    author: 'Sarah Chen',
  },
]

const categories = ['All', 'Market Analysis', 'Education', 'Risk Management']

export default function BlogPage() {
  return (
    <div>
      <section className="border-b border-dark-800 bg-dark-950 px-4 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Market Insights & <span className="text-brand-500">Analysis</span>
          </h1>
          <p className="mt-6 text-lg text-dark-400">
            Stay ahead of the markets with expert analysis, trading guides, and market updates from our analyst team.
          </p>
        </div>
      </section>

      <section className="section">
        {/* Category filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                c === 'All'
                  ? 'border-brand-500 bg-brand-500 text-dark-950'
                  : 'border-dark-700 text-dark-400 hover:border-brand-500 hover:text-brand-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <div className="mb-8 card border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-transparent">
          <div className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400 mb-3">
            {posts[0].category}
          </div>
          <h2 className="text-2xl font-bold text-white">{posts[0].title}</h2>
          <p className="mt-3 text-dark-400">{posts[0].excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-dark-500">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{posts[0].date}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{posts[0].readTime}</span>
            <span>By {posts[0].author}</span>
          </div>
          <Link href={`/blog/${posts[0].slug}`} className="btn-primary mt-6 inline-flex text-sm px-5 py-2.5">
            Read Article <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Post grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col hover:border-brand-500/50 transition">
              <div className="inline-block rounded-full bg-dark-800 px-3 py-1 text-xs font-medium text-dark-400 mb-3 w-fit">
                {p.category}
              </div>
              <h3 className="font-semibold text-white group-hover:text-brand-400 transition">{p.title}</h3>
              <p className="mt-2 text-sm text-dark-400 leading-relaxed flex-1">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-dark-500 border-t border-dark-800 pt-4">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
