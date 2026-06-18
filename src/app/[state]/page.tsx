import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { statesData, allStateSlugs } from '@/lib/states-data'
import { citiesData } from '@/lib/cities-data'
import EmailCapture from '@/components/EmailCapture'

interface Props {
  params: { state: string }
}

export async function generateStaticParams() {
  return allStateSlugs.map((slug) => ({ state: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = statesData[params.state]
  if (!data) return {}

  return {
    title: `Home Improvement Costs in ${data.name} — 2026 Guide`,
    description: `Get accurate 2026 cost estimates for kitchen remodels, bathroom renovations, and deck projects in ${data.name}. Local pricing data, DIY tips, and contractor guidance.`,
    alternates: {
      canonical: `https://www.thediyedge.com/${params.state}`,
    },
    openGraph: {
      title: `Home Improvement Costs in ${data.name} — 2026 Guide | TheDIYEdge`,
      description: `Accurate 2026 home improvement cost data for ${data.name} — kitchen, bathroom, deck, and more.`,
    },
  }
}

export default function StatePage({ params }: Props) {
  const data = statesData[params.state]
  if (!data) notFound()

  const stateCities = Object.values(citiesData).filter((c) => c.stateSlug === params.state)

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <div className="bg-site-bg">
      {/* Header */}
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-primary-accent text-xs font-semibold uppercase tracking-widest mb-3">
            2026 Cost Guide
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            Home Improvement Costs in {data.name} — 2026 Guide
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 py-12">

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
                  <th className="text-right px-5 py-4 text-sm font-semibold">Low Estimate</th>
                  <th className="text-right px-5 py-4 text-sm font-semibold">Average</th>
                  <th className="text-right px-5 py-4 text-sm font-semibold">High Estimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Kitchen Remodel</div>
                    <div className="text-xs text-muted">Mid-range, 150–250 sq ft</div>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.kitchenRemodel.min)}</td>
                  <td className="px-5 py-4 text-right">
                    <span className="bg-cta/10 text-cta font-bold text-sm px-2 py-0.5 rounded">
                      {formatCurrency(data.kitchenRemodel.avg)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.kitchenRemodel.max)}</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Bathroom Renovation</div>
                    <div className="text-xs text-muted">Mid-range, 40–80 sq ft</div>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.bathroomReno.min)}</td>
                  <td className="px-5 py-4 text-right">
                    <span className="bg-cta/10 text-cta font-bold text-sm px-2 py-0.5 rounded">
                      {formatCurrency(data.bathroomReno.avg)}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right text-sm">{formatCurrency(data.bathroomReno.max)}</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-primary-dark">Deck Construction</div>
                    <div className="text-xs text-muted">Per square foot, composite</div>
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
            * Cost estimates reflect 2026 data based on materials, labor, and permit costs typical for {data.name}. Actual costs vary by project scope, finish level, and local market conditions. Always get multiple bids from licensed contractors.
          </p>
        </section>

        {/* What Affects Costs */}
        <section className="mb-12 bg-white border border-border rounded-xl p-7">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-4">
            What Affects Home Improvement Costs in {data.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Labor Market',
                text: `Contractor availability and wage rates in ${data.name} directly impact your total project cost. Urban areas typically have more contractors to choose from but also higher labor rates.`,
              },
              {
                title: 'Material Costs & Access',
                text: `Proximity to major distribution hubs and lumber yards affects material pricing. Some regions of ${data.name} may face higher delivery charges for specialized materials.`,
              },
              {
                title: 'Permit Requirements',
                text: `Building permit requirements vary by municipality within ${data.name}. Always check local requirements — permit fees typically add $300–$2,000 to project costs and processing time.`,
              },
              {
                title: 'Climate Considerations',
                text: `${data.name}'s specific climate affects material choices and longevity. Climate-appropriate materials may cost more upfront but deliver better value over time.`,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="text-primary-accent text-lg mt-0.5 flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-primary-dark text-sm mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cities in state */}
        {stateCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-primary-dark mb-6">
              City-Level Guides in {data.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stateCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="bg-white border border-border rounded-xl p-5 hover:border-primary-accent hover:shadow-sm transition-all group no-underline"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-primary-dark group-hover:text-primary-accent transition-colors mb-1">
                        {city.name}
                      </h3>
                      <p className="text-xs text-muted">
                        Kitchen avg: {formatCurrency(city.kitchenRemodel.avg)} · Bathroom avg: {formatCurrency(city.bathroomReno.avg)}
                      </p>
                    </div>
                    <span className="text-primary-accent text-sm font-bold">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Other major cities mentioned in state data */}
        {data.cities.length > 0 && stateCities.length === 0 && (
          <section className="mb-12 bg-white border border-border rounded-xl p-7">
            <h2 className="text-2xl font-extrabold text-primary-dark mb-4">
              Major Markets in {data.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.cities.map((city) => (
                <span key={city} className="bg-primary-dark/5 text-primary-dark text-sm font-medium px-3 py-1.5 rounded-full">
                  {city}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mb-8">
          <EmailCapture
            title={`Get a Free Estimate for Your ${data.name} Project`}
            subtitle="Enter your email and we'll send you a personalized cost breakdown based on your specific location and project scope."
            buttonText="Get My Free Estimate"
            context={`state-page-${params.state}`}
          />
        </section>

        {/* Breadcrumb nav */}
        <nav className="text-sm text-muted">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-dark font-medium">{data.name} Cost Guide</span>
        </nav>
      </div>
    </div>
  )
}
