'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  title: string
  subtitle: string
  buttonText: string
  context: string
}

export default function EmailCapture({ title, subtitle, buttonText, context }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMessage('')

    // Simulate form submission — replace with actual endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-primary-dark text-white rounded-xl px-6 py-8 text-center max-w-lg mx-auto">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold mb-2">You're in!</h3>
        <p className="text-gray-300 text-sm">
          Check your inbox for your free cost estimate and DIY tips. We'll send you the best home improvement guides straight to your email.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-primary-dark text-white rounded-xl px-6 py-8 max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-sm text-center mb-5">{subtitle}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" data-context={context}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full px-4 py-3 rounded-lg text-site-text bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cta text-sm"
          aria-label="Email address"
        />
        {errorMessage && (
          <p className="text-red-400 text-xs">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-cta hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : buttonText}
        </button>
      </form>
      <p className="text-center text-xs text-gray-500 mt-3">
        No spam. Unsubscribe anytime. Your email is safe with us.
      </p>
    </div>
  )
}
