import type { Metadata } from 'next'
import { Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — SmartSignal',
  description: 'Get in touch with the SmartSignal support team.',
}

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-dark-800 bg-dark-950 px-4 py-24 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Get in <span className="text-brand-500">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-dark-400">
            Have a question? Our support team is here to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact form */}
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">First Name</label>
                  <input className="input" type="text" placeholder="John" />
                </div>
                <div>
                  <label className="label">Last Name</label>
                  <input className="input" type="text" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="label">Email</label>
                <input className="input" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="label">Subject</label>
                <input className="input" type="text" placeholder="How can we help?" />
              </div>
              <div>
                <label className="label">Message</label>
                <textarea
                  className="input resize-none"
                  rows={5}
                  placeholder="Tell us more..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Email Support</h3>
              </div>
              <p className="text-sm text-dark-400">For general inquiries and account support.</p>
              <a href="mailto:support@smartssignal.com" className="mt-2 block text-brand-400 hover:underline text-sm">
                support@smartssignal.com
              </a>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Live Chat</h3>
              </div>
              <p className="text-sm text-dark-400">Available for Premium and VIP subscribers during market hours.</p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Support Hours</h3>
              </div>
              <div className="space-y-1 text-sm text-dark-400">
                <p>Monday – Friday: 9:00 AM – 6:00 PM UTC</p>
                <p>Saturday: 10:00 AM – 2:00 PM UTC</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-5">
              <p className="text-sm text-dark-300 leading-relaxed">
                <span className="font-semibold text-brand-400">Typical response time:</span> We aim to respond
                to all emails within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
