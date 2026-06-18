'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { offersData } from '@/lib/offers-data'

interface Props {
  params: { slug: string }
}

export default function OfferPage({ params }: Props) {
  const offer = offersData[params.slug]
  if (!offer) notFound()

  const [form, setForm] = useState({ name: '', email: '', zip: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.zip) {
      setError('Please fill in all fields.')
      return
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }
    if (!/^\d{5}$/.test(form.zip)) {
      setError('Please enter a valid 5-digit zip code.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-site-bg min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center bg-white border border-border rounded-2xl p-10 shadow-lg">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-extrabold text-primary-dark mb-3">Your Estimate Is On Its Way!</h1>
          <p className="text-muted mb-6">
            Check your inbox at <strong>{form.email}</strong> — we've sent your personalized home improvement cost estimate for zip code {form.zip}.
          </p>
          <p className="text-sm text-muted mb-6">
            While you wait, explore our guides to make the most of your renovation budget.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-primary-dark text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-accent transition-colors no-underline"
          >
            Browse DIY Guides
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-site-bg">
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-cta/20 text-cta text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Free — No Credit Card Required
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            {offer.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {offer.subheadline}
          </p>
        </div>
      </section>

      {/* Form + Benefits */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-primary-dark mb-2">Get Your Free Estimate</h2>
            <p className="text-muted text-sm mb-6">Fill in your details below and we'll send your personalized cost breakdown instantly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg text-site-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@email.com"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg text-site-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-semibold text-primary-dark mb-1">
                  Zip Code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="90210"
                  required
                  maxLength={5}
                  pattern="\d{5}"
                  className="w-full px-4 py-3 border border-border rounded-lg text-site-text text-sm focus:outline-none focus:ring-2 focus:ring-primary-accent"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-cta hover:bg-yellow-500 text-white font-extrabold text-base py-4 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              >
                {status === 'loading' ? 'Generating your estimate...' : offer.cta}
              </button>
              <p className="text-center text-xs text-muted">
                Your information is secure. We will never sell or spam you. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-extrabold text-primary-dark mb-6">
              What You'll Get — Free
            </h2>
            <ul className="space-y-4">
              {offer.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-site-text text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-primary-dark/5 border border-border rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">🔒</span>
                <div>
                  <h3 className="font-bold text-primary-dark text-sm mb-1">100% Private & Free</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    We take your privacy seriously. Your information is encrypted and never sold to third parties. This estimate is completely free with no obligation to purchase anything.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 bg-cta/5 border border-cta/20 rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-primary-dark text-sm mb-1">Trusted by 50,000+ Homeowners</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    TheDIYEdge has helped over 50,000 homeowners make smarter renovation decisions with accurate, local cost data and honest recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pb-8">
        <nav className="text-sm text-muted">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-dark font-medium">{offer.title}</span>
        </nav>
      </div>
    </div>
  )
}
