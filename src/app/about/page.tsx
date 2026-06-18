import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About TheDIYEdge — Media Stock LLC, A Covian Company',
  description: 'TheDIYEdge is operated by Media Stock LLC, a Covian Company. We help homeowners make smarter home improvement decisions with honest guides, real cost data, and expert recommendations.',
  alternates: {
    canonical: 'https://www.thediyedge.com/about',
  },
}

const pressBadges = [
  {
    outlet: 'CEO Times',
    quote: 'TheDIYEdge delivers what homeowners actually need — real cost data without the fluff.',
    role: 'Featured',
  },
  {
    outlet: 'USA News',
    quote: 'A reliable resource for anyone planning a home improvement project in 2026.',
    role: 'As Seen In',
  },
  {
    outlet: 'BizWeekly',
    quote: 'One of the most practical home improvement sites on the web.',
    role: 'Contributor',
  },
]

const values = [
  {
    emoji: '🔍',
    title: 'Radical Honesty',
    description: 'We tell you what things actually cost — not the optimistic estimates contractors share to win bids. Our data is sourced from real projects, real markets, real 2026 pricing.',
  },
  {
    emoji: '🏗️',
    title: 'Practical Depth',
    description: 'Every guide on TheDIYEdge is written to be immediately actionable. We don\'t stop at "what does it cost" — we answer "what should I watch for, what can I do myself, and what should I hire out."',
  },
  {
    emoji: '🔗',
    title: 'Transparent Affiliates',
    description: 'We earn affiliate commissions on some products we recommend. We\'re upfront about that. It doesn\'t change what we recommend — we only include products we\'d use ourselves.',
  },
  {
    emoji: '📍',
    title: 'Locally Relevant',
    description: 'Home improvement costs vary enormously by location. We provide city-level and state-level data so you\'re comparing your project to comparable projects in your actual market.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-site-bg">
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-primary-accent text-xs font-semibold uppercase tracking-widest mb-3">
            A Covian Company
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            About TheDIYEdge
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We built TheDIYEdge because homeowners deserve honest information. Too many people start renovations without knowing what fair pricing looks like — and end up overpaying, getting burned, or making decisions they regret.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* Mission */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-dark mb-5">
                Our Mission
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                TheDIYEdge exists to give homeowners the information advantage. Most people walk into a contractor conversation knowing nothing about fair market pricing, permit requirements, or what work they could safely tackle themselves. That imbalance costs homeowners thousands of dollars every year.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                We publish detailed, local cost guides, honest tool and product reviews, and step-by-step DIY strategy guides — all for free. We earn our revenue through affiliate partnerships with home improvement retailers, which we always disclose.
              </p>
              <p className="text-muted leading-relaxed">
                The result: homeowners who read TheDIYEdge go into projects with realistic budgets, smarter contractor questions, and the confidence to handle what they can handle themselves.
              </p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Homeowners Helped', value: '50,000+' },
                  { label: 'States Covered', value: 'All 50' },
                  { label: 'Cities with Local Data', value: '20+' },
                  { label: 'Cost Guides Published', value: '75+' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-extrabold text-primary-accent">{stat.value}</div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 text-center">
            How We Do It
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val) => (
              <div key={val.title} className="bg-white border border-border rounded-xl p-6">
                <div className="text-3xl mb-3">{val.emoji}</div>
                <h3 className="font-bold text-primary-dark mb-2">{val.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Press */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 text-center">
            As Featured In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pressBadges.map((badge) => (
              <div key={badge.outlet} className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="text-xs text-muted uppercase tracking-widest mb-2">{badge.role}</div>
                <div className="text-xl font-extrabold text-primary-dark mb-3">{badge.outlet}</div>
                <p className="text-muted text-sm italic leading-relaxed">"{badge.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company info */}
        <section className="mb-14 bg-white border border-border rounded-xl p-8">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-5">Company Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-primary-dark mb-2">Media Stock LLC</h3>
              <p className="text-muted text-sm leading-relaxed mb-3">
                TheDIYEdge is a property of Media Stock LLC, a Covian Company. Media Stock LLC operates digital media properties focused on helping consumers make informed purchasing and improvement decisions.
              </p>
              <address className="not-italic text-muted text-sm leading-relaxed">
                131 Continental Dr Suite 305<br />
                Newark, DE 19713
              </address>
            </div>
            <div>
              <h3 className="font-bold text-primary-dark mb-2">Contact Us</h3>
              <p className="text-muted text-sm leading-relaxed mb-3">
                For editorial inquiries, partnership opportunities, or general questions about TheDIYEdge:
              </p>
              <ul className="text-muted text-sm space-y-1">
                <li><strong>General:</strong> hello@thediyedge.com</li>
                <li><strong>Press:</strong> press@thediyedge.com</li>
                <li><strong>Partnerships:</strong> partners@thediyedge.com</li>
                <li><strong>Privacy:</strong> privacy@thediyedge.com</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legal links */}
        <div className="flex gap-4 text-sm">
          <Link href="/privacy" className="text-primary-accent hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-primary-accent hover:underline">Terms of Service</Link>
          <Link href="/" className="text-primary-accent hover:underline">Home</Link>
        </div>
      </div>
    </div>
  )
}
