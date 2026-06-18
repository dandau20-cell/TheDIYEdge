import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'DIY Guides & Home Improvement Tips — 2026',
  description: 'Expert DIY guides, cost breakdowns, and tool reviews for every home improvement project. Kitchen remodels, bathroom renovations, deck building, and more.',
  alternates: {
    canonical: 'https://www.thediyedge.com/blog',
  },
}

export default function BlogIndexPage() {
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="bg-site-bg">
      {/* Header */}
      <section className="bg-primary-dark text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-primary-accent text-xs font-semibold uppercase tracking-widest mb-3">
            DIY Guides & Resources
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">
            Home Improvement Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Honest, detailed guides to help you tackle every home improvement project — from cost breakdowns and tool reviews to strategy guides that help you decide when to DIY and when to hire a pro.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-border rounded-xl overflow-hidden hover:border-primary-accent hover:shadow-md transition-all no-underline"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary-accent/10 text-primary-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-primary-dark text-lg leading-snug mb-3 group-hover:text-primary-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted">{formatDate(post.date)}</time>
                  <span className="text-primary-accent text-sm font-semibold group-hover:underline">
                    Read guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Resources CTA */}
        <div className="mt-14 bg-primary-dark rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-extrabold mb-3">Get Your Free Cost Estimate</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Not sure what your project will cost? Get a free, personalized estimate based on your location and project details — no obligation, no spam.
          </p>
          <Link
            href="/offers/free-cost-calculator"
            className="inline-block bg-cta hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-lg transition-colors no-underline"
          >
            Get My Free Estimate
          </Link>
        </div>
      </div>
    </div>
  )
}
