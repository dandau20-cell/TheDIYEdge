import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { citiesData, allCitySlugs } from '@/lib/cities-data'
import EmailCapture from '@/components/EmailCapture'

interface Props {
  params: { city: string }
}

export async function generateStaticParams() {
  return allCitySlugs.map((slug) => ({ city: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = citiesData[params.city]
  if (!data) return {}

  return {
    title: `${data.name} Home Improvement Guide — Costs, Contractors & DIY Tips 2026`,
    description: `Get accurate 2026 cost estimates for kitchen remodels, bathroom renovations, and deck projects in ${data.name}, ${data.state}. Local pricing, FAQs, and DIY guidance.`,
    alternates: {
      canonical: `https://www.thediyedge.com/cities/${params.city}`,
    },
    openGraph: {
      title: `${data.name} Home Improvement Costs & DIY Guide 2026 | TheDIYEdge`,
      description: `Local 2026 cost data, contractor tips, and DIY guides for ${data.name}, ${data.state}.`,
    },
  }
}

export default function CityPage({ params }: Props) {
  const data = citiesData[params.city]
  if (!data) notFound()

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  // JSON-LD LocalBusiness schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${data.name} Home Improvement Guide 2026`,
    description: `Home improvement cost estimates, contractor guidance, and DIY tips for ${data.name}, ${data.state}.`,
    url: `https://www.thediyedge.com/cities/${params.city}`,
    publisher: {
      '@type': 'Organization',
      name: 'TheDIYEdge',
      url: 'https://www.thediyedge.com',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: data.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  }

  return (
    <div className="bg-site-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-primary-accent text-xs font-semibold uppercase tracking-widest mb-3">
            {data.state} • 2026 Local Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            {data.name} Home Improvement Guide — Costs, Contractors & DIY Tips
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Labor Cost Index', value: data.laborCostIndex },
            { label: 'Climate', value: data.climate },
            { label: 'State', value: data.state },
          ].map((stat) => (
            <div key={stat.label} className="bg-white border border-border rounded-xl p-4">
              <div className="text-xs text-muted uppercase tracking-wide mb-1">{stat.label}</div>
              <div className="text-sm font-semibold text-primary-dark leading-snug">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Cost Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-6">
            2026 Home Improvement Cost Estimates in {data.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary-dark text-white">
                  <th className="text-left px-5 py-4 text-sm font-semibold">Project</th>
                  <th className="text-right px-5 py-4 text-sm font-semibold">Low</th>
                  <th className="text-right px-5 py-4 text-sm font-semibold">Average</th>
                  <th className="text-right px-5 py-4 text-sm font-semibold">High</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Kitchen Remodel</div>
                    <div className="text-xs text-muted">Mid-range, full renovation</div>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.kitchenRemodel.min)}</td>
                  <td className="px-5 py-4 text-right">
                    <span className="bg-cta/10 text-cta font-bold text-sm px-2 py-0.5 rounded">
                      {formatCurrency(data.kitchenRemodel.avg)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.kitchenRemodel.max)}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Bathroom Renovation</div>
                    <div className="text-xs text-muted">Mid-range, full renovation</div>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.bathroomReno.min)}</td>
                  <td className="px-5 py-4 text-right">
                    <span className="bg-cta/10 text-cta font-bold text-sm px-2 py-0.5 rounded">
                      {formatCurrency(data.bathroomReno.avg)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.bathroomReno.max)}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Deck Construction</div>
                    <div className="text-xs text-muted">Per square foot installed</div>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.deckCostPerSqFt.min)}/sq ft</td>
                  <td className="px-5 py-4 text-right">
                    <span className="bg-cta/10 text-cta font-bold text-sm px-2 py-0.5 rounded">
                      {formatCurrency(data.deckCostPerSqFt.avg)}/sq ft
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.deckCostPerSqFt.max)}/sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            * Estimates reflect 2026 market conditions in {data.name}. Costs vary by project scope, material selection, and contractor. Obtain at least three bids from licensed local contractors.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-6">
            Frequently Asked Questions — {data.name} Home Improvement
          </h2>
          <div className="space-y-5">
            {data.faq.map((item, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-bold text-primary-dark mb-3 text-lg">{item.question}</h3>
                <p className="text-muted leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Link back to state */}
        <div className="bg-primary-accent/5 border border-primary-accent/20 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-primary-dark mb-1">
              See statewide data for {data.state}
            </h3>
            <p className="text-sm text-muted">
              Compare {data.name}'s costs against statewide averages and other cities in {data.state}.
            </p>
          </div>
          <Link
            href={`/${data.stateSlug}`}
            className="flex-shrink-0 bg-primary-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary-accent transition-colors no-underline"
          >
            {data.state} Cost Guide →
          </Link>
        </div>

        {/* Email Capture */}
        <section className="mb-8">
          <EmailCapture
            title={`Get a Free Estimate for Your ${data.name} Project`}
            subtitle={`We'll send you a personalized cost breakdown tailored to your specific project and neighborhood in ${data.name}.`}
            buttonText="Get My Free Estimate"
            context={`city-page-${params.city}`}
          />
        </section>

        {/* Breadcrumb */}
        <nav className="text-sm text-muted">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span className="mx-2">›</span>
          <Link href={`/${data.stateSlug}`} className="hover:text-primary-accent">{data.state}</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-dark font-medium">{data.name}</span>
        </nav>
      </div>
    </div>
  )
}
