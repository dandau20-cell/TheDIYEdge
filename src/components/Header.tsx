'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/blog' },
  { label: 'Tools & Reviews', href: '/blog' },
  { label: 'Cost Calculator', href: '/offers/free-cost-calculator' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-cta font-bold text-xl tracking-tight">⚒</span>
            <span className="font-bold text-xl">
              <span className="text-white">The</span>
              <span className="text-cta">DIY</span>
              <span className="text-primary-accent">Edge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.label === 'Cost Calculator' ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="ml-2 bg-cta text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-3 pb-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.label === 'Cost Calculator' ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="bg-cta text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors text-center mt-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
