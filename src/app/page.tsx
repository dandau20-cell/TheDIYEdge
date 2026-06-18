import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'TheDIYEdge — Home Improvement Guides, Costs & DIY Tips',
  description: 'Get accurate 2026 cost estimates, honest product reviews, and step-by-step guides for every home improvement project. Kitchen remodels, bathroom renovations, decks, and more.',
  alternates: {
    canonical: 'https://www.thediyedge.com',
  },
}

const categories = [
  {
    emoji: '🍳',
    title: 'Kitchen Remodels',
    description: 'Full cost breakdowns, cabinet guides, countertop comparisons, and the upgrades that deliver the best ROI.',
    href: '/blog',
  },
  {
    emoji: '🚿',
    title: 'Bathroom Renovations',
    description: 'From full gut renovations to cosmetic refreshes — tile, vanity, plumbing, and everything in between.',
    href: '/blog',
  },
  {
    emoji: '🪵',
    title: 'Deck & Outdoor Living',
    description: 'Deck costs by material, outdoor kitchen guides, pergola projects, and landscape improvement ideas.',
    href: '/blog',
  },
  {
    emoji: '🔧',
    title: 'Tools & Reviews',
    description: 'Honest, tested reviews of power tools, hand tools, and DIY equipment at every price point.',
    href: '/blog',
  },
  {
    emoji: '📐',
    title: 'Flooring & Finishes',
    description: 'Flooring installation guides, paint recommendations, and finish selection tips for lasting results.',
    href: '/blog',
  },
  {
    emoji: '💡',
    title: 'DIY Strategy',
    description: 'When to DIY vs. hire a pro, how to interview contractors, and how to avoid costly renovation mistakes.',
    href: '/blog',
  },
]

const steps = [
  {
    number: '01',
    title: 'Know Your Costs',
    description: 'Get accurate local cost estimates for your project before you talk to a single contractor. Know what fair pricing looks like in your zip code so you never get overcharged.',
  },
  {
    number: '02',
    title: 'Make Smart Decisions',
    description: 'Our guides help you decide what to DIY, what to hire out, what materials to choose, and what order to tackle projects in — so your renovation goes smoothly from day one.',
  },
  {
    number: '03',
    title: 'Execute with Confidence',
    description: 'Follow our step-by-step guides, product recommendations, and contractor vetting checklists to get professional results — whether you\'re doing it yourself or managing a pro.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary-accent/20 text-primary-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            2026 Cost Guides Now Updated
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Home, Your Rules.{' '}
            <span className="text-cta">DIY Like a Pro.</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Honest cost estimates, tested product reviews, and step-by-step guides for every home improvement project. Stop guessing. Start building.
          </p>
          <div className="max-w-md mx-auto">
            <EmailCapture
              title="Get Your Free Cost Estimate"
              subtitle="Enter your email for a personalized estimate based on your location and project type."
              buttonText="Get Free Estimate →"
              context="homepage-hero"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Categories Grid */}
      <section className="py-16 px-4 bg-site-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4">
              Everything You Need to Improve Your Home
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From quick cosmetic updates to full-scale renovations — we cover every project with the depth and honesty you need to get it right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-card-bg border border-border rounded-xl p-6 hover:border-primary-accent hover:shadow-md transition-all duration-200"
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{cat.description}</p>
                <div className="mt-4 text-primary-accent text-sm font-semibold group-hover:underline">
                  Explore guides →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-4">
              How TheDIYEdge Works
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              We cut through the noise so you can make better home improvement decisions faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-dark text-cta text-xl font-extrabold mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/offers/free-cost-calculator"
              className="inline-block bg-cta hover:bg-yellow-500 text-white font-bold text-base px-8 py-4 rounded-lg transition-colors shadow-md no-underline"
            >
              Get Your Free Cost Estimate Now
            </Link>
            <p className="text-muted text-xs mt-3">No credit card required. No spam. Just the numbers you need.</p>
          </div>
        </div>
      </section>

      {/* State guide promo */}
      <section className="py-14 px-4 bg-primary-accent/5 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-dark mb-4">
            Local Cost Guides for Every State
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Home improvement costs vary dramatically by location. Find accurate 2026 pricing for your state — including kitchen remodels, bathroom renovations, and deck costs.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['California', 'Texas', 'Florida', 'New York', 'Colorado', 'Georgia', 'North Carolina', 'Tennessee'].map((state) => (
              <Link
                key={state}
                href={`/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-border text-primary-dark text-sm font-medium px-4 py-2 rounded-full hover:border-primary-accent hover:text-primary-accent transition-colors no-underline"
              >
                {state}
              </Link>
            ))}
            <Link
              href="/california"
              className="bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-primary-accent transition-colors no-underline"
            >
              View All 50 States →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
