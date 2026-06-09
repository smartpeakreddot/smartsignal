import type { Metadata } from 'next'
import { Shield, Target, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us — SmartSignal',
  description: 'Learn about SmartSignal\'s team of expert analysts and our mission to democratize professional trading signals.',
}

const values = [
  { icon: Target, title: 'Precision', desc: 'Every signal is backed by rigorous technical and fundamental analysis.' },
  { icon: Shield, title: 'Transparency', desc: 'We publish our track record openly. No hidden fees, no false promises.' },
  { icon: Users, title: 'Community', desc: 'We grow together. Our community of traders is at the heart of everything we do.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in signal quality and customer service.' },
]

const team = [
  { name: 'Alex Rivera', role: 'Head Analyst', exp: '12 years in Forex markets' },
  { name: 'Sarah Chen', role: 'Commodities Specialist', exp: '8 years in commodity trading' },
  { name: 'Mohammed Al-Farsi', role: 'Risk Manager', exp: '10 years in institutional trading' },
  { name: 'Elena Kovač', role: 'Technical Analyst', exp: '7 years in algorithmic strategy' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-dark-800 bg-dark-950 px-4 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            We're on a Mission to Make<br />
            <span className="text-brand-500">Professional Trading Accessible</span>
          </h1>
          <p className="mt-6 text-lg text-dark-400 leading-relaxed">
            SmartSignal was founded by a team of professional traders who believed every investor deserved
            access to institutional-grade analysis — not just hedge funds.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <div className="mt-5 space-y-4 text-dark-400 leading-relaxed">
              <p>
                Founded in 2019, SmartSignal started as a small group of professional traders sharing
                signals within a private Telegram group. Word spread fast — our accuracy and clear
                communication stood out in an industry full of noise.
              </p>
              <p>
                By 2021, we had grown to over 5,000 members and launched a dedicated platform to serve
                traders at every level. Today, over 12,500 traders across 60+ countries rely on SmartSignal
                every day.
              </p>
              <p>
                We believe in education alongside execution. That's why every signal comes with analysis,
                and every member has access to our growing library of market education resources.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2019' },
              { label: 'Countries', value: '60+' },
              { label: 'Signals Sent', value: '150,000+' },
              { label: 'Avg. Accuracy', value: '94%' },
            ].map((s) => (
              <div key={s.label} className="card text-center">
                <p className="text-3xl font-extrabold text-brand-500">{s.value}</p>
                <p className="mt-1 text-sm text-dark-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark-900 py-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <h2 className="section-title text-center">Meet the Analysts</h2>
        <p className="section-subtitle mx-auto text-center">Seasoned professionals with decades of combined market experience.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="card text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/10 text-2xl font-bold text-brand-500">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-brand-400 mt-1">{m.role}</p>
              <p className="mt-2 text-xs text-dark-500">{m.exp}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
